// Service Worker for Aksorn SmartPPT PWA
const CACHE_NAME = 'smartppt-shell-v2';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/apple-touch-icon.png',
    '/apple-touch-icon-180x180.png',
    '/assets/icons/icon-192.png',
    '/assets/icons/icon-512.png',
    '/assets/icons/icon-maskable-512.png',
    '/favicon.png',
    '/favicon.ico'
];

// CDNs that power the PDF reader and interface
const CDN_ASSETS = [
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700;800&family=Prompt:wght@400;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Cache core local shell
            try {
                await cache.addAll(STATIC_ASSETS);
            } catch (err) {
                console.warn('Pre-cache static error:', err);
            }
            // Cache CDNs non-blocking
            CDN_ASSETS.forEach(url => {
                fetch(url, { mode: 'cors' })
                    .then(res => {
                        if (res.ok) cache.put(url, res);
                    })
                    .catch(() => {});
            });
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    const url = new URL(req.url);

    // Skip non-GET requests and Range requests (PDF.js handles byte-ranges via IndexedDB or direct streaming)
    if (req.method !== 'GET' || req.headers.has('range')) {
        return;
    }

    // 1. Navigation requests (HTML document): Network-First with Cache fallback
    if (req.mode === 'navigate' || (req.headers.get('accept') && req.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(req)
                .then((networkRes) => {
                    if (networkRes && networkRes.ok) {
                        const copy = networkRes.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
                    }
                    return networkRes;
                })
                .catch(async () => {
                    // Offline fallback: serve cached index.html
                    const cache = await caches.open(CACHE_NAME);
                    const cached = await cache.match('/index.html') || await cache.match('/');
                    return cached || new Response('Offline: SmartPPT is available from cache.', {
                        headers: { 'Content-Type': 'text/html; charset=utf-8' }
                    });
                })
        );
        return;
    }

    // 2. Static CDN or App Assets: Stale-While-Revalidate
    if (
        url.origin === location.origin ||
        url.hostname.includes('cdnjs.cloudflare.com') ||
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com')
    ) {
        event.respondWith(
            caches.match(req).then((cached) => {
                const fetchPromise = fetch(req).then((networkRes) => {
                    if (networkRes && networkRes.ok) {
                        const copy = networkRes.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
                    }
                    return networkRes;
                }).catch(() => null);

                return cached || fetchPromise;
            })
        );
        return;
    }

    // Default network fetch
    event.respondWith(fetch(req));
});
