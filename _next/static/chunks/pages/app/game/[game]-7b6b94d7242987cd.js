(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{3441:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/game/[game]",function(){return n(517)}])},4296:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(0,r.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}))}function c(e){return(0,r.jsxs)("div",{className:"rounded-md flex flex-row text-red-500 bg-red-500/20 py-2 px-3",children:[(0,r.jsx)(s,{className:"my-auto mr-2 shrink-0 grow h-[20px] w-[20px]"}),(0,r.jsx)("span",{className:"my-auto",children:e.message})]})}},2548:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(0,r.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},e,{className:"px-3 text-sm py-2 caret-rose-600 focus:outline-none rounded-md dark:bg-white/10 dark:placeholder:text-white/40 placeholder:text-gray-800/40 bg-white/40  ".concat(e.className)}))}},4262:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var r="https://api.gunnelimination.com"},517:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(4051),a=n.n(r),s=n(5893),c=n(1163),o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(0,s.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"22",y1:"12",x2:"18",y2:"12"}),(0,s.jsx)("line",{x1:"6",y1:"12",x2:"2",y2:"12"}),(0,s.jsx)("line",{x1:"12",y1:"6",x2:"12",y2:"2"}),(0,s.jsx)("line",{x1:"12",y1:"22",x2:"12",y2:"18"})]}))}function u(e){var t=(0,o.useState)(0),n=t[0],r=t[1],a=["bg-lime-700","bg-rose-700","bg-sky-700","bg-amber-700","bg-purple-700","bg-emerald-700"];return(0,o.useEffect)((function(){var t,n;r(Number((null===(t=e.user.firstName)||void 0===t?void 0:t.charCodeAt(0))||(null===(n=e.user.lastName)||void 0===n?void 0:n.charCodeAt(0))||0)%a.length)}),[e.user.firstName,e.user.lastName]),(0,s.jsxs)("div",{className:"rounded-full justify-center text-center relative  shrink-0 flex ".concat(a[n]," text-white font-semibold text-xs ").concat(e.small?"w-6 h-6 grow":"w-7 h-7")+e.className,children:[(0,s.jsxs)("span",{className:"my-auto",children:[(e.user.firstName||[])[0],(e.user.lastName||[])[0]]}),(0,s.jsx)("span",{className:"absolute ".concat(e.small?"h-2 w-2 bottom-0 right-0":"h-3 w-3 -bottom-0.5 -right-0.5"," rounded-full  ").concat(e.user.eliminated?"bg-red-500":"bg-green-500")})]})}var d=n(4262);function f(e,t,n,r,a,s,c){try{var o=e[s](c),l=o.value}catch(i){return void n(i)}o.done?t(l):Promise.resolve(l).then(r,a)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function c(e){f(s,r,a,c,o,"next",e)}function o(e){f(s,r,a,c,o,"throw",e)}c(void 0)}))}}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise(function(){var n=x(a().mark((function n(r,s){var c,o,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(l=window.indexedDB.open("EliminationDB",1)).onerror=function(e){},l.onupgradeneeded=function(e){(c=o.createObjectStore("users",{keyPath:"userID"})).createIndex("userID","userID",{unique:!0}),c.transaction.oncomplete=function(e){}},l.onsuccess=x(a().mark((function n(){var s,c,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=l.result,s=o.transaction("users","readwrite").objectStore("users"),(c=s.get(e)).onsuccess=x(a().mark((function n(){var s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.result){n.next=2;break}return n.abrupt("return");case 2:if(s=JSON.parse(JSON.stringify(c.result)),!t){n.next=13;break}return n.t0=Object,n.t1=s,n.next=8,fetch("".concat(d.h,"/elimination/game/").concat(t,"/user/").concat(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 8:n.t2=n.sent,s=n.t0.assign.call(n.t0,n.t1,n.t2),r(s),n.next=14;break;case 13:r(s);case 14:case"end":return n.stop()}}),n)}))),n.next=6,fetch("".concat(d.h,"/users/").concat(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 6:if(i=n.sent,o.transaction("users","readwrite").objectStore("users").put(i),!t){n.next=15;break}return n.t0=Object,n.t1=i,n.next=13,fetch("".concat(d.h,"/elimination/game/").concat(t,"/user/").concat(e),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 13:n.t2=n.sent,n.t0.assign.call(n.t0,n.t1,n.t2);case 15:r(i);case 16:case"end":return n.stop()}}),n)})));case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}var h=n(9624);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(0,s.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}))}var b=n(2548),j=n(4296);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(0,s.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}))}function y(e){return(0,s.jsxs)("div",{className:"rounded-md flex flex-row text-green-500 bg-green-500/20 py-2 px-3",children:[(0,s.jsx)(w,{className:"my-auto mr-2 h-12 w-12"}),e.message]})}function N(e,t,n,r,a,s,c){try{var o=e[s](c),l=o.value}catch(i){return void n(i)}o.done?t(l):Promise.resolve(l).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function c(e){N(s,r,a,c,o,"next",e)}function o(e){N(s,r,a,c,o,"throw",e)}c(void 0)}))}}function O(){var e=(0,o.useContext)(h.S),t=(0,c.useRouter)(),n=(0,o.useState)(0),r=n[0],l=n[1],f=(0,o.useState)(!1),x=f[0],p=f[1],v=(0,o.useState)({}),w=v[0],N=v[1],O=(0,o.useState)({}),S=O[0],P=O[1],D=(0,o.useState)({}),C=D[0],I=D[1],E=(0,o.useState)([]),z=E[0],_=E[1],q=(0,o.useState)(""),B=q[0],U=q[1],T=(0,o.useState)(""),H=T[0],R=T[1],A=(0,o.useState)(!1),L=A[0],M=A[1],K=(0,o.useState)([]),Z=K[0],J=K[1];(0,o.useEffect)((function(){t.query.game&&k(a().mark((function n(){var r,s,c,o,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(d.h,"/game/").concat(t.query.game,"/"),{});case 2:if(200!==(r=n.sent).status){n.next=9;break}return n.t0=N,n.next=7,r.json();case 7:n.t1=n.sent,(0,n.t0)(n.t1);case 9:return n.next=11,fetch("".concat(d.h,"/elimination/game/").concat(t.query.game,"/user/@me/"),{headers:new Headers({"content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})});case 11:if(200!==(s=n.sent).status){n.next=25;break}return n.next=15,s.json();case 15:return c=n.sent,Object.assign(c,e),P(c),n.t2=I,n.next=21,m(c.targetID,t.query.game);case 21:n.t3=n.sent,(0,n.t2)(n.t3),n.next=30;break;case 25:return n.t4=console,n.next=28,s.text();case 28:n.t5=n.sent,n.t4.error.call(n.t4,n.t5);case 30:return n.next=32,fetch("".concat(d.h,"/elimination/game/").concat(t.query.game,"/top"),{headers:new Headers({"content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})});case 32:if(200!==(o=n.sent).status){n.next=39;break}return n.t6=_,n.next=37,o.json().then((function(e){return Promise.all(e.map(function(){var e=k(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.t1=n,e.next=4,m(n.userID,t.query.game);case 4:return e.t2=e.sent,e.t0.assign.call(e.t0,e.t1,e.t2),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}));case 37:n.t7=n.sent,(0,n.t6)(n.t7);case 39:return n.next=41,fetch("".concat(d.h,"/elimination/game/").concat(t.query.game,"/kills"),{headers:new Headers({"content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})});case 41:if(200!==(l=n.sent).status){n.next=48;break}return n.t8=J,n.next=46,l.json().then((function(e){return Promise.all(e.map(function(){var e=k(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.targetUser={},e.t0=Object,e.t1=n.targetUser,e.next=5,m(n.target,t.query.game);case 5:return e.t2=e.sent,e.t0.assign.call(e.t0,e.t1,e.t2),n.entityUser={},e.t3=Object,e.t4=n.entityUser,e.next=12,m(n.entity,t.query.game);case 12:return e.t5=e.sent,e.t3.assign.call(e.t3,e.t4,e.t5),e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}));case 46:n.t9=n.sent,(0,n.t8)(n.t9);case 48:case"end":return n.stop()}}),n)})))()}),[t]);var F=(0,o.useCallback)(k(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d.h,"/elimination/game/").concat(t.query.game,"/user/").concat(C.userID,"/eliminate"),{headers:new Headers({"content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}),method:"POST",body:JSON.stringify({eliminationCode:B})});case 2:if(200!==(n=e.sent).status){e.next=7;break}R(""),M(!0),e.next=12;break;case 7:return e.t0=R,e.next=10,n.json();case 10:e.t1=e.sent.error,(0,e.t0)(e.t1);case 12:case"end":return e.stop()}}),e)}))),[e,C,B]);return(0,s.jsxs)("div",{className:"h-full w-full overflow-auto flex flex-col px-10 pb-8 pt-12",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold mb-8",children:w.name}),(0,s.jsx)("div",{className:"flex flex-row gap-1 mb-3 rounded-lg p-1",children:[{name:"Dashboard",state:0},{name:"Kill Feed",state:1}].map((function(e){return(0,s.jsx)("a",{onClick:function(){return l(e.state)},href:"#",className:"grow text-center basis-0 ".concat(r===e.state?"btn-primary text-white":"text-black dark:bg-gray-800 dark:text-white bg-gray-200"," font-semibold  rounded-md px-3 py-2"),children:e.name},e.state)}))}),(0,s.jsxs)("div",{className:"".concat(0===r?"flex":"hidden"," gap-4 h-full flex-row md:flex-col"),children:[(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"md:flex grid grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grow md:flex-col gap-3",children:[(0,s.jsxs)("div",{className:"grow dark:bg-red-700/20 bg-red-600/10 flex justify-[normal] flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5",children:[(0,s.jsxs)("div",{className:"flex justify-center flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-2 ml-1 mb-1",children:[(0,s.jsx)(i,{className:"h-3 w-3 my-auto"}),(0,s.jsx)("span",{className:"text-md my-auto font-bold ",children:"Your Target"})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,s.jsx)(u,{user:C}),(0,s.jsxs)("span",{className:"text-lg my-auto font-bold ",children:[C.firstName," ",C.lastName]})]})]}),(0,s.jsxs)("div",{className:"flex flex-row px-10 gap-5 justify-around",children:[(0,s.jsxs)("div",{className:"flex flex-col text-center",children:[(0,s.jsx)("span",{className:"text-lg font-bold",children:C.kills}),(0,s.jsx)("span",{children:"kills"})]}),(0,s.jsxs)("div",{className:"flex flex-col text-center",children:[(0,s.jsxs)("span",{className:"text-lg font-bold",children:["#",z.findIndex((function(e){return e.userID===C.userID}))+1]}),(0,s.jsx)("span",{children:"ranking"})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full box",children:[(0,s.jsx)("span",{className:"text-lg font-bold",children:"Controls"}),(0,s.jsxs)("div",{className:"px-5 text-center align-center grid grid-cols-1 mx-auto gap-2",children:[x&&(0,s.jsx)("span",{className:"font-mono",children:S.secret}),(0,s.jsxs)("button",{onClick:function(){return p(!x)},className:"py-2 px-3 hover:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black dark:border-white hover:text-white rounded-md border-black border-2 text-black",children:[x?"Hide":"Display"," kill code"]}),L&&(0,s.jsx)(y,{message:"".concat(C.firstName," has been successfully eliminated! Good job!")}),H&&(0,s.jsx)(j.Z,{message:H}),(0,s.jsx)(b.Z,{onChange:function(e){U(e.target.value)},placeholder:"Enter ".concat(C.firstName,"'s kill code")}),(0,s.jsxs)("button",{onClick:function(){return F()},className:"py-2 px-3 dark:bg-white dark:text-black rounded-md bg-black text-white",children:["Kill ",C.firstName]})]})]}),(0,s.jsxs)("div",{className:" box min-w-fit",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-2 ml-1 mb-1",children:[(0,s.jsx)(g,{className:"h-3 w-3 my-auto"}),(0,s.jsx)("span",{className:"text-md my-auto font-bold ",children:"You"})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 ",children:[(0,s.jsx)(u,{className:"h-7 w-7",user:S}),(0,s.jsxs)("span",{className:"text-lg my-auto font-bold ",children:[null===e||void 0===e?void 0:e.firstName," ",null===e||void 0===e?void 0:e.lastName]})]}),(0,s.jsxs)("div",{className:"flex flex-row md:px-10 px-5 gap-5 justify-around",children:[(0,s.jsxs)("div",{className:"flex flex-col text-center",children:[(0,s.jsx)("span",{className:"text-lg font-bold",children:S.kills}),(0,s.jsx)("span",{children:"kills"})]}),(0,s.jsxs)("div",{className:"flex flex-col text-center",children:[(0,s.jsxs)("span",{className:"text-lg font-bold",children:["#",z.findIndex((function(t){return t.userID===(null===e||void 0===e?void 0:e.userID)}))+1]}),(0,s.jsx)("span",{children:"ranking"})]})]})]})]})}),(0,s.jsx)("div",{className:"ml-auto md:w-auto min-w-fit md:ml-0",children:(0,s.jsxs)("div",{className:"box h-full md:max-h-72",children:[(0,s.jsx)("span",{className:"text-lg font-bold",children:"Leaderboard"}),(0,s.jsxs)("div",{className:"flex flex-row justify-between text-md font-semibold",children:[(0,s.jsx)("span",{children:"Rank"}),(0,s.jsx)("span",{children:"Kills"})]}),(0,s.jsx)("div",{className:"overflow-auto flex flex-col gap-2 h-full",children:z.map((function(e,t,n){return(0,s.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,s.jsx)("span",{className:"my-auto font-bold font-mono",children:String(t+1).padStart(3,"0")}),(0,s.jsx)(u,{small:!0,className:"my-auto",user:e}),(0,s.jsxs)("span",{className:"my-auto font-semibold mr-5",children:[e.firstName," ",e.lastName]}),(0,s.jsx)("span",{className:"my-auto ml-auto",children:e.kills})]},t)}))})]})})]}),(0,s.jsx)("div",{className:"".concat(1===r?"block":"hidden"," h-full w-full"),children:(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)("span",{children:"Kill Feed"}),(0,s.jsx)("div",{className:"flex flex-col",children:Z.map((function(e){return(0,s.jsxs)("div",{className:"border-b-2 items-center last-of-type:border-b-0 border-white/10 px-3 flex flex-row gap-2 py-2 my-1",children:[new Date(e.at).toLocaleTimeString()," ",new Date(e.at).toLocaleTimeString(),(0,s.jsx)(u,{small:!0,className:"shrink-0 ",user:e.entityUser})," ",(0,s.jsxs)("span",{className:"font-semibold",children:[e.entityUser.firstName," ",e.entityUser.lastName]})," ",e.type,"ed ",(0,s.jsx)(u,{small:!0,className:"shrink-0",user:e.targetUser})," ",(0,s.jsxs)("span",{className:"font-semibold",children:[e.targetUser.firstName," ",e.targetUser.lastName]})]})}))})]})})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=3441,e(e.s=t);var t}));var t=e.O();_N_E=t}]);