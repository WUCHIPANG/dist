(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d34f5"],{"5be7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CCard",[s("CCardBody",[s("CDataTable",{attrs:{items:t.items,fields:t.fields,"table-filter":"","items-per-page-select":"","items-per-page":5,hover:"",sorter:"",pagination:""}})],1)],1),s("CCard",[s("CCardBody",[s("CRow",[s("CCol",{attrs:{sm:"5"}},[s("span",{staticClass:"titleFont "},[t._v("事件數量")]),s("div",{staticClass:"small text-muted mb-3"},[t._v(t._s(t.getMonth))])])],1),s("SupportTicketBar")],1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CChartBar",{attrs:{datasets:t.defaultDatasets,labels:t.month,options:t.defaultOptions}})},l=[],o=s("f485"),r={name:"SupportTicketBar",data:function(){return{month:""}},components:{CChartBar:o["CChartBar"]},computed:{defaultDatasets:function(){return[{label:"GitHub Commits",backgroundColor:"#ff9f4066",borderColor:"#ff9f40",borderWidth:1,hoverBorderWidth:2,data:[0,0,0,5,7,2]}]},defaultOptions:function(){return{reponsive:!0,maintainAspectRatio:!1,aspectRatio:1,legend:{display:!1},scales:{xAxes:[{barPercentage:.5,gridLines:{drawOnChartArea:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:11,stepSize:5,max:30,min:0},gridLines:{display:!0}}]}}}},mounted:function(){this.month=this.common.getSixMonth()}},u=r,m=s("2877"),c=Object(m["a"])(u,n,l,!1,null,null,null),p=c.exports,d={name:"HistoryList",components:{SupportTicketBar:p},data:function(){return{items:[{number:"9513652365",subject:"Test-帳號問題",level:"低",time:"2021-03-18 09:17",completetime:"2021-03-20 09:39",type:"帳號問題",status:"新支援單"},{number:"8516359843",subject:"Test-技術問題",level:"緊急",time:"2021-03-15 18:25",completetime:"2021-03-15 20:18",type:"技術問題",status:"等待回覆"},{number:"8515365286",subject:"Test-技術問題",level:"中",time:"2021-03-02 12:06",completetime:"2021-03-04 10:34",type:"技術問題",status:"處理中"},{number:"8519543248",subject:"Test-技術問題",level:"高",time:"2021-02-28 16:36",completetime:"2021-03-01 09:05",type:"技術問題",status:"已完成"},{number:"9519541355",subject:"Test-帳號問題",level:"低",time:"2021-02-25 07:48",completetime:"2021-02-27 12:03",type:"帳號問題",status:"已完成"},{number:"8519531256",subject:"Test-技術問題",level:"緊急",time:"2021-02-22 11:36",completetime:"2021-02-22 18:42",type:"技術問題",status:"已完成"}],details:[],collapseDuration:0,getMonth:""}},computed:{fields:function(){return[{key:"number",label:"單號"},{key:"subject",label:"主旨",_style:"min-width:200px"},{key:"level",label:"優先等級"},{key:"time",label:"建立時間",_style:"min-width:80px"},{key:"completetime",label:"完成時間",_style:"min-width:80px"},{key:"status",label:"狀態"}]}},mounted:function(){this.getMonth=this.common.getChartMonth()},methods:{toggleDetails:function(t){this.$router.push("/support/TicketContent/"+t.number)}}},b=d,h=Object(m["a"])(b,a,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0d34f5.7881808e.js.map