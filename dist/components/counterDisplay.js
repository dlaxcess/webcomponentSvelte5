import{c as C,a as L,u as k,e as c,p as z,t as u,g as m,i as w,j as v,m as f,k as D,s as _,l as b,r as y,n as M}from"./assets/custom-element-2hyHYyD5.js";import{i as V}from"./assets/if-C4rAqgKF.js";import{s as g}from"./assets/slot-DwxCL7Mz.js";import{p as q}from"./assets/proxy-C5MeHoS7.js";var H=u("<p> </p>"),O=u("<p>Pas de counter sur cette page</p>"),P=u('<div class="svelte-jz8ejc"><!> <!> <!></div>');const S={hash:"svelte-jz8ejc",code:"div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"};function E(o,r){w(r,!0),L(o,S);let i=_(0),d=_(!1);k(()=>{const e=()=>{const a=document.querySelector("counter-component");b(d,!!a)};e();const t=a=>{b(i,q(a.detail.count))},s=new MutationObserver(e);return s.observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("counter-update",t),()=>{s.disconnect(),document.removeEventListener("counter-update",t)}});var n=P(),p=v(n);g(p,r,"description",{});var l=f(p,2);{var h=e=>{var t=H(),s=v(t);y(t),D(()=>M(s,`Valeur du compteur : ${m(i)??""}`)),c(e,t)},j=e=>{var t=O();c(e,t)};V(l,e=>{m(d)?e(h):e(j,!1)})}var x=f(l,2);g(x,r,"footer",{}),y(n),c(o,n),z()}customElements.define("counterdisplay-component",C(E,{},["description","footer"],[],!0));class T extends HTMLElement{constructor(){super(),new E({target:this})}}customElements.get("counterdisplay-component")||customElements.define("counterdisplay-component",T);
