!function(){function define(dplus){dplus.define=function(dn,fn){function hasContain(a,b){var c=!1;a=a.toUpperCase();for(var d=0;d<b.length;d++)a===b[d].toUpperCase()&&(c=!0);return c}var defineName=(dn||"base").toUpperCase(),add={properties:{},registerProperties:{}},sceneName,Scene=function(){};lang.extend(add,Base(add.properties,add.registerProperties)),hasContain(defineName,conf.WHITE_LIST_SCENE)&&(sceneName=defineName.substring(0,1).toUpperCase()+defineName.substring(1).toLowerCase(),Scene=eval(sceneName),lang.extend(add,new Scene(add.properties,add.registerProperties)),lang.setSign(add.properties,defineName),fn.call(this,add))};var cacheDefine=window.__dplusDefineCacheQueue;lang.each(cacheDefine,function(a){if(lang.isArray(a)&&2===a.length){var b=a[0],c=a[1];lang.isString(b)&&lang.isFunction(c)&&dplus.define(b,c)}});try{delete window.__dplusDefineCacheQueue}catch(e){}}var Conf=function(){var a={sign:"$senario",p_base_id:"$id",p_base_username:"$na",p_base_source:"$sc",p_base_type:"$ty",p_base_title:"$ti",p_base_tags:"$tg",p_base_author:"$au",p_base_editor:"$ed",p_base_url:"$ul",p_base_cate_0:"$c1",p_base_cate_1:"$c2",p_base_cate_2:"$c3",p_base_cate_3:"$c4",p_base_cate_4:"$c5",p_base_cate_5:"$c6",p_base_cate_6:"$c7",p_base_cate_7:"$c8",p_base_cate_8:"$c9",p_base_cate_9:"$c10",p_base_duration:"$pd",e_base_duration:"$Pd",p_user_id:"$uid",p_user_username:"$un",p_user_source:"$usc",p_user_accountType:"$at",p_user_email:"$em",p_user_phone:"$ph",e_user_login:"$Lg",e_user_signUp:"$Su",e_page_view:"$Pv",e_page_share:"$Ps",e_page_like:"$Pl",e_page_comment:"$Pc",e_page_bookmark:"$Pb",p_file_version:"$fv",p_file_platform:"$fp",e_file_download:"$Dl",p_inSearch_keyword:"$kw",p_inSearch_resultNumber:"$rn",p_inSearch_clickSearchIndex:"$cs",p_inSearch_pageNumber:"$cp",p_inSearch_clickItemId:"$ci",e_inSearch_hitSearch:"$Hs",e_inSearch_listResult:"$Lr",e_inSearch_clickResult:"$Cr",p_stock_code:"$scd",p_stock_industry:"$sin",p_stock_concept:"$sco",p_stock_area:"$sar",p_stock_curPrice:"$spc",p_stock_oriPrice:"$spo",p_stock_duration:"$spd",e_stock_duration:"$Spd",e_stock_view:"$Spv",e_stock_add:"$Sad",e_stock_remove:"$Srm"};return{REFERRER:"$referrer",DICT:a,DURATION:"duration",DURATION_COOKIR_NAME:"",DURATION_COOKIE_NAME_PREFIX:"dplus_d_",DURATION_TIMEOUT:"",CLEAN_URL:"clean_url",MAX_LOAD_DPLUS:30,MAX_TAGS:10,WHITE_LIST_SCENE:["User","Page","Insearch","File","Stock"],VERSION:"1.0.1"}},conf=Conf(),Lang=function(){var a=function(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}},b=a("Object"),c=a("String"),d=Array.isArray||a("Array"),e=a("Function"),f=a("Undefined"),g=a("Number"),h=function(a,b,c){if(null!=a)if(a.length===+a.length){for(var d=0,e=a.length;e>d;d++)if(d in a&&b.call(c,a[d],d,a)==={})return}else for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)&&b.call(c,a[f],f,a)==={})return},i=function(a){return h(Array.prototype.slice.call(arguments,1),function(b){for(var c in b)void 0!==b[c]&&(a[c]=b[c])}),a},j=function(a,b,c,d){dplus.track(a,b,c,d)},k=function(a){dplus.register(a)},l=function(a,b){var c=dplus.get_distinct_id()||"null",d=dplus._.base64Encode(c),e=dplus._.base64Encode(d+"_"+b);a[conf.DICT.sign]=e},m=function(a){var b=0,c=50,d=1e3*conf.MAX_LOAD_DPLUS/c,e=setInterval(function(){if(window.dplus.__loaded)clearInterval(e),a.call(this);else if(b>d)throw clearInterval(e),Error("dplus core load error");b++},c)},n=function(a,c,d){return g(a)?(c=function(){},d=a,a={}):e(a)?(c=a,a={}):b(a)&&g(c)&&(d=c),{properties:a,callback:c,timeout:d}},o=function(a){var b=n(a.properties,a.callback,a.timeout);i(a.obj_properties,b.properties),k(a.obj_registerProperties),i(a.obj_properties,a.obj_registerProperties),(!a.trackBefore||a.trackBefore&&a.trackBefore.call(null,a)!==!1)&&(a.that.handleCleanUrl(),j(a.eventName,a.obj_properties,b.callback,b.timeout))},p=function(){return{get:function(a){return dplus._.cookie.parse(a)},set:function(a,b){dplus._.cookie.set(a,dplus._.JSONEncode(b),dplus.config.cookie_expiration,dplus.config.cross_subdomain_cookie,dplus.config.secure_cookie)}}};return{isObject:b,isString:c,isArray:d,isFunction:e,isNumber:g,isUndefined:f,each:h,extend:i,dplusTrack:j,dplusRegister:k,warpTrack:o,Store:p(),setSign:l,untilDPlusDone:m}},lang=Lang();lang.untilDPlusDone(function(){define(window.dplus)});var Base=function(){var a=function(a,b){this.properties=a,this.registerProperties=b,this.maxTags=conf.MAX_TAGS};return a.prototype={init:function(a,b,c){!lang.isUndefined(b)&&lang.isObject(b)&&this.setConfig(b),dplus.init(a,b,c)},setConfig:function(a){dplus.set_config(a)},setId:function(a){this.properties[conf.DICT.p_base_id]=a},setName:function(a){this.properties[conf.DICT.p_base_username]=a},setSource:function(a){this.properties[conf.DICT.p_base_source]=a},setType:function(a){this.properties[conf.DICT.p_base_type]=a},setCategory:function(a){var b=this;lang.isArray(a)?lang.each(a,function(c,d){d<b.maxTags&&(b.properties[conf.DICT["p_base_cate_"+d]]=a[d])}):lang.isString(a)&&(b.properties[conf.DICT.p_base_cate_0]=a)},setTitle:function(a){this.properties[conf.DICT.p_base_title]=a||document.title},setTags:function(a){lang.isArray(a)?this.properties[conf.DICT.p_base_tags]=a:this.properties[conf.DICT.p_base_tags]=[a]},setAuthor:function(a){this.properties[conf.DICT.p_base_author]=a},setEditor:function(a){this.properties[conf.DICT.p_base_editor]=a},setUrl:function(a){this.properties[conf.DICT.p_base_url]=a||location.href},clientNow:function(){return Math.floor((new Date).getTime())},handleAutoSetTitle:function(){lang.isUndefined(this.properties[conf.DICT.p_base_title])&&this.setTitle()},handleAutoSetUrl:function(){lang.isUndefined(this.properties[conf.DICT.p_base_url])&&this.setUrl()},handleCleanUrl:function(){var a=this;if(Boolean(dplus.config[conf.CLEAN_URL])){var b=a.properties[conf.DICT.p_base_url];b&&b.indexOf("?")>0&&(b=b.split("?")[0],a.properties[conf.DICT.p_base_url]=b)}}},new a},File=function(){var a=function(a,b){this.properties=a,this.registerProperties=b};return a.prototype={setVersion:function(a){this.properties[conf.DICT.p_file_version]=a},setPlatform:function(a){this.properties[conf.DICT.p_file_platform]=a},download:function(a,b,c){var d=this;lang.warpTrack({that:d,eventName:conf.DICT.e_file_download,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties})}},new a},Insearch=function(){var a=function(a,b){this.properties=a,this.registerProperties=b};return a.prototype={_pageTrack:function(a,b,c,d){var e=this;lang.warpTrack({that:e,eventName:a,properties:b,callback:c,timeout:d,obj_properties:e.properties,obj_registerProperties:e.registerProperties})},hitSearch:function(a,b,c){lang.isObject(a)&&!lang.isUndefined(a.keyword)&&(this.registerProperties[conf.DICT.p_inSearch_keyword]=a.keyword,delete a.keyword),this._pageTrack(conf.DICT.e_inSearch_hitSearch,a,b,c)},listResults:function(a,b,c){lang.isObject(a)&&!lang.isUndefined(a.resultNumber)&&(this.properties[conf.DICT.p_inSearch_resultNumber]=a.resultNumber,delete a.resultNumber),this._pageTrack(conf.DICT.e_inSearch_listResult,a,b,c)},clickResult:function(a,b,c){lang.isObject(a)&&!lang.isUndefined(a.clickSearchIndex)&&(this.properties[conf.DICT.p_inSearch_clickSearchIndex]=a.clickSearchIndex,delete a.clickSearchIndex),lang.isObject(a)&&!lang.isUndefined(a.pageNumber)&&(this.properties[conf.DICT.p_inSearch_pageNumber]=a.pageNumber,delete a.pageNumber),lang.isObject(a)&&!lang.isUndefined(a.clickItemId)&&(this.properties[conf.DICT.p_inSearch_clickItemId]=a.clickItemId,delete a.clickItemId),this._pageTrack(conf.DICT.e_inSearch_clickResult,a,b,c)}},new a},Page=function(){var a=function(a,b){this.properties=a,this.registerProperties=b,this.COOKIE_NAME_DURATION_KEY="page"};return a.prototype={_pageTrack:function(a,b,c,d){var e=this;lang.warpTrack({that:e,eventName:a,properties:b,callback:c,timeout:d,obj_properties:e.properties,obj_registerProperties:e.registerProperties,trackBefore:function(){e.handleAutoSetTitle(),e.handleAutoSetUrl()}})},_handlePageDuration:function(a){var b=this;if(!Boolean(dplus.config[conf.DURATION]))return a.call(this,-1),!1;var c=(b.COOKIE_NAME_DURATION||b.COOKIE_NAME_DURATION_PREFIX+dplus.config.token,1e3*(parseInt(b.TIMEOUT_DURATION,10)||parseInt(dplus.config.session_timeout,10))),d=(lang.Store.get(b.COOKIE_NAME_DURATION)||{})[b.COOKIE_NAME_DURATION_KEY],e=(d||{})[conf.DICT.p_base_duration];if(Number(e)){var f=parseInt(b.clientNow()-e,10);if(c>f&&f>0)return a.call(this,f),!0}a.call(this,0)},view:function(a,b,c){var d=this;d.COOKIE_NAME_DURATION=conf.DURATION_COOKIR_NAME||conf.DURATION_COOKIE_NAME_PREFIX+dplus.config.token;var e=[conf.DICT.p_base_title,conf.DICT.p_base_url,conf.REFERRER];d._handlePageDuration(function(f){0===f?lang.warpTrack({that:d,eventName:conf.DICT.e_page_view,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties,trackBefore:function(a){d.handleAutoSetTitle(),d.handleAutoSetUrl();for(var b={},c=0;c<e.length;c++){var f=e[c];b[f]=a.obj_properties[f],f===conf.REFERRER&&(b[f]="")}b[conf.DICT.p_base_duration]=d.clientNow();var g=lang.Store.get(d.COOKIE_NAME_DURATION)||{};g[d.COOKIE_NAME_DURATION_KEY]=b,lang.Store.set(d.COOKIE_NAME_DURATION,g)}}):f>0?(lang.warpTrack({that:d,eventName:conf.DICT.e_base_duration,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties,trackBefore:function(a){d.handleAutoSetTitle(),d.handleAutoSetUrl();var b={},c=(lang.Store.get(d.COOKIE_NAME_DURATION)||{})[d.COOKIE_NAME_DURATION_KEY];lang.each(c,function(a,c){b[c]=a}),b[conf.DICT.p_base_duration]=f,a.obj_properties=b}}),d.properties[conf.DICT.p_base_duration]&&delete d.properties[conf.DICT.p_base_duration],d._pageTrack(conf.DICT.e_page_view,a,b,c)):-1===f&&d._pageTrack(conf.DICT.e_page_view,a,b,c)})},share:function(a,b,c){this._pageTrack(conf.DICT.e_page_share,a,b,c)},like:function(a,b,c){this._pageTrack(conf.DICT.e_page_like,a,b,c)},comment:function(a,b,c){this._pageTrack(conf.DICT.e_page_comment,a,b,c)},bookmark:function(a,b,c){this._pageTrack(conf.DICT.e_page_bookmark,a,b,c)}},new a},Stock=function(){var a=function(a,b){this.properties=a,this.registerProperties=b,this.COOKIE_NAME_DURATION_KEY="stock"};return a.prototype={setCode:function(a){this.properties[conf.DICT.p_stock_code]=a},setIndustry:function(a){this.properties[conf.DICT.p_stock_industry]=a},setConcept:function(a){this.properties[conf.DICT.p_stock_concept]=a},setArea:function(a){this.properties[conf.DICT.p_stock_area]=a},setCurPrice:function(a){this.properties[conf.DICT.p_stock_curPrice]=a},setOriPrice:function(a){this.properties[conf.DICT.p_stock_oriPrice]=a},_handlePageDuration:function(a){var b=this;if(!Boolean(dplus.config[conf.DURATION]))return a.call(this,-1),!1;var c=(b.COOKIE_NAME_DURATION||b.COOKIE_NAME_DURATION_PREFIX+dplus.config.token,1e3*(parseInt(conf.DURATION_TIMEOUT,10)||parseInt(dplus.config.session_timeout,10))),d=(lang.Store.get(b.COOKIE_NAME_DURATION)||{})[b.COOKIE_NAME_DURATION_KEY],e=(d||{})[conf.DICT.p_stock_duration];if(Number(e)){var f=parseInt(b.clientNow()-e,10);if(c>f&&f>0)return a.call(this,f),!0}a.call(this,0)},_pageTrack:function(a,b,c,d){var e=this;lang.warpTrack({that:e,eventName:a,properties:b,callback:c,timeout:d,obj_properties:e.properties,obj_registerProperties:e.registerProperties})},add:function(a,b,c){this._pageTrack(conf.DICT.e_stock_add,a,b,c)},remove:function(a,b,c){this._pageTrack(conf.DICT.e_stock_remove,a,b,c)},view:function(a,b,c){var d=this;d.COOKIE_NAME_DURATION=conf.DURATION_COOKIR_NAME||conf.DURATION_COOKIE_NAME_PREFIX+dplus.config.token;var e=[conf.DICT.p_base_username,conf.DICT.p_stock_code];d._handlePageDuration(function(f){0===f?lang.warpTrack({that:d,eventName:conf.DICT.e_stock_view,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties,trackBefore:function(a){d.handleAutoSetTitle(),d.handleAutoSetUrl();for(var b={},c=0;c<e.length;c++){var f=e[c];b[f]=a.obj_properties[f],f===conf.REFERRER&&(b[f]="")}b[conf.DICT.p_stock_duration]=d.clientNow();var g=lang.Store.get(d.COOKIE_NAME_DURATION)||{};g[d.COOKIE_NAME_DURATION_KEY]=b,lang.Store.set(d.COOKIE_NAME_DURATION,g)}}):f>0?(lang.warpTrack({that:d,eventName:conf.DICT.e_stock_duration,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties,trackBefore:function(a){d.handleAutoSetTitle(),d.handleAutoSetUrl();var b={},c=(lang.Store.get(d.COOKIE_NAME_DURATION)||{})[d.COOKIE_NAME_DURATION_KEY];lang.each(c,function(a,c){b[c]=a}),b[conf.DICT.p_stock_duration]=f,a.obj_properties=b}}),d.properties[conf.DICT.p_stock_duration]&&delete d.properties[conf.DICT.p_stock_duration],d._pageTrack(conf.DICT.e_stock_view,a,b,c)):-1===f&&d._pageTrack(conf.DICT.e_stock_view,a,b,c)})}},new a},User=function(){var a=function(a,b){this.properties=a,this.registerProperties=b};return a.prototype={setId:function(a){this.registerProperties[conf.DICT.p_user_id]=a},setName:function(a){this.registerProperties[conf.DICT.p_user_username]=a},setSource:function(a){this.registerProperties[conf.DICT.p_user_source]=a},setAccountType:function(a){this.registerProperties[conf.DICT.p_user_accountType]=a},setEmail:function(a){this.registerProperties[conf.DICT.p_user_email]=a},setPhone:function(a){this.registerProperties[conf.DICT.p_user_phone]=a},login:function(a,b,c){var d=this;lang.warpTrack({that:d,eventName:conf.DICT.e_user_login,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties,trackBefore:function(){d.handleAutoSetTitle(),d.handleAutoSetUrl()}})},signUp:function(a,b,c){var d=this;lang.warpTrack({that:d,eventName:conf.DICT.e_user_signUp,properties:a,callback:b,timeout:c,obj_properties:d.properties,obj_registerProperties:d.registerProperties,trackBefore:function(){d.handleAutoSetTitle(),d.handleAutoSetUrl()}})}},new a}}();