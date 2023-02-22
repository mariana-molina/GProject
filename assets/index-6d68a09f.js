(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var j=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,_=/\\([\u000b\u0020-\u00ff])/g,W=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Y=Z;function Z(e){if(!e)throw new TypeError("argument string is required");var t=typeof e=="object"?L(e):e;if(typeof t!="string")throw new TypeError("argument string is required to be a string");var r=t.indexOf(";"),n=r!==-1?t.slice(0,r).trim():t.trim();if(!W.test(n))throw new TypeError("invalid media type");var o=new ee(n.toLowerCase());if(r!==-1){var a,i,s;for(j.lastIndex=r;i=j.exec(t);){if(i.index!==r)throw new TypeError("invalid parameter format");r+=i[0].length,a=i[1].toLowerCase(),s=i[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==-1&&(s=s.replace(_,"$1"))),o.parameters[a]=s}if(r!==t.length)throw new TypeError("invalid parameter format")}return o}function L(e){var t;if(typeof e.getHeader=="function"?t=e.getHeader("content-type"):typeof e.headers=="object"&&(t=e.headers&&e.headers["content-type"]),typeof t!="string")throw new TypeError("content-type header is missing from object");return t}function ee(e){this.parameters=Object.create(null),this.type=e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var te=S(function(e){return typeof e=="string"?e:null}),f=function(t){return t!=null};function S(e){return function(t){return f(e(t))}}var re=function(t){return t.length>0},m=function(t){return Object.keys(t).reduce(function(r,n){var o,a=t[n];return u({},r,f(a)?(o={},o[n]=a,o):{})},{})};function O(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.length-1;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];for(var s=t[0].apply(this,a),v=1;v<=n;v++)s=t[v].call(this,s);return s}}var ne=S(function(e){return f(e)&&typeof e=="object"&&!Array.isArray(e)?e:null}),oe=S(function(e){return Array.isArray(e)&&e.every(te)&&re(e)?e:null}),ae=S(function(e){return ne(e)&&"errors"in e&&oe(e.errors)?{errors:e.errors}:null}),ie=function(t){return ae(t)?{errors:t.errors,source:"api"}:{errors:["Responded with a status code outside the 2xx range, and the response body is not recognisable."],source:"decoding"}},E=function(t){this.message=t},se="content-type",ce="application/json",ue=function(t){var r=t.headers.get(se);return f(r)&&Y(r).type===ce},N=function(t){if(ue(t))return t.json().catch(function(r){throw new E("unable to parse JSON response.")});throw new E("expected JSON response from server.")},he=function(t){return function(r){return(r.ok?t({response:r}).then(function(n){return{type:"success",status:r.status,response:n,originalResponse:r}}):N(r).then(function(n){return u({type:"error",status:r.status},ie(n),{originalResponse:r})})).catch(function(n){if(n instanceof E)return{type:"error",source:"decoding",status:r.status,originalResponse:r,errors:[n.message]};throw n})}},l=function(){return function(t){var r=t.response;return N(r)}},le=function(t){return function(r){Object.keys(t).forEach(function(n){return r.searchParams.set(n,t[n].toString())})}},de=function(t){return function(r){r.pathname==="/"?r.pathname=t:r.pathname+=t}},pe=function(t){var r=t.pathname,n=t.query;return function(o){var a=new URL(o);return de(r)(a),le(n)(a),a.toString()}},me=function(t){var r={};return t.forEach(function(n,o){r[o]=n}),r},fe=function(t){var r=new URL(t),n=r.pathname,o=r.searchParams,a=me(o);return{query:a,pathname:n==="/"?void 0:n}},h=function(t){return function(r,n){n===void 0&&(n={});var o=t(r),a=o.headers,i=o.query,s=d(o,["headers","query"]);return u({},s,n,{query:i,headers:u({},a,n.headers)})}},c=function(t){return t},ve=function(t){var r=t.accessKey,n=t.apiVersion,o=n===void 0?"v1":n,a=t.apiUrl,i=a===void 0?"https://api.unsplash.com":a,s=t.headers,v=t.fetch,T=d(t,["accessKey","apiVersion","apiUrl","headers","fetch"]);return function(C){var B=C.handleResponse,D=C.handleRequest;return O(D,function(P){var M=P.pathname,z=P.query,F=P.method,K=F===void 0?"GET":F,k=P.headers,G=P.body,V=P.signal,J=pe({pathname:M,query:z})(i),Q=u({method:K,headers:u({},s,k,{"Accept-Version":o},f(r)?{Authorization:"Client-ID "+r}:{}),body:G,signal:V},T),X=v??fetch;return X(J,Q).then(he(B))})}},A="x-total",ye=function(t){var r=t.headers.get(A);if(f(r)){var n=parseInt(r);if(Number.isInteger(n))return n;throw new E("expected "+A+" header to be valid integer.")}else throw new E("expected "+A+" header to exist.")},y=function(){return function(t){var r=t.response;return l()({response:r}).then(function(n){return{results:n,total:ye(r)}})}},x=function(t){return f(t)?{collections:t.join()}:{}},Pe=function(t){return f(t)?{topics:t.join()}:{}},p=function(t){var r=t.page,n=t.perPage,o=t.orderBy;return m({per_page:n,order_by:o,page:r})},w="/collections",Ie=function(){var e=function(r){var n=r.collectionId;return w+"/"+n+"/photos"};return c({getPathname:e,handleRequest:h(function(t){var r=t.collectionId,n=t.orientation,o=d(t,["collectionId","orientation"]);return{pathname:e({collectionId:r}),query:m(u({},p(o),{orientation:n}))}}),handleResponse:y()})}(),Ee=function(){var e=function(r){var n=r.collectionId;return w+"/"+n};return c({getPathname:e,handleRequest:h(function(t){var r=t.collectionId;return{pathname:e({collectionId:r}),query:{}}}),handleResponse:l()})}(),Re=function(){var e=function(){return w};return c({getPathname:e,handleRequest:h(function(t){return t===void 0&&(t={}),{pathname:e(),query:p(t)}}),handleResponse:y()})}(),qe=function(){var e=function(r){var n=r.collectionId;return w+"/"+n+"/related"};return c({getPathname:e,handleRequest:h(function(t){var r=t.collectionId;return{pathname:e({collectionId:r}),query:{}}}),handleResponse:l()})}(),R="/photos",Se=function(){var e=function(){return R};return c({getPathname:function(r){return e()},handleRequest:h(function(t){return t===void 0&&(t={}),{pathname:R,query:m(p(t))}}),handleResponse:y()})}(),we=function(){var e=function(r){var n=r.photoId;return R+"/"+n};return c({getPathname:e,handleRequest:h(function(t){var r=t.photoId;return{pathname:e({photoId:r}),query:{}}}),handleResponse:l()})}(),be=function(){var e=function(r){var n=r.photoId;return R+"/"+n+"/statistics"};return c({getPathname:e,handleRequest:h(function(t){var r=t.photoId;return{pathname:e({photoId:r}),query:{}}}),handleResponse:l()})}(),Te=function(){var e=function(){return R+"/random"};return c({getPathname:e,handleRequest:h(function(t){var r=t===void 0?{}:t,n=r.collectionIds,o=r.contentFilter,a=r.topicIds,i=d(r,["collectionIds","contentFilter","topicIds"]);return{pathname:e(),query:m(u({},i,{content_filter:o},x(n),Pe(a))),headers:{"cache-control":"no-cache"}}}),handleResponse:l()})}(),Ae={handleRequest:h(function(e){var t=e.downloadLocation,r=fe(t),n=r.pathname,o=r.query;if(!f(n))throw new Error("Could not parse pathname from url.");return{pathname:n,query:m(o)}}),handleResponse:l()},H="/search",Oe=function(){var e=function(){return H+"/photos"};return c({getPathname:function(r){return e()},handleRequest:h(function(t){var r=t.query,n=t.page,o=t.perPage,a=t.orderBy,i=t.collectionIds,s=t.lang,v=t.contentFilter,T=d(t,["query","page","perPage","orderBy","collectionIds","lang","contentFilter"]);return{pathname:e(),query:m(u({query:r,content_filter:v,lang:s,order_by:a},p({page:n,perPage:o}),x(i),T))}}),handleResponse:l()})}(),He=function(){var e=function(){return H+"/collections"};return c({getPathname:function(r){return e()},handleRequest:h(function(t){var r=t.query,n=d(t,["query"]);return{pathname:e(),query:u({query:r},p(n))}}),handleResponse:l()})}(),Ce=function(){var e=function(){return H+"/users"};return c({getPathname:function(r){return e()},handleRequest:h(function(t){var r=t.query,n=d(t,["query"]);return{pathname:e(),query:u({query:r},p(n))}}),handleResponse:l()})}(),b="/users",Fe=function(){var e=function(r){var n=r.username;return b+"/"+n};return c({getPathname:e,handleRequest:h(function(t){var r=t.username;return{pathname:e({username:r}),query:{}}}),handleResponse:l()})}(),je=function(){var e=function(r){var n=r.username;return b+"/"+n+"/photos"};return c({getPathname:e,handleRequest:h(function(t){var r=t.username,n=t.stats,o=t.orientation,a=d(t,["username","stats","orientation"]);return{pathname:e({username:r}),query:m(u({},p(a),{orientation:o,stats:n}))}}),handleResponse:y()})}(),Ue=function(){var e=function(r){var n=r.username;return b+"/"+n+"/likes"};return c({getPathname:e,handleRequest:h(function(t){var r=t.username,n=t.orientation,o=d(t,["username","orientation"]);return{pathname:e({username:r}),query:m(u({},p(o),{orientation:n}))}}),handleResponse:y()})}(),ge=function(){var e=function(r){var n=r.username;return b+"/"+n+"/collections"};return c({getPathname:e,handleRequest:h(function(t){var r=t.username,n=d(t,["username"]);return{pathname:e({username:r}),query:p(n)}}),handleResponse:y()})}(),$="/topics",q=function(t){var r=t.topicIdOrSlug;return $+"/"+r},Ne=c({getPathname:q,handleRequest:function(t){var r=t.page,n=t.perPage,o=t.orderBy,a=t.topicIdsOrSlugs;return{pathname:$,query:m(u({},p({page:r,perPage:n}),{ids:a==null?void 0:a.join(","),order_by:o}))}},handleResponse:y()}),xe=c({getPathname:q,handleRequest:function(t){var r=t.topicIdOrSlug;return{pathname:q({topicIdOrSlug:r}),query:{}}},handleResponse:l()}),$e=function(){var e=O(q,function(t){return t+"/photos"});return c({getPathname:e,handleRequest:function(r){var n=r.topicIdOrSlug,o=r.orientation,a=d(r,["topicIdOrSlug","orientation"]);return{pathname:e({topicIdOrSlug:n}),query:m(u({},p(a),{orientation:o}))}},handleResponse:y()})}(),U;(function(e){e.Afrikaans="af",e.Amharic="am",e.Arabic="ar",e.Azerbaijani="az",e.Belarusian="be",e.Bulgarian="bg",e.Bengali="bn",e.Bosnian="bs",e.Catalan="ca",e.Cebuano="ceb",e.Corsican="co",e.Czech="cs",e.Welsh="cy",e.Danish="da",e.German="de",e.Greek="el",e.English="en",e.Esperanto="eo",e.Spanish="es",e.Estonian="et",e.Basque="eu",e.Persian="fa",e.Finnish="fi",e.French="fr",e.Frisian="fy",e.Irish="ga",e.ScotsGaelic="gd",e.Galician="gl",e.Gujarati="gu",e.Hausa="ha",e.Hawaiian="haw",e.Hindi="hi",e.Hmong="hmn",e.Croatian="hr",e.HaitianCreole="ht",e.Hungarian="hu",e.Armenian="hy",e.Indonesian="id",e.Igbo="ig",e.Icelandic="is",e.Italian="it",e.Hebrew="iw",e.Japanese="ja",e.Javanese="jw",e.Georgian="ka",e.Kazakh="kk",e.Khmer="km",e.Kannada="kn",e.Korean="ko",e.Kurdish="ku",e.Kyrgyz="ky",e.Latin="la",e.Luxembourgish="lb",e.Lao="lo",e.Lithuanian="lt",e.Latvian="lv",e.Malagasy="mg",e.Maori="mi",e.Macedonian="mk",e.Malayalam="ml",e.Mongolian="mn",e.Marathi="mr",e.Malay="ms",e.Maltese="mt",e.Myanmar="my",e.Nepali="ne",e.Dutch="nl",e.Norwegian="no",e.Nyanja="ny",e.Oriya="or",e.Punjabi="pa",e.Polish="pl",e.Pashto="ps",e.Portuguese="pt",e.Romanian="ro",e.Russian="ru",e.Kinyarwanda="rw",e.Sindhi="sd",e.Sinhala="si",e.Slovak="sk",e.Slovenian="sl",e.Samoan="sm",e.Shona="sn",e.Somali="so",e.Albanian="sq",e.Serbian="sr",e.Sesotho="st",e.Sundanese="su",e.Swedish="sv",e.Swahili="sw",e.Tamil="ta",e.Telugu="te",e.Tajik="tg",e.Thai="th",e.Turkmen="tk",e.Filipino="tl",e.Turkish="tr",e.Tatar="tt",e.Uighur="ug",e.Ukrainian="uk",e.Urdu="ur",e.Uzbek="uz",e.Vietnamese="vi",e.Xhosa="xh",e.Yiddish="yi",e.Yoruba="yo",e.ChineseSimplified="zh",e.ChineseTraditional="zh-TW",e.Zulu="zu"})(U||(U={}));var g;(function(e){e.LATEST="latest",e.POPULAR="popular",e.VIEWS="views",e.DOWNLOADS="downloads",e.OLDEST="oldest"})(g||(g={}));var Be=O(ve,function(e){return{photos:{get:e(we),list:e(Se),getStats:e(be),getRandom:e(Te),trackDownload:e(Ae)},users:{getPhotos:e(je),getCollections:e(ge),getLikes:e(Ue),get:e(Fe)},search:{getCollections:e(He),getPhotos:e(Oe),getUsers:e(Ce)},collections:{getPhotos:e(Ie),get:e(Ee),list:e(Re),getRelated:e(qe)},topics:{list:e(Ne),get:e(xe),getPhotos:e($e)}}});let I={searchHistory:["dogs","babies"],currentSearch:"cat"};const De=e=>{I={...I,...e},window.dispatchEvent(new Event("statechange"))},Me=Be({accessKey:"O3jf0Le_tBem9sMo0Y2Nlis9VKNAVqEsTDPUzZWetb4"}),ze=document.getElementById("searchButton");ze.addEventListener("click",()=>{const t=document.getElementById("searchText").value;I.searchHistory.push(t),De({searchHistory:I.searchHistory,currentSearch:t})});const Ke=async e=>await Me.search.getPhotos({query:e,orientation:"landscape"}).then(r=>r),ke=async()=>{var r;const e=await Ke(I.currentSearch),t=document.querySelector("#app");t.innerHTML="",(r=e.response)==null||r.results.forEach(n=>{const o=document.createElement("img");o.setAttribute("src",n.urls.small),o.setAttribute("alt",n.alt_description||"no information for this image"),document.querySelector("#app").append(o)})},Ge=()=>{const e=document.getElementById("searchText");e==null||e.addEventListener("focus",()=>{const t=document.getElementById("suggestionList");t.innerHTML="",I.searchHistory.forEach(r=>{const n=document.createElement("li");n.innerHTML=r,t.append(n)})})};Ge();window.addEventListener("statechange",()=>{ke()});