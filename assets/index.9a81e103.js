import{c as V,n as x,t as T,a as z,i as w}from"./index.7ac00024.js";import{b as y,H as S,p as r,c as O,a as B}from"./framework.6504b2a8.js";function j(t){var e;const n=S(t);return(e=n==null?void 0:n.$el)!=null?e:n}const b=w?window:void 0,F=w?window.document:void 0,L=w?window.navigator:void 0;function h(...t){let e,n,o,s;if(V(t[0])?([n,o,s]=t,e=b):[e,n,o,s]=t,!e)return x;let a=x;const l=y(()=>S(e),c=>{a(),!!c&&(c.addEventListener(n,o,s),a=()=>{c.removeEventListener(n,o,s),a=x})},{immediate:!0,flush:"post"}),i=()=>{l(),a()};return T(i),i}function oe(t={}){const{navigator:e=L,read:n=!1,source:o,copiedDuring:s=1500}=t,a=["copy","cut"],l=Boolean(e&&"clipboard"in e),i=r(""),c=r(!1),p=z(()=>c.value=!1,s);function d(){e.clipboard.readText().then(u=>{i.value=u})}if(l&&n)for(const u of a)h(u,d);async function f(u=S(o)){l&&u!=null&&(await e.clipboard.writeText(u),i.value=u,c.value=!0,p.start())}return{isSupported:l,text:i,copied:c,copy:f}}const $="__vueuse_ssr_handlers__";globalThis[$]=globalThis[$]||{};function ae(t,e,{window:n=b}={}){const o=r(""),s=O(()=>{var a;return j(e)||((a=n==null?void 0:n.document)==null?void 0:a.documentElement)});return y(s,a=>{a&&n&&(o.value=n.getComputedStyle(a).getPropertyValue(t))},{immediate:!0}),y(o,a=>{var l;((l=s.value)==null?void 0:l.style)&&s.value.style.setProperty(t,a)}),o}function M(t={}){const{window:e=b}=t,n=Boolean(e&&"DeviceOrientationEvent"in e),o=r(!1),s=r(null),a=r(null),l=r(null);return e&&n&&h(e,"deviceorientation",i=>{o.value=i.absolute,s.value=i.alpha,a.value=i.beta,l.value=i.gamma}),{isSupported:n,isAbsolute:o,alpha:s,beta:a,gamma:l}}function ie({document:t=F}={}){if(!t)return r("visible");const e=r(t.visibilityState);return h(t,"visibilitychange",()=>{e.value=t.visibilityState}),e}var R=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,q=(t,e)=>{var n={};for(var o in t)N.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&R)for(var o of R(t))e.indexOf(o)<0&&K.call(t,o)&&(n[o]=t[o]);return n};function se(t,e,n={}){const o=n,{window:s=b}=o,a=q(o,["window"]);let l;const i=s&&"ResizeObserver"in s,c=()=>{l&&(l.disconnect(),l=void 0)},p=y(()=>j(t),f=>{c(),i&&s&&f&&(l=new s.ResizeObserver(e),l.observe(f,a))},{immediate:!0,flush:"post"}),d=()=>{c(),p()};return T(d),{isSupported:i,stop:d}}function G(t={}){const{type:e="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:s={x:0,y:0},window:a=b}=t,l=r(s.x),i=r(s.y),c=r(null),p=u=>{e==="page"?(l.value=u.pageX,i.value=u.pageY):e==="client"&&(l.value=u.clientX,i.value=u.clientY),c.value="mouse"},d=()=>{l.value=s.x,i.value=s.y},f=u=>{if(u.touches.length>0){const m=u.touches[0];e==="page"?(l.value=m.pageX,i.value=m.pageY):e==="client"&&(l.value=m.clientX,i.value=m.clientY),c.value="touch"}};return a&&(h(a,"mousemove",p,{passive:!0}),h(a,"dragover",p,{passive:!0}),n&&(h(a,"touchstart",f,{passive:!0}),h(a,"touchmove",f,{passive:!0}),o&&h(a,"touchend",d,{passive:!0}))),{x:l,y:i,sourceType:c}}function J(t,e={}){const{handleOutside:n=!0,window:o=b}=e,{x:s,y:a,sourceType:l}=G(e),i=r(t!=null?t:o==null?void 0:o.document.body),c=r(0),p=r(0),d=r(0),f=r(0),u=r(0),m=r(0),g=r(!1);let v=()=>{};return o&&(v=y([i,s,a],()=>{const E=j(i);if(!E)return;const{left:A,top:C,width:H,height:I}=E.getBoundingClientRect();d.value=A+o.pageXOffset,f.value=C+o.pageYOffset,u.value=I,m.value=H;const _=s.value-d.value,P=a.value-f.value;g.value=_<0||P<0||_>m.value||P>u.value,(n||!g.value)&&(c.value=_,p.value=P)},{immediate:!0})),{x:s,y:a,sourceType:l,elementX:c,elementY:p,elementPositionX:d,elementPositionY:f,elementHeight:u,elementWidth:m,isOutside:g,stop:v}}function le(t,e={}){const{deviceOrientationTiltAdjust:n=v=>v,deviceOrientationRollAdjust:o=v=>v,mouseTiltAdjust:s=v=>v,mouseRollAdjust:a=v=>v,window:l=b}=e,i=B(M({window:l})),{elementX:c,elementY:p,elementWidth:d,elementHeight:f}=J(t,{handleOutside:!1,window:l}),u=O(()=>i.isSupported&&(i.alpha!=null&&i.alpha!==0||i.gamma!=null&&i.gamma!==0)?"deviceOrientation":"mouse"),m=O(()=>{if(u.value==="deviceOrientation"){const v=-i.beta/90;return o(v)}else{const v=-(p.value-f.value/2)/f.value;return a(v)}}),g=O(()=>{if(u.value==="deviceOrientation"){const v=i.gamma/90;return n(v)}else{const v=(c.value-d.value/2)/d.value;return s(v)}});return{roll:m,tilt:g,source:u}}var X,Y;w&&(window==null?void 0:window.navigator)&&((X=window==null?void 0:window.navigator)==null?void 0:X.platform)&&/iP(ad|hone|od)/.test((Y=window==null?void 0:window.navigator)==null?void 0:Y.platform);var Q=Object.defineProperty,D=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,W=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))U.call(e,n)&&W(t,n,e[n]);if(D)for(var n of D(e))Z.call(e,n)&&W(t,n,e[n]);return t};const ee={top:0,left:0,bottom:0,right:0,height:0,width:0};k({text:""},ee);function ue({window:t=b}={}){if(!t)return r(!1);const e=r(t.document.hasFocus());return h(t,"blur",()=>{e.value=!1}),h(t,"focus",()=>{e.value=!0}),e}export{se as a,ie as b,ue as c,oe as d,le as e,ae as f,h as u};
