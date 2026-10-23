"use strict";var f=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=f(function(D,p){
var M=require('@stdlib/math-base-special-floor/dist'),s=3;function O(u,r,i,E){var v,e,a,o,n,t;if(u<=0)return r;if(n=M(u/2),e=E,i===1){if(o=n%s,a=e+u-1,o>0)for(t=0;t<o;t++)v=r[e],r[e]=r[a],r[a]=v,e+=i,a-=i;if(n<s)return r;for(t=o;t<n;t+=s)v=r[e],r[e]=r[a],r[a]=v,v=r[e+1],r[e+1]=r[a-1],r[a-1]=v,v=r[e+2],r[e+2]=r[a-2],r[a-2]=v,e+=s,a-=s;return r}for(a=e+(u-1)*i,t=0;t<n;t++)v=r[e],r[e]=r[a],r[a]=v,e+=i,a-=i;return r}p.exports=O
});var m=f(function(F,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),d=q();function g(u,r,i){return d(u,r,i,b(u,i))}y.exports=g
});var R=f(function(G,l){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),k=q();h(j,"ndarray",k);l.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,_=z(w(__dirname,"./native.js"));A(_)?c=B:c=_;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
