(function(t){function e(e){for(var a,l,c=e[0],r=e[1],_=e[2],u=0,d=[];u<c.length;u++)l=c[u],s[l]&&d.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);o&&o(e);while(d.length)d.shift()();return n.push.apply(n,_||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,c=1;c<i.length;c++){var r=i[c];0!==s[r]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},s={app:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var _=0;_<c.length;_++)e(c[_]);var o=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0c0b":function(t,e,i){"use strict";var a=i("8afc"),s=i.n(a);s.a},"0f64":function(t,e,i){"use strict";var a=i("a466"),s=i.n(a);s.a},"12ed":function(t,e,i){},5650:function(t,e,i){"use strict";var a=i("9c62"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],l=i("2877"),c={},r=Object(l["a"])(c,s,n,!1,null,null,null),_=r.exports,o=i("8c4f"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading?t._e():i("div",{staticClass:"wrapper"},[i("header",{staticClass:"header"},[i("div",{staticClass:"headerChooseDistrict"},[i("div",{staticClass:"headerChooseDistrict__title"},[t._v("空氣品質指標 (AQI)")]),i("div",{staticClass:"districtsSelectorWrap"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentCounty,expression:"currentCounty"}],attrs:{name:"",id:"districtsSelector"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.currentCounty=e.target.multiple?i:i[0]}}},[i("option",{attrs:{disabled:"disabled"}},[t._v("---請選擇地區---")]),t._l(t.countySelectorData,function(e,a){return i("option",{key:a,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})],2)])]),i("chart")],1),i("div",{staticClass:"line"},[i("div",{staticClass:"line__districtTitle"},[t._v(t._s(t.currentCounty))]),i("div",{staticClass:"line__dashDec"}),i("div",{staticClass:"line__updatedTime"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.PublishTime))+" 更新")])]),i("main",{staticClass:"main"},[i("div",{staticClass:"detail"},[i("ul",[i("li",{staticClass:"detail__userChoosedDistrict"},[i("div",{staticClass:"title"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.SiteName)))]),i("div",{staticClass:"value",class:t.AQIsituation(t.selectedDistrictData.AQI)},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.AQI)))])]),i("li",{staticClass:"detail__item"},[t._m(0),i("div",{staticClass:"detail__item__value"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.O3)))])]),i("li",{staticClass:"detail__item"},[t._m(1),i("div",{staticClass:"detail__item__value"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.PM10)))])]),i("li",{staticClass:"detail__item"},[t._m(2),i("div",{staticClass:"detail__item__value"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData["PM2.5"])))])]),i("li",{staticClass:"detail__item"},[t._m(3),i("div",{staticClass:"detail__item__value"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.CO)))])]),i("li",{staticClass:"detail__item"},[t._m(4),i("div",{staticClass:"detail__item__value"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.SO2)))])]),i("li",{staticClass:"detail__item"},[t._m(5),i("div",{staticClass:"detail__item__value"},[t._v(t._s(t._f("ifEmpty")(t.selectedDistrictData.NO2)))])])])]),i("div",{staticClass:"districts"},[i("ul",t._l(t.replaceCounty,function(e,a){return i("li",{key:a,staticClass:"districts__item",on:{click:function(i){return t.userSelectDistrick(e)}}},[i("div",{staticClass:"districts__item__title",class:{"font-s":e.SiteName.length>2}},[t._v(t._s(e.SiteName))]),i("div",{staticClass:"districts__item__value",class:t.AQIsituation(e.AQI)},[t._v(t._s(t._f("ifEmpty")(e.AQI)))])])}),0)])])]),t.isLoading?t._e():i("Footer"),t.isLoading?i("Loading"):t._e()],1)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail__item__title"},[i("span",{staticClass:"detail__item__title__zh"},[t._v("臭氧")]),i("span",{staticClass:"detail__item__title__en"},[t._v("　O3 (ppb)")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail__item__title"},[i("span",{staticClass:"detail__item__title__zh"},[t._v("懸浮微粒")]),i("span",{staticClass:"detail__item__title__en"},[t._v("　PM10 (μg/m³)")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail__item__title"},[i("span",{staticClass:"detail__item__title__zh"},[t._v("細懸浮微粒")]),i("span",{staticClass:"detail__item__title__en"},[t._v("　PM2.5 (μg/m³)")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail__item__title"},[i("span",{staticClass:"detail__item__title__zh"},[t._v("一氧化碳")]),i("span",{staticClass:"detail__item__title__en"},[t._v("　CO (ppm)")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail__item__title"},[i("span",{staticClass:"detail__item__title__zh"},[t._v("二氧化硫")]),i("span",{staticClass:"detail__item__title__en"},[t._v("　SO2 (ppb)")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail__item__title"},[i("span",{staticClass:"detail__item__title__zh"},[t._v("二氧化氮")]),i("span",{staticClass:"detail__item__title__en"},[t._v("　NO2 (ppb)")])])}],f=(i("ac6a"),i("7514"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loadingWrap"},[i("div",{staticClass:"donut"})])}],m={},p=m,h=(i("f62f"),Object(l["a"])(p,f,v,!1,null,"10c8a02a",null)),C=h.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chart"},[i("ul",t._l(t.chartData,function(e){return i("li",{key:e.text,staticClass:"chart__item"},[i("div",{staticClass:"chart__item__header",class:e.className},[t._v(t._s(e.score))]),i("div",{staticClass:"chart__item__body"},[t._v(t._s(e.text))])])}),0)])},D=[],g={data:function(){return{chartData:[{text:"良好",score:"0 ~ 50",className:"level_A"},{text:"普通",score:"51 ~ 100",className:"level_B"},{text:"對敏感族群不健康",score:"101 ~ 150",className:"level_C"},{text:"不健康",score:"151 ~ 200",className:"level_D"},{text:"非常不健康",score:"201 ~ 300",className:"level_E"},{text:"高危害",score:"301 ~ 400",className:"level_F"}]}}},b=g,S=(i("0c0b"),Object(l["a"])(b,y,D,!1,null,"a2d8af14",null)),O=S.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"wrap"},[i("span",{staticClass:"source"},[t._v("資料來源：行政院環境保護署")]),i("span",{staticClass:"copyright"},[t._v("Copyright © 2019 HexSchool. All rights reserved.")])])])}],A={},j=A,w=(i("5650"),Object(l["a"])(j,x,E,!1,null,"1f29830e",null)),N=w.exports,I={name:"Index",components:{Chart:O,Footer:N,Loading:C},data:function(){return{api:"".concat("https://script.google.com/macros/s/AKfycbxCXZjUDAF_i2DchP2dldBK2vbAjxRNhC50-7klXoeH9WjX9_s/exec","?url=").concat("http://opendata2.epa.gov.tw/AQI.json"),AQI_data:[],currentCounty:"新北市",selectedDistrictData:{},isLoading:!1}},methods:{ajaxPromise:function(t){return new Promise(function(e,i){var a=new XMLHttpRequest;a.open("GET",t),a.send(null),a.onload=function(){a.status>=200&&a.status<400?e(a.response):i("連結失敗 ".concat(a.status))}})},AQIsituation:function(t){var e="";return t>0&&t<=50?e="level_A":t>50&&t<=100?e="level_B":t>100&&t<=150?e="level_C":t>150&&t<=200?e="level_D":t>200&&t<=300?e="level_E":t>300&&t<=400&&(e="level_F"),!t&&(e="font-s"),e},userSelectDistrick:function(t){var e=this;this.selectedDistrict=t.SiteName,this.selectedDistrictData=this.AQI_data.find(function(t,i){return t.SiteName===e.selectedDistrict})},localSet:function(t,e){localStorage.setItem(t,JSON.stringify(e))},localGet:function(t){return JSON.parse(localStorage.getItem(t))},localStorageOrDefualt:function(t,e,i){this.localGet(t)&&(this[i]=this.localGet(t))}},watch:{currentCounty:function(){this.localSet("_cc",this.currentCounty)},selectedDistrictData:function(){this.localSet("_dd",this.selectedDistrictData)}},computed:{countySelectorData:function(){var t=[];this.AQI_data.forEach(function(e){t.push(e.County)});var e=t.filter(function(t,e,i){return i.indexOf(t)===e});return e},replaceCounty:function(){var t=this;return this.AQI_data.filter(function(e,i){return e.County==t.currentCounty})}},filters:{ifEmpty:function(t){return t||"-"}},created:function(){var t=this;this.localStorageOrDefualt("_cc","新北市","currentCounty"),this.localStorageOrDefualt("_dd",{},"selectedDistrictData"),this.isLoading=!0,this.ajaxPromise(this.api).then(function(e){t.AQI_data=Object.assign([],JSON.parse(e)),t.isLoading=!1}).catch(function(t){console.log(t)})}},P=I,Q=(i("0f64"),Object(l["a"])(P,u,d,!1,null,"b30c1318",null)),$=Q.exports;a["a"].use(o["a"]);var k=new o["a"]({routes:[{path:"/",name:"Index",component:$}]}),L=i("2f62");a["a"].use(L["a"]);var M=new L["a"].Store({state:{},mutations:{},actions:{}});i("c1c3");a["a"].config.productionTip=!1,new a["a"]({router:k,store:M,render:function(t){return t(_)}}).$mount("#app")},"8afc":function(t,e,i){},"9c62":function(t,e,i){},a466:function(t,e,i){},c1c3:function(t,e,i){},f62f:function(t,e,i){"use strict";var a=i("12ed"),s=i.n(a);s.a}});