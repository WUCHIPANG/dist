(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],d=0,s=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(s.length)s.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},c={app:0},r=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0850c2a4":"ce54485e","chunk-1bfb8756":"57638b82","chunk-2d0a3147":"72fa7896","chunk-2d0ac239":"0427fec9","chunk-2d0be337":"42d409ab","chunk-2d0cb6a8":"54272f02","chunk-2d0decdf":"f1b41315","chunk-2d0e5ad4":"5d55071e","chunk-2d2086b7":"a5457d35","chunk-2d208ca8":"e8c34f83","chunk-2d208e0a":"f6dba9c0","chunk-2d21d6b0":"f625d20e","chunk-2d21e33d":"c71af654","chunk-2d226169":"379b54b7","chunk-2d22c901":"451c016a","chunk-140f563d":"cd42d0e4","chunk-2d0d34f5":"7881808e","chunk-2d22c8a6":"da95743e","chunk-8bf29ede":"bed0eaed","chunk-b148bee8":"43faf970"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0850c2a4":1,"chunk-8bf29ede":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0850c2a4":"278c7ebb","chunk-1bfb8756":"31d6cfe0","chunk-2d0a3147":"31d6cfe0","chunk-2d0ac239":"31d6cfe0","chunk-2d0be337":"31d6cfe0","chunk-2d0cb6a8":"31d6cfe0","chunk-2d0decdf":"31d6cfe0","chunk-2d0e5ad4":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d208ca8":"31d6cfe0","chunk-2d208e0a":"31d6cfe0","chunk-2d21d6b0":"31d6cfe0","chunk-2d21e33d":"31d6cfe0","chunk-2d226169":"31d6cfe0","chunk-2d22c901":"31d6cfe0","chunk-140f563d":"31d6cfe0","chunk-2d0d34f5":"31d6cfe0","chunk-2d22c8a6":"31d6cfe0","chunk-8bf29ede":"cd7f7b34","chunk-b148bee8":"31d6cfe0"}[e]+".css",c=l.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===c))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){u=s[i],d=u.getAttribute("data-href");if(d===a||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(e);var s=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},"1b4a":function(e,t,n){"use strict";var a,o,c="apiurl",r="&zSMvVTK4gbDvCcU",i="M43B?xKnTVtVnjM^",l="3575632159826433",u={$API_URL:c,$API_MD5_KEY:r,$API_AES_KEY:i,$API_IV:l},d=u,s=n("2877"),f=Object(s["a"])(d,a,o,!1,null,null,null);t["a"]=f.exports},2:function(e,t){},3:function(e,t){},4:function(e,t){},"423e":function(e){e.exports=JSON.parse('{"login":{"login":"登入","signIn":"登录到您的帐户!"},"header":{"settings":"设定","profile":"个人资料","logout":"登出"},"nav":{"bill":"帐单","overview":"总览","monthlyBilling":"每月帐单","DailyBilling":"每日帐单","billingManagement":"帐单管理","authorityManagement":"权限管理","billingUpload":"帐单上传"},"dashboard":{"cost":"费用","flow":"流量","dailyFolw":"每日流量","dailyCost":"每日金额","commonServices":"常用服务","product":"产品","projectsMostUsage":"用量最多的专案","productMostUsage":"用量最多的产品","topFiveservices":"前五服务","topTenservices":"前十服务"},"profile":{"changPw":"变更密码","confirmPw":"确认密码"},"partner":{"customerNumber":"客户编号","companyName":"公司名称","taxID":"统一编号","companyAddress":"公司地址","contactPerson":"联络人","number":"联络电话"},"billing":{"project":"专案","to":"至","totalCost":"总费用","forecastTotalCost":"预测总费用","totalFlow":"总流量","service":"服务","cost":"费用","default":"预设","timeLimit":"时间范围","groupBy":"分组依据","subtotal":"小计","projectID":"专案 ID","projectNumber":"专案编号","month":"月份","date":"日期","totalFolw":"总流量"},"support":{"technicalSupport":"技术支援","supportList":"支援单","addList":"新增支援单","checkList":"确认支援单"},"upload":{"type":"类型","fileUpload":"档案上传"},"auto":{"autoMation":"自动化管理","billingAlert":"帐单告警"}}')},"49f8":function(e,t,n){var a={"./en.json":"edd4","./zh-CN.json":"423e","./zh-TW.json":"9ea5"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id="49f8"},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a"),n("b636"),n("dc8d"),n("efe9"),n("d28b"),n("2a1b"),n("80e0"),n("6b9e"),n("197b"),n("2351"),n("8172"),n("944a"),n("81b8"),n("99af"),n("a874"),n("cb29"),n("4de4"),n("7db0"),n("c740"),n("0481"),n("5db7"),n("a630"),n("caad"),n("e260"),n("a15b"),n("d81d"),n("5ded"),n("13d5"),n("f4dd"),n("fb6a"),n("f785"),n("a434"),n("4069"),n("73d9"),n("c19f"),n("82da"),n("ace4"),n("efec"),n("b56e"),n("b0c0"),n("0c47"),n("4ec9"),n("5327"),n("79a8"),n("9ff9"),n("3ea3"),n("40d9"),n("ff9c"),n("0ac8"),n("f664"),n("4057"),n("bc01"),n("6b93"),n("ca21"),n("90d7"),n("2af1"),n("0261"),n("7898"),n("23dc"),n("b65f"),n("a9e3"),n("35b3"),n("f00c"),n("8ba4"),n("9129"),n("583b"),n("aff5"),n("e6e1"),n("c35a"),n("25eb"),n("b680"),n("cca6"),n("12a8"),n("e71b"),n("4fad"),n("dca8"),n("c1f9"),n("e439"),n("dbb4"),n("7039"),n("3410"),n("2b19"),n("c906"),n("e21d"),n("e43e"),n("b64b"),n("bf96"),n("5bf7"),n("cee8"),n("af93"),n("131a"),n("d3b7"),n("07ac"),n("e6cf"),n("a79d"),n("a6fd"),n("4ae1"),n("3f3a"),n("ac16"),n("5d41"),n("9e4a"),n("7f78"),n("c760"),n("db96"),n("1bf2"),n("d6dd"),n("7ed3"),n("8b9a"),n("4d63"),n("ac1f"),n("5377"),n("25f0"),n("6062"),n("f5b2"),n("8a79"),n("f6d6"),n("2532"),n("3ca3"),n("466d"),n("843c"),n("4d90"),n("d80f"),n("38cf"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("1e25"),n("eee7"),n("18a5"),n("1393"),n("04d3"),n("cc71"),n("c7cd"),n("9767"),n("1913"),n("c5d0"),n("9911"),n("c96a"),n("2315"),n("4c53"),n("664f"),n("cfc3"),n("4a9b"),n("fd87"),n("8b09"),n("143c"),n("5cc6"),n("8a59"),n("84c3"),n("fb2c"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("20bf"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ec97"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("10d1"),n("1fe2"),n("159b"),n("ddb0"),n("130f"),n("9f96"),n("2b3d"),n("bf19"),n("9861");var a,o=n("a026"),c=n("2f62"),r=n("8c4f"),i=(n("1b4a"),"INCREASE"),l="DECREASE",u="SETTOKEN",d="DELTOKEN";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f,h={count:0},p={actionIncrease:function(e){var t=e.commit;t(i)},actionDecrease:function(e){var t=e.commit;t(l)}},b=(a={},s(a,i,(function(e){e.count+=1})),s(a,l,(function(e){e.count-=1})),a),m={getCount:function(e){return e.count}},g={state:h,getters:m,actions:p,mutations:b,strict:!0},v=n("bc3a"),y=n.n(v),k=n("869c");function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("3452");var A={token:""},M={userLogin:function(e,t){var n=e.commit,a=k["a"].Encrypt(t.password),o=k["a"].Decrypt(a);"demo"==t.user&&t.password==o&&(n(u,t),window.sessionStorage.setItem("user",t.user),F.push("/dashboard"))},userLogout:function(e){var t=e.commit;t(d)}},S=(f={},w(f,u,(function(e,t){e.token=t})),w(f,d,(function(e){e.token="",sessionStorage.removeItem("token"),window.location.assign("/Login")})),f),C={},P={state:A,actions:M,mutations:S,getters:C};function L(e,t){return j(e)||V(e,t)||D(e,t)||E()}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e,t){if(e){if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function V(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,c=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done);a=!0)if(n.push(r.value),t&&n.length===t)break}catch(l){o=!0,c=l}finally{try{a||null==i["return"]||i["return"]()}finally{if(o)throw c}}return n}}function j(e){if(Array.isArray(e))return e}o["a"].use(c["a"]);var U={sidebarShow:"responsive",sidebarMinimize:!1},O={toggleSidebarDesktop:function(e){var t=[!0,"responsive"].includes(e.sidebarShow);e.sidebarShow=!t&&"responsive"},toggleSidebarMobile:function(e){var t=[!1,"responsive"].includes(e.sidebarShow);e.sidebarShow=!!t||"responsive"},set:function(e,t){var n=L(t,2),a=n[0],o=n[1];e[a]=o}},_=new c["a"].Store({state:U,mutations:O,modules:{Template:g,Loginout:P}});o["a"].use(r["a"]);var N=new r["a"]({mode:"hash",linkActiveClass:"active",scrollBehavior:function(){return{y:0}},routes:B()});function B(){return[{path:"/Login",name:"Login",component:function(e){return n.e("chunk-2d2086b7").then(function(){var t=[n("a55b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/",redirect:"/dashboard",name:"Home",meta:{requireAuth:!0},component:function(e){return n.e("chunk-0850c2a4").then(function(){var t=[n("f593")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"dashboard",name:"Dashboard",component:function(e){return Promise.all([n.e("chunk-2d22c901"),n.e("chunk-140f563d")]).then(function(){var t=[n("7277")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"billing",redirect:"/billing",name:"Billing",component:{render:function(e){return e("router-view")}},children:[{path:"overview",name:"Overview",component:function(e){return Promise.all([n.e("chunk-2d22c901"),n.e("chunk-8bf29ede")]).then(function(){var t=[n("a50b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"monthlybilling",name:"Monthly Billing",component:function(e){return Promise.all([n.e("chunk-2d22c901"),n.e("chunk-b148bee8")]).then(function(){var t=[n("584d")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"dailybilling",name:"Daily Billing",component:function(e){return Promise.all([n.e("chunk-2d22c901"),n.e("chunk-2d22c8a6")]).then(function(){var t=[n("f457")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"billingManagement",name:"Billing Management",component:function(e){return n.e("chunk-2d226169").then(function(){var t=[n("e6bd")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"users",meta:{label:"Users"},component:{render:function(e){return e("router-view")}},children:[{path:"ChangePw",name:"Change Password",component:function(e){return n.e("chunk-2d0cb6a8").then(function(){var t=[n("4a27")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"support",name:"Support",component:function(e){return n.e("chunk-1bfb8756").then(function(){var t=[n("1c9f")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"template",name:"Template",component:function(e){return n.e("chunk-2d0ac239").then(function(){var t=[n("17eb")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"support",redirect:"/support",name:"Support",component:{render:function(e){return e("router-view")}},children:[{path:"listtest",name:"ListTest",component:function(e){return n.e("chunk-2d21e33d").then(function(){var t=[n("d50f")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"ticketcontent/:num",name:"TicketContent",component:function(e){return n.e("chunk-2d208ca8").then(function(){var t=[n("a5fd")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"ticketcontent",name:"TicketContent",component:function(e){return n.e("chunk-2d208ca8").then(function(){var t=[n("a5fd")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"addlist",name:"AddList",component:function(e){return n.e("chunk-2d21d6b0").then(function(){var t=[n("d0e3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"awaitinglist",name:"AwaitingList",component:function(e){return n.e("chunk-2d0a3147").then(function(){var t=[n("013c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"historylist",name:"HistoryList",component:function(e){return Promise.all([n.e("chunk-2d22c901"),n.e("chunk-2d0d34f5")]).then(function(){var t=[n("5be7")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"automation",redirect:"/Automation",name:"Support",component:{render:function(e){return e("router-view")}},children:[{path:"billingalert",name:"BillingAlert",component:function(e){return n.e("chunk-2d0be337").then(function(){var t=[n("2ef4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"partner",name:"Partner",component:function(e){return n.e("chunk-2d208e0a").then(function(){var t=[n("a753")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"billingUpload/Upload",name:"Billing Upload",component:function(e){return n.e("chunk-2d0decdf").then(function(){var t=[n("86e0")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"*",name:"Page404",component:function(e){return n.e("chunk-2d0e5ad4").then(function(){var t=[n("9601")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}N.beforeEach((function(e,t,n){var a=window.sessionStorage.getItem("user");e.matched.some((function(e){return e.meta.requireAuth}))?a?n():n({name:"Login"}):n()}));var F=N,I=n("2106"),x=n.n(I),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),n("router-view")],1)},J=[],z={name:"App",data:function(){return{isLoading:!1}},components:{}},R=z,Y=(n("5c0b"),n("2877")),q=Object(Y["a"])(R,Z,J,!1,null,null,null),K=q.exports,$=n("cf2b"),H=n.n($),G=n("df0c"),W=n("9f0e"),X=n("2961"),Q=n("b356"),ee=n("94d7"),te=n("4d7c"),ne=n("2206"),ae=n("f041"),oe=n("2afe"),ce=n("90d2"),re=n("e545"),ie=n("114a"),le=n("b3de"),ue=n("b73b"),de=n("91a0"),se=n("454f"),fe=n("04bd"),he=n("eece"),pe=n("8a79f"),be=n("57a5"),me=n("f5d2"),ge=n("07df"),ve=n("068c"),ye=n("b297"),ke=n("0298"),we=n("4025"),Ae=n("dbcf"),Me=n("1615"),Se=n("66fb"),Ce=n("3e6d"),Pe=n("32dc"),Le=n("9b72"),Ee=n("6b74"),De=n("7c4d"),Te=n("0091"),Ve=n("8ae9"),je=n("ec97f"),Ue=n("b1e2"),Oe=n("8113"),_e=n("ac04"),Ne=n("7d3a"),Be=n("d919"),Fe=n("091a"),Ie=n("f510"),xe=n("6f22"),Ze=n("bb8b"),Je=n("95c4"),ze=n("4b7f"),Re=n("8aed"),Ye=n("cfe6"),qe=n("cbac"),Ke=n("7fe6"),$e=n("8eb7"),He=n("6061"),Ge=n("2462"),We=n("dddb"),Xe=n("74d6"),Qe=n("066b"),et=n("16b0"),tt=n("024d"),nt=n("8955"),at=n("c208"),ot=n("6e7a"),ct=n("1dba"),rt=n("0bc3"),it=n("8fde"),lt=n("40db"),ut=n("dc0c"),dt=n("ff4a"),st=n("13af"),ft=n("10bf"),ht=n("360e"),pt=n("99bf"),bt=n("cb3a"),mt=n("05a5"),gt=n("5cc68"),vt=n("baaf"),yt=n("4146"),kt=n("d17c"),wt=n("5402"),At=["556 134",'\n  <g>\n    <g style="fill:#1bbd93;">\n      <path d="M347.9818,90.0869l-11.84-43.52-.0644-.1924q0-.5112.6406-.5117h1.2793a.66.66,0,0,1,.7051.5762l10.623,39.68c.042.0859.0859.1279.1289.1279.041,0,.084-.042.127-.1279l10.625-39.68a.657.657,0,0,1,.7031-.5762h1.2168a.54.54,0,0,1,.5762.7041l-11.9043,43.52a.6584.6584,0,0,1-.7041.5761h-1.4082A.6577.6577,0,0,1,347.9818,90.0869Z"/>\n      <path d="M382.2786,89.5751a10.9023,10.9023,0,0,1-4.3515-4.5439,14.4586,14.4586,0,0,1-1.5362-6.7842V46.5029a.5656.5656,0,0,1,.64-.64h1.2168a.5659.5659,0,0,1,.64.64v32a10.5488,10.5488,0,0,0,2.72,7.5527,10.36,10.36,0,0,0,14.3359,0,10.5493,10.5493,0,0,0,2.7207-7.5527v-32a.5655.5655,0,0,1,.64-.64h1.2159a.5666.5666,0,0,1,.6406.64V78.247a13.01,13.01,0,0,1-3.3926,9.376,11.8974,11.8974,0,0,1-9.0234,3.5527A12.8481,12.8481,0,0,1,382.2786,89.5751Z"/>\n      <path d="M439.5843,48.1035H419.5521a.2263.2263,0,0,0-.2559.2558V66.8554a.2259.2259,0,0,0,.2559.2559h13.8242a.5665.5665,0,0,1,.6406.64v.96a.5665.5665,0,0,1-.6406.6406H419.5521a.2263.2263,0,0,0-.2559.2559v18.56a.2259.2259,0,0,0,.2559.2559h20.0322a.5665.5665,0,0,1,.64.6406v.96a.5655.5655,0,0,1-.64.64H417.4407a.5654.5654,0,0,1-.6406-.64v-43.52a.5658.5658,0,0,1,.6406-.64h22.1436a.5659.5659,0,0,1,.64.64v.96A.5658.5658,0,0,1,439.5843,48.1035Z"/>\n      <path d="M454.5921,89.5117a2.8385,2.8385,0,0,1-.8-2.0489,2.9193,2.9193,0,0,1,.8-2.1113,2.7518,2.7518,0,0,1,2.0791-.832,2.8465,2.8465,0,0,1,2.9443,2.9433,2.7561,2.7561,0,0,1-.832,2.08,2.9208,2.9208,0,0,1-2.1123.8008A2.7521,2.7521,0,0,1,454.5921,89.5117Z"/>\n      <path d="M474.931,88.0078a11.3087,11.3087,0,0,1-3.2-8.4161v-5.44a.5655.5655,0,0,1,.64-.64h1.2158a.5662.5662,0,0,1,.6407.64v5.5039a9.1421,9.1421,0,0,0,2.5283,6.72,8.9734,8.9734,0,0,0,6.6875,2.5606,8.7916,8.7916,0,0,0,9.28-9.28V46.5029a.5655.5655,0,0,1,.64-.64h1.2158a.5656.5656,0,0,1,.64.64V79.5917a11.2541,11.2541,0,0,1-3.2315,8.4161,13.0621,13.0621,0,0,1-17.0556,0Z"/>\n      <path d="M512.8753,88.1035a10.4847,10.4847,0,0,1-3.36-8.128v-1.792a.5665.5665,0,0,1,.6406-.6406h1.0879a.5666.5666,0,0,1,.64.6406v1.6a8.5461,8.5461,0,0,0,2.752,6.6563,10.5361,10.5361,0,0,0,7.36,2.4961,9.8741,9.8741,0,0,0,6.9766-2.3682,8.2188,8.2188,0,0,0,2.56-6.3359,8.3952,8.3952,0,0,0-1.12-4.416,11.3752,11.3752,0,0,0-3.3281-3.3926,71.6866,71.6866,0,0,0-6.1758-3.7119,71.0151,71.0151,0,0,1-6.24-3.84,12.1824,12.1824,0,0,1-3.4238-3.68,10.2659,10.2659,0,0,1-1.28-5.3437,9.86,9.86,0,0,1,3.0723-7.7441,12.0126,12.0126,0,0,1,8.3193-2.752q5.6969,0,8.9609,3.1035a10.8247,10.8247,0,0,1,3.2637,8.2246v1.6a.5658.5658,0,0,1-.6406.64h-1.1514a.5651.5651,0,0,1-.64-.64V56.8076a8.8643,8.8643,0,0,0-2.6241-6.6885,9.9936,9.9936,0,0,0-7.2324-2.5274,9.37,9.37,0,0,0-6.5283,2.1436,7.8253,7.8253,0,0,0-2.3672,6.1123,7.8088,7.8088,0,0,0,1.0235,4.16,10.3978,10.3978,0,0,0,3.0078,3.039,63.0249,63.0249,0,0,0,5.9521,3.4883,70.7955,70.7955,0,0,1,6.72,4.2559,13.4613,13.4613,0,0,1,3.6485,3.9365,10.044,10.044,0,0,1,1.28,5.1836,10.7185,10.7185,0,0,1-3.2647,8.1924q-3.2637,3.0717-8.832,3.0722Q516.2342,91.1757,512.8753,88.1035Z"/>\n    </g>\n    <g style="fill:currentColor;">\n      <g>\n        <path d="M99.367,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0337,12.0337,0,0,0-6,10.3924V91.4833a12.0331,12.0331,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0333,12.0333,0,0,0,6-10.3923V46.45A12.0336,12.0336,0,0,0,99.367,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.3886,82.0046h-2.866a4.0007,4.0007,0,0,0-1.9247.4934L55.3172,91.9833,35.367,80.4648V57.4872l19.95-11.5185L72.606,55.4236a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.16,38.9521a8.0389,8.0389,0,0,0-7.8427.09L31.3665,50.56a8.0245,8.0245,0,0,0-3.9995,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0427,8.0427,0,0,0,7.8432.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.3886,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.1117,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0167,15.0167,0,0,0,172.1117,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.4458,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9892.9892,0,0,0,.9842.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7161-13.8837A15.2881,15.2881,0,0,0,121.367,60.7968V77.2037A15.288,15.288,0,0,0,135.6112,92.62a15.0182,15.0182,0,0,0,15.7161-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9892.9892,0,0,0-.9842.865,7.0106,7.0106,0,0,1-7.868,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.4458,53.4211Z"/>\n        <path d="M218.2891,72.9277a12.1584,12.1584,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.324,46H196.367a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6215l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5912a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.3245,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.367,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.367,46Z"/>\n        <path d="M298.367,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.367,46Z"/>\n        <rect x="307.367" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],Mt=Object.assign({},{logo:At},{cilArrowRight:Ce["a"],cilBan:Pe["a"],cilBasket:Le["a"],cilBell:Ee["a"],cilCalculator:De["a"],cilCalendar:Te["a"],cilCloudDownload:Ve["a"],cilCloudUpload:je["a"],cilChartPie:Ue["a"],cilCheck:Oe["a"],cilChevronBottom:_e["a"],cilChevronTop:Ne["a"],cilChevronRight:Be["a"],cilCheckCircle:Fe["a"],cilCommentSquare:Ie["a"],cilCursor:xe["a"],cilDrop:Ze["a"],cilDollar:Je["a"],cilEnvelopeClosed:ze["a"],cilEnvelopeOpen:Re["a"],cilEuro:Ye["a"],cilGlobeAlt:qe["a"],cilGrid:Ke["a"],cilFile:$e["a"],cilJustifyCenter:He["a"],cilLaptop:Ge["a"],cilLayers:We["a"],cilLightbulb:Xe["a"],cilList:Qe["a"],cilLocationPin:et["a"],cilLockLocked:tt["a"],cilMagnifyingGlass:nt["a"],cilMoon:at["a"],cilOptions:ot["a"],cilPencil:ct["a"],cilPeople:rt["a"],cilPuzzle:it["a"],cilSettings:lt["a"],cilShieldAlt:ut["a"],cilSpeech:dt["a"],cilSpeedometer:st["a"],cilStar:ft["a"],cilTask:ht["a"],cilUser:pt["a"],cilUserFemale:bt["a"],cilUserFollow:mt["a"],cilXCircle:gt["a"],cilFullscreenExit:vt["a"],cilFullscreen:yt["a"],cilCog:kt["a"],cilMoney:wt["a"]},{cifUs:ye["a"],cifBr:ke["a"],cifIn:we["a"],cifFr:Ae["a"],cifEs:Me["a"],cifPl:Se["a"]},{cibFacebook:G["a"],cibTwitter:W["a"],cibLinkedin:X["a"],cibFlickr:Q["a"],cibTumblr:ee["a"],cibXing:te["a"],cibGithub:ne["a"],cibStackoverflow:ae["a"],cibYoutube:oe["a"],cibDribbble:ce["a"],cibInstagram:re["a"],cibPinterest:ie["a"],cibVk:le["a"],cibYahoo:ue["a"],cibBehance:de["a"],cibReddit:se["a"],cibVimeo:fe["a"],cibCcMastercard:he["a"],cibCcVisa:pe["a"],cibStripe:be["a"],cibPaypal:me["a"],cibGooglePay:ge["a"],cibCcAmex:ve["a"]}),St=n("ef55"),Ct=n.n(St),Pt=n("a925");function Lt(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];t[o]=e(n)}})),t}o["a"].use(Pt["a"]);var Et,Dt=window.navigator.userLanguage||window.navigator.language;Et="zh-TW"===Dt?"zh-TW":"zh-CN"===Dt?"zh-CN":"en";var Tt=new Pt["a"]({locale:Object({NODE_ENV:"production",VUE_APP_SECRET:"secret",VUE_APP_URL:"local",BASE_URL:""}).VUE_APP_I18N_LOCALE||Et,fallbackLocale:Object({NODE_ENV:"production",VUE_APP_SECRET:"secret",VUE_APP_URL:"local",BASE_URL:""}).VUE_APP_I18N_FALLBACK_LOCALE||"zh-TW",messages:Lt()}),Vt=n("9062"),jt=n.n(Vt),Ut=(n("e40d"),{getDateRange:function(){var e=new Date,t=e.getFullYear()+"/"+(e.getMonth()+1)+"/1 ~ "+e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate();return t},getMonth:function(){var e=new Date,t=e.getFullYear()+"/"+(e.getMonth()+1);return t},getChartMonth:function(){var e=new Date,t=new Array(12);t[0]="January",t[1]="February",t[2]="March",t[3]="April",t[4]="May",t[5]="June",t[6]="July",t[7]="August",t[8]="September",t[9]="October",t[10]="November",t[11]="December";var n=t[e.getMonth()]+" "+e.getFullYear();return n},getChartDate:function(){for(var e=new Date,t=e.getFullYear(),n=e.getMonth(),a=new Date(t,n+1,0),o=a.getDate(),c=new Array,r=0;r<o+1;r++)c[r-1]=r;return c},getSixMonth:function(){var e=new Date,t=new Array;e.setMonth(e.getMonth()+1,1);for(var n=0;n<6;n++){e.setMonth(e.getMonth()-1);var a=e.getMonth()+1;switch(a=a<10?"0"+a:a,a){case"01":a="January";break;case"02":a="February";break;case"03":a="March";break;case"04":a="April";break;case"05":a="May";break;case"06":a="June";break;case"07":a="July";break;case"08":a="August";break;case"09":a="September";break;case 10:a="October";break;case 11:a="November";break;case 12:a="December";break}t[n]=a}return t.reverse()},getOneYear:function(){var e=new Date,t=new Array;e.setMonth(e.getMonth()+1,1);for(var n=0;n<13;n++){e.setMonth(e.getMonth()-1);var a=e.getMonth()+1;switch(a=a<10?"0"+a:a,a){case"01":a="January";break;case"02":a="February";break;case"03":a="March";break;case"04":a="April";break;case"05":a="May";break;case"06":a="June";break;case"07":a="July";break;case"08":a="August";break;case"09":a="September";break;case 10:a="October";break;case 11:a="November";break;case 12:a="December";break}t[n]=a}return t.reverse()}});o["a"].prototype.common=Ut,o["a"].component("Loading",jt.a),o["a"].use(x.a,y.a),o["a"].use(c["a"]),o["a"].use(Ct.a),o["a"].config.performance=!0,o["a"].use(H.a),o["a"].prototype.$log=console.log.bind(console),y.a.interceptors.request.use((function(e){var t=window.sessionStorage.getItem("user");return t&&(e.headers.Authorization="token ".concat(t)),e}),(function(e){return Promise.reject(e)})),new o["a"]({el:"#app",i18n:Tt,router:F,store:_,icons:Mt,template:"<App/>",components:{App:K}})},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"869c":function(e,t,n){"use strict";var a=n("1b4a"),o=n("3452"),c=a["a"].$API_AES_KEY,r=a["a"].$API_IV;function i(e){var t=o.MD5(c).toString(),n=o.enc.Utf8.parse(t),a=o.enc.Utf8.parse(r),i=o.AES.encrypt(e,n,{iv:a,mode:o.mode.CBC,padding:o.pad.Pkcs7});return i.toString()}function l(e){var t=o.MD5(c).toString(),n=o.enc.Utf8.parse(t),a=o.enc.Utf8.parse(r),i=o.AES.decrypt(e,n,{iv:a,mode:o.mode.CBC,padding:o.pad.Pkcs7});return i.toString(o.enc.Utf8)}t["a"]={Decrypt:l,Encrypt:i}},9:function(e,t){},"9c0c":function(e,t,n){},"9ea5":function(e){e.exports=JSON.parse('{"login":{"login":"登入","signIn":"登錄到您的帳戶!"},"header":{"settings":"設定","profile":"個人資料","logout":"登出"},"nav":{"bill":"帳單","overview":"總覽","monthlyBilling":"每月帳單","DailyBilling":"每日帳單","billingManagement":"帳單管理","authorityManagement":"權限管理","billingUpload":"帳單上傳"},"dashboard":{"cost":"費用","flow":"流量","dailyFolw":"每日流量","dailyCost":"每日金額","commonServices":"常用服務","product":"產品","projectsMostUsage":"用量最多的專案","productMostUsage":"用量最多的產品","topFiveservices":"前五服務","topTenservices":"前十服務"},"profile":{"changPw":"變更密碼","confirmPw":"確認密碼"},"partner":{"customerNumber":"客戶編號","companyName":"公司名稱","taxID":"統一編號","companyAddress":"公司地址","contactPerson":"聯絡人","number":"聯絡電話"},"billing":{"project":"專案","to":"至","totalCost":"總費用","forecastTotalCost":"預測總費用","totalFlow":"總流量","service":"服務","cost":"費用","default":"預設","timeLimit":"時間範圍","groupBy":"分組依據","subtotal":"小計","projectID":"專案 ID","projectNumber":"專案編號","month":"月份","date":"日期","totalFolw":"總流量"},"support":{"technicalSupport":"技術支援","supportList":"支援單","addList":"新增支援單","checkList":"確認支援單"},"upload":{"type":"類型","fileUpload":"檔案上傳"},"auto":{"autoMation":"自動化管理","billingAlert":"帳單告警"}}')},edd4:function(e){e.exports=JSON.parse('{"login":{"login":"Login","signIn":"Sign In to your account!"},"header":{"settings":"Settings","profile":"Profile","logout":"Logout"},"nav":{"bill":"Bill","overview":"Overview","monthlyBilling":"Monthly Billing","DailyBilling":"Daily Billing","billingManagement":"Billing Management","authorityManagement":"Authority management","billingUpload":"Billing Upload"},"dashboard":{"cost":"Cost","flow":"Flow","dailyFolw":"Daily Folw","dailyCost":"Daily Cost","commonServices":"Common Services","product":"Product","projectsMostUsage":"Projects with the most usage","productMostUsage":"Product with the most usage","topFiveservices":"Top five services","topTenservices":"Top ten services"},"profile":{"changPw":"Chang Password","confirmPw":"Confirm Password"},"partner":{"customerNumber":"Customer Number","companyName":"Company Name","taxID":"TAX ID Number","companyAddress":"Company Address","contactPerson":"Contact Person","number":"Number"},"billing":{"project":"Project","to":"to","totalCost":"Total Cost","forecastTotalCost":"Forecast Total Cost","totalFlow":"Total Flow","service":"Service","cost":"Cost","default":"Default","timeLimit":"Time Limit","groupBy":"Group By","subtotal":"Sub Total","projectID":"Project ID","projectNumber":"Project Number","month":"Month","date":"Date","totalFolw":"Total Flow"},"support":{"technicalSupport":"Technical Support","supportList":"Support List","addList":"Add Support List","checkList":"Check Support List"},"upload":{"type":"Type","fileUpload":"File Upload"},"auto":{"autoMation":"Automation","billingAlert":"Billing Alert"}}')}});
//# sourceMappingURL=app.d5e0c616.js.map