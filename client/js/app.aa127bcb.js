(function(){"use strict";var e={7324:function(e,t,n){var r=n(9876),o=n(9963),i=n(6252);function u(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var a=n(3744);const l={},c=(0,a.Z)(l,[["render",u]]);var s=c,f=n(5205);(0,f.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n(2201),p={class:"content-wrapper"};function m(e,t,n,r,o,u){var a=(0,i.up)("SideNav"),l=(0,i.up)("Sider"),c=(0,i.up)("TopHeader"),s=(0,i.up)("Header"),f=(0,i.up)("router-view"),d=(0,i.up)("Content"),m=(0,i.up)("Layout");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(l,{trigger:null,style:{overflow:"auto",height:"100vh",position:"fixed",paddingTop:"64px",left:0,top:0,bottom:0}},{default:(0,i.w5)((function(){return[(0,i.Wm)(a)]})),_:1}),(0,i.Wm)(m,{style:{marginLeft:"200px",position:"relative"}},{default:(0,i.w5)((function(){return[(0,i.Wm)(s,{style:{position:"fixed",right:0,left:"200px",padding:"0",zIndex:1}},{default:(0,i.w5)((function(){return[(0,i.Wm)(c)]})),_:1}),(0,i.Wm)(d,{style:{margin:"80px 0 0"}},{default:(0,i.w5)((function(){return[(0,i._)("div",p,[(0,i.Wm)(f)])]})),_:1})]})),_:1})]})),_:1})}var h=n(7582);function v(e,t,n,r,o,u){var a=(0,i.up)("Button"),l=(0,i.up)("PageHeader");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l,{title:e.title,"sub-title":e.subTitle,ghost:!1,onBack:t[0]||(t[0]=function(){return e.$router.go(-1)}),avatar:{src:"https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"}},{extra:(0,i.w5)((function(){return[(0,i.Wm)(a,{key:"1",onClick:e.goToProfile},{default:(0,i.w5)((function(){return[(0,i.Uk)("Profile")]})),_:1},8,["onClick"])]})),_:1},8,["title","sub-title","avatar"])])}var g=n(9892),b=n(9868),y={PageHeader:g.Z,Button:b.Z},w=(0,i.aZ)({name:"TopHeader",components:(0,h.pi)({},y),watch:{$route:function(){this.title=this.$route.meta.title,this.subTitle=this.$route.meta.subTitle}},data:function(){return{title:this.$route.meta.title,subTitle:this.$route.meta.subTitle}},methods:{goToProfile:function(){this.$router.push("/profile")}}});const k=(0,a.Z)(w,[["render",v]]);var P=k,T=(0,i._)("div",{class:"logo"},null,-1),_=(0,i._)("span",null,"Home",-1),C=(0,i._)("span",null,"nav 2",-1),O=(0,i._)("span",null,"nav 3",-1);function W(e,t,n,r,o,u){var a=(0,i.up)("UserOutlined"),l=(0,i.up)("MenuItem"),c=(0,i.up)("video-camera-outlined"),s=(0,i.up)("upload-outlined"),f=(0,i.up)("Menu");return(0,i.wg)(),(0,i.iD)(i.HY,null,[T,(0,i.Wm)(f,{selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[0]||(t[0]=function(t){return e.selectedKeys=t}),theme:"dark",mode:"inline"},{default:(0,i.w5)((function(){return[(0,i.Wm)(l,{key:"1"},{default:(0,i.w5)((function(){return[(0,i.Wm)(a),_]})),_:1}),(0,i.Wm)(l,{key:"2"},{default:(0,i.w5)((function(){return[(0,i.Wm)(c),C]})),_:1}),(0,i.Wm)(l,{key:"3"},{default:(0,i.w5)((function(){return[(0,i.Wm)(s),O]})),_:1})]})),_:1},8,["selectedKeys"])],64)}var S=n(4924),j=n(8879),N=n(8629),x=n(2262),Z={Menu:j.ZP,MenuItem:N.Z,UserOutlined:S.Z},A=(0,i.aZ)({name:"SideNav",components:(0,h.pi)({},Z),props:{collapsed:{type:Boolean,default:!1}},setup:function(){return{selectedKeys:(0,x.iH)(["1"])}}}),E=A;const H=(0,a.Z)(E,[["render",W]]);var B=H,L=n(5998),$=n(6028),F=n(8824),K={Layout:L.ZP,Sider:$.Z,Header:F.h4,Content:F.VY,Footer:F.$_},M=(0,i.aZ)({name:"AppLayout",components:(0,h.pi)((0,h.pi)({},K),{TopHeader:P,SideNav:B})});const U=(0,a.Z)(M,[["render",m]]);var D=U,I=[{path:"/",name:"home",component:D,children:[{path:"",meta:{title:"Home Page",subTitle:"Public posts"},component:function(){return Promise.all([n.e(121),n.e(100),n.e(260),n.e(805)]).then(n.bind(n,8805))}},{path:"profile",meta:{title:"Profile",subTitle:"Your profile"},component:function(){return Promise.all([n.e(121),n.e(100),n.e(527)]).then(n.bind(n,8527))},children:[{path:"",component:function(){return Promise.all([n.e(121),n.e(790)]).then(n.bind(n,1790))}},{path:"posts",component:function(){return n.e(883).then(n.bind(n,4883))}}]}]},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,3364))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e(121),n.e(100),n.e(260),n.e(632)]).then(n.bind(n,9632))}}],q=(0,d.p7)({history:(0,d.PO)("/"),routes:I}),Y=q,z=(n(1849),(0,r.WB)());(0,o.ri)(s).use(z).use(Y).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{100:"485f8926",121:"b43dfc1a",260:"67aa6550",443:"c2a324ed",527:"8b2857c1",632:"9289ee8f",790:"437f6c15",805:"8f7528bf",883:"a7701d3e"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{527:"878fc033",632:"3099907b",805:"a263be42"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=a,i.parentNode&&i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={527:1,632:1,805:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var s=l(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7324)}));r=n.O(r)})();
//# sourceMappingURL=app.aa127bcb.js.map