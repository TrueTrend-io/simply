/*!
 * simply v0.4.1
 * Copyright 2023 GodoFredo <hello@godofredo.ninja> (https://github.com/godofredoninja/simply)
 * Licensed under GPL-3.0-or-later
 */!function a(o,i,r){function s(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return s(o[t][1][e]||e)},n,n.exports,a,o,i,r)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<r.length;e++)s(r[e]);return s}({1:[function(e,t,n){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],2:[function(e,t,n){var a="undefined"!=typeof window?window:{},o=function(a,f,i){"use strict";var m,h,e,p,T,o,v,t,d,W,r,R,B,n,F,s,u,y,g,z,b,C,P,E,$,H,U,I,l,c,Y,G,J,w,K,L,Q,V,X,_,A,M,x,Z,ee,te,ne,ae,S,oe,ie,re,se,k,N,D,le,q,ce,de,ue,O,fe,me,he,pe,ve,j,ye={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=a.lazySizesConfig||a.lazysizesConfig||{},ye)e in h||(h[e]=ye[e]);return f&&f.getElementsByClassName?(p=f.documentElement,T=a.HTMLPictureElement,v="getAttribute",t=a[o="addEventListener"].bind(a),d=a.setTimeout,W=a.requestAnimationFrame||d,r=a.requestIdleCallback,R=/^picture$/i,B=["load","error","lazyincluded","_lazyloaded"],n={},F=Array.prototype.forEach,s=function(e,t){return n[t]||(n[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),n[t].test(e[v]("class")||"")&&n[t]},u=function(e,t){s(e,t)||e.setAttribute("class",(e[v]("class")||"").trim()+" "+t)},y=function(e,t){(t=s(e,t))&&e.setAttribute("class",(e[v]("class")||"").replace(t," "))},g=function(t,n,e){var a=e?o:"removeEventListener";e&&g(t,n),B.forEach(function(e){t[a](e,n)})},z=function(e,t,n,a,o){var i=f.createEvent("Event");return(n=n||{}).instance=m,i.initEvent(t,!a,!o),i.detail=n,e.dispatchEvent(i),i},b=function(e,t){var n;!T&&(n=a.picturefill||h.pf)?(t&&t.src&&!e[v]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},P=function(e,t,n){for(n=n||e.offsetWidth;n<h.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},I=[],l=U=[],ze._lsFlush=ge,E=ze,c=function(n,e){return e?function(){E(n)}:function(){var e=this,t=arguments;E(function(){n.apply(e,t)})}},Y=function(e){function t(){var e=i.now()-a;e<99?d(t,99-e):(r||o)(o)}var n,a,o=function(){n=null,e()};return function(){a=i.now(),n=n||d(t,99)}},ie=/^img$/i,re=/^iframe$/i,se="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),D=-1,le=function(e){return(Z=null==Z?"hidden"==C(f.body,"visibility"):Z)||!("hidden"==C(e.parentNode,"visibility")&&"hidden"==C(e,"visibility"))},ee=Ce,ne=N=k=0,ae=h.throttleDelay,S=h.ricTimeout,oe=r&&49<S?function(){r(Ee,{timeout:S}),S!==h.ricTimeout&&(S=h.ricTimeout)}:c(function(){d(Ee)},!0),ce=c(we),de=function(e){ce({target:e.target})},ue=c(function(t,e,n,a,o){var i,r,s,l,c;(r=z(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?u(t,h.autosizesClass):t.setAttribute("sizes",a)),n=t[v](h.srcsetAttr),a=t[v](h.srcAttr),o&&(i=(l=t.parentNode)&&R.test(l.nodeName||"")),s=e.firesLoad||"src"in t&&(n||a||i),r={target:t},u(t,h.loadingClass),s&&(clearTimeout(K),K=d(be,2500),g(t,de,!0)),i&&F.call(l.getElementsByTagName("source"),Le),n?t.setAttribute("srcset",n):a&&!i&&(re.test(t.nodeName)?(e=a,0==(c=(l=t).getAttribute("data-load-mode")||h.iframeLoadMode)?l.contentWindow.location.replace(e):1==c&&(l.src=e)):t.src=a),o&&(n||i)&&b(t,{src:a})),t._lazyRace&&delete t._lazyRace,y(t,h.lazyClass),E(function(){var e=t.complete&&1<t.naturalWidth;s&&!e||(e&&u(t,h.fastLoadedClass),we(r),t._lazyCache=!0,d(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&N--},!0)}),fe=Y(function(){h.loadMode=3,q()}),G={_:function(){Q=i.now(),m.elements=f.getElementsByClassName(h.lazyClass),J=f.getElementsByClassName(h.lazyClass+" "+h.preloadClass),t("scroll",q,!0),t("resize",q,!0),t("pageshow",function(e){var t;e.persisted&&(t=f.querySelectorAll("."+h.loadingClass)).length&&t.forEach&&W(function(){t.forEach(function(e){e.complete&&O(e)})})}),a.MutationObserver?new MutationObserver(q).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p[o]("DOMNodeInserted",q,!0),p[o]("DOMAttrModified",q,!0),setInterval(q,999)),t("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[o](e,q,!0)}),/d$|^c/.test(f.readyState)?Ae():(t("load",Ae),f[o]("DOMContentLoaded",q),d(Ae,2e4)),m.elements.length?(Ce(),E._lsFlush()):q()},checkElems:q=function(e){var t;(e=!0===e)&&(S=33),te||(te=!0,(t=ae-(i.now()-ne))<0&&(t=0),e||t<9?oe():d(oe,t))},unveil:O=function(e){var t,n,a,o;e._lazyRace||!(!(o="auto"==(a=(n=ie.test(e.nodeName))&&(e[v](h.sizesAttr)||e[v]("sizes"))))&&w||!n||!e[v]("src")&&!e.srcset||e.complete||s(e,h.errorClass))&&s(e,h.lazyClass)||(t=z(e,"lazyunveilread").detail,o&&me.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,N++,ue(e,t,o,a,n))},_aLSL:_e},pe=c(function(e,t,n,a){var o,i,r;if(e._lazysizesWidth=a,e.setAttribute("sizes",a+="px"),R.test(t.nodeName||""))for(i=0,r=(o=t.getElementsByTagName("source")).length;i<r;i++)o[i].setAttribute("sizes",a);n.detail.dataAttr||b(e,n.detail)}),me={_:function(){he=f.getElementsByClassName(h.autosizesClass),t("resize",ve)},checkElems:ve=Y(function(){var e,t=he.length;if(t)for(e=0;e<t;e++)Me(he[e])}),updateElem:Me},j=function(){!j.i&&f.getElementsByClassName&&(j.i=!0,me._(),G._())},d(function(){h.init&&j()}),m={cfg:h,autoSizer:me,loader:G,init:j,uP:b,aC:u,rC:y,hC:s,fire:z,gW:P,rAF:E}):{init:function(){},cfg:h,noSupport:!0};function ge(){var e=l;for(l=U.length?I:U,H=!($=!0);e.length;)e.shift()();$=!1}function ze(e,t){$&&!t?e.apply(this,arguments):(l.push(e),H||(H=!0,(f.hidden?d:W)(ge)))}function be(e){N--,e&&!(N<0)&&e.target||(N=0)}function Ce(){var e,t,n,a,o,i,r,s,l,c,d,u=m.elements;if((L=h.loadMode)&&N<8&&(e=u.length)){for(t=0,D++;t<e;t++)if(u[t]&&!u[t]._lazyRace)if(!se||m.prematureUnveil&&m.prematureUnveil(u[t]))O(u[t]);else if((r=u[t][v]("data-expand"))&&(o=+r)||(o=k),l||(l=!h.expand||h.expand<1?500<p.clientHeight&&500<p.clientWidth?500:370:h.expand,c=(m._defEx=l)*h.expFactor,d=h.hFac,Z=null,k<c&&N<1&&2<D&&2<L&&!f.hidden?(k=c,D=0):k=1<L&&1<D&&N<6?l:0),s!==o&&(V=innerWidth+o*d,X=innerHeight+o,i=-1*o,s=o),c=u[t].getBoundingClientRect(),(x=c.bottom)>=i&&(_=c.top)<=X&&(M=c.right)>=i*d&&(A=c.left)<=V&&(x||M||A||_)&&(h.loadHidden||le(u[t]))&&(w&&N<3&&!r&&(L<3||D<4)||function(e,t){var n,a=e,o=le(e);for(_-=t,x+=t,A-=t,M+=t;o&&(a=a.offsetParent)&&a!=f.body&&a!=p;)(o=0<(C(a,"opacity")||1))&&"visible"!=C(a,"overflow")&&(n=a.getBoundingClientRect(),o=M>n.left&&A<n.right&&x>n.top-1&&_<n.bottom+1);return o}(u[t],o))){if(O(u[t]),a=!0,9<N)break}else!a&&w&&!n&&N<4&&D<4&&2<L&&(J[0]||h.preloadAfterLoad)&&(J[0]||!r&&(x||M||A||_||"auto"!=u[t][v](h.sizesAttr)))&&(n=J[0]||u[t]);n&&!a&&O(n)}}function Ee(){te=!1,ne=i.now(),ee()}function we(e){var t=e.target;t._lazyCache?delete t._lazyCache:(be(e),u(t,h.loadedClass),y(t,h.loadingClass),g(t,de),z(t,"lazyloaded"))}function Le(e){var t,n=e[v](h.srcsetAttr);(t=h.customMedia[e[v]("data-media")||e[v]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)}function _e(){3==h.loadMode&&(h.loadMode=2),fe()}function Ae(){w||(i.now()-Q<999?d(Ae,999):(w=!0,h.loadMode=3,q(),t("scroll",_e,!0)))}function Me(e,t,n){var a=e.parentNode;a&&(n=P(e,a,n),(t=z(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=t.detail.width)&&n!==e._lazysizesWidth&&pe(e,a,t,n))}};o=o(a,a.document,Date),a.lazySizes=o,"object"==typeof t&&t.exports&&(t.exports=o)},{}],3:[function(e,t,n){"use strict";var a=e("@babel/runtime/helpers/interopRequireDefault"),s=(e("lazysizes"),a(e("./util/url-regular-expression"))),l=a(e("./util/document-query-selector-all"));document.addEventListener("DOMContentLoaded",()=>{const t=document.documentElement,n=document.body;if("object"==typeof menuDropdown&&null!==menuDropdown){const a=document.querySelector(".js-dropdown-menu");a&&Object.entries(menuDropdown).forEach(e=>{var t,[e,n]=e;"string"!==e&&!(0,s.default)(n)||((t=document.createElement("a")).href=n,t.classList="dropdown-item block py-2 leading-tight px-5 hover:text-primary",t.innerText=e,a.appendChild(t))})}"object"==typeof followSocialMedia&&null!==followSocialMedia&&(e=(0,l.default)(".js-social-media")).length&&e.forEach(o=>{Object.entries(followSocialMedia).forEach(e=>{var t,[e,n]=e,a=n[0];(0,s.default)(a)&&((t=document.createElement("a")).href=a,t.title=n[1],t.classList="p-2 inline-block hover:opacity-70",t.target="_blank",t.rel="noopener noreferrer",t.innerHTML=`<svg class="icon"><use xlink:href="#icon-${e}"></use></svg>`,o.appendChild(t))})});{const o=n.closest(".has-cover"),i=document.querySelector(".js-header");i&&window.addEventListener("scroll",()=>{var e=window.scrollY;5<e?i?.classList?.add("shadow-header","header-bg"):i?.classList?.remove("shadow-header","header-bg"),o&&(20<=e?n.classList.remove("is-head-transparent"):n.classList.add("is-head-transparent"))},{passive:!0})}var e;(e=(0,l.default)(".js-dark-mode")).length&&e.forEach(e=>e.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("dark")?(t.classList.remove("dark"),localStorage.theme="light"):(t.classList.add("dark"),localStorage.theme="dark")}));{const r=(0,l.default)(".dropdown:not(.is-hoverable)");r.length&&(r.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),n.classList.remove("has-menu")})}),document.addEventListener("click",()=>r.forEach(function(e){e.classList.remove("is-active")})))}document.querySelector(".js-menu-toggle").addEventListener("click",function(e){e.preventDefault(),n.classList.toggle("has-menu")})})},{"./util/document-query-selector-all":4,"./util/url-regular-expression":5,"@babel/runtime/helpers/interopRequireDefault":1,lazysizes:2}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(t.querySelectorAll(e),0)}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=e=>/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/.test(e)},{}]},{},[3]);