(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(t,e,n){var a=n(167);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(43).default)("6ebba83c",a,!0,{sourceMap:!1})},165:function(t,e,n){var a=n(169);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(43).default)("d4be674c",a,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";var a=n(164);n.n(a).a},167:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"\n.wrapper[data-v-05097471]{display:flex;justify-content:center;align-items:center;color:#fff;height:100%;width:100%;background-color:#253020\n}\n.inner[data-v-05097471]{max-width:700px\n}\nimg[data-v-05097471]{max-width:400px\n}",""])},168:function(t,e,n){"use strict";var a=n(165);n.n(a).a},169:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,"\n.spinner{width:40px;height:40px;background-color:#253020;margin:100px auto;-webkit-animation:sk-rotateplane 1.2s ease-in-out infinite;animation:sk-rotateplane 1.2s ease-in-out infinite\n}\n@-webkit-keyframes sk-rotateplane{\n0%{-webkit-transform:perspective(120px)\n}\n50%{-webkit-transform:perspective(120px) rotateY(180deg)\n}\nto{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)\n}\n}\n@keyframes sk-rotateplane{\n0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)\n}\n50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n}\nto{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)\n}\n}",""])},170:function(t,e,n){"use strict";n.r(e);n(15),n(44);var a=n(4),i=n.n(a),s={props:["item"],name:"Items",data:function(){return{title:"Item"}}},r=(n(166),n(21)),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"alloy-meta"},[n("span",{staticClass:"brand"},[t._v(t._s(t.item.brand))]),t._v(" "),n("time",[t._v(t._s(t.item.date)+" "+t._s(t.item.month)+" "+t._s(t.item.year))])]),t._v(" "),n("h2",[t._v(t._s(t.item.title))]),t._v(" "),n("p",[t._v(t._s(t.item.content))]),t._v(" "),t.item.image?n("img",{attrs:{src:t.item.image+".jpg",alt:""}}):t._e()])])])},[],!1,null,"05097471",null);o.options.__file="Items.vue";var p,c={components:{Items:o.exports},data:function(){return{loaded:!1}},mounted:(p=i()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k","0",t.next=4,this.$axios.get("https://cors.io/?https://spreadsheets.google.com/feeds/list/".concat("1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k","/od6/public/values?alt=json")).then(function(t){var n=t.data.feed.entry,a=[];n.forEach(function(t){var e={title:t.gsx$title.$t,year:t.gsx$year.$t,image:t.gsx$image.$t,brand:t.gsx$brand.$t,content:t.gsx$content.$t,month:t.gsx$month.$t,url:t.gsx$url.$t,date:t.gsx$date.$t};a.push(e)}),e.$store.commit("add",a),e.loaded=!0}).catch(function(t){});case 4:new fullpage("#fullpage",{navigation:!0,navigationPosition:"right",slidesNavigation:!0});case 5:case"end":return t.stop()}},t,this)})),function(){return p.apply(this,arguments)})},l=(n(168),Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"fullpage"}},[this.loaded?this._e():e("div",{staticClass:"spinner"}),this._v(" "),this._l(this.$store.state.items,function(t,n){return e("Items",{key:n,attrs:{item:t}})})],2)},[],!1,null,null,null));l.options.__file="index.vue";e.default=l.exports}}]);