//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>24||24===a._a[Db]&&(0!==a._a[Eb]||0!==a._a[Fb]||0!==a._a[Gb])?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(tb.isMoment(a)||v(a)?+a:+tb(a))-+c,c._d.setTime(+c._d+d),tb.updateOffset(c,!1),c):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"x":return Xb;case"X":return Yb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"x":c._d=new Date(A(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Db]&&0===a._a[Eb]&&0===a._a[Fb]&&0===a._a[Gb]&&(a._nextDay=!0,a._a[Db]=0),a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm),a._nextDay&&(a._a[Db]=24)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(b){if(b._f===tb.ISO_8601)return void $(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=O(b._f,b._locale).match(Nb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),pc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),R(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Db]<=12&&(b._pf.bigHour=a),b._isPm&&b._a[Db]<12&&(b._a[Db]+=12),b._isPm===!1&&12===b._a[Db]&&(b._a[Db]=0),T(b),F(b)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||tb.localeData(b._l),null===d||e===a&&""===d?tb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),tb.isMoment(d)?new k(d,!0):(e?u(e)?Z(b):W(b):bb(b),c=new k(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.4",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+/,Yb=/[\+\-]?\d+(\.\d{1,3})?/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=tb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,tb(b)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=x(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):(c=tb.isMoment(a)?+a:+tb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):(c=tb.isMoment(a)?+a:+tb(a),+this.clone().endOf(b)<c)},isSame:function(a,b){var c;return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):(c=+tb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(qb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;
case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);
/*! X-editable - v1.5.1 
* In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
* http://github.com/vitalets/x-editable
* Copyright (c) 2013 Vitaliy Potapov; Licensed MIT */
!function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.editableform.defaults,c),this.$div=a(b),this.options.scope||(this.options.scope=this)};b.prototype={constructor:b,initInput:function(){this.input=this.options.input,this.value=this.input.str2value(this.options.value),this.input.prerender()},initTemplate:function(){this.$form=a(a.fn.editableform.template)},initButtons:function(){var b=this.$form.find(".editable-buttons");b.append(a.fn.editableform.buttons),"bottom"===this.options.showbuttons&&b.addClass("editable-buttons-bottom")},render:function(){this.$loading=a(a.fn.editableform.loading),this.$div.empty().append(this.$loading),this.initTemplate(),this.options.showbuttons?this.initButtons():this.$form.find(".editable-buttons").remove(),this.showLoading(),this.isSaving=!1,this.$div.triggerHandler("rendering"),this.initInput(),this.$form.find("div.editable-input").append(this.input.$tpl),this.$div.append(this.$form),a.when(this.input.render()).then(a.proxy(function(){if(this.options.showbuttons||this.input.autosubmit(),this.$form.find(".editable-cancel").click(a.proxy(this.cancel,this)),this.input.error)this.error(this.input.error),this.$form.find(".editable-submit").attr("disabled",!0),this.input.$input.attr("disabled",!0),this.$form.submit(function(a){a.preventDefault()});else{this.error(!1),this.input.$input.removeAttr("disabled"),this.$form.find(".editable-submit").removeAttr("disabled");var b=null===this.value||void 0===this.value||""===this.value?this.options.defaultValue:this.value;this.input.value2input(b),this.$form.submit(a.proxy(this.submit,this))}this.$div.triggerHandler("rendered"),this.showForm(),this.input.postrender&&this.input.postrender()},this))},cancel:function(){this.$div.triggerHandler("cancel")},showLoading:function(){var a,b;this.$form?(a=this.$form.outerWidth(),b=this.$form.outerHeight(),a&&this.$loading.width(a),b&&this.$loading.height(b),this.$form.hide()):(a=this.$loading.parent().width(),a&&this.$loading.width(a)),this.$loading.show()},showForm:function(a){this.$loading.hide(),this.$form.show(),a!==!1&&this.input.activate(),this.$div.triggerHandler("show")},error:function(b){var c,d=this.$form.find(".control-group"),e=this.$form.find(".editable-error-block");if(b===!1)d.removeClass(a.fn.editableform.errorGroupClass),e.removeClass(a.fn.editableform.errorBlockClass).empty().hide();else{if(b){c=(""+b).split("\n");for(var f=0;f<c.length;f++)c[f]=a("<div>").text(c[f]).html();b=c.join("<br>")}d.addClass(a.fn.editableform.errorGroupClass),e.addClass(a.fn.editableform.errorBlockClass).html(b).show()}},submit:function(b){b.stopPropagation(),b.preventDefault();var c=this.input.input2value(),d=this.validate(c);if("object"===a.type(d)&&void 0!==d.newValue){if(c=d.newValue,this.input.value2input(c),"string"==typeof d.msg)return this.error(d.msg),this.showForm(),void 0}else if(d)return this.error(d),this.showForm(),void 0;if(!this.options.savenochange&&this.input.value2str(c)==this.input.value2str(this.value))return this.$div.triggerHandler("nochange"),void 0;var e=this.input.value2submit(c);this.isSaving=!0,a.when(this.save(e)).done(a.proxy(function(a){this.isSaving=!1;var b="function"==typeof this.options.success?this.options.success.call(this.options.scope,a,c):null;return b===!1?(this.error(!1),this.showForm(!1),void 0):"string"==typeof b?(this.error(b),this.showForm(),void 0):(b&&"object"==typeof b&&b.hasOwnProperty("newValue")&&(c=b.newValue),this.error(!1),this.value=c,this.$div.triggerHandler("save",{newValue:c,submitValue:e,response:a}),void 0)},this)).fail(a.proxy(function(a){this.isSaving=!1;var b;b="function"==typeof this.options.error?this.options.error.call(this.options.scope,a,c):"string"==typeof a?a:a.responseText||a.statusText||"Unknown error!",this.error(b),this.showForm()},this))},save:function(b){this.options.pk=a.fn.editableutils.tryParseJson(this.options.pk,!0);var c,d="function"==typeof this.options.pk?this.options.pk.call(this.options.scope):this.options.pk,e=!!("function"==typeof this.options.url||this.options.url&&("always"===this.options.send||"auto"===this.options.send&&null!==d&&void 0!==d));return e?(this.showLoading(),c={name:this.options.name||"",value:b,pk:d},"function"==typeof this.options.params?c=this.options.params.call(this.options.scope,c):(this.options.params=a.fn.editableutils.tryParseJson(this.options.params,!0),a.extend(c,this.options.params)),"function"==typeof this.options.url?this.options.url.call(this.options.scope,c):a.ajax(a.extend({url:this.options.url,data:c,type:"POST"},this.options.ajaxOptions))):void 0},validate:function(a){return void 0===a&&(a=this.value),"function"==typeof this.options.validate?this.options.validate.call(this.options.scope,a):void 0},option:function(a,b){a in this.options&&(this.options[a]=b),"value"===a&&this.setValue(b)},setValue:function(a,b){this.value=b?this.input.str2value(a):a,this.$form&&this.$form.is(":visible")&&this.input.value2input(this.value)}},a.fn.editableform=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("editableform"),g="object"==typeof c&&c;f||e.data("editableform",f=new b(this,g)),"string"==typeof c&&f[c].apply(f,Array.prototype.slice.call(d,1))})},a.fn.editableform.Constructor=b,a.fn.editableform.defaults={type:"text",url:null,params:null,name:null,pk:null,value:null,defaultValue:null,send:"auto",validate:null,success:null,error:null,ajaxOptions:null,showbuttons:!0,scope:null,savenochange:!1},a.fn.editableform.template='<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>',a.fn.editableform.loading='<div class="editableform-loading"></div>',a.fn.editableform.buttons='<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>',a.fn.editableform.errorGroupClass=null,a.fn.editableform.errorBlockClass="editable-error",a.fn.editableform.engine="jquery"}(window.jQuery),function(a){"use strict";a.fn.editableutils={inherit:function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.superclass=b.prototype},setCursorPosition:function(a,b){if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}},tryParseJson:function(a,b){if("string"==typeof a&&a.length&&a.match(/^[\{\[].*[\}\]]$/))if(b)try{a=new Function("return "+a)()}catch(c){}finally{return a}else a=new Function("return "+a)();return a},sliceObj:function(b,c,d){var e,f,g={};if(!a.isArray(c)||!c.length)return g;for(var h=0;h<c.length;h++)e=c[h],b.hasOwnProperty(e)&&(g[e]=b[e]),d!==!0&&(f=e.toLowerCase(),b.hasOwnProperty(f)&&(g[e]=b[f]));return g},getConfigData:function(b){var c={};return a.each(b.data(),function(a,b){("object"!=typeof b||b&&"object"==typeof b&&(b.constructor===Object||b.constructor===Array))&&(c[a]=b)}),c},objectKeys:function(a){if(Object.keys)return Object.keys(a);if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c},escape:function(b){return a("<div>").text(b).html()},itemsByValue:function(b,c,d){if(!c||null===b)return[];if("function"!=typeof d){var e=d||"value";d=function(a){return a[e]}}var f=a.isArray(b),g=[],h=this;return a.each(c,function(c,e){if(e.children)g=g.concat(h.itemsByValue(b,e.children,d));else if(f)a.grep(b,function(a){return a==(e&&"object"==typeof e?d(e):e)}).length&&g.push(e);else{var i=e&&"object"==typeof e?d(e):e;b==i&&g.push(e)}}),g},createInput:function(b){var c,d,e,f=b.type;return"date"===f&&("inline"===b.mode?a.fn.editabletypes.datefield?f="datefield":a.fn.editabletypes.dateuifield&&(f="dateuifield"):a.fn.editabletypes.date?f="date":a.fn.editabletypes.dateui&&(f="dateui"),"date"!==f||a.fn.editabletypes.date||(f="combodate")),"datetime"===f&&"inline"===b.mode&&(f="datetimefield"),"wysihtml5"!==f||a.fn.editabletypes[f]||(f="textarea"),"function"==typeof a.fn.editabletypes[f]?(c=a.fn.editabletypes[f],d=this.sliceObj(b,this.objectKeys(c.defaults)),e=new c(d)):(a.error("Unknown type: "+f),!1)},supportsTransitions:function(){var a=document.body||document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}}}(window.jQuery),function(a){"use strict";var b=function(a,b){this.init(a,b)},c=function(a,b){this.init(a,b)};b.prototype={containerName:null,containerDataName:null,innerCss:null,containerClass:"editable-container editable-popup",defaults:{},init:function(c,d){this.$element=a(c),this.options=a.extend({},a.fn.editableContainer.defaults,d),this.splitOptions(),this.formOptions.scope=this.$element[0],this.initContainer(),this.delayedHide=!1,this.$element.on("destroyed",a.proxy(function(){this.destroy()},this)),a(document).data("editable-handlers-attached")||(a(document).on("keyup.editable",function(b){27===b.which&&a(".editable-open").editableContainer("hide")}),a(document).on("click.editable",function(c){var d,e=a(c.target),f=[".editable-container",".ui-datepicker-header",".datepicker",".modal-backdrop",".bootstrap-wysihtml5-insert-image-modal",".bootstrap-wysihtml5-insert-link-modal"];if(a.contains(document.documentElement,c.target)&&!e.is(document)){for(d=0;d<f.length;d++)if(e.is(f[d])||e.parents(f[d]).length)return;b.prototype.closeOthers(c.target)}}),a(document).data("editable-handlers-attached",!0))},splitOptions:function(){if(this.containerOptions={},this.formOptions={},!a.fn[this.containerName])throw new Error(this.containerName+" not found. Have you included corresponding js file?");for(var b in this.options)b in this.defaults?this.containerOptions[b]=this.options[b]:this.formOptions[b]=this.options[b]},tip:function(){return this.container()?this.container().$tip:null},container:function(){var a;return this.containerDataName&&(a=this.$element.data(this.containerDataName))?a:a=this.$element.data(this.containerName)},call:function(){this.$element[this.containerName].apply(this.$element,arguments)},initContainer:function(){this.call(this.containerOptions)},renderForm:function(){this.$form.editableform(this.formOptions).on({save:a.proxy(this.save,this),nochange:a.proxy(function(){this.hide("nochange")},this),cancel:a.proxy(function(){this.hide("cancel")},this),show:a.proxy(function(){this.delayedHide?(this.hide(this.delayedHide.reason),this.delayedHide=!1):this.setPosition()},this),rendering:a.proxy(this.setPosition,this),resize:a.proxy(this.setPosition,this),rendered:a.proxy(function(){this.$element.triggerHandler("shown",a(this.options.scope).data("editable"))},this)}).editableform("render")},show:function(b){this.$element.addClass("editable-open"),b!==!1&&this.closeOthers(this.$element[0]),this.innerShow(),this.tip().addClass(this.containerClass),this.$form,this.$form=a("<div>"),this.tip().is(this.innerCss)?this.tip().append(this.$form):this.tip().find(this.innerCss).append(this.$form),this.renderForm()},hide:function(a){if(this.tip()&&this.tip().is(":visible")&&this.$element.hasClass("editable-open")){if(this.$form.data("editableform").isSaving)return this.delayedHide={reason:a},void 0;this.delayedHide=!1,this.$element.removeClass("editable-open"),this.innerHide(),this.$element.triggerHandler("hidden",a||"manual")}},innerShow:function(){},innerHide:function(){},toggle:function(a){this.container()&&this.tip()&&this.tip().is(":visible")?this.hide():this.show(a)},setPosition:function(){},save:function(a,b){this.$element.triggerHandler("save",b),this.hide("save")},option:function(a,b){this.options[a]=b,a in this.containerOptions?(this.containerOptions[a]=b,this.setContainerOption(a,b)):(this.formOptions[a]=b,this.$form&&this.$form.editableform("option",a,b))},setContainerOption:function(a,b){this.call("option",a,b)},destroy:function(){this.hide(),this.innerDestroy(),this.$element.off("destroyed"),this.$element.removeData("editableContainer")},innerDestroy:function(){},closeOthers:function(b){a(".editable-open").each(function(c,d){if(d!==b&&!a(d).find(b).length){var e=a(d),f=e.data("editableContainer");f&&("cancel"===f.options.onblur?e.data("editableContainer").hide("onblur"):"submit"===f.options.onblur&&e.data("editableContainer").tip().find("form").submit())}})},activate:function(){this.tip&&this.tip().is(":visible")&&this.$form&&this.$form.data("editableform").input.activate()}},a.fn.editableContainer=function(d){var e=arguments;return this.each(function(){var f=a(this),g="editableContainer",h=f.data(g),i="object"==typeof d&&d,j="inline"===i.mode?c:b;h||f.data(g,h=new j(this,i)),"string"==typeof d&&h[d].apply(h,Array.prototype.slice.call(e,1))})},a.fn.editableContainer.Popup=b,a.fn.editableContainer.Inline=c,a.fn.editableContainer.defaults={value:null,placement:"top",autohide:!0,onblur:"cancel",anim:!1,mode:"popup"},jQuery.event.special.destroyed={remove:function(a){a.handler&&a.handler()}}}(window.jQuery),function(a){"use strict";a.extend(a.fn.editableContainer.Inline.prototype,a.fn.editableContainer.Popup.prototype,{containerName:"editableform",innerCss:".editable-inline",containerClass:"editable-container editable-inline",initContainer:function(){this.$tip=a("<span></span>"),this.options.anim||(this.options.anim=0)},splitOptions:function(){this.containerOptions={},this.formOptions=this.options},tip:function(){return this.$tip},innerShow:function(){this.$element.hide(),this.tip().insertAfter(this.$element).show()},innerHide:function(){this.$tip.hide(this.options.anim,a.proxy(function(){this.$element.show(),this.innerDestroy()},this))},innerDestroy:function(){this.tip()&&this.tip().empty().remove()}})}(window.jQuery),function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.editable.defaults,c,a.fn.editableutils.getConfigData(this.$element)),this.options.selector?this.initLive():this.init(),this.options.highlight&&!a.fn.editableutils.supportsTransitions()&&(this.options.highlight=!1)};b.prototype={constructor:b,init:function(){var b,c=!1;if(this.options.name=this.options.name||this.$element.attr("id"),this.options.scope=this.$element[0],this.input=a.fn.editableutils.createInput(this.options),this.input){switch(void 0===this.options.value||null===this.options.value?(this.value=this.input.html2value(a.trim(this.$element.html())),c=!0):(this.options.value=a.fn.editableutils.tryParseJson(this.options.value,!0),this.value="string"==typeof this.options.value?this.input.str2value(this.options.value):this.options.value),this.$element.addClass("editable"),"textarea"===this.input.type&&this.$element.addClass("editable-pre-wrapped"),"manual"!==this.options.toggle?(this.$element.addClass("editable-click"),this.$element.on(this.options.toggle+".editable",a.proxy(function(a){if(this.options.disabled||a.preventDefault(),"mouseenter"===this.options.toggle)this.show();else{var b="click"!==this.options.toggle;this.toggle(b)}},this))):this.$element.attr("tabindex",-1),"function"==typeof this.options.display&&(this.options.autotext="always"),this.options.autotext){case"always":b=!0;break;case"auto":b=!a.trim(this.$element.text()).length&&null!==this.value&&void 0!==this.value&&!c;break;default:b=!1}a.when(b?this.render():!0).then(a.proxy(function(){this.options.disabled?this.disable():this.enable(),this.$element.triggerHandler("init",this)},this))}},initLive:function(){var b=this.options.selector;this.options.selector=!1,this.options.autotext="never",this.$element.on(this.options.toggle+".editable",b,a.proxy(function(b){var c=a(b.target);c.data("editable")||(c.hasClass(this.options.emptyclass)&&c.empty(),c.editable(this.options).trigger(b))},this))},render:function(a){return this.options.display!==!1?this.input.value2htmlFinal?this.input.value2html(this.value,this.$element[0],this.options.display,a):"function"==typeof this.options.display?this.options.display.call(this.$element[0],this.value,a):this.input.value2html(this.value,this.$element[0]):void 0},enable:function(){this.options.disabled=!1,this.$element.removeClass("editable-disabled"),this.handleEmpty(this.isEmpty),"manual"!==this.options.toggle&&"-1"===this.$element.attr("tabindex")&&this.$element.removeAttr("tabindex")},disable:function(){this.options.disabled=!0,this.hide(),this.$element.addClass("editable-disabled"),this.handleEmpty(this.isEmpty),this.$element.attr("tabindex",-1)},toggleDisabled:function(){this.options.disabled?this.enable():this.disable()},option:function(b,c){return b&&"object"==typeof b?(a.each(b,a.proxy(function(b,c){this.option(a.trim(b),c)},this)),void 0):(this.options[b]=c,"disabled"===b?c?this.disable():this.enable():("value"===b&&this.setValue(c),this.container&&this.container.option(b,c),this.input.option&&this.input.option(b,c),void 0))},handleEmpty:function(b){this.options.display!==!1&&(this.isEmpty=void 0!==b?b:"function"==typeof this.input.isEmpty?this.input.isEmpty(this.$element):""===a.trim(this.$element.html()),this.options.disabled?this.isEmpty&&(this.$element.empty(),this.options.emptyclass&&this.$element.removeClass(this.options.emptyclass)):this.isEmpty?(this.$element.html(this.options.emptytext),this.options.emptyclass&&this.$element.addClass(this.options.emptyclass)):this.options.emptyclass&&this.$element.removeClass(this.options.emptyclass))},show:function(b){if(!this.options.disabled){if(this.container){if(this.container.tip().is(":visible"))return}else{var c=a.extend({},this.options,{value:this.value,input:this.input});this.$element.editableContainer(c),this.$element.on("save.internal",a.proxy(this.save,this)),this.container=this.$element.data("editableContainer")}this.container.show(b)}},hide:function(){this.container&&this.container.hide()},toggle:function(a){this.container&&this.container.tip().is(":visible")?this.hide():this.show(a)},save:function(a,b){if(this.options.unsavedclass){var c=!1;c=c||"function"==typeof this.options.url,c=c||this.options.display===!1,c=c||void 0!==b.response,c=c||this.options.savenochange&&this.input.value2str(this.value)!==this.input.value2str(b.newValue),c?this.$element.removeClass(this.options.unsavedclass):this.$element.addClass(this.options.unsavedclass)}if(this.options.highlight){var d=this.$element,e=d.css("background-color");d.css("background-color",this.options.highlight),setTimeout(function(){"transparent"===e&&(e=""),d.css("background-color",e),d.addClass("editable-bg-transition"),setTimeout(function(){d.removeClass("editable-bg-transition")},1700)},10)}this.setValue(b.newValue,!1,b.response)},validate:function(){return"function"==typeof this.options.validate?this.options.validate.call(this,this.value):void 0},setValue:function(b,c,d){this.value=c?this.input.str2value(b):b,this.container&&this.container.option("value",this.value),a.when(this.render(d)).then(a.proxy(function(){this.handleEmpty()},this))},activate:function(){this.container&&this.container.activate()},destroy:function(){this.disable(),this.container&&this.container.destroy(),this.input.destroy(),"manual"!==this.options.toggle&&(this.$element.removeClass("editable-click"),this.$element.off(this.options.toggle+".editable")),this.$element.off("save.internal"),this.$element.removeClass("editable editable-open editable-disabled"),this.$element.removeData("editable")}},a.fn.editable=function(c){var d={},e=arguments,f="editable";switch(c){case"validate":return this.each(function(){var b,c=a(this),e=c.data(f);e&&(b=e.validate())&&(d[e.options.name]=b)}),d;case"getValue":return 2===arguments.length&&arguments[1]===!0?d=this.eq(0).data(f).value:this.each(function(){var b=a(this),c=b.data(f);c&&void 0!==c.value&&null!==c.value&&(d[c.options.name]=c.input.value2submit(c.value))}),d;case"submit":var g=arguments[1]||{},h=this,i=this.editable("validate");if(a.isEmptyObject(i)){var j={};if(1===h.length){var k=h.data("editable"),l={name:k.options.name||"",value:k.input.value2submit(k.value),pk:"function"==typeof k.options.pk?k.options.pk.call(k.options.scope):k.options.pk};"function"==typeof k.options.params?l=k.options.params.call(k.options.scope,l):(k.options.params=a.fn.editableutils.tryParseJson(k.options.params,!0),a.extend(l,k.options.params)),j={url:k.options.url,data:l,type:"POST"},g.success=g.success||k.options.success,g.error=g.error||k.options.error}else{var m=this.editable("getValue");j={url:g.url,data:m,type:"POST"}}j.success="function"==typeof g.success?function(a){g.success.call(h,a,g)}:a.noop,j.error="function"==typeof g.error?function(){g.error.apply(h,arguments)}:a.noop,g.ajaxOptions&&a.extend(j,g.ajaxOptions),g.data&&a.extend(j.data,g.data),a.ajax(j)}else"function"==typeof g.error&&g.error.call(h,i);return this}return this.each(function(){var d=a(this),g=d.data(f),h="object"==typeof c&&c;return h&&h.selector?(g=new b(this,h),void 0):(g||d.data(f,g=new b(this,h)),"string"==typeof c&&g[c].apply(g,Array.prototype.slice.call(e,1)),void 0)})},a.fn.editable.defaults={type:"text",disabled:!1,toggle:"click",emptytext:"Empty",autotext:"auto",value:null,display:null,emptyclass:"editable-empty",unsavedclass:"editable-unsaved",selector:null,highlight:"#FFFF80"}}(window.jQuery),function(a){"use strict";a.fn.editabletypes={};var b=function(){};b.prototype={init:function(b,c,d){this.type=b,this.options=a.extend({},d,c)},prerender:function(){this.$tpl=a(this.options.tpl),this.$input=this.$tpl,this.$clear=null,this.error=null},render:function(){},value2html:function(b,c){a(c)[this.options.escape?"text":"html"](a.trim(b))},html2value:function(b){return a("<div>").html(b).text()},value2str:function(a){return a},str2value:function(a){return a},value2submit:function(a){return a},value2input:function(a){this.$input.val(a)},input2value:function(){return this.$input.val()},activate:function(){this.$input.is(":visible")&&this.$input.focus()},clear:function(){this.$input.val(null)},escape:function(b){return a("<div>").text(b).html()},autosubmit:function(){},destroy:function(){},setClass:function(){this.options.inputclass&&this.$input.addClass(this.options.inputclass)},setAttr:function(a){void 0!==this.options[a]&&null!==this.options[a]&&this.$input.attr(a,this.options[a])},option:function(a,b){this.options[a]=b}},b.defaults={tpl:"",inputclass:null,escape:!0,scope:null,showbuttons:!0},a.extend(a.fn.editabletypes,{abstractinput:b})}(window.jQuery),function(a){"use strict";var b=function(){};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){var b=a.Deferred();return this.error=null,this.onSourceReady(function(){this.renderList(),b.resolve()},function(){this.error=this.options.sourceError,b.resolve()}),b.promise()},html2value:function(){return null},value2html:function(b,c,d,e){var f=a.Deferred(),g=function(){"function"==typeof d?d.call(c,b,this.sourceData,e):this.value2htmlFinal(b,c),f.resolve()};return null===b?g.call(this):this.onSourceReady(g,function(){f.resolve()}),f.promise()},onSourceReady:function(b,c){var d;if(a.isFunction(this.options.source)?(d=this.options.source.call(this.options.scope),this.sourceData=null):d=this.options.source,this.options.sourceCache&&a.isArray(this.sourceData))return b.call(this),void 0;try{d=a.fn.editableutils.tryParseJson(d,!1)}catch(e){return c.call(this),void 0}if("string"==typeof d){if(this.options.sourceCache){var f,g=d;if(a(document).data(g)||a(document).data(g,{}),f=a(document).data(g),f.loading===!1&&f.sourceData)return this.sourceData=f.sourceData,this.doPrepend(),b.call(this),void 0;if(f.loading===!0)return f.callbacks.push(a.proxy(function(){this.sourceData=f.sourceData,this.doPrepend(),b.call(this)},this)),f.err_callbacks.push(a.proxy(c,this)),void 0;f.loading=!0,f.callbacks=[],f.err_callbacks=[]}var h=a.extend({url:d,type:"get",cache:!1,dataType:"json",success:a.proxy(function(d){f&&(f.loading=!1),this.sourceData=this.makeArray(d),a.isArray(this.sourceData)?(f&&(f.sourceData=this.sourceData,a.each(f.callbacks,function(){this.call()})),this.doPrepend(),b.call(this)):(c.call(this),f&&a.each(f.err_callbacks,function(){this.call()}))},this),error:a.proxy(function(){c.call(this),f&&(f.loading=!1,a.each(f.err_callbacks,function(){this.call()}))},this)},this.options.sourceOptions);a.ajax(h)}else this.sourceData=this.makeArray(d),a.isArray(this.sourceData)?(this.doPrepend(),b.call(this)):c.call(this)},doPrepend:function(){null!==this.options.prepend&&void 0!==this.options.prepend&&(a.isArray(this.prependData)||(a.isFunction(this.options.prepend)&&(this.options.prepend=this.options.prepend.call(this.options.scope)),this.options.prepend=a.fn.editableutils.tryParseJson(this.options.prepend,!0),"string"==typeof this.options.prepend&&(this.options.prepend={"":this.options.prepend}),this.prependData=this.makeArray(this.options.prepend)),a.isArray(this.prependData)&&a.isArray(this.sourceData)&&(this.sourceData=this.prependData.concat(this.sourceData)))},renderList:function(){},value2htmlFinal:function(){},makeArray:function(b){var c,d,e,f,g=[];if(!b||"string"==typeof b)return null;if(a.isArray(b)){f=function(a,b){return d={value:a,text:b},c++>=2?!1:void 0};for(var h=0;h<b.length;h++)e=b[h],"object"==typeof e?(c=0,a.each(e,f),1===c?g.push(d):c>1&&(e.children&&(e.children=this.makeArray(e.children)),g.push(e))):g.push({value:e,text:e})}else a.each(b,function(a,b){g.push({value:a,text:b})});return g},option:function(a,b){this.options[a]=b,"source"===a&&(this.sourceData=null),"prepend"===a&&(this.prependData=null)}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{source:null,prepend:!1,sourceError:"Error when loading list",sourceCache:!0,sourceOptions:null}),a.fn.editabletypes.list=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("text",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.renderClear(),this.setClass(),this.setAttr("placeholder")},activate:function(){this.$input.is(":visible")&&(this.$input.focus(),a.fn.editableutils.setCursorPosition(this.$input.get(0),this.$input.val().length),this.toggleClear&&this.toggleClear())},renderClear:function(){this.options.clear&&(this.$clear=a('<span class="editable-clear-x"></span>'),this.$input.after(this.$clear).css("padding-right",24).keyup(a.proxy(function(b){if(!~a.inArray(b.keyCode,[40,38,9,13,27])){clearTimeout(this.t);var c=this;this.t=setTimeout(function(){c.toggleClear(b)},100)}},this)).parent().css("position","relative"),this.$clear.click(a.proxy(this.clear,this)))},postrender:function(){},toggleClear:function(){if(this.$clear){var a=this.$input.val().length,b=this.$clear.is(":visible");a&&!b&&this.$clear.show(),!a&&b&&this.$clear.hide()}},clear:function(){this.$clear.hide(),this.$input.val("").focus()}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="text">',placeholder:null,clear:!0}),a.fn.editabletypes.text=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("textarea",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass(),this.setAttr("placeholder"),this.setAttr("rows"),this.$input.keydown(function(b){b.ctrlKey&&13===b.which&&a(this).closest("form").submit()})},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:"<textarea></textarea>",inputclass:"input-large",placeholder:null,rows:7}),a.fn.editabletypes.textarea=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("select",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.list),a.extend(b.prototype,{renderList:function(){this.$input.empty();var b=function(c,d){var e;if(a.isArray(d))for(var f=0;f<d.length;f++)e={},d[f].children?(e.label=d[f].text,c.append(b(a("<optgroup>",e),d[f].children))):(e.value=d[f].value,d[f].disabled&&(e.disabled=!0),c.append(a("<option>",e).text(d[f].text)));return c};b(this.$input,this.sourceData),this.setClass(),this.$input.on("keydown.editable",function(b){13===b.which&&a(this).closest("form").submit()})},value2htmlFinal:function(b,c){var d="",e=a.fn.editableutils.itemsByValue(b,this.sourceData);e.length&&(d=e[0].text),a.fn.editabletypes.abstractinput.prototype.value2html.call(this,d,c)},autosubmit:function(){this.$input.off("keydown.editable").on("change.editable",function(){a(this).closest("form").submit()})}}),b.defaults=a.extend({},a.fn.editabletypes.list.defaults,{tpl:"<select></select>"}),a.fn.editabletypes.select=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("checklist",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.list),a.extend(b.prototype,{renderList:function(){var b;if(this.$tpl.empty(),a.isArray(this.sourceData)){for(var c=0;c<this.sourceData.length;c++)b=a("<label>").append(a("<input>",{type:"checkbox",value:this.sourceData[c].value})).append(a("<span>").text(" "+this.sourceData[c].text)),a("<div>").append(b).appendTo(this.$tpl);this.$input=this.$tpl.find('input[type="checkbox"]'),this.setClass()}},value2str:function(b){return a.isArray(b)?b.sort().join(a.trim(this.options.separator)):""},str2value:function(b){var c,d=null;return"string"==typeof b&&b.length?(c=new RegExp("\\s*"+a.trim(this.options.separator)+"\\s*"),d=b.split(c)):d=a.isArray(b)?b:[b],d},value2input:function(b){this.$input.prop("checked",!1),a.isArray(b)&&b.length&&this.$input.each(function(c,d){var e=a(d);a.each(b,function(a,b){e.val()==b&&e.prop("checked",!0)})})},input2value:function(){var b=[];return this.$input.filter(":checked").each(function(c,d){b.push(a(d).val())}),b},value2htmlFinal:function(b,c){var d=[],e=a.fn.editableutils.itemsByValue(b,this.sourceData),f=this.options.escape;e.length?(a.each(e,function(b,c){var e=f?a.fn.editableutils.escape(c.text):c.text;d.push(e)}),a(c).html(d.join("<br>"))):a(c).empty()},activate:function(){this.$input.first().focus()},autosubmit:function(){this.$input.on("keydown",function(b){13===b.which&&a(this).closest("form").submit()})}}),b.defaults=a.extend({},a.fn.editabletypes.list.defaults,{tpl:'<div class="editable-checklist"></div>',inputclass:null,separator:","}),a.fn.editabletypes.checklist=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("password",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),a.extend(b.prototype,{value2html:function(b,c){b?a(c).text("[hidden]"):a(c).empty()},html2value:function(){return null}}),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="password">'}),a.fn.editabletypes.password=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("email",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="email">'}),a.fn.editabletypes.email=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("url",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="url">'}),a.fn.editabletypes.url=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("tel",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="tel">'}),a.fn.editabletypes.tel=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("number",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),a.extend(b.prototype,{render:function(){b.superclass.render.call(this),this.setAttr("min"),this.setAttr("max"),this.setAttr("step")},postrender:function(){this.$clear&&this.$clear.css({right:24})}}),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="number">',inputclass:"input-mini",min:null,max:null,step:null}),a.fn.editabletypes.number=b}(window.jQuery),function(a){"use strict";
var b=function(a){this.init("range",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.number),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.filter("input"),this.setClass(),this.setAttr("min"),this.setAttr("max"),this.setAttr("step"),this.$input.on("input",function(){a(this).siblings("output").text(a(this).val())})},activate:function(){this.$input.focus()}}),b.defaults=a.extend({},a.fn.editabletypes.number.defaults,{tpl:'<input type="range"><output style="width: 30px; display: inline-block"></output>',inputclass:"input-medium"}),a.fn.editabletypes.range=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("time",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass()}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="time">'}),a.fn.editabletypes.time=b}(window.jQuery),function(a){"use strict";var b=function(c){if(this.init("select2",c,b.defaults),c.select2=c.select2||{},this.sourceData=null,c.placeholder&&(c.select2.placeholder=c.placeholder),!c.select2.tags&&c.source){var d=c.source;a.isFunction(c.source)&&(d=c.source.call(c.scope)),"string"==typeof d?(c.select2.ajax=c.select2.ajax||{},c.select2.ajax.data||(c.select2.ajax.data=function(a){return{query:a}}),c.select2.ajax.results||(c.select2.ajax.results=function(a){return{results:a}}),c.select2.ajax.url=d):(this.sourceData=this.convertSource(d),c.select2.data=this.sourceData)}if(this.options.select2=a.extend({},b.defaults.select2,c.select2),this.isMultiple=this.options.select2.tags||this.options.select2.multiple,this.isRemote="ajax"in this.options.select2,this.idFunc=this.options.select2.id,"function"!=typeof this.idFunc){var e=this.idFunc||"id";this.idFunc=function(a){return a[e]}}this.formatSelection=this.options.select2.formatSelection,"function"!=typeof this.formatSelection&&(this.formatSelection=function(a){return a.text})};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass(),this.isRemote&&this.$input.on("select2-loaded",a.proxy(function(a){this.sourceData=a.items.results},this)),this.isMultiple&&this.$input.on("change",function(){a(this).closest("form").parent().triggerHandler("resize")})},value2html:function(c,d){var e,f="",g=this;this.options.select2.tags?e=c:this.sourceData&&(e=a.fn.editableutils.itemsByValue(c,this.sourceData,this.idFunc)),a.isArray(e)?(f=[],a.each(e,function(a,b){f.push(b&&"object"==typeof b?g.formatSelection(b):b)})):e&&(f=g.formatSelection(e)),f=a.isArray(f)?f.join(this.options.viewseparator):f,b.superclass.value2html.call(this,f,d)},html2value:function(a){return this.options.select2.tags?this.str2value(a,this.options.viewseparator):null},value2input:function(b){if(a.isArray(b)&&(b=b.join(this.getSeparator())),this.$input.data("select2")?this.$input.val(b).trigger("change",!0):(this.$input.val(b),this.$input.select2(this.options.select2)),this.isRemote&&!this.isMultiple&&!this.options.select2.initSelection){var c=this.options.select2.id,d=this.options.select2.formatSelection;if(!c&&!d){var e=a(this.options.scope);if(!e.data("editable").isEmpty){var f={id:b,text:e.text()};this.$input.select2("data",f)}}}},input2value:function(){return this.$input.select2("val")},str2value:function(b,c){if("string"!=typeof b||!this.isMultiple)return b;c=c||this.getSeparator();var d,e,f;if(null===b||b.length<1)return null;for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d},autosubmit:function(){this.$input.on("change",function(b,c){c||a(this).closest("form").submit()})},getSeparator:function(){return this.options.select2.separator||a.fn.select2.defaults.separator},convertSource:function(b){if(a.isArray(b)&&b.length&&void 0!==b[0].value)for(var c=0;c<b.length;c++)void 0!==b[c].value&&(b[c].id=b[c].value,delete b[c].value);return b},destroy:function(){this.$input.data("select2")&&this.$input.select2("destroy")}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="hidden">',select2:null,placeholder:null,source:null,viewseparator:", "}),a.fn.editabletypes.select2=b}(window.jQuery),function(a){var b=function(b,c){return this.$element=a(b),this.$element.is("input")?(this.options=a.extend({},a.fn.combodate.defaults,c,this.$element.data()),this.init(),void 0):(a.error("Combodate should be applied to INPUT element"),void 0)};b.prototype={constructor:b,init:function(){this.map={day:["D","date"],month:["M","month"],year:["Y","year"],hour:["[Hh]","hours"],minute:["m","minutes"],second:["s","seconds"],ampm:["[Aa]",""]},this.$widget=a('<span class="combodate"></span>').html(this.getTemplate()),this.initCombos(),this.$widget.on("change","select",a.proxy(function(b){this.$element.val(this.getValue()).change(),this.options.smartDays&&(a(b.target).is(".month")||a(b.target).is(".year"))&&this.fillCombo("day")},this)),this.$widget.find("select").css("width","auto"),this.$element.hide().after(this.$widget),this.setValue(this.$element.val()||this.options.value)},getTemplate:function(){var b=this.options.template;return a.each(this.map,function(a,c){c=c[0];var d=new RegExp(c+"+"),e=c.length>1?c.substring(1,2):c;b=b.replace(d,"{"+e+"}")}),b=b.replace(/ /g,"&nbsp;"),a.each(this.map,function(a,c){c=c[0];var d=c.length>1?c.substring(1,2):c;b=b.replace("{"+d+"}",'<select class="'+a+'"></select>')}),b},initCombos:function(){for(var a in this.map){var b=this.$widget.find("."+a);this["$"+a]=b.length?b:null,this.fillCombo(a)}},fillCombo:function(a){var b=this["$"+a];if(b){var c="fill"+a.charAt(0).toUpperCase()+a.slice(1),d=this[c](),e=b.val();b.empty();for(var f=0;f<d.length;f++)b.append('<option value="'+d[f][0]+'">'+d[f][1]+"</option>");b.val(e)}},fillCommon:function(a){var b,c=[];if("name"===this.options.firstItem){b=moment.relativeTime||moment.langData()._relativeTime;var d="function"==typeof b[a]?b[a](1,!0,a,!1):b[a];d=d.split(" ").reverse()[0],c.push(["",d])}else"empty"===this.options.firstItem&&c.push(["",""]);return c},fillDay:function(){var a,b,c=this.fillCommon("d"),d=-1!==this.options.template.indexOf("DD"),e=31;if(this.options.smartDays&&this.$month&&this.$year){var f=parseInt(this.$month.val(),10),g=parseInt(this.$year.val(),10);isNaN(f)||isNaN(g)||(e=moment([g,f]).daysInMonth())}for(b=1;e>=b;b++)a=d?this.leadZero(b):b,c.push([b,a]);return c},fillMonth:function(){var a,b,c=this.fillCommon("M"),d=-1!==this.options.template.indexOf("MMMM"),e=-1!==this.options.template.indexOf("MMM"),f=-1!==this.options.template.indexOf("MM");for(b=0;11>=b;b++)a=d?moment().date(1).month(b).format("MMMM"):e?moment().date(1).month(b).format("MMM"):f?this.leadZero(b+1):b+1,c.push([b,a]);return c},fillYear:function(){var a,b,c=[],d=-1!==this.options.template.indexOf("YYYY");for(b=this.options.maxYear;b>=this.options.minYear;b--)a=d?b:(b+"").substring(2),c[this.options.yearDescending?"push":"unshift"]([b,a]);return c=this.fillCommon("y").concat(c)},fillHour:function(){var a,b,c=this.fillCommon("h"),d=-1!==this.options.template.indexOf("h"),e=(-1!==this.options.template.indexOf("H"),-1!==this.options.template.toLowerCase().indexOf("hh")),f=d?1:0,g=d?12:23;for(b=f;g>=b;b++)a=e?this.leadZero(b):b,c.push([b,a]);return c},fillMinute:function(){var a,b,c=this.fillCommon("m"),d=-1!==this.options.template.indexOf("mm");for(b=0;59>=b;b+=this.options.minuteStep)a=d?this.leadZero(b):b,c.push([b,a]);return c},fillSecond:function(){var a,b,c=this.fillCommon("s"),d=-1!==this.options.template.indexOf("ss");for(b=0;59>=b;b+=this.options.secondStep)a=d?this.leadZero(b):b,c.push([b,a]);return c},fillAmpm:function(){var a=-1!==this.options.template.indexOf("a"),b=(-1!==this.options.template.indexOf("A"),[["am",a?"am":"AM"],["pm",a?"pm":"PM"]]);return b},getValue:function(b){var c,d={},e=this,f=!1;return a.each(this.map,function(a){if("ampm"!==a){var b="day"===a?1:0;return d[a]=e["$"+a]?parseInt(e["$"+a].val(),10):b,isNaN(d[a])?(f=!0,!1):void 0}}),f?"":(this.$ampm&&(d.hour=12===d.hour?"am"===this.$ampm.val()?0:12:"am"===this.$ampm.val()?d.hour:d.hour+12),c=moment([d.year,d.month,d.day,d.hour,d.minute,d.second]),this.highlight(c),b=void 0===b?this.options.format:b,null===b?c.isValid()?c:null:c.isValid()?c.format(b):"")},setValue:function(b){function c(b,c){var d={};return b.children("option").each(function(b,e){var f,g=a(e).attr("value");""!==g&&(f=Math.abs(g-c),("undefined"==typeof d.distance||f<d.distance)&&(d={value:g,distance:f}))}),d.value}if(b){var d="string"==typeof b?moment(b,this.options.format):moment(b),e=this,f={};d.isValid()&&(a.each(this.map,function(a,b){"ampm"!==a&&(f[a]=d[b[1]]())}),this.$ampm&&(f.hour>=12?(f.ampm="pm",f.hour>12&&(f.hour-=12)):(f.ampm="am",0===f.hour&&(f.hour=12))),a.each(f,function(a,b){e["$"+a]&&("minute"===a&&e.options.minuteStep>1&&e.options.roundTime&&(b=c(e["$"+a],b)),"second"===a&&e.options.secondStep>1&&e.options.roundTime&&(b=c(e["$"+a],b)),e["$"+a].val(b))}),this.options.smartDays&&this.fillCombo("day"),this.$element.val(d.format(this.options.format)).change())}},highlight:function(a){a.isValid()?this.options.errorClass?this.$widget.removeClass(this.options.errorClass):this.$widget.find("select").css("border-color",this.borderColor):this.options.errorClass?this.$widget.addClass(this.options.errorClass):(this.borderColor||(this.borderColor=this.$widget.find("select").css("border-color")),this.$widget.find("select").css("border-color","red"))},leadZero:function(a){return 9>=a?"0"+a:a},destroy:function(){this.$widget.remove(),this.$element.removeData("combodate").show()}},a.fn.combodate=function(c){var d,e=Array.apply(null,arguments);return e.shift(),"getValue"===c&&this.length&&(d=this.eq(0).data("combodate"))?d.getValue.apply(d,e):this.each(function(){var d=a(this),f=d.data("combodate"),g="object"==typeof c&&c;f||d.data("combodate",f=new b(this,g)),"string"==typeof c&&"function"==typeof f[c]&&f[c].apply(f,e)})},a.fn.combodate.defaults={format:"DD-MM-YYYY HH:mm",template:"D / MMM / YYYY   H : mm",value:null,minYear:1970,maxYear:2015,yearDescending:!0,minuteStep:5,secondStep:1,firstItem:"empty",errorClass:null,roundTime:!0,smartDays:!1}}(window.jQuery),function(a){"use strict";var b=function(c){this.init("combodate",c,b.defaults),this.options.viewformat||(this.options.viewformat=this.options.format),c.combodate=a.fn.editableutils.tryParseJson(c.combodate,!0),this.options.combodate=a.extend({},b.defaults.combodate,c.combodate,{format:this.options.format,template:this.options.template})};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.$input.combodate(this.options.combodate),"bs3"===a.fn.editableform.engine&&this.$input.siblings().find("select").addClass("form-control"),this.options.inputclass&&this.$input.siblings().find("select").addClass(this.options.inputclass)},value2html:function(a,c){var d=a?a.format(this.options.viewformat):"";b.superclass.value2html.call(this,d,c)},html2value:function(a){return a?moment(a,this.options.viewformat):null},value2str:function(a){return a?a.format(this.options.format):""},str2value:function(a){return a?moment(a,this.options.format):null},value2submit:function(a){return this.value2str(a)},value2input:function(a){this.$input.combodate("setValue",a)},input2value:function(){return this.$input.combodate("getValue",null)},activate:function(){this.$input.siblings(".combodate").find("select").eq(0).focus()},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="text">',inputclass:null,format:"YYYY-MM-DD",viewformat:null,template:"D / MMM / YYYY",combodate:null}),a.fn.editabletypes.combodate=b}(window.jQuery),function(a){"use strict";var b=a.fn.editableform.Constructor.prototype.initInput;a.extend(a.fn.editableform.Constructor.prototype,{initTemplate:function(){this.$form=a(a.fn.editableform.template),this.$form.find(".control-group").addClass("form-group"),this.$form.find(".editable-error-block").addClass("help-block")},initInput:function(){b.apply(this);var c=null===this.input.options.inputclass||this.input.options.inputclass===!1,d="input-sm",e="text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs".split(",");~a.inArray(this.input.type,e)&&(this.input.$input.addClass("form-control"),c&&(this.input.options.inputclass=d,this.input.$input.addClass(d)));for(var f=this.$form.find(".editable-buttons"),g=c?[d]:this.input.options.inputclass.split(" "),h=0;h<g.length;h++)"input-lg"===g[h].toLowerCase()&&f.find("button").removeClass("btn-sm").addClass("btn-lg")}}),a.fn.editableform.buttons='<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="glyphicon glyphicon-ok"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="glyphicon glyphicon-remove"></i></button>',a.fn.editableform.errorGroupClass="has-error",a.fn.editableform.errorBlockClass=null,a.fn.editableform.engine="bs3"}(window.jQuery),function(a){"use strict";a.extend(a.fn.editableContainer.Popup.prototype,{containerName:"popover",containerDataName:"bs.popover",innerCss:".popover-content",defaults:a.fn.popover.Constructor.DEFAULTS,initContainer:function(){a.extend(this.containerOptions,{trigger:"manual",selector:!1,content:" ",template:this.defaults.template});var b;this.$element.data("template")&&(b=this.$element.data("template"),this.$element.removeData("template")),this.call(this.containerOptions),b&&this.$element.data("template",b)},innerShow:function(){this.call("show")},innerHide:function(){this.call("hide")},innerDestroy:function(){this.call("destroy")},setContainerOption:function(a,b){this.container().options[a]=b},setPosition:function(){!function(){var a=this.tip(),b="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,c=/\s?auto?\s?/i,d=c.test(b);d&&(b=b.replace(c,"")||"top");var e=this.getPosition(),f=a[0].offsetWidth,g=a[0].offsetHeight;if(d){var h=this.$element.parent(),i=b,j=document.documentElement.scrollTop||document.body.scrollTop,k="body"==this.options.container?window.innerWidth:h.outerWidth(),l="body"==this.options.container?window.innerHeight:h.outerHeight(),m="body"==this.options.container?0:h.offset().left;b="bottom"==b&&e.top+e.height+g-j>l?"top":"top"==b&&e.top-j-g<0?"bottom":"right"==b&&e.right+f>k?"left":"left"==b&&e.left-f<m?"right":b,a.removeClass(i).addClass(b)}var n=this.getCalculatedOffset(b,e,f,g);this.applyPlacement(n,b)}.call(this.container())}})}(window.jQuery),function(a){function b(){return new Date(Date.UTC.apply(Date,arguments))}function c(b,c){var d,e=a(b).data(),f={},g=new RegExp("^"+c.toLowerCase()+"([A-Z])"),c=new RegExp("^"+c.toLowerCase());for(var h in e)c.test(h)&&(d=h.replace(g,function(a,b){return b.toLowerCase()}),f[d]=e[h]);return f}function d(b){var c={};if(k[b]||(b=b.split("-")[0],k[b])){var d=k[b];return a.each(j,function(a,b){b in d&&(c[b]=d[b])}),c}}var e=function(b,c){this._process_options(c),this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(l.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this.o.startDate),this.setEndDate(this.o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};e.prototype={constructor:e,_process_options:function(b){this._o=a.extend({},this._o,b);var c=this.o=a.extend({},this._o),d=c.language;switch(k[d]||(d=d.split("-")[0],k[d]||(d=i.language)),c.language=d,c.startView){case 2:case"decade":c.startView=2;break;case 1:case"year":c.startView=1;break;default:c.startView=0}switch(c.minViewMode){case 1:case"months":c.minViewMode=1;break;case 2:case"years":c.minViewMode=2;break;default:c.minViewMode=0}c.startView=Math.max(c.startView,c.minViewMode),c.weekStart%=7,c.weekEnd=(c.weekStart+6)%7;var e=l.parseFormat(c.format);c.startDate!==-1/0&&(c.startDate=l.parseDate(c.startDate,e,c.language)),1/0!==c.endDate&&(c.endDate=l.parseDate(c.endDate,e,c.language)),c.daysOfWeekDisabled=c.daysOfWeekDisabled||[],a.isArray(c.daysOfWeekDisabled)||(c.daysOfWeekDisabled=c.daysOfWeekDisabled.split(/[,\s]*/)),c.daysOfWeekDisabled=a.map(c.daysOfWeekDisabled,function(a){return parseInt(a,10)})},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var b,c,d=0;d<a.length;d++)b=a[d][0],c=a[d][1],b.on(c)},_unapplyEvents:function(a){for(var b,c,d=0;d<a.length;d++)b=a[d][0],c=a[d][1],b.off(c)},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).size()||this.picker.is(a.target)||this.picker.find(a.target).size()||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.date,e=new Date(d.getTime()+6e4*d.getTimezoneOffset());this.element.trigger({type:b,date:e,format:a.proxy(function(a){var b=a||this.o.format;return l.formatDate(d,b,this.o.language)},this)})},show:function(a){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),this._attachSecondaryEvents(),a&&a.preventDefault(),this._trigger("show")},hide:function(){this.isInline||this.picker.is(":visible")&&(this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},getDate:function(){var a=this.getUTCDate();return new Date(a.getTime()+6e4*a.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(a){this.setUTCDate(new Date(a.getTime()-6e4*a.getTimezoneOffset()))},setUTCDate:function(a){this.date=a,this.setValue()},setValue:function(){var a=this.getFormattedDate();this.isInput?this.element.val(a):this.component&&this.element.find("input").val(a)},getFormattedDate:function(a){return void 0===a&&(a=this.o.format),l.formatDate(this.date,a,this.o.language)},setStartDate:function(a){this._process_options({startDate:a}),this.update(),this.updateNavArrows()},setEndDate:function(a){this._process_options({endDate:a}),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(a){this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var b=parseInt(this.element.parents().filter(function(){return"auto"!=a(this).css("z-index")}).first().css("z-index"))+10,c=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!0);this.picker.css({top:c.top+d,left:c.left,zIndex:b})}},_allow_update:!0,update:function(){if(this._allow_update){var a,b=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(a=arguments[0],b=!0):(a=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),delete this.element.data().date),this.date=l.parseDate(a,this.o.format,this.o.language),b&&this.setValue(),this.viewDate=this.date<this.o.startDate?new Date(this.o.startDate):this.date>this.o.endDate?new Date(this.o.endDate):new Date(this.date),this.fill()}},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){var c='<th class="cw">&nbsp;</th>';b+=c,this.picker.find(".datepicker-days thead tr:first-child").prepend(c)}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+k[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+k[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=this.date.valueOf(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()==d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()==d&&b.getUTCMonth()>e)&&c.push("new"),this.o.todayHighlight&&b.getUTCFullYear()==g.getFullYear()&&b.getUTCMonth()==g.getMonth()&&b.getUTCDate()==g.getDate()&&c.push("today"),f&&b.valueOf()==f&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!=a.inArray(b.valueOf(),this.range)&&c.push("selected")),c},fill:function(){var c,d=new Date(this.viewDate),e=d.getUTCFullYear(),f=d.getUTCMonth(),g=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,h=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,i=1/0!==this.o.endDate?this.o.endDate.getUTCFullYear():1/0,j=1/0!==this.o.endDate?this.o.endDate.getUTCMonth():1/0;this.date&&this.date.valueOf(),this.picker.find(".datepicker-days thead th.datepicker-switch").text(k[this.o.language].months[f]+" "+e),this.picker.find("tfoot th.today").text(k[this.o.language].today).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot th.clear").text(k[this.o.language].clear).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var m=b(e,f-1,28,0,0,0,0),n=l.getDaysInMonth(m.getUTCFullYear(),m.getUTCMonth());m.setUTCDate(n),m.setUTCDate(n-(m.getUTCDay()-this.o.weekStart+7)%7);var o=new Date(m);o.setUTCDate(o.getUTCDate()+42),o=o.valueOf();for(var p,q=[];m.valueOf()<o;){if(m.getUTCDay()==this.o.weekStart&&(q.push("<tr>"),this.o.calendarWeeks)){var r=new Date(+m+864e5*((this.o.weekStart-m.getUTCDay()-7)%7)),s=new Date(+r+864e5*((11-r.getUTCDay())%7)),t=new Date(+(t=b(s.getUTCFullYear(),0,1))+864e5*((11-t.getUTCDay())%7)),u=(s-t)/864e5/7+1;q.push('<td class="cw">'+u+"</td>")}p=this.getClassNames(m),p.push("day");var v=this.o.beforeShowDay(m);void 0===v?v={}:"boolean"==typeof v?v={enabled:v}:"string"==typeof v&&(v={classes:v}),v.enabled===!1&&p.push("disabled"),v.classes&&(p=p.concat(v.classes.split(/\s+/))),v.tooltip&&(c=v.tooltip),p=a.unique(p),q.push('<td class="'+p.join(" ")+'"'+(c?' title="'+c+'"':"")+">"+m.getUTCDate()+"</td>"),m.getUTCDay()==this.o.weekEnd&&q.push("</tr>"),m.setUTCDate(m.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(q.join(""));var w=this.date&&this.date.getUTCFullYear(),x=this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");w&&w==e&&x.eq(this.date.getUTCMonth()).addClass("active"),(g>e||e>i)&&x.addClass("disabled"),e==g&&x.slice(0,h).addClass("disabled"),e==i&&x.slice(j+1).addClass("disabled"),q="",e=10*parseInt(e/10,10);var y=this.picker.find(".datepicker-years").find("th:eq(1)").text(e+"-"+(e+9)).end().find("td");e-=1;for(var z=-1;11>z;z++)q+='<span class="year'+(-1==z?" old":10==z?" new":"")+(w==e?" active":"")+(g>e||e>i?" disabled":"")+'">'+e+"</span>",e+=1;y.html(q)},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(c){c.preventDefault();var d=a(c.target).closest("span, td, th");if(1==d.length)switch(d[0].nodeName.toLowerCase()){case"th":switch(d[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var e=l.modes[this.viewMode].navStep*("prev"==d[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,e);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,e)}this.fill();break;case"today":var f=new Date;f=b(f.getFullYear(),f.getMonth(),f.getDate(),0,0,0),this.showMode(-2);var g="linked"==this.o.todayBtn?null:"view";this._setDate(f,g);break;case"clear":var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.val("").change(),this._trigger("changeDate"),this.update(),this.o.autoclose&&this.hide()}break;case"span":if(!d.is(".disabled")){if(this.viewDate.setUTCDate(1),d.is(".month")){var i=1,j=d.parent().find("span").index(d),k=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(j),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(b(k,j,i,0,0,0,0))}else{var k=parseInt(d.text(),10)||0,i=1,j=0;this.viewDate.setUTCFullYear(k),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(b(k,j,i,0,0,0,0))}this.showMode(-1),this.fill()}break;case"td":if(d.is(".day")&&!d.is(".disabled")){var i=parseInt(d.text(),10)||1,k=this.viewDate.getUTCFullYear(),j=this.viewDate.getUTCMonth();d.is(".old")?0===j?(j=11,k-=1):j-=1:d.is(".new")&&(11==j?(j=0,k+=1):j+=1),this._setDate(b(k,j,i,0,0,0,0))}}},_setDate:function(a,b){b&&"date"!=b||(this.date=new Date(a)),b&&"view"!=b||(this.viewDate=new Date(a)),this.fill(),this.setValue(),this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&(c.change(),!this.o.autoclose||b&&"date"!=b||this.hide())},moveMonth:function(a,b){if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),g=e.getUTCMonth(),h=Math.abs(b);if(b=b>0?1:-1,1==h)d=-1==b?function(){return e.getUTCMonth()==g}:function(){return e.getUTCMonth()!=c},c=g+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var i=0;h>i;i++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!=e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(this.picker.is(":not(:visible)"))return 27==a.keyCode&&this.show(),void 0;var b,c,d,e=!1;switch(a.keyCode){case 27:this.hide(),a.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37==a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.date,b),d=this.moveYear(this.viewDate,b)):a.shiftKey?(c=this.moveMonth(this.date,b),d=this.moveMonth(this.viewDate,b)):(c=new Date(this.date),c.setUTCDate(this.date.getUTCDate()+b),d=new Date(this.viewDate),d.setUTCDate(this.viewDate.getUTCDate()+b)),this.dateWithinRange(c)&&(this.date=c,this.viewDate=d,this.setValue(),this.update(),a.preventDefault(),e=!0);break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38==a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.date,b),d=this.moveYear(this.viewDate,b)):a.shiftKey?(c=this.moveMonth(this.date,b),d=this.moveMonth(this.viewDate,b)):(c=new Date(this.date),c.setUTCDate(this.date.getUTCDate()+7*b),d=new Date(this.viewDate),d.setUTCDate(this.viewDate.getUTCDate()+7*b)),this.dateWithinRange(c)&&(this.date=c,this.viewDate=d,this.setValue(),this.update(),a.preventDefault(),e=!0);break;case 13:this.hide(),a.preventDefault();break;case 9:this.hide()}if(e){this._trigger("changeDate");var f;this.isInput?f=this.element:this.component&&(f=this.element.find("input")),f&&f.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),this.picker.find(">div").hide().filter(".datepicker-"+l.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var f=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,a(this.inputs).datepicker(c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};f.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.date}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=this.inputs.length;if(-1!=e){if(d<this.dates[e])for(;e>=0&&d<this.dates[e];)this.pickers[e--].setUTCDate(d);else if(d>this.dates[e])for(;f>e&&d>this.dates[e];)this.pickers[e++].setUTCDate(d);this.updateDates()}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var g=a.fn.datepicker,h=a.fn.datepicker=function(b){var g=Array.apply(null,arguments);g.shift();var h;return this.each(function(){var j=a(this),k=j.data("datepicker"),l="object"==typeof b&&b;if(!k){var m=c(this,"date"),n=a.extend({},i,m,l),o=d(n.language),p=a.extend({},i,o,m,l);if(j.is(".input-daterange")||p.inputs){var q={inputs:p.inputs||j.find("input").toArray()};j.data("datepicker",k=new f(this,a.extend(p,q)))}else j.data("datepicker",k=new e(this,p))}return"string"==typeof b&&"function"==typeof k[b]&&(h=k[b].apply(k,g),void 0!==h)?!1:void 0}),void 0!==h?h:this},i=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},j=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=e;var k=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},l={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return 0===a%4&&0!==a%100||0===a%400
},getDaysInMonth:function(a,b){return[31,l.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,d,f){if(c instanceof Date)return c;if("string"==typeof d&&(d=l.parseFormat(d)),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(c)){var g,h,i=/([\-+]\d+)([dmwy])/,j=c.match(/([\-+]\d+)([dmwy])/g);c=new Date;for(var m=0;m<j.length;m++)switch(g=i.exec(j[m]),h=parseInt(g[1]),g[2]){case"d":c.setUTCDate(c.getUTCDate()+h);break;case"m":c=e.prototype.moveMonth.call(e.prototype,c,h);break;case"w":c.setUTCDate(c.getUTCDate()+7*h);break;case"y":c=e.prototype.moveYear.call(e.prototype,c,h)}return b(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),0,0,0)}var n,o,g,j=c&&c.match(this.nonpunctuation)||[],c=new Date,p={},q=["yyyy","yy","M","MM","m","mm","d","dd"],r={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!=b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};r.M=r.MM=r.mm=r.m,r.dd=r.d,c=b(c.getFullYear(),c.getMonth(),c.getDate(),0,0,0);var s=d.parts.slice();if(j.length!=s.length&&(s=a(s).filter(function(b,c){return-1!==a.inArray(c,q)}).toArray()),j.length==s.length){for(var m=0,t=s.length;t>m;m++){if(n=parseInt(j[m],10),g=s[m],isNaN(n))switch(g){case"MM":o=a(k[f].months).filter(function(){var a=this.slice(0,j[m].length),b=j[m].slice(0,a.length);return a==b}),n=a.inArray(o[0],k[f].months)+1;break;case"M":o=a(k[f].monthsShort).filter(function(){var a=this.slice(0,j[m].length),b=j[m].slice(0,a.length);return a==b}),n=a.inArray(o[0],k[f].monthsShort)+1}p[g]=n}for(var u,m=0;m<q.length;m++)u=q[m],u in p&&!isNaN(p[u])&&r[u](c,p[u])}return c},formatDate:function(b,c,d){"string"==typeof c&&(c=l.parseFormat(c));var e={d:b.getUTCDate(),D:k[d].daysShort[b.getUTCDay()],DD:k[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:k[d].monthsShort[b.getUTCMonth()],MM:k[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m;for(var b=[],f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};l.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+l.headTemplate+"<tbody></tbody>"+l.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+l.headTemplate+l.contTemplate+l.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+l.headTemplate+l.contTemplate+l.footTemplate+"</table>"+"</div>"+"</div>",a.fn.datepicker.DPGlobal=l,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=g,this},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),h.call(c,"show"))}),a(function(){h.call(a('[data-provide="datepicker-inline"]'))})}(window.jQuery),function(a){"use strict";a.fn.bdatepicker=a.fn.datepicker.noConflict(),a.fn.datepicker||(a.fn.datepicker=a.fn.bdatepicker);var b=function(a){this.init("date",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{initPicker:function(b,c){this.options.viewformat||(this.options.viewformat=this.options.format),b.datepicker=a.fn.editableutils.tryParseJson(b.datepicker,!0),this.options.datepicker=a.extend({},c.datepicker,b.datepicker,{format:this.options.viewformat}),this.options.datepicker.language=this.options.datepicker.language||"en",this.dpg=a.fn.bdatepicker.DPGlobal,this.parsedFormat=this.dpg.parseFormat(this.options.format),this.parsedViewFormat=this.dpg.parseFormat(this.options.viewformat)},render:function(){this.$input.bdatepicker(this.options.datepicker),this.options.clear&&(this.$clear=a('<a href="#"></a>').html(this.options.clear).click(a.proxy(function(a){a.preventDefault(),a.stopPropagation(),this.clear()},this)),this.$tpl.parent().append(a('<div class="editable-clear">').append(this.$clear)))},value2html:function(a,c){var d=a?this.dpg.formatDate(a,this.parsedViewFormat,this.options.datepicker.language):"";b.superclass.value2html.call(this,d,c)},html2value:function(a){return this.parseDate(a,this.parsedViewFormat)},value2str:function(a){return a?this.dpg.formatDate(a,this.parsedFormat,this.options.datepicker.language):""},str2value:function(a){return this.parseDate(a,this.parsedFormat)},value2submit:function(a){return this.value2str(a)},value2input:function(a){this.$input.bdatepicker("update",a)},input2value:function(){return this.$input.data("datepicker").date},activate:function(){},clear:function(){this.$input.data("datepicker").date=null,this.$input.find(".active").removeClass("active"),this.options.showbuttons||this.$input.closest("form").submit()},autosubmit:function(){this.$input.on("mouseup",".day",function(b){if(!a(b.currentTarget).is(".old")&&!a(b.currentTarget).is(".new")){var c=a(this).closest("form");setTimeout(function(){c.submit()},200)}})},parseDate:function(a,b){var c,d=null;return a&&(d=this.dpg.parseDate(a,b,this.options.datepicker.language),"string"==typeof a&&(c=this.dpg.formatDate(d,b,this.options.datepicker.language),a!==c&&(d=null))),d}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<div class="editable-date well"></div>',inputclass:null,format:"yyyy-mm-dd",viewformat:null,datepicker:{weekStart:0,startView:0,minViewMode:0,autoclose:!1},clear:"&times; clear"}),a.fn.editabletypes.date=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("datefield",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.date),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.find("input"),this.setClass(),this.setAttr("placeholder"),this.$tpl.bdatepicker(this.options.datepicker),this.$input.off("focus keydown"),this.$input.keyup(a.proxy(function(){this.$tpl.removeData("date"),this.$tpl.bdatepicker("update")},this))},value2input:function(a){this.$input.val(a?this.dpg.formatDate(a,this.parsedViewFormat,this.options.datepicker.language):""),this.$tpl.bdatepicker("update")},input2value:function(){return this.html2value(this.$input.val())},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.date.defaults,{tpl:'<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',inputclass:"input-small",datepicker:{weekStart:0,startView:0,minViewMode:0,autoclose:!0}}),a.fn.editabletypes.datefield=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("datetime",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{initPicker:function(b,c){this.options.viewformat||(this.options.viewformat=this.options.format),b.datetimepicker=a.fn.editableutils.tryParseJson(b.datetimepicker,!0),this.options.datetimepicker=a.extend({},c.datetimepicker,b.datetimepicker,{format:this.options.viewformat}),this.options.datetimepicker.language=this.options.datetimepicker.language||"en",this.dpg=a.fn.datetimepicker.DPGlobal,this.parsedFormat=this.dpg.parseFormat(this.options.format,this.options.formatType),this.parsedViewFormat=this.dpg.parseFormat(this.options.viewformat,this.options.formatType)},render:function(){this.$input.datetimepicker(this.options.datetimepicker),this.$input.on("changeMode",function(){var b=a(this).closest("form").parent();setTimeout(function(){b.triggerHandler("resize")},0)}),this.options.clear&&(this.$clear=a('<a href="#"></a>').html(this.options.clear).click(a.proxy(function(a){a.preventDefault(),a.stopPropagation(),this.clear()},this)),this.$tpl.parent().append(a('<div class="editable-clear">').append(this.$clear)))},value2html:function(a,c){var d=a?this.dpg.formatDate(this.toUTC(a),this.parsedViewFormat,this.options.datetimepicker.language,this.options.formatType):"";return c?(b.superclass.value2html.call(this,d,c),void 0):d},html2value:function(a){var b=this.parseDate(a,this.parsedViewFormat);return b?this.fromUTC(b):null},value2str:function(a){return a?this.dpg.formatDate(this.toUTC(a),this.parsedFormat,this.options.datetimepicker.language,this.options.formatType):""},str2value:function(a){var b=this.parseDate(a,this.parsedFormat);return b?this.fromUTC(b):null},value2submit:function(a){return this.value2str(a)},value2input:function(a){a&&this.$input.data("datetimepicker").setDate(a)},input2value:function(){var a=this.$input.data("datetimepicker");return a.date?a.getDate():null},activate:function(){},clear:function(){this.$input.data("datetimepicker").date=null,this.$input.find(".active").removeClass("active"),this.options.showbuttons||this.$input.closest("form").submit()},autosubmit:function(){this.$input.on("mouseup",".minute",function(){var b=a(this).closest("form");setTimeout(function(){b.submit()},200)})},toUTC:function(a){return a?new Date(a.valueOf()-6e4*a.getTimezoneOffset()):a},fromUTC:function(a){return a?new Date(a.valueOf()+6e4*a.getTimezoneOffset()):a},parseDate:function(a,b){var c,d=null;return a&&(d=this.dpg.parseDate(a,b,this.options.datetimepicker.language,this.options.formatType),"string"==typeof a&&(c=this.dpg.formatDate(d,b,this.options.datetimepicker.language,this.options.formatType),a!==c&&(d=null))),d}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<div class="editable-date well"></div>',inputclass:null,format:"yyyy-mm-dd hh:ii",formatType:"standard",viewformat:null,datetimepicker:{todayHighlight:!1,autoclose:!1},clear:"&times; clear"}),a.fn.editabletypes.datetime=b}(window.jQuery),function(a){"use strict";var b=function(a){this.init("datetimefield",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.datetime),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.find("input"),this.setClass(),this.setAttr("placeholder"),this.$tpl.datetimepicker(this.options.datetimepicker),this.$input.off("focus keydown"),this.$input.keyup(a.proxy(function(){this.$tpl.removeData("date"),this.$tpl.datetimepicker("update")},this))},value2input:function(a){this.$input.val(this.value2html(a)),this.$tpl.datetimepicker("update")},input2value:function(){return this.html2value(this.$input.val())},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.datetime.defaults,{tpl:'<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',inputclass:"input-medium",datetimepicker:{todayHighlight:!1,autoclose:!0}}),a.fn.editabletypes.datetimefield=b}(window.jQuery);
/*
Copyright 2014 Igor Vaynberg

Version: 3.5.4 Timestamp: Sun Aug 30 13:30:32 EDT 2015

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function o(a){function b(a){return m[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function p(a,b){for(var c=0,d=b.length;d>c;c+=1)if(r(a,b[c]))return c;return-1}function q(){var b=a(l);b.appendTo(document.body);var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function r(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function s(a,b,c){var d,e,f;if(null===a||a.length<1)return[];for(d=a.split(b),e=0,f=d.length;f>e;e+=1)d[e]=c(d[e]);return d}function t(a){return a.outerWidth(!1)-a.width()}function u(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function v(c){c.on("mousemove",function(c){var d=h;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function w(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function x(a,b){var c=w(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){p(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus();var e=b.offsetWidth>0||b.offsetHeight>0;e&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!g){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);g=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),g.attr("class","select2-sizer"),a(document.body).append(g)}return g.text(b.val()),g.width()}function D(b,c,d){var e,g,f=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(g))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=o(a.toUpperCase()).indexOf(o(b.toUpperCase())),f=b.length;return 0>e?void c.push(d(a)):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),void c.push(d(a.substring(e+f,a.length))))}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page,i);i.callback(b)},error:function(a,b,c){var d={hasError:!0,jqXHR:a,textStatus:b,errorThrown:c};i.callback(d)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?void b.callback(c()):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),void b.callback(e))}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function K(b,c){if(a.isFunction(b)){var d=Array.prototype.slice.call(arguments,2);return b.apply(c,d)}return b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(r(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(){var b=this;a.each(arguments,function(a,c){b[c].remove(),b[c]=null})}function O(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,i,j,h={x:0,y:0},k={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case k.LEFT:case k.RIGHT:case k.UP:case k.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case k.SHIFT:case k.CTRL:case k.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038a":"\u0399","\u03aa":"\u0399","\u038c":"\u039f","\u038e":"\u03a5","\u03ab":"\u03a5","\u038f":"\u03a9","\u03ac":"\u03b1","\u03ad":"\u03b5","\u03ae":"\u03b7","\u03af":"\u03b9","\u03ca":"\u03b9","\u0390":"\u03b9","\u03cc":"\u03bf","\u03cd":"\u03c5","\u03cb":"\u03c5","\u03b0":"\u03c5","\u03c9":"\u03c9","\u03c2":"\u03c3"};i=a(document),f=function(){var a=1;return function(){return a++}}(),c=O(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,g=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+f()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a(document.body),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss,this.opts.element)),this.container.addClass(K(c.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(g),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",g,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",g,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",g,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",g,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(a){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),x(80,this.results),this.dropdown.on("scroll-debounced",g,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",g,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.lastSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),j=j||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2"),d=this;this.close(),a.length&&a[0].detachEvent&&d._sync&&a.each(function(){d._sync&&this.detachEvent("onpropertychange",d._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.removeData("select2").off(".select2"),a.is("input[type='hidden']")?a.css("display",""):(a.show().prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show())),N.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:r(a.attr("locked"),"locked")||r(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,g,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c.debug=c.debug||a.fn.select2.defaults.debug,c.debug&&console&&console.warn&&(null!=c.id&&console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=c.text&&console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=c.sortResults&&console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),null!=c.selectOnBlur&&console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),null!=c.ajax&&null!=c.ajax.results&&console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),null!=c.formatNoResults&&console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),null!=c.formatSearching&&console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),null!=c.formatInputTooShort&&console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),null!=c.formatInputTooLong&&console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),null!=c.formatLoading&&console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),null!=c.formatSelectionTooBig&&console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),c.element.data("select2Tags")&&console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),null!=c.element.data("tags")){var j=c.element.data("tags");a.isArray(j)||(j=[]),c.element.data("select2Tags",j)}if(null!=c.sorter&&(c.sortResults=c.sorter),null!=c.selectOnClose&&(c.selectOnBlur=c.selectOnClose),null!=c.ajax&&a.isFunction(c.ajax.processResults)&&(c.ajax.results=c.ajax.processResults),null!=c.language){var k=c.language;a.isFunction(k.noMatches)&&(c.formatNoMatches=k.noMatches),a.isFunction(k.searching)&&(c.formatSearching=k.searching),a.isFunction(k.inputTooShort)&&(c.formatInputTooShort=k.inputTooShort),a.isFunction(k.inputTooLong)&&(c.formatInputTooLong=k.inputTooLong),a.isFunction(k.loadingMore)&&(c.formatLoading=k.loadingMore),a.isFunction(k.maximumSelected)&&(c.formatSelectionTooBig=k.maximumSelected)}if(c=a.extend({},{populateResults:function(d,e,g){var h,j=this.opts.id,k=this.liveRegion;(h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;d=c.sortResults(d,e,g);var w=[];for(m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+f()),t.attr("role","option"),v=c.formatResult(o,t,g,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),w.push(s[0]);e.append(w),k.text(c.formatMatches(d.length))})(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(g=c.id,c.id=function(a){return a[g]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,h,c={results:[],more:!1},e=a.term;h=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(i.optionToData(b)):b.is("optgroup")&&(d=i.optionToData(b),b.children().each2(function(a,b){h(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){h(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(s(b.val(),c.separator,c.transformVal)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return r(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var d,c=this.opts.element,e=this;c.on("change.select2",this.bind(function(a){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),this._sync=this.bind(function(){var a=c.prop("disabled");a===b&&(a=!1),this.enable(!a);var d=c.prop("readonly");d===b&&(d=!1),this.readonly(d),this.container&&(D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass,this.opts.element)))}),c.length&&c[0].attachEvent&&c.each(function(){this.attachEvent("onpropertychange",e._sync)}),d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(b){a.each(b,e._sync)}),this.propertyObserver.observe(c.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b,choice:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return this.container?this.container.hasClass("select2-dropdown-open"):!1},positionDropdown:function(){var v,w,x,y,z,b=this.dropdown,c=this.container,d=c.offset(),e=c.outerHeight(!1),f=c.outerWidth(!1),g=b.outerHeight(!1),h=a(window),i=h.width(),k=h.height(),l=h.scrollLeft()+i,m=h.scrollTop()+k,n=d.top+e,o=d.left,p=m>=n+g,q=d.top-g>=h.scrollTop(),r=b.outerWidth(!1),s=function(){return l>=o+r},t=function(){return d.left+l+c.outerWidth(!1)>r},u=b.hasClass("select2-drop-above");u?(w=!0,!q&&p&&(x=!0,w=!1)):(w=!1,!p&&q&&(x=!0,w=!0)),x&&(b.hide(),d=this.container.offset(),e=this.container.outerHeight(!1),f=this.container.outerWidth(!1),g=b.outerHeight(!1),l=h.scrollLeft()+i,m=h.scrollTop()+k,n=d.top+e,o=d.left,r=b.outerWidth(!1),b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(z=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),r=b.outerWidth(!1)+(z.scrollHeight===z.clientHeight?0:j.width),r>f?f=r:r=f,g=b.outerHeight(!1)):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(v=this.body.offset(),n-=v.top,o-=v.left),!s()&&t()&&(o=d.left+this.container.outerWidth(!1)-r),y={left:o,width:f},w?(this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above"),g=b.outerHeight(!1),y.top=d.top-g,y.bottom="auto"):(y.top=n,y.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),y=a.extend(y,K(this.opts.dropdownCss,this.opts.element)),b.css(y)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),
this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),i.on("mousemove.select2Event",function(a){h.x=a.pageX,h.y=a.pageY}),!0):!1},opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0===f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",function(b){n(f);var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close(),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(a){g.opened()&&g.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),i.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.search.removeAttr("aria-activedescendant"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},prefillNextSearchTerm:function(){if(""!==this.search.val())return!1;var a=this.opts.nextSearchTerm(this.data(),this.lastSearchTerm);return a!==b?(this.search.val(a),this.search.select(),!0):!1},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,j,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return void b.scrollTop(0);c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),j=(e.offset()||{}).top||0,f=j+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!1),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=j-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?p(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",d.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(d.text()),e=d.data("select2-data"),void(e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e})))},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).html(e.opts.escapeMarkup(K(e.opts.formatLoadMore,e.opts.element,d+1))),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown(),e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?h.liveRegion.text(e.text()):h.liveRegion.text(h.opts.formatMatches(e.find('.select2-result-selectable:not(".select2-selected")').length))}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return void n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,f.element,o)+"</li>");if(d.val().length<f.minimumInputLength)return n(J(f.formatInputTooShort,"formatInputTooShort")?"<li class='select2-no-results'>"+K(f.formatInputTooShort,f.element,d.val(),f.minimumInputLength)+"</li>":""),void(c&&this.showSearch&&this.showSearch(!0));if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return void n(J(f.formatInputTooLong,"formatInputTooLong")?"<li class='select2-no-results'>"+K(f.formatInputTooLong,f.element,d.val(),f.maximumInputLength)+"</li>":"");f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching,f.element)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return void this.search.removeClass("select2-active");if(g.hasError!==b&&J(f.formatAjaxError,"formatAjaxError"))return void n("<li class='select2-ajax-error'>"+K(f.formatAjaxError,f.element,g.jqXHR,g.textStatus,g.errorThrown)+"</li>");if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return r(h.id(this),h.id(i))}).length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,f.element,d.val())+"</li>"),void(this.showSearch&&this.showSearch(d.val()));e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+f.escapeMarkup(K(f.formatLoadMore,f.element,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){if(this._touchMoved)return void this.clearTouchMoved();var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function b(){var b,c,d,e,f,g;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(b=this.opts.element.attr("style"),"string"==typeof b)for(c=b.split(";"),e=0,f=c.length;f>e;e+=1)if(g=c[e].replace(/\s/g,""),d=g.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==d&&d.length>=1)return d[1];return"resolve"===this.opts.width?(b=this.opts.element.css("width"),b.indexOf("%")>0?b:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var c=b.call(this);null!==c&&this.container.css("width",c)}}),d=O(c,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var b,c,d;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),b=this.search.get(0),b.createTextRange?(c=b.createTextRange(),c.collapse(!1),c.select()):b.setSelectionRange&&(d=this.search.val().length,b.setSelectionRange(d,d))),this.prefillNextSearchTerm(),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,g,c=this.container,d=this.dropdown,e=f();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=c.find(".select2-choice"),this.focusser=c.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+e),this.focusser.attr("aria-labelledby","select2-chosen-"+e),this.results.attr("id","select2-results-"+e),this.search.attr("aria-owns","select2-results-"+e),this.focusser.attr("id","s2id_autogen"+e),g=a("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.focusser.prev().text(g.text()).attr("for",this.focusser.attr("id"));var h=this.opts.element.attr("title");this.opts.element.attr("title",h||g.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&229!=a.keyCode){if(a.which===k.PAGE_UP||a.which===k.PAGE_DOWN)return void A(a);switch(a.which){case k.UP:case k.DOWN:return this.moveHighlight(a.which===k.UP?-1:1),void A(a);case k.ENTER:return this.selectHighlighted(),void A(a);case k.TAB:return void this.selectHighlighted({noFocus:!0});case k.ESC:return this.cancel(a),void A(a)}}})),this.search.on("blur",this.bind(function(a){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.results&&this.results.length>1&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==k.TAB&&!k.isControl(a)&&!k.isFunctionKey(a)&&a.which!==k.ESC){if(this.opts.openOnEnter===!1&&a.which===k.ENTER)return void A(a);if(a.which==k.DOWN||a.which==k.UP||a.which==k.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),void A(a)}return a.which==k.DELETE||a.which==k.BACKSPACE?(this.opts.allowClear&&this.clear(),void A(a)):void 0}})),u(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection&&this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(c){n(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(c)})),d.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder(),c.lastSearchTerm=c.search.val())})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=r(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return r(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.lastSearchTerm=this.search.val(),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),r(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1],this.opts.debug&&console&&console.warn&&console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),this.select)this.opts.debug&&console&&console.warn&&console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return void this.clear(c);if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(this.opts.debug&&console&&console.warn&&console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'),arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),e=O(c,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=s(c.val(),b.separator,b.transformVal),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return r(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(r(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"searchContainer","selection")},initContainer:function(){var c,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=c=this.container.find(b);var d=this;this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(b){d.search[0].focus(),d.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+f()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=c.find(".select2-search-choice-focus"),d=b.prev(".select2-search-choice:not(.select2-locked)"),e=b.next(".select2-search-choice:not(.select2-locked)"),f=z(this.search);if(b.length&&(a.which==k.LEFT||a.which==k.RIGHT||a.which==k.BACKSPACE||a.which==k.DELETE||a.which==k.ENTER)){var g=b;return a.which==k.LEFT&&d.length?g=d:a.which==k.RIGHT?g=e.length?e:null:a.which===k.BACKSPACE?this.unselect(b.first())&&(this.search.width(10),g=d.length?d:e):a.which==k.DELETE?this.unselect(b.first())&&(this.search.width(10),g=e.length?e:null):a.which==k.ENTER&&(g=null),this.selectChoice(g),A(a),void(g&&g.length||this.open())}if((a.which===k.BACKSPACE&&1==this.keydowns||a.which==k.LEFT)&&0==f.offset&&!f.length)return this.selectChoice(c.find(".select2-search-choice:not(.select2-locked)").last()),void A(a);if(this.selectChoice(null),this.opened())switch(a.which){case k.UP:case k.DOWN:return this.moveHighlight(a.which===k.UP?-1:1),void A(a);case k.ENTER:return this.selectHighlighted(),void A(a);case k.TAB:return this.selectHighlighted({noFocus:!0}),void this.close();case k.ESC:return this.cancel(a),void A(a)}if(a.which!==k.TAB&&!k.isControl(a)&&!k.isFunctionKey(a)&&a.which!==k.BACKSPACE&&a.which!==k.ESC){if(a.which===k.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===k.PAGE_UP||a.which===k.PAGE_DOWN)&&A(a),a.which===k.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(a){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.prefillNextSearchTerm(),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c={},d=[],e=this;a(b).each(function(){e.id(this)in c||(c[e.id(this)]=0,d.push(this))}),this.selection.find(".select2-search-choice").remove(),this.addSelectedChoice(d),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,b){this.triggerSelect(a)&&""!==a.text&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.lastSearchTerm=this.search.val(),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.prefillNextSearchTerm()&&this.updateResults(),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),b&&b.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(b){var c=this.getVal(),d=this;a(b).each(function(){c.push(d.createChoice(this))}),this.setVal(c)},createChoice:function(c){var i,j,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c);return i=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),i!=b&&g.find("div").replaceWith(a("<div></div>").html(i)),j=this.opts.formatSelectionCssClass(c,g.find("div")),j!=b&&g.addClass(j),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),A(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),h},unselect:function(b){var d,e,c=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(d=b.data("select2-data")){var f=a.Event("select2-removing");if(f.val=this.id(d),f.choice=d,this.opts.element.trigger(f),f.isDefaultPrevented())return!1;for(;(e=p(this.id(d),c))>=0;)c.splice(e,1),this.setVal(c),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(d),choice:d}),this.triggerChange({removed:d}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));p(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&this.opts.closeOnSelect===!0&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.opts.element,g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-t(this.search)},resizeSearch:function(){var a,b,c,d,e,f=t(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),s(a,this.opts.separator,this.opts.transformVal))},setVal:function(b){if(this.select)this.select.val(b);else{var c=[],d={};a(b).each(function(){this in d||(c.push(this),d[this]=0)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator))}},buildChangeDetails:function(a,b){
for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)if(r(this.opts.id(b[c]),this.opts.id(a[d]))){b.splice(c,1),c--,a.splice(d,1);break}return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),void(d&&this.triggerChange({added:this.data(),removed:e}));if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,e,f,g,h,c=Array.prototype.slice.call(arguments,0),i=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],j=["opened","isFocused","container","dropdown"],k=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?h=d.element.prop("multiple"):(h=d.multiple||!1,"tags"in d&&(d.multiple=h=!0)),e=h?new window.Select2["class"].multi:new window.Select2["class"].single,e.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(p(c[0],i)<0)throw"Unknown method: "+c[0];if(g=b,e=a(this).data("select2"),e===b)return;if(f=c[0],"container"===f?g=e.container:"dropdown"===f?g=e.dropdown:(l[f]&&(f=l[f]),g=e[f].apply(e,c.slice(1))),p(c[0],j)>=0||p(c[0],k)>=0&&1==c.length)return!1}}),g===b?this:g},a.fn.select2.defaults={debug:!1,width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(this.text(a),c.term,e,d),e.join("")},transformVal:function(b){return a.trim(b)},formatSelection:function(a,c,d){return a?d(this.text(a)):b},sortResults:function(a,b,c){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(a,c){return b},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},text:function(b){return b&&this.data&&this.data.text?a.isFunction(this.data.text)?this.data.text(b):b[this.data.text]:b.text},matcher:function(a,b){return o(""+b).toUpperCase().indexOf(o(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(a){return null},nextSearchTerm:function(a,c){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b&&a.opts.minimumResultsForSearch<0?!1:!0}},a.fn.select2.locales=[],a.fn.select2.locales.en={formatMatches:function(a){return 1===a?"One result is available, press enter to select it.":a+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(a,b,c){return"Loading failed"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(a){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.en),a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":c,single:d,multi:e}}}}(jQuery);
/**
Typeahead.js input, based on [Twitter Typeahead](http://twitter.github.io/typeahead.js).   
It is mainly replacement of typeahead in Bootstrap 3.


@class typeaheadjs
@extends text
@since 1.5.0
@final
@example
<a href="#" id="country" data-type="typeaheadjs" data-pk="1" data-url="/post" data-title="Input country"></a>
<script>
$(function(){
    $('#country').editable({
        value: 'ru',
        typeahead: {
            name: 'country',
            local: [
                {value: 'ru', tokens: ['Russia']}, 
                {value: 'gb', tokens: ['Great Britain']}, 
                {value: 'us', tokens: ['United States']}
            ],
            template: function(item) {
                return item.tokens[0] + ' (' + item.value + ')'; 
            } 
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Constructor = function (options) {
        this.init('typeaheadjs', options, Constructor.defaults);
    };

    $.fn.editableutils.inherit(Constructor, $.fn.editabletypes.text);

    $.extend(Constructor.prototype, {
        render: function() {
            this.renderClear();
            this.setClass();
            this.setAttr('placeholder');
            this.$input.typeahead(this.options.typeahead);
            
            // copy `input-sm | input-lg` classes to placeholder input
            if($.fn.editableform.engine === 'bs3') {
                if(this.$input.hasClass('input-sm')) {
                    this.$input.siblings('input.tt-hint').addClass('input-sm');
                }
                if(this.$input.hasClass('input-lg')) {
                    this.$input.siblings('input.tt-hint').addClass('input-lg');
                }
            }
        }
    });      

    Constructor.defaults = $.extend({}, $.fn.editabletypes.list.defaults, {
        /**
        @property tpl 
        @default <input type="text">
        **/         
        tpl:'<input type="text">',
        /**
        Configuration of typeahead itself. 
        [Full list of options](https://github.com/twitter/typeahead.js#dataset).
        
        @property typeahead 
        @type object
        @default null
        **/
        typeahead: null,
        /**
        Whether to show `clear` button 
        
        @property clear 
        @type boolean
        @default true        
        **/
        clear: true
    });

    $.fn.editabletypes.typeaheadjs = Constructor;      
    
}(window.jQuery));
/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
    var VERSION = "0.9.3";
    var utils = {
        isMsie: function() {
            var match = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return match ? parseInt(match[2], 10) : false;
        },
        isBlankString: function(str) {
            return !str || /^\s*$/.test(str);
        },
        escapeRegExChars: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function(obj) {
            return typeof obj === "string";
        },
        isNumber: function(obj) {
            return typeof obj === "number";
        },
        isArray: $.isArray,
        isFunction: $.isFunction,
        isObject: $.isPlainObject,
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
        bind: $.proxy,
        bindAll: function(obj) {
            var val;
            for (var key in obj) {
                $.isFunction(val = obj[key]) && (obj[key] = $.proxy(val, obj));
            }
        },
        indexOf: function(haystack, needle) {
            for (var i = 0; i < haystack.length; i++) {
                if (haystack[i] === needle) {
                    return i;
                }
            }
            return -1;
        },
        each: $.each,
        map: $.map,
        filter: $.grep,
        every: function(obj, test) {
            var result = true;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (!(result = test.call(null, val, key, obj))) {
                    return false;
                }
            });
            return !!result;
        },
        some: function(obj, test) {
            var result = false;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (result = test.call(null, val, key, obj)) {
                    return false;
                }
            });
            return !!result;
        },
        mixin: $.extend,
        getUniqueId: function() {
            var counter = 0;
            return function() {
                return counter++;
            };
        }(),
        defer: function(fn) {
            setTimeout(fn, 0);
        },
        debounce: function(func, wait, immediate) {
            var timeout, result;
            return function() {
                var context = this, args = arguments, later, callNow;
                later = function() {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            };
        },
        throttle: function(func, wait) {
            var context, args, timeout, result, previous, later;
            previous = 0;
            later = function() {
                previous = new Date();
                timeout = null;
                result = func.apply(context, args);
            };
            return function() {
                var now = new Date(), remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        tokenizeQuery: function(str) {
            return $.trim(str).toLowerCase().split(/[\s]+/);
        },
        tokenizeText: function(str) {
            return $.trim(str).toLowerCase().split(/[\s\-_]+/);
        },
        getProtocol: function() {
            return location.protocol;
        },
        noop: function() {}
    };
    var EventTarget = function() {
        var eventSplitter = /\s+/;
        return {
            on: function(events, callback) {
                var event;
                if (!callback) {
                    return this;
                }
                this._callbacks = this._callbacks || {};
                events = events.split(eventSplitter);
                while (event = events.shift()) {
                    this._callbacks[event] = this._callbacks[event] || [];
                    this._callbacks[event].push(callback);
                }
                return this;
            },
            trigger: function(events, data) {
                var event, callbacks;
                if (!this._callbacks) {
                    return this;
                }
                events = events.split(eventSplitter);
                while (event = events.shift()) {
                    if (callbacks = this._callbacks[event]) {
                        for (var i = 0; i < callbacks.length; i += 1) {
                            callbacks[i].call(this, {
                                type: event,
                                data: data
                            });
                        }
                    }
                }
                return this;
            }
        };
    }();
    var EventBus = function() {
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        utils.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var PersistentStorage = function() {
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
        } catch (err) {
            ls = null;
        }
        function PersistentStorage(namespace) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + this.prefix);
        }
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                    }
                    return decode(ls.getItem(this._prefix(key)));
                },
                set: function(key, val, ttl) {
                    if (utils.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                    } else {
                        ls.removeItem(this._ttlKey(key));
                    }
                    return ls.setItem(this._prefix(key), encode(val));
                },
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
                },
                clear: function() {
                    var i, key, keys = [], len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                        }
                    }
                    for (i = keys.length; i--; ) {
                        this.remove(keys[i]);
                    }
                    return this;
                },
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return utils.isNumber(ttl) && now() > ttl ? true : false;
                }
            };
        } else {
            methods = {
                get: utils.noop,
                set: utils.noop,
                remove: utils.noop,
                clear: utils.noop,
                isExpired: utils.noop
            };
        }
        utils.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(utils.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return JSON.parse(val);
        }
    }();
    var RequestCache = function() {
        function RequestCache(o) {
            utils.bindAll(this);
            o = o || {};
            this.sizeLimit = o.sizeLimit || 10;
            this.cache = {};
            this.cachedKeysByAge = [];
        }
        utils.mixin(RequestCache.prototype, {
            get: function(url) {
                return this.cache[url];
            },
            set: function(url, resp) {
                var requestToEvict;
                if (this.cachedKeysByAge.length === this.sizeLimit) {
                    requestToEvict = this.cachedKeysByAge.shift();
                    delete this.cache[requestToEvict];
                }
                this.cache[url] = resp;
                this.cachedKeysByAge.push(url);
            }
        });
        return RequestCache;
    }();
    var Transport = function() {
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests, requestCache;
        function Transport(o) {
            utils.bindAll(this);
            o = utils.isString(o) ? {
                url: o
            } : o;
            requestCache = requestCache || new RequestCache();
            maxPendingRequests = utils.isNumber(o.maxParallelRequests) ? o.maxParallelRequests : maxPendingRequests || 6;
            this.url = o.url;
            this.wildcard = o.wildcard || "%QUERY";
            this.filter = o.filter;
            this.replace = o.replace;
            this.ajaxSettings = {
                type: "get",
                cache: o.cache,
                timeout: o.timeout,
                dataType: o.dataType || "json",
                beforeSend: o.beforeSend
            };
            this._get = (/^throttle$/i.test(o.rateLimitFn) ? utils.throttle : utils.debounce)(this._get, o.rateLimitWait || 300);
        }
        utils.mixin(Transport.prototype, {
            _get: function(url, cb) {
                var that = this;
                if (belowPendingRequestsThreshold()) {
                    this._sendRequest(url).done(done);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    var data = that.filter ? that.filter(resp) : resp;
                    cb && cb(data);
                    requestCache.set(url, resp);
                }
            },
            _sendRequest: function(url) {
                var that = this, jqXhr = pendingRequests[url];
                if (!jqXhr) {
                    incrementPendingRequests();
                    jqXhr = pendingRequests[url] = $.ajax(url, this.ajaxSettings).always(always);
                }
                return jqXhr;
                function always() {
                    decrementPendingRequests();
                    pendingRequests[url] = null;
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(query, cb) {
                var that = this, encodedQuery = encodeURIComponent(query || ""), url, resp;
                cb = cb || utils.noop;
                url = this.replace ? this.replace(this.url, encodedQuery) : this.url.replace(this.wildcard, encodedQuery);
                if (resp = requestCache.get(url)) {
                    utils.defer(function() {
                        cb(that.filter ? that.filter(resp) : resp);
                    });
                } else {
                    this._get(url, cb);
                }
                return !!resp;
            }
        });
        return Transport;
        function incrementPendingRequests() {
            pendingRequestsCount++;
        }
        function decrementPendingRequests() {
            pendingRequestsCount--;
        }
        function belowPendingRequestsThreshold() {
            return pendingRequestsCount < maxPendingRequests;
        }
    }();
    var Dataset = function() {
        var keys = {
            thumbprint: "thumbprint",
            protocol: "protocol",
            itemHash: "itemHash",
            adjacencyList: "adjacencyList"
        };
        function Dataset(o) {
            utils.bindAll(this);
            if (utils.isString(o.template) && !o.engine) {
                $.error("no template engine specified");
            }
            if (!o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
            }
            this.name = o.name || utils.getUniqueId();
            this.limit = o.limit || 5;
            this.minLength = o.minLength || 1;
            this.header = o.header;
            this.footer = o.footer;
            this.valueKey = o.valueKey || "value";
            this.template = compileTemplate(o.template, o.engine, this.valueKey);
            this.local = o.local;
            this.prefetch = o.prefetch;
            this.remote = o.remote;
            this.itemHash = {};
            this.adjacencyList = {};
            this.storage = o.name ? new PersistentStorage(o.name) : null;
        }
        utils.mixin(Dataset.prototype, {
            _processLocalData: function(data) {
                this._mergeProcessedData(this._processData(data));
            },
            _loadPrefetchData: function(o) {
                var that = this, thumbprint = VERSION + (o.thumbprint || ""), storedThumbprint, storedProtocol, storedItemHash, storedAdjacencyList, isExpired, deferred;
                if (this.storage) {
                    storedThumbprint = this.storage.get(keys.thumbprint);
                    storedProtocol = this.storage.get(keys.protocol);
                    storedItemHash = this.storage.get(keys.itemHash);
                    storedAdjacencyList = this.storage.get(keys.adjacencyList);
                }
                isExpired = storedThumbprint !== thumbprint || storedProtocol !== utils.getProtocol();
                o = utils.isString(o) ? {
                    url: o
                } : o;
                o.ttl = utils.isNumber(o.ttl) ? o.ttl : 24 * 60 * 60 * 1e3;
                if (storedItemHash && storedAdjacencyList && !isExpired) {
                    this._mergeProcessedData({
                        itemHash: storedItemHash,
                        adjacencyList: storedAdjacencyList
                    });
                    deferred = $.Deferred().resolve();
                } else {
                    deferred = $.getJSON(o.url).done(processPrefetchData);
                }
                return deferred;
                function processPrefetchData(data) {
                    var filteredData = o.filter ? o.filter(data) : data, processedData = that._processData(filteredData), itemHash = processedData.itemHash, adjacencyList = processedData.adjacencyList;
                    if (that.storage) {
                        that.storage.set(keys.itemHash, itemHash, o.ttl);
                        that.storage.set(keys.adjacencyList, adjacencyList, o.ttl);
                        that.storage.set(keys.thumbprint, thumbprint, o.ttl);
                        that.storage.set(keys.protocol, utils.getProtocol(), o.ttl);
                    }
                    that._mergeProcessedData(processedData);
                }
            },
            _transformDatum: function(datum) {
                var value = utils.isString(datum) ? datum : datum[this.valueKey], tokens = datum.tokens || utils.tokenizeText(value), item = {
                    value: value,
                    tokens: tokens
                };
                if (utils.isString(datum)) {
                    item.datum = {};
                    item.datum[this.valueKey] = datum;
                } else {
                    item.datum = datum;
                }
                item.tokens = utils.filter(item.tokens, function(token) {
                    return !utils.isBlankString(token);
                });
                item.tokens = utils.map(item.tokens, function(token) {
                    return token.toLowerCase();
                });
                return item;
            },
            _processData: function(data) {
                var that = this, itemHash = {}, adjacencyList = {};
                utils.each(data, function(i, datum) {
                    var item = that._transformDatum(datum), id = utils.getUniqueId(item.value);
                    itemHash[id] = item;
                    utils.each(item.tokens, function(i, token) {
                        var character = token.charAt(0), adjacency = adjacencyList[character] || (adjacencyList[character] = [ id ]);
                        !~utils.indexOf(adjacency, id) && adjacency.push(id);
                    });
                });
                return {
                    itemHash: itemHash,
                    adjacencyList: adjacencyList
                };
            },
            _mergeProcessedData: function(processedData) {
                var that = this;
                utils.mixin(this.itemHash, processedData.itemHash);
                utils.each(processedData.adjacencyList, function(character, adjacency) {
                    var masterAdjacency = that.adjacencyList[character];
                    that.adjacencyList[character] = masterAdjacency ? masterAdjacency.concat(adjacency) : adjacency;
                });
            },
            _getLocalSuggestions: function(terms) {
                var that = this, firstChars = [], lists = [], shortestList, suggestions = [];
                utils.each(terms, function(i, term) {
                    var firstChar = term.charAt(0);
                    !~utils.indexOf(firstChars, firstChar) && firstChars.push(firstChar);
                });
                utils.each(firstChars, function(i, firstChar) {
                    var list = that.adjacencyList[firstChar];
                    if (!list) {
                        return false;
                    }
                    lists.push(list);
                    if (!shortestList || list.length < shortestList.length) {
                        shortestList = list;
                    }
                });
                if (lists.length < firstChars.length) {
                    return [];
                }
                utils.each(shortestList, function(i, id) {
                    var item = that.itemHash[id], isCandidate, isMatch;
                    isCandidate = utils.every(lists, function(list) {
                        return ~utils.indexOf(list, id);
                    });
                    isMatch = isCandidate && utils.every(terms, function(term) {
                        return utils.some(item.tokens, function(token) {
                            return token.indexOf(term) === 0;
                        });
                    });
                    isMatch && suggestions.push(item);
                });
                return suggestions;
            },
            initialize: function() {
                var deferred;
                this.local && this._processLocalData(this.local);
                this.transport = this.remote ? new Transport(this.remote) : null;
                deferred = this.prefetch ? this._loadPrefetchData(this.prefetch) : $.Deferred().resolve();
                this.local = this.prefetch = this.remote = null;
                this.initialize = function() {
                    return deferred;
                };
                return deferred;
            },
            getSuggestions: function(query, cb) {
                var that = this, terms, suggestions, cacheHit = false;
                if (query.length < this.minLength) {
                    return;
                }
                terms = utils.tokenizeQuery(query);
                suggestions = this._getLocalSuggestions(terms).slice(0, this.limit);
                if (suggestions.length < this.limit && this.transport) {
                    cacheHit = this.transport.get(query, processRemoteData);
                }
                !cacheHit && cb && cb(suggestions);
                function processRemoteData(data) {
                    suggestions = suggestions.slice(0);
                    utils.each(data, function(i, datum) {
                        var item = that._transformDatum(datum), isDuplicate;
                        isDuplicate = utils.some(suggestions, function(suggestion) {
                            return item.value === suggestion.value;
                        });
                        !isDuplicate && suggestions.push(item);
                        return suggestions.length < that.limit;
                    });
                    cb && cb(suggestions);
                }
            }
        });
        return Dataset;
        function compileTemplate(template, engine, valueKey) {
            var renderFn, compiledTemplate;
            if (utils.isFunction(template)) {
                renderFn = template;
            } else if (utils.isString(template)) {
                compiledTemplate = engine.compile(template);
                renderFn = utils.bind(compiledTemplate.render, compiledTemplate);
            } else {
                renderFn = function(context) {
                    return "<p>" + context[valueKey] + "</p>";
                };
            }
            return renderFn;
        }
    }();
    var InputView = function() {
        function InputView(o) {
            var that = this;
            utils.bindAll(this);
            this.specialKeyCodeMap = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            };
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent);
            if (!utils.isMsie()) {
                this.$input.on("input.tt", this._compareQueryToInputValue);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (that.specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    utils.defer(that._compareQueryToInputValue);
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        utils.mixin(InputView.prototype, EventTarget, {
            _handleFocus: function() {
                this.trigger("focused");
            },
            _handleBlur: function() {
                this.trigger("blured");
            },
            _handleSpecialKeyEvent: function($e) {
                var keyName = this.specialKeyCodeMap[$e.which || $e.keyCode];
                keyName && this.trigger(keyName + "Keyed", $e);
            },
            _compareQueryToInputValue: function() {
                var inputValue = this.getInputValue(), isSameQuery = compareQueries(this.query, inputValue), isSameQueryExceptWhitespace = isSameQuery ? this.query.length !== inputValue.length : false;
                if (isSameQueryExceptWhitespace) {
                    this.trigger("whitespaceChanged", {
                        value: this.query
                    });
                } else if (!isSameQuery) {
                    this.trigger("queryChanged", {
                        value: this.query = inputValue
                    });
                }
            },
            destroy: function() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            },
            focus: function() {
                this.$input.focus();
            },
            blur: function() {
                this.$input.blur();
            },
            getQuery: function() {
                return this.query;
            },
            setQuery: function(query) {
                this.query = query;
            },
            getInputValue: function() {
                return this.$input.val();
            },
            setInputValue: function(value, silent) {
                this.$input.val(value);
                !silent && this._compareQueryToInputValue();
            },
            getHintValue: function() {
                return this.$hint.val();
            },
            setHintValue: function(value) {
                this.$hint.val(value);
            },
            getLanguageDirection: function() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            isOverflow: function() {
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() > this.$input.width();
            },
            isCursorAtEnd: function() {
                var valueLength = this.$input.val().length, selectionStart = this.$input[0].selectionStart, range;
                if (utils.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            }
        });
        return InputView;
        function buildOverflowHelper($input) {
            return $("<span></span>").css({
                position: "absolute",
                left: "-9999px",
                visibility: "hidden",
                whiteSpace: "nowrap",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function compareQueries(a, b) {
            a = (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
            b = (b || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
            return a === b;
        }
    }();
    var DropdownView = function() {
        var html = {
            suggestionsList: '<span class="tt-suggestions"></span>'
        }, css = {
            suggestionsList: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            }
        };
        function DropdownView(o) {
            utils.bindAll(this);
            this.isOpen = false;
            this.isEmpty = true;
            this.isMouseOverDropdown = false;
            this.$menu = $(o.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover);
        }
        utils.mixin(DropdownView.prototype, EventTarget, {
            _handleMouseenter: function() {
                this.isMouseOverDropdown = true;
            },
            _handleMouseleave: function() {
                this.isMouseOverDropdown = false;
            },
            _handleMouseover: function($e) {
                var $suggestion = $($e.currentTarget);
                this._getSuggestions().removeClass("tt-is-under-cursor");
                $suggestion.addClass("tt-is-under-cursor");
            },
            _handleSelection: function($e) {
                var $suggestion = $($e.currentTarget);
                this.trigger("suggestionSelected", extractSuggestion($suggestion));
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _hide: function() {
                this.$menu.hide();
            },
            _moveCursor: function(increment) {
                var $suggestions, $cur, nextIndex, $underCursor;
                if (!this.isVisible()) {
                    return;
                }
                $suggestions = this._getSuggestions();
                $cur = $suggestions.filter(".tt-is-under-cursor");
                $cur.removeClass("tt-is-under-cursor");
                nextIndex = $suggestions.index($cur) + increment;
                nextIndex = (nextIndex + 1) % ($suggestions.length + 1) - 1;
                if (nextIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (nextIndex < -1) {
                    nextIndex = $suggestions.length - 1;
                }
                $underCursor = $suggestions.eq(nextIndex).addClass("tt-is-under-cursor");
                this._ensureVisibility($underCursor);
                this.trigger("cursorMoved", extractSuggestion($underCursor));
            },
            _getSuggestions: function() {
                return this.$menu.find(".tt-suggestions > .tt-suggestion");
            },
            _ensureVisibility: function($el) {
                var menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), menuScrollTop = this.$menu.scrollTop(), elTop = $el.position().top, elBottom = elTop + $el.outerHeight(true);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            destroy: function() {
                this.$menu.off(".tt");
                this.$menu = null;
            },
            isVisible: function() {
                return this.isOpen && !this.isEmpty;
            },
            closeUnlessMouseIsOverDropdown: function() {
                if (!this.isMouseOverDropdown) {
                    this.close();
                }
            },
            close: function() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.isMouseOverDropdown = false;
                    this._hide();
                    this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor");
                    this.trigger("closed");
                }
            },
            open: function() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function(dir) {
                var ltrCss = {
                    left: "0",
                    right: "auto"
                }, rtlCss = {
                    left: "auto",
                    right: " 0"
                };
                dir === "ltr" ? this.$menu.css(ltrCss) : this.$menu.css(rtlCss);
            },
            moveCursorUp: function() {
                this._moveCursor(-1);
            },
            moveCursorDown: function() {
                this._moveCursor(+1);
            },
            getSuggestionUnderCursor: function() {
                var $suggestion = this._getSuggestions().filter(".tt-is-under-cursor").first();
                return $suggestion.length > 0 ? extractSuggestion($suggestion) : null;
            },
            getFirstSuggestion: function() {
                var $suggestion = this._getSuggestions().first();
                return $suggestion.length > 0 ? extractSuggestion($suggestion) : null;
            },
            renderSuggestions: function(dataset, suggestions) {
                var datasetClassName = "tt-dataset-" + dataset.name, wrapper = '<div class="tt-suggestion">%body</div>', compiledHtml, $suggestionsList, $dataset = this.$menu.find("." + datasetClassName), elBuilder, fragment, $el;
                if ($dataset.length === 0) {
                    $suggestionsList = $(html.suggestionsList).css(css.suggestionsList);
                    $dataset = $("<div></div>").addClass(datasetClassName).append(dataset.header).append($suggestionsList).append(dataset.footer).appendTo(this.$menu);
                }
                if (suggestions.length > 0) {
                    this.isEmpty = false;
                    this.isOpen && this._show();
                    elBuilder = document.createElement("div");
                    fragment = document.createDocumentFragment();
                    utils.each(suggestions, function(i, suggestion) {
                        suggestion.dataset = dataset.name;
                        compiledHtml = dataset.template(suggestion.datum);
                        elBuilder.innerHTML = wrapper.replace("%body", compiledHtml);
                        $el = $(elBuilder.firstChild).css(css.suggestion).data("suggestion", suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        fragment.appendChild($el[0]);
                    });
                    $dataset.show().find(".tt-suggestions").html(fragment);
                } else {
                    this.clearSuggestions(dataset.name);
                }
                this.trigger("suggestionsRendered");
            },
            clearSuggestions: function(datasetName) {
                var $datasets = datasetName ? this.$menu.find(".tt-dataset-" + datasetName) : this.$menu.find('[class^="tt-dataset-"]'), $suggestions = $datasets.find(".tt-suggestions");
                $datasets.hide();
                $suggestions.empty();
                if (this._getSuggestions().length === 0) {
                    this.isEmpty = true;
                    this._hide();
                }
            }
        });
        return DropdownView;
        function extractSuggestion($el) {
            return $el.data("suggestion");
        }
    }();
    var TypeaheadView = function() {
        var html = {
            wrapper: '<span class="twitter-typeahead"></span>',
            hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
            dropdown: '<span class="tt-dropdown-menu"></span>'
        }, css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none"
            },
            query: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            }
        };
        if (utils.isMsie()) {
            utils.mixin(css.query, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            });
        }
        if (utils.isMsie() && utils.isMsie() <= 7) {
            utils.mixin(css.wrapper, {
                display: "inline",
                zoom: "1"
            });
            utils.mixin(css.query, {
                marginTop: "-1px"
            });
        }
        function TypeaheadView(o) {
            var $menu, $input, $hint;
            utils.bindAll(this);
            this.$node = buildDomStructure(o.input);
            this.datasets = o.datasets;
            this.dir = null;
            this.eventBus = o.eventBus;
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-query");
            $hint = this.$node.find(".tt-hint");
            this.dropdownView = new DropdownView({
                menu: $menu
            }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent);
            this.inputView = new InputView({
                input: $input,
                hint: $hint
            }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete);
        }
        utils.mixin(TypeaheadView.prototype, EventTarget, {
            _managePreventDefault: function(e) {
                var $e = e.data, hint, inputValue, preventDefault = false;
                switch (e.type) {
                  case "tabKeyed":
                    hint = this.inputView.getHintValue();
                    inputValue = this.inputView.getInputValue();
                    preventDefault = hint && hint !== inputValue;
                    break;

                  case "upKeyed":
                  case "downKeyed":
                    preventDefault = !$e.shiftKey && !$e.ctrlKey && !$e.metaKey;
                    break;
                }
                preventDefault && $e.preventDefault();
            },
            _setLanguageDirection: function() {
                var dir = this.inputView.getLanguageDirection();
                if (dir !== this.dir) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdownView.setLanguageDirection(dir);
                }
            },
            _updateHint: function() {
                var suggestion = this.dropdownView.getFirstSuggestion(), hint = suggestion ? suggestion.value : null, dropdownIsVisible = this.dropdownView.isVisible(), inputHasOverflow = this.inputView.isOverflow(), inputValue, query, escapedQuery, beginsWithQuery, match;
                if (hint && dropdownIsVisible && !inputHasOverflow) {
                    inputValue = this.inputView.getInputValue();
                    query = inputValue.replace(/\s{2,}/g, " ").replace(/^\s+/g, "");
                    escapedQuery = utils.escapeRegExChars(query);
                    beginsWithQuery = new RegExp("^(?:" + escapedQuery + ")(.*$)", "i");
                    match = beginsWithQuery.exec(hint);
                    this.inputView.setHintValue(inputValue + (match ? match[1] : ""));
                }
            },
            _clearHint: function() {
                this.inputView.setHintValue("");
            },
            _clearSuggestions: function() {
                this.dropdownView.clearSuggestions();
            },
            _setInputValueToQuery: function() {
                this.inputView.setInputValue(this.inputView.getQuery());
            },
            _setInputValueToSuggestionUnderCursor: function(e) {
                var suggestion = e.data;
                this.inputView.setInputValue(suggestion.value, true);
            },
            _openDropdown: function() {
                this.dropdownView.open();
            },
            _closeDropdown: function(e) {
                this.dropdownView[e.type === "blured" ? "closeUnlessMouseIsOverDropdown" : "close"]();
            },
            _moveDropdownCursor: function(e) {
                var $e = e.data;
                if (!$e.shiftKey && !$e.ctrlKey && !$e.metaKey) {
                    this.dropdownView[e.type === "upKeyed" ? "moveCursorUp" : "moveCursorDown"]();
                }
            },
            _handleSelection: function(e) {
                var byClick = e.type === "suggestionSelected", suggestion = byClick ? e.data : this.dropdownView.getSuggestionUnderCursor();
                if (suggestion) {
                    this.inputView.setInputValue(suggestion.value);
                    byClick ? this.inputView.focus() : e.data.preventDefault();
                    byClick && utils.isMsie() ? utils.defer(this.dropdownView.close) : this.dropdownView.close();
                    this.eventBus.trigger("selected", suggestion.datum, suggestion.dataset);
                }
            },
            _getSuggestions: function() {
                var that = this, query = this.inputView.getQuery();
                if (utils.isBlankString(query)) {
                    return;
                }
                utils.each(this.datasets, function(i, dataset) {
                    dataset.getSuggestions(query, function(suggestions) {
                        if (query === that.inputView.getQuery()) {
                            that.dropdownView.renderSuggestions(dataset, suggestions);
                        }
                    });
                });
            },
            _autocomplete: function(e) {
                var isCursorAtEnd, ignoreEvent, query, hint, suggestion;
                if (e.type === "rightKeyed" || e.type === "leftKeyed") {
                    isCursorAtEnd = this.inputView.isCursorAtEnd();
                    ignoreEvent = this.inputView.getLanguageDirection() === "ltr" ? e.type === "leftKeyed" : e.type === "rightKeyed";
                    if (!isCursorAtEnd || ignoreEvent) {
                        return;
                    }
                }
                query = this.inputView.getQuery();
                hint = this.inputView.getHintValue();
                if (hint !== "" && query !== hint) {
                    suggestion = this.dropdownView.getFirstSuggestion();
                    this.inputView.setInputValue(suggestion.value);
                    this.eventBus.trigger("autocompleted", suggestion.datum, suggestion.dataset);
                }
            },
            _propagateEvent: function(e) {
                this.eventBus.trigger(e.type);
            },
            destroy: function() {
                this.inputView.destroy();
                this.dropdownView.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            },
            setQuery: function(query) {
                this.inputView.setQuery(query);
                this.inputView.setInputValue(query);
                this._clearHint();
                this._clearSuggestions();
                this._getSuggestions();
            }
        });
        return TypeaheadView;
        function buildDomStructure(input) {
            var $wrapper = $(html.wrapper), $dropdown = $(html.dropdown), $input = $(input), $hint = $(html.hint);
            $wrapper = $wrapper.css(css.wrapper);
            $dropdown = $dropdown.css(css.dropdown);
            $hint.css(css.hint).css({
                backgroundAttachment: $input.css("background-attachment"),
                backgroundClip: $input.css("background-clip"),
                backgroundColor: $input.css("background-color"),
                backgroundImage: $input.css("background-image"),
                backgroundOrigin: $input.css("background-origin"),
                backgroundPosition: $input.css("background-position"),
                backgroundRepeat: $input.css("background-repeat"),
                backgroundSize: $input.css("background-size")
            });
            $input.data("ttAttrs", {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-query").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(css.query);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend($hint).append($dropdown);
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-query");
            utils.each($input.data("ttAttrs"), function(key, val) {
                utils.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        var cache = {}, viewKey = "ttView", methods;
        methods = {
            initialize: function(datasetDefs) {
                var datasets;
                datasetDefs = utils.isArray(datasetDefs) ? datasetDefs : [ datasetDefs ];
                if (datasetDefs.length === 0) {
                    $.error("no datasets provided");
                }
                datasets = utils.map(datasetDefs, function(o) {
                    var dataset = cache[o.name] ? cache[o.name] : new Dataset(o);
                    if (o.name) {
                        cache[o.name] = dataset;
                    }
                    return dataset;
                });
                return this.each(initialize);
                function initialize() {
                    var $input = $(this), deferreds, eventBus = new EventBus({
                        el: $input
                    });
                    deferreds = utils.map(datasets, function(dataset) {
                        return dataset.initialize();
                    });
                    $input.data(viewKey, new TypeaheadView({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        datasets: datasets
                    }));
                    $.when.apply($, deferreds).always(function() {
                        utils.defer(function() {
                            eventBus.trigger("initialized");
                        });
                    });
                }
            },
            destroy: function() {
                return this.each(destroy);
                function destroy() {
                    var $this = $(this), view = $this.data(viewKey);
                    if (view) {
                        view.destroy();
                        $this.removeData(viewKey);
                    }
                }
            },
            setQuery: function(query) {
                return this.each(setQuery);
                function setQuery() {
                    var view = $(this).data(viewKey);
                    view && view.setQuery(query);
                }
            }
        };
        jQuery.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
    })();
})(window.jQuery);
/**
Address editable input.
Internally value stored as {city: "Moscow", street: "Lenina", building: "15"}

@class address
@extends abstractinput
@final
@example
<a href="#" id="address" data-type="address" data-pk="1">awesome</a>
<script>
$(function(){
    $('#address').editable({
        url: '/post',
        title: 'Enter city, street and building #',
        value: {
            city: "Moscow", 
            street: "Lenina", 
            building: "15"
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {
        /**
        Renders input from tpl

        @method render() 
        **/        
        render: function() {
           this.$input = this.$tpl.find('input');
        },
        
        /**
        Default method to show value in element. Can be overwritten by display option.
        
        @method value2html(value, element) 
        **/
        value2html: function(value, element) {
            if(!value) {
                $(element).empty();
                return; 
            }
            var html = $('<div>').text(value.city).html() + ', ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
            $(element).html(html); 
        },
        
        /**
        Gets value from element's html
        
        @method html2value(html) 
        **/        
        html2value: function(html) {        
          /*
            you may write parsing method to get value by element's html
            e.g. "Moscow, st. Lenina, bld. 15" => {city: "Moscow", street: "Lenina", building: "15"}
            but for complex structures it's not recommended.
            Better set value directly via javascript, e.g. 
            editable({
                value: {
                    city: "Moscow", 
                    street: "Lenina", 
                    building: "15"
                }
            });
          */ 
          return null;  
        },
      
       /**
        Converts value to string. 
        It is used in internal comparing (not for sending to server).
        
        @method value2str(value)  
       **/
       value2str: function(value) {
           var str = '';
           if(value) {
               for(var k in value) {
                   str = str + k + ':' + value[k] + ';';  
               }
           }
           return str;
       }, 
       
       /*
        Converts string to value. Used for reading value from 'data-value' attribute.
        
        @method str2value(str)  
       */
       str2value: function(str) {
           /*
           this is mainly for parsing value defined in data-value attribute. 
           If you will always set value by javascript, no need to overwrite it
           */
           return str;
       },                
       
       /**
        Sets value of input.
        
        @method value2input(value) 
        @param {mixed} value
       **/         
       value2input: function(value) {
           if(!value) {
             return;
           }
           this.$input.filter('[name="city"]').val(value.city);
           this.$input.filter('[name="street"]').val(value.street);
           this.$input.filter('[name="building"]').val(value.building);
       },       
       
       /**
        Returns value of input.
        
        @method input2value() 
       **/          
       input2value: function() { 
           return {
              city: this.$input.filter('[name="city"]').val(), 
              street: this.$input.filter('[name="street"]').val(), 
              building: this.$input.filter('[name="building"]').val()
           };
       },        
       
        /**
        Activates input: sets focus on the first field.
        
        @method activate() 
       **/        
       activate: function() {
            this.$input.filter('[name="city"]').focus();
       },  
       
       /**
        Attaches handler to submit form in case of 'showbuttons=false' mode
        
        @method autosubmit() 
       **/       
       autosubmit: function() {
           this.$input.keydown(function (e) {
                if (e.which === 13) {
                    $(this).closest('form').submit();
                }
           });
       }       
    });

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        tpl: '<div class="editable-address"><label><span>City: </span><input type="text" name="city" class="input-small"></label></div>'+
             '<div class="editable-address"><label><span>Street: </span><input type="text" name="street" class="input-small"></label></div>'+
             '<div class="editable-address"><label><span>Building: </span><input type="text" name="building" class="input-mini"></label></div>',
             
        inputclass: ''
    });

    $.fn.editabletypes.address = Address;

}(window.jQuery));