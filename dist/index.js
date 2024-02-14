"use strict";var m=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var y=m(function(F,c){
var O=require('@stdlib/math-base-special-floor/dist'),q=3;function b(u,r,i){var n,a,e,v,f,o;if(u<=0)return r;if(f=O(u/2),i===1){if(v=f%q,e=u-1,v>0)for(a=0;a<v;a++)n=r[a],r[a]=r[e],r[e]=n,e-=1;if(f<q)return r;for(a=v;a<f;a+=q)n=r[a],r[a]=r[e],r[e]=n,n=r[a+1],r[a+1]=r[e-1],r[e-1]=n,n=r[a+2],r[a+2]=r[e-2],r[e-2]=n,e-=q;return r}for(i<0?a=(1-u)*i:a=0,e=a+(u-1)*i,o=0;o<f;o++)n=r[a],r[a]=r[e],r[e]=n,a+=i,e-=i;return r}c.exports=b
});var j=m(function(G,l){
var g=require('@stdlib/math-base-special-floor/dist'),s=3;function h(u,r,i,n){var a,e,v,f,o,t;if(u<=0)return r;if(o=g(u/2),e=n,i===1){if(f=o%s,v=e+u-1,f>0)for(t=0;t<f;t++)a=r[e],r[e]=r[v],r[v]=a,e+=i,v-=i;if(o<s)return r;for(t=f;t<o;t+=s)a=r[e],r[e]=r[v],r[v]=a,a=r[e+1],r[e+1]=r[v-1],r[v-1]=a,a=r[e+2],r[e+2]=r[v-2],r[v-2]=a,e+=s,v-=s;return r}for(v=e+(u-1)*i,t=0;t<o;t++)a=r[e],r[e]=r[v],r[v]=a,e+=i,v-=i;return r}l.exports=h
});var _=m(function(H,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=y(),w=j();k(M,"ndarray",w);R.exports=M
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),p,E=A(z(__dirname,"./native.js"));B(E)?p=C:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
