import{S as T,O as Y,P as j,Q as o,U as F,y,V as l,I as x,v as N,b as K,W as M,X as U,Y as Z,Z as q,E as B,_ as O,$ as A,a0 as S,a1 as P,a2 as L,a3 as C,a4 as H,a5 as Q,a6 as D,a7 as V}from"./custom-element-ZV5t179-.js";function h(s,b=null,g){if(typeof s!="object"||s===null||T in s)return s;const d=U(s);if(d!==Y&&d!==j)return s;var f=new Map,u=Z(s),v=o(0);u&&f.set("length",o(s.length));var _;return new Proxy(s,{defineProperty(r,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&F();var n=f.get(e);return n===void 0?(n=o(t.value),f.set(e,n)):y(n,h(t.value,_)),!0},deleteProperty(r,e){var t=f.get(e);if(t===void 0)e in r&&f.set(e,o(l));else{if(u&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&y(n,a)}y(t,l),k(v)}return!0},get(r,e,t){var c;if(e===T)return s;var n=f.get(e),a=e in r;if(n===void 0&&(!a||(c=x(r,e))!=null&&c.writable)&&(n=o(h(a?r[e]:l,_)),f.set(e,n)),n!==void 0){var i=N(n);return i===l?void 0:i}return Reflect.get(r,e,t)},getOwnPropertyDescriptor(r,e){var t=Reflect.getOwnPropertyDescriptor(r,e);if(t&&"value"in t){var n=f.get(e);n&&(t.value=N(n))}else if(t===void 0){var a=f.get(e),i=a==null?void 0:a.v;if(a!==void 0&&i!==l)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return t},has(r,e){var i;if(e===T)return!0;var t=f.get(e),n=t!==void 0&&t.v!==l||Reflect.has(r,e);if(t!==void 0||K!==null&&(!n||(i=x(r,e))!=null&&i.writable)){t===void 0&&(t=o(n?h(r[e],_):l),f.set(e,t));var a=N(t);if(a===l)return!1}return n},set(r,e,t,n){var I;var a=f.get(e),i=e in r;if(u&&e==="length")for(var c=t;c<a.v;c+=1){var w=f.get(c+"");w!==void 0?y(w,l):c in r&&(w=o(l),f.set(c+"",w))}a===void 0?(!i||(I=x(r,e))!=null&&I.writable)&&(a=o(void 0),y(a,h(t,_)),f.set(e,a)):(i=a.v!==l,y(a,h(t,_)));var m=Reflect.getOwnPropertyDescriptor(r,e);if(m!=null&&m.set&&m.set.call(n,t),!i){if(u&&typeof e=="string"){var E=f.get("length"),R=Number(e);Number.isInteger(R)&&R>=E.v&&y(E,R+1)}k(v)}return!0},ownKeys(r){N(v);var e=Reflect.ownKeys(r).filter(a=>{var i=f.get(a);return i===void 0||i.v!==l});for(var[t,n]of f)n.v!==l&&!(t in r)&&e.push(t);return e},setPrototypeOf(){M()}})}function k(s,b=1){y(s,s.v+b)}function X(s,b,g=!1){P&&L();var d=s,f=null,u=null,v=l,_=g?B:0,r=!1;const e=(n,a=!0)=>{r=!0,t(a,n)},t=(n,a)=>{if(v===(v=n))return;let i=!1;if(P){const c=d.data===C;!!v===c&&(d=H(),Q(d),D(!1),i=!0)}v?(f?O(f):a&&(f=A(()=>a(d))),u&&S(u,()=>{u=null})):(u?O(u):a&&(u=A(()=>a(d))),f&&S(f,()=>{f=null})),i&&D(!0)};q(()=>{r=!1,b(e),r||t(null,null)},_),P&&(d=V)}function $(s,b,g,d,f){var _;P&&L();var u=(_=b.$$slots)==null?void 0:_[g],v=!1;u===!0&&(u=b[g==="default"?"children":g],v=!0),u===void 0||u(s,v?()=>d:d)}export{X as i,h as p,$ as s};
