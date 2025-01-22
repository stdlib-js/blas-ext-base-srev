"use strict";var f=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var q=f(function(D,p){
var M=require('@stdlib/math-base-special-floor/dist'),s=3;function O(v,r,u,E){var i,e,a,o,n,t;if(v<=0)return r;if(n=M(v/2),e=E,u===1){if(o=n%s,a=e+v-1,o>0)for(t=0;t<o;t++)i=r[e],r[e]=r[a],r[a]=i,e+=u,a-=u;if(n<s)return r;for(t=o;t<n;t+=s)i=r[e],r[e]=r[a],r[a]=i,i=r[e+1],r[e+1]=r[a-1],r[a-1]=i,i=r[e+2],r[e+2]=r[a-2],r[a-2]=i,e+=s,a-=s;return r}for(a=e+(v-1)*u,t=0;t<n;t++)i=r[e],r[e]=r[a],r[a]=i,e+=u,a-=u;return r}p.exports=O
});var m=f(function(F,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),d=q();function g(v,r,u){return d(v,r,u,b(v,u))}y.exports=g
});var R=f(function(G,l){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),k=q();h(j,"ndarray",k);l.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,_=z(w(__dirname,"./native.js"));A(_)?c=B:c=_;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
