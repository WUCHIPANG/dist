(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b148bee8"],{"52d7":function(t,e,a){"use strict";var o=function(){for(var t={},e=document.styleSheets,a="",o=e.length-1;o>-1;o--){for(var s=e[o].cssRules,r=s.length-1;r>-1;r--)if(".ie-custom-properties"===s[r].selectorText){a=s[r].cssText;break}if(a)break}return a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}")),a.split(";").forEach((function(e){if(e){var a=e.split(": ")[0],o=e.split(": ")[1];a&&o&&(t["--".concat(a.trim())]=o.trim())}})),t},s=o,r=10,i=function(){return Boolean(document.documentMode)&&document.documentMode>=r},n=function(t){return t.match(/^--.*/i)},l=function(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(n(t)&&i()){var o=s();e=o[t]}else e=window.getComputedStyle(a,null).getPropertyValue(t).replace(/^\s/,"");return e};e["a"]=l},"584d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCol",{attrs:{sm:"6",lg:"6"}},[a("CCard",[a("CCardHeader",[t._v(t._s(t.date)+" ("+t._s(t.$t("billing.totalCost"))+")")]),a("CCardBody",{staticClass:"cardCost"},[t._v("$0.00")])],1)],1),a("CCol",{attrs:{sm:"6",lg:"6"}},[a("CCard",[a("CCardHeader",[t._v(t._s(t.yearMonth)+" ("+t._s(t.$t("billing.forecastTotalCost"))+")")]),a("CCardBody",{staticClass:"cardCost"},[t._v("$0.00")])],1)],1)],1),a("CCard",[a("CCardBody",[a("CRow",[a("CCol",[a("CSelect",{staticClass:"projectSelect",attrs:{label:t.$t("billing.project"),options:t.option_project}})],1),a("CCol",[a("CSelect",{staticClass:"projectSelect",attrs:{label:t.$t("billing.month"),options:t.option}})],1),a("CCol",[a("CButton",{staticClass:"dash_downloadButton",attrs:{block:"",variant:"outline",color:"dark"}},[a("CIcon",{attrs:{name:"cil-cloud-download"}})],1)],1)],1)],1)],1),a("CCard",[a("CCardBody",[a("CRow",[a("CCol",{staticClass:"costComparison",attrs:{sm:"4"}},[a("div",{staticClass:"priceFont"},[t._v("$100.00")]),a("div",[t._v(" (上個月) ")])]),a("CCol",{staticClass:"costComparison",attrs:{sm:"4"}},[a("div",{staticClass:"priceFont"},[t._v(" $200.00 ")]),a("div",[t._v(" (這個月) ")])]),a("CCol",{staticClass:"costComparison",attrs:{sm:"4"}},[a("div",{staticClass:"priceFont redFont"},[t._v(" $100.00 ")]),a("div",[t._v(" (差值) ")])])],1)],1)],1),a("CCard",[a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"5"}},[a("span",{staticClass:"titleFont "},[t._v("總用量")]),a("div",{staticClass:"small text-muted mb-3"},[t._v(t._s(t.getMonth))])])],1),a("MonthlyChartLine")],1)],1),a("CCard",[a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"5"}},[a("span",{staticClass:"titleFont "},[t._v("各服務用量")]),a("div",{staticClass:"small text-muted mb-3"},[t._v(t._s(t.getMonth))])])],1),a("MonthlyChartBar")],1)],1),a("CCard",[a("CCardBody",[a("CDataTable",{attrs:{items:t.items,fields:t.fields,"table-filter":"","items-per-page-select":"","items-per-page":5,hover:"",sorter:"",pagination:""}})],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CChartLine",{attrs:{datasets:t.defaultDatasets,labels:t.chartLineDay,options:t.defaultOptions}})],1)},i=[],n=a("f485"),l=a("52d7");var c={name:"MonthlyChartLine",data:function(){return{chartLineDay:""}},components:{CChartLine:n["CChartLine"]},computed:{defaultDatasets:function(){for(var t=Object(l["a"])("success2")||"#4dbd74",e=Object(l["a"])("info")||"#20a8d8",a=Object(l["a"])("danger")||"#f86c6b",o=27,s=[],r=0;r<=o;r++)s.push(90);return[{label:"This Month",backgroundColor:"transparent",borderColor:t,pointHoverBackgroundColor:t,borderWidth:2,data:[2,8,10,12,18,21,23,25,31,33,33,41,44,49,50,58,65,69,71,78,81,81,82,85,87,89,90,92]},{label:"Last Month",backgroundColor:"transparent",borderColor:e,pointHoverBackgroundColor:e,borderWidth:2,data:[0,3,5,9,11,13,18,19,22,28,28,33,38,42,44,44,49,52,56,59,65,68,71,76,77,77,79,82]},{label:"Alert",backgroundColor:"transparent",borderColor:a,pointHoverBackgroundColor:a,borderWidth:1,borderDash:[8,5],data:s}]},defaultOptions:function(){return{responsive:!0,maintainAspectRatio:!1,aspectRatio:1,legend:{position:"right",align:"start",labels:{fontColor:"black",fontFamily:"Microsoft YaHei",padding:30}},scales:{xAxes:[{gridLines:{drawOnChartArea:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:11,stepSize:.5,max:100,min:0},gridLines:{display:!0}}]},elements:{line:{borderWidth:2,tension:0},point:{radius:1,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}}},mounted:function(){this.chartLineDay=this.common.getChartDate()}},d=c,C=a("2877"),u=Object(C["a"])(d,r,i,!1,null,null,null),h=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CChartBar",{attrs:{datasets:t.defaultDatasets,labels:t.service,options:t.defaultOptions}})},b=[],m={name:"MonthlyChartBar",data:function(){return{service:["Cloud Storage","Compute Engine","APP Engine","Load Balancer","Cloud Build","Stackdriver Logging","BigQuery","Cloud SQL","Cloud DNS","Cloud Dataflow","Other"]}},components:{CChartBar:n["CChartBar"]},computed:{defaultDatasets:function(){return[{label:"GitHub Commits",backgroundColor:"#ff9f4066",borderColor:"#ff9f40",borderWidth:1,hoverBorderWidth:2,data:[40,20,39,12,10,40,39,20,40,20,12,11]}]},defaultOptions:function(){return{reponsive:!0,maintainAspectRatio:!1,aspectRatio:1,legend:{display:!1},scales:{xAxes:[{barPercentage:.5,gridLines:{drawOnChartArea:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:11,stepSize:.5,max:100,min:0},gridLines:{display:!0}}]}}}}},g=m,v=Object(C["a"])(g,p,b,!1,null,null,null),f=v.exports,$={name:"MonthlyBilling",components:{MonthlyChartLine:h,MonthlyChartBar:f},data:function(){return{getMonth:"",items:[{service:"Cloud Storage",cost:"$ 0.05",subtotal:"$0.00"},{service:"Compute Engine",cost:"$ 645.86",subtotal:"$0.00"},{service:"APP Engine",cost:"$ 0.00",subtotal:"$0.00"},{service:"Stackdriver Logging",cost:"$ 0.1",subtotal:"$0.00"},{service:"Load Balancer",cost:"$ 0.05",subtotal:"$0.00"},{service:"Cloud Build",cost:"$ 0.00",subtotal:"$0.00"},{service:"BigQuery",cost:"$ 645.86",subtotal:"$0.00"},{service:"Cloud SQL",cost:"$ 0.1",subtotal:"$0.00"},{service:"Cloud DNS",cost:"$ 0.05",subtotal:"$0.00"},{service:"Cloud Dataflow",cost:"$ 0.15",subtotal:"$0.00"},{service:"Other",cost:"$ 0.00",subtotal:"$0.00"}],details:[],collapseDuration:0,option:[4,3,2,1],option_project:["專案A","專案B","專案C"],date:"",yearMonth:""}},computed:{fields:function(){return[{key:"service",label:this.$t("billing.service"),sortable:!0},{key:"cost",label:this.$t("billing.cost"),sortable:!1},{key:"subtotal",label:this.$t("billing.subtotal"),sortable:!0,variant:"danger"}]}},mounted:function(){this.date=this.common.getDateRange(),this.yearMonth=this.common.getMonth(),this.getMonth=this.common.getChartMonth()},methods:{toggleDetails:function(t){var e=this;this.$set(this.items[t.id],"_toggled",!t._toggled),this.collapseDuration=300,this.$nextTick((function(){e.collapseDuration=0}))}}},y=$,_=Object(C["a"])(y,o,s,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-b148bee8.43faf970.js.map