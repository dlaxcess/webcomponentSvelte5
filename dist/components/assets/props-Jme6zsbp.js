import{O,ak as C,g as i,l as R,y as T,al as K,am as P,I as b,an as $,ao as q,z as x,aa as z}from"./custom-element-2hyHYyD5.js";const A={get(r,e){if(!r.exclude.includes(e))return r.props[e]},set(r,e){return!1},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function H(r,e,c){return new Proxy({props:r,exclude:e},A)}function B(r){for(var e=x,c=x;e!==null&&!(e.f&(K|P));)e=e.parent;try{return b(e),r()}finally{b(c)}}function I(r,e,c,v){var w;var y=!$,E=!1,t;t=r[e];var u=((w=O(r,e))==null?void 0:w.set)??void 0,s=v,_=!0,o=!1,h=()=>(o=!0,_&&(_=!1,s=v),s);t===void 0&&v!==void 0&&(u&&y&&C(),t=h(),u&&u(t));var f;if(f=()=>{var a=r[e];return a===void 0?h():(_=!0,o=!1,a)},u){var F=r.$$legacy;return function(a,n){return arguments.length>0?((!n||F||E)&&u(n?f():a),a):f()}}var d=!1,m=!1,p=z(t),l=B(()=>q(()=>{var a=f(),n=i(p);return d?(d=!1,m=!0,n):(m=!1,p.v=a)}));return function(a,n){if(arguments.length>0){const g=n?i(l):a;return l.equals(g)||(d=!0,R(p,g),o&&s!==void 0&&(s=g),T(()=>i(l))),a}return i(l)}}export{I as p,H as r};
