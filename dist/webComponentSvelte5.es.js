var Je = Object.defineProperty;
var te = (t) => {
  throw TypeError(t);
};
var Ge = (t, e, r) => e in t ? Je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => Ge(t, typeof e != "symbol" ? e + "" : e, r), ee = (t, e, r) => e.has(t) || te("Cannot " + r);
var E = (t, e, r) => (ee(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Dt = (t, e, r) => e.has(t) ? te("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Lt = (t, e, r, n) => (ee(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Ze = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ze);
const Qe = 2, oe = "[", fe = "[!", ae = "]", lt = {}, T = Symbol(), Xe = ["touchstart", "touchmove"];
function tr(t) {
  return Xe.includes(t);
}
const ce = !1;
var _e = Array.isArray, er = Array.from, yt = Object.keys, gt = Object.defineProperty, z = Object.getOwnPropertyDescriptor, rr = Object.prototype, nr = Array.prototype, sr = Object.getPrototypeOf;
function ur(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const D = 2, de = 4, kt = 8, Kt = 16, L = 32, rt = 64, qt = 128, W = 256, wt = 512, O = 1024, M = 2048, dt = 4096, tt = 8192, nt = 16384, lr = 32768, zt = 65536, ir = 1 << 19, ve = 1 << 20, Pt = Symbol("$state"), or = Symbol("legacy props");
function he(t) {
  return t === this.v;
}
function fr(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ar(t) {
  return !fr(t, this.v);
}
function cr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _r() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function dr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function hr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $r() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function mr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function pr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function yr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let gr = !1;
function P(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: he,
    version: 0
  };
  return r;
}
function Ft(t) {
  return /* @__PURE__ */ wr(P(t));
}
// @__NO_SIDE_EFFECTS__
function $e(t, e = !1) {
  const r = P(t);
  return e || (r.equals = ar), r;
}
// @__NO_SIDE_EFFECTS__
function wr(t) {
  return h !== null && h.f & D && (q === null ? Fr([t]) : q.push(t)), t;
}
function N(t, e) {
  return h !== null && jr() && h.f & (D | Kt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (q === null || !q.includes(t)) && yr(), br(t, e);
}
function br(t, e) {
  return t.equals(e) || (t.v = e, t.version = qe(), me(t, M), v !== null && v.f & O && !(v.f & L) && (g !== null && g.includes(t) ? (I(v, M), Rt(v)) : j === null ? Ir([t]) : j.push(t))), e;
}
function me(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var u = r[s], l = u.f;
      l & M || (I(u, e), l & (O | W) && (l & D ? me(
        /** @type {Derived} */
        u,
        dt
      ) : Rt(
        /** @type {Effect} */
        u
      )));
    }
}
function Wt(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let x = !1;
function Z(t) {
  x = t;
}
let p;
function H(t) {
  if (t === null)
    throw Wt(), lt;
  return p = t;
}
function Ct() {
  return H(
    /** @type {TemplateNode} */
    /* @__PURE__ */ st(p)
  );
}
function it(t) {
  if (x) {
    if (/* @__PURE__ */ st(p) !== null)
      throw Wt(), lt;
    p = t;
  }
}
function Er() {
  for (var t = 0, e = p; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === ae) {
        if (t === 0) return e;
        t -= 1;
      } else (r === oe || r === fe) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(e)
    );
    e.remove(), e = n;
  }
}
function G(t, e = null, r) {
  if (typeof t != "object" || t === null || Pt in t)
    return t;
  const n = sr(t);
  if (n !== rr && n !== nr)
    return t;
  var s = /* @__PURE__ */ new Map(), u = _e(t), l = P(0);
  u && s.set("length", P(
    /** @type {any[]} */
    t.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, f, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && $r();
        var c = s.get(f);
        return c === void 0 ? (c = P(a.value), s.set(f, c)) : N(c, G(a.value, i)), !0;
      },
      deleteProperty(o, f) {
        var a = s.get(f);
        if (a === void 0)
          f in o && s.set(f, P(T));
        else {
          if (u && typeof f == "string") {
            var c = (
              /** @type {Source<number>} */
              s.get("length")
            ), _ = Number(f);
            Number.isInteger(_) && _ < c.v && N(c, _);
          }
          N(a, T), re(l);
        }
        return !0;
      },
      get(o, f, a) {
        var $;
        if (f === Pt)
          return t;
        var c = s.get(f), _ = f in o;
        if (c === void 0 && (!_ || ($ = z(o, f)) != null && $.writable) && (c = P(G(_ ? o[f] : T, i)), s.set(f, c)), c !== void 0) {
          var d = w(c);
          return d === T ? void 0 : d;
        }
        return Reflect.get(o, f, a);
      },
      getOwnPropertyDescriptor(o, f) {
        var a = Reflect.getOwnPropertyDescriptor(o, f);
        if (a && "value" in a) {
          var c = s.get(f);
          c && (a.value = w(c));
        } else if (a === void 0) {
          var _ = s.get(f), d = _ == null ? void 0 : _.v;
          if (_ !== void 0 && d !== T)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return a;
      },
      has(o, f) {
        var d;
        if (f === Pt)
          return !0;
        var a = s.get(f), c = a !== void 0 && a.v !== T || Reflect.has(o, f);
        if (a !== void 0 || v !== null && (!c || (d = z(o, f)) != null && d.writable)) {
          a === void 0 && (a = P(c ? G(o[f], i) : T), s.set(f, a));
          var _ = w(a);
          if (_ === T)
            return !1;
        }
        return c;
      },
      set(o, f, a, c) {
        var b;
        var _ = s.get(f), d = f in o;
        if (u && f === "length")
          for (var $ = a; $ < /** @type {Source<number>} */
          _.v; $ += 1) {
            var y = s.get($ + "");
            y !== void 0 ? N(y, T) : $ in o && (y = P(T), s.set($ + "", y));
          }
        _ === void 0 ? (!d || (b = z(o, f)) != null && b.writable) && (_ = P(void 0), N(_, G(a, i)), s.set(f, _)) : (d = _.v !== T, N(_, G(a, i)));
        var S = Reflect.getOwnPropertyDescriptor(o, f);
        if (S != null && S.set && S.set.call(c, a), !d) {
          if (u && typeof f == "string") {
            var B = (
              /** @type {Source<number>} */
              s.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m >= B.v && N(B, m + 1);
          }
          re(l);
        }
        return !0;
      },
      ownKeys(o) {
        w(l);
        var f = Reflect.ownKeys(o).filter((_) => {
          var d = s.get(_);
          return d === void 0 || d.v !== T;
        });
        for (var [a, c] of s)
          c.v !== T && !(a in o) && f.push(a);
        return f;
      },
      setPrototypeOf() {
        mr();
      }
    }
  );
}
function re(t, e = 1) {
  N(t, t.v + e);
}
var ne, pe, ye;
function It() {
  if (ne === void 0) {
    ne = window;
    var t = Element.prototype, e = Node.prototype;
    pe = z(e, "firstChild").get, ye = z(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function bt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Et(t) {
  return pe.call(t);
}
// @__NO_SIDE_EFFECTS__
function st(t) {
  return ye.call(t);
}
function ot(t, e) {
  if (!x)
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
function Tt(t, e = 1, r = !1) {
  let n = x ? p : t;
  for (var s; e--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ st(n);
  if (!x)
    return n;
  var u = n == null ? void 0 : n.nodeType;
  if (r && u !== 3) {
    var l = bt();
    return n === null ? s == null || s.after(l) : n.before(l), H(l), l;
  }
  return H(n), /** @type {TemplateNode} */
  n;
}
function Tr(t) {
  t.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function xr(t) {
  var e = D | M;
  v === null ? e |= W : v.f |= ve;
  var r = h !== null && h.f & D ? (
    /** @type {Derived} */
    h
  ) : null;
  const n = {
    children: null,
    ctx: k,
    deps: null,
    equals: he,
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
function ge(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var r = 0; r < e.length; r += 1) {
      var n = e[r];
      n.f & D ? Jt(
        /** @type {Derived} */
        n
      ) : Y(
        /** @type {Effect} */
        n
      );
    }
  }
}
function kr(t) {
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
function we(t) {
  var e, r = v;
  V(kr(t));
  try {
    ge(t), e = Fe(t);
  } finally {
    V(r);
  }
  return e;
}
function be(t) {
  var e = we(t), r = (K || t.f & W) && t.deps !== null ? dt : O;
  I(t, r), t.equals(e) || (t.v = e, t.version = qe());
}
function Jt(t) {
  ge(t), _t(t, 0), I(t, nt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Cr(t) {
  v === null && h === null && dr(), h !== null && h.f & W && _r(), Gt && cr();
}
function Nr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function ut(t, e, r, n = !0) {
  var s = (t & rt) !== 0, u = v, l = {
    ctx: k,
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
    var i = Q;
    try {
      ue(!0), Ot(l), l.f |= lr;
    } catch (a) {
      throw Y(l), a;
    } finally {
      ue(i);
    }
  } else e !== null && Rt(l);
  var o = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & ve) === 0;
  if (!o && !s && n && (u !== null && Nr(l, u), h !== null && h.f & D)) {
    var f = (
      /** @type {Derived} */
      h
    );
    (f.children ?? (f.children = [])).push(l);
  }
  return l;
}
function Ee(t) {
  Cr();
  var e = v !== null && (v.f & L) !== 0 && k !== null && !k.m;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      k
    );
    (r.e ?? (r.e = [])).push({
      fn: t,
      effect: v,
      reaction: h
    });
  } else {
    var n = Te(t);
    return n;
  }
}
function Or(t) {
  const e = ut(rt, t, !0);
  return () => {
    Y(e);
  };
}
function Rr(t) {
  const e = ut(rt, t, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Mt(e, () => {
      Y(e), n(void 0);
    }) : (Y(e), n(void 0));
  });
}
function Te(t) {
  return ut(de, t, !1);
}
function Sr(t) {
  return ut(kt, t, !0);
}
function xe(t) {
  return ke(t);
}
function ke(t, e = 0) {
  return ut(kt | Kt | e, t, !0);
}
function jt(t, e = !0) {
  return ut(kt | L, t, !0, e);
}
function Ce(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = Gt, n = h;
    le(!0), et(null);
    try {
      e.call(null);
    } finally {
      le(r), et(n);
    }
  }
}
function Ne(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      Jt(e[r]);
  }
}
function Oe(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    Y(r, e), r = n;
  }
}
function Ar(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & L || Y(e), e = r;
  }
}
function Y(t, e = !0) {
  var r = !1;
  if ((e || t.f & ir) && t.nodes_start !== null) {
    for (var n = t.nodes_start, s = t.nodes_end; n !== null; ) {
      var u = n === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(n)
      );
      n.remove(), n = u;
    }
    r = !0;
  }
  Oe(t, e && !r), Ne(t), _t(t, 0), I(t, nt);
  var l = t.transitions;
  if (l !== null)
    for (const o of l)
      o.stop();
  Ce(t);
  var i = t.parent;
  i !== null && i.first !== null && Re(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Re(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Mt(t, e) {
  var r = [];
  Se(t, r, !0), Dr(r, () => {
    Y(t), e && e();
  });
}
function Dr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var s of t)
      s.out(n);
  } else
    e();
}
function Se(t, e, r) {
  if (!(t.f & tt)) {
    if (t.f ^= tt, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var s = n.next, u = (n.f & zt) !== 0 || (n.f & L) !== 0;
      Se(n, e, u ? r : !1), n = s;
    }
  }
}
function se(t) {
  Ae(t, !0);
}
function Ae(t, e) {
  if (t.f & tt) {
    vt(t) && Ot(t), t.f ^= tt;
    for (var r = t.first; r !== null; ) {
      var n = r.next, s = (r.f & zt) !== 0 || (r.f & L) !== 0;
      Ae(r, s ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const u of t.transitions)
        (u.is_global || e) && u.in();
  }
}
let xt = !1, Ht = [];
function De() {
  xt = !1;
  const t = Ht.slice();
  Ht = [], ur(t);
}
function Lr(t) {
  xt || (xt = !0, queueMicrotask(De)), Ht.push(t);
}
function Pr() {
  xt && De();
}
const Le = 0, qr = 1;
let $t = !1, mt = Le, at = !1, ct = null, Q = !1, Gt = !1;
function ue(t) {
  Q = t;
}
function le(t) {
  Gt = t;
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
function Fr(t) {
  q = t;
}
let g = null, C = 0, j = null;
function Ir(t) {
  j = t;
}
let Pe = 1, K = !1, k = null;
function qe() {
  return ++Pe;
}
function jr() {
  return !gr;
}
function vt(t) {
  var l, i;
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
        ) && be(
          /** @type {Derived} */
          u
        ), n && v !== null && !K && !((i = u == null ? void 0 : u.reactions) != null && i.includes(t)) && (u.reactions ?? (u.reactions = [])).push(t), u.version > t.version)
          return !0;
      }
    }
    (!n || v !== null && !K) && I(t, O);
  }
  return !1;
}
function Mr(t, e) {
  for (var r = e; r !== null; ) {
    if (r.f & qt)
      try {
        r.fn(t);
        return;
      } catch {
        r.f ^= qt;
      }
    r = r.parent;
  }
  throw $t = !1, t;
}
function Hr(t) {
  return (t.f & nt) === 0 && (t.parent === null || (t.parent.f & qt) === 0);
}
function Nt(t, e, r, n) {
  if ($t) {
    if (r === null && ($t = !1), Hr(e))
      throw t;
    return;
  }
  r !== null && ($t = !0);
  {
    Mr(t, e);
    return;
  }
}
function Fe(t) {
  var _;
  var e = g, r = C, n = j, s = h, u = K, l = q, i = k, o = t.f;
  g = /** @type {null | Value[]} */
  null, C = 0, j = null, h = o & (L | rt) ? null : t, K = !Q && (o & W) !== 0, q = null, k = t.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, t.fn)()
    ), a = t.deps;
    if (g !== null) {
      var c;
      if (_t(t, C), a !== null && C > 0)
        for (a.length = C + g.length, c = 0; c < g.length; c++)
          a[C + c] = g[c];
      else
        t.deps = a = g;
      if (!K)
        for (c = C; c < a.length; c++)
          ((_ = a[c]).reactions ?? (_.reactions = [])).push(t);
    } else a !== null && C < a.length && (_t(t, C), a.length = C);
    return f;
  } finally {
    g = e, C = r, j = n, h = s, K = u, q = l, k = i;
  }
}
function Yr(t, e) {
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
      Yr(t, r[n]);
}
function Ot(t) {
  var e = t.f;
  if (!(e & nt)) {
    I(t, O);
    var r = v, n = k;
    v = t;
    try {
      e & Kt ? Ar(t) : Oe(t), Ne(t), Ce(t);
      var s = Fe(t);
      t.teardown = typeof s == "function" ? s : null, t.version = Pe;
    } catch (u) {
      Nt(u, t, r, n || t.ctx);
    } finally {
      v = r;
    }
  }
}
function Ie() {
  if (X > 1e3) {
    X = 0;
    try {
      vr();
    } catch (t) {
      if (ct !== null)
        Nt(t, ct, null);
      else
        throw t;
    }
  }
  X++;
}
function je(t) {
  var e = t.length;
  if (e !== 0) {
    Ie();
    var r = Q;
    Q = !0;
    try {
      for (var n = 0; n < e; n++) {
        var s = t[n];
        s.f & O || (s.f ^= O);
        var u = [];
        Me(s, u), Vr(u);
      }
    } finally {
      Q = r;
    }
  }
}
function Vr(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      if (!(n.f & (nt | tt)))
        try {
          vt(n) && (Ot(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Re(n) : n.fn = null));
        } catch (s) {
          Nt(s, n, null, n.ctx);
        }
    }
}
function Br() {
  if (at = !1, X > 1001)
    return;
  const t = U;
  U = [], je(t), at || (X = 0, ct = null);
}
function Rt(t) {
  mt === Le && (at || (at = !0, queueMicrotask(Br))), ct = t;
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
function Me(t, e) {
  var r = t.first, n = [];
  t: for (; r !== null; ) {
    var s = r.f, u = (s & L) !== 0, l = u && (s & O) !== 0, i = r.next;
    if (!l && !(s & tt))
      if (s & kt) {
        if (u)
          r.f ^= O;
        else
          try {
            vt(r) && Ot(r);
          } catch (c) {
            Nt(c, r, null, r.ctx);
          }
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      } else s & de && n.push(r);
    if (i === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (t === c)
          break t;
        var f = c.next;
        if (f !== null) {
          r = f;
          continue t;
        }
        c = c.parent;
      }
    }
    r = i;
  }
  for (var a = 0; a < n.length; a++)
    o = n[a], e.push(o), Me(o, e);
}
function Zt(t) {
  var e = mt, r = U;
  try {
    Ie();
    const s = [];
    mt = qr, U = s, at = !1, je(r);
    var n = t == null ? void 0 : t();
    return Pr(), (U.length > 0 || s.length > 0) && Zt(), X = 0, ct = null, n;
  } finally {
    mt = e, U = r;
  }
}
function w(t) {
  var a;
  var e = t.f, r = (e & D) !== 0;
  if (r && e & nt) {
    var n = we(
      /** @type {Derived} */
      t
    );
    return Jt(
      /** @type {Derived} */
      t
    ), n;
  }
  if (h !== null) {
    q !== null && q.includes(t) && pr();
    var s = h.deps;
    g === null && s !== null && s[C] === t ? C++ : g === null ? g = [t] : g.push(t), j !== null && v !== null && v.f & O && !(v.f & L) && j.includes(t) && (I(v, M), Rt(v));
  } else if (r && /** @type {Derived} */
  t.deps === null)
    for (var u = (
      /** @type {Derived} */
      t
    ), l = u.parent, i = u; l !== null; )
      if (l.f & D) {
        var o = (
          /** @type {Derived} */
          l
        );
        i = o, l = o.parent;
      } else {
        var f = (
          /** @type {Effect} */
          l
        );
        (a = f.deriveds) != null && a.includes(i) || (f.deriveds ?? (f.deriveds = [])).push(i);
        break;
      }
  return r && (u = /** @type {Derived} */
  t, vt(u) && be(u)), t.v;
}
function Ur(t) {
  const e = h;
  try {
    return h = null, t();
  } finally {
    h = e;
  }
}
const Kr = ~(M | dt | O);
function I(t, e) {
  t.f = t.f & Kr | e;
}
function Qt(t, e = !1, r) {
  k = {
    p: k,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function Xt(t) {
  const e = k;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const l = e.e;
    if (l !== null) {
      var r = v, n = h;
      e.e = null;
      try {
        for (var s = 0; s < l.length; s++) {
          var u = l[s];
          V(u.effect), et(u.reaction), Te(u.fn);
        }
      } finally {
        V(r), et(n);
      }
    }
    k = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
const He = /* @__PURE__ */ new Set(), Yt = /* @__PURE__ */ new Set();
function zr(t) {
  for (var e = 0; e < t.length; e++)
    He.add(t[e]);
  for (var r of Yt)
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
  ), l = 0, i = t.__root;
  if (i) {
    var o = s.indexOf(i);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var f = s.indexOf(e);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (u = /** @type {Element} */
  s[l] || t.target, u !== e) {
    gt(t, "currentTarget", {
      configurable: !0,
      get() {
        return u || r;
      }
    });
    var a = h, c = v;
    et(null), V(null);
    try {
      for (var _, d = []; u !== null; ) {
        var $ = u.assignedSlot || u.parentNode || /** @type {any} */
        u.host || null;
        try {
          var y = u["__" + n];
          if (y !== void 0 && !/** @type {any} */
          u.disabled)
            if (_e(y)) {
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
      t.__root = e, delete t.currentTarget, et(a), V(c);
    }
  }
}
function Wr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Vt(t, e) {
  var r = (
    /** @type {Effect} */
    v
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function St(t, e) {
  var r = (e & Qe) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (x)
      return Vt(p, null), p;
    n === void 0 && (n = Wr(s ? t : "<!>" + t), n = /** @type {Node} */
    /* @__PURE__ */ Et(n));
    var u = (
      /** @type {TemplateNode} */
      r ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Vt(u, u), u;
  };
}
function ft(t, e) {
  if (x) {
    v.nodes_end = p, Ct();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Bt(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function Ye(t, e) {
  return Ve(t, e);
}
function Jr(t, e) {
  It(), e.intro = e.intro ?? !1;
  const r = e.target, n = x, s = p;
  try {
    for (var u = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Et(r)
    ); u && (u.nodeType !== 8 || /** @type {Comment} */
    u.data !== oe); )
      u = /** @type {TemplateNode} */
      /* @__PURE__ */ st(u);
    if (!u)
      throw lt;
    Z(!0), H(
      /** @type {Comment} */
      u
    ), Ct();
    const l = Ve(t, { ...e, anchor: u });
    if (p === null || p.nodeType !== 8 || /** @type {Comment} */
    p.data !== ae)
      throw Wt(), lt;
    return Z(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === lt)
      return e.recover === !1 && hr(), It(), Tr(r), Z(!1), Ye(t, e);
    throw l;
  } finally {
    Z(n), H(s);
  }
}
const J = /* @__PURE__ */ new Map();
function Ve(t, { target: e, anchor: r, props: n = {}, events: s, context: u, intro: l = !0 }) {
  It();
  var i = /* @__PURE__ */ new Set(), o = (c) => {
    for (var _ = 0; _ < c.length; _++) {
      var d = c[_];
      if (!i.has(d)) {
        i.add(d);
        var $ = tr(d);
        e.addEventListener(d, ht, { passive: $ });
        var y = J.get(d);
        y === void 0 ? (document.addEventListener(d, ht, { passive: $ }), J.set(d, 1)) : J.set(d, y + 1);
      }
    }
  };
  o(er(He)), Yt.add(o);
  var f = void 0, a = Rr(() => {
    var c = r ?? e.appendChild(bt());
    return jt(() => {
      if (u) {
        Qt({});
        var _ = (
          /** @type {ComponentContext} */
          k
        );
        _.c = u;
      }
      s && (n.$$events = s), x && Vt(
        /** @type {TemplateNode} */
        c,
        null
      ), f = t(c, n) || {}, x && (v.nodes_end = p), u && Xt();
    }), () => {
      var $;
      for (var _ of i) {
        e.removeEventListener(_, ht);
        var d = (
          /** @type {number} */
          J.get(_)
        );
        --d === 0 ? (document.removeEventListener(_, ht), J.delete(_)) : J.set(_, d);
      }
      Yt.delete(o), c !== r && (($ = c.parentNode) == null || $.removeChild(c));
    };
  });
  return Ut.set(f, a), f;
}
let Ut = /* @__PURE__ */ new WeakMap();
function Gr(t, e) {
  const r = Ut.get(t);
  return r ? (Ut.delete(t), r(e)) : Promise.resolve();
}
function Zr(t, e, r = !1) {
  x && Ct();
  var n = t, s = null, u = null, l = T, i = r ? zt : 0, o = !1;
  const f = (c, _ = !0) => {
    o = !0, a(_, c);
  }, a = (c, _) => {
    if (l === (l = c)) return;
    let d = !1;
    if (x) {
      const $ = (
        /** @type {Comment} */
        n.data === fe
      );
      !!l === $ && (n = Er(), H(n), Z(!1), d = !0);
    }
    l ? (s ? se(s) : _ && (s = jt(() => _(n))), u && Mt(u, () => {
      u = null;
    })) : (u ? se(u) : _ && (u = jt(() => _(n))), s && Mt(s, () => {
      s = null;
    })), d && Z(!0);
  };
  ke(() => {
    o = !1, e(f), o || a(null, null);
  }, i), x && (n = p);
}
function ie(t, e, r, n, s) {
  var i;
  x && Ct();
  var u = (i = e.$$slots) == null ? void 0 : i[r], l = !1;
  u === !0 && (u = e[r === "default" ? "children" : r], l = !0), u === void 0 || u(t, l ? () => n : n);
}
function Be(t, e) {
  Lr(() => {
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
function Qr(t) {
  for (var e = v, r = v; e !== null && !(e.f & (L | rt)); )
    e = e.parent;
  try {
    return V(e), t();
  } finally {
    V(r);
  }
}
function Xr(t, e, r, n) {
  var B;
  var s = !1, u;
  u = /** @type {V} */
  t[e];
  var l = ((B = z(t, e)) == null ? void 0 : B.set) ?? void 0, i = (
    /** @type {V} */
    n
  ), o = !0, f = !1, a = () => (f = !0, o && (o = !1, i = /** @type {V} */
  n), i), c;
  if (c = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? a() : (o = !0, f = !1, m);
  }, l) {
    var _ = t.$$legacy;
    return function(m, b) {
      return arguments.length > 0 ? ((!b || _ || s) && l(b ? c() : m), m) : c();
    };
  }
  var d = !1, $ = !1, y = /* @__PURE__ */ $e(u), S = Qr(
    () => /* @__PURE__ */ xr(() => {
      var m = c(), b = w(y);
      return d ? (d = !1, $ = !0, b) : ($ = !1, y.v = m);
    })
  );
  return function(m, b) {
    if (arguments.length > 0) {
      const At = b ? w(S) : m;
      return S.equals(At) || (d = !0, N(y, At), f && i !== void 0 && (i = At), Ur(() => w(S))), m;
    }
    return w(S);
  };
}
function tn(t) {
  return new en(t);
}
var F, R;
class en {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Dt(this, F);
    /** @type {Record<string, any>} */
    Dt(this, R);
    var u;
    var r = /* @__PURE__ */ new Map(), n = (l, i) => {
      var o = /* @__PURE__ */ $e(i);
      return r.set(l, o), o;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, i) {
          return w(r.get(i) ?? n(i, Reflect.get(l, i)));
        },
        has(l, i) {
          return i === or ? !0 : (w(r.get(i) ?? n(i, Reflect.get(l, i))), Reflect.has(l, i));
        },
        set(l, i, o) {
          return N(r.get(i) ?? n(i, o), o), Reflect.set(l, i, o);
        }
      }
    );
    Lt(this, R, (e.hydrate ? Jr : Ye)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((u = e == null ? void 0 : e.props) != null && u.$$host) || e.sync === !1) && Zt(), Lt(this, F, s.$$events);
    for (const l of Object.keys(E(this, R)))
      l === "$set" || l === "$destroy" || l === "$on" || gt(this, l, {
        get() {
          return E(this, R)[l];
        },
        /** @param {any} value */
        set(i) {
          E(this, R)[l] = i;
        },
        enumerable: !0
      });
    E(this, R).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, E(this, R).$destroy = () => {
      Gr(E(this, R));
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
let Ue;
typeof HTMLElement == "function" && (Ue = class extends HTMLElement {
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
      let r = function(u) {
        return (l) => {
          const i = document.createElement("slot");
          u !== "default" && (i.name = u), ft(l, i);
        };
      };
      var e = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = rn(this);
      for (const u of this.$$s)
        u in s && (u === "default" && !this.$$d.children ? (this.$$d.children = r(u), n.default = !0) : n[u] = r(u));
      for (const u of this.attributes) {
        const l = this.$$g_p(u.name);
        l in this.$$d || (this.$$d[l] = pt(l, u.value, this.$$p_d, "toProp"));
      }
      for (const u in this.$$p_d)
        !(u in this.$$d) && this[u] !== void 0 && (this.$$d[u] = this[u], delete this[u]);
      this.$$c = tn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Or(() => {
        Sr(() => {
          var u;
          this.$$r = !0;
          for (const l of yt(this.$$c)) {
            if (!((u = this.$$p_d[l]) != null && u.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const i = pt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, i);
          }
          this.$$r = !1;
        });
      });
      for (const u in this.$$l)
        for (const l of this.$$l[u]) {
          const i = this.$$c.$on(u, l);
          this.$$l_u.set(l, i);
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
function rn(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Ke(t, e, r, n, s, u) {
  let l = class extends Ue {
    constructor() {
      super(t, r, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return yt(e).map(
        (i) => (e[i].attribute || i).toLowerCase()
      );
    }
  };
  return yt(e).forEach((i) => {
    gt(l.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(o) {
        var c;
        o = pt(i, o, e), this.$$d[i] = o;
        var f = this.$$c;
        if (f) {
          var a = (c = z(f, i)) == null ? void 0 : c.get;
          a ? f[i] = o : f.$set({ [i]: o });
        }
      }
    });
  }), n.forEach((i) => {
    gt(l.prototype, i, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[i];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
const nn = (t, e, r) => {
  N(e, w(e) + 1), r();
};
var sn = /* @__PURE__ */ St("<div>Title : <h2> </h2> <button> </button></div>");
const un = {
  hash: "svelte-zq967x",
  code: ":host {display:block;padding:1rem;background-color:var(--counter-background, aqua);color:var(--counter-text-color, black);}"
};
function ze(t, e) {
  Qt(e, !0), Be(t, un);
  let r = Xr(e, "buttonHeader"), n = Ft(0);
  const s = () => {
    document.dispatchEvent(new CustomEvent("counter-update", {
      detail: { count: w(n) },
      bubbles: !0,
      composed: !0
    }));
  };
  Ee(() => {
    s();
  });
  var u = sn(), l = Tt(ot(u)), i = ot(l, !0);
  it(l);
  var o = Tt(l, 2);
  o.__click = [nn, n, s];
  var f = ot(o);
  return it(o), it(u), xe(() => {
    Bt(i, r()), Bt(f, `count is ${w(n) ?? ""}`);
  }), ft(t, u), Xt({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(a) {
      r(a), Zt();
    }
  });
}
zr(["click"]);
customElements.define("counter-component", Ke(ze, { buttonHeader: {} }, [], [], !0));
class ln extends HTMLElement {
  constructor() {
    super(), new ze({
      target: this
    });
  }
}
customElements.get("counter-component") || customElements.define("counter-component", ln);
var on = /* @__PURE__ */ St("<p> </p>"), fn = /* @__PURE__ */ St("<p>Pas de counter sur cette page</p>"), an = /* @__PURE__ */ St('<div class="svelte-jz8ejc"><!> <!> <!></div>');
const cn = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function We(t, e) {
  Qt(e, !0), Be(t, cn);
  let r = Ft(0), n = Ft(!1);
  Ee(() => {
    const a = () => {
      const d = document.querySelector("counter-component");
      N(n, !!d);
    };
    a();
    const c = (d) => {
      N(r, G(d.detail.count));
    }, _ = new MutationObserver(a);
    return _.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", c), () => {
      _.disconnect(), document.removeEventListener("counter-update", c);
    };
  });
  var s = an(), u = ot(s);
  ie(u, e, "description", {});
  var l = Tt(u, 2);
  {
    var i = (a) => {
      var c = on(), _ = ot(c);
      it(c), xe(() => Bt(_, `Valeur du compteur : ${w(r) ?? ""}`)), ft(a, c);
    }, o = (a) => {
      var c = fn();
      ft(a, c);
    };
    Zr(l, (a) => {
      w(n) ? a(i) : a(o, !1);
    });
  }
  var f = Tt(l, 2);
  ie(f, e, "footer", {}), it(s), ft(t, s), Xt();
}
customElements.define("counterdisplay-component", Ke(We, {}, ["description", "footer"], [], !0));
class _n extends HTMLElement {
  constructor() {
    super(), new We({
      target: this
    });
  }
}
customElements.get("counterdisplay-component") || customElements.define("counterdisplay-component", _n);
