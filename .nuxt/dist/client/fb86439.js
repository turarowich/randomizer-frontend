(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{390:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("1cd18e0b",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n(390)},401:function(t,e,n){var r=n(115)(!1);r.push([t.i,".result{width:100%;height:100vh;background:url(/resbg.png) no-repeat;background-size:cover;display:flex;align-items:center;justify-content:center;flex-direction:column}.result-title{font-weight:500;font-size:63px;line-height:80px;color:#fff}.result-list{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;grid-gap:30px;gap:30px;width:90%}.result-item{font-weight:500;font-size:106px;line-height:134px;color:#fff}",""]),t.exports=r},403:function(t,e,n){"use strict";n.r(e);n(45),n(13),n(92),n(117),n(66);var r=n(137),l=n(391),o={name:"Index",setup:function(){var t=Object(l.a)(undefined),e=Object(r.c)([0,0,0,0,0,0,0,0,0]),n=Object(r.a)((function(){return e.value.map((function(t){return console.log(t),t.toString().length<6?"0".repeat(6-t.toString().length)+t.toString():t}))})),o=Object(r.c)(0);return t.on("connect",(function(){})),t.on("start",(function(t){var n=t.size,r=t.max;e.value=[];for(var i=0;i<n;i++)e.value.push(0);o.value=setInterval((function(){e.value=e.value.map((function(i){return function(t){return Math.floor(Math.random()*t)}(r)}))}),20)})),t.on("stop",(function(t){var n=t.result;e.value=n,clearInterval(o.value)})),t.on("reset",(function(){e.value=[0,0,0,0,0,0,0,0,0]})),{numList:n}}},c=(n(400),n(75)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result"},[n("div",{staticClass:"result-title"},[t._v("Победители")]),t._v(" "),n("div",{staticClass:"result-list"},t._l(t.numList,(function(e){return n("div",{staticClass:"result-item"},[t._v("\n            "+t._s(e)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);