(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{359:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(115).default)("237bdc64",content,!0,{sourceMap:!1})},369:function(t,e,n){t.exports=n.p+"img/logo.29784f8.png"},370:function(t,e,n){"use strict";n(359)},371:function(t,e,n){var l=n(114)(!1);l.push([t.i,'.result{width:100%;height:100vh;background:url(/resbg.png) no-repeat;background-size:cover;display:flex;align-items:center;justify-content:center;flex-direction:column}.result-logo{position:absolute;right:20px;top:20px;width:100px}.result-title{font-weight:500;font-size:63px;line-height:80px;color:#fff;font-family:"Druk Text Wide Trial",sans-serif}.result-list{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;grid-gap:30px;gap:30px;width:90%}.result-item{font-weight:500;font-size:106px;line-height:134px;color:#fff;text-align:center;font-family:"Druk Text Wide Trial",sans-serif}@media(max-width:1400px){.result-title{font-size:43px}.result-list{width:100%}.result-item{font-size:76px;line-height:84px}}@media(max-width:960px){.result-title{font-size:23px}.result-list{width:90%}.result-item{font-size:36px;line-height:44px}}',""]),t.exports=l},373:function(t,e,n){"use strict";n.r(e);n(44),n(14),n(90),n(116),n(63);var l=n(135),r=n(360),o={name:"Index",setup:function(){var t=Object(r.a)("http://188.225.75.140:4000"),e=Object(l.c)([0,0,0,0,0,0,0,0,0,0,0,0]),n=Object(l.a)((function(){return e.value.map((function(t){return t.toString().length<4?"0".repeat(4-t.toString().length)+t.toString():t}))})),o=Object(l.c)(0),c=function(t,e){return Math.floor(Math.random()*(t-e)+e)};return t.on("connect",(function(){})),t.on("start",(function(t){var n=t.size,l=t.max,r=t.min;e.value=[];for(var i=0;i<n;i++)e.value.push(0);clearInterval(o.value),o.value=setInterval((function(){e.value=e.value.map((function(i){return c(l,r)}))}),20)})),t.on("stop",(function(t){var n=t.result,l=t.max,r=t.min;e.value=n,clearInterval(o.value);var time=0;o.value=setInterval((function(){time+=20,e.value=e.value.map((function(i,t){return 2500*t>time?c(l,r):i}))}),20)})),t.on("reset",(function(){e.value=[0,0,0,0,0,0,0,0,0]})),{numList:n}}},c=(n(370),n(72)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"result"},[l("div",{staticClass:"result-title"},[t._v("Победители")]),t._v(" "),l("img",{staticClass:"result-logo",attrs:{src:n(369),alt:""}}),t._v(" "),l("div",{staticClass:"result-list"},t._l(t.numList,(function(e){return l("div",{staticClass:"result-item"},[t._v("\n            "+t._s(e)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);