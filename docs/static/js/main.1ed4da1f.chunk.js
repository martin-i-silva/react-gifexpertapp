(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(6),l=a.n(r),i=a(1),s=a(8),u=function(e){var t=e.setCategories,a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],u=r[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(s.a)(e))})),console.log("Submit hecho"),u(""))}},n.a.createElement("input",{type:"text",value:l,onChange:function(e){u(e.target.value)},placeholder:"Ingrese una serie"}))},m=function(e){e.id;var t=e.title,a=e.url;return n.a.createElement("div",{className:"card animate__animated animate__fadeIn"},n.a.createElement("img",{src:a,alt:t}),n.a.createElement("p",null,t))},o=a(4),d=a.n(o),f=a(7),p=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,c,n,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=12&api_key=lfLOPCg4HHXceg00QHQjVeHB9mIHQHIB"),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,r=n.data,l=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.category,a=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){setTimeout((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),2e3)}),[e]),n}(t),r=a.data,l=a.loading;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,t),l&&n.a.createElement("div",{className:"sk-fading-circle"},n.a.createElement("div",{className:"sk-circle1 sk-circle"}),n.a.createElement("div",{className:"sk-circle2 sk-circle"}),n.a.createElement("div",{className:"sk-circle3 sk-circle"}),n.a.createElement("div",{className:"sk-circle4 sk-circle"}),n.a.createElement("div",{className:"sk-circle5 sk-circle"}),n.a.createElement("div",{className:"sk-circle6 sk-circle"}),n.a.createElement("div",{className:"sk-circle7 sk-circle"}),n.a.createElement("div",{className:"sk-circle8 sk-circle"}),n.a.createElement("div",{className:"sk-circle9 sk-circle"}),n.a.createElement("div",{className:"sk-circle10 sk-circle"}),n.a.createElement("div",{className:"sk-circle11 sk-circle"}),n.a.createElement("div",{className:"sk-circle12 sk-circle"})),n.a.createElement("div",{className:"card-grid"},r.map((function(e){return n.a.createElement(m,Object.assign({key:e.id},e))}))))};var E=function(){var e=Object(c.useState)(["One punch"]),t=Object(i.a)(e,2),a=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"GifExpertApp"),n.a.createElement(u,{setCategories:r}),n.a.createElement("hr",null),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement(v,{key:e,category:e})}))))};a(15);l.a.render(n.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1ed4da1f.chunk.js.map