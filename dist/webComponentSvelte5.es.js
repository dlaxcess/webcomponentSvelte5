var Fr = Object.defineProperty;
var qt = (e) => {
  throw TypeError(e);
};
var Hr = (e, t, r) => t in e ? Fr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var H = (e, t, r) => Hr(e, typeof t != "symbol" ? t + "" : t, r), dt = (e, t, r) => t.has(e) || qt("Cannot " + r);
var w = (e, t, r) => (dt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), te = (e, t, r) => t.has(e) ? qt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), re = (e, t, r, n) => (dt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ue = (e, t, r) => (dt(e, t, "access private method"), r);
const Br = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Br);
const jr = 1, Vr = 2, Ur = 16, Yr = 1, zr = 2, Kr = 4, Wr = 2, Wt = "[", kt = "[!", Tt = "]", Re = {}, N = Symbol(), Gr = ["touchstart", "touchmove"];
function Jr(e) {
  return Gr.includes(e);
}
const Gt = !1;
var Ct = Array.isArray, St = Array.from, Ge = Object.keys, Je = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyDescriptors, Zr = Object.prototype, Qr = Array.prototype, Jt = Object.getPrototypeOf;
function en(e) {
  return typeof e == "function";
}
const Ae = () => {
};
function tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const V = 2, Xt = 4, Fe = 8, rt = 16, U = 32, Ce = 64, _t = 128, $e = 256, Xe = 512, R = 1024, fe = 2048, He = 4096, Y = 8192, Se = 16384, Zt = 32768, nt = 65536, rn = 1 << 19, Qt = 1 << 20, vt = Symbol("$state"), nn = Symbol("legacy props");
function er(e) {
  return e === this.v;
}
function sn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function on(e) {
  return !sn(e, this.v);
}
function un(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function an() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ln(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function dn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _n() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function pn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let tr = !1;
function M(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: er,
    version: 0
  };
  return r;
}
function ae(e) {
  return /* @__PURE__ */ mn(M(e));
}
// @__NO_SIDE_EFFECTS__
function At(e, t = !1) {
  const r = M(e);
  return t || (r.equals = on), r;
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return b !== null && b.f & V && (z === null ? Nn([e]) : z.push(e)), e;
}
function S(e, t) {
  return b !== null && Rn() && b.f & (V | rt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (z === null || !z.includes(e)) && pn(), rr(e, t);
}
function rr(e, t) {
  return e.equals(t) || (e.v = t, e.version = $r(), nr(e, fe), y !== null && y.f & R && !(y.f & U) && (A !== null && A.includes(e) ? (W(y, fe), ot(y)) : le === null ? On([e]) : le.push(e))), t;
}
function nr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i], o = s.f;
      o & fe || (W(s, t), o & (R | $e) && (o & V ? nr(
        /** @type {Derived} */
        s,
        He
      ) : ot(
        /** @type {Effect} */
        s
      )));
    }
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let k = !1;
function X(e) {
  k = e;
}
let x;
function B(e) {
  if (e === null)
    throw Nt(), Re;
  return x = e;
}
function Be() {
  return B(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ce(x)
  );
}
function P(e) {
  if (k) {
    if (/* @__PURE__ */ ce(x) !== null)
      throw Nt(), Re;
    x = e;
  }
}
function pt() {
  for (var e = 0, t = x; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Tt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Wt || r === kt) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ce(t)
    );
    t.remove(), t = n;
  }
}
function ie(e, t = null, r) {
  if (typeof e != "object" || e === null || vt in e)
    return e;
  const n = Jt(e);
  if (n !== Zr && n !== Qr)
    return e;
  var i = /* @__PURE__ */ new Map(), s = Ct(e), o = M(0);
  s && i.set("length", M(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && vn();
        var u = i.get(l);
        return u === void 0 ? (u = M(f.value), i.set(l, u)) : S(u, ie(f.value, a)), !0;
      },
      deleteProperty(c, l) {
        var f = i.get(l);
        if (f === void 0)
          l in c && i.set(l, M(N));
        else {
          if (s && typeof l == "string") {
            var u = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < u.v && S(u, d);
          }
          S(f, N), Ft(o);
        }
        return !0;
      },
      get(c, l, f) {
        var p;
        if (l === vt)
          return e;
        var u = i.get(l), d = l in c;
        if (u === void 0 && (!d || (p = _e(c, l)) != null && p.writable) && (u = M(ie(d ? c[l] : N, a)), i.set(l, u)), u !== void 0) {
          var v = E(u);
          return v === N ? void 0 : v;
        }
        return Reflect.get(c, l, f);
      },
      getOwnPropertyDescriptor(c, l) {
        var f = Reflect.getOwnPropertyDescriptor(c, l);
        if (f && "value" in f) {
          var u = i.get(l);
          u && (f.value = E(u));
        } else if (f === void 0) {
          var d = i.get(l), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== N)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(c, l) {
        var v;
        if (l === vt)
          return !0;
        var f = i.get(l), u = f !== void 0 && f.v !== N || Reflect.has(c, l);
        if (f !== void 0 || y !== null && (!u || (v = _e(c, l)) != null && v.writable)) {
          f === void 0 && (f = M(u ? ie(c[l], a) : N), i.set(l, f));
          var d = E(f);
          if (d === N)
            return !1;
        }
        return u;
      },
      set(c, l, f, u) {
        var $;
        var d = i.get(l), v = l in c;
        if (s && l === "length")
          for (var p = f; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var _ = i.get(p + "");
            _ !== void 0 ? S(_, N) : p in c && (_ = M(N), i.set(p + "", _));
          }
        d === void 0 ? (!v || ($ = _e(c, l)) != null && $.writable) && (d = M(void 0), S(d, ie(f, a)), i.set(l, d)) : (v = d.v !== N, S(d, ie(f, a)));
        var m = Reflect.getOwnPropertyDescriptor(c, l);
        if (m != null && m.set && m.set.call(u, f), !v) {
          if (s && typeof l == "string") {
            var g = (
              /** @type {Source<number>} */
              i.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= g.v && S(g, h + 1);
          }
          Ft(o);
        }
        return !0;
      },
      ownKeys(c) {
        E(o);
        var l = Reflect.ownKeys(c).filter((d) => {
          var v = i.get(d);
          return v === void 0 || v.v !== N;
        });
        for (var [f, u] of i)
          u.v !== N && !(f in c) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        hn();
      }
    }
  );
}
function Ft(e, t = 1) {
  S(e, e.v + t);
}
var Ht, ir, sr;
function mt() {
  if (Ht === void 0) {
    Ht = window;
    var e = Element.prototype, t = Node.prototype;
    ir = _e(t, "firstChild").get, sr = _e(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ke(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return ir.call(e);
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return sr.call(e);
}
function q(e, t) {
  if (!k)
    return /* @__PURE__ */ Te(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(x)
  );
  if (r === null)
    r = x.appendChild(ke());
  else if (t && r.nodeType !== 3) {
    var n = ke();
    return r == null || r.before(n), B(n), n;
  }
  return B(r), r;
}
function gn(e, t) {
  if (!k) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Te(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ce(r) : r;
  }
  return x;
}
function me(e, t = 1, r = !1) {
  let n = k ? x : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ ce(n);
  if (!k)
    return n;
  var s = n == null ? void 0 : n.nodeType;
  if (r && s !== 3) {
    var o = ke();
    return n === null ? i == null || i.after(o) : n.before(o), B(o), o;
  }
  return B(n), /** @type {TemplateNode} */
  n;
}
function or(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  var t = V | fe;
  y === null ? t |= $e : y.f |= Qt;
  var r = b !== null && b.f & V ? (
    /** @type {Derived} */
    b
  ) : null;
  const n = {
    children: null,
    ctx: O,
    deps: null,
    equals: er,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? y
  };
  return r !== null && (r.children ?? (r.children = [])).push(n), n;
}
function ur(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & V ? Ot(
        /** @type {Derived} */
        n
      ) : Z(
        /** @type {Effect} */
        n
      );
    }
  }
}
function yn(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & V))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ar(e) {
  var t, r = y;
  F(yn(e));
  try {
    ur(e), t = yr(e);
  } finally {
    F(r);
  }
  return t;
}
function lr(e) {
  var t = ar(e), r = (ve || e.f & $e) && e.deps !== null ? He : R;
  W(e, r), e.equals(t) || (e.v = t, e.version = $r());
}
function Ot(e) {
  ur(e), Ie(e, 0), W(e, Se), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function bn(e) {
  y === null && b === null && ln(), b !== null && b.f & $e && an(), Mt && un();
}
function wn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ye(e, t, r, n = !0) {
  var i = (e & Ce) !== 0, s = y, o = {
    ctx: O,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | fe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var a = Ee;
    try {
      Bt(!0), st(o), o.f |= Zt;
    } catch (f) {
      throw Z(o), f;
    } finally {
      Bt(a);
    }
  } else t !== null && ot(o);
  var c = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & Qt) === 0;
  if (!c && !i && n && (s !== null && wn(o, s), b !== null && b.f & V)) {
    var l = (
      /** @type {Derived} */
      b
    );
    (l.children ?? (l.children = [])).push(o);
  }
  return o;
}
function En(e) {
  const t = ye(Fe, null, !1);
  return W(t, R), t.teardown = e, t;
}
function Rt(e) {
  bn();
  var t = y !== null && (y.f & U) !== 0 && O !== null && !O.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      O
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: y,
      reaction: b
    });
  } else {
    var n = Lt(e);
    return n;
  }
}
function xn(e) {
  const t = ye(Ce, e, !0);
  return () => {
    Z(t);
  };
}
function kn(e) {
  const t = ye(Ce, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ze(t, () => {
      Z(t), n(void 0);
    }) : (Z(t), n(void 0));
  });
}
function Lt(e) {
  return ye(Xt, e, !1);
}
function Tn(e) {
  return ye(Fe, e, !0);
}
function we(e) {
  return Dt(e);
}
function Dt(e, t = 0) {
  return ye(Fe | rt | t, e, !0);
}
function Le(e, t = !0) {
  return ye(Fe | U, e, !0, t);
}
function fr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mt, n = b;
    jt(!0), K(null);
    try {
      t.call(null);
    } finally {
      jt(r), K(n);
    }
  }
}
function cr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Ot(t[r]);
  }
}
function dr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    Z(r, t), r = n;
  }
}
function Cn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & U || Z(t), t = r;
  }
}
function Z(e, t = !0) {
  var r = !1;
  if ((t || e.f & rn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var s = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ce(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  dr(e, t && !r), cr(e), Ie(e, 0), W(e, Se);
  var o = e.transitions;
  if (o !== null)
    for (const c of o)
      c.stop();
  fr(e);
  var a = e.parent;
  a !== null && a.first !== null && vr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function vr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Ze(e, t) {
  var r = [];
  Pt(e, r, !0), hr(r, () => {
    Z(e), t && t();
  });
}
function hr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Pt(e, t, r) {
  if (!(e.f & Y)) {
    if (e.f ^= Y, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & nt) !== 0 || (n.f & U) !== 0;
      Pt(n, t, s ? r : !1), n = i;
    }
  }
}
function Qe(e) {
  _r(e, !0);
}
function _r(e, t) {
  if (e.f & Y) {
    je(e) && st(e), e.f ^= Y;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & nt) !== 0 || (r.f & U) !== 0;
      _r(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let et = !1, gt = [];
function pr() {
  et = !1;
  const e = gt.slice();
  gt = [], tn(e);
}
function It(e) {
  et || (et = !0, queueMicrotask(pr)), gt.push(e);
}
function Sn() {
  et && pr();
}
const mr = 0, An = 1;
let ze = !1, Ke = mr, De = !1, Pe = null, Ee = !1, Mt = !1;
function Bt(e) {
  Ee = e;
}
function jt(e) {
  Mt = e;
}
let de = [], xe = 0;
let b = null;
function K(e) {
  b = e;
}
let y = null;
function F(e) {
  y = e;
}
let z = null;
function Nn(e) {
  z = e;
}
let A = null, D = 0, le = null;
function On(e) {
  le = e;
}
let gr = 1, ve = !1, O = null;
function $r() {
  return ++gr;
}
function Rn() {
  return !tr;
}
function je(e) {
  var o, a;
  var t = e.f;
  if (t & fe)
    return !0;
  if (t & He) {
    var r = e.deps, n = (t & $e) !== 0;
    if (r !== null) {
      var i;
      if (t & Xe) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= Xe;
      }
      for (i = 0; i < r.length; i++) {
        var s = r[i];
        if (je(
          /** @type {Derived} */
          s
        ) && lr(
          /** @type {Derived} */
          s
        ), n && y !== null && !ve && !((a = s == null ? void 0 : s.reactions) != null && a.includes(e)) && (s.reactions ?? (s.reactions = [])).push(e), s.version > e.version)
          return !0;
      }
    }
    (!n || y !== null && !ve) && W(e, R);
  }
  return !1;
}
function Ln(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & _t)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= _t;
      }
    r = r.parent;
  }
  throw ze = !1, e;
}
function Dn(e) {
  return (e.f & Se) === 0 && (e.parent === null || (e.parent.f & _t) === 0);
}
function it(e, t, r, n) {
  if (ze) {
    if (r === null && (ze = !1), Dn(t))
      throw e;
    return;
  }
  r !== null && (ze = !0);
  {
    Ln(e, t);
    return;
  }
}
function yr(e) {
  var d;
  var t = A, r = D, n = le, i = b, s = ve, o = z, a = O, c = e.f;
  A = /** @type {null | Value[]} */
  null, D = 0, le = null, b = c & (U | Ce) ? null : e, ve = !Ee && (c & $e) !== 0, z = null, O = e.ctx;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (A !== null) {
      var u;
      if (Ie(e, D), f !== null && D > 0)
        for (f.length = D + A.length, u = 0; u < A.length; u++)
          f[D + u] = A[u];
      else
        e.deps = f = A;
      if (!ve)
        for (u = D; u < f.length; u++)
          ((d = f[u]).reactions ?? (d.reactions = [])).push(e);
    } else f !== null && D < f.length && (Ie(e, D), f.length = D);
    return l;
  } finally {
    A = t, D = r, le = n, b = i, ve = s, z = o, O = a;
  }
}
function Pn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = r.indexOf(e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & V && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (A === null || !A.includes(t)) && (W(t, He), t.f & ($e | Xe) || (t.f ^= Xe), Ie(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ie(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Pn(e, r[n]);
}
function st(e) {
  var t = e.f;
  if (!(t & Se)) {
    W(e, R);
    var r = y, n = O;
    y = e;
    try {
      t & rt ? Cn(e) : dr(e), cr(e), fr(e);
      var i = yr(e);
      e.teardown = typeof i == "function" ? i : null, e.version = gr;
    } catch (s) {
      it(s, e, r, n || e.ctx);
    } finally {
      y = r;
    }
  }
}
function br() {
  if (xe > 1e3) {
    xe = 0;
    try {
      fn();
    } catch (e) {
      if (Pe !== null)
        it(e, Pe, null);
      else
        throw e;
    }
  }
  xe++;
}
function wr(e) {
  var t = e.length;
  if (t !== 0) {
    br();
    var r = Ee;
    Ee = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & R || (i.f ^= R);
        var s = [];
        Er(i, s), In(s);
      }
    } finally {
      Ee = r;
    }
  }
}
function In(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if (!(n.f & (Se | Y)))
        try {
          je(n) && (st(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? vr(n) : n.fn = null));
        } catch (i) {
          it(i, n, null, n.ctx);
        }
    }
}
function Mn() {
  if (De = !1, xe > 1001)
    return;
  const e = de;
  de = [], wr(e), De || (xe = 0, Pe = null);
}
function ot(e) {
  Ke === mr && (De || (De = !0, queueMicrotask(Mn))), Pe = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ce | U)) {
      if (!(r & R)) return;
      t.f ^= R;
    }
  }
  de.push(t);
}
function Er(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, s = (i & U) !== 0, o = s && (i & R) !== 0, a = r.next;
    if (!o && !(i & Y))
      if (i & Fe) {
        if (s)
          r.f ^= R;
        else
          try {
            je(r) && st(r);
          } catch (u) {
            it(u, r, null, r.ctx);
          }
        var c = r.first;
        if (c !== null) {
          r = c;
          continue;
        }
      } else i & Xt && n.push(r);
    if (a === null) {
      let u = r.parent;
      for (; u !== null; ) {
        if (e === u)
          break e;
        var l = u.next;
        if (l !== null) {
          r = l;
          continue e;
        }
        u = u.parent;
      }
    }
    r = a;
  }
  for (var f = 0; f < n.length; f++)
    c = n[f], t.push(c), Er(c, t);
}
function he(e) {
  var t = Ke, r = de;
  try {
    br();
    const i = [];
    Ke = An, de = i, De = !1, wr(r);
    var n = e == null ? void 0 : e();
    return Sn(), (de.length > 0 || i.length > 0) && he(), xe = 0, Pe = null, n;
  } finally {
    Ke = t, de = r;
  }
}
function E(e) {
  var f;
  var t = e.f, r = (t & V) !== 0;
  if (r && t & Se) {
    var n = ar(
      /** @type {Derived} */
      e
    );
    return Ot(
      /** @type {Derived} */
      e
    ), n;
  }
  if (b !== null) {
    z !== null && z.includes(e) && _n();
    var i = b.deps;
    A === null && i !== null && i[D] === e ? D++ : A === null ? A = [e] : A.push(e), le !== null && y !== null && y.f & R && !(y.f & U) && le.includes(e) && (W(y, fe), ot(y));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var s = (
      /** @type {Derived} */
      e
    ), o = s.parent, a = s; o !== null; )
      if (o.f & V) {
        var c = (
          /** @type {Derived} */
          o
        );
        a = c, o = c.parent;
      } else {
        var l = (
          /** @type {Effect} */
          o
        );
        (f = l.deriveds) != null && f.includes(a) || (l.deriveds ?? (l.deriveds = [])).push(a);
        break;
      }
  return r && (s = /** @type {Derived} */
  e, je(s) && lr(s)), e.v;
}
function xr(e) {
  const t = b;
  try {
    return b = null, e();
  } finally {
    b = t;
  }
}
const qn = ~(fe | He | R);
function W(e, t) {
  e.f = e.f & qn | t;
}
function ut(e, t = !1, r) {
  O = {
    p: O,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function at(e) {
  const t = O;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = y, n = b;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var s = o[i];
          F(s.effect), K(s.reaction), Lt(s.fn);
        }
      } finally {
        F(r), K(n);
      }
    }
    O = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Fn(e) {
  var t = b, r = y;
  K(null), F(null);
  try {
    return e();
  } finally {
    K(t), F(r);
  }
}
const kr = /* @__PURE__ */ new Set(), $t = /* @__PURE__ */ new Set();
function Hn(e, t, r, n) {
  function i(s) {
    if (n.capture || Ne.call(t, s), !s.cancelBubble)
      return Fn(() => r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? It(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function ht(e, t, r, n, i) {
  var s = { capture: n, passive: i }, o = Hn(e, t, r, s);
  (t === document.body || t === window || t === document) && En(() => {
    t.removeEventListener(e, o, s);
  });
}
function Tr(e) {
  for (var t = 0; t < e.length; t++)
    kr.add(e[t]);
  for (var r of $t)
    r(e);
}
function Ne(e) {
  var h;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((h = e.composedPath) == null ? void 0 : h.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, a = e.__root;
  if (a) {
    var c = i.indexOf(a);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = i.indexOf(t);
    if (l === -1)
      return;
    c <= l && (o = c);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    Je(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var f = b, u = y;
    K(null), F(null);
    try {
      for (var d, v = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var _ = s["__" + n];
          if (_ !== void 0 && !/** @type {any} */
          s.disabled)
            if (Ct(_)) {
              var [m, ...g] = _;
              m.apply(s, [e, ...g]);
            } else
              _.call(s, e);
        } catch ($) {
          d ? v.push($) : d = $;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        s = p;
      }
      if (d) {
        for (let $ of v)
          queueMicrotask(() => {
            throw $;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, K(f), F(u);
    }
  }
}
function Bn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Me(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var r = (t & Wr) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    if (k)
      return Me(x, null), x;
    n === void 0 && (n = Bn(i ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Te(n));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Me(s, s), s;
  };
}
function jn() {
  if (k)
    return Me(x, null), x;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ke();
  return e.append(t, r), Me(t, r), e;
}
function j(e, t) {
  if (k) {
    y.nodes_end = x, Be();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let yt = !0;
function pe(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Cr(e, t) {
  return Sr(e, t);
}
function Vn(e, t) {
  mt(), t.intro = t.intro ?? !1;
  const r = t.target, n = k, i = x;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Wt); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ce(s);
    if (!s)
      throw Re;
    X(!0), B(
      /** @type {Comment} */
      s
    ), Be();
    const o = Sr(e, { ...t, anchor: s });
    if (x === null || x.nodeType !== 8 || /** @type {Comment} */
    x.data !== Tt)
      throw Nt(), Re;
    return X(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Re)
      return t.recover === !1 && cn(), mt(), or(r), X(!1), Cr(e, t);
    throw o;
  } finally {
    X(n), B(i);
  }
}
const be = /* @__PURE__ */ new Map();
function Sr(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0 }) {
  mt();
  var a = /* @__PURE__ */ new Set(), c = (u) => {
    for (var d = 0; d < u.length; d++) {
      var v = u[d];
      if (!a.has(v)) {
        a.add(v);
        var p = Jr(v);
        t.addEventListener(v, Ne, { passive: p });
        var _ = be.get(v);
        _ === void 0 ? (document.addEventListener(v, Ne, { passive: p }), be.set(v, 1)) : be.set(v, _ + 1);
      }
    }
  };
  c(St(kr)), $t.add(c);
  var l = void 0, f = kn(() => {
    var u = r ?? t.appendChild(ke());
    return Le(() => {
      if (s) {
        ut({});
        var d = (
          /** @type {ComponentContext} */
          O
        );
        d.c = s;
      }
      i && (n.$$events = i), k && Me(
        /** @type {TemplateNode} */
        u,
        null
      ), yt = o, l = e(u, n) || {}, yt = !0, k && (y.nodes_end = x), s && at();
    }), () => {
      var p;
      for (var d of a) {
        t.removeEventListener(d, Ne);
        var v = (
          /** @type {number} */
          be.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Ne), be.delete(d)) : be.set(d, v);
      }
      $t.delete(c), u !== r && ((p = u.parentNode) == null || p.removeChild(u));
    };
  });
  return bt.set(l, f), l;
}
let bt = /* @__PURE__ */ new WeakMap();
function Un(e, t) {
  const r = bt.get(e);
  return r ? (bt.delete(e), r(t)) : Promise.resolve();
}
function tt(e, t, r = !1) {
  k && Be();
  var n = e, i = null, s = null, o = N, a = r ? nt : 0, c = !1;
  const l = (u, d = !0) => {
    c = !0, f(d, u);
  }, f = (u, d) => {
    if (o === (o = u)) return;
    let v = !1;
    if (k) {
      const p = (
        /** @type {Comment} */
        n.data === kt
      );
      !!o === p && (n = pt(), B(n), X(!1), v = !0);
    }
    o ? (i ? Qe(i) : d && (i = Le(() => d(n))), s && Ze(s, () => {
      s = null;
    })) : (s ? Qe(s) : d && (s = Le(() => d(n))), i && Ze(i, () => {
      i = null;
    })), v && X(!0);
  };
  Dt(() => {
    c = !1, t(l), c || f(null, null);
  }, a), k && (n = x);
}
function Yn(e, t) {
  return t;
}
function zn(e, t, r, n) {
  for (var i = [], s = t.length, o = 0; o < s; o++)
    Pt(t[o].e, i, !0);
  var a = s > 0 && i.length === 0 && r !== null;
  if (a) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    or(c), c.append(
      /** @type {Element} */
      r
    ), n.clear(), ne(e, t[0].prev, t[s - 1].next);
  }
  hr(i, () => {
    for (var l = 0; l < s; l++) {
      var f = t[l];
      a || (n.delete(f.k), ne(e, f.prev, f.next)), Z(f.e, !a);
    }
  });
}
function Kn(e, t, r, n, i, s = null) {
  var o = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var c = (
      /** @type {Element} */
      e
    );
    o = k ? B(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Te(c)
    ) : c.appendChild(ke());
  }
  k && Be();
  var l = null, f = !1;
  Dt(() => {
    var u = r(), d = Ct(u) ? u : u == null ? [] : St(u), v = d.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let p = !1;
    if (k) {
      var _ = (
        /** @type {Comment} */
        o.data === kt
      );
      _ !== (v === 0) && (o = pt(), B(o), X(!1), p = !0);
    }
    if (k) {
      for (var m = null, g, h = 0; h < v; h++) {
        if (x.nodeType === 8 && /** @type {Comment} */
        x.data === Tt) {
          o = /** @type {Comment} */
          x, p = !0, X(!1);
          break;
        }
        var $ = d[h], C = n($, h);
        g = Ar(
          x,
          a,
          m,
          null,
          $,
          C,
          h,
          i,
          t
        ), a.items.set(C, g), m = g;
      }
      v > 0 && B(pt());
    }
    if (!k) {
      var T = (
        /** @type {Effect} */
        b
      );
      Wn(
        d,
        a,
        o,
        i,
        t,
        (T.f & Y) !== 0,
        n
      );
    }
    s !== null && (v === 0 ? l ? Qe(l) : l = Le(() => s(o)) : l !== null && Ze(l, () => {
      l = null;
    })), p && X(!0);
  }), k && (o = x);
}
function Wn(e, t, r, n, i, s, o, a) {
  var c = e.length, l = t.items, f = t.first, u = f, d, v = null, p = [], _ = [], m, g, h, $;
  for ($ = 0; $ < c; $ += 1) {
    if (m = e[$], g = o(m, $), h = l.get(g), h === void 0) {
      var C = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : r;
      v = Ar(
        C,
        t,
        v,
        v === null ? t.first : v.next,
        m,
        g,
        $,
        n,
        i
      ), l.set(g, v), p = [], _ = [], u = v.next;
      continue;
    }
    if (Gn(h, m, $), h.e.f & Y && Qe(h.e), h !== u) {
      if (d !== void 0 && d.has(h)) {
        if (p.length < _.length) {
          var T = _[0], L;
          v = T.prev;
          var Ve = p[0], ee = p[p.length - 1];
          for (L = 0; L < p.length; L += 1)
            Vt(p[L], T, r);
          for (L = 0; L < _.length; L += 1)
            d.delete(_[L]);
          ne(t, Ve.prev, ee.next), ne(t, v, Ve), ne(t, ee, T), u = T, v = ee, $ -= 1, p = [], _ = [];
        } else
          d.delete(h), Vt(h, u, r), ne(t, h.prev, h.next), ne(t, h, v === null ? t.first : v.next), ne(t, v, h), v = h;
        continue;
      }
      for (p = [], _ = []; u !== null && u.k !== g; )
        (s || !(u.e.f & Y)) && (d ?? (d = /* @__PURE__ */ new Set())).add(u), _.push(u), u = u.next;
      if (u === null)
        continue;
      h = u;
    }
    p.push(h), v = h, u = h.next;
  }
  if (u !== null || d !== void 0) {
    for (var ct = d === void 0 ? [] : St(d); u !== null; )
      (s || !(u.e.f & Y)) && ct.push(u), u = u.next;
    var Mr = ct.length;
    if (Mr > 0) {
      var qr = c === 0 ? r : null;
      zn(t, ct, qr, l);
    }
  }
  y.first = t.first && t.first.e, y.last = v && v.e;
}
function Gn(e, t, r, n) {
  rr(e.v, t), e.i = r;
}
function Ar(e, t, r, n, i, s, o, a, c, l) {
  var f = (c & jr) !== 0, u = (c & Ur) === 0, d = f ? u ? /* @__PURE__ */ At(i) : M(i) : i, v = c & Vr ? M(o) : o, p = {
    i: v,
    v: d,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return p.e = Le(() => a(e, d, v), k), p.e.prev = r && r.e, p.e.next = n && n.e, r === null ? t.first = p : (r.next = p, r.e.next = p.e), n !== null && (n.prev = p, n.e.prev = p.e), p;
  } finally {
  }
}
function Vt(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ce(s)
    );
    i.before(s), s = o;
  }
}
function ne(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function wt(e, t, r, n, i) {
  var a;
  k && Be();
  var s = (a = t.$$slots) == null ? void 0 : a[r], o = !1;
  s === !0 && (s = t[r === "default" ? "children" : r], o = !0), s === void 0 || s(e, o ? () => n : n);
}
function lt(e, t) {
  It(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function Jn(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  k && (i[t] = e.getAttribute(t)), i[t] !== (i[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && Xn(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Ut = /* @__PURE__ */ new Map();
function Xn(e) {
  var t = Ut.get(e.nodeName);
  if (t) return t;
  Ut.set(e.nodeName, t = []);
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = Xr(n);
    for (var s in r)
      r[s].set && t.push(s);
    n = Jt(n);
  }
  return t;
}
function Zn(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
const Qn = () => performance.now(), J = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Qn(),
  tasks: /* @__PURE__ */ new Set()
};
function Nr() {
  const e = J.now();
  J.tasks.forEach((t) => {
    t.c(e) || (J.tasks.delete(t), t.f());
  }), J.tasks.size !== 0 && J.tick(Nr);
}
function ei(e) {
  let t;
  return J.tasks.size === 0 && J.tick(Nr), {
    promise: new Promise((r) => {
      J.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      J.tasks.delete(t);
    }
  };
}
function Ye(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function ti(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Yt(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, s] = n.split(":");
    if (!i || s === void 0) break;
    const o = ti(i.trim());
    t[o] = s.trim();
  }
  return t;
}
const ri = (e) => e;
function zt(e, t, r, n) {
  var i = (e & Yr) !== 0, s = (e & zr) !== 0, o = i && s, a = (e & Kr) !== 0, c = o ? "both" : i ? "in" : "out", l, f = t.inert, u, d;
  function v() {
    var h = b, $ = y;
    K(null), F(null);
    try {
      return l ?? (l = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: c
      }));
    } finally {
      K(h), F($);
    }
  }
  var p = {
    is_global: a,
    in() {
      var h;
      if (t.inert = f, !i) {
        d == null || d.abort(), (h = d == null ? void 0 : d.reset) == null || h.call(d);
        return;
      }
      s || u == null || u.abort(), Ye(t, "introstart"), u = Et(t, v(), d, 1, () => {
        Ye(t, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(h) {
      if (!s) {
        h == null || h(), l = void 0;
        return;
      }
      t.inert = !0, Ye(t, "outrostart"), d = Et(t, v(), u, 0, () => {
        Ye(t, "outroend"), h == null || h();
      });
    },
    stop: () => {
      u == null || u.abort(), d == null || d.abort();
    }
  }, _ = (
    /** @type {Effect} */
    y
  );
  if ((_.transitions ?? (_.transitions = [])).push(p), i && yt) {
    var m = a;
    if (!m) {
      for (var g = (
        /** @type {Effect | null} */
        _.parent
      ); g && g.f & nt; )
        for (; (g = g.parent) && !(g.f & rt); )
          ;
      m = !g || (g.f & Zt) !== 0;
    }
    m && Lt(() => {
      xr(() => p.in());
    });
  }
}
function Et(e, t, r, n, i) {
  var s = n === 1;
  if (en(t)) {
    var o, a = !1;
    return It(() => {
      if (!a) {
        var m = t({ direction: s ? "in" : "out" });
        o = Et(e, m, r, n, i);
      }
    }), {
      abort: () => {
        a = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return i(), {
      abort: Ae,
      deactivate: Ae,
      reset: Ae,
      t: () => n
    };
  const { delay: c = 0, css: l, tick: f, easing: u = ri } = t;
  var d = [];
  if (s && r === void 0 && (f && f(0, 1), l)) {
    var v = Yt(l(0, 1));
    d.push(v, v);
  }
  var p = () => 1 - n, _ = e.animate(d, { duration: c });
  return _.onfinish = () => {
    var m = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var g = n - m, h = (
      /** @type {number} */
      t.duration * Math.abs(g)
    ), $ = [];
    if (h > 0) {
      if (l)
        for (var C = Math.ceil(h / 16.666666666666668), T = 0; T <= C; T += 1) {
          var L = m + g * u(T / C), Ve = l(L, 1 - L);
          $.push(Yt(Ve));
        }
      p = () => {
        var ee = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return m + g * u(ee / h);
      }, f && ei(() => {
        if (_.playState !== "running") return !1;
        var ee = p();
        return f(ee, 1 - ee), !0;
      });
    }
    _ = e.animate($, { duration: h, fill: "forwards" }), _.onfinish = () => {
      p = () => n, f == null || f(n, 1 - n), i();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = Ae);
    },
    deactivate: () => {
      i = Ae;
    },
    reset: () => {
      n === 0 && (f == null || f(1, 0));
    },
    t: () => p()
  };
}
const ni = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function ii(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    ni
  );
}
function si(e) {
  for (var t = y, r = y; t !== null && !(t.f & (U | Ce)); )
    t = t.parent;
  try {
    return F(t), e();
  } finally {
    F(r);
  }
}
function Oe(e, t, r, n) {
  var h;
  var i = !tr, s = !1, o;
  o = /** @type {V} */
  e[t];
  var a = ((h = _e(e, t)) == null ? void 0 : h.set) ?? void 0, c = (
    /** @type {V} */
    n
  ), l = !0, f = !1, u = () => (f = !0, l && (l = !1, c = /** @type {V} */
  n), c);
  o === void 0 && n !== void 0 && (a && i && dn(), o = u(), a && a(o));
  var d;
  if (d = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? u() : (l = !0, f = !1, $);
  }, a) {
    var v = e.$$legacy;
    return function($, C) {
      return arguments.length > 0 ? ((!C || v || s) && a(C ? d() : $), $) : d();
    };
  }
  var p = !1, _ = !1, m = /* @__PURE__ */ At(o), g = si(
    () => /* @__PURE__ */ $n(() => {
      var $ = d(), C = E(m);
      return p ? (p = !1, _ = !0, C) : (_ = !1, m.v = $);
    })
  );
  return function($, C) {
    if (arguments.length > 0) {
      const T = C ? E(g) : $;
      return g.equals(T) || (p = !0, S(m, T), f && c !== void 0 && (c = T), xr(() => E(g))), $;
    }
    return E(g);
  };
}
function oi(e) {
  return new ui(e);
}
var G, I;
class ui {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    te(this, G);
    /** @type {Record<string, any>} */
    te(this, I);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (o, a) => {
      var c = /* @__PURE__ */ At(a);
      return r.set(o, c), c;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, a) {
          return E(r.get(a) ?? n(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === nn ? !0 : (E(r.get(a) ?? n(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, c) {
          return S(r.get(a) ?? n(a, c), c), Reflect.set(o, a, c);
        }
      }
    );
    re(this, I, (t.hydrate ? Vn : Cr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && he(), re(this, G, i.$$events);
    for (const o of Object.keys(w(this, I)))
      o === "$set" || o === "$destroy" || o === "$on" || Je(this, o, {
        get() {
          return w(this, I)[o];
        },
        /** @param {any} value */
        set(a) {
          w(this, I)[o] = a;
        },
        enumerable: !0
      });
    w(this, I).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, w(this, I).$destroy = () => {
      Un(w(this, I));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    w(this, I).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    w(this, G)[t] = w(this, G)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return w(this, G)[t].push(n), () => {
      w(this, G)[t] = w(this, G)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    w(this, I).$destroy();
  }
}
G = new WeakMap(), I = new WeakMap();
let Or;
typeof HTMLElement == "function" && (Or = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    H(this, "$$ctor");
    /** Slots */
    H(this, "$$s");
    /** @type {any} The Svelte component instance */
    H(this, "$$c");
    /** Whether or not the custom element is connected */
    H(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    H(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    H(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    H(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    H(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    H(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    H(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let r = function(s) {
        return (o) => {
          const a = document.createElement("slot");
          s !== "default" && (a.name = s), j(o, a);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = ai(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = We(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = oi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = xn(() => {
        Tn(() => {
          var s;
          this.$$r = !0;
          for (const o of Ge(this.$$c)) {
            if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = We(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const a = this.$$c.$on(s, o);
          this.$$l_u.set(o, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = We(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Ge(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function We(e, t, r, n) {
  var s;
  const i = (s = r[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ai(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ft(e, t, r, n, i, s) {
  let o = class extends Or {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ge(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ge(t).forEach((a) => {
    Je(o.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(c) {
        var u;
        c = We(a, c, t), this.$$d[a] = c;
        var l = this.$$c;
        if (l) {
          var f = (u = _e(l, a)) == null ? void 0 : u.get;
          f ? l[a] = c : l.$set({ [a]: c });
        }
      }
    });
  }), n.forEach((a) => {
    Je(o.prototype, a, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[a];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const li = (e) => e;
function fi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function ci(e, { delay: t = 0, duration: r = 400, easing: n = li } = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function di(e, { delay: t = 0, duration: r = 400, easing: n = fi, start: i = 0, opacity: s = 0 } = {}) {
  const o = getComputedStyle(e), a = +o.opacity, c = o.transform === "none" ? "" : o.transform, l = 1 - i, f = a * (1 - s);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (u, d) => `
			transform: ${c} scale(${1 - l * d});
			opacity: ${a - f * d}
		`
  };
}
const Kt = (e, t, r, n, i, s, o) => {
  console.log("handleEvent  event: ", e), (e.type === "click" || "key" in e && (e.key === "Enter" || e.key === " ")) && (e.preventDefault(), t() === "share" ? r(n(), i(), s()) : o(s()));
};
var vi = /* @__PURE__ */ Q('<div class="toast svelte-e5daat" aria-live="polite"> </div>'), hi = /* @__PURE__ */ Q('<div role="presentation" tabindex="-1" class="svelte-e5daat"><!> <!></div>');
const _i = {
  hash: "svelte-e5daat",
  code: `:host {
    /* display: contents; */display:var(--button-display, block);width:fit-content;position:relative;}.svelte-e5daat:focus-visible {
    /* -webkit-focus-ring-color auto 1px; */outline:thin dotted;}.toast.svelte-e5daat {position:absolute;top:-50px;right:-50px;background-color:white;padding:8px 16px;border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);}.toast.error.svelte-e5daat {color:#f44336;}

  /* :host {
        background-color: var(--counter-background, aqua);
        color: var(--counter-text-color, red);
    } */`
};
function Rr(e, t) {
  ut(t, !0), lt(e, _i);
  let r = Oe(t, "action"), n = Oe(t, "entry"), i = Oe(t, "title", 7, ""), s = Oe(t, "text", 7, ""), o = ae(!0), a = ae(""), c = ae("success");
  const l = (_, m = "success", g = 1e3) => {
    S(a, ie(_)), S(c, ie(m)), setTimeout(
      () => {
        S(a, "");
      },
      g
    );
  }, f = async (_) => {
    try {
      await navigator.clipboard.writeText(_), l("Copié !");
    } catch (m) {
      console.error("Erreur lors de la copie : ", m), l("Échec de la copie", "error", 2e3);
    }
  }, u = async (_, m, g) => {
    if (!navigator.share) {
      console.error("Web Share API non disponible"), l("Partage non disponible sur ce navigateur", "error", 2e3);
      return;
    }
    try {
      const h = { title: _, text: m, url: g };
      await navigator.share(h);
    } catch (h) {
      console.error("Erreur lors du partage :", h), l("Échec du partage", "error", 2e3);
    }
  };
  Rt(() => {
    r() === "share" && !navigator.share && S(o, !1), t.$$host.style.setProperty("--button-display", E(o) ? "block" : "none");
  });
  var d = jn(), v = gn(d);
  {
    var p = (_) => {
      var m = hi();
      m.__click = [
        Kt,
        r,
        u,
        i,
        s,
        n,
        f
      ], m.__keydown = [
        Kt,
        r,
        u,
        i,
        s,
        n,
        f
      ];
      var g = q(m);
      wt(g, t, "button", {});
      var h = me(g, 2);
      {
        var $ = (C) => {
          var T = vi(), L = q(T, !0);
          P(T), we(() => {
            Zn(T, "error", E(c) === "error"), pe(L, E(a));
          }), zt(1, T, () => di), zt(2, T, () => ci, () => ({ duration: 600 })), j(C, T);
        };
        tt(h, (C) => {
          E(a) && C($);
        });
      }
      P(m), j(_, m);
    };
    tt(v, (_) => {
      E(o) && _(p);
    });
  }
  return j(e, d), at({
    get action() {
      return r();
    },
    set action(_) {
      r(_), he();
    },
    get entry() {
      return n();
    },
    set entry(_) {
      n(_), he();
    },
    get title() {
      return i();
    },
    set title(_ = "") {
      i(_), he();
    },
    get text() {
      return s();
    },
    set text(_ = "") {
      s(_), he();
    }
  });
}
Tr(["click", "keydown"]);
customElements.define("action-button", ft(Rr, { action: {}, entry: {}, title: {}, text: {} }, ["button"], [], !0));
class pi extends HTMLElement {
  constructor() {
    super(), new Rr({
      target: this
    });
  }
}
customElements.get("action-button") || customElements.define("action-button", pi);
const mi = (e, t, r) => {
  S(t, E(t) + 1), r();
};
var gi = /* @__PURE__ */ Q("<div>Title : <h2> </h2> <button> </button></div>");
const $i = {
  hash: "svelte-zq967x",
  code: ":host {display:block;padding:1rem;background-color:var(--counter-background, aqua);color:var(--counter-text-color, black);}"
};
function Lr(e, t) {
  ut(t, !0), lt(e, $i);
  let r = Oe(t, "buttonHeader"), n = ae(0);
  const i = () => {
    document.dispatchEvent(new CustomEvent("counter-update", {
      detail: { count: E(n) },
      bubbles: !0,
      composed: !0
    }));
  };
  Rt(() => {
    i();
  });
  var s = gi(), o = me(q(s)), a = q(o, !0);
  P(o);
  var c = me(o, 2);
  c.__click = [mi, n, i];
  var l = q(c);
  return P(c), P(s), we(() => {
    pe(a, r()), pe(l, `count is ${E(n) ?? ""}`);
  }), j(e, s), at({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(f) {
      r(f), he();
    }
  });
}
Tr(["click"]);
customElements.define("counter-component", ft(Lr, { buttonHeader: {} }, [], [], !0));
class yi extends HTMLElement {
  constructor() {
    super(), new Lr({
      target: this
    });
  }
}
customElements.get("counter-component") || customElements.define("counter-component", yi);
var bi = /* @__PURE__ */ Q("<p> </p>"), wi = /* @__PURE__ */ Q("<p>Pas de counter sur cette page</p>"), Ei = /* @__PURE__ */ Q('<div class="svelte-jz8ejc"><!> <!> <!></div>');
const xi = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function Dr(e, t) {
  ut(t, !0), lt(e, xi);
  let r = ae(0), n = ae(!1);
  Rt(() => {
    const f = () => {
      const v = document.querySelector("counter-component");
      S(n, !!v);
    };
    f();
    const u = (v) => {
      S(r, ie(v.detail.count));
    }, d = new MutationObserver(f);
    return d.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", u), () => {
      d.disconnect(), document.removeEventListener("counter-update", u);
    };
  });
  var i = Ei(), s = q(i);
  wt(s, t, "description", {});
  var o = me(s, 2);
  {
    var a = (f) => {
      var u = bi(), d = q(u);
      P(u), we(() => pe(d, `Valeur du compteur : ${E(r) ?? ""}`)), j(f, u);
    }, c = (f) => {
      var u = wi();
      j(f, u);
    };
    tt(o, (f) => {
      E(n) ? f(a) : f(c, !1);
    });
  }
  var l = me(o, 2);
  wt(l, t, "footer", {}), P(i), j(e, i), at();
}
customElements.define("counterdisplay-component", ft(Dr, {}, ["description", "footer"], [], !0));
class ki extends HTMLElement {
  constructor() {
    super(), new Dr({
      target: this
    });
  }
}
customElements.get("counterdisplay-component") || customElements.define("counterdisplay-component", ki);
var Ti = /* @__PURE__ */ Q('<div class="error svelte-8mx07a" role="alert"> </div>'), Ci = /* @__PURE__ */ Q('<button class="digit-button svelte-8mx07a" type="button"> </button>'), Si = /* @__PURE__ */ Q('<div class="secure-pin-pad svelte-8mx07a" role="application" aria-label="Pavé numérique sécurisé"><div class="display svelte-8mx07a" role="status" aria-live="polite"><span class="dots svelte-8mx07a"> </span> <!></div> <div class="keypad svelte-8mx07a" role="group" aria-label="Clavier numérique"></div></div>');
const Ai = {
  hash: "svelte-8mx07a",
  code: `.secure-pin-pad.svelte-8mx07a {background:#f5f5f5;padding:20px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);user-select:none;width:240px;margin:0 auto;}.display.svelte-8mx07a {background:white;padding:15px;border-radius:4px;margin-bottom:15px;text-align:center;min-height:30px;}.dots.svelte-8mx07a {font-size:24px;letter-spacing:4px;}.error.svelte-8mx07a {color:red;font-size:12px;margin-top:5px;}.keypad.svelte-8mx07a {display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;}.digit-button.svelte-8mx07a {background:white;border:1px solid #ddd;border-radius:4px;padding:15px;font-size:18px;cursor:pointer;transition:background-color 0.2s;}.digit-button.svelte-8mx07a:hover {background:#f0f0f0;}.digit-button.svelte-8mx07a:active {background:#e0e0e0;}

  /* Style pour désactiver la sélection de texte */* {-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}`
};
function Pr(e, t) {
  lt(e, Ai);
  const r = /* @__PURE__ */ ii(t, ["$$slots", "$$events", "$$legacy", "$$host"]), { layout: n, onDigitPress: i } = r;
  let s = ae(""), o = ae("");
  function a(m) {
    S(o, ""), i(m);
  }
  function c(m) {
    m.preventDefault();
  }
  var l = Si(), f = q(l), u = q(f), d = q(u, !0);
  P(u);
  var v = me(u, 2);
  {
    var p = (m) => {
      var g = Ti(), h = q(g, !0);
      P(g), we(() => pe(h, E(o))), j(m, g);
    };
    tt(v, (m) => {
      E(o) && m(p);
    });
  }
  P(f);
  var _ = me(f, 2);
  Kn(_, 21, () => n, Yn, (m, g) => {
    var h = Ci(), $ = q(h, !0);
    P(h), we(() => {
      Jn(h, "aria-label", `Chiffre ${E(g) ?? ""}`), pe($, E(g));
    }), ht("click", h, () => a(E(g))), j(m, h);
  }), P(_), P(l), we(() => pe(d, E(s))), ht("selectstart", l, c), ht("mousedown", l, c), j(e, l);
}
customElements.define("securepin-component", ft(Pr, {}, [], [], !0));
var se, oe, ue, qe, ge, xt, Ir;
class Ni extends HTMLElement {
  constructor() {
    super();
    te(this, ge);
    // Variables privées
    te(this, se, "");
    /** @type {number[]} */
    te(this, oe, []);
    te(this, ue);
    te(this, qe, 4);
    const r = this.attachShadow({ mode: "closed" });
    re(this, oe, Ue(this, ge, xt).call(this)), re(this, ue, new Pr({
      target: r,
      props: {
        layout: w(this, oe),
        onDigitPress: Ue(this, ge, Ir).bind(this)
      }
    }));
  }
  /**
   * Réinitialise le composant
   */
  reset() {
    re(this, se, ""), re(this, oe, Ue(this, ge, xt).call(this)), w(this, ue) && w(this, ue).$set({ layout: w(this, oe) });
  }
  /**
   * Nettoie les ressources lors de la suppression du composant
   */
  disconnectedCallback() {
    w(this, ue) && w(this, ue).$destroy();
  }
}
se = new WeakMap(), oe = new WeakMap(), ue = new WeakMap(), qe = new WeakMap(), ge = new WeakSet(), /**
 * Génère une disposition aléatoire des chiffres pour le clavier
 * @returns {number[]} Un tableau de chiffres dans un ordre aléatoire
 */
xt = function() {
  return Array.from({ length: 10 }, (n, i) => i).sort(() => Math.random() - 0.5);
}, /**
 * Gère l'appui sur un chiffre du clavier
 * @param {number} digit - Le chiffre pressé
 */
Ir = function(r) {
  if (w(this, se).length < w(this, qe) && (re(this, se, w(this, se) + r.toString()), w(this, se).length === w(this, qe))) {
    const n = new CustomEvent("pinComplete", {
      detail: {
        pin: w(this, se),
        layout: [...w(this, oe)]
      },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
};
customElements.get("securepin-component") || customElements.define("securepin-component", Ni);
