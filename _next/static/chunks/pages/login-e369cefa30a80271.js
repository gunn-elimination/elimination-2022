(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7237:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(9729)}])},4296:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(0,r.jsx)("svg",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}))}function c(e){return(0,r.jsxs)("div",{className:"rounded-md flex flex-row text-red-500 bg-red-500/20 py-2 px-3",children:[(0,r.jsx)(s,{className:"my-auto mr-2 h-5 w-5"}),e.message]})}},2548:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(0,r.jsx)("input",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},e,{className:"px-3 text-sm py-2 caret-rose-600 focus:outline-none rounded-md dark:bg-white/10 dark:placeholder:text-white/40 placeholder:text-gray-800/40 bg-white/40  ".concat(e.className)}))}},9729:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(4051),a=t.n(r),s=t(5893),c=t(7294),o=t(4296),l=t(2548);function i(e,n,t,r,a,s,c){try{var o=e[s](c),l=o.value}catch(i){return void t(i)}o.done?n(l):Promise.resolve(l).then(r,a)}function u(){var e,n=["email","password"],t=(0,c.useState)(""),r=t[0],u=t[1],d=(0,c.useState)(""),f=d[0],p=d[1],m=(0,c.useState)({valid:!1,message:""}),b=m[0],g=m[1],h=(0,c.useCallback)((e=a().mark((function e(){var t,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[r,f],s=0;case 2:if(!(s<2)){e.next=8;break}if(t[s]){e.next=5;break}return e.abrupt("return",g({valid:!0,message:"Please enter your ".concat(n[s],".")}));case 5:s++,e.next=2;break;case 8:return g({valid:!1,message:""}),e.next=11,fetch("https://api.gunnelimination.com/login",{body:JSON.stringify({email:r,password:f}),headers:new Headers({"content-type":"application/json"}),method:"post"});case 11:e.sent;case 12:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function c(e){i(s,r,a,c,o,"next",e)}function o(e){i(s,r,a,c,o,"throw",e)}c(void 0)}))}),[r,f]);return(0,s.jsx)("div",{className:"dark:bg-gray-500 w-full h-full",children:(0,s.jsx)("div",{className:"w-full bg-gradient-to-br bg-brand flex px-5 h-full",children:(0,s.jsx)("div",{className:" bg-white/70 dark:bg-black/70 my-auto grow max-w-sm mx-auto rounded-xl",children:(0,s.jsxs)("div",{className:" flex gap-3 flex-col rounded-xl py-6 px-5 dark:bg-white/10 bg-gray-500/10",children:[b.valid&&(0,s.jsx)(o.Z,{message:b.message}),(0,s.jsx)(l.Z,{className:"w-full",type:"email",placeholder:"Email",onInput:function(e){u(e.target.value)}}),(0,s.jsx)(l.Z,{className:"w-full",placeholder:"Password",onInput:function(e){p(e.target.value)},type:"password"}),(0,s.jsx)("button",{onClick:h,className:"btn-primary mt-1",children:"Log In"}),(0,s.jsxs)("span",{className:"dark:text-white/60 text-black/60 italic text-sm",children:["Don't have an account? ",(0,s.jsx)("a",{className:"link-brand",href:"/signup",children:"Sign up."})]})]})})})})}}},function(e){e.O(0,[774,888,179],(function(){return n=7237,e(e.s=n);var n}));var n=e.O();_N_E=n}]);