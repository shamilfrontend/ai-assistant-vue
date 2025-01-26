import{o as T,c as P,a as D,d as R,b as S,u as U,e as I}from"./utils-81920b8e.js";function Z(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();var n=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof global<"u"&&global||{},l={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};function L(e){return e&&DataView.prototype.isPrototypeOf(e)}if(l.arrayBuffer)var j=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],C=ArrayBuffer.isView||function(e){return e&&j.indexOf(Object.prototype.toString.call(e))>-1};function p(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function b(e){return typeof e!="string"&&(e=String(e)),e}function w(e){var t={next:function(){var a=e.shift();return{done:a===void 0,value:a}}};return l.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(t,a){this.append(a,t)},this):Array.isArray(e)?e.forEach(function(t){if(t.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}o.prototype.append=function(e,t){e=p(e),t=b(t);var a=this.map[e];this.map[e]=a?a+", "+t:t};o.prototype.delete=function(e){delete this.map[p(e)]};o.prototype.get=function(e){return e=p(e),this.has(e)?this.map[e]:null};o.prototype.has=function(e){return this.map.hasOwnProperty(p(e))};o.prototype.set=function(e,t){this.map[p(e)]=b(t)};o.prototype.forEach=function(e,t){for(var a in this.map)this.map.hasOwnProperty(a)&&e.call(t,this.map[a],a,this)};o.prototype.keys=function(){var e=[];return this.forEach(function(t,a){e.push(a)}),w(e)};o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),w(e)};o.prototype.entries=function(){var e=[];return this.forEach(function(t,a){e.push([a,t])}),w(e)};l.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);function m(e){if(!e._noBody){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}}function E(e){return new Promise(function(t,a){e.onload=function(){t(e.result)},e.onerror=function(){a(e.error)}})}function F(e){var t=new FileReader,a=E(t);return t.readAsArrayBuffer(e),a}function H(e){var t=new FileReader,a=E(t),i=/charset=([A-Za-z0-9_-]+)/.exec(e.type),s=i?i[1]:"utf-8";return t.readAsText(e,s),a}function N(e){for(var t=new Uint8Array(e),a=new Array(t.length),i=0;i<t.length;i++)a[i]=String.fromCharCode(t[i]);return a.join("")}function B(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function x(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:l.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():l.arrayBuffer&&l.blob&&L(e)?(this._bodyArrayBuffer=B(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||C(e))?this._bodyArrayBuffer=B(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var e=m(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=m(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(l.blob)return this.blob().then(F);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var e=m(this);if(e)return e;if(this._bodyBlob)return H(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(N(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(G)}),this.json=function(){return this.text().then(JSON.parse)},this}var k=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function q(e){var t=e.toUpperCase();return k.indexOf(t)>-1?t:e}function v(e,t){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var a=t.body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!a&&e._bodyInit!=null&&(a=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new o(t.headers)),this.method=q(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in n){var r=new AbortController;return r.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&a)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(a),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+new Date().getTime());else{var s=/\?/;this.url+=(s.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})};function G(e){var t=new FormData;return e.trim().split("&").forEach(function(a){if(a){var i=a.split("="),s=i.shift().replace(/\+/g," "),r=i.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(r))}}),t}function M(e){var t=new o,a=e.replace(/\r?\n[\t ]+/g," ");return a.split("\r").map(function(i){return i.indexOf("\n")===0?i.substr(1,i.length):i}).forEach(function(i){var s=i.split(":"),r=s.shift().trim();if(r){var f=s.join(":").trim();try{t.append(r,f)}catch(y){console.warn("Response "+y.message)}}}),t}x.call(v.prototype);function d(e,t){if(!(this instanceof d))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}x.call(d.prototype);d.prototype.clone=function(){return new d(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})};d.error=function(){var e=new d(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var V=[301,302,303,307,308];d.redirect=function(e,t){if(V.indexOf(t)===-1)throw new RangeError("Invalid status code");return new d(null,{status:t,headers:{location:e}})};var h=n.DOMException;try{new h}catch(e){h=function(t,a){this.message=t,this.name=a;var i=Error(t);this.stack=i.stack},h.prototype=Object.create(Error.prototype),h.prototype.constructor=h}function O(e,t){return new Promise(function(a,i){var s=new v(e,t);if(s.signal&&s.signal.aborted)return i(new h("Aborted","AbortError"));var r=new XMLHttpRequest;function f(){r.abort()}r.onload=function(){var c={statusText:r.statusText,headers:M(r.getAllResponseHeaders()||"")};s.url.indexOf("file://")===0&&(r.status<200||r.status>599)?c.status=200:c.status=r.status,c.url="responseURL"in r?r.responseURL:c.headers.get("X-Request-URL");var u="response"in r?r.response:r.responseText;setTimeout(function(){a(new d(u,c))},0)},r.onerror=function(){setTimeout(function(){i(new TypeError("Network request failed"))},0)},r.ontimeout=function(){setTimeout(function(){i(new TypeError("Network request timed out"))},0)},r.onabort=function(){setTimeout(function(){i(new h("Aborted","AbortError"))},0)};function y(c){try{return c===""&&n.location.href?n.location.href:c}catch(u){return c}}if(r.open(s.method,y(s.url),!0),s.credentials==="include"?r.withCredentials=!0:s.credentials==="omit"&&(r.withCredentials=!1),"responseType"in r&&(l.blob?r.responseType="blob":l.arrayBuffer&&(r.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof o||n.Headers&&t.headers instanceof n.Headers)){var A=[];Object.getOwnPropertyNames(t.headers).forEach(function(c){A.push(p(c)),r.setRequestHeader(c,b(t.headers[c]))}),s.headers.forEach(function(c,u){A.indexOf(u)===-1&&r.setRequestHeader(u,c)})}else s.headers.forEach(function(c,u){r.setRequestHeader(u,c)});s.signal&&(s.signal.addEventListener("abort",f),r.onreadystatechange=function(){r.readyState===4&&s.signal.removeEventListener("abort",f)}),r.send(typeof s._bodyInit>"u"?null:s._bodyInit)})}O.polyfill=!0;n.fetch||(n.fetch=O,n.Headers=o,n.Request=v,n.Response=d);const _="/images/avtar/arthur.jpg",g="/images/avtar/ai.webp";const z=(e,t)=>{const a=e.__vccOpts||e;for(const[i,s]of t)a[i]=s;return a},Q={},$={class:"chat-page"};function X(e,t){return T(),P("div",$,t[0]||(t[0]=[D('<div class="chitchat-main" data-v-4664c0c5><div class="messages custom-scroll" data-v-4664c0c5><ul class="chatappend" data-v-4664c0c5><li class="message message_author sent" data-v-4664c0c5><div class="message__grid" data-v-4664c0c5><div class="message__profile" data-v-4664c0c5><img src="'+_+'" alt="Avatar" class="message__avatar" data-v-4664c0c5></div><div class="message__content" data-v-4664c0c5><h5 class="message__name" data-v-4664c0c5>Артур Хидирнабиев</h5><ul class="message__list" data-v-4664c0c5><li class="message__item" data-v-4664c0c5> Test </li></ul></div></div></li><li class="message message_bot replies" data-v-4664c0c5><div class="message__grid" data-v-4664c0c5><div class="message__profile" data-v-4664c0c5><img src="'+g+'" alt="Avatar" data-v-4664c0c5></div><div class="message__content" data-v-4664c0c5><h5 class="message__name" data-v-4664c0c5>AI Assistant</h5><ul class="message__list" data-v-4664c0c5><li class="message__item" data-v-4664c0c5> Test </li></ul></div></div></li><li class="message message_author sent" data-v-4664c0c5><div class="message__grid" data-v-4664c0c5><div class="message__profile" data-v-4664c0c5><img src="'+_+'" alt="Avatar" class="message__avatar" data-v-4664c0c5></div><div class="message__content" data-v-4664c0c5><h5 class="message__name" data-v-4664c0c5>Артур Хидирнабиев</h5><ul class="message__list" data-v-4664c0c5><li class="message__item" data-v-4664c0c5> Сделай описание на вакансию Senior Backend Developer на GO </li></ul></div></div></li><li class="message message_bot replies" data-v-4664c0c5><div class="message__grid" data-v-4664c0c5><div class="message__profile" data-v-4664c0c5><img src="'+g+'" alt="Avatar" data-v-4664c0c5></div><div class="message__content" data-v-4664c0c5><h5 class="message__name" data-v-4664c0c5>AI Assistant</h5><ul class="message__list" data-v-4664c0c5><li class="message__item" data-v-4664c0c5><div class="markdown-body" data-v-4664c0c5><p data-v-4664c0c5><strong data-v-4664c0c5>Описание вакансии: Senior Backend Developer (Go)</strong></p><p data-v-4664c0c5><strong data-v-4664c0c5>Местоположение:</strong> [Ваш город/удаленная работа] </p><p data-v-4664c0c5><strong data-v-4664c0c5>О компании:</strong><br data-v-4664c0c5> [Краткое описание вашей компании, ее миссии, целей и ключевых проектов. Возможно, упоминание о команде или технологиях, с которыми работаете.] </p><p data-v-4664c0c5><strong data-v-4664c0c5>Обязанности:</strong></p><ul data-v-4664c0c5><li data-v-4664c0c5>Разработка и поддержка высоконагруженных серверных приложений на Go. </li><li data-v-4664c0c5>Оптимизация существующих систем и архитектуры для повышения производительности и масштабируемости. </li><li data-v-4664c0c5>Участие в проектировании новых функциональных возможностей и интеграций. </li><li data-v-4664c0c5>Работа с реляционными и нереляционными базами данных, включая PostgreSQL, MongoDB и другие. </li><li data-v-4664c0c5>Написание чистого, поддерживаемого кода и разработка тестов для обеспечения его качества. </li><li data-v-4664c0c5>Сотрудничество с командами разработки, тестирования и операционной поддержки для достижения общих целей проекта. </li><li data-v-4664c0c5>Участие в код-ревью и передача знаний другим членам команды.</li></ul><p data-v-4664c0c5><strong data-v-4664c0c5>Требования:</strong></p><ul data-v-4664c0c5><li data-v-4664c0c5>Опыт работы на позиции Backend Developer не менее 5 лет.</li><li data-v-4664c0c5>Уверенное владение языком программирования Go и его экосистемой. </li><li data-v-4664c0c5>Знание принципов микросервисной архитектуры и опыт работы с контейнерами (Docker/Kubernetes). </li><li data-v-4664c0c5>Опыт работы с API (RESTful, GraphQL) и опыт интеграции с внешними системами. </li><li data-v-4664c0c5>Знание основных принципов проектирования баз данных и опыт работы с SQL и NoSQL решениями. </li><li data-v-4664c0c5>Опыт работы с системами контроля версий (Git).</li><li data-v-4664c0c5>Способность работать в команде и эффективно общаться как с техническими, так и с нетехническими специалистами. </li></ul><p data-v-4664c0c5><strong data-v-4664c0c5>Будет преимуществом:</strong></p><ul data-v-4664c0c5><li data-v-4664c0c5>Опыт работы с облачными платформами (AWS, GCP, Azure).</li><li data-v-4664c0c5>Знания в области DevOps и CI/CD практик.</li><li data-v-4664c0c5>Участие в open-source проектах.</li></ul><p data-v-4664c0c5><strong data-v-4664c0c5>Что мы предлагаем:</strong></p><ul data-v-4664c0c5><li data-v-4664c0c5>Конкурентоспособная заработная плата и бонусная система.</li><li data-v-4664c0c5>Гибкий график работы и возможность удаленной работы.</li><li data-v-4664c0c5>Участие в интересных и значимых проектах с использованием современных технологий. </li><li data-v-4664c0c5>Дружелюбная атмосфера и поддержка коллег.</li><li data-v-4664c0c5>Возможности для профессионального роста и обучения.</li></ul></div></li></ul></div></div></li><li class="message message_author sent" data-v-4664c0c5><div class="message__grid" data-v-4664c0c5><div class="message__profile" data-v-4664c0c5><img src="'+_+'" alt="Avatar" class="message__avatar" data-v-4664c0c5></div><div class="message__content" data-v-4664c0c5><h5 class="message__name" data-v-4664c0c5>Артур Хидирнабиев</h5><ul class="message__list" data-v-4664c0c5><li class="message__item" data-v-4664c0c5> Loading </li></ul></div></div></li><li class="message message_bot replies" data-v-4664c0c5><div class="message__grid" data-v-4664c0c5><div class="message__profile" data-v-4664c0c5><img src="'+g+'" alt="Avatar" data-v-4664c0c5></div><div class="message__content" data-v-4664c0c5><h5 class="message__name" data-v-4664c0c5>AI Assistant</h5><ul class="message__list" data-v-4664c0c5><li class="message__item" data-v-4664c0c5><div class="type" data-v-4664c0c5><div class="typing-loader" data-v-4664c0c5></div></div></li></ul></div></div></li></ul></div><div class="message-input" data-v-4664c0c5><div class="message-input__inner" data-v-4664c0c5><input class="setemoj" id="setemoj" type="text" placeholder="Текст сообщения..." autocomplete="off" data-v-4664c0c5><button type="button" class="btn btn-primary" data-v-4664c0c5><i class="fa fa-send" data-v-4664c0c5></i></button></div></div></div>',1)]))}const K=z(Q,[["render",X],["__scopeId","data-v-4664c0c5"]]),J=R({__name:"App",setup(e){return(t,a)=>(T(),S(U(K)))}});const W=async()=>{I(J).mount("#app")};W();export{Z as __vite_legacy_guard};
