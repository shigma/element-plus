import{N as m,W as y,aD as w}from"./framework.6504b2a8.js";const P=(e,t)=>{if(e.install=l=>{for(const o of[e,...Object.values(t!=null?t:{})])l.component(o.name,o)},t)for(const[l,o]of Object.entries(t))e[l]=o;return e},h=(e,t)=>(e.install=l=>{l.config.globalProperties[t]=e},e),S=e=>(e.install=m,e);function O(e){for(var t=-1,l=e==null?0:e.length,o={};++t<l;){var a=e[t];o[a[0]]=a[1]}return o}var g=O;const u=Symbol(),f=Symbol();function v(e,t){if(!y(e)||!!e[f])return e;const{values:l,required:o,default:a,type:n,validator:i}=e,d=l||i?c=>{let s=!1,r=[];if(l&&(r=[...l,a],s||(s=r.includes(c))),i&&(s||(s=i(c))),!s&&r.length>0){const p=[...new Set(r)].map(b=>JSON.stringify(b)).join(", ");w(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`)}return s}:void 0;return{type:typeof n=="object"&&Object.getOwnPropertySymbols(n).includes(u)?n[u]:n,required:!!o,default:a,validator:d,[f]:!0}}const N=e=>g(Object.entries(e).map(([t,l])=>[t,v(l,t)])),I=e=>({[u]:e}),$=e=>Object.keys(e),k=e=>e,V=["large","default","small"];export{S as a,N as b,V as c,I as d,v as e,g as f,h as g,$ as k,k as m,P as w};
