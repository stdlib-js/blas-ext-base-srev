// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,u=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};var f=e;var c=Math.floor;function _(r,e,t){var o,n,a,i,u,l;if(r<=0)return e;if(u=c(r/2),1===t){if(a=r-1,(i=u%3)>0)for(n=0;n<i;n++)o=e[n],e[n]=e[a],e[a]=o,a-=1;if(u<3)return e;for(n=i;n<u;n+=3)o=e[n],e[n]=e[a],e[a]=o,o=e[n+1],e[n+1]=e[a-1],e[a-1]=o,o=e[n+2],e[n+2]=e[a-2],e[a-2]=o,a-=3;return e}for(a=(n=t<0?(1-r)*t:0)+(r-1)*t,l=0;l<u;l++)o=e[n],e[n]=e[a],e[a]=o,n+=t,a-=t;return e}function p(r,e,t,o){var n,a,i,u,l,f;if(r<=0)return e;if(l=c(r/2),a=o,1===t){if(i=a+r-1,(u=l%3)>0)for(f=0;f<u;f++)n=e[a],e[a]=e[i],e[i]=n,a+=t,i-=t;if(l<3)return e;for(f=u;f<l;f+=3)n=e[a],e[a]=e[i],e[i]=n,n=e[a+1],e[a+1]=e[i-1],e[i-1]=n,n=e[a+2],e[a+2]=e[i-2],e[i-2]=n,a+=3,i-=3;return e}for(i=a+(r-1)*t,f=0;f<l;f++)n=e[a],e[a]=e[i],e[i]=n,a+=t,i-=t;return e}f(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p});export{_ as default,p as ndarray};
//# sourceMappingURL=mod.js.map
