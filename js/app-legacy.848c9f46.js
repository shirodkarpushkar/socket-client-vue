(function(e){function t(t){for(var n,a,u=t[0],s=t[1],i=t[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-6ff439d4":"163d54bb","chunk-f131cc12":"76b9aace"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-6ff439d4":1,"chunk-f131cc12":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6ff439d4":"a35a4f6f","chunk-f131cc12":"a7d517c0"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],l=i.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-socket-client/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0f00":function(e,t,r){e.exports={title:"_timeout_title_2_Msa"}},1:function(e,t){},"11c0":function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"mutations",function(){return s}),r.d(t,"getters",function(){return i}),r.d(t,"actions",function(){return l});r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c=(r("4328"),r("14b7"),Object({NODE_ENV:"production",VUE_APP_BACKEND_SERVER:"https://socket-b911.herokuapp.com",VUE_APP_PUBLIC_PATH:"/vue-socket-client/",BASE_URL:"/vue-socket-client/"}).VUE_APP_REDIRECT_OAUTH_URL,"https://socket-b911.herokuapp.com"),u={authToken:p("authToken")},s={SET_CURRENT_USER_AUTHTOKEN:function(e,t){e.authToken=t,d("authToken",t),f(e)}},i={loggedIn:function(e){return!!e.authToken},getAuthenticationToken:function(e){return e.authToken}},l={init:function(e){var t=e.state;e.dispatch;null!==t.authToken&&f(t)},logIn:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,u,s,i,l,p,d=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,n=t.dispatch,a=t.getters,u=d.length>1&&void 0!==d[1]?d[1]:{},s=u.emailAddress,i=u.userPassword,!a.loggedIn){e.next=4;break}return e.abrupt("return",n("validate"));case 4:return e.prev=4,e.next=7,o()({method:"post",url:"".concat(c,"user/signin"),data:{emailAddress:s,userPassword:i}});case 7:return l=e.sent,p=l.data,r("SET_CURRENT_USER_AUTHTOKEN",p),e.abrupt("return",p);case 13:throw e.prev=13,e.t0=e["catch"](4),console.log("TCL: error",e.t0),e.t0;case 17:case"end":return e.stop()}},e,this,[[4,13]])}));return function(t){return e.apply(this,arguments)}}(),logOut:function(e){var t=e.commit;t("SET_CURRENT_USER_AUTHTOKEN",null)},validate:function(e){e.commit;var t=e.state;return t.authToken?new Promise(function(e,t){e(!0)}):Promise.resolve(null)}};function p(e){return JSON.parse(window.sessionStorage.getItem(e))}function d(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}function f(e){o.a.defaults.headers.common["auth"]=e.authToken?e.authToken.result[0].token:""}},1933:function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"getters",function(){return s}),r.d(t,"mutations",function(){return i}),r.d(t,"actions",function(){return l});r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c="https://socket-b911.herokuapp.com",u={auditResources:[],auditResourcesByID:[]},s={get_resources:function(e){return e.auditResources},get_resources_by_ID:function(e){return e.auditResourcesByID}},i={SET_RESOURCES:function(e,t){e.auditResources=t},SET_RESOURCES_BY_ID:function(e,t){e.auditResourcesByID=t}},l={getAuditResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s,i,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.page,u=r.columnName,s=r.order,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"audit_logs?order[").concat(u,"]=").concat(s,"&page=").concat(a)});case 5:return i=e.sent,l=i.data,n("SET_RESOURCES",l),e.abrupt("return",l);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: getResources -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}(),getAuditResourcesBySearch:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s,i,l,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.page,a=r.columnName,u=r.order,s=r.tableName,i=r.blameLabel,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"audit_logs?order[").concat(a,"]=").concat(u,"&page=").concat(n,"&tbl=").concat(s,"&blame.label=").concat(i)});case 5:return l=e.sent,p=l.data,e.abrupt("return",p);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: getAuditResourcesBySearch -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),getAuditResourcesByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.id,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"audit_logs/").concat(a),headers:{"X-AUTH-TOKEN":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHY3RBOFdfZXNaRkxtRklhX0lPZENFS1RRcllvOGxoU0MzalVFY1czbE00In0.eyJqdGkiOiJkZDhlYmE3OS01MWE2LTQzMzMtYjQ2Ny1lN2QzNWRkNGY1MWYiLCJleHAiOjE1NzU4ODM0MzIsIm5iZiI6MCwiaWF0IjoxNTc1ODcyNjMyLCJpc3MiOiJodHRwczovL2F1dGguc2d0d28uaW8vYXV0aC9yZWFsbXMvc2d0d28taW50ZXJuYWwiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOTkyMWFhM2UtNThmZC00MzM2LTk2MmEtN2Y2MTA2ODIwNDI2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2d0d28tY2F0YWxvZy1kZXYiLCJhdXRoX3RpbWUiOjE1NzU4NzAyOTEsInNlc3Npb25fc3RhdGUiOiJmYTQ0Y2RhMi1kNGFiLTRkNGEtYTUzYi1mZmFkNTdhMjM1MGMiLCJhY3IiOiIwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInNndHdvX2FkbWluIiwib2ZmbGluZV9hY2Nlc3MiLCJzZ3R3b19zdGFmZiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgb2ZmbGluZV9hY2Nlc3MgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUHVzaGthciBTaGlyb2RrYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwdXNoa2Fyc0B3aW5qaXQuY29tIiwiZ2l2ZW5fbmFtZSI6IlB1c2hrYXIiLCJmYW1pbHlfbmFtZSI6IlNoaXJvZGthciIsImVtYWlsIjoicHVzaGthcnNAd2luaml0LmNvbSJ9.k_KOsfIanE0kpJCExsT4Rhscw7y1yoofNpUh5T90lDC63KMa_uI0zee_jWw-DoMme50nk_ugbDDxskGzRYEPwSOThXQXWjiifhccmJMWCRiTPhrwJwjKm-N7vDY6Nt9PgawLylL-O3egEu3301ZUwgT2TQ1AVddvekbdtm8kKQmzi_RdjrsqrzmzdDEcmNE817wSlszAQNQcOTzgfyXK1h4HcM1oisnpTEMAwujWBaElXHlwOwD20-P6gw_JxnNo4CfGIerkUxJ4ult4Vh2XxNxLtk1TaiQ-61pNlc4WKkRC5QJnU4guOju8Z-HKGl918rMNUd0LzFEyEXlzKj-S-g"}});case 5:return u=e.sent,s=u.data,n("SET_RESOURCES_BY_ID",s),e.abrupt("return",s);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: getResources -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}()}},2:function(e,t){},"22ca":function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"getters",function(){return s}),r.d(t,"mutations",function(){return i}),r.d(t,"actions",function(){return l});r("386d"),r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c="https://socket-b911.herokuapp.com",u={productResources:[],uploadPercentage:0,uploadDocumentPercentage:0},s={get_resources:function(e){return e.productResources},get_image_upload_percentage:function(e){return e.uploadPercentage},get_file_upload_percentage:function(e){return e.uploadDocumentPercentage}},i={SET_PRODUCT_RESOURCES:function(e,t){e.productResources=t},SET_UPLOADPERCENTAGE:function(e,t){e.uploadPercentage=t},SET_UPLOAD_DOCUMENT_PERCENTAGE:function(e,t){e.uploadDocumentPercentage=t}},l={getSingleProductById:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"single_products/").concat(n)});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: getSingleProductByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),patchSingleProductById:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,a=r.data,e.prev=2,e.next=5,o()({method:"patch",url:"".concat(c,"single_products/").concat(n),data:a,headers:{"Content-Type":"application/merge-patch+json"}});case 5:return u=e.sent,s=u.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: patchSingleProductByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),postSingleProductResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"single_products"),data:n});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: postResources -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),uploadFile:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.data,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"images"),data:a,headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var t=parseInt(Math.round(100*e.loaded/e.total));n("SET_UPLOADPERCENTAGE",t)}});case 5:return u=e.sent,s=u.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: upload -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),uploadDocuments:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.data,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"pdfs"),data:a,headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var t=parseInt(Math.round(100*e.loaded/e.total));n("SET_UPLOAD_DOCUMENT_PERCENTAGE",t)}});case 5:return u=e.sent,s=u.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: upload documents -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),getSingleProductResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s,i,l,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.columnName,u=r.order,s=r.page,i=r.search,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"single_products/?order[").concat(a,"]=").concat(u,"&page=").concat(s,"&search=").concat(i)});case 5:return l=e.sent,p=l.data,n("SET_PRODUCT_RESOURCES",p),e.abrupt("return",p);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: getSingleProductResources -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}(),getAllSingleProductResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.columnName,a=r.order,u=r.pagination,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"single_products/?order[").concat(n,"]=").concat(a,"&pagination=").concat(u)});case 5:return s=e.sent,i=s.data,e.abrupt("return",i);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: getSingleProductResources -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),downloadSingleProductFile:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.file,e.prev=2,e.next=5,o()({method:"get",url:n.url,responseType:"arraybuffer"});case 5:return a=e.sent,c=a.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: downloadFile -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),deleteProductByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"delete",url:"".concat(c,"single_products/").concat(n)});case 5:return a=e.sent,u=a.data,204===a.status&&console.log("Deleted Successfully"),e.abrupt("return",u);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: deleteResourcesByID -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}(),deletefileByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"delete",url:"".concat(c,"pdfs/").concat(n)});case 5:return a=e.sent,u=a.data,204===a.status&&console.log("Deleted file Successfully"),e.abrupt("return",u);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: deletefileByID -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}(),deleteImageByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"delete",url:"".concat(c,"images/").concat(n)});case 5:return a=e.sent,u=a.data,204===a.status&&console.log("Deleted image Successfully"),e.abrupt("return",u);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: deleteResourcesByID -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}()}},2856:function(e,t,r){},2883:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("Transition",{attrs:{appear:""}})],1)},a=[],o=r("444f"),c={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{Layout:o["a"]}},u=c,s=r("46e4"),i=r("2877");function l(e){this["$style"]=s["default"].locals||s["default"]}var p=Object(i["a"])(u,n,a,!1,l,null,null);t["default"]=p.exports},3:function(e,t){},4:function(e,t){},"444f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[e._v("\n  Loading..\n")])},a=[],o=(r("a481"),{data:function(){return{}},methods:{},created:function(){}}),c=o,u=r("2877"),s=Object(u["a"])(c,n,a,!1,null,"f9f1e88c",null);t["a"]=s.exports},"46e4":function(e,t,r){"use strict";var n=r("6db2"),a=r.n(n);t["default"]=a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("551c");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("RouterView",{key:e.$route.fullPath})],1)],1)},o=[],c=r("c2a4"),u={page:{titleTemplate:function(e){return e="function"===typeof e?e(this.$store):e,e?"".concat(e," | ").concat(c.title):c.title}}},s=u,i=(r("5c0b"),r("2877")),l=Object(i["a"])(s,a,o,!1,null,null,null),p=l.exports,d=(r("ac4d"),r("8a81"),r("ac6a"),r("96cf"),r("cb0c")),f=(r("7f7f"),r("8c4f")),h=r("0a89"),m=r.n(h),g=r("323e"),v=r.n(g),w=r("2f62"),R=(r("3846"),r("9395")),b=(r("a481"),r("28a5"),r("cadf"),r("bba4")),y=r.n(b),T={},C={modules:{}};function E(e,t){if(1===t.length)return e;var r=t.shift();return e.modules[r]=Object(R["a"])({modules:{},namespaced:!0},e.modules[r]),E(e.modules[r],t)}(function(){var e=r("cfa9");e.keys().forEach(function(t){var r=e(t);if(T[t]!==r){T[t]=r;var n=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(y.a),a=E(C,n),o=a.modules;o[n.pop()]=Object(R["a"])({namespaced:!0},r)}})})();var _=C.modules;function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.modules,n=void 0===r?_:r,a=t.modulePrefix,o=void 0===a?"":a,c=t.flags,u=void 0===c?{}:c;for(var s in n){var i=n[s];i.actions&&i.actions[e]&&(i.namespaced?O.dispatch("".concat(o).concat(s,"/").concat(e)):u.dispatchGlobal=!0),i.modules&&x(e,{modules:i.modules,modulePrefix:o+s+"/",flags:u})}!o&&u.dispatchGlobal&&O.dispatch(e)}n["a"].use(w["a"]);var k=new w["a"].Store({modules:_,strict:!1}),O=k;x("init");var I=[{path:"/",redirect:"join"},{path:"/join",name:"join",component:function(){return S(r.e("chunk-6ff439d4").then(r.bind(null,"17cb")))}},{path:"/home",name:"home",component:function(){return S(r.e("chunk-f131cc12").then(r.bind(null,"51d9")))}},{path:"/404",name:"404",component:r("bdd2").default,props:!0},{path:"*",redirect:"404"}];function S(e){var t=function(){return{component:e,loading:r("2883").default,delay:400,error:r("ef68").default,timeout:1e4}};return Promise.resolve({functional:!0,render:function(e,r){var n=r.data,a=r.children;return e(t,n,a)}})}r("14b7");n["a"].use(f["a"]),n["a"].use(m.a,{keyName:"metaInfo"});var j=new f["a"]({routes:I,base:"/vue-socket-client/",mode:"history",scrollBehavior:function(e,t,r){return r||{x:0,y:0}}});j.beforeEach(function(e,t,r){null!==t.name&&v.a.start();var n=e.matched.some(function(e){return e.meta.authRequired});if(!n||"logout"===e.name)return r();if(O.getters["auth/loggedIn"])return O.dispatch("auth/validate").then(function(e){console.log("TCL: validUser",e),e?r():a()});function a(){r({name:"signin",query:{redirectFrom:e.fullPath}})}a()}),j.beforeResolve(function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,o,c,u,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,a=!0,o=!1,c=void 0,e.prev=4,u=regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=i.value,e.next=3,new Promise(function(e,o){a.meta&&a.meta.beforeResolve?a.meta.beforeResolve(t,r,function(){for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];a.length?(r.name===a[0].name&&v.a.done(),n.apply(void 0,a),o(new Error("Redirected"))):e()}):e()});case 3:case"end":return e.stop()}},e,this)}),s=t.matched[Symbol.iterator]();case 7:if(a=(i=s.next()).done){e.next=12;break}return e.delegateYield(u(),"t0",9);case 9:a=!0,e.next=7;break;case 12:e.next=18;break;case 14:e.prev=14,e.t1=e["catch"](4),o=!0,c=e.t1;case 18:e.prev=18,e.prev=19,a||null==s.return||s.return();case 21:if(e.prev=21,!o){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:return e.prev=28,e.t2=e["catch"](0),e.abrupt("return");case 31:n();case 32:case"end":return e.stop()}},e,this,[[0,28],[4,14,18,26],[19,,21,25]])}));return function(t,r,n){return e.apply(this,arguments)}}()),j.afterEach(function(e,t){v.a.done()});var N=j,L=r("1dce"),U=r.n(L),D=r("caf9"),P=r("a65d"),B=r.n(P),A=r("7212"),Y=r.n(A);r("dfa4");n["a"].use(D["a"]),n["a"].use(U.a),n["a"].use(B.a),n["a"].use(Y.a),n["a"].config.productionTip=!0,window.Cypress&&(n["a"].config.errorHandler=window.Cypress.cy.onUncaughtException);var M=new n["a"]({router:N,store:O,render:function(e){return e(p)}}).$mount("#app");window.Cypress&&(window.__app__=M)},"5c0b":function(e,t,r){"use strict";var n=r("2856"),a=r.n(n);a.a},"603c":function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"getters",function(){return s}),r.d(t,"mutations",function(){return i}),r.d(t,"actions",function(){return l});r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c="https://socket-b911.herokuapp.com",u={countryResource:[],categoryResource:[]},s={get_country:function(e){return e.countryResource},get_category:function(e){return e.categoryResource}},i={SET_COUNTRY_RESOURCES:function(e,t){e.countryResource=t},SET_CATEGORY_RESOURCES:function(e,t){e.categoryResource=t}},l={getCountry:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.pagination,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"countries/?pagination=").concat(a)});case 5:return u=e.sent,s=u.data,n("SET_COUNTRY_RESOURCES",s),e.abrupt("return",s);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: getCountry -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}(),getCountryByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"countries/").concat(n)});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: getCountryByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),patchCountryByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,a=r.data,e.prev=2,e.next=5,o()({method:"patch",url:"".concat(c,"countries/").concat(n),data:a,headers:{"Content-Type":"application/merge-patch+json"}});case 5:return u=e.sent,s=u.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: patchCountryByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),getCategories:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,o()({method:"get",url:"".concat(c,"categories")});case 4:return n=e.sent,a=n.data,r("SET_CATEGORY_RESOURCES",a),e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e["catch"](1),console.log("TCL: getCategories -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),deleteCountryByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,console.log("TCL: deleteCountryByID -> id",n),e.prev=3,e.next=6,o()({method:"delete",url:"".concat(c,"countries/").concat(n)});case 6:return a=e.sent,u=a.data,204===u.status&&console.log("Deleted Successfully"),e.abrupt("return",u);case 12:throw e.prev=12,e.t0=e["catch"](3),console.log("TCL: deleteCountryByID -> error",e.t0),e.t0;case 16:case"end":return e.stop()}},e,this,[[3,12]])}));return function(t,r){return e.apply(this,arguments)}}(),postCountry:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"countries"),data:n,headers:{"Content-Type":"application/ld+json"}});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: postCountry -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}()}},"6db2":function(e,t,r){e.exports={loadingIcon:"_loading_loadingIcon_3bRIP"}},9400:function(e,t,r){"use strict";r.r(t),r.d(t,"EventBus",function(){return a});var n=r("2b0e"),a=new n["a"]},b20d:function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return o}),r.d(t,"getters",function(){return c}),r.d(t,"mutations",function(){return u}),r.d(t,"actions",function(){return s});r("7514");var n=r("bc3a"),a=r.n(n),o={cached:[]},c={},u={CACHE_USER:function(e,t){e.cached.push(t)}},s={fetchUser:function(e,t){var r=e.commit,n=e.state,o=e.rootState,c=t.username,u=o.auth.currentUser;if(u&&u.username===c)return Promise.resolve(u);var s=n.cached.find(function(e){return e.username===c});return s?Promise.resolve(u):a.a.get("/api/users/".concat(c)).then(function(e){var t=e.data;return r("CACHE_USER",t),t})}}},bdd2:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{height:"calc(100vh - 58px)"},attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":""}},[r("v-flex",{attrs:{"text-xs-center":""}},[r("h1",{staticClass:"display-2 primary--text"},[e._v("Whoops, 404")]),r("p",[e._v("The page you were looking for does not exist")]),r("v-btn",{attrs:{to:"/home",outline:"",color:"primary"}},[e._v("\n        Get me out of here!\n      ")])],1)],1)],1)},a=[],o={name:"FourOhFour",created:function(){this.$ssrContext&&this.$ssrContext.res.status(404)}},c=o,u=r("2877"),s=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=s.exports},c2a4:function(e){e.exports={title:"App",description:""}},cfa9:function(e,t,r){var n={"./audit.js":"1933","./auth.js":"11c0","./catalogs.js":"d3c9","./country.js":"603c","./dashboard.js":"d959","./event-bus.js":"9400","./masters.js":"d6e1","./products.js":"22ca","./users.js":"b20d"};function a(e){var t=o(e);return r(t)}function o(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="cfa9"},d3c9:function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"getters",function(){return s}),r.d(t,"mutations",function(){return i}),r.d(t,"actions",function(){return l});r("7f7f"),r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c="https://socket-b911.herokuapp.com",u={entityResources:[]},s={get_resources:function(e){return e.entityResources}},i={SET_RESOURCES:function(e,t){e.entityResources=t}},l={getCatalogResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,o()({method:"get",url:"".concat(c,"catalogs")});case 4:return n=e.sent,a=n.data,r("SET_RESOURCES",a),e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e["catch"](1),console.log("TCL: getResources -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),postCatalogResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.data,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"catalogs"),data:n});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: postResources -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),getCatalogResourcesByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"catalogs/").concat(n)});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: getResourcesByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),getProductResourcesByCatalogID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"single_products/?catalogs=").concat(n)});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: current catalog products -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),deleteCatalogResourcesByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,e.prev=2,e.next=5,o()({method:"delete",url:"".concat(c,"catalogs/").concat(n)});case 5:return a=e.sent,u=a.data,204===a.status&&console.log("Deleted Successfully"),e.abrupt("return",u);case 11:throw e.prev=11,e.t0=e["catch"](2),console.log("TCL: deleteResourcesByID -> error",e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t,r){return e.apply(this,arguments)}}(),putCatalogResourcesByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,a=r.data,e.prev=2,e.next=5,o()({method:"put",url:"".concat(c,"catalogs/").concat(n),data:a});case 5:return u=e.sent,s=u.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: putResourcesByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),patchCatalogResourcesByID:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.id,a=r.data,e.prev=2,e.next=5,o()({method:"patch",url:"".concat(c,"catalogs/").concat(n),data:a,headers:{"Content-Type":"application/merge-patch+json"}});case 5:return u=e.sent,s=u.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: patchResourcesByID -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),getAllProductsByName:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.name,e.prev=2,e.next=5,o()({method:"get",url:"".concat(c,"single_products?name=").concat(n,"&pagination=false&order[name]=asc")});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: search products -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}()}},d6e1:function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"getters",function(){return s}),r.d(t,"mutations",function(){return i}),r.d(t,"actions",function(){return l});r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c="https://socket-b911.herokuapp.com",u={entityResources:[]},s={get_resources:function(e){return e.entityResources}},i={SET_USER:function(e,t){e.entityResources=t}},l={signUpUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.userData,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"user/signup"),data:n});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: signUpUser -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),confirmEmail:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.emailData,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"user/emailVerification"),data:n});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: confirmEmail -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),forgotPassword:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.emailData,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"user/forgotPassword"),data:n});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: forgotPassword -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}(),resetPassword:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=r.emailData,e.prev=2,e.next=5,o()({method:"post",url:"".concat(c,"user/resetPassword"),data:n});case 5:return a=e.sent,u=a.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e["catch"](2),console.log("TCL: resetPassword -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t,r){return e.apply(this,arguments)}}()}},d746:function(e,t,r){"use strict";var n=r("0f00"),a=r.n(n);t["default"]=a.a},d959:function(e,t,r){"use strict";r.r(t),r.d(t,"state",function(){return u}),r.d(t,"getters",function(){return s}),r.d(t,"mutations",function(){return i}),r.d(t,"actions",function(){return l});r("96cf");var n=r("cb0c"),a=r("bc3a"),o=r.n(a),c="https://socket-b911.herokuapp.com",u={dashboardData:{}},s={getDashboardResources:function(){return u.dashboardData}},i={SET_RESOURCES:function(e,t){e.dashboardData=t}},l={getResources:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,o()({method:"get",url:"".concat(c,"openInfo")});case 4:return n=e.sent,a=n.data,r("SET_RESOURCES",a),e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e["catch"](1),console.log("TCL: getResources -> error",e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()}},ef68:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("h1",{class:e.$style.title},[e._v("\n    The page timed out while loading. Are you sure you're still connected to\n    the Internet?\n  ")])])},a=[],o=r("444f"),c={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{Layout:o["a"]}},u=c,s=r("d746"),i=r("2877");function l(e){this["$style"]=s["default"].locals||s["default"]}var p=Object(i["a"])(u,n,a,!1,l,null,null);t["default"]=p.exports}});