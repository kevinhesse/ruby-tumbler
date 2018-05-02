/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a};f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsFBEventsLogging",function(){return function(g,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsUtils"),b=a.sendPOST,c=a.isInstanceOf,d=f.getFbeventsModules("SignalsParamList"),h=!1;function i(){h=!0}var j=!0;function k(){j=!1}a="console";var l="warn",m=g[a]&&g[a][l]?g[a][l].bind(g[a]):function(){},n=!1;function o(){n=!0}function p(a){if(n)return;m("[Facebook Pixel] - "+a)}var q="Facebook Pixel Error",r=g.postMessage?g.postMessage.bind(g):function(){},s={};function t(a){switch(a.type){case"FBQ_NO_METHOD_NAME":return"You must provide an argument to fbq().";case"INVALID_FBQ_METHOD":var b=a.method;return"\"fbq('"+b+"', ...);\" is not a valid fbq command.";case"INVALID_PIXEL_ID":b=a.pixelID;return"Invalid PixelID: "+b+".";case"DUPLICATE_PIXEL_ID":b=a.pixelID;return"Duplicate Pixel ID: "+b+".";case"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":b=a.metadataValue;var c=a.pixelID;return"Trying to set argument "+b+" for uninitialized Pixel ID "+c+".";case"CONFLICTING_VERSIONS":return"Multiple pixels with conflicting versions were detected on this page.";case"MULTIPLE_PIXELS":return"Multiple pixels were detected on this page.";case"UNSUPPORTED_METADATA_ARGUMENT":b=a.metadata;return"Unsupported metadata argument: "+b+".";case"REQUIRED_PARAM_MISSING":c=a.param;b=a.eventName;return"Required parameter '"+c+"' is missing for event '"+b+"'.";case"INVALID_PARAM":c=a.param;b=a.eventName;return"Parameter '"+c+"' is invalid for event '"+b+"'.";case"NONSTANDARD_EVENT":c=a.eventName;return"You are sending a non-standard event '"+c+"'. The preferred way to send these events is using trackCustom. See 'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom' for more information.";case"NEGATIVE_EVENT_PARAM":b=a.param;c=a.eventName;return"Parameter '"+b+"' is negative for event '"+c+"'.";case"PII_INVALID_TYPE":b=a.key_type;c=a.key_val;return"An invalid "+b+" was specified for '"+c+"'. This data will not be sent with any events for this Pixel.";case"INVALID_CONSENT_ACTION":b=a.action;return"\"fbq('"+b+"', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'await' and 'grant'.";default:w(new Error("INVALID_USER_ERROR - "+a.type+" - "+JSON.stringify(a)));return"Invalid User Error."}}function u(a,e){try{var f=Math.random(),h=g.fbq&&g.fbq._releaseSegment?g.fbq._releaseSegment:"unknown";if(j&&f<.01||h==="canary"){f=new d(null);f.append("p","pixel");f.append("v",g.fbq&&g.fbq.version?g.fbq.version:"unknown");f.append("e",a.toString());c(a,Error)&&(f.append("f",a.fileName),f.append("s",a.stackTrace||a.stack));f.append("ue",e?"1":"0");f.append("rs",h);b(f,"https://connect.facebook.net/log/error")}}catch(a){}}function v(a){var b=JSON.stringify(a);if(!Object.prototype.hasOwnProperty.call(s,b))s[b]=!0;else return;b=t(a);p(b);r({action:"FB_LOG",logType:q,logMessage:b},"*");u(new Error(b),!0)}function w(a){u(a,!1),h&&p(a.toString())}l={logError:w,logUserError:v,enableVerboseDebugLogging:i,disableAllLogging:o,disableSampling:k};e.exports=l})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsPlugin",function(){return function(f,g,c,d){var e={exports:{}};e.exports;(function(){"use strict";function a(a){this.plugin=a;this.__fbEventsPlugin=1;return this}e.exports=a})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(f,g,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=!1;e.exports={getShouldProxy:function(){return a},setShouldProxy:function(b){a=b}}})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsUtils",function(){return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";f.getFbeventsModules("SignalsParamList");var c=f.getFbeventsModules("SignalsFBEventsProxyState"),d=Object.prototype.toString,h=!("addEventListener"in b);function i(a,b){return typeof b==="function"&&a instanceof b}function j(a){return Array.isArray?Array.isArray(a):d.call(a)==="[object Array]"}function k(a){return typeof a==="number"||typeof a==="string"&&/^\d+$/.test(a)}var l=Number.isInteger||function(a){return typeof a==="number"&&isFinite(a)&&Math.floor(a)===a};function m(a,b,c){b=h?"on"+b:b;var d=h?a.attachEvent:a.addEventListener,e=h?a.detachEvent:a.removeEventListener,f=function d(){e&&e.call(a,b,d,!1),c()};d&&d.call(a,b,f,!1)}var n=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),p=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],q=p.length;function r(a){if(Object.keys)return Object.keys(a);if((typeof a==="undefined"?"undefined":g(a))!=="object"&&(typeof a!=="function"||a===null))throw new TypeError("Object.keys called on non-object");var b=[];for(var c in a)n.call(a,c)&&b.push(c);if(o)for(var d=0;d<q;d++)n.call(a,p[d])&&b.push(p[d]);return b}function s(a,b){if(Array.prototype.map)return Array.prototype.map.call(a,b);var c=void 0,d=void 0;if(a==null)throw new TypeError(" array is null or not defined");a=Object(a);var e=a.length>>>0;if(typeof b!=="function")throw new TypeError(b+" is not a function");c=new Array(e);d=0;while(d<e){var f;d in a&&(f=a[d],f=b.call(null,f,d,a),c[d]=f);d++}return c}function t(a){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(typeof a!=="function")throw new TypeError();var b=Object(this),c=b.length>>>0,d=arguments.length>=2?arguments[1]:void 0;for(var e=0;e<c;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1}function u(a){return r(a).length===0}function v(a){if(this===void 0||this===null)throw new TypeError();var b=Object(this),c=b.length>>>0;if(typeof a!=="function")throw new TypeError();var d=[],e=arguments.length>=2?arguments[1]:void 0;for(var f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}function w(a){this.items=a==null?[]:a}w.prototype.has=function(a){return t.call(this.items,function(b){return b===a})};w.prototype.add=function(a){this.items.push(a)};function x(a,b){return b&&c.getShouldProxy()?b:a}function y(a,b,d){var e=a.toQueryString();e=x(b,d)+"?"+e;if(e.length<2048){var f=new Image();if(d){var g=c.getShouldProxy();f.onerror=function(){c.setShouldProxy(!0),g||y(a,b,d)}}f.src=e;return!0}return!1}function z(d,e,f){var g="fb"+Math.random().toString().replace(".",""),h=b.createElement("form");h.method="post";h.action=x(e,f);h.target=g;h.acceptCharset="utf-8";h.style.display="none";var i=!!(a.attachEvent&&!a.addEventListener);i=i?'<iframe name="'+g+'">':"iframe";var j=b.createElement(i);j.src="about:blank";j.id=g;j.name=g;h.appendChild(j);m(j,"load",function(){d.each(function(a,c){var d=b.createElement("input");d.name=decodeURIComponent(a);d.value=c;h.appendChild(d)}),m(j,"load",function(){h.parentNode&&h.parentNode.removeChild(h)}),h.submit()});if(f){var k=c.getShouldProxy();j.onerror=function(){c.setShouldProxy(!0),k||z(d,e,f)}}b.body.appendChild(h);return!0}function A(b,d,e){if(a.navigator&&a.navigator.sendBeacon){var f=a.navigator.sendBeacon(x(d,e),b.toFormData());if(e&&!f){f=c.getShouldProxy();c.setShouldProxy(!0);f||A(b,d,e)}return!0}return!1}function B(a){return a}j={isArray:j,isEmptyObject:u,isNumber:k,isInteger:l,isInstanceOf:i,keys:r,listenOnce:m,map:s,sendGET:y,sendPOST:z,sendBeacon:A,FBSet:w,each:function(a,b){s.call(this,a,b)},some:function(a,b){return t.call(a,b)},filter:function(a,b){return v.call(a,b)},castTo:B};e.exports=j})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsParamList",function(){return function(f,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a="deep",b="shallow";function c(a){if(typeof JSON==="undefined"||JSON===null||!JSON.stringify)return Object.prototype.toString.call(a);else return JSON.stringify(a)}function d(a){if(a===null||a===undefined)return!0;a=typeof a==="undefined"?"undefined":g(a);return a==="number"||a==="boolean"||a==="string"}function f(a){this._params=[],this._piiTranslator=a}f.prototype.containsKey=function(a){for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return!0;return!1};f.prototype.get=function(a){a=a;for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return this._params[b].value;return null};f.prototype.getAllParams=function(){return this._params};f.prototype.addRange=function(a){var b=this;a.each(function(a,c){return b._append(a,c)})};f.prototype.append=function(b,c,d){this._append(encodeURIComponent(b),c,a,d);return this};f.prototype.appendHash=function(b,c){for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&this._append(encodeURIComponent(d),b[d],a,c);return this};f.fromHash=function(a,b){return new f(b).appendHash(a)};f.prototype._append=function(b,e,f,g){d(e)?this._appendPrimitive(b,e,g):f===a?this._appendObject(b,e,g):this._appendPrimitive(b,c(e),g)};f.prototype._translateValue=function(a,b,c){if(typeof b==="boolean")return b?"true":"false";if(!c)return""+b;if(!this._piiTranslator)throw new Error();return this._piiTranslator(a,""+b)};f.prototype._appendPrimitive=function(a,b,c){if(b!=null){b=this._translateValue(a,b,c);b!=null&&this._params.push({name:a,value:b})}};f.prototype._appendObject=function(a,c,d){var e=null;for(var f in c)if(Object.prototype.hasOwnProperty.call(c,f)){var g=a+"["+encodeURIComponent(f)+"]";try{this._append(g,c[f],b,d)}catch(a){e==null&&(e=a)}}if(e!=null)throw e};f.prototype.each=function(a){for(var b=0;b<this._params.length;b++){var c=this._params[b],d=c.name;c=c.value;a(d,c)}};f.prototype.toQueryString=function(){var a=[];this.each(function(b,c){a.push(b+"="+encodeURIComponent(c))});return a.join("&")};f.prototype.toFormData=function(){var a=new FormData();this.each(function(b,c){a.append(b,c)});return a};e.exports=f})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("sha256_with_dependencies_new",function(){return function(f,g,c,d){var e={exports:{}};e.exports;(function(){var a=function(a){var b="",c,d;for(var e=0;e<a.length;e++)c=a.charCodeAt(e),d=e+1<a.length?a.charCodeAt(e+1):0,55296<=c&&c<=56319&&56320<=d&&d<=57343&&(c=65536+((c&1023)<<10)+(d&1023),e++),c<=127?b+=String.fromCharCode(c):c<=2047?b+=String.fromCharCode(192|c>>>6&31,128|c&63):c<=65535?b+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):c<=2097151&&(b+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return b};function b(a,b){return b>>>a|b<<32-a}function c(a,b,c){return a&b^~a&c}function d(a,b,c){return a&b^a&c^b&c}function f(a){return b(2,a)^b(13,a)^b(22,a)}function g(a){return b(6,a)^b(11,a)^b(25,a)}function h(a){return b(7,a)^b(18,a)^a>>>3}function i(a){return b(17,a)^b(19,a)^a>>>10}function j(a,b){return a[b&15]+=i(a[b+14&15])+a[b+9&15]+h(a[b+1&15])}var k=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),l=new Array(8),m=new Array(2),n=new Array(64),o=new Array(16),p="0123456789abcdef";function q(a,b){var c=(a&65535)+(b&65535);a=(a>>16)+(b>>16)+(c>>16);return a<<16|c&65535}function r(){m[0]=m[1]=0,l[0]=1779033703,l[1]=3144134277,l[2]=1013904242,l[3]=2773480762,l[4]=1359893119,l[5]=2600822924,l[6]=528734635,l[7]=1541459225}function s(){var a,b,e,h,i,m,p,r,s,t;a=l[0];b=l[1];e=l[2];h=l[3];i=l[4];m=l[5];p=l[6];r=l[7];for(var u=0;u<16;u++)o[u]=n[(u<<2)+3]|n[(u<<2)+2]<<8|n[(u<<2)+1]<<16|n[u<<2]<<24;for(var u=0;u<64;u++)s=r+g(i)+c(i,m,p)+k[u],u<16?s+=o[u]:s+=j(o,u),t=f(a)+d(a,b,e),r=p,p=m,m=i,i=q(h,s),h=e,e=b,b=a,a=q(s,t);l[0]+=a;l[1]+=b;l[2]+=e;l[3]+=h;l[4]+=i;l[5]+=m;l[6]+=p;l[7]+=r}function t(a,b){var c,d,e=0;d=m[0]>>3&63;var f=b&63;(m[0]+=b<<3)<b<<3&&m[1]++;m[1]+=b>>29;for(c=0;c+63<b;c+=64){for(var g=d;g<64;g++)n[g]=a.charCodeAt(e++);s();d=0}for(var g=0;g<f;g++)n[g]=a.charCodeAt(e++)}function u(){var a=m[0]>>3&63;n[a++]=128;if(a<=56)for(var b=a;b<56;b++)n[b]=0;else{for(var b=a;b<64;b++)n[b]=0;s();for(var b=0;b<56;b++)n[b]=0}n[56]=m[1]>>>24&255;n[57]=m[1]>>>16&255;n[58]=m[1]>>>8&255;n[59]=m[1]&255;n[60]=m[0]>>>24&255;n[61]=m[0]>>>16&255;n[62]=m[0]>>>8&255;n[63]=m[0]&255;s()}function v(){var a=new String();for(var b=0;b<8;b++)for(var c=28;c>=0;c-=4)a+=p.charAt(l[b]>>>c&15);return a}function w(a){var b=0;for(var c=0;c<8;c++)for(var d=28;d>=0;d-=4)a[b++]=p.charCodeAt(l[c]>>>d&15)}function x(b,a){r();t(b,b.length);u();if(a)w(a);else return v()}function y(c,d,b){if(c===null||c===undefined)return null;d=typeof d=="undefined"?!0:d;d&&(c=a(c));return x(c,b)}e.exports=y})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEvents.plugins.identity",function(){return function(g,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging"),b=a.logUserError;a=f.getFbeventsModules("SignalsFBEventsPlugin");var c=f.getFbeventsModules("sha256_with_dependencies_new"),d=/^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,g=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,h=/^\s+|\s+$/g;Object.prototype.hasOwnProperty;function i(a){return!!a&&g.test(a)}function j(a){return a.replace(h,"")}function k(a){return a.toLowerCase()}function l(a,c){if(a==="ud[em]"||a==="ud[email]"){var d=typeof c==="string"?j(k(c)):"";if(d==null||d=="")return null;if(!i(d)){a=/ud\[(em|email)\]/.exec(a)[1];b({type:"PII_INVALID_TYPE",key_type:"email address",key_val:a});throw new Error()}return d}return c}function m(a,b){if(b!=null)if(d.test(b))return b.toLowerCase();else{b=l(a,b);if(b!=null)return c(b)}return null}a=new a(function(a){a.piiTranslator=m});a.piiTranslator=m;e.exports=a})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.identity");f.registerPlugin&&f.registerPlugin("fbevents.plugins.identity",e.exports);f.ensureModuleRegistered("fbevents.plugins.identity",function(){return e.exports})})()})(window,document,location,history);