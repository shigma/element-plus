import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{q as a,e as r,t as k,u as s,f as n,U as i,F as _,g as c,A as m,d as y,p as u,o as V,B as d,z as T}from"./framework.6504b2a8.js";const $={};function B(b,l){const o=a("el-scrollbar");return r(),k(o,{height:"400px"},{default:s(()=>[(r(),n(_,null,i(20,e=>c("p",{key:e,class:"scrollbar-demo-item"},m(e),1)),64))]),_:1})}var C=S($,[["render",B]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const M={},O={class:"flex-content"};function R(b,l){const o=a("el-scrollbar");return r(),k(o,null,{default:s(()=>[c("div",O,[(r(),n(_,null,i(50,e=>c("p",{key:e,class:"scrollbar-demo-item"},m(e),1)),64))])]),_:1})}var w=S(M,[["render",R]]),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const D=y({setup(b){const l=u(0),o=u(0),e=u(),v=u();V(()=>{l.value=e.value.clientHeight-380});const x=t=>{v.value.setScrollTop(t)},p=({scrollTop:t})=>{o.value=t},g=t=>`${t} px`;return(t,h)=>{const j=a("el-scrollbar"),z=a("el-slider");return r(),n(_,null,[d(j,{ref_key:"scrollbarRef",ref:v,height:"400px",always:"",onScroll:p},{default:s(()=>[c("div",{ref_key:"innerRef",ref:e},[(r(),n(_,null,i(20,f=>c("p",{key:f,class:"scrollbar-demo-item"},m(f),1)),64))],512)]),_:1},512),d(z,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=f=>o.value=f),max:l.value,"format-tooltip":g,onInput:x},null,8,["modelValue","max"])],64)}}});var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const I=T("Add Item"),N=T("Delete Item"),U=y({setup(b){const l=u(3),o=()=>{l.value++},e=()=>{l.value>0&&l.value--};return(v,x)=>{const p=a("el-button"),g=a("el-scrollbar");return r(),n(_,null,[d(p,{onClick:o},{default:s(()=>[I]),_:1}),d(p,{onClick:e},{default:s(()=>[N]),_:1}),d(g,{"max-height":"400px"},{default:s(()=>[(r(!0),n(_,null,i(l.value,t=>(r(),n("p",{key:t,class:"scrollbar-demo-item"},m(t),1))),128))]),_:1})],64)}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});export{q as _,E as a,H as b,L as c};
