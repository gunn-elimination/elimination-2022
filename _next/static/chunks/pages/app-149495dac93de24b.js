(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{8470:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return n(1950)}])},4262:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var r="https://api.gunnelimination.com"},1950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(4051),a=n.n(r),c=n(5893),o=n(7294),s=n(4262),i=n(9624);function u(e,t,n,r,a,c,o){try{var s=e[c](o),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){u(c,r,a,o,s,"next",e)}function s(e){u(c,r,a,o,s,"throw",e)}o(void 0)}))}}function p(){(0,o.useContext)(i.S);var e=(0,o.useState)([]),t=e[0],n=e[1];(0,o.useEffect)((function(){l(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.h,"/games"),{headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})});case 2:if(200!==(t=e.sent).status){e.next=14;break}return e.t0=Promise,e.next=7,t.json();case 7:return e.t1=e.sent.map(function(){var e=l(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.h,"/game/").concat(t.id,"/joined"),{headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})});case 2:return e.next=4,e.sent.json();case 4:return t.joined=e.sent.joined,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=10,e.t0.all.call(e.t0,e.t1);case 10:r=e.sent,n(r),e.next=20;break;case 14:return e.t2=console,e.t3=t.status,e.next=18,t.text();case 18:e.t4=e.sent,e.t2.log.call(e.t2,e.t3,e.t4);case 20:case"end":return e.stop()}}),e)})))()}),[]);var r=(0,o.useCallback)(function(){var e=l(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.h,"/game/").concat(t,"/join"),{method:"POST",headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))})});case 2:e.sent.status;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return(0,c.jsxs)("div",{className:"h-full w-full bg-gray-100 dark:bg-gray-900 overflow-auto flex flex-col px-10 py-8",children:[(0,c.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Games"}),(0,c.jsx)("div",{className:"flex flex-col",children:t.map((function(e){return(0,c.jsxs)("div",{className:"py-3 px-4 rounded-md shadow dark:bg-gray-200/20 bg-white ",children:[(0,c.jsx)("span",{className:"text-lg font-bold",children:e.name}),(0,c.jsx)("span",{}),(0,c.jsx)("p",{className:"whitespace-pre-wrap opacity-50 text-xs",children:e.description}),(0,c.jsx)("div",{children:e.joined?(0,c.jsx)("a",{href:"/app/".concat(e.id),className:"btn-primary !py-2 !px-3 float-right",children:"Open"}):(0,c.jsx)("button",{onClick:function(){return r(e.id)},className:"btn-primary !py-2 !px-3 float-right",children:"Join"})})]},e.id)}))})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=8470,e(e.s=t);var t}));var t=e.O();_N_E=t}]);