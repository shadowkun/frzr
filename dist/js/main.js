!function(){"use strict";function t(t){var e=arguments;if(c){var n=c[t];if(n)return n.apply(this,arguments)}for(var o=document.createElement(t),r=1;r<e.length;r++){var s=e[r];if(null!=s&&!i(o,s)&&"object"==typeof s)for(var a in s){if(p){var l=p[a];if(l){l(o,s[a]);continue}}var h=s[a];"style"===a||null==o[a]&&"function"!=typeof h?o.setAttribute(a,h):o[a]=h}}return o}function e(t,e){c||(c={}),c[t]=e}function n(t,e,n,i){this.View=t,this.views=[],this.initData=n,this.skipRender=i,e&&(this.key=e,this.lookup={})}function i(t,e,o){var s=t.el||t,a=e.el||e,l=null!=a.parentNode;if(l?e.remounting&&e.remounting():e.mounting&&e.mounting(),a instanceof Node){if(o){var h=o;s.insertBefore(a,h)}else s.appendChild(a);l?e.remounted&&e.remounted():e.mounted&&e.mounted(),a!==e&&(a.view=e,e.parent=t)}else if("string"==typeof a||"number"==typeof a)i(s,document.createTextNode(a),o);else if(a instanceof Array)for(var u=0;u<a.length;u++)i(s,a[u],o);else{if(!(e instanceof n))return!1;e.parent=t,r(s,e.views)}return!0}function o(t,e){var n=t.el||t,i=e.el||e;e.unmounting&&e.unmounting(),n.removeChild(i),e.unmounted&&e.unmounted(),i!==e&&(e.parent=null)}function r(t,e){for(var n=t.el||t,r=n.firstChild,s=0;s<e.length;s++){var a=e[s],l=a.el||a;r!==l?i(t,a,r):r=r.nextSibling}for(;r;){var h=r.nextSibling;o(t,r.view||r),r=h}}function s(){return[t("h2","Hello FRZR"),t("p","Web development has gone mad. To get even started with today's frameworks, at worst you need to install huge loads of dependencies, learn all kinds of weird abstractions and just a hello world app weighs hundreds of kilobytes."),t("p","FRZR is here to cool us down. The whole view library only weighs 2 KB and it's ",t("a",{href:"https://youtu.be/0nh2EK1xveg",target:"_blank"},"possible to teach in 30 minutes how it works under the hood"),". There's as few abstractions as possible. You don't need to install anything to get started. You only need to know HTML and Javascript, that's it."),t("p",t("a",{href:"#/features"},"Wow, FRZR is really small. What features do I get?"))]}function a(){return[t("h2","Features"),t("h3","It's just HTML + JS"),t("p","index.html:"),t("code-html",'\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>FRZR example</title>\n  </head>\n  <body>\n    <script src="https://frzr.js.org/frzr.min.js"></script>\n    <script src="main.js"></script>\n  </body>\n</html>\n    '),t("p","main.js:"),t("code-js","\nvar el = frzr.el;\nvar mount = frzr.mount;\n\nvar hello = el('Hello world!');\nmount(document.body, hello);\n"),t("h3","Easy components"),t("p","It's really easy to create components with FRZR"),t("code-html","..."),t("p","Work in progress..."),t("p",t("a",{href:"#/hello"},"Ok, so there's almost nothing here yet. Take me back home please."))]}function l(t){return function(){location.hash="#/"+t}}function h(e){return function(n,i){return t("pre",{"class":"code"},t("code",{innerHTML:Prism.highlight(i.trim(),Prism.languages[e])}))}}function u(){var t=location.hash.slice(2).split("/"),e=t[0];f.trigger("section",e||"hello")}var c,p;n.prototype.update=function(t,e){var n=this.View,i=this.views,s=this.parent,a=this.key,l=this.initData,h=this.skipRender;if(e)var u=[],c=[],p=[];if(a){var d=this.lookup,f={};i.length=t.length;for(var g=0;g<t.length;g++){var m=t[g],v=m[a],b=d[v];b?e&&c.push(b):(b=new n(l,m,g),e&&u.push(b)),i[g]=f[v]=b,b.update&&b.update(m,g)}if(e)for(var v in d)f[v]||(p.push(d[v]),!h&&s&&o(s,d[v]));this.lookup=f}else{if(e)for(var g=t.length;g<i.length;g++){var b=i[g];!h&&s&&o(s,b),p.push(b)}i.length=t.length;for(var g=0;g<t.length;g++){var m=t[g],b=i[g];b?e&&c.push(b):(b=new n(l,m,g),e&&u.push(b)),b.update&&b.update(m,g),i[g]=b}}!h&&s&&r(s,i),e&&e(u,c,p)};var d={},f={on:function(t,e){d[t]||(d[t]=[]),d[t].push({handler:e})},one:function(t,e){d[t]||(d[t]=[]),d[t].push({handler:e,once:!0})},trigger:function(t,e){var n=this,i=d[t];if(i)for(var o=0;o<i.length;o++){var r=i[o];r.handler.call(n,e),r.once&&i.splice(o--,1)}}},g={hello:"Hello",features:"Features"},m=function(){this.el=t("div",{"class":"topbar"},this.menu=t("div",{"class":"topbar-menu"},t("div",{"class":"topbar-menuitem"},t("i",{"class":"fa fa-bars"}),this.current=t("p")))),this.menu.onclick=function(){f.trigger("topbar open")}};m.prototype.update=function(t,e){return g[t]?void(this.current.textContent=g[t]):void(this.current.textContent="404")};var v={hello:s,features:a},b=function(){this.el=t("div",{"class":"content"})};b.prototype.update=function(e,n){if(!v[e])return void r(this.el,[t("h2","Sorry"),t("p","Nothing here (yet?) :("),t("p",t("a",{href:"https://github.com/pakastin/frzr/tree/new-website/website/js",target:"_blank"},"Maybe you can find out why is that?"))]);var i=this[e]||(this[e]=v[e]());r(this.el,i)};var y="cubic-bezier(0.645, 0.045, 0.355, 1.000)",w=function(){this.el=t("div",{"class":"overlay"},this.bg=t("div",{"class":"bg"}),t("div",{"class":"container"},this.h1=t("h1",t("b","FRZR")," - tiny view library"),t("div",{"class":"topbar"},this.topbarBg=t("div",{"class":"topbar-bg"}),t("div",{"class":"topbar-container"},this.menu=t("div",{"class":"topbar-menu"},t("div",{onclick:l("hello"),"class":"topbar-menuitem"},t("p","Hello")),t("div",{onclick:l("features"),"class":"topbar-menuitem"},t("p","Features")),t("div",{onclick:l("api"),"class":"topbar-menuitem"},t("p","API docs")),t("div",{onclick:l("download"),"class":"topbar-menuitem"},t("p","Download")),t("div",{onclick:l("source"),"class":"topbar-menuitem"},t("p","Source")))))))};w.prototype.mounted=function(){var t=this;this.registerEvents();var e=this.topbarBCR,n=this.menu.getBoundingClientRect(),i=[e.width/n.width,e.height/n.height].join(","),o=[0,-n.height].join("px,");this.topbarBg.style.height=n.height+"px",this.menu.style.transition="",this.menu.style.transform="translate("+o+"px)",this.bg.style.transition="",this.bg.style.opacity=0,this.topbarBg.style.transition="",this.topbarBg.style.transform="scale("+i+")",this.topbarBg.style.transformOrigin="0 0",requestAnimationFrame(function(){t.bg.style.transition="opacity .3s "+y,t.bg.style.opacity=1,t.topbarBg.style.transition=".3s transform "+y,t.menu.style.transition=".3s transform "+y,t.topbarBg.style.transform="",t.menu.style.transform=""})},w.prototype.unmounted=function(){this.unregisterEvents()},w.prototype.registerEvents=function(){function t(){f.trigger("topbar close")}var e=this;this.el.addEventListener("click",t),this.unregisterEvents=function(){e.el.removeEventListener("click",t)}},w.prototype.close=function(){var t=this.topbarBCR,e=this.menu.getBoundingClientRect(),n=[t.width/e.width,t.height/e.height].join(","),i=[0,-e.height].join("px,");this.bg.style.opacity=0,this.topbarBg.style.transform="scale("+n+")",this.menu.style.transform="translate("+i+"px)",setTimeout(function(){f.trigger("topbar closed")},300)},e("code-html",h("markup")),e("code-js",h("javascript"));var k=t("h1",t("b","FRZR")," - tiny view library"),R=new m,B=new b,j=new w,C=t("div",{"class":"container"},k,R,B);k.onclick=function(){location.hash="#/hello"},f.on("section",function(t){R.update(t),B.update(t)}),f.on("topbar open",function(){j.topbarBCR=R.el.getBoundingClientRect(),i(document.body,j),R.el.style.opacity=0}),f.on("topbar close",function(){j.topbarBCR=R.el.getBoundingClientRect(),j.close()}),f.on("topbar closed",function(){o(document.body,j),R.el.style.opacity=1}),f.trigger("section","hello"),i(document.body,C),window.addEventListener("hashchange",u),u()}();