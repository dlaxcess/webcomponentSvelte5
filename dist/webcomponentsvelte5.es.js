var Ue = Object.defineProperty;
var Xt = (t) => {
  throw TypeError(t);
};
var Ke = (t, e, r) => e in t ? Ue(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => Ke(t, typeof e != "symbol" ? e + "" : e, r), te = (t, e, r) => e.has(t) || Xt("Cannot " + r);
var E = (t, e, r) => (te(t, e, "read from private field"), r ? r.call(t) : e.get(t)), St = (t, e, r) => e.has(t) ? Xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), At = (t, e, r, n) => (te(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const ze = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ze);
const We = 2, le = "[", ie = "[!", oe = "]", lt = {}, T = Symbol(), Je = ["touchstart", "touchmove"];
function Ge(t) {
  return Je.includes(t);
}
const ae = !1;
var fe = Array.isArray, Ze = Array.from, yt = Object.keys, gt = Object.defineProperty, z = Object.getOwnPropertyDescriptor, Qe = Object.prototype, Xe = Array.prototype, tr = Object.getPrototypeOf;
function er(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const D = 2, ce = 4, xt = 8, Bt = 16, L = 32, rt = 64, Lt = 128, W = 256, wt = 512, O = 1024, M = 2048, dt = 4096, tt = 8192, nt = 16384, rr = 32768, Ut = 65536, nr = 1 << 19, _e = 1 << 20, Dt = Symbol("$state"), sr = Symbol("legacy props");
function de(t) {
  return t === this.v;
}
function ur(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function lr(t) {
  return !ur(t, this.v);
}
function ir(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function or() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ar(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function _r() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function hr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let $r = !1;
function P(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: de,
    version: 0
  };
  return r;
}
function Pt(t) {
  return /* @__PURE__ */ mr(P(t));
}
// @__NO_SIDE_EFFECTS__
function ve(t, e = !1) {
  const r = P(t);
  return e || (r.equals = lr), r;
}
// @__NO_SIDE_EFFECTS__
function mr(t) {
  return h !== null && h.f & D && (q === null ? Lr([t]) : q.push(t)), t;
}
function C(t, e) {
  return h !== null && qr() && h.f & (D | Bt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (q === null || !q.includes(t)) && hr(), pr(t, e);
}
function pr(t, e) {
  return t.equals(e) || (t.v = e, t.version = Le(), he(t, M), v !== null && v.f & O && !(v.f & L) && (g !== null && g.includes(t) ? (I(v, M), Nt(v)) : j === null ? Pr([t]) : j.push(t))), e;
}
function he(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var u = r[s], l = u.f;
      l & M || (I(u, e), l & (O | W) && (l & D ? he(
        /** @type {Derived} */
        u,
        dt
      ) : Nt(
        /** @type {Effect} */
        u
      )));
    }
}
function Kt(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let N = !1;
function Z(t) {
  N = t;
}
let p;
function H(t) {
  if (t === null)
    throw Kt(), lt;
  return p = t;
}
function zt() {
  return H(
    /** @type {TemplateNode} */
    /* @__PURE__ */ st(p)
  );
}
function it(t) {
  if (N) {
    if (/* @__PURE__ */ st(p) !== null)
      throw Kt(), lt;
    p = t;
  }
}
function yr() {
  for (var t = 0, e = p; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === oe) {
        if (t === 0) return e;
        t -= 1;
      } else (r === le || r === ie) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(e)
    );
    e.remove(), e = n;
  }
}
function G(t, e = null, r) {
  if (typeof t != "object" || t === null || Dt in t)
    return t;
  const n = tr(t);
  if (n !== Qe && n !== Xe)
    return t;
  var s = /* @__PURE__ */ new Map(), u = fe(t), l = P(0);
  u && s.set("length", P(
    /** @type {any[]} */
    t.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(i, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && _r();
        var c = s.get(o);
        return c === void 0 ? (c = P(f.value), s.set(o, c)) : C(c, G(f.value, a)), !0;
      },
      deleteProperty(i, o) {
        var f = s.get(o);
        if (f === void 0)
          o in i && s.set(o, P(T));
        else {
          if (u && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              s.get("length")
            ), _ = Number(o);
            Number.isInteger(_) && _ < c.v && C(c, _);
          }
          C(f, T), ee(l);
        }
        return !0;
      },
      get(i, o, f) {
        var $;
        if (o === Dt)
          return t;
        var c = s.get(o), _ = o in i;
        if (c === void 0 && (!_ || ($ = z(i, o)) != null && $.writable) && (c = P(G(_ ? i[o] : T, a)), s.set(o, c)), c !== void 0) {
          var d = w(c);
          return d === T ? void 0 : d;
        }
        return Reflect.get(i, o, f);
      },
      getOwnPropertyDescriptor(i, o) {
        var f = Reflect.getOwnPropertyDescriptor(i, o);
        if (f && "value" in f) {
          var c = s.get(o);
          c && (f.value = w(c));
        } else if (f === void 0) {
          var _ = s.get(o), d = _ == null ? void 0 : _.v;
          if (_ !== void 0 && d !== T)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return f;
      },
      has(i, o) {
        var d;
        if (o === Dt)
          return !0;
        var f = s.get(o), c = f !== void 0 && f.v !== T || Reflect.has(i, o);
        if (f !== void 0 || v !== null && (!c || (d = z(i, o)) != null && d.writable)) {
          f === void 0 && (f = P(c ? G(i[o], a) : T), s.set(o, f));
          var _ = w(f);
          if (_ === T)
            return !1;
        }
        return c;
      },
      set(i, o, f, c) {
        var b;
        var _ = s.get(o), d = o in i;
        if (u && o === "length")
          for (var $ = f; $ < /** @type {Source<number>} */
          _.v; $ += 1) {
            var y = s.get($ + "");
            y !== void 0 ? C(y, T) : $ in i && (y = P(T), s.set($ + "", y));
          }
        _ === void 0 ? (!d || (b = z(i, o)) != null && b.writable) && (_ = P(void 0), C(_, G(f, a)), s.set(o, _)) : (d = _.v !== T, C(_, G(f, a)));
        var S = Reflect.getOwnPropertyDescriptor(i, o);
        if (S != null && S.set && S.set.call(c, f), !d) {
          if (u && typeof o == "string") {
            var B = (
              /** @type {Source<number>} */
              s.get("length")
            ), m = Number(o);
            Number.isInteger(m) && m >= B.v && C(B, m + 1);
          }
          ee(l);
        }
        return !0;
      },
      ownKeys(i) {
        w(l);
        var o = Reflect.ownKeys(i).filter((_) => {
          var d = s.get(_);
          return d === void 0 || d.v !== T;
        });
        for (var [f, c] of s)
          c.v !== T && !(f in i) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        dr();
      }
    }
  );
}
function ee(t, e = 1) {
  C(t, t.v + e);
}
var re, $e, me;
function qt() {
  if (re === void 0) {
    re = window;
    var t = Element.prototype, e = Node.prototype;
    $e = z(e, "firstChild").get, me = z(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function bt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Et(t) {
  return $e.call(t);
}
// @__NO_SIDE_EFFECTS__
function st(t) {
  return me.call(t);
}
function ot(t, e) {
  if (!N)
    return /* @__PURE__ */ Et(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Et(p)
  );
  if (r === null)
    r = p.appendChild(bt());
  else if (e && r.nodeType !== 3) {
    var n = bt();
    return r == null || r.before(n), H(n), n;
  }
  return H(r), r;
}
function gr(t, e = 1, r = !1) {
  let n = N ? p : t;
  for (var s; e--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ st(n);
  if (!N)
    return n;
  var u = n == null ? void 0 : n.nodeType;
  if (r && u !== 3) {
    var l = bt();
    return n === null ? s == null || s.after(l) : n.before(l), H(l), l;
  }
  return H(n), /** @type {TemplateNode} */
  n;
}
function wr(t) {
  t.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function br(t) {
  var e = D | M;
  v === null ? e |= W : v.f |= _e;
  var r = h !== null && h.f & D ? (
    /** @type {Derived} */
    h
  ) : null;
  const n = {
    children: null,
    ctx: x,
    deps: null,
    equals: de,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? v
  };
  return r !== null && (r.children ?? (r.children = [])).push(n), n;
}
function pe(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var r = 0; r < e.length; r += 1) {
      var n = e[r];
      n.f & D ? Wt(
        /** @type {Derived} */
        n
      ) : Y(
        /** @type {Effect} */
        n
      );
    }
  }
}
function Er(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & D))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ye(t) {
  var e, r = v;
  V(Er(t));
  try {
    pe(t), e = Pe(t);
  } finally {
    V(r);
  }
  return e;
}
function ge(t) {
  var e = ye(t), r = (K || t.f & W) && t.deps !== null ? dt : O;
  I(t, r), t.equals(e) || (t.v = e, t.version = Le());
}
function Wt(t) {
  pe(t), _t(t, 0), I(t, nt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Tr(t) {
  v === null && h === null && ar(), h !== null && h.f & W && or(), Jt && ir();
}
function xr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function ut(t, e, r, n = !0) {
  var s = (t & rt) !== 0, u = v, l = {
    ctx: x,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | M,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: s ? null : u,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var a = Q;
    try {
      se(!0), Ct(l), l.f |= rr;
    } catch (f) {
      throw Y(l), f;
    } finally {
      se(a);
    }
  } else e !== null && Nt(l);
  var i = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & _e) === 0;
  if (!i && !s && n && (u !== null && xr(l, u), h !== null && h.f & D)) {
    var o = (
      /** @type {Derived} */
      h
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function we(t) {
  Tr();
  var e = v !== null && (v.f & L) !== 0 && x !== null && !x.m;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      x
    );
    (r.e ?? (r.e = [])).push({
      fn: t,
      effect: v,
      reaction: h
    });
  } else {
    var n = be(t);
    return n;
  }
}
function kr(t) {
  const e = ut(rt, t, !0);
  return () => {
    Y(e);
  };
}
function Cr(t) {
  const e = ut(rt, t, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? It(e, () => {
      Y(e), n(void 0);
    }) : (Y(e), n(void 0));
  });
}
function be(t) {
  return ut(ce, t, !1);
}
function Nr(t) {
  return ut(xt, t, !0);
}
function Ee(t) {
  return Te(t);
}
function Te(t, e = 0) {
  return ut(xt | Bt | e, t, !0);
}
function Ft(t, e = !0) {
  return ut(xt | L, t, !0, e);
}
function xe(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = Jt, n = h;
    ue(!0), et(null);
    try {
      e.call(null);
    } finally {
      ue(r), et(n);
    }
  }
}
function ke(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      Wt(e[r]);
  }
}
function Ce(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    Y(r, e), r = n;
  }
}
function Or(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & L || Y(e), e = r;
  }
}
function Y(t, e = !0) {
  var r = !1;
  if ((e || t.f & nr) && t.nodes_start !== null) {
    for (var n = t.nodes_start, s = t.nodes_end; n !== null; ) {
      var u = n === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(n)
      );
      n.remove(), n = u;
    }
    r = !0;
  }
  Ce(t, e && !r), ke(t), _t(t, 0), I(t, nt);
  var l = t.transitions;
  if (l !== null)
    for (const i of l)
      i.stop();
  xe(t);
  var a = t.parent;
  a !== null && a.first !== null && Ne(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Ne(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function It(t, e) {
  var r = [];
  Oe(t, r, !0), Rr(r, () => {
    Y(t), e && e();
  });
}
function Rr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var s of t)
      s.out(n);
  } else
    e();
}
function Oe(t, e, r) {
  if (!(t.f & tt)) {
    if (t.f ^= tt, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var s = n.next, u = (n.f & Ut) !== 0 || (n.f & L) !== 0;
      Oe(n, e, u ? r : !1), n = s;
    }
  }
}
function ne(t) {
  Re(t, !0);
}
function Re(t, e) {
  if (t.f & tt) {
    vt(t) && Ct(t), t.f ^= tt;
    for (var r = t.first; r !== null; ) {
      var n = r.next, s = (r.f & Ut) !== 0 || (r.f & L) !== 0;
      Re(r, s ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const u of t.transitions)
        (u.is_global || e) && u.in();
  }
}
let Tt = !1, jt = [];
function Se() {
  Tt = !1;
  const t = jt.slice();
  jt = [], er(t);
}
function Sr(t) {
  Tt || (Tt = !0, queueMicrotask(Se)), jt.push(t);
}
function Ar() {
  Tt && Se();
}
const Ae = 0, Dr = 1;
let $t = !1, mt = Ae, ft = !1, ct = null, Q = !1, Jt = !1;
function se(t) {
  Q = t;
}
function ue(t) {
  Jt = t;
}
let U = [], X = 0;
let h = null;
function et(t) {
  h = t;
}
let v = null;
function V(t) {
  v = t;
}
let q = null;
function Lr(t) {
  q = t;
}
let g = null, k = 0, j = null;
function Pr(t) {
  j = t;
}
let De = 1, K = !1, x = null;
function Le() {
  return ++De;
}
function qr() {
  return !$r;
}
function vt(t) {
  var l, a;
  var e = t.f;
  if (e & M)
    return !0;
  if (e & dt) {
    var r = t.deps, n = (e & W) !== 0;
    if (r !== null) {
      var s;
      if (e & wt) {
        for (s = 0; s < r.length; s++)
          ((l = r[s]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= wt;
      }
      for (s = 0; s < r.length; s++) {
        var u = r[s];
        if (vt(
          /** @type {Derived} */
          u
        ) && ge(
          /** @type {Derived} */
          u
        ), n && v !== null && !K && !((a = u == null ? void 0 : u.reactions) != null && a.includes(t)) && (u.reactions ?? (u.reactions = [])).push(t), u.version > t.version)
          return !0;
      }
    }
    (!n || v !== null && !K) && I(t, O);
  }
  return !1;
}
function Fr(t, e) {
  for (var r = e; r !== null; ) {
    if (r.f & Lt)
      try {
        r.fn(t);
        return;
      } catch {
        r.f ^= Lt;
      }
    r = r.parent;
  }
  throw $t = !1, t;
}
function Ir(t) {
  return (t.f & nt) === 0 && (t.parent === null || (t.parent.f & Lt) === 0);
}
function kt(t, e, r, n) {
  if ($t) {
    if (r === null && ($t = !1), Ir(e))
      throw t;
    return;
  }
  r !== null && ($t = !0);
  {
    Fr(t, e);
    return;
  }
}
function Pe(t) {
  var _;
  var e = g, r = k, n = j, s = h, u = K, l = q, a = x, i = t.f;
  g = /** @type {null | Value[]} */
  null, k = 0, j = null, h = i & (L | rt) ? null : t, K = !Q && (i & W) !== 0, q = null, x = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), f = t.deps;
    if (g !== null) {
      var c;
      if (_t(t, k), f !== null && k > 0)
        for (f.length = k + g.length, c = 0; c < g.length; c++)
          f[k + c] = g[c];
      else
        t.deps = f = g;
      if (!K)
        for (c = k; c < f.length; c++)
          ((_ = f[c]).reactions ?? (_.reactions = [])).push(t);
    } else f !== null && k < f.length && (_t(t, k), f.length = k);
    return o;
  } finally {
    g = e, k = r, j = n, h = s, K = u, q = l, x = a;
  }
}
function jr(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = r.indexOf(t);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = e.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  r === null && e.f & D && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (g === null || !g.includes(e)) && (I(e, dt), e.f & (W | wt) || (e.f ^= wt), _t(
    /** @type {Derived} **/
    e,
    0
  ));
}
function _t(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      jr(t, r[n]);
}
function Ct(t) {
  var e = t.f;
  if (!(e & nt)) {
    I(t, O);
    var r = v, n = x;
    v = t;
    try {
      e & Bt ? Or(t) : Ce(t), ke(t), xe(t);
      var s = Pe(t);
      t.teardown = typeof s == "function" ? s : null, t.version = De;
    } catch (u) {
      kt(u, t, r, n || t.ctx);
    } finally {
      v = r;
    }
  }
}
function qe() {
  if (X > 1e3) {
    X = 0;
    try {
      fr();
    } catch (t) {
      if (ct !== null)
        kt(t, ct, null);
      else
        throw t;
    }
  }
  X++;
}
function Fe(t) {
  var e = t.length;
  if (e !== 0) {
    qe();
    var r = Q;
    Q = !0;
    try {
      for (var n = 0; n < e; n++) {
        var s = t[n];
        s.f & O || (s.f ^= O);
        var u = [];
        Ie(s, u), Mr(u);
      }
    } finally {
      Q = r;
    }
  }
}
function Mr(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      if (!(n.f & (nt | tt)))
        try {
          vt(n) && (Ct(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ne(n) : n.fn = null));
        } catch (s) {
          kt(s, n, null, n.ctx);
        }
    }
}
function Hr() {
  if (ft = !1, X > 1001)
    return;
  const t = U;
  U = [], Fe(t), ft || (X = 0, ct = null);
}
function Nt(t) {
  mt === Ae && (ft || (ft = !0, queueMicrotask(Hr))), ct = t;
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (rt | L)) {
      if (!(r & O)) return;
      e.f ^= O;
    }
  }
  U.push(e);
}
function Ie(t, e) {
  var r = t.first, n = [];
  t: for (; r !== null; ) {
    var s = r.f, u = (s & L) !== 0, l = u && (s & O) !== 0, a = r.next;
    if (!l && !(s & tt))
      if (s & xt) {
        if (u)
          r.f ^= O;
        else
          try {
            vt(r) && Ct(r);
          } catch (c) {
            kt(c, r, null, r.ctx);
          }
        var i = r.first;
        if (i !== null) {
          r = i;
          continue;
        }
      } else s & ce && n.push(r);
    if (a === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (t === c)
          break t;
        var o = c.next;
        if (o !== null) {
          r = o;
          continue t;
        }
        c = c.parent;
      }
    }
    r = a;
  }
  for (var f = 0; f < n.length; f++)
    i = n[f], e.push(i), Ie(i, e);
}
function Gt(t) {
  var e = mt, r = U;
  try {
    qe();
    const s = [];
    mt = Dr, U = s, ft = !1, Fe(r);
    var n = t == null ? void 0 : t();
    return Ar(), (U.length > 0 || s.length > 0) && Gt(), X = 0, ct = null, n;
  } finally {
    mt = e, U = r;
  }
}
function w(t) {
  var f;
  var e = t.f, r = (e & D) !== 0;
  if (r && e & nt) {
    var n = ye(
      /** @type {Derived} */
      t
    );
    return Wt(
      /** @type {Derived} */
      t
    ), n;
  }
  if (h !== null) {
    q !== null && q.includes(t) && vr();
    var s = h.deps;
    g === null && s !== null && s[k] === t ? k++ : g === null ? g = [t] : g.push(t), j !== null && v !== null && v.f & O && !(v.f & L) && j.includes(t) && (I(v, M), Nt(v));
  } else if (r && /** @type {Derived} */
  t.deps === null)
    for (var u = (
      /** @type {Derived} */
      t
    ), l = u.parent, a = u; l !== null; )
      if (l.f & D) {
        var i = (
          /** @type {Derived} */
          l
        );
        a = i, l = i.parent;
      } else {
        var o = (
          /** @type {Effect} */
          l
        );
        (f = o.deriveds) != null && f.includes(a) || (o.deriveds ?? (o.deriveds = [])).push(a);
        break;
      }
  return r && (u = /** @type {Derived} */
  t, vt(u) && ge(u)), t.v;
}
function Yr(t) {
  const e = h;
  try {
    return h = null, t();
  } finally {
    h = e;
  }
}
const Vr = ~(M | dt | O);
function I(t, e) {
  t.f = t.f & Vr | e;
}
function Zt(t, e = !1, r) {
  x = {
    p: x,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function Qt(t) {
  const e = x;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const l = e.e;
    if (l !== null) {
      var r = v, n = h;
      e.e = null;
      try {
        for (var s = 0; s < l.length; s++) {
          var u = l[s];
          V(u.effect), et(u.reaction), be(u.fn);
        }
      } finally {
        V(r), et(n);
      }
    }
    x = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
const je = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Set();
function Br(t) {
  for (var e = 0; e < t.length; e++)
    je.add(t[e]);
  for (var r of Mt)
    r(t);
}
function ht(t) {
  var m;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, s = ((m = t.composedPath) == null ? void 0 : m.call(t)) || [], u = (
    /** @type {null | Element} */
    s[0] || t.target
  ), l = 0, a = t.__root;
  if (a) {
    var i = s.indexOf(a);
    if (i !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = s.indexOf(e);
    if (o === -1)
      return;
    i <= o && (l = i);
  }
  if (u = /** @type {Element} */
  s[l] || t.target, u !== e) {
    gt(t, "currentTarget", {
      configurable: !0,
      get() {
        return u || r;
      }
    });
    var f = h, c = v;
    et(null), V(null);
    try {
      for (var _, d = []; u !== null; ) {
        var $ = u.assignedSlot || u.parentNode || /** @type {any} */
        u.host || null;
        try {
          var y = u["__" + n];
          if (y !== void 0 && !/** @type {any} */
          u.disabled)
            if (fe(y)) {
              var [S, ...B] = y;
              S.apply(u, [t, ...B]);
            } else
              y.call(u, t);
        } catch (b) {
          _ ? d.push(b) : _ = b;
        }
        if (t.cancelBubble || $ === e || $ === null)
          break;
        u = $;
      }
      if (_) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw _;
      }
    } finally {
      t.__root = e, delete t.currentTarget, et(f), V(c);
    }
  }
}
function Ur(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ht(t, e) {
  var r = (
    /** @type {Effect} */
    v
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Ot(t, e) {
  var r = (e & We) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (N)
      return Ht(p, null), p;
    n === void 0 && (n = Ur(s ? t : "<!>" + t), n = /** @type {Node} */
    /* @__PURE__ */ Et(n));
    var u = (
      /** @type {TemplateNode} */
      r ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ht(u, u), u;
  };
}
function at(t, e) {
  if (N) {
    v.nodes_end = p, zt();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Yt(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function Me(t, e) {
  return He(t, e);
}
function Kr(t, e) {
  qt(), e.intro = e.intro ?? !1;
  const r = e.target, n = N, s = p;
  try {
    for (var u = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Et(r)
    ); u && (u.nodeType !== 8 || /** @type {Comment} */
    u.data !== le); )
      u = /** @type {TemplateNode} */
      /* @__PURE__ */ st(u);
    if (!u)
      throw lt;
    Z(!0), H(
      /** @type {Comment} */
      u
    ), zt();
    const l = He(t, { ...e, anchor: u });
    if (p === null || p.nodeType !== 8 || /** @type {Comment} */
    p.data !== oe)
      throw Kt(), lt;
    return Z(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === lt)
      return e.recover === !1 && cr(), qt(), wr(r), Z(!1), Me(t, e);
    throw l;
  } finally {
    Z(n), H(s);
  }
}
const J = /* @__PURE__ */ new Map();
function He(t, { target: e, anchor: r, props: n = {}, events: s, context: u, intro: l = !0 }) {
  qt();
  var a = /* @__PURE__ */ new Set(), i = (c) => {
    for (var _ = 0; _ < c.length; _++) {
      var d = c[_];
      if (!a.has(d)) {
        a.add(d);
        var $ = Ge(d);
        e.addEventListener(d, ht, { passive: $ });
        var y = J.get(d);
        y === void 0 ? (document.addEventListener(d, ht, { passive: $ }), J.set(d, 1)) : J.set(d, y + 1);
      }
    }
  };
  i(Ze(je)), Mt.add(i);
  var o = void 0, f = Cr(() => {
    var c = r ?? e.appendChild(bt());
    return Ft(() => {
      if (u) {
        Zt({});
        var _ = (
          /** @type {ComponentContext} */
          x
        );
        _.c = u;
      }
      s && (n.$$events = s), N && Ht(
        /** @type {TemplateNode} */
        c,
        null
      ), o = t(c, n) || {}, N && (v.nodes_end = p), u && Qt();
    }), () => {
      var $;
      for (var _ of a) {
        e.removeEventListener(_, ht);
        var d = (
          /** @type {number} */
          J.get(_)
        );
        --d === 0 ? (document.removeEventListener(_, ht), J.delete(_)) : J.set(_, d);
      }
      Mt.delete(i), c !== r && (($ = c.parentNode) == null || $.removeChild(c));
    };
  });
  return Vt.set(o, f), o;
}
let Vt = /* @__PURE__ */ new WeakMap();
function zr(t, e) {
  const r = Vt.get(t);
  return r ? (Vt.delete(t), r(e)) : Promise.resolve();
}
function Wr(t, e, r = !1) {
  N && zt();
  var n = t, s = null, u = null, l = T, a = r ? Ut : 0, i = !1;
  const o = (c, _ = !0) => {
    i = !0, f(_, c);
  }, f = (c, _) => {
    if (l === (l = c)) return;
    let d = !1;
    if (N) {
      const $ = (
        /** @type {Comment} */
        n.data === ie
      );
      !!l === $ && (n = yr(), H(n), Z(!1), d = !0);
    }
    l ? (s ? ne(s) : _ && (s = Ft(() => _(n))), u && It(u, () => {
      u = null;
    })) : (u ? ne(u) : _ && (u = Ft(() => _(n))), s && It(s, () => {
      s = null;
    })), d && Z(!0);
  };
  Te(() => {
    i = !1, e(o), i || f(null, null);
  }, a), N && (n = p);
}
function Ye(t, e) {
  Sr(() => {
    var r = t.getRootNode(), n = (
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
    if (!n.querySelector("#" + e.hash)) {
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, n.appendChild(s);
    }
  });
}
function Jr(t) {
  for (var e = v, r = v; e !== null && !(e.f & (L | rt)); )
    e = e.parent;
  try {
    return V(e), t();
  } finally {
    V(r);
  }
}
function Gr(t, e, r, n) {
  var B;
  var s = !1, u;
  u = /** @type {V} */
  t[e];
  var l = ((B = z(t, e)) == null ? void 0 : B.set) ?? void 0, a = (
    /** @type {V} */
    n
  ), i = !0, o = !1, f = () => (o = !0, i && (i = !1, a = /** @type {V} */
  n), a), c;
  if (c = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? f() : (i = !0, o = !1, m);
  }, l) {
    var _ = t.$$legacy;
    return function(m, b) {
      return arguments.length > 0 ? ((!b || _ || s) && l(b ? c() : m), m) : c();
    };
  }
  var d = !1, $ = !1, y = /* @__PURE__ */ ve(u), S = Jr(
    () => /* @__PURE__ */ br(() => {
      var m = c(), b = w(y);
      return d ? (d = !1, $ = !0, b) : ($ = !1, y.v = m);
    })
  );
  return function(m, b) {
    if (arguments.length > 0) {
      const Rt = b ? w(S) : m;
      return S.equals(Rt) || (d = !0, C(y, Rt), o && a !== void 0 && (a = Rt), Yr(() => w(S))), m;
    }
    return w(S);
  };
}
function Zr(t) {
  return new Qr(t);
}
var F, R;
class Qr {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    St(this, F);
    /** @type {Record<string, any>} */
    St(this, R);
    var u;
    var r = /* @__PURE__ */ new Map(), n = (l, a) => {
      var i = /* @__PURE__ */ ve(a);
      return r.set(l, i), i;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, a) {
          return w(r.get(a) ?? n(a, Reflect.get(l, a)));
        },
        has(l, a) {
          return a === sr ? !0 : (w(r.get(a) ?? n(a, Reflect.get(l, a))), Reflect.has(l, a));
        },
        set(l, a, i) {
          return C(r.get(a) ?? n(a, i), i), Reflect.set(l, a, i);
        }
      }
    );
    At(this, R, (e.hydrate ? Kr : Me)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((u = e == null ? void 0 : e.props) != null && u.$$host) || e.sync === !1) && Gt(), At(this, F, s.$$events);
    for (const l of Object.keys(E(this, R)))
      l === "$set" || l === "$destroy" || l === "$on" || gt(this, l, {
        get() {
          return E(this, R)[l];
        },
        /** @param {any} value */
        set(a) {
          E(this, R)[l] = a;
        },
        enumerable: !0
      });
    E(this, R).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, E(this, R).$destroy = () => {
      zr(E(this, R));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    E(this, R).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    E(this, F)[e] = E(this, F)[e] || [];
    const n = (...s) => r.call(this, ...s);
    return E(this, F)[e].push(n), () => {
      E(this, F)[e] = E(this, F)[e].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    E(this, R).$destroy();
  }
}
F = new WeakMap(), R = new WeakMap();
let Ve;
typeof HTMLElement == "function" && (Ve = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    A(this, "$$ctor");
    /** Slots */
    A(this, "$$s");
    /** @type {any} The Svelte component instance */
    A(this, "$$c");
    /** Whether or not the custom element is connected */
    A(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    A(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    A(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    A(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    A(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    A(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    A(this, "$$me");
    this.$$ctor = e, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, r, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const s = this.$$c.$on(e, r);
      this.$$l_u.set(r, s);
    }
    super.addEventListener(e, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, r, n) {
    if (super.removeEventListener(e, r, n), this.$$c) {
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return (u) => {
          const l = document.createElement("slot");
          s !== "default" && (l.name = s), at(u, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Xr(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = e(s), r.default = !0) : r[s] = e(s));
      for (const s of this.attributes) {
        const u = this.$$g_p(s.name);
        u in this.$$d || (this.$$d[u] = pt(u, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Zr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = kr(() => {
        Nr(() => {
          var s;
          this.$$r = !0;
          for (const u of yt(this.$$c)) {
            if (!((s = this.$$p_d[u]) != null && s.reflect)) continue;
            this.$$d[u] = this.$$c[u];
            const l = pt(
              u,
              this.$$d[u],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[u].attribute || u) : this.setAttribute(this.$$p_d[u].attribute || u, l);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const u of this.$$l[s]) {
          const l = this.$$c.$on(s, u);
          this.$$l_u.set(u, l);
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
  attributeChangedCallback(e, r, n) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = pt(e, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return yt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function pt(t, e, r, n) {
  var u;
  const s = (u = r[t]) == null ? void 0 : u.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Xr(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Be(t, e, r, n, s, u) {
  let l = class extends Ve {
    constructor() {
      super(t, r, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return yt(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return yt(e).forEach((a) => {
    gt(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(i) {
        var c;
        i = pt(a, i, e), this.$$d[a] = i;
        var o = this.$$c;
        if (o) {
          var f = (c = z(o, a)) == null ? void 0 : c.get;
          f ? o[a] = i : o.$set({ [a]: i });
        }
      }
    });
  }), n.forEach((a) => {
    gt(l.prototype, a, {
      get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[a];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
const tn = (t, e, r) => {
  C(e, w(e) + 1), r();
};
var en = /* @__PURE__ */ Ot("<div><h2> </h2> <button> </button></div>");
const rn = {
  hash: "svelte-zq967x",
  code: ":host {display:block;padding:1rem;background-color:var(--counter-background, aqua);color:var(--counter-text-color, black);}"
};
function nn(t, e) {
  Zt(e, !0), Ye(t, rn);
  let r = Gr(e, "buttonHeader"), n = Pt(0);
  const s = () => {
    document.dispatchEvent(new CustomEvent("counter-update", {
      detail: { count: w(n) },
      bubbles: !0,
      composed: !0
    }));
  };
  we(() => {
    s();
  });
  var u = en(), l = ot(u), a = ot(l, !0);
  it(l);
  var i = gr(l, 2);
  i.__click = [tn, n, s];
  var o = ot(i);
  return it(i), it(u), Ee(() => {
    Yt(a, r()), Yt(o, `count is ${w(n) ?? ""}`);
  }), at(t, u), Qt({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(f) {
      r(f), Gt();
    }
  });
}
Br(["click"]);
customElements.define("counter-component", Be(nn, { buttonHeader: {} }, [], [], !0));
var sn = /* @__PURE__ */ Ot("<p> </p>"), un = /* @__PURE__ */ Ot("<p>Pas de counter sur cette page</p>"), ln = /* @__PURE__ */ Ot('<div class="svelte-jz8ejc"><!></div>');
const on = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function an(t, e) {
  Zt(e, !0), Ye(t, on);
  let r = Pt(0), n = Pt(!1);
  we(() => {
    const i = () => {
      const c = document.querySelector("counter-component");
      C(n, !!c);
    };
    i();
    const o = (c) => {
      C(r, G(c.detail.count));
    }, f = new MutationObserver(i);
    return f.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", o), () => {
      f.disconnect(), document.removeEventListener("counter-update", o);
    };
  });
  var s = ln(), u = ot(s);
  {
    var l = (i) => {
      var o = sn(), f = ot(o);
      it(o), Ee(() => Yt(f, `Valeur du compteur : ${w(r) ?? ""}`)), at(i, o);
    }, a = (i) => {
      var o = un();
      at(i, o);
    };
    Wr(u, (i) => {
      w(n) ? i(l) : i(a, !1);
    });
  }
  it(s), at(t, s), Qt();
}
customElements.define("counter-display", Be(an, {}, [], [], !0));
export {
  nn as Counter,
  an as CounterDisplay
};
