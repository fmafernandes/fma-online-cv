(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"51641e60"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"dff5017f"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],d.parentNode.removeChild(d),n(o)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",p.name="ChunkLoadError",p.type=r,p.request=i,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2314:function(e,t,n){},3654:function(e,t,n){"use strict";var r=n("caba"),i=n.n(r);i.a},4567:function(e,t,n){"use strict";var r=n("2314"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),i=(n("4989"),n("ab8b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav-bg"},[n("nav",{staticClass:"navbar navbar-expand-sm justify-content-sm-center wrapper-width"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/images/fmaf-logo.png",width:"30",height:"30",alt:""}})])],1),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsableNavbar"}},[n("div",{staticClass:"navbar-nav text-center"},[n("router-link",{attrs:{to:"/about"}},[e._v("About me")]),n("router-link",{attrs:{to:"/experience"}},[e._v("Experience")]),n("router-link",{attrs:{to:"/projects"}},[e._v("Projects")])],1)])])]),n("div",{staticClass:"wrapper-width py-3"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)])}),a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cross-btn-container"},[n("button",{staticClass:"navbar-toggler navbar-toggler-right collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsableNavbar"}},[n("span"),n("span"),n("span")])])}],o=(n("5c0b"),n("2877")),s={},c=Object(o["a"])(s,i,a,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"experience"},[n("h1",[e._v("Experience")]),e._l(e.experienceData,(function(e,t){return n("ExperienceSection",{key:t,attrs:{experienceItem:e}})}))],2)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"experienceSection p-2"},[n("div",{staticClass:"card"},[n("h4",{staticClass:"position"},[e._v(" "+e._s(e.experienceItem.position)+" "),n("span",{staticClass:"type"},[e._v("("+e._s(e.experienceItem.type)+")")])]),n("h3",{staticClass:"institution"},[e._v(e._s(e.experienceItem.institution))]),n("div",{staticClass:"date"},[e._v(e._s(e.experienceItem.start)+" - "+e._s(e.experienceItem.end))]),n("div",{staticClass:"description"},[n("div",{staticClass:"avenir-black"},[e._v("Description:")]),n("div",{staticClass:"pl-3"},[e._v(e._s(e.experienceItem.description))])]),n("div",{staticClass:"responsabilities"},[n("div",{staticClass:"avenir-black"},[e._v("Responsabilities:")]),e._l(e.experienceItem.responsabilities,(function(t,r){return n("li",{key:r,staticClass:"pl-3"},[e._v(e._s(t))])}))],2),n("div",{staticClass:"technologies"},[n("div",{staticClass:"avenir-black"},[e._v("Technologies:")]),e._l(e.experienceItem.technologies,(function(t,r){return n("li",{key:r,staticClass:"pl-3"},[e._v(e._s(t))])}))],2)])])},v=[],m={name:"ExperienceSection",props:{experienceItem:{type:Object,required:!0}}},g=m,b=(n("4567"),Object(o["a"])(g,f,v,!1,null,null,null)),h=b.exports,_={name:"Experience",components:{ExperienceSection:h},data:function(){return{experienceData:[{position:"Front-end Developer",type:"Internship",institution:"Google",start:"01/01/2010",end:"31/12/2010",description:"Did a lot of fun stuff",responsabilities:["Front-end","Serving coffee"],technologies:["Angular","Nespresso"]},{position:"Quality Assurance",type:"Part-time",institution:"Amazon",start:"01/01/2012",end:"31/12/2014",description:"Neverendless effort towards a goal",responsabilities:["Network","Quality Assurance"],technologies:["AWS","ElasticSearch"]},{position:"Back-end Developer",type:"Full-time",institution:"Microsoft",start:"01/01/2015",end:"31/12/2019",description:"Built some cool code",responsabilities:["Back-end","Testing"],technologies:["IIS"]}]}}},j=_,y=Object(o["a"])(j,p,d,!1,null,null,null),C=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("h1",[e._v("Personal Projects")]),e._l(e.projectsData,(function(e,t){return n("ProjectSection",{key:t,attrs:{projectsItem:e}})}))],2)},x=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projectsSection p-2"},[n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[e._v(e._s(e.projectsItem.title))]),n("div",[n("img",{staticClass:"img-fluid",attrs:{alt:"",src:e.projectsItem.image}})]),n("div",[e._v(e._s(e.projectsItem.description))])])])},E=[],S={name:"ProjectSection",props:{projectsItem:{type:Object,required:!0}}},P=S,O=(n("741a"),Object(o["a"])(P,k,E,!1,null,null,null)),I=O.exports,A={name:"Projects",components:{ProjectSection:I},data:function(){return{projectsData:[{title:"Super Cool Project",image:"/img/images/logo.png",description:"This super cool project was projected to be very cool and awesome"},{title:"Amazing Project",image:"/img/images/logo.png",description:"This amazing project was projected to be amazingly awesome"},{title:"Incredible Project",image:"/img/images/logo.png",description:"This incredible project was projected to be incredibly awesome"}]}}},N=A,T=Object(o["a"])(N,w,x,!1,null,null,null),D=T.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home p-2"},[n("div",{staticClass:"card"},[n("h1",{staticClass:"name"},[e._v(e._s(e.info.name))]),n("h3",{staticClass:"position"},[e._v(e._s(e.info.position))]),n("div",[e._v("Social")]),n("a",{staticClass:"social",attrs:{href:"mailto:"+e.info.social.email,target:"_blank"}},[e._v(e._s(e.info.social.email))]),n("a",{staticClass:"social",attrs:{href:"//"+e.info.social.linkedin,target:"_blank"}},[e._v(e._s(e.info.social.linkedin))]),n("a",{staticClass:"social",attrs:{href:"//"+e.info.social.github,target:"_blank"}},[e._v(e._s(e.info.social.github))])])])},$=[],B={name:"Home",components:{},data:function(){return{info:{name:"Francisco Fernandes",position:"Front-end Developer",social:{email:"francisco@email.com",linkedin:"lk.com/francisco",github:"github.com/francisco"}}}}},q=B,L=(n("3654"),Object(o["a"])(q,F,$,!1,null,null,null)),M=L.exports;r["a"].use(u["a"]);var z=[{path:"/",name:"Home",component:M},{path:"/projects",name:"Projects",component:D},{path:"/experience",name:"Experience",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",redirect:"/about"}],H=new u["a"]({routes:z}),J=H,Q=n("2f62");r["a"].use(Q["a"]);var G=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=n("9483");Object(K["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:J,store:G,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"741a":function(e,t,n){"use strict";var r=n("cf1a"),i=n.n(r);i.a},"9c0c":function(e,t,n){},caba:function(e,t,n){},cf1a:function(e,t,n){}});
//# sourceMappingURL=app.9fbbf336.js.map