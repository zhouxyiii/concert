var protocol=('https:'==document.location.protocol?'https://':'http://');var serverUrl=protocol+"ad.damai.cn/";var ___shortName="ShortNamespace";(function(){var c=___shortName;var g=window,a=0,f=false,b=false;while((g!=window.top||g!=g.parent)&&a<10){f=true;try{g.parent.location.toString()}catch(e){b=true;break};a++;g=g.parent};if(a>=10){b=true};if(!b&&top.location.href.indexOf("adunion.damai.cn")>0){b=true};var d=function(h,j,i){h.baseName=c;h.isInIframe=j;h.isCrossDomain=i;h.needInitTop=j&&!i;h.buildInObject={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object Window]":1};h.clone=function(o){var l=o,m,k;if(!o||o instanceof Number||o instanceof String||o instanceof Boolean){return l}else{if(o instanceof Array){l=[];var n=0;for(m=0,k=o.length;m<k;m++){l[n++]=this.clone(o[m])}}else{if("object"===typeof o){if(this.buildInObject[Object.prototype.toString.call(o)]){return l};l={};for(m in o){if(o.hasOwnProperty(m)){l[m]=this.clone(o[m])}}}}};return l};h.create=function(m,p){var l=Array.prototype.slice.call(arguments,0);l.shift();var n=function(q){this.initialize=this.initialize||function(){};this.initializeDOM=this.initializeDOM||function(){};this.initializeEvent=this.initializeEvent||function(){};this.initialize.apply(this,q);this.initializeDOM.apply(this,q);this.initializeEvent.apply(this,q)};n.prototype=m;var k=new n(l);for(var o in m){if(k[o]&&typeof k[o]==="object"&&k[o].modifier&&k[o].modifier.indexOf("dynamic")>-1){k[o]=this.clone(k[o])}};k.instances=null;m.instances=m.instances||[];m.instances.push(k);return k};h.registerMethod=function(o,k){var p={};var l={};var s,q,r;for(q in k){s=k[q];if(!q||!s){continue};if(typeof s==="object"&&s.modifier&&s.modifier==="dynamic"){this.registerMethod(o[q],s)}else{if(typeof s==="function"){p[q]=s}else{l[q]=s}}};for(q in p){s=p[q];if(q&&s){o[q]=s}};if(o.instances&&o.instances.length&&o.instances.length>0){for(var m=0,n=o.instances.length;m<n;m++){r=o.instances[m];this.registerMethod(r,k)}}};h.registerObj=function(m,o){var l=Array.prototype.slice.call(arguments,0);l.shift();var n=function(p){this.register=this.register||function(){};this.register.apply(this,p)};n.prototype=m;n.prototype.instances=null;var k=new n(l);return k};h.registerNamespaceByWin=function(m,o){var o=m.win=o||window;var l=m.fullName.replace("$baseName",this.baseName);var s=l.split(".");var p=s.length;var t=o;var r;for(var n=0;n<p-1;n++){var k=s[n];if(t==o){t[k]=o[k]=o[k]||{};r=k;m.baseName=r}else{t[k]=t[k]||{}};t=t[k]};var q=t[s[p-1]]||{};if(q.fullName&&q.version){this.registerMethod(q,m)}else{q=this.registerObj(m);q.instances=null;t[s[p-1]]=q}};h.registerNamespace=function(k){if(!k||!k.fullName||!k.version){return};this.registerNamespaceByWin(k,window);if(this.needInitTop){this.registerNamespaceByWin(k,window.top)}};h.registerClass=h.registerNamespace;h.using=function(m,p){var k;if(!p&&this.isInIframe&&!this.isCrossDomain&&top&&typeof top==="object"&&top.document&&"setInterval"in top){p=top}else{p=p||window};m=m.replace("$baseName",this.baseName);var l=m.split(".");k=p[l[0]];for(var n=1,o=l.length;n<o;n++){if(k&&k[l[n]]){k=k[l[n]]}else{k=null}};return k}};window[c]=window[c]||{};d(window[c],f,b);if(f&&!b){window.top[c]=window.top[c]||{};d(window.top[c],f,b)}})();(function(b){var a={fullName:"$baseName.Utility",version:"1.0.0",register:function(){this.browser=this.browser||{};if(/msie (\d+\.\d)/i.test(navigator.userAgent)){this.browser.ie=document.documentMode||+RegExp["$1"]};if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){this.browser.opera=+RegExp["$1"]};if(/firefox\/(\d+\.\d)/i.test(navigator.userAgent)){this.browser.firefox=+RegExp["$1"]};if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent)){this.browser.safari=+(RegExp["$1"]||RegExp["$2"])};if(/chrome\/(\d+\.\d)/i.test(navigator.userAgent)){this.browser.chrome=+RegExp["$1"]};try{if(/(\d+\.\d)/.test(window.external.max_version)){this.browser.maxthon=+RegExp["$1"]}}catch(c){}this.browser.isWebkit=/webkit/i.test(navigator.userAgent);this.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);this.browser.isStrict=document.compatMode=="CSS1Compat"},browser:{},isWindow:function(e){var c=false;try{if(e&&typeof e==="object"&&e.document&&"setInterval"in e){c=true}}catch(d){c=false};return c},isInIframe:function(c){c=c||window;return c!=window.top&&c!=c.parent},isInCrossDomainIframe:function(g,d){var c=false;g=g||window;d=d||window.top;var f=0;if(!this.isWindow(d)||!this.isWindow(d.parent)){c=true}else{while((g!=d)&&f<10){f++;if(this.isWindow(g)&&this.isWindow(g.parent)){try{g.parent.location.toString()}catch(e){c=true;break}}else{c=true;break};g=g.parent}};if(f>=10){c=true};return c},g:function(d,c){c=c||window;if("string"===typeof d||d instanceof String){return c.document.getElementById(d)}else{if(d&&d.nodeName&&(d.nodeType==1||d.nodeType==9)){return d}};return d},sendRequestViaImage:function(d,f){var c=new Image();var e="cpro_log_"+Math.floor(Math.random()*2147483648).toString(36);f=f||window;f[e]=c;c.onload=c.onerror=c.onabort=function(){c.onload=c.onerror=c.onabort=null;f[e]=null;c=null};c.src=d},proxy:function(e,d,c){var g=e;var f=d;return function(){if(c&&c.length){return g.apply(f||{},c)}else{return g.apply(f||{},arguments)}}},getClientWidth:function(d){try{d=d||window;if(d.document.compatMode==="BackCompat"){return d.document.body.clientWidth}else{return d.document.documentElement.clientWidth}}catch(c){return 0}},getClientHeight:function(d){try{d=d||window;if(d.document.compatMode==="BackCompat"){return d.document.body.clientHeight}else{return d.document.documentElement.clientHeight}}catch(c){return 0}},escapeToEncode:function(d){var c=d||"";if(c){c=c.replace(/%u[\d|\w]{4}/g,function(e){return encodeURIComponent(unescape(e))})};return c},noop:function(){}};b.registerNamespace(a)})(window[___shortName]);(function(a){var b={fullName:"$baseName.BusinessLogic",version:"1.0.0",register:function(){this.G=a.using("$baseName",this.win);this.U=a.using("$baseName.Utility",this.win)},randomArray:[],clientTree:{},displayCounter:1,displayTypeCounter:{},adsArray:[],adsWrapStore:{},winFocused:true,cproServiceUrl:serverUrl+"uijs.do",iframeIdPrefix:"cproIframe",isAsyn:false,currentWindowOnUnloadHandler:null,noop:function(){}};a.registerNamespace(b)})(window[___shortName]);(function(b){var a={fullName:"$baseName.BusinessLogic.Param",version:"1.0.0",register:function(){this.G=b.using("$baseName",this.win);this.U=b.using("$baseName.Utility",this.win);this.BL=b.using("$baseName.BusinessLogic",this.win)},initialize:function(c){this.currentWindow=c.currentWindow;this.doc=this.win.document;this.nav=this.win.navigator;this.scr=this.win.screen;this.displayType=c.displayType||"inlay";this.startTime=(new Date());this.BL.pnTypeArray=this.BL.pnTypeArray||[];this.BL.pnTypeArray[this.displayType]=this.BL.pnTypeArray[this.displayType]||[];this.timeStamp=c.timeStamp||(new Date()).getTime()},getSlot2UIMapping:function(e){var d={};var c;for(c in e){if(c&&e[c]&&e[c].slotParamName){d[e[c].slotParamName]=c}};return d},getCust2UIMapping:function(e){var d={};var c;for(c in e){if(c&&e[c]&&e[c].custParamName){d[e[c].custParamName]=c}};return d},mergeSlot2UI:function(f,e,d){if(!f||!e||!d){return null};var c,g;for(g in e){if(g&&e[g]&&e.hasOwnProperty(g)){c=d[g];f.set(c,e[g])}};return f},serialize:function(f){var e=[];var d,c;for(d in f){if(d&&f[d]&&(typeof f[d]==="object")&&f[d].isUIParam&&f[d].isUIParam[f.displayType]){if(d==="pn"&&!f.get(d)){continue};c=f.get(d);if(c==null){continue};if(f.displayType=="ui"&&c=="damaiCADS"){continue};if(f[d].encode||f.displayType=="ui"){c=encodeURIComponent(c)};if(f[d].limit){c=c.substr(0,f[d].limit)};e.push(d+"="+c)}};return e.join("&")},snap:function(f){var e={};var d,c;for(d in f){if(d&&f[d]&&(typeof f[d]==="object")&&f[d].defaultValue){c=f.get(d);if(c==null){continue};if(f[d].encode||f.displayType=="ui"){c=encodeURIComponent(c)};e[d]=c}};return e},get:function(e){var c;if(!this[e]){return c};if(this[e].get&&this[e].get!=="default"){var d=Array.prototype.slice.call(arguments,0);d.shift();if(!this[e]._init){this[e]._value=this[e].defaultValue[this.displayType]};c=this.U.proxy(this[e].get,this,d)()}else{if(!this[e]._init){c=this[e].defaultValue[this.displayType]}else{c=this[e]._value}};return c},set:function(e,f){var c=false;if(this[e].set&&this[e].set!=="default"){var d=Array.prototype.slice.call(arguments,0);d.shift();c=this.U.proxy(this[e].set,this,d)()}else{this[e]._value=f;this[e]._init=true;c=true};return c},k:{slotParamName:"k",custParamName:"k",modifier:"dynamic",defaultValue:{inlay:"","float":"",custInlay:""},encode:false,isUIParam:{inlay:false,"float":false,ui:true,post:false,custInlay:false,captcha:false},get:"default",set:"default"},fv:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"0","float":"0",ui:"",post:"",custInlay:"0",captcha:"0"},encode:true,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var c="ShockwaveFlash.ShockwaveFlash",g=this.nav,d,h;if(this.nav.plugins&&g.mimeTypes.length){d=g.plugins["Shockwave Flash"];if(d&&d.description){return d.description.replace(/[^\d\.]/g,"").split(".")[0]}}else{if(this.U.browser.ie){h=ActiveXObject;try{d=new h(c+".7")}catch(f){try{d=new h(c+".6");d.AllowScriptAccess="always";return 6}catch(f){}try{d=new h(c)}catch(f){}};if(d!=null){try{return d.GetVariable("$version").split(" ")[1].split(",")[0]}catch(f){}}}};return 0},set:"default"},cn:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){if(!this["n"]||!this["n"].get){return 1};var c=0;var d=this.get("n");var e=this.get("ch")||"0";if(d){this.BL.clientTree=this.BL.clientTree||{};if(!this.BL.clientTree[d]){c+=1;if(e&&e!=="0"){c+=2};return c};if(e&&e!=="0"&&this.BL.clientTree[d]&&(!this.BL.clientTree[d][e])){c+=2}};return c},set:function(){var c=this.get("n");var d=this.get("ch")||"0";if(c){this.BL.clientTree=this.BL.clientTree||{};if(!this.BL.clientTree[c]){this.BL.clientTree[c]={}};if(d&&d!=="0"&&(!this.BL.clientTree[c][d])){this.BL.clientTree[c][d]=true}};return true}},"if":{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"0","float":"0",ui:"0",post:"0",custInlay:"0",captcha:"0"},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var d=0;var g=this.currentWindow;if(this.U.isInIframe(g)){d+=1};if(this.U.isInCrossDomainIframe(g,g.top)){d+=2};if(!this["rsi0"]||!this["rsi0"].get||!this["rsi1"]||!this["rsi1"].get){return d};var c=this.get("rsi0");var f=this.get("rsi1");var e=this.U.getClientWidth(this.currentWindow);var h=this.U.getClientHeight(this.currentWindow);if(e<40||h<10){d+=4}else{if(e<c||h<f){d+=8}};if((e>=2*c)||(h>=2*f)){d+=16};return d},set:"default"},word:{slotParamName:"",custParamName:"",modifier:"dynamic",limit:700,defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:true,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var j=this.currentWindow;var p,l=10,c=0;var g,m;try{g=this.get("rsi0")||0;m=this.get("rsi1")||0}catch(k){g=200,m=60};p=j.document.location.href;if(this.U.isInIframe(j)){var d,f,e;for(c=0;c<l;c++){if(!this.U.isInCrossDomainIframe(j,j.parent)){d=this.U.getClientWidth(j);f=this.U.getClientHeight(j);e=j.document.location.href;j=j.parent;if(g>0&&m>0&&d>2*g&&f>2*m){p=e;break};if(!this.U.isInIframe(j,j.parent)){p=j.location.href;break}}else{p=j.document.referrer||j.document.location.href;break}};if(c>=10){p=j.document.referrer||j.document.location.href}};if(p.search(/ad.damai.cn/i)!=-1&&p.search(/t=tpclicked1/i)!=-1){var o=p.indexOf("?");var p=p.substring(o+1);var n=p.split("&");for(var h=0;h<n.length;h++){if(n[h].search(/^u=/i)!=-1){p=n[h].replace(/^u=/i,"");break}}};return p},set:"default"},refer:{slotParamName:"",custParamName:"",modifier:"dynamic",limit:700,defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:true,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var c;try{c=this.win.opener?this.win.opener.document.location.href:this.doc.referrer}catch(d){c=this.doc.referrer};return this.U.escapeToEncode(c)},set:"default"},ready:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:true,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var d={uninitialized:0,loading:1,loaded:2,interactive:3,complete:4};try{return d[this.doc.readyState]}catch(c){return 5}},set:"default"},jn:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"3","float":"3",ui:"3",post:"3",custInlay:"3",captcha:"3"},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return 3},set:"default"},js:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"c","float":"f",ui:"ui",post:"post",custInlay:"custInlay",captcha:"y"},encode:false,isUIParam:{inlay:false,"float":false,ui:true,post:true,custInlay:true,captcha:true},get:"default",set:"default"},lmt:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return Date.parse(this.doc.lastModified)/1000},set:"default"},csp:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.scr.width+","+this.scr.height},set:"default"},csn:{slotParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,custInlay:true,captcha:true},get:function(){return this.scr.availWidth+","+this.scr.availHeight},set:"default"},ccd:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.scr.colorDepth||0},set:"default"},chi:{slotParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,custInlay:true,captcha:true},get:function(){return this.win.history.length||0},set:"default"},cja:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.nav.javaEnabled().toString()},set:"default"},cpl:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.nav.plugins.length||0},set:"default"},bv:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var browserName;if(/msie (\d+\.\d)/i.test(navigator.userAgent)){browserName="ie"};if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){browserName="opera"};if(/firefox\/(\d+\.\d)/i.test(navigator.userAgent)){browserName="firefox"};if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent)){browserName="safari"};if(/chrome\/(\d+\.\d)/i.test(navigator.userAgent)){browserName="chrome"};return browserName},set:"default"},bi:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.nav.userAgent},set:"default"},cmi:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.nav.mimeTypes.length||0},set:"default"},cce:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.nav.cookieEnabled||0},set:"default"},csl:{uuserApiName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return encodeURIComponent(this.nav.language||this.nav.browserLanguage||this.nav.systemLanguage).replace(/[^a-zA-Z0-9\-]/g,"")},set:"default"},did:{uuserApiName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"1","float":"1",ui:"1",post:"1",custInlay:"1",captcha:"1"},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return this.BL.displayCounter||1},set:function(){this.BL.displayCounter=this.BL.displayCounter||1;this.BL.displayCounter++;return true}},rt:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){var c=0;if(this.startTime){c=(new Date()).getTime()-this.startTime.getTime()};return c},set:"default"},dt:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",post:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){return Math.round((new Date).getTime()/1000)},set:"default"},pn:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"","float":"",ui:"",custInlay:"",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,ui:true,custInlay:true,captcha:true},get:function(){var c="";var f,j,h,k=[],d=[],g=[];var e=this.BL.pnTypeArray[this.displayType]=this.BL.pnTypeArray[this.displayType]||[];if(e&&e.length>0){for(f=0,j=e.length;f<j;f++){h=e[f];if(!h||!h.name||!h.num||!h.at){continue};k.push(h.name);d.push(h.num);g.push(h.at)};c=d.join(":")+"|"+k.join(":")+"|"+g.join(":")};return c},set:function(d,f,e){var c=true;if(!d||!f||!e){d=this.get("tn");if(this.displayType=="ui"){f=this.get("hn")*this.get("wn")||0}else{f=this.get("adn")||0};e=this.get("at")||103};if(!d||!f||!e){c=false}else{if(this.displayType!="ui"&&this.BL.pnTypeArray[this.displayType].length==2){c=false}else{if(this.displayType=="ui"&&this.BL.pnTypeArray[this.displayType].length==3){c=false}else{this.BL.pnTypeArray[this.displayType]=this.BL.pnTypeArray[this.displayType]||[];this.BL.pnTypeArray[this.displayType].push({name:d,num:f,at:e})}}};return c}},c01:{slotParamName:"",modifier:"dynamic",defaultValue:{inlay:"0","float":"0",captcha:""},encode:false,isUIParam:{inlay:true,"float":true,captcha:true},get:"default",set:"default"},prt:{slotParamName:"",custParamName:"",modifier:"dynamic",defaultValue:{inlay:"0","float":"0",ui:"0",post:"0",custInlay:"0",captcha:"0"},encode:false,isUIParam:{inlay:true,"float":true,ui:true,post:true,custInlay:true,captcha:true},get:function(){if(!this.BL.pageFirstRequestTime){this.BL.pageFirstRequestTime=(new Date()).getTime()};return this.BL.pageFirstRequestTime||""},set:"default"},noop:{custParamName:"",modifier:"dynamic",defaultValue:{ui:null,post:null},encode:false,isUIParam:{ui:false,post:false},get:"default",set:"default"}};b.registerClass(a)})(window[___shortName]);(function(){function o(a){var b=f[a];f[a]=void 0;return b};function I(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(g.cookie))&&a[2]?decodeURIComponent(a[2]):""};function J(a){a=a||g.domain;0===a.indexOf("www.")&&(a=a.substr(4));"."===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));var b=a.match(RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:com|cn|net|org|gov|info|la|cc|co|jp|us|hk|tv|me|biz|in|be|io|tk|cm|li|ru|ws|hn|fm)(?:\\.(?:cn|jp|tw|ru))?)$","i"));return b?b[0]:a};function Y(){if(m.plugins&&m.mimeTypes.length){var a=m.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}else if(f.ActiveXObject&&!f.opera)for(a=10;2<=a;a--)try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);if(b)return b.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,".")}catch(c){}return""};function K(){var a=g.referrer,b=a.replace(/^https?:\/\//,""),b=b.split("/")[0],b=b.split(":")[0],b=J(b),c=J(),d=I("DAMAI_CLB_REFER");return d&&c===b?encodeURIComponent(d):c!==b?(g.cookie="DAMAI_CLB_REFER="+encodeURIComponent(a)+(c?";domain="+encodeURIComponent(c):""),encodeURIComponent(a)):""};function L(a){return"number"===typeof a?Math.floor(a):/^\d+$/.test(a)?+a:-1};function r(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c,!1)};function s(a){var b={},c=f.location.search;0===c.indexOf("?")&&(c=c.substring(1));for(var c=c.split("&"),d=0;d<c.length;d++){var i=c[d].split("=");0==i[0].indexOf("damai_clb_")&&(b[i[0]]=i[1])};s=function(a){return b[a]};return b[a]};function Z(a){var b={'"':"&quot;",">":"&gt;","<":"&lt;","&":"&amp;"};return a.replace(/[\"<>\&]/g,function(a){return b[a]})};function D(a,b){var c,d;0===arguments.length?(c=M,d={}):1===arguments.length?"string"===typeof a?(c=a,d={}):(c=M,d=a):(c=a,d=b);var i=new Image,j="log"+new Date,v=["_="+ +new Date],g;for(g in d)w.call(d,g)&&v.push(encodeURIComponent(g)+"="+encodeURIComponent(d[g]));f[j]=i;i.onload=i.onerror=i.onabort=function(){i.onload=i.onerror=i.onabort=null;try{delete f[j]}catch(a){f[j]=void 0}};i.src=c+(0<=c.indexOf("?")?"&":"?")+v.join("&")};function x(a,b){var c=b||null,d=g.createElement("script");d.charset="utf-8";d.async=!0;d.src=a;if(c){var i=!1;d.onload=d.onreadystatechange=function(){if(!i&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState))i=!0,c()}};for(var j=g.getElementsByTagName("script"),v=10>j.length?j.length:10,f=!1,e=0;e<v;e++){var h=j[e];if(h.parentNode){h.parentNode.insertBefore(d,h);f=!0;break}};f||(j=g.getElementsByTagName("head")[0]||g.body,j.insertBefore(d,j.firstChild))};function h(a,b){return f[a]?f[a]:f[a]=b};function l(a){return"damai_clb_slot_"+a};function N(a){if(a){var b=p(a),c=g.getElementById(b.target);c&&(e[a]._filled=!0,f.DAMAI_CLB_adRendered=void 0,!b.data&&!b.novaQuery&&!b.holdPlace?(e[a]._done=!0,k(a,!1)):2===b.multimediaType&&!b.novaQuery?O(b,c):3===b.multimediaType?P(b):(c.innerHTML='<div id="'+l(a)+'">'+t(b)+"</div>",k(a,!0)))}};function O(a,b){var c=a.id,d=l(c),i=Q(a.data);b&&(b.innerHTML='<div id="'+d+'"></div>');i?E("DAMAI_CLB_CPROFSLOT",$,[c,e[c]]):E("DAMAI_CLB_CPROASYNCSLOT",aa,[{id:c,data:a.data,domid:d}]);e[c]._done=!0;k(c,!0)};function ba(a){var b=a.id;if(a.novaQuery)a='<div id="'+l(b)+'">'+t(a)+"</div>",g.write(a);else{var c=Q(a.data),d=f[c?"DAMAI_CLB_CPROFSLOT":"DAMAI_CLB_CPROCSLOT"];d?d(b,e[b]):(c||g.write('<div id="'+l(b)+'"></div>'),O(a,null))};e[b]._done=!0;k(b,!0)};function P(a){var b=a.id;if(a.data){var c=l(b),d='<div style="display:none" id="'+c+'"></div>';if(a=a.target)if(a=g.getElementById(a))a.innerHTML=d;else return!1;else g.write(d);E("DAMAI_DAN_showAd",ca,[b,c]);e[b]._done=!0;k(b,!0)}else k(b,!1)};function da(a){if(!a.data&&!a.holdPlace)e[a.id]._done=!0,k(a.id,!1);else{if(a.multimediaType){var b="string"===typeof a.data?a.data:a.data.content;if(b){e[a.id]._done=!0;g.write(b);k(a.id,!0);return}};b='<div id="'+l(a.id)+'">'+t(a)+"</div>";g.write(b);k(a.id,!0)}};function R(a){if(a.data)if(g.body){var b=g.createElement("div"),c=b.style;b.id=l(a.id);c.width=a.width+"px";c.height=a.height+17+"px";c.overflow="hidden";c.zIndex=2147483647;a.scroll?S()?(c.position="fixed",c[a.alignLeft?"left":"right"]=a.horizontalSpace+"px",c[a.alignTop?"top":"bottom"]=a.verticalSpace+"px"):(c.position="absolute",F(a,b),r(f,"scroll",function(){F(a)}),r(f,"resize",function(){F(a)})):(c.position="absolute",c[a.alignLeft?"left":"right"]=a.horizontalSpace+"px",c[a.alignTop?"top":"bottom"]=a.verticalSpace+"px");g.body.insertBefore(b,g.body.firstChild);c=t(a);b.innerHTML='<div style="height:15px;border:1px solid #e1e1e1;background:#f0f0f0;margin:0;padding:0;overflow:hidden;"><span style="float:right;clear:right;margin:2px 5px 0 0;width:39px;height:13px;cursor:pointer;background:url('+ea+') no-repeat scroll 0 0;" onmouseover="this.style.backgroundPosition=\'0 -20px\';" onmouseout="this.style.backgroundPosition=\'0 0\';" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);"></span></div>'+c;k(a.id,!0)}else r(f,"load",function(){R(a)});else e[a.id]._done=!0,k(a.id,!1)};function fa(a){e[a.id]._done=!0;k(a.id,!!a.data);if(a.data){var b=["height="+a.height,"width="+a.width,"top="+(a.alignTop?a.verticalSpace:n.availHeight-a.verticalSpace-a.height),"left="+(a.alignLeft?a.horizontalSpace:n.availWidth-a.horizontalSpace-a.width),"toolbar=no","menubar=no","scrollbars=no","resizble=no","location=no","status=no"],b=b.join(","),c=G(a.data,a);0>c.indexOf("<body>")&&(c="<!DOCTYPE html><body>"+c);if(a.openOnLoad&&f.addEventListener){var d=f.open(y(),"clb"+ +new Date,b),i=+new Date+3E4,j=function(){try{if(d.document){var b=d.document;b.open("text/html","replace");b.write(c);b.close();d.focus();0<a.stayTime&&setTimeout(function(){d&&d.close()},1E3*a.stayTime)}}catch(g){new Date<i?setTimeout(j,200):e[a.id]._done="PermissionDenied"}};d&&setTimeout(j,0)};f.attachEvent("onunload",function(){var a=f.event;if(0>a.clientY&&!a.ctrlKey||a.altKey)if(a="about:blank",z()&&(a='javascript:void(function(){var d=document;d.open();d.domain="'+document.domain+'";d.write("");d.close();}())'),a=f.open(a,"clb"+ +new Date,b))try{var d=a.document;d.open("text/html","replace");d.write(c);d.close();a.focus()}catch(e){}})}};function p(a){var b=e[a];return!b?null:{id:a,slotType:b._stype,data:b._html,holdPlace:b._fxp,multimediaType:b._isMlt,width:b._w,height:b._h,alignLeft:b._left,alignTop:b._top,horizontalSpace:b._vs,verticalSpace:b._hs,stayTime:b._st,scroll:b._sf,openOnLoad:b._bf,done:b._done,filled:b._filled,flagRendered:!1!==b._fr,target:b._target,novaQuery:b._qn}};function Q(a){for(var a=a.split("|"),b=a.length,c=0;c<b;c++){var d=a[c].split("=");if("cpro_template"===d[0]){if(0===d[1].split("_")[1].indexOf("xuanfu"))return!0;break}};return!1};function F(a,b){if(b=b||g.getElementById(l(a.id))){var c=b.style,d=ga?g.body:g.documentElement,i=d.clientWidth,j=d.clientHeight,e=f.pageXOffset||d.scrollLeft,d=f.pageYOffset||d.scrollTop;c.top=a.alignTop?d+a.verticalSpace+"px":d+j-a.verticalSpace-a.height-17+"px";c.left=a.alignLeft?e+a.horizontalSpace+"px":e+i-a.horizontalSpace-a.width+"px"}};function y(){return z()?q.domainPolicyFileUrl||"/domain-policy.htm":"about:blank"};function t(a){var b=a.frameId||"damai_clb_slot_iframe_"+a.id;a.novaQuery&&(a.frameSrc=ha+"?"+a.novaQuery);var c=a.frameSrc||y();return'<iframe id="'+b+'" src="'+c+'" '+(a.frameSrc?"":"onload=\"DAMAI_CLB_renderFrame('"+a.id+"')\"")+'width="'+a.width+'" height="'+a.height+'" vspace="0" hspace="0" allowTransparency="true" scrolling="no" marginHeight="0" marginWidth="0" frameborder="0" style="border: 0; vertical-align: bottom; margin: 0; display: block;"></iframe>'};function k(a,b){p(a).flagRendered&&(f.DAMAI_CLB_adRendered=b)};function T(a,b){if(a&&ia.test(a)&&b){for(var b="[object Array]"==Object.prototype.toString.call(b)?b:Array.prototype.slice.call(arguments,1),c=u[a]||[],d=b.length,i=0;i<d;i++){var j=b[i];"string"===typeof j&&ja.test(j)&&(c[c.length]=j)};if(c.length){for(var d=u,i={},j=[],g=c.length,f=0;f<g;f++){var e=c[f];i[e]||(j[j.length]=e,i[e]=!0)};d[a]=j}}};function ka(){var a=[],b;for(b in u)if(w.call(u,b)){var c=b+"="+u[b].join(",");a[a.length]=c};a.sort(function(a,b){return a.length-b.length});b="";for(var c=a.length,d=0;d<c&&!(500<b.length+a[d].length);d++)b+="&"+a[d];return b};function H(){}function A(a,b){var c=["di="+(a instanceof Array?a.join(","):a),"fn="+b,"host="+encodeURIComponent(g.URL)],d=U();d&&a==d.sid&&(c.push("mid="+d.mid),c.push("sid="+d.vc));d=function(){try{var a=window[___shortName],b=a.using("$baseName.BusinessLogic"),c=a.create(b.Param,{displayType:"inlay",currentWindow:window,timeStamp:(new Date).getTime()}),d=b.Param.snap&&b.Param.snap(c);q.ups=d;return b.Param.serialize(c)}catch(g){return""}}();d=function(a){for(var b=[["fv",parseInt(Y(),10)],["refer",K()],["lmt",Math.round(+new Date(g.lastModified)/1E3)],["csp",n.width+","+n.height],["csn",n.availWidth+","+n.availHeight],["ccd",n.colorDepth],["chi",""],["cja",m.javaEnabled().toString()],["cpl",""],["bv",""],["bi",""],["cmi",""],["cce",m.cookieEnabled||0],["csl",encodeURIComponent(m.language||m.browserLanguage).replace(/[^a-zA-Z0-9\-]/g,"")],["did",""],["rt",""],["dt",Math.round(+new Date/1E3)],["prt",""]],c=[],d=0;d<b.length;d++){var f=b[d][0],e=RegExp(f+"=([^&]*)"),e=e.exec(a)&&e.exec(a)[1]?e.exec(a)[1]:b[d][1];c[d]=f+"="+e};return c}(d);return la+"?"+c.join("&")+"&"+d.join("&")+"&damai_uid="+I("damai.cn_user")+ka()+"&damai_fuid="+I("damai.flash_user")};function V(a){var b=W(a);if(e[b]._target)N(b);else if(a=p(b)){e[b]._filled=!0;f.DAMAI_CLB_adRendered=void 0;if(2===a.multimediaType)b=ba;else if(3===a.multimediaType)b=P;else switch(a.slotType){case 0:case 3:b=da;break;case 1:b=R;break;default:b=fa};b(a)}};function W(a){for(var b in a)if(w.call(a,b)){a=a[b];if("string"===typeof e[b]){var c=e[b];e[b]=a;e[b]._target=c}else"object"!==typeof e[b]&&(e[b]=a);a=a._html;if("object"===typeof a)if("slide"===a.type){a=a.materials;for(c=0;c<a.length;c++){var d=a[c];d.monitorUrl&&D(d.monitorUrl)}}else a.monitorUrl&&D(a.monitorUrl);return b};return""};function B(a){if(a){var b=e[a];if(!(!0===b||"string"===typeof b))if("object"===typeof b){if(!b._filled){b._filled=!0;var c={};c[a]=b;V(c)}}else e[a]=!0,a=A(a,"DAMAI_CLB_SETJSONADSLOT"),g.write('<script charset="utf-8" src="'+a+'"><\/script>')}};function U(){var a=s("damai_clb_preview_sid"),b=s("damai_clb_preview_mid"),c=s("damai_clb_preview_vc"),d=+s("damai_clb_preview_ts");return 3E4>=+new Date-d?{sid:a,mid:b,vc:c}:null};function X(a,b,c){b=L(b);c=L(c);if(0>b||0>c)B(a);else{f.DAMAI_CLB_adRendered=void 0;var d=p(a);d?B(a):(e[a]={_w:b,_h:c,_filled:!0,_done:!0},d=p(a),d.frameId="damai_clb_slot_proxy_"+a,b=A(a,"DAMAI_CLB_SETJSONADSLOT"),d.frameSrc=ma+"#"+encodeURIComponent(b),d=t(d),g.write(d),k(a,!0))}};var f=window,n=f.screen,m=f.navigator,g=f.document,ga="CSS1Compat"!==g.compatMode,e=h("DAMAI_CLB_SLOTS_MAP",{}),w=Object.prototype.hasOwnProperty,la=serverUrl+"adproxy.do",ca=serverUrl+"js/dn.js",ma=serverUrl+"js/proxy.htm",ea=serverUrl+"images/close.gif",M=serverUrl+"log.do",aa=serverUrl+"js/ui/cc.js",$=serverUrl+"js/ui/cf.js",ha=serverUrl+"uijs.do",S=function(){var a=g.createElement("div"),b=g.createElement("div"),c=!1;a.style.position="absolute";a.style.top="200px";b.style.position="fixed";b.style.top="100px";a.appendChild(b);g.body.insertBefore(a,g.body.firstChild);b.getBoundingClientRect&&b.getBoundingClientRect().top!==a.getBoundingClientRect().top&&(c=!0);g.body.removeChild(a);S=function(){return c};return c},z=function(){var a=g.createElement("iframe"),b=!1;a.src="about:blank";g.body.insertBefore(a,g.body.firstChild);try{b=!a.contentWindow.document}catch(c){b=!0};g.body.removeChild(a);z=function(){return b};return b};h("DAMAI_CLB_sendLog",D);var E=function(){var a=h("DAMAI_CLB_taskQueues",{});return function(b,c,d){if(f[b])f[b].apply(f,d);else{var i=b+"@"+c,e=a[i];e||(e=a[i]=[],x(c,function(){for(;e.length;){var c=e.shift();f[b].apply(f,c)};delete a[i]}));e.push(d)}}}(),q=h("DAMAI_CLB_globalConfig",{});h("DAMAI_CLB_setConfig",function(a,b){q[a]=b});(function(a,b){var c=o(b);c&&(q[a]=c)})("domainPolicyFileUrl","DAMAI_CLB_domainPolicyFileUrl");q.version="20121212";var G=function(){function a(a,d,e){if("string"===typeof a)return a;if(!a.type)return"";var f=b[a.type];return f?(a="string"===typeof f?C(f,a):f(a,d),e?a:"<!DOCTYPE html><body style='margin:0'>"+a):""};var b={text:function(a){var b='<span style="word-wrap:break-word;"><a href="{clickUrl:string}" target="{target:string}" style="font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};"{events}>{text:string}</a></span>',e=/\{events\}/;if(1===a.version)b=b.replace(e,"");else if(2===a.version)for(var b=b.replace(e," onmouseover=\"this.style.color = '{hoverColor:string}';this.style.fontWeight = '{hoverBold:string}';this.style.fontStyle = '{hoverItalic:string}';this.style.textDecoration = '{hoverUnderline:string}';\" onmouseout=\"this.style.color = '{defaultColor:string}';this.style.fontWeight = '{defaultBold:string}';this.style.fontStyle = '{defaultItalic:string}';this.style.textDecoration = '{defaultUnderline:string}';\""),e=["default","hover"],f=0;f<e.length;f++){var g=e[f],h=g+"Color",k=g+"Bold",l=g+"Italic",g=g+"Underline";a[h]="#"+a[h];a[k]=a[k]?"bold":"normal";a[l]=a[l]?"italic":"normal";a[g]=a[g]?"underline":"none"};return C(b,a)},image:'<a href="{clickUrl:string}" target="{target:string}"><img src="{src:string}" title="{title:html}" alt="{title:html}" border="0" height="{height:number}" width="{width:number}" /></a>',flash:function(a){a.file=a.hasLink?"cflash":"flash";a.imageClickUrl=a.clickUrl;a.hasLink||(a.clickUrl="");a.server=serverUrl;return C('<script>var BD = BD || {};BD.MC = BD.MC || {};BD.MC.ADFlash = BD.MC.ADFlash || {};BD.MC.ADImg = BD.MC.ADImg || {};BD.MC.ADFlash.w = {width:number};BD.MC.ADFlash.h = {height:number};BD.MC.ADFlash.mu = "{src:string}";BD.MC.ADFlash.cu = "{clickUrl:string}";BD.MC.ADFlash.wm = {wmode:number};BD.MC.ADFlash.ct = "{clickTag:string}";BD.MC.ADImg.w = {imageWidth:number};BD.MC.ADImg.h = {imageHeight:number};BD.MC.ADImg.mu = "{imageSrc:string}";BD.MC.ADImg.cu = "{imageClickUrl:string}";BD.MC.ADImg.tw = "{target:string}";BD.MC.ADImg.flag = {backupImage:number};<\/script><script src ="{server:string}js/{file:string}.js"><\/script>',a)},rich:function(a){return a.content},slide:function(b,d){for(var e=[],f=b.materials,g=0;g<f.length;g++){var h=f[g];"string"!==typeof h&&(h=a(h,d,!0));e.push(h)};b.html="<div>"+e.join("</div><div>")+"</div>";b.width=d.width;b.height=d.height;return C('<div id="bd_ec_clb_asp" style="width: {width:number}px; height: {height:number}px; overflow: hidden;">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G("bd_ec_clb_asp");var pages = container.childNodes;var pl = 0;for (var i = 0; i < container.childNodes.length; i++) {if (container.childNodes[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = ""; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = "none";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); } })();<\/script>',b)}};return a}();h("DAMAI_CLB_formatMaterial",G);var C=function(){var a=/\{(\w+)\:(\w+)\}/g;return function(b,c){return b.replace(a,function(a,b,e){a=c[b];switch(e){case"number":a=+a||0;break;case"boolean":a=!!a;break;case"html":a=Z(a)};return a})}}();h("DAMAI_CLB_renderFrame",function(a){var b=document.getElementById("damai_clb_slot_iframe_"+a),c=p(a);if(z()&&b.getAttribute("src",2)!==y())b.src=y();else if(c&&!c.done)try{e[a]._done=!0;var d=G(c.data,c);0>d.indexOf("<body>")&&(d="<!DOCTYPE html><body>"+d);var f=b.contentWindow.document;f.open("text/html","replace");f.write(d);f.close();f.body&&(f.body.style.backgroundColor="transparent");1===c.slotType&&0<c.stayTime&&setTimeout(function(){var b=document.getElementById(l(a));b&&b.parentNode.removeChild(b)},1E3*c.stayTime)}catch(g){e[a]._done="PermissionDenied"}});h("DAMAI_CLB_prepareMoveSlot",function(a){void 0===a||void 0===e[a]||(e[a]._done=!1)});var u=h("DAMAI_CLB_orientations",{}),ia=/^[0-9a-zA-Z]+$/,ja=/^[0-9a-zA-Z_]+$/;h("DAMAI_CLB_addOrientation",T);(function(){var a=o("DAMAI_CLB_ORIENTATIONS");if(a)for(var b in a)w.call(a,b)&&T(b,a[b])})();h("DAMAI_CLB_addSlot",H);h("DAMAI_CLB_enableAllSlots",H);h("DAMAI_CLB_SETHTMLSLOT",H);h("DAMAI_CLB_SETJSONADSLOT",V);h("DAMAI_CLB_ADDAD",W);h("DAMAI_CLB_fillSlot",B);h("DAMAI_CLB_singleFillSlot",B);h("DAMAI_CLB_fillSlotAsync",function(a,b){if(a&&b&&!("string"!=typeof b&&b.constructor!=String)){var c=e[a];if(!(!0===c||"string"===typeof c)){if("object"===typeof c)return e[a]._target=b,N(a);e[a]=b;x(A(a,"DAMAI_CLB_SETJSONADSLOT"))}}});h("DAMAI_CLB_preloadSlots",function(a){function b(a){a=A(a,"DAMAI_CLB_ADDAD");g.write('<script charset="utf-8" src="'+a+'"><\/script>')};for(var c=[],d=U(),f=arguments.length,h=0;h<f;h++){var k=arguments[h];if(!(d&&k==d.sid)&&(e[k]||(c[c.length]=k,e[k]=!0),16<=c.length))b(c),c=[]};c.length&&b(c)});h("DAMAI_CLB_fillSlotWithSize",X);(function(){var a=o("DAMAI_CLB_SLOT_ID"),b=o("DAMAI_CLB_SLOT_WIDTH"),c=o("DAMAI_CLB_SLOT_HEIGHT");X(a,b,c)})();(function(){var a=o("DAMAI_CLB_JSONP_URL");a&&g.write('<script charset="utf-8" src="'+a+'"><\/script>')})();(function(){f.DAMAI_CLB_logOK||(f.DAMAI_CLB_logOK=!0,r(f,"load",function(){x(serverUrl+"js/log.js")}),0.1>=Math.random()&&r(f,"load",function(){x(serverUrl+"js/logadvanced.js",function(){try{var a=window.LogAdvancedNamespace.using("$baseName.BusinessLogic"),b;for(b in e)a.adsArray&&a.adsArray.push({id:b,domId:l(b),uiParamSnap:q.ups,win:window,js:"cc"});a.ViewWatch&&a.ViewWatch.getInstance()}catch(c){}})}))})()})();