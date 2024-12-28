(function(h,$){typeof exports=="object"&&typeof module<"u"?$(exports):typeof define=="function"&&define.amd?define(["exports"],$):(h=typeof globalThis<"u"?globalThis:h||self,$(h.WebComponentLib={}))})(this,function(h){"use strict";var on=Object.defineProperty;var Wt=h=>{throw TypeError(h)};var fn=(h,$,y)=>$ in h?on(h,$,{enumerable:!0,configurable:!0,writable:!0,value:y}):h[$]=y;var q=(h,$,y)=>fn(h,typeof $!="symbol"?$+"":$,y),zt=(h,$,y)=>$.has(h)||Wt("Cannot "+y);var N=(h,$,y)=>(zt(h,$,"read from private field"),y?y.call(h):$.get(h)),tt=(h,$,y)=>$.has(h)?Wt("Cannot add the same private member more than once"):$ instanceof WeakSet?$.add(h):$.set(h,y),rt=(h,$,y,fe)=>(zt(h,$,"write to private field"),fe?fe.call(h,y):$.set(h,y),y);var H,D;const $="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($);const y=2,fe="[",nt="[!",ut="]",ae={},x=Symbol(),Jt=["touchstart","touchmove"];function Gt(e){return Jt.includes(e)}const st=!1;var it=Array.isArray,Zt=Array.from,ye=Object.keys,we=Object.defineProperty,W=Object.getOwnPropertyDescriptor,Qt=Object.prototype,Xt=Array.prototype,er=Object.getPrototypeOf;function tr(e){for(var t=0;t<e.length;t++)e[t]()}const L=2,lt=4,ge=8,Le=16,P=32,Q=64,Pe=128,z=256,be=512,O=1024,Y=2048,ce=4096,X=8192,ee=16384,rr=32768,je=65536,nr=1<<19,ot=1<<20,qe=Symbol("$state"),ur=Symbol("legacy props");function ft(e){return e===this.v}function sr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ir(e){return!sr(e,this.v)}function lr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function or(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ar(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function cr(){throw new Error("https://svelte.dev/e/hydration_failed")}function _r(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function dr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function vr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function hr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let $r=!1;function F(e,t){var r={f:0,v:e,reactions:null,equals:ft,version:0};return r}function Fe(e){return mr(F(e))}function at(e,t=!1){const r=F(e);return t||(r.equals=ir),r}function mr(e){return m!==null&&m.f&L&&(I===null?Lr([e]):I.push(e)),e}function S(e,t){return m!==null&&jr()&&m.f&(L|Le)&&(I===null||!I.includes(e))&&hr(),pr(e,t)}function pr(e,t){return e.equals(t)||(e.v=t,e.version=Pt(),ct(e,Y),v!==null&&v.f&O&&!(v.f&P)&&(b!==null&&b.includes(e)?(M(v,Y),Se(v)):K===null?Pr([e]):K.push(e))),t}function ct(e,t){var r=e.reactions;if(r!==null)for(var n=r.length,u=0;u<n;u++){var s=r[u],i=s.f;i&Y||(M(s,t),i&(O|z)&&(i&L?ct(s,ce):Se(s)))}}function Ie(e){console.warn("https://svelte.dev/e/hydration_mismatch")}let R=!1;function te(e){R=e}let w;function V(e){if(e===null)throw Ie(),ae;return w=e}function Me(){return V(ne(w))}function _e(e){if(R){if(ne(w)!==null)throw Ie(),ae;w=e}}function yr(){for(var e=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ut){if(e===0)return t;e-=1}else(r===fe||r===nt)&&(e+=1)}var n=ne(t);t.remove(),t=n}}function re(e,t=null,r){if(typeof e!="object"||e===null||qe in e)return e;const n=er(e);if(n!==Qt&&n!==Xt)return e;var u=new Map,s=it(e),i=F(0);s&&u.set("length",F(e.length));var f;return new Proxy(e,{defineProperty(l,o,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&_r();var c=u.get(o);return c===void 0?(c=F(a.value),u.set(o,c)):S(c,re(a.value,f)),!0},deleteProperty(l,o){var a=u.get(o);if(a===void 0)o in l&&u.set(o,F(x));else{if(s&&typeof o=="string"){var c=u.get("length"),_=Number(o);Number.isInteger(_)&&_<c.v&&S(c,_)}S(a,x),_t(i)}return!0},get(l,o,a){var p;if(o===qe)return e;var c=u.get(o),_=o in l;if(c===void 0&&(!_||(p=W(l,o))!=null&&p.writable)&&(c=F(re(_?l[o]:x,f)),u.set(o,c)),c!==void 0){var d=T(c);return d===x?void 0:d}return Reflect.get(l,o,a)},getOwnPropertyDescriptor(l,o){var a=Reflect.getOwnPropertyDescriptor(l,o);if(a&&"value"in a){var c=u.get(o);c&&(a.value=T(c))}else if(a===void 0){var _=u.get(o),d=_==null?void 0:_.v;if(_!==void 0&&d!==x)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return a},has(l,o){var d;if(o===qe)return!0;var a=u.get(o),c=a!==void 0&&a.v!==x||Reflect.has(l,o);if(a!==void 0||v!==null&&(!c||(d=W(l,o))!=null&&d.writable)){a===void 0&&(a=F(c?re(l[o],f):x),u.set(o,a));var _=T(a);if(_===x)return!1}return c},set(l,o,a,c){var k;var _=u.get(o),d=o in l;if(s&&o==="length")for(var p=a;p<_.v;p+=1){var E=u.get(p+"");E!==void 0?S(E,x):p in l&&(E=F(x),u.set(p+"",E))}_===void 0?(!d||(k=W(l,o))!=null&&k.writable)&&(_=F(void 0),S(_,re(a,f)),u.set(o,_)):(d=_.v!==x,S(_,re(a,f)));var j=Reflect.getOwnPropertyDescriptor(l,o);if(j!=null&&j.set&&j.set.call(c,a),!d){if(s&&typeof o=="string"){var Z=u.get("length"),g=Number(o);Number.isInteger(g)&&g>=Z.v&&S(Z,g+1)}_t(i)}return!0},ownKeys(l){T(i);var o=Reflect.ownKeys(l).filter(_=>{var d=u.get(_);return d===void 0||d.v!==x});for(var[a,c]of u)c.v!==x&&!(a in l)&&o.push(a);return o},setPrototypeOf(){dr()}})}function _t(e,t=1){S(e,e.v+t)}var dt,vt,ht;function He(){if(dt===void 0){dt=window;var e=Element.prototype,t=Node.prototype;vt=W(t,"firstChild").get,ht=W(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ee(e=""){return document.createTextNode(e)}function Te(e){return vt.call(e)}function ne(e){return ht.call(e)}function de(e,t){if(!R)return Te(e);var r=Te(w);if(r===null)r=w.appendChild(Ee());else if(t&&r.nodeType!==3){var n=Ee();return r==null||r.before(n),V(n),n}return V(r),r}function wr(e,t=1,r=!1){let n=R?w:e;for(var u;t--;)u=n,n=ne(n);if(!R)return n;var s=n==null?void 0:n.nodeType;if(r&&s!==3){var i=Ee();return n===null?u==null||u.after(i):n.before(i),V(i),i}return V(n),n}function gr(e){e.textContent=""}function br(e){var t=L|Y;v===null?t|=z:v.f|=ot;var r=m!==null&&m.f&L?m:null;const n={children:null,ctx:C,deps:null,equals:ft,f:t,fn:e,reactions:null,v:null,version:0,parent:r??v};return r!==null&&(r.children??(r.children=[])).push(n),n}function $t(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&L?Ye(n):B(n)}}}function Er(e){for(var t=e.parent;t!==null;){if(!(t.f&L))return t;t=t.parent}return null}function mt(e){var t,r=v;U(Er(e));try{$t(e),t=jt(e)}finally{U(r)}return t}function pt(e){var t=mt(e),r=(G||e.f&z)&&e.deps!==null?ce:O;M(e,r),e.equals(t)||(e.v=t,e.version=Pt())}function Ye(e){$t(e),me(e,0),M(e,ee),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Tr(e){v===null&&m===null&&fr(),m!==null&&m.f&z&&or(),Ke&&lr()}function xr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ue(e,t,r,n=!0){var u=(e&Q)!==0,s=v,i={ctx:C,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|Y,first:null,fn:t,last:null,next:null,parent:u?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=se;try{At(!0),Oe(i),i.f|=rr}catch(a){throw B(i),a}finally{At(f)}}else t!==null&&Se(i);var l=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&ot)===0;if(!l&&!u&&n&&(s!==null&&xr(i,s),m!==null&&m.f&L)){var o=m;(o.children??(o.children=[])).push(i)}return i}function yt(e){Tr();var t=v!==null&&(v.f&P)!==0&&C!==null&&!C.m;if(t){var r=C;(r.e??(r.e=[])).push({fn:e,effect:v,reaction:m})}else{var n=wt(e);return n}}function Cr(e){const t=ue(Q,e,!0);return()=>{B(t)}}function kr(e){const t=ue(Q,e,!0);return(r={})=>new Promise(n=>{r.outro?Be(t,()=>{B(t),n(void 0)}):(B(t),n(void 0))})}function wt(e){return ue(lt,e,!1)}function Nr(e){return ue(ge,e,!0)}function gt(e){return bt(e)}function bt(e,t=0){return ue(ge|Le|t,e,!0)}function Ve(e,t=!0){return ue(ge|P,e,!0,t)}function Et(e){var t=e.teardown;if(t!==null){const r=Ke,n=m;Dt(!0),le(null);try{t.call(null)}finally{Dt(r),le(n)}}}function Tt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Ye(t[r])}}function xt(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;B(r,t),r=n}}function Or(e){for(var t=e.first;t!==null;){var r=t.next;t.f&P||B(t),t=r}}function B(e,t=!0){var r=!1;if((t||e.f&nr)&&e.nodes_start!==null){for(var n=e.nodes_start,u=e.nodes_end;n!==null;){var s=n===u?null:ne(n);n.remove(),n=s}r=!0}xt(e,t&&!r),Tt(e),me(e,0),M(e,ee);var i=e.transitions;if(i!==null)for(const l of i)l.stop();Et(e);var f=e.parent;f!==null&&f.first!==null&&Ct(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Ct(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Be(e,t){var r=[];kt(e,r,!0),Sr(r,()=>{B(e),t&&t()})}function Sr(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var u of e)u.out(n)}else t()}function kt(e,t,r){if(!(e.f&X)){if(e.f^=X,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var u=n.next,s=(n.f&je)!==0||(n.f&P)!==0;kt(n,t,s?r:!1),n=u}}}function Nt(e){Ot(e,!0)}function Ot(e,t){if(e.f&X){$e(e)&&Oe(e),e.f^=X;for(var r=e.first;r!==null;){var n=r.next,u=(r.f&je)!==0||(r.f&P)!==0;Ot(r,u?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let xe=!1,Ue=[];function St(){xe=!1;const e=Ue.slice();Ue=[],tr(e)}function Rr(e){xe||(xe=!0,queueMicrotask(St)),Ue.push(e)}function Ar(){xe&&St()}const Rt=0,Dr=1;let Ce=!1,ke=Rt,ve=!1,he=null,se=!1,Ke=!1;function At(e){se=e}function Dt(e){Ke=e}let J=[],ie=0,an=[],m=null;function le(e){m=e}let v=null;function U(e){v=e}let I=null;function Lr(e){I=e}let b=null,A=0,K=null;function Pr(e){K=e}let Lt=1,G=!1,C=null;function Pt(){return++Lt}function jr(){return!$r}function $e(e){var i,f;var t=e.f;if(t&Y)return!0;if(t&ce){var r=e.deps,n=(t&z)!==0;if(r!==null){var u;if(t&be){for(u=0;u<r.length;u++)((i=r[u]).reactions??(i.reactions=[])).push(e);e.f^=be}for(u=0;u<r.length;u++){var s=r[u];if($e(s)&&pt(s),n&&v!==null&&!G&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}(!n||v!==null&&!G)&&M(e,O)}return!1}function qr(e,t){for(var r=t;r!==null;){if(r.f&Pe)try{r.fn(e);return}catch{r.f^=Pe}r=r.parent}throw Ce=!1,e}function Fr(e){return(e.f&ee)===0&&(e.parent===null||(e.parent.f&Pe)===0)}function Ne(e,t,r,n){if(Ce){if(r===null&&(Ce=!1),Fr(t))throw e;return}r!==null&&(Ce=!0);{qr(e,t);return}}function jt(e){var _;var t=b,r=A,n=K,u=m,s=G,i=I,f=C,l=e.f;b=null,A=0,K=null,m=l&(P|Q)?null:e,G=!se&&(l&z)!==0,I=null,C=e.ctx;try{var o=(0,e.fn)(),a=e.deps;if(b!==null){var c;if(me(e,A),a!==null&&A>0)for(a.length=A+b.length,c=0;c<b.length;c++)a[A+c]=b[c];else e.deps=a=b;if(!G)for(c=A;c<a.length;c++)((_=a[c]).reactions??(_.reactions=[])).push(e)}else a!==null&&A<a.length&&(me(e,A),a.length=A);return o}finally{b=t,A=r,K=n,m=u,G=s,I=i,C=f}}function Ir(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var u=r.length-1;u===0?r=t.reactions=null:(r[n]=r[u],r.pop())}}r===null&&t.f&L&&(b===null||!b.includes(t))&&(M(t,ce),t.f&(z|be)||(t.f^=be),me(t,0))}function me(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ir(e,r[n])}function Oe(e){var t=e.f;if(!(t&ee)){M(e,O);var r=v,n=C;v=e;try{t&Le?Or(e):xt(e),Tt(e),Et(e);var u=jt(e);e.teardown=typeof u=="function"?u:null,e.version=Lt}catch(s){Ne(s,e,r,n||e.ctx)}finally{v=r}}}function qt(){if(ie>1e3){ie=0;try{ar()}catch(e){if(he!==null)Ne(e,he,null);else throw e}}ie++}function Ft(e){var t=e.length;if(t!==0){qt();var r=se;se=!0;try{for(var n=0;n<t;n++){var u=e[n];u.f&O||(u.f^=O);var s=[];It(u,s),Mr(s)}}finally{se=r}}}function Mr(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(ee|X)))try{$e(n)&&(Oe(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Ct(n):n.fn=null))}catch(u){Ne(u,n,null,n.ctx)}}}function Hr(){if(ve=!1,ie>1001)return;const e=J;J=[],Ft(e),ve||(ie=0,he=null)}function Se(e){ke===Rt&&(ve||(ve=!0,queueMicrotask(Hr))),he=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Q|P)){if(!(r&O))return;t.f^=O}}J.push(t)}function It(e,t){var r=e.first,n=[];e:for(;r!==null;){var u=r.f,s=(u&P)!==0,i=s&&(u&O)!==0,f=r.next;if(!i&&!(u&X))if(u&ge){if(s)r.f^=O;else try{$e(r)&&Oe(r)}catch(c){Ne(c,r,null,r.ctx)}var l=r.first;if(l!==null){r=l;continue}}else u&lt&&n.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(e===c)break e;var o=c.next;if(o!==null){r=o;continue e}c=c.parent}}r=f}for(var a=0;a<n.length;a++)l=n[a],t.push(l),It(l,t)}function We(e){var t=ke,r=J;try{qt();const u=[];ke=Dr,J=u,ve=!1,Ft(r);var n=e==null?void 0:e();return Ar(),(J.length>0||u.length>0)&&We(),ie=0,he=null,n}finally{ke=t,J=r}}function T(e){var a;var t=e.f,r=(t&L)!==0;if(r&&t&ee){var n=mt(e);return Ye(e),n}if(m!==null){I!==null&&I.includes(e)&&vr();var u=m.deps;b===null&&u!==null&&u[A]===e?A++:b===null?b=[e]:b.push(e),K!==null&&v!==null&&v.f&O&&!(v.f&P)&&K.includes(e)&&(M(v,Y),Se(v))}else if(r&&e.deps===null)for(var s=e,i=s.parent,f=s;i!==null;)if(i.f&L){var l=i;f=l,i=l.parent}else{var o=i;(a=o.deriveds)!=null&&a.includes(f)||(o.deriveds??(o.deriveds=[])).push(f);break}return r&&(s=e,$e(s)&&pt(s)),e.v}function Yr(e){const t=m;try{return m=null,e()}finally{m=t}}const Vr=~(Y|ce|O);function M(e,t){e.f=e.f&Vr|t}function ze(e,t=!1,r){C={p:C,c:null,e:null,m:!1,s:e,x:null,l:null}}function Je(e){const t=C;if(t!==null){e!==void 0&&(t.x=e);const i=t.e;if(i!==null){var r=v,n=m;t.e=null;try{for(var u=0;u<i.length;u++){var s=i[u];U(s.effect),le(s.reaction),wt(s.fn)}}finally{U(r),le(n)}}C=t.p,t.m=!0}return e||{}}const Mt=new Set,Ge=new Set;function Br(e){for(var t=0;t<e.length;t++)Mt.add(e[t]);for(var r of Ge)r(e)}function Re(e){var g;var t=this,r=t.ownerDocument,n=e.type,u=((g=e.composedPath)==null?void 0:g.call(e))||[],s=u[0]||e.target,i=0,f=e.__root;if(f){var l=u.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var o=u.indexOf(t);if(o===-1)return;l<=o&&(i=l)}if(s=u[i]||e.target,s!==t){we(e,"currentTarget",{configurable:!0,get(){return s||r}});var a=m,c=v;le(null),U(null);try{for(var _,d=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var E=s["__"+n];if(E!==void 0&&!s.disabled)if(it(E)){var[j,...Z]=E;j.apply(s,[e,...Z])}else E.call(s,e)}catch(k){_?d.push(k):_=k}if(e.cancelBubble||p===t||p===null)break;s=p}if(_){for(let k of d)queueMicrotask(()=>{throw k});throw _}}finally{e.__root=t,delete e.currentTarget,le(a),U(c)}}}function Ur(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ze(e,t){var r=v;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Ae(e,t){var r=(t&y)!==0,n,u=!e.startsWith("<!>");return()=>{if(R)return Ze(w,null),w;n===void 0&&(n=Ur(u?e:"<!>"+e),n=Te(n));var s=r?document.importNode(n,!0):n.cloneNode(!0);return Ze(s,s),s}}function pe(e,t){if(R){v.nodes_end=w,Me();return}e!==null&&e.before(t)}function Qe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Ht(e,t){return Yt(e,t)}function Kr(e,t){He(),t.intro=t.intro??!1;const r=t.target,n=R,u=w;try{for(var s=Te(r);s&&(s.nodeType!==8||s.data!==fe);)s=ne(s);if(!s)throw ae;te(!0),V(s),Me();const i=Yt(e,{...t,anchor:s});if(w===null||w.nodeType!==8||w.data!==ut)throw Ie(),ae;return te(!1),i}catch(i){if(i===ae)return t.recover===!1&&cr(),He(),gr(r),te(!1),Ht(e,t);throw i}finally{te(n),V(u)}}const oe=new Map;function Yt(e,{target:t,anchor:r,props:n={},events:u,context:s,intro:i=!0}){He();var f=new Set,l=c=>{for(var _=0;_<c.length;_++){var d=c[_];if(!f.has(d)){f.add(d);var p=Gt(d);t.addEventListener(d,Re,{passive:p});var E=oe.get(d);E===void 0?(document.addEventListener(d,Re,{passive:p}),oe.set(d,1)):oe.set(d,E+1)}}};l(Zt(Mt)),Ge.add(l);var o=void 0,a=kr(()=>{var c=r??t.appendChild(Ee());return Ve(()=>{if(s){ze({});var _=C;_.c=s}u&&(n.$$events=u),R&&Ze(c,null),o=e(c,n)||{},R&&(v.nodes_end=w),s&&Je()}),()=>{var p;for(var _ of f){t.removeEventListener(_,Re);var d=oe.get(_);--d===0?(document.removeEventListener(_,Re),oe.delete(_)):oe.set(_,d)}Ge.delete(l),c!==r&&((p=c.parentNode)==null||p.removeChild(c))}});return Xe.set(o,a),o}let Xe=new WeakMap;function Wr(e,t){const r=Xe.get(e);return r?(Xe.delete(e),r(t)):Promise.resolve()}function zr(e,t,r=!1){R&&Me();var n=e,u=null,s=null,i=x,f=r?je:0,l=!1;const o=(c,_=!0)=>{l=!0,a(_,c)},a=(c,_)=>{if(i===(i=c))return;let d=!1;if(R){const p=n.data===nt;!!i===p&&(n=yr(),V(n),te(!1),d=!0)}i?(u?Nt(u):_&&(u=Ve(()=>_(n))),s&&Be(s,()=>{s=null})):(s?Nt(s):_&&(s=Ve(()=>_(n))),u&&Be(u,()=>{u=null})),d&&te(!0)};bt(()=>{l=!1,t(o),l||a(null,null)},f),R&&(n=w)}function Jr(e,t){Rr(()=>{var r=e.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+t.hash)){const u=document.createElement("style");u.id=t.hash,u.textContent=t.code,n.appendChild(u)}})}function Gr(e){for(var t=v,r=v;t!==null&&!(t.f&(P|Q));)t=t.parent;try{return U(t),e()}finally{U(r)}}function Zr(e,t,r,n){var Z;var u=!1,s;s=e[t];var i=((Z=W(e,t))==null?void 0:Z.set)??void 0,f=n,l=!0,o=!1,a=()=>(o=!0,l&&(l=!1,f=n),f),c;if(c=()=>{var g=e[t];return g===void 0?a():(l=!0,o=!1,g)},i){var _=e.$$legacy;return function(g,k){return arguments.length>0?((!k||_||u)&&i(k?c():g),g):c()}}var d=!1,p=!1,E=at(s),j=Gr(()=>br(()=>{var g=c(),k=T(E);return d?(d=!1,p=!0,k):(p=!1,E.v=g)}));return function(g,k){if(arguments.length>0){const et=k?T(j):g;return j.equals(et)||(d=!0,S(E,et),o&&f!==void 0&&(f=et),Yr(()=>T(j))),g}return T(j)}}function Qr(e){return new Xr(e)}class Xr{constructor(t){tt(this,H);tt(this,D);var s;var r=new Map,n=(i,f)=>{var l=at(f);return r.set(i,l),l};const u=new Proxy({...t.props||{},$$events:{}},{get(i,f){return T(r.get(f)??n(f,Reflect.get(i,f)))},has(i,f){return f===ur?!0:(T(r.get(f)??n(f,Reflect.get(i,f))),Reflect.has(i,f))},set(i,f,l){return S(r.get(f)??n(f,l),l),Reflect.set(i,f,l)}});rt(this,D,(t.hydrate?Kr:Ht)(t.component,{target:t.target,anchor:t.anchor,props:u,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((s=t==null?void 0:t.props)!=null&&s.$$host)||t.sync===!1)&&We(),rt(this,H,u.$$events);for(const i of Object.keys(N(this,D)))i==="$set"||i==="$destroy"||i==="$on"||we(this,i,{get(){return N(this,D)[i]},set(f){N(this,D)[i]=f},enumerable:!0});N(this,D).$set=i=>{Object.assign(u,i)},N(this,D).$destroy=()=>{Wr(N(this,D))}}$set(t){N(this,D).$set(t)}$on(t,r){N(this,H)[t]=N(this,H)[t]||[];const n=(...u)=>r.call(this,...u);return N(this,H)[t].push(n),()=>{N(this,H)[t]=N(this,H)[t].filter(u=>u!==n)}}$destroy(){N(this,D).$destroy()}}H=new WeakMap,D=new WeakMap;let Vt;typeof HTMLElement=="function"&&(Vt=class extends HTMLElement{constructor(t,r,n){super();q(this,"$$ctor");q(this,"$$s");q(this,"$$c");q(this,"$$cn",!1);q(this,"$$d",{});q(this,"$$r",!1);q(this,"$$p_d",{});q(this,"$$l",{});q(this,"$$l_u",new Map);q(this,"$$me");this.$$ctor=t,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const u=this.$$c.$on(t,r);this.$$l_u.set(r,u)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){const u=this.$$l_u.get(r);u&&(u(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(u){return s=>{const i=document.createElement("slot");u!=="default"&&(i.name=u),pe(s,i)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const r={},n=en(this);for(const u of this.$$s)u in n&&(u==="default"&&!this.$$d.children?(this.$$d.children=t(u),r.default=!0):r[u]=t(u));for(const u of this.attributes){const s=this.$$g_p(u.name);s in this.$$d||(this.$$d[s]=De(s,u.value,this.$$p_d,"toProp"))}for(const u in this.$$p_d)!(u in this.$$d)&&this[u]!==void 0&&(this.$$d[u]=this[u],delete this[u]);this.$$c=Qr({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:r,$$host:this}}),this.$$me=Cr(()=>{Nr(()=>{var u;this.$$r=!0;for(const s of ye(this.$$c)){if(!((u=this.$$p_d[s])!=null&&u.reflect))continue;this.$$d[s]=this.$$c[s];const i=De(s,this.$$d[s],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,i)}this.$$r=!1})});for(const u in this.$$l)for(const s of this.$$l[u]){const i=this.$$c.$on(u,s);this.$$l_u.set(s,i)}this.$$l={}}}attributeChangedCallback(t,r,n){var u;this.$$r||(t=this.$$g_p(t),this.$$d[t]=De(t,n,this.$$p_d,"toProp"),(u=this.$$c)==null||u.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return ye(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function De(e,t,r,n){var s;const u=(s=r[e])==null?void 0:s.type;if(t=u==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(u){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(u){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function en(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function Bt(e,t,r,n,u,s){let i=class extends Vt{constructor(){super(e,r,u),this.$$p_d=t}static get observedAttributes(){return ye(t).map(f=>(t[f].attribute||f).toLowerCase())}};return ye(t).forEach(f=>{we(i.prototype,f,{get(){return this.$$c&&f in this.$$c?this.$$c[f]:this.$$d[f]},set(l){var c;l=De(f,l,t),this.$$d[f]=l;var o=this.$$c;if(o){var a=(c=W(o,f))==null?void 0:c.get;a?o[f]=l:o.$set({[f]:l})}}})}),n.forEach(f=>{we(i.prototype,f,{get(){var l;return(l=this.$$c)==null?void 0:l[f]}})}),e.element=i,i}const tn=(e,t,r)=>{S(t,T(t)+1),r()};var rn=Ae("<div><h2> </h2> <button> </button></div>");function Ut(e,t){ze(t,!0);let r=Zr(t,"buttonHeader"),n=Fe(0);const u=()=>{document.dispatchEvent(new CustomEvent("counter-update",{detail:{count:T(n)},bubbles:!0,composed:!0}))};yt(()=>{u()});var s=rn(),i=de(s),f=de(i,!0);_e(i);var l=wr(i,2);l.__click=[tn,n,u];var o=de(l);return _e(l),_e(s),gt(()=>{Qe(f,r()),Qe(o,`count is ${T(n)??""}`)}),pe(e,s),Je({get buttonHeader(){return r()},set buttonHeader(a){r(a),We()}})}Br(["click"]),customElements.define("counter-component",Bt(Ut,{buttonHeader:{}},[],[],!0));var nn=Ae("<p> </p>"),un=Ae("<p>Pas de counter sur cette page</p>"),sn=Ae('<div class="svelte-jz8ejc"><!></div>');const ln={hash:"svelte-jz8ejc",code:"div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"};function Kt(e,t){ze(t,!0),Jr(e,ln);let r=Fe(0),n=Fe(!1);yt(()=>{const l=()=>{const c=document.querySelector("counter-component");S(n,!!c)};l();const o=c=>{S(r,re(c.detail.count))},a=new MutationObserver(l);return a.observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("counter-update",o),()=>{a.disconnect(),document.removeEventListener("counter-update",o)}});var u=sn(),s=de(u);{var i=l=>{var o=nn(),a=de(o);_e(o),gt(()=>Qe(a,`Valeur du compteur : ${T(r)??""}`)),pe(l,o)},f=l=>{var o=un();pe(l,o)};zr(s,l=>{T(n)?l(i):l(f,!1)})}_e(u),pe(e,u),Je()}customElements.define("counter-display",Bt(Kt,{},[],[],!0)),h.Counter=Ut,h.CounterDisplay=Kt,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
