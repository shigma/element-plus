import{d as _,p as r,q as u,e as d,t as m,f as i,g as c,B as s,F as v}from"./framework.6504b2a8.js";const f=_({setup(p){const e=r("rgba(19, 206, 102, 0.8)");return(t,a)=>{const l=u("el-color-picker");return d(),m(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),"show-alpha":""},null,8,["modelValue"])}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const V={class:"demo-color-block"},b=c("span",{class:"demonstration"},"With default value",-1),g={class:"demo-color-block"},k=c("span",{class:"demonstration"},"With no default value",-1),y=_({setup(p){const e=r("#409EFF"),t=r();return(a,l)=>{const o=u("el-color-picker");return d(),i(v,null,[c("div",V,[b,s(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n)},null,8,["modelValue"])]),c("div",g,[k,s(o,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=n=>t.value=n)},null,8,["modelValue"])])],64)}}});var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const z=_({setup(p){const e=r("rgba(255, 69, 0, 0.68)"),t=r(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(a,l)=>{const o=u("el-color-picker");return d(),m(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),"show-alpha":"",predefine:t.value},null,8,["modelValue","predefine"])}}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const S={class:"demo-color-sizes"},x=_({setup(p){const e=r("409EFF");return(t,a)=>{const l=u("el-color-picker");return d(),i("div",S,[s(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),size:"large"},null,8,["modelValue"]),s(l,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o)},null,8,["modelValue"]),s(l,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o),size:"small"},null,8,["modelValue"])])}}});var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});export{F as _,h as a,j as b,B as c};
