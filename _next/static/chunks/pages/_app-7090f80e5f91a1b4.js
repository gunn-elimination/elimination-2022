(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9316)}])},9624:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r=(0,n(7294).createContext)(null);r.Provider},9316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),a=(n(906),n(9008)),o=n(7294);function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 dark:text-white text-black w-5 block dark:hidden",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 dark:text-white text-black hidden dark:block",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})]})}var c=n(9624),i=n(1163);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function d(e){var t=e.Component,n=e.pageProps,s=(0,i.useRouter)();(0,o.useEffect)((function(){var e=s.query.token;e&&localStorage.setItem("token",e)}),[]);var d=function(){var e=(0,o.useState)(null),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=localStorage.getItem("currentUser");e&&n(JSON.parse(e)),fetch("https://api.gunnelimination.com/users/@me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){e.json().then((function(e){n(e),localStorage.setItem("currentUser",JSON.stringify(e))}))}))}),[]),t}();(0,o.useEffect)((function(){var e,t=JSON.parse(""+localStorage.getItem("gunnelimination:darkMode"))||!("gunnelimination:darkMode"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches;null===(e=document.body.parentElement)||void 0===e||e.classList.toggle("dark",t)}));var f=(0,o.useCallback)((function(){var e,t=""+(null===(e=document.body.parentElement)||void 0===e?void 0:e.classList.toggle("dark"));localStorage.setItem("gunnelimination:darkMode",t)}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:f,className:"absolute z-20 px-2 py-2 rounded-full hover:bg-rose-500/50 top-2 right-2",children:(0,r.jsx)(l,{})}),(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Gunn Elimination 2022"})}),(0,r.jsx)(c.S.Provider,{value:d,children:(0,r.jsxs)("div",{className:"w-full flex flex-row h-full dark:bg-gray-800 ",children:[(0,r.jsxs)("div",{className:"flex flex-col w-60 px-3 bg-gray-200/80",children:[(0,r.jsx)("h1",{className:"text-2xl font-extrabold text-center block tracking-wider my-8",children:"Elimination"}),(0,r.jsx)("hr",{className:"-mx-3 py-2 border-1 border-black/10"}),(0,r.jsx)("div",{className:"my-4 p-1 flex flex-col gap-1",children:[{name:"Games",path:"/app"},{name:"Settings",path:"/app/settings"}].map((function(e){var t=e.name,n=e.path;return(0,r.jsx)("a",{href:n,className:" text-center px-3 py-2  ".concat(s.route===n?"btn-primary":"bg-transparent text-black/80","  rounded-md"),children:t},n)}))})]}),(0,r.jsx)("div",{className:"flex flex-col grow overflow-auto w-full",children:(0,r.jsx)(t,u({},n))})]})})]})}},906:function(){},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);