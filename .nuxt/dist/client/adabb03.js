(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{359:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(115).default)("0c36cdc4",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n(359)},370:function(t,e,n){var l=n(114)(!1);l.push([t.i,".result{width:100%;height:100vh;background:url(/resbg.png) no-repeat;background-size:cover;display:flex;align-items:center;justify-content:center;flex-direction:column}.result-title{font-weight:500;font-size:63px;line-height:80px;color:#fff}.result-list{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;grid-gap:30px;gap:30px;width:90%}.result-item{font-weight:500;font-size:106px;line-height:134px;color:#fff}@media(max-width:1400px){.result-title{font-size:43px}.result-list{width:100%}.result-item{font-size:76px;line-height:84px}}@media(max-width:960px){.result-title{font-size:23px}.result-list{width:90%}.result-item{font-size:36px;line-height:44px}}",""]),t.exports=l},372:function(t,e,n){"use strict";n.r(e);n(44),n(14),n(90),n(116),n(63);var l=n(135),r=n(360),o={name:"Index",setup:function(){var t=Object(r.a)("http://188.225.75.140:4000"),e=Object(l.c)([0,0,0,0,0,0,0,0,0]),n=Object(l.a)((function(){return e.value.map((function(t){return console.log(t),t.toString().length<6?"0".repeat(6-t.toString().length)+t.toString():t}))})),o=Object(l.c)(0);return t.on("connect",(function(){})),t.on("start",(function(t){var n=t.size,l=t.max;e.value=[];for(var i=0;i<n;i++)e.value.push(0);o.value=setInterval((function(){e.value=e.value.map((function(i){return function(t){return Math.floor(Math.random()*t)}(l)}))}),20)})),t.on("stop",(function(t){var n=t.result;e.value=n,clearInterval(o.value)})),t.on("reset",(function(){e.value=[0,0,0,0,0,0,0,0,0]})),{numList:n}}},c=(n(369),n(72)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result"},[n("div",{staticClass:"result-title"},[t._v("Победители")]),t._v(" "),n("div",{staticClass:"result-list"},t._l(t.numList,(function(e){return n("div",{staticClass:"result-item"},[t._v("\n            "+t._s(e)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);