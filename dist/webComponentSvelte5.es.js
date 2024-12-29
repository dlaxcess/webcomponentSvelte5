var ze = Object.defineProperty;
var Xt = (t) => {
  throw TypeError(t);
};
var We = (t, e, r) => e in t ? ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => We(t, typeof e != "symbol" ? e + "" : e, r), te = (t, e, r) => e.has(t) || Xt("Cannot " + r);
var E = (t, e, r) => (te(t, e, "read from private field"), r ? r.call(t) : e.get(t)), St = (t, e, r) => e.has(t) ? Xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), At = (t, e, r, n) => (te(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Je = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Je);
const Ge = 2, le = "[", ie = "[!", oe = "]", lt = {}, T = Symbol(), Ze = ["touchstart", "touchmove"];
function Qe(t) {
  return Ze.includes(t);
}
const ae = !1;
var fe = Array.isArray, Xe = Array.from, yt = Object.keys, gt = Object.defineProperty, z = Object.getOwnPropertyDescriptor, tr = Object.prototype, er = Array.prototype, rr = Object.getPrototypeOf;
function nr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const D = 2, ce = 4, xt = 8, Bt = 16, L = 32, rt = 64, Lt = 128, W = 256, wt = 512, O = 1024, M = 2048, dt = 4096, tt = 8192, nt = 16384, sr = 32768, Ut = 65536, ur = 1 << 19, _e = 1 << 20, Dt = Symbol("$state"), lr = Symbol("legacy props");
function de(t) {
  return t === this.v;
}
function ir(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function or(t) {
  return !ir(t, this.v);
}
function ar(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function _r() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function dr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $r() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function mr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let pr = !1;
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
  return /* @__PURE__ */ yr(P(t));
}
// @__NO_SIDE_EFFECTS__
function ve(t, e = !1) {
  const r = P(t);
  return e || (r.equals = or), r;
}
// @__NO_SIDE_EFFECTS__
function yr(t) {
  return h !== null && h.f & D && (q === null ? qr([t]) : q.push(t)), t;
}
function C(t, e) {
  return h !== null && Ir() && h.f & (D | Bt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (q === null || !q.includes(t)) && mr(), gr(t, e);
}
function gr(t, e) {
  return t.equals(e) || (t.v = e, t.version = Le(), he(t, M), v !== null && v.f & O && !(v.f & L) && (g !== null && g.includes(t) ? (I(v, M), Nt(v)) : j === null ? Fr([t]) : j.push(t))), e;
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
function wr() {
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
  const n = rr(t);
  if (n !== tr && n !== er)
    return t;
  var s = /* @__PURE__ */ new Map(), u = fe(t), l = P(0);
  u && s.set("length", P(
    /** @type {any[]} */
    t.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(i, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && vr();
        var c = s.get(a);
        return c === void 0 ? (c = P(f.value), s.set(a, c)) : C(c, G(f.value, o)), !0;
      },
      deleteProperty(i, a) {
        var f = s.get(a);
        if (f === void 0)
          a in i && s.set(a, P(T));
        else {
          if (u && typeof a == "string") {
            var c = (
              /** @type {Source<number>} */
              s.get("length")
            ), _ = Number(a);
            Number.isInteger(_) && _ < c.v && C(c, _);
          }
          C(f, T), ee(l);
        }
        return !0;
      },
      get(i, a, f) {
        var $;
        if (a === Dt)
          return t;
        var c = s.get(a), _ = a in i;
        if (c === void 0 && (!_ || ($ = z(i, a)) != null && $.writable) && (c = P(G(_ ? i[a] : T, o)), s.set(a, c)), c !== void 0) {
          var d = w(c);
          return d === T ? void 0 : d;
        }
        return Reflect.get(i, a, f);
      },
      getOwnPropertyDescriptor(i, a) {
        var f = Reflect.getOwnPropertyDescriptor(i, a);
        if (f && "value" in f) {
          var c = s.get(a);
          c && (f.value = w(c));
        } else if (f === void 0) {
          var _ = s.get(a), d = _ == null ? void 0 : _.v;
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
      has(i, a) {
        var d;
        if (a === Dt)
          return !0;
        var f = s.get(a), c = f !== void 0 && f.v !== T || Reflect.has(i, a);
        if (f !== void 0 || v !== null && (!c || (d = z(i, a)) != null && d.writable)) {
          f === void 0 && (f = P(c ? G(i[a], o) : T), s.set(a, f));
          var _ = w(f);
          if (_ === T)
            return !1;
        }
        return c;
      },
      set(i, a, f, c) {
        var b;
        var _ = s.get(a), d = a in i;
        if (u && a === "length")
          for (var $ = f; $ < /** @type {Source<number>} */
          _.v; $ += 1) {
            var y = s.get($ + "");
            y !== void 0 ? C(y, T) : $ in i && (y = P(T), s.set($ + "", y));
          }
        _ === void 0 ? (!d || (b = z(i, a)) != null && b.writable) && (_ = P(void 0), C(_, G(f, o)), s.set(a, _)) : (d = _.v !== T, C(_, G(f, o)));
        var S = Reflect.getOwnPropertyDescriptor(i, a);
        if (S != null && S.set && S.set.call(c, f), !d) {
          if (u && typeof a == "string") {
            var B = (
              /** @type {Source<number>} */
              s.get("length")
            ), m = Number(a);
            Number.isInteger(m) && m >= B.v && C(B, m + 1);
          }
          ee(l);
        }
        return !0;
      },
      ownKeys(i) {
        w(l);
        var a = Reflect.ownKeys(i).filter((_) => {
          var d = s.get(_);
          return d === void 0 || d.v !== T;
        });
        for (var [f, c] of s)
          c.v !== T && !(f in i) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        hr();
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
function br(t, e = 1, r = !1) {
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
function Er(t) {
  t.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function Tr(t) {
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
function xr(t) {
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
  V(xr(t));
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
function kr(t) {
  v === null && h === null && cr(), h !== null && h.f & W && fr(), Jt && ar();
}
function Cr(t, e) {
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
    var o = Q;
    try {
      se(!0), Ct(l), l.f |= sr;
    } catch (f) {
      throw Y(l), f;
    } finally {
      se(o);
    }
  } else e !== null && Nt(l);
  var i = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & _e) === 0;
  if (!i && !s && n && (u !== null && Cr(l, u), h !== null && h.f & D)) {
    var a = (
      /** @type {Derived} */
      h
    );
    (a.children ?? (a.children = [])).push(l);
  }
  return l;
}
function we(t) {
  kr();
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
function Nr(t) {
  const e = ut(rt, t, !0);
  return () => {
    Y(e);
  };
}
function Or(t) {
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
function Rr(t) {
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
function Sr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & L || Y(e), e = r;
  }
}
function Y(t, e = !0) {
  var r = !1;
  if ((e || t.f & ur) && t.nodes_start !== null) {
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
  var o = t.parent;
  o !== null && o.first !== null && Ne(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Ne(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function It(t, e) {
  var r = [];
  Oe(t, r, !0), Ar(r, () => {
    Y(t), e && e();
  });
}
function Ar(t, e) {
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
  jt = [], nr(t);
}
function Dr(t) {
  Tt || (Tt = !0, queueMicrotask(Se)), jt.push(t);
}
function Lr() {
  Tt && Se();
}
const Ae = 0, Pr = 1;
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
function qr(t) {
  q = t;
}
let g = null, k = 0, j = null;
function Fr(t) {
  j = t;
}
let De = 1, K = !1, x = null;
function Le() {
  return ++De;
}
function Ir() {
  return !pr;
}
function vt(t) {
  var l, o;
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
        ), n && v !== null && !K && !((o = u == null ? void 0 : u.reactions) != null && o.includes(t)) && (u.reactions ?? (u.reactions = [])).push(t), u.version > t.version)
          return !0;
      }
    }
    (!n || v !== null && !K) && I(t, O);
  }
  return !1;
}
function jr(t, e) {
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
function Mr(t) {
  return (t.f & nt) === 0 && (t.parent === null || (t.parent.f & Lt) === 0);
}
function kt(t, e, r, n) {
  if ($t) {
    if (r === null && ($t = !1), Mr(e))
      throw t;
    return;
  }
  r !== null && ($t = !0);
  {
    jr(t, e);
    return;
  }
}
function Pe(t) {
  var _;
  var e = g, r = k, n = j, s = h, u = K, l = q, o = x, i = t.f;
  g = /** @type {null | Value[]} */
  null, k = 0, j = null, h = i & (L | rt) ? null : t, K = !Q && (i & W) !== 0, q = null, x = t.ctx;
  try {
    var a = (
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
    return a;
  } finally {
    g = e, k = r, j = n, h = s, K = u, q = l, x = o;
  }
}
function Hr(t, e) {
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
      Hr(t, r[n]);
}
function Ct(t) {
  var e = t.f;
  if (!(e & nt)) {
    I(t, O);
    var r = v, n = x;
    v = t;
    try {
      e & Bt ? Sr(t) : Ce(t), ke(t), xe(t);
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
      _r();
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
        Ie(s, u), Yr(u);
      }
    } finally {
      Q = r;
    }
  }
}
function Yr(t) {
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
function Vr() {
  if (ft = !1, X > 1001)
    return;
  const t = U;
  U = [], Fe(t), ft || (X = 0, ct = null);
}
function Nt(t) {
  mt === Ae && (ft || (ft = !0, queueMicrotask(Vr))), ct = t;
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
    var s = r.f, u = (s & L) !== 0, l = u && (s & O) !== 0, o = r.next;
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
    if (o === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (t === c)
          break t;
        var a = c.next;
        if (a !== null) {
          r = a;
          continue t;
        }
        c = c.parent;
      }
    }
    r = o;
  }
  for (var f = 0; f < n.length; f++)
    i = n[f], e.push(i), Ie(i, e);
}
function Gt(t) {
  var e = mt, r = U;
  try {
    qe();
    const s = [];
    mt = Pr, U = s, ft = !1, Fe(r);
    var n = t == null ? void 0 : t();
    return Lr(), (U.length > 0 || s.length > 0) && Gt(), X = 0, ct = null, n;
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
    q !== null && q.includes(t) && $r();
    var s = h.deps;
    g === null && s !== null && s[k] === t ? k++ : g === null ? g = [t] : g.push(t), j !== null && v !== null && v.f & O && !(v.f & L) && j.includes(t) && (I(v, M), Nt(v));
  } else if (r && /** @type {Derived} */
  t.deps === null)
    for (var u = (
      /** @type {Derived} */
      t
    ), l = u.parent, o = u; l !== null; )
      if (l.f & D) {
        var i = (
          /** @type {Derived} */
          l
        );
        o = i, l = i.parent;
      } else {
        var a = (
          /** @type {Effect} */
          l
        );
        (f = a.deriveds) != null && f.includes(o) || (a.deriveds ?? (a.deriveds = [])).push(o);
        break;
      }
  return r && (u = /** @type {Derived} */
  t, vt(u) && ge(u)), t.v;
}
function Br(t) {
  const e = h;
  try {
    return h = null, t();
  } finally {
    h = e;
  }
}
const Ur = ~(M | dt | O);
function I(t, e) {
  t.f = t.f & Ur | e;
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
function Kr(t) {
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
  ), l = 0, o = t.__root;
  if (o) {
    var i = s.indexOf(o);
    if (i !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var a = s.indexOf(e);
    if (a === -1)
      return;
    i <= a && (l = i);
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
function zr(t) {
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
  var r = (e & Ge) !== 0, n, s = !t.startsWith("<!>");
  return () => {
    if (N)
      return Ht(p, null), p;
    n === void 0 && (n = zr(s ? t : "<!>" + t), n = /** @type {Node} */
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
function Wr(t, e) {
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
      return e.recover === !1 && dr(), qt(), Er(r), Z(!1), Me(t, e);
    throw l;
  } finally {
    Z(n), H(s);
  }
}
const J = /* @__PURE__ */ new Map();
function He(t, { target: e, anchor: r, props: n = {}, events: s, context: u, intro: l = !0 }) {
  qt();
  var o = /* @__PURE__ */ new Set(), i = (c) => {
    for (var _ = 0; _ < c.length; _++) {
      var d = c[_];
      if (!o.has(d)) {
        o.add(d);
        var $ = Qe(d);
        e.addEventListener(d, ht, { passive: $ });
        var y = J.get(d);
        y === void 0 ? (document.addEventListener(d, ht, { passive: $ }), J.set(d, 1)) : J.set(d, y + 1);
      }
    }
  };
  i(Xe(je)), Mt.add(i);
  var a = void 0, f = Or(() => {
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
      ), a = t(c, n) || {}, N && (v.nodes_end = p), u && Qt();
    }), () => {
      var $;
      for (var _ of o) {
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
  return Vt.set(a, f), a;
}
let Vt = /* @__PURE__ */ new WeakMap();
function Jr(t, e) {
  const r = Vt.get(t);
  return r ? (Vt.delete(t), r(e)) : Promise.resolve();
}
function Gr(t, e, r = !1) {
  N && zt();
  var n = t, s = null, u = null, l = T, o = r ? Ut : 0, i = !1;
  const a = (c, _ = !0) => {
    i = !0, f(_, c);
  }, f = (c, _) => {
    if (l === (l = c)) return;
    let d = !1;
    if (N) {
      const $ = (
        /** @type {Comment} */
        n.data === ie
      );
      !!l === $ && (n = wr(), H(n), Z(!1), d = !0);
    }
    l ? (s ? ne(s) : _ && (s = Ft(() => _(n))), u && It(u, () => {
      u = null;
    })) : (u ? ne(u) : _ && (u = Ft(() => _(n))), s && It(s, () => {
      s = null;
    })), d && Z(!0);
  };
  Te(() => {
    i = !1, e(a), i || f(null, null);
  }, o), N && (n = p);
}
function Ye(t, e) {
  Dr(() => {
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
function Zr(t) {
  for (var e = v, r = v; e !== null && !(e.f & (L | rt)); )
    e = e.parent;
  try {
    return V(e), t();
  } finally {
    V(r);
  }
}
function Qr(t, e, r, n) {
  var B;
  var s = !1, u;
  u = /** @type {V} */
  t[e];
  var l = ((B = z(t, e)) == null ? void 0 : B.set) ?? void 0, o = (
    /** @type {V} */
    n
  ), i = !0, a = !1, f = () => (a = !0, i && (i = !1, o = /** @type {V} */
  n), o), c;
  if (c = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? f() : (i = !0, a = !1, m);
  }, l) {
    var _ = t.$$legacy;
    return function(m, b) {
      return arguments.length > 0 ? ((!b || _ || s) && l(b ? c() : m), m) : c();
    };
  }
  var d = !1, $ = !1, y = /* @__PURE__ */ ve(u), S = Zr(
    () => /* @__PURE__ */ Tr(() => {
      var m = c(), b = w(y);
      return d ? (d = !1, $ = !0, b) : ($ = !1, y.v = m);
    })
  );
  return function(m, b) {
    if (arguments.length > 0) {
      const Rt = b ? w(S) : m;
      return S.equals(Rt) || (d = !0, C(y, Rt), a && o !== void 0 && (o = Rt), Br(() => w(S))), m;
    }
    return w(S);
  };
}
function Xr(t) {
  return new tn(t);
}
var F, R;
class tn {
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
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var i = /* @__PURE__ */ ve(o);
      return r.set(l, i), i;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, o) {
          return w(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return o === lr ? !0 : (w(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o));
        },
        set(l, o, i) {
          return C(r.get(o) ?? n(o, i), i), Reflect.set(l, o, i);
        }
      }
    );
    At(this, R, (e.hydrate ? Wr : Me)(e.component, {
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
        set(o) {
          E(this, R)[l] = o;
        },
        enumerable: !0
      });
    E(this, R).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(s, l);
    }, E(this, R).$destroy = () => {
      Jr(E(this, R));
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
      let r = function(u) {
        return (l) => {
          const o = document.createElement("slot");
          u !== "default" && (o.name = u), at(l, o);
        };
      };
      var e = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = en(this);
      for (const u of this.$$s)
        u in s && (u === "default" && !this.$$d.children ? (this.$$d.children = r(u), n.default = !0) : n[u] = r(u));
      for (const u of this.attributes) {
        const l = this.$$g_p(u.name);
        l in this.$$d || (this.$$d[l] = pt(l, u.value, this.$$p_d, "toProp"));
      }
      for (const u in this.$$p_d)
        !(u in this.$$d) && this[u] !== void 0 && (this.$$d[u] = this[u], delete this[u]);
      this.$$c = Xr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Nr(() => {
        Rr(() => {
          var u;
          this.$$r = !0;
          for (const l of yt(this.$$c)) {
            if (!((u = this.$$p_d[l]) != null && u.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const o = pt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
          this.$$r = !1;
        });
      });
      for (const u in this.$$l)
        for (const l of this.$$l[u]) {
          const o = this.$$c.$on(u, l);
          this.$$l_u.set(l, o);
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
function en(t) {
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
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return yt(e).forEach((o) => {
    gt(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(i) {
        var c;
        i = pt(o, i, e), this.$$d[o] = i;
        var a = this.$$c;
        if (a) {
          var f = (c = z(a, o)) == null ? void 0 : c.get;
          f ? a[o] = i : a.$set({ [o]: i });
        }
      }
    });
  }), n.forEach((o) => {
    gt(l.prototype, o, {
      get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[o];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
const rn = (t, e, r) => {
  C(e, w(e) + 1), r();
};
var nn = /* @__PURE__ */ Ot("<div><h2> </h2> <button> </button></div>");
const sn = {
  hash: "svelte-zq967x",
  code: ":host {display:block;padding:1rem;background-color:var(--counter-background, aqua);color:var(--counter-text-color, black);}"
};
function Ue(t, e) {
  Zt(e, !0), Ye(t, sn);
  let r = Qr(e, "buttonHeader"), n = Pt(0);
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
  var u = nn(), l = ot(u), o = ot(l, !0);
  it(l);
  var i = br(l, 2);
  i.__click = [rn, n, s];
  var a = ot(i);
  return it(i), it(u), Ee(() => {
    Yt(o, r()), Yt(a, `count is ${w(n) ?? ""}`);
  }), at(t, u), Qt({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(f) {
      r(f), Gt();
    }
  });
}
Kr(["click"]);
customElements.define("counter-component", Be(Ue, { buttonHeader: {} }, [], [], !0));
class un extends HTMLElement {
  constructor() {
    super(), new Ue({
      target: this
    });
  }
}
customElements.get("counter-component") || customElements.define("counter-component", un);
var ln = /* @__PURE__ */ Ot("<p> </p>"), on = /* @__PURE__ */ Ot("<p>Pas de counter sur cette page</p>"), an = /* @__PURE__ */ Ot('<div class="svelte-jz8ejc"><!></div>');
const fn = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function Ke(t, e) {
  Zt(e, !0), Ye(t, fn);
  let r = Pt(0), n = Pt(!1);
  we(() => {
    const i = () => {
      const c = document.querySelector("counter-component");
      C(n, !!c);
    };
    i();
    const a = (c) => {
      C(r, G(c.detail.count));
    }, f = new MutationObserver(i);
    return f.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", a), () => {
      f.disconnect(), document.removeEventListener("counter-update", a);
    };
  });
  var s = an(), u = ot(s);
  {
    var l = (i) => {
      var a = ln(), f = ot(a);
      it(a), Ee(() => Yt(f, `Valeur du compteur : ${w(r) ?? ""}`)), at(i, a);
    }, o = (i) => {
      var a = on();
      at(i, a);
    };
    Gr(u, (i) => {
      w(n) ? i(l) : i(o, !1);
    });
  }
  it(s), at(t, s), Qt();
}
customElements.define("counterdisplay-component", Be(Ke, {}, [], [], !0));
class cn extends HTMLElement {
  constructor() {
    super(), new Ke({
      target: this
    });
  }
}
customElements.get("counterdisplay-component") || customElements.define("counterdisplay-component", cn);
