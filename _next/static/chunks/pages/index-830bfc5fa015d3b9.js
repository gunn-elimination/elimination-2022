(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4265)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(l){u=!0,a=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},u=t(6273),l=t(387),c=t(7190);var s={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),o=i.default.useMemo((function(){var n=a(u.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?u.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),d=o.href,p=o.as,v=e.children,m=e.replace,h=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,x=a(c.useIntersection({rootMargin:"200px"}),2),w=x[0],E=x[1],j=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=E&&t&&u.isLocalURL(d),n="undefined"!==typeof g?g:r&&r.locale,a=s[d+"%"+p+(n?"%"+n:"")];e&&!a&&f(r,d,p,{locale:n})}),[p,d,E,g,t,r]);var C={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}))}(e,r,d,p,m,h,y,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var T="undefined"!==typeof g?g:r&&r.locale,S=r&&r.isLocaleDomain&&u.getDomainLocale(p,T,r&&r.locales,r&&r.domainLocales);C.href=S||u.addBasePath(u.addLocale(p,T,r&&r.defaultLocale))}return i.default.cloneElement(n,C)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(l){u=!0,a=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!u,c=o.useRef(),s=a(o.useState(!1),2),f=s[0],d=s[1],p=a(o.useState(n?n.current:null),2),v=p[0],m=p[1],h=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:t}))}),[r,v,t,f]);return o.useEffect((function(){if(!u&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){n&&m(n.current)}),[n]),[h,f]};var o=t(7294),i=t(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},4265:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var r,a,o=t(5893),i=t(7294);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function f(e,n){if(e in n){for(var t=n[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return"function"===typeof t?t.apply(void 0,a):t}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,f),i}function d(e){var n=e.props,t=e.slot,o=e.defaultTag,i=e.features,c=e.visible,s=void 0===c||c,d=e.name;if(s)return p(n,t,o,d);var v=null!=i?i:r.None;if(v&r.Static){var m=n.static,h=void 0!==m&&m,y=l(n,["static"]);if(h)return p(y,t,o,d)}if(v&r.RenderStrategy){var g,b=n.unmount,x=void 0===b||b,w=l(n,["unmount"]);return f(x?a.Unmount:a.Hidden,((g={})[a.Unmount]=function(){return null},g[a.Hidden]=function(){return p(u({},w,{hidden:!0,style:{display:"none"}}),t,o,d)},g))}return p(n,t,o,d)}function p(e,n,t,r){var a;void 0===n&&(n={});var o=v(e,["unmount","static"]),u=o.as,c=void 0===u?t:u,f=o.children,d=o.refName,p=void 0===d?"ref":d,m=l(o,["as","children","refName"]),h=void 0!==e.ref?((a={})[p]=e.ref,a):{},y="function"===typeof f?f(n):f;if(m.className&&"function"===typeof m.className&&(m.className=m.className(n)),c===i.Fragment&&Object.keys(m).length>0){if(!(0,i.isValidElement)(y)||Array.isArray(y)&&y.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(m).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(y,Object.assign({},function(e,n,t){for(var r,a=Object.assign({},e),o=function(){var t,o=r.value;void 0!==e[o]&&void 0!==n[o]&&Object.assign(a,((t={})[o]=function(t){t.defaultPrevented||e[o](t),t.defaultPrevented||n[o](t)},t))},i=s(t);!(r=i()).done;)o();return a}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(v(m,["ref"])),y.props,["onClick"]),h))}return(0,i.createElement)(c,Object.assign({},v(m,["ref"]),c!==i.Fragment&&h),y)}function v(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),a=s(n);!(t=a()).done;){var o=t.value;o in r&&delete r[o]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={}));var m="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,h={serverHandoffComplete:!1};function y(){var e=(0,i.useState)(h.serverHandoffComplete),n=e[0],t=e[1];return(0,i.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,i.useEffect)((function(){!1===h.serverHandoffComplete&&(h.serverHandoffComplete=!0)}),[]),n}var g=0;function b(){return++g}var x,w,E=(0,i.createContext)(null);function j(){return(0,i.useContext)(E)}function C(e){var n=e.value,t=e.children;return i.createElement(E.Provider,{value:n},t)}function T(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=s(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function S(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function O(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function A(e,n,t,r,a,o){var i=T(),u=void 0!==o?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(o):function(){};return O.apply(void 0,[e].concat(a)),S.apply(void 0,[e].concat(n,t)),i.nextFrame((function(){O.apply(void 0,[e].concat(t)),S.apply(void 0,[e].concat(r)),i.add(function(e,n){var t=T();if(!e)return t.dispose;var r=getComputedStyle(e),a=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),o=a[0],i=a[1];return 0!==o?t.setTimeout((function(){n(w.Finished)}),o+i):n(w.Finished),t.add((function(){return n(w.Cancelled)})),t.dispose}(e,(function(t){return O.apply(void 0,[e].concat(r,n)),S.apply(void 0,[e].concat(a)),u(t)})))})),i.add((function(){return O.apply(void 0,[e].concat(n,t,r,a))})),i.add((function(){return u(w.Cancelled)})),i.dispose}function N(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}E.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(x||(x={})),function(e){e.Finished="finished",e.Cancelled="cancelled"}(w||(w={}));var F,k=(0,i.createContext)(null);k.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(F||(F={}));var L=(0,i.createContext)(null);function H(e){return"children"in e?H(e.children):e.current.filter((function(e){return e.state===F.Visible})).length>0}function R(e){var n=(0,i.useRef)(e),t=(0,i.useRef)([]),r=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,i.useEffect)((function(){n.current=e}),[e]);var o=(0,i.useCallback)((function(e,o){var i;void 0===o&&(o=a.Hidden);var u=t.current.findIndex((function(n){return n.id===e}));-1!==u&&(f(o,((i={})[a.Unmount]=function(){t.current.splice(u,1)},i[a.Hidden]=function(){t.current[u].state=F.Hidden},i)),!H(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),u=(0,i.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==F.Visible&&(n.state=F.Visible):t.current.push({id:e,state:F.Visible}),function(){return o(e,a.Unmount)}}),[t,o]);return(0,i.useMemo)((function(){return{children:t,register:u,unregister:o}}),[u,o,t])}function M(){}L.displayName="NestingContext";var I=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function _(e){for(var n,t={},r=s(I);!(n=r()).done;){var a,o=n.value;t[o]=null!=(a=e[o])?a:M}return t}var V=r.RenderStrategy;function P(e){var n,t=e.beforeEnter,r=e.afterEnter,o=e.beforeLeave,c=e.afterLeave,s=e.enter,p=e.enterFrom,v=e.enterTo,h=e.entered,g=e.leave,E=e.leaveFrom,j=e.leaveTo,T=l(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),S=(0,i.useRef)(null),O=(0,i.useState)(F.Visible),M=O[0],I=O[1],P=T.unmount?a.Unmount:a.Hidden,U=function(){var e=(0,i.useContext)(k);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),D=U.show,q=U.appear,G=U.initial,K=function(){var e=(0,i.useContext)(L);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),$=K.register,z=K.unregister,B=function(){var e=y(),n=(0,i.useState)(e?b:null),t=n[0],r=n[1];return m((function(){null===t&&r(b())}),[t]),null!=t?""+t:void 0}(),X=(0,i.useRef)(!1),W=R((function(){X.current||(I(F.Hidden),z(B),re.current.afterLeave())}));m((function(){if(B)return $(B)}),[$,B]),m((function(){var e;P===a.Hidden&&B&&(D&&M!==F.Visible?I(F.Visible):f(M,((e={})[F.Hidden]=function(){return z(B)},e[F.Visible]=function(){return $(B)},e)))}),[M,B,$,z,D,P]);var Y=N(s),J=N(p),Q=N(v),Z=N(h),ee=N(g),ne=N(E),te=N(j),re=function(e){var n=(0,i.useRef)(_(e));return(0,i.useEffect)((function(){n.current=_(e)}),[e]),n}({beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:c}),ae=y();(0,i.useEffect)((function(){if(ae&&M===F.Visible&&null===S.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[S,M,ae]);var oe=G&&!q;m((function(){var e=S.current;if(e&&!oe)return X.current=!0,D&&re.current.beforeEnter(),D||re.current.beforeLeave(),D?A(e,Y,J,Q,Z,(function(e){X.current=!1,e===w.Finished&&re.current.afterEnter()})):A(e,ee,ne,te,Z,(function(e){X.current=!1,e===w.Finished&&(H(W)||(I(F.Hidden),z(B),re.current.afterLeave()))}))}),[re,B,X,z,W,S,oe,D,Y,J,Q,ee,ne,te]);var ie={ref:S},ue=T;return i.createElement(L.Provider,{value:W},i.createElement(C,{value:f(M,(n={},n[F.Visible]=x.Open,n[F.Hidden]=x.Closed,n))},d({props:u({},ue,ie),defaultTag:"div",features:V,visible:M===F.Visible,name:"Transition.Child"})))}function U(e){var n,t=e.show,r=e.appear,a=void 0!==r&&r,o=e.unmount,c=l(e,["show","appear","unmount"]),s=j();void 0===t&&null!==s&&(t=f(s,((n={})[x.Open]=!0,n[x.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var p=(0,i.useState)(t?F.Visible:F.Hidden),v=p[0],m=p[1],h=R((function(){m(F.Hidden)})),y=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}(),g=(0,i.useMemo)((function(){return{show:t,appear:a||!y,initial:y}}),[t,a,y]);(0,i.useEffect)((function(){t?m(F.Visible):H(h)||m(F.Hidden)}),[t,h]);var b={unmount:o};return i.createElement(L.Provider,{value:h},i.createElement(k.Provider,{value:g},d({props:u({},b,{as:i.Fragment,children:i.createElement(P,Object.assign({},b,c))}),defaultTag:i.Fragment,features:V,visible:v===F.Visible,name:"Transition"})))}U.Child=function(e){var n=null!==(0,i.useContext)(k),t=null!==j();return!n&&t?i.createElement(U,Object.assign({},e)):i.createElement(P,Object.assign({},e))},U.Root=U;var D=t(1664);function q(e){var n=e.name,t=e.href,r=e.icon,a=e.img,i=e.children;return(0,o.jsx)(D.default,{href:t,children:(0,o.jsxs)("div",{className:"h-full hoverCard p-4 text-left text-black transition-shadow duration-150 ease-in-out bg-white rounded-lg shadow-lg dark:bg-zinc-800 dark:text-white hover:shadow-xl basis-[20rem]",children:[(0,o.jsxs)("span",{className:"flex items-center gap-3 mb-3",children:[(0,o.jsx)("img",{src:r,alt:n,className:"h-8 rounded-full"}),(0,o.jsx)("h3",{className:"text-3xl font-bold",children:n})]}),a&&(0,o.jsx)("img",{src:a,alt:n,className:"mb-3 rounded-md outline outline-1 outline-gray-300/50"}),(0,o.jsx)("p",{children:i})]})})}var G=t(9624);function K(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useContext)(G.S);return(0,i.useEffect)((function(){t(!0)}),[]),(0,o.jsx)("div",{className:"w-full h-full px-5 brick overflow-auto",children:(0,o.jsxs)("main",{className:"pt-24 text-center",children:[(0,o.jsx)(U,{show:n,enter:"ease-out duration-500 delay-300",enterFrom:"opacity-0 scale-0",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0 scale-0",children:(0,o.jsx)("h1",{className:"font-bold text-transparent mb-1 md:text-5xl text-9xl bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-red-500 animate-gradient-slow",children:"Elimination"})}),(0,o.jsx)(U,{show:n,enter:"ease-out duration-[1500ms] delay-[800ms]",enterFrom:"opacity-0 -translate-y-full",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)("p",{className:"mb-6 md:text-base text-lg",children:"Welcome to Gunn Elimination, 2022. It's kill or be killed."})}),r?(0,o.jsx)("div",{className:"flex items-center justify-center gap-4 mb-16 text-xl font-bold",children:(0,o.jsx)(U,{show:n,enter:"ease-out duration-500 delay-[1200ms]",enterFrom:"opacity-0 scale-0 -translate-y-full",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0 scale-0",children:(0,o.jsx)("a",{href:"/app",className:"btn-primary",children:"Play"})})}):(0,o.jsxs)("div",{className:"flex items-center justify-center gap-4 mb-16 text-xl font-bold",children:[(0,o.jsx)(U,{show:n,enter:"ease-out duration-500 delay-[1200ms]",enterFrom:"opacity-0 scale-0 -translate-y-full",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0 scale-0",children:(0,o.jsx)("a",{href:"/signup",className:"btn-primary",children:"Sign up"})}),(0,o.jsx)(U,{show:n,enter:"ease-out duration-500 delay-[1200ms]",enterFrom:"opacity-0 scale-0 -translate-y-full",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0 scale-0",children:(0,o.jsx)("a",{href:"/login",children:"Log in"})})]}),(0,o.jsx)("p",{className:"mb-4",children:"Alternatively, play on your Gunn Application of choice:"}),(0,o.jsxs)("section",{className:"flex flex-wrap justify-center pointer-events-none group",children:[(0,o.jsx)(q,{name:"Gunn.One",href:"https://gunn.one/app/elimination",icon:"/apps/gunn-one.png",img:"/apps/disadus-dark.png",children:"Everything at Gunn, all in One! No login required."}),(0,o.jsx)(q,{name:"Disadus",href:"https://disadus.app",icon:"/apps/disadus.png",img:"/apps/disadus-dark.png",children:"Have you heard of Disadus?"}),!1]})]})})}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);