!function(e,n,s){function t(e,n){return typeof e===n}function o(){var e,n,s,o,a,i,l;for(var c in f)if(f.hasOwnProperty(c)){if(e=[],n=f[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(o=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),r.push((o?"":"no-")+l.join("-"))}}function a(e){var n=c.className,s=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(t,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),u?c.className.baseVal=n:c.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var r=[],f=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){f.push({name:e,fn:n,options:s})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var c=n.documentElement,u="svg"===c.nodeName.toLowerCase();Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var p="Moz O ms Webkit",d=l._config.usePrefixes?p.split(" "):[];l._cssomPrefixes=d;var m=function(n){var t,o=g.length,a=e.CSSRule;if("undefined"==typeof a)return s;if(!n)return!1;if(n=n.replace(/^@/,""),t=n.replace(/-/g,"_").toUpperCase()+"_RULE",t in a)return"@"+n;for(var i=0;o>i;i++){var r=g[i],f=r.toUpperCase()+"_"+t;if(f in a)return"@-"+r.toLowerCase()+"-"+n}return!1};l.atRule=m;var g=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];l._prefixes=g,o(),a(r),delete l.addTest,delete l.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self;function c(){var b=a.navigator;return b&&(b=b.userAgent)?b:""}function d(b){return-1!=c().indexOf(b)};function e(){return d("iPhone")&&!d("iPod")&&!d("iPad")};function f(){return d("Firefox")||d("FxiOS")}function g(){return(d("Chrome")||d("CriOS"))&&!d("Edge")||d("Silk")};var k=d("Opera"),l=d("Trident")||d("MSIE"),m=d("Edge"),n=d("Gecko")&&!(-1!=c().toLowerCase().indexOf("webkit")&&!d("Edge"))&&!(d("Trident")||d("MSIE"))&&!d("Edge"),p=-1!=c().toLowerCase().indexOf("webkit")&&!d("Edge"),q;
a:{var r="",t=function(){var b=c();if(n)return/rv:([^\);]+)(\)|;)/.exec(b);if(m)return/Edge\/([\d\.]+)/.exec(b);if(l)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);if(p)return/WebKit\/(\S+)/.exec(b);if(k)return/(?:Version)[ \/]?(\S+)/.exec(b)}();t&&(r=t?t[1]:"");if(l){var u,v=a.document;u=v?v.documentMode:void 0;if(null!=u&&u>parseFloat(r)){q=String(u);break a}}q=r};var w=f(),x=e()||d("iPod"),y=d("iPad"),z=d("Android")&&!(g()||f()||d("Opera")||d("Silk")),A=g(),B=d("Safari")&&!(g()||d("Coast")||d("Opera")||d("Edge")||d("Edg/")||d("OPR")||f()||d("Silk")||d("Android"))&&!(e()||d("iPad")||d("iPod"));function C(b){return(b=b.exec(c()))?b[1]:""}var D=function(){if(w)return C(/Firefox\/([0-9.]+)/);if(l||m||k)return q;if(A){if(e()||d("iPad")||d("iPod")||d("Macintosh")){var b=C(/CriOS\/([0-9.]+)/);if(b)return b}return C(/Chrome\/([0-9.]+)/)}if(B&&!(e()||d("iPad")||d("iPod")))return C(/Version\/([0-9.]+)/);if(x||y){if(b=/Version\/(\S+).*Mobile\/(\S+)/.exec(c()))return b[1]+"."+b[2]}else if(z)return(b=C(/Android\s+([0-9.]+)/))?b:C(/Version\/([0-9.]+)/);return""}();function E(b){var h;(h=!Modernizr.inlinesvg||l)||(h=parseInt(D,10),h=B&&14>h);return h?(location.replace(b+window.location.search),!0):!1}var F=["ispring","compatibility","performRedirectIfNeeded"],G=a;F[0]in G||"undefined"==typeof G.execScript||G.execScript("var "+F[0]);for(var H;F.length&&(H=F.shift());)F.length||void 0===E?G=G[H]&&G[H]!==Object.prototype[H]?G[H]:G[H]={}:G[H]=E;E("data/html5-unsupported.html");window.onerror=function(){return!0};a.console||(window._log="",a.console={log:function(b){window._log+="\n"+b},warn:function(b){window._log+="\nwarn: "+b},error:function(b){window._log+="\nerror: "+b}});})();



/* === iSpring Sliders Touch Scroll Polyfill for iPad / Touch Devices === */
(function() {
    if (window.__ispringSlidersTouchScrollInitialized) return;
    window.__ispringSlidersTouchScrollInitialized = true;

    function injectTouchStyles() {
        if (document.getElementById('ispring-sliders-touch-styles')) return;
        var style = document.createElement('style');
        style.id = 'ispring-sliders-touch-styles';
        style.textContent = [
            '.outline-info-panel, .outline-info-panel__outline-container, .universal-side-panel,',
            '.treecontrol, .treecontrol > div, .slide-item-view, .vertical-scrollbar, .scroll-area {',
            '    touch-action: pan-y !important;',
            '    -webkit-overflow-scrolling: touch !important;',
            '}',
            '.treecontrol, .treecontrol > div:first-child, .outline-info-panel .outline, .outline-info-panel__outline-container {',
            '    overflow-y: auto !important;',
            '}',
            '.treecontrol::-webkit-scrollbar, .treecontrol > div::-webkit-scrollbar,',
            '.outline-info-panel::-webkit-scrollbar, .universal-side-panel::-webkit-scrollbar {',
            '    display: none !important;',
            '    width: 0 !important;',
            '    height: 0 !important;',
            '}',
            '.treecontrol, .treecontrol > div, .outline-info-panel, .universal-side-panel {',
            '    scrollbar-width: none !important;',
            '    -ms-overflow-style: none !important;',
            '}'
        ].join('\n');
        (document.head || document.documentElement).appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectTouchStyles);
    } else {
        injectTouchStyles();
    }

    var startY = 0, startX = 0, lastY = 0, lastTime = 0, velocity = 0;
    var isDragging = false, activeScroller = null, animId = null;

    function findScroller(startEl) {
        if (!startEl) return null;
        var el = startEl;
        while (el && el !== document.body && el !== document.documentElement) {
            if (el.scrollHeight > el.clientHeight + 5 && (el.classList.contains('treecontrol') || el.closest('.treecontrol') || el.closest('.outline-info-panel') || el.closest('.universal-side-panel'))) {
                return el;
            }
            el = el.parentElement;
        }
        var tc = startEl.closest('.treecontrol') || document.querySelector('.treecontrol');
        if (tc) {
            var slide = tc.querySelector('.slide-item-view');
            if (slide && slide.parentElement && slide.parentElement.parentElement) {
                return slide.parentElement.parentElement;
            }
            if (slide && slide.parentElement) return slide.parentElement;
            return tc.firstElementChild || tc;
        }
        return startEl.closest('.outline, .outline-info-panel, .universal-side-panel');
    }

    function isOutlineTarget(target) {
        if (!target) return false;
        return !!target.closest(
            '.outline-info-panel, .universal-side-panel, .treecontrol, .slide-item-view, ' +
            '.universal-tablet-layout_left-panel, [class*="outline"], [class*="side-panel"]'
        );
    }

    function dispatchSyntheticWheel(target, deltaY) {
        if (!target) return;
        var wheelEvt = new Event('mousewheel', { bubbles: true, cancelable: true });
        var wDelta = deltaY * 2.5;
        Object.defineProperty(wheelEvt, 'wheelDelta', { value: wDelta, writable: true });
        Object.defineProperty(wheelEvt, 'wheelDeltaY', { value: wDelta, writable: true });
        Object.defineProperty(wheelEvt, 'detail', { value: -deltaY / 30, writable: true });
        target.dispatchEvent(wheelEvt);
    }

    window.addEventListener('touchstart', function(e) {
        if (e.touches.length !== 1) return;
        if (!isOutlineTarget(e.target)) return;

        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }

        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
        lastY = startY;
        lastTime = Date.now();
        velocity = 0;
        isDragging = false;
        activeScroller = findScroller(e.target);
    }, { capture: true, passive: true });

    window.addEventListener('touchmove', function(e) {
        if (e.touches.length !== 1) return;
        if (!activeScroller && !isOutlineTarget(e.target)) return;
        if (!activeScroller) {
            activeScroller = findScroller(e.target);
        }

        var currentY = e.touches[0].clientY;
        var currentX = e.touches[0].clientX;
        var dy = currentY - lastY;
        var totalDy = currentY - startY;
        var totalDx = currentX - startX;

        if (!isDragging) {
            if (Math.abs(totalDy) > 6 && Math.abs(totalDy) > Math.abs(totalDx)) {
                isDragging = true;
            }
        }

        if (isDragging) {
            if (e.cancelable) {
                e.preventDefault();
            }
            e.stopPropagation();

            var now = Date.now();
            var dt = Math.max(1, now - lastTime);
            velocity = (dy / dt) * 15;
            lastY = currentY;
            lastTime = now;

            if (activeScroller) {
                activeScroller.scrollTop -= dy;
                activeScroller.dispatchEvent(new Event('scroll', { bubbles: false }));
            }

            var tc = (e.target && e.target.closest) ? (e.target.closest('.treecontrol') || document.querySelector('.treecontrol')) : document.querySelector('.treecontrol');
            if (tc && tc !== activeScroller) {
                tc.scrollTop -= dy;
                tc.dispatchEvent(new Event('scroll', { bubbles: false }));
            }

            dispatchSyntheticWheel(activeScroller || e.target, dy);
        }
    }, { capture: true, passive: false });

    window.addEventListener('touchend', function(e) {
        if (!isDragging) return;

        function stopClick(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            window.removeEventListener('click', stopClick, true);
        }
        window.addEventListener('click', stopClick, true);
        setTimeout(function() {
            window.removeEventListener('click', stopClick, true);
        }, 350);

        if (Math.abs(velocity) > 1 && activeScroller) {
            var currentVel = velocity;
            function inertiaStep() {
                if (Math.abs(currentVel) < 0.5) return;
                currentVel *= 0.92;
                if (activeScroller) {
                    activeScroller.scrollTop -= currentVel;
                    activeScroller.dispatchEvent(new Event('scroll', { bubbles: false }));
                }
                dispatchSyntheticWheel(activeScroller, currentVel);
                animId = requestAnimationFrame(inertiaStep);
            }
            animId = requestAnimationFrame(inertiaStep);
        }

        isDragging = false;
        activeScroller = null;
    }, { capture: true, passive: true });

    window.addEventListener('touchcancel', function() {
        isDragging = false;
        activeScroller = null;
        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }
    }, { capture: true, passive: true });
})();
