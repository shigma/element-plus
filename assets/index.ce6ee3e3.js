var _=Object.defineProperty,q=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var j=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))W.call(t,o)&&j(e,o,t[o]);if($)for(var o of $(t))Z.call(t,o)&&j(e,o,t[o]);return e},E=(e,t)=>q(e,U(t));import{b as G,d as v,g as K}from"./props.f92e1f47.js";import{v as B,a as J,T as Q,r as I}from"./framework.39f5a22f.js";import{E as k,P as R}from"./popup-manager.2621cba3.js";import{u as X}from"./index.9a81e103.js";import{E as Y,n as x,T as L}from"./icon.f15c71db.js";import{d as ee,p as te,c as p,o as oe,q as z,e as d,t as g,u as S,v as H,g as m,j as P,x as ne,y as C,A as F,k as A,h as se,f as D,F as ie,B as O,ab as w}from"./framework.6504b2a8.js";import{a as ae,i as le}from"./index.7ac00024.js";const V=["success","info","warning","error"],re=G({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:v([String,Object]),default:""},id:{type:String,default:""},message:{type:v([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:v(Function),default:()=>{}},onClose:{type:v(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...V,""],default:""},zIndex:{type:Number,default:0}}),fe={destroy:()=>!0};var M=ee({name:"ElNotification",components:y({ElIcon:Y},x),props:re,emits:fe,setup(e){const t=te(!1);let o;const i=p(()=>{const u=e.type;return u&&L[e.type]?`el-notification--${u}`:""}),f=p(()=>L[e.type]||e.icon||""),l=p(()=>e.position.endsWith("right")?"right":"left"),s=p(()=>e.position.startsWith("top")?"top":"bottom"),c=p(()=>({[s.value]:`${e.offset}px`,zIndex:e.zIndex}));function n(){e.duration>0&&({stop:o}=ae(()=>{t.value&&a()},e.duration))}function r(){o==null||o()}function a(){t.value=!1}function T({code:u}){u===k.delete||u===k.backspace?r():u===k.esc?t.value&&a():n()}return oe(()=>{n(),t.value=!0}),X(document,"keydown",T),{horizontalClass:l,typeClass:i,iconComponent:f,positionStyle:c,visible:t,close:a,clearTimer:r,startTimer:n}}});const ce=["id"],ue={class:"el-notification__group"},de=["textContent"],pe={key:0},me=["innerHTML"];function ye(e,t,o,i,f,l){const s=z("el-icon"),c=z("close");return d(),g(Q,{name:"el-notification-fade",onBeforeLeave:e.onClose,onAfterLeave:t[3]||(t[3]=n=>e.$emit("destroy"))},{default:S(()=>[H(m("div",{id:e.id,class:P(["el-notification",e.customClass,e.horizontalClass]),style:A(e.positionStyle),role:"alert",onMouseenter:t[0]||(t[0]=(...n)=>e.clearTimer&&e.clearTimer(...n)),onMouseleave:t[1]||(t[1]=(...n)=>e.startTimer&&e.startTimer(...n)),onClick:t[2]||(t[2]=(...n)=>e.onClick&&e.onClick(...n))},[e.iconComponent?(d(),g(s,{key:0,class:P(["el-notification__icon",e.typeClass])},{default:S(()=>[(d(),g(ne(e.iconComponent)))]),_:1},8,["class"])):C("v-if",!0),m("div",ue,[m("h2",{class:"el-notification__title",textContent:F(e.title)},null,8,de),H(m("div",{class:"el-notification__content",style:A(e.title?void 0:{margin:0})},[se(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(d(),D(ie,{key:1},[C(" Caution here, message could've been compromized, nerver use user's input as message "),C(" eslint-disable-next-line "),m("p",{innerHTML:e.message},null,8,me)],2112)):(d(),D("p",pe,F(e.message),1))])],4),[[B,e.message]]),e.showClose?(d(),g(s,{key:0,class:"el-notification__closeBtn",onClick:J(e.close,["stop"])},{default:S(()=>[O(c)]),_:1},8,["onClick"])):C("v-if",!0)])],46,ce),[[B,e.visible]])]),_:3},8,["onBeforeLeave"])}M.render=ye;M.__file="packages/components/notification/src/notification.vue";const h={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},N=16;let ve=1;const b=function(e={}){if(!le)return{close:()=>{}};(typeof e=="string"||w(e))&&(e={message:e});const t=e.position||"top-right";let o=e.offset||0;h[t].forEach(({vm:r})=>{var a;o+=(((a=r.el)==null?void 0:a.offsetHeight)||0)+N}),o+=N;const i=`notification_${ve++}`,f=e.onClose,l=E(y({zIndex:R.nextZIndex(),offset:o},e),{id:i,onClose:()=>{ge(i,t,f)}});let s=document.body;e.appendTo instanceof HTMLElement?s=e.appendTo:typeof e.appendTo=="string"&&(s=document.querySelector(e.appendTo)),s instanceof HTMLElement||(s=document.body);const c=document.createElement("div"),n=O(M,l,w(l.message)?{default:()=>l.message}:null);return n.props.onDestroy=()=>{I(null,c)},I(n,c),h[t].push({vm:n}),s.appendChild(c.firstElementChild),{close:()=>{n.component.proxy.visible=!1}}};V.forEach(e=>{b[e]=(t={})=>((typeof t=="string"||w(t))&&(t={message:t}),b(E(y({},t),{type:e})))});function ge(e,t,o){const i=h[t],f=i.findIndex(({vm:r})=>{var a;return((a=r.component)==null?void 0:a.props.id)===e});if(f===-1)return;const{vm:l}=i[f];if(!l)return;o==null||o(l);const s=l.el.offsetHeight,c=t.split("-")[0];i.splice(f,1);const n=i.length;if(!(n<1))for(let r=f;r<n;r++){const{el:a,component:T}=i[r].vm,u=parseInt(a.style[c],10)-s-N;T.props.offset=u}}function Ce(){for(const e of Object.values(h))e.forEach(({vm:t})=>{t.component.proxy.visible=!1})}b.closeAll=Ce;const Ne=K(b,"$notify");export{Ne as E};
