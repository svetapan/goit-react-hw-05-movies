"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[232],{232:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),a=n(439),c=n(757),s=n.n(c),o=n(791),u=n(689),i=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&api_key=19a77e83d08632a429865980c71677d1"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch images: ".concat(n.status," ").concat(n.statusText));case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r.results);case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Failed to fetch images: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),h=i,f=n(184),p=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],i=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(i);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),(0,f.jsx)(f.Fragment,{children:n.length>0?(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("span",{children:[" Aothor: ",e.author,"."]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))}):(0,f.jsx)("p",{children:"We don't have any reviws for this movie"})})}}}]);
//# sourceMappingURL=232.f523cce1.chunk.js.map