var Be = Object.defineProperty;
var Xt = (t) => {
  throw TypeError(t);
};
var Ue = (t, e, r) => e in t ? Be(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var A = (t, e, r) => Ue(t, typeof e != "symbol" ? e + "" : e, r), te = (t, e, r) => e.has(t) || Xt("Cannot " + r);
var E = (t, e, r) => (te(t, e, "read from private field"), r ? r.call(t) : e.get(t)), St = (t, e, r) => e.has(t) ? Xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), At = (t, e, r, n) => (te(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Ke = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ke);
const ze = 2, ie = "[", le = "[!", oe = "]", it = {}, T = Symbol(), We = ["touchstart", "touchmove"];
function Je(t) {
  return We.includes(t);
}
const fe = !1;
var ae = Array.isArray, Ge = Array.from, yt = Object.keys, wt = Object.defineProperty, z = Object.getOwnPropertyDescriptor, Ze = Object.prototype, Qe = Array.prototype, Xe = Object.getPrototypeOf;
function tr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const D = 2, ce = 4, xt = 8, Bt = 16, L = 32, rt = 64, Lt = 128, W = 256, gt = 512, O = 1024, M = 2048, dt = 4096, tt = 8192, nt = 16384, er = 32768, Ut = 65536, rr = 1 << 19, _e = 1 << 20, Dt = Symbol("$state"), nr = Symbol("legacy props");
function de(t) {
  return t === this.v;
}
function ur(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function sr(t) {
  return !ur(t, this.v);
}
function ir(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function lr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function or(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ar() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function cr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _r() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function dr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function vr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let hr = !1;
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
  return /* @__PURE__ */ $r(P(t));
}
// @__NO_SIDE_EFFECTS__
function ve(t, e = !1) {
  const r = P(t);
  return e || (r.equals = sr), r;
}
// @__NO_SIDE_EFFECTS__
function $r(t) {
  return h !== null && h.f & D && (q === null ? Dr([t]) : q.push(t)), t;
}
function C(t, e) {
  return h !== null && Pr() && h.f & (D | Bt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (q === null || !q.includes(t)) && vr(), mr(t, e);
}
function mr(t, e) {
  return t.equals(e) || (t.v = e, t.version = Le(), he(t, M), v !== null && v.f & O && !(v.f & L) && (w !== null && w.includes(t) ? (I(v, M), Nt(v)) : j === null ? Lr([t]) : j.push(t))), e;
}
function he(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, u = 0; u < n; u++) {
      var s = r[u], i = s.f;
      i & M || (I(s, e), i & (O | W) && (i & D ? he(
        /** @type {Derived} */
        s,
        dt
      ) : Nt(
        /** @type {Effect} */
        s
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
    throw Kt(), it;
  return p = t;
}
function zt() {
  return H(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ut(p)
  );
}
function lt(t) {
  if (N) {
    if (/* @__PURE__ */ ut(p) !== null)
      throw Kt(), it;
    p = t;
  }
}
function pr() {
  for (var t = 0, e = p; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === oe) {
        if (t === 0) return e;
        t -= 1;
      } else (r === ie || r === le) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ut(e)
    );
    e.remove(), e = n;
  }
}
function G(t, e = null, r) {
  if (typeof t != "object" || t === null || Dt in t)
    return t;
  const n = Xe(t);
  if (n !== Ze && n !== Qe)
    return t;
  var u = /* @__PURE__ */ new Map(), s = ae(t), i = P(0);
  s && u.set("length", P(
    /** @type {any[]} */
    t.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, o, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && cr();
        var c = u.get(o);
        return c === void 0 ? (c = P(a.value), u.set(o, c)) : C(c, G(a.value, f)), !0;
      },
      deleteProperty(l, o) {
        var a = u.get(o);
        if (a === void 0)
          o in l && u.set(o, P(T));
        else {
          if (s && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              u.get("length")
            ), _ = Number(o);
            Number.isInteger(_) && _ < c.v && C(c, _);
          }
          C(a, T), ee(i);
        }
        return !0;
      },
      get(l, o, a) {
        var $;
        if (o === Dt)
          return t;
        var c = u.get(o), _ = o in l;
        if (c === void 0 && (!_ || ($ = z(l, o)) != null && $.writable) && (c = P(G(_ ? l[o] : T, f)), u.set(o, c)), c !== void 0) {
          var d = g(c);
          return d === T ? void 0 : d;
        }
        return Reflect.get(l, o, a);
      },
      getOwnPropertyDescriptor(l, o) {
        var a = Reflect.getOwnPropertyDescriptor(l, o);
        if (a && "value" in a) {
          var c = u.get(o);
          c && (a.value = g(c));
        } else if (a === void 0) {
          var _ = u.get(o), d = _ == null ? void 0 : _.v;
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
      has(l, o) {
        var d;
        if (o === Dt)
          return !0;
        var a = u.get(o), c = a !== void 0 && a.v !== T || Reflect.has(l, o);
        if (a !== void 0 || v !== null && (!c || (d = z(l, o)) != null && d.writable)) {
          a === void 0 && (a = P(c ? G(l[o], f) : T), u.set(o, a));
          var _ = g(a);
          if (_ === T)
            return !1;
        }
        return c;
      },
      set(l, o, a, c) {
        var b;
        var _ = u.get(o), d = o in l;
        if (s && o === "length")
          for (var $ = a; $ < /** @type {Source<number>} */
          _.v; $ += 1) {
            var y = u.get($ + "");
            y !== void 0 ? C(y, T) : $ in l && (y = P(T), u.set($ + "", y));
          }
        _ === void 0 ? (!d || (b = z(l, o)) != null && b.writable) && (_ = P(void 0), C(_, G(a, f)), u.set(o, _)) : (d = _.v !== T, C(_, G(a, f)));
        var S = Reflect.getOwnPropertyDescriptor(l, o);
        if (S != null && S.set && S.set.call(c, a), !d) {
          if (s && typeof o == "string") {
            var B = (
              /** @type {Source<number>} */
              u.get("length")
            ), m = Number(o);
            Number.isInteger(m) && m >= B.v && C(B, m + 1);
          }
          ee(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var o = Reflect.ownKeys(l).filter((_) => {
          var d = u.get(_);
          return d === void 0 || d.v !== T;
        });
        for (var [a, c] of u)
          c.v !== T && !(a in l) && o.push(a);
        return o;
      },
      setPrototypeOf() {
        _r();
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
function ut(t) {
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
function yr(t, e = 1, r = !1) {
  let n = N ? p : t;
  for (var u; e--; )
    u = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ ut(n);
  if (!N)
    return n;
  var s = n == null ? void 0 : n.nodeType;
  if (r && s !== 3) {
    var i = bt();
    return n === null ? u == null || u.after(i) : n.before(i), H(i), i;
  }
  return H(n), /** @type {TemplateNode} */
  n;
}
function wr(t) {
  t.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function gr(t) {
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
function br(t) {
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
  V(br(t));
  try {
    pe(t), e = Pe(t);
  } finally {
    V(r);
  }
  return e;
}
function we(t) {
  var e = ye(t), r = (K || t.f & W) && t.deps !== null ? dt : O;
  I(t, r), t.equals(e) || (t.v = e, t.version = Le());
}
function Wt(t) {
  pe(t), _t(t, 0), I(t, nt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Er(t) {
  v === null && h === null && or(), h !== null && h.f & W && lr(), Jt && ir();
}
function Tr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function st(t, e, r, n = !0) {
  var u = (t & rt) !== 0, s = v, i = {
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
    parent: u ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var f = Q;
    try {
      ue(!0), Ct(i), i.f |= er;
    } catch (a) {
      throw Y(i), a;
    } finally {
      ue(f);
    }
  } else e !== null && Nt(i);
  var l = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & _e) === 0;
  if (!l && !u && n && (s !== null && Tr(i, s), h !== null && h.f & D)) {
    var o = (
      /** @type {Derived} */
      h
    );
    (o.children ?? (o.children = [])).push(i);
  }
  return i;
}
function ge(t) {
  Er();
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
function xr(t) {
  const e = st(rt, t, !0);
  return () => {
    Y(e);
  };
}
function kr(t) {
  const e = st(rt, t, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? It(e, () => {
      Y(e), n(void 0);
    }) : (Y(e), n(void 0));
  });
}
function be(t) {
  return st(ce, t, !1);
}
function Cr(t) {
  return st(xt, t, !0);
}
function Ee(t) {
  return Te(t);
}
function Te(t, e = 0) {
  return st(xt | Bt | e, t, !0);
}
function Ft(t, e = !0) {
  return st(xt | L, t, !0, e);
}
function xe(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = Jt, n = h;
    se(!0), et(null);
    try {
      e.call(null);
    } finally {
      se(r), et(n);
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
function Nr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & L || Y(e), e = r;
  }
}
function Y(t, e = !0) {
  var r = !1;
  if ((e || t.f & rr) && t.nodes_start !== null) {
    for (var n = t.nodes_start, u = t.nodes_end; n !== null; ) {
      var s = n === u ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ut(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  Ce(t, e && !r), ke(t), _t(t, 0), I(t, nt);
  var i = t.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  xe(t);
  var f = t.parent;
  f !== null && f.first !== null && Ne(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Ne(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function It(t, e) {
  var r = [];
  Oe(t, r, !0), Or(r, () => {
    Y(t), e && e();
  });
}
function Or(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var u of t)
      u.out(n);
  } else
    e();
}
function Oe(t, e, r) {
  if (!(t.f & tt)) {
    if (t.f ^= tt, t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || r) && e.push(i);
    for (var n = t.first; n !== null; ) {
      var u = n.next, s = (n.f & Ut) !== 0 || (n.f & L) !== 0;
      Oe(n, e, s ? r : !1), n = u;
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
      var n = r.next, u = (r.f & Ut) !== 0 || (r.f & L) !== 0;
      Re(r, u ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
let Tt = !1, jt = [];
function Se() {
  Tt = !1;
  const t = jt.slice();
  jt = [], tr(t);
}
function Rr(t) {
  Tt || (Tt = !0, queueMicrotask(Se)), jt.push(t);
}
function Sr() {
  Tt && Se();
}
const Ae = 0, Ar = 1;
let $t = !1, mt = Ae, at = !1, ct = null, Q = !1, Jt = !1;
function ue(t) {
  Q = t;
}
function se(t) {
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
function Dr(t) {
  q = t;
}
let w = null, k = 0, j = null;
function Lr(t) {
  j = t;
}
let De = 1, K = !1, x = null;
function Le() {
  return ++De;
}
function Pr() {
  return !hr;
}
function vt(t) {
  var i, f;
  var e = t.f;
  if (e & M)
    return !0;
  if (e & dt) {
    var r = t.deps, n = (e & W) !== 0;
    if (r !== null) {
      var u;
      if (e & gt) {
        for (u = 0; u < r.length; u++)
          ((i = r[u]).reactions ?? (i.reactions = [])).push(t);
        t.f ^= gt;
      }
      for (u = 0; u < r.length; u++) {
        var s = r[u];
        if (vt(
          /** @type {Derived} */
          s
        ) && we(
          /** @type {Derived} */
          s
        ), n && v !== null && !K && !((f = s == null ? void 0 : s.reactions) != null && f.includes(t)) && (s.reactions ?? (s.reactions = [])).push(t), s.version > t.version)
          return !0;
      }
    }
    (!n || v !== null && !K) && I(t, O);
  }
  return !1;
}
function qr(t, e) {
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
function Fr(t) {
  return (t.f & nt) === 0 && (t.parent === null || (t.parent.f & Lt) === 0);
}
function kt(t, e, r, n) {
  if ($t) {
    if (r === null && ($t = !1), Fr(e))
      throw t;
    return;
  }
  r !== null && ($t = !0);
  {
    qr(t, e);
    return;
  }
}
function Pe(t) {
  var _;
  var e = w, r = k, n = j, u = h, s = K, i = q, f = x, l = t.f;
  w = /** @type {null | Value[]} */
  null, k = 0, j = null, h = l & (L | rt) ? null : t, K = !Q && (l & W) !== 0, q = null, x = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), a = t.deps;
    if (w !== null) {
      var c;
      if (_t(t, k), a !== null && k > 0)
        for (a.length = k + w.length, c = 0; c < w.length; c++)
          a[k + c] = w[c];
      else
        t.deps = a = w;
      if (!K)
        for (c = k; c < a.length; c++)
          ((_ = a[c]).reactions ?? (_.reactions = [])).push(t);
    } else a !== null && k < a.length && (_t(t, k), a.length = k);
    return o;
  } finally {
    w = e, k = r, j = n, h = u, K = s, q = i, x = f;
  }
}
function Ir(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = r.indexOf(t);
    if (n !== -1) {
      var u = r.length - 1;
      u === 0 ? r = e.reactions = null : (r[n] = r[u], r.pop());
    }
  }
  r === null && e.f & D && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (w === null || !w.includes(e)) && (I(e, dt), e.f & (W | gt) || (e.f ^= gt), _t(
    /** @type {Derived} **/
    e,
    0
  ));
}
function _t(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Ir(t, r[n]);
}
function Ct(t) {
  var e = t.f;
  if (!(e & nt)) {
    I(t, O);
    var r = v, n = x;
    v = t;
    try {
      e & Bt ? Nr(t) : Ce(t), ke(t), xe(t);
      var u = Pe(t);
      t.teardown = typeof u == "function" ? u : null, t.version = De;
    } catch (s) {
      kt(s, t, r, n || t.ctx);
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
        var u = t[n];
        u.f & O || (u.f ^= O);
        var s = [];
        Ie(u, s), jr(s);
      }
    } finally {
      Q = r;
    }
  }
}
function jr(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      if (!(n.f & (nt | tt)))
        try {
          vt(n) && (Ct(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ne(n) : n.fn = null));
        } catch (u) {
          kt(u, n, null, n.ctx);
        }
    }
}
function Mr() {
  if (at = !1, X > 1001)
    return;
  const t = U;
  U = [], Fe(t), at || (X = 0, ct = null);
}
function Nt(t) {
  mt === Ae && (at || (at = !0, queueMicrotask(Mr))), ct = t;
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
    var u = r.f, s = (u & L) !== 0, i = s && (u & O) !== 0, f = r.next;
    if (!i && !(u & tt))
      if (u & xt) {
        if (s)
          r.f ^= O;
        else
          try {
            vt(r) && Ct(r);
          } catch (c) {
            kt(c, r, null, r.ctx);
          }
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      } else u & ce && n.push(r);
    if (f === null) {
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
    r = f;
  }
  for (var a = 0; a < n.length; a++)
    l = n[a], e.push(l), Ie(l, e);
}
function Gt(t) {
  var e = mt, r = U;
  try {
    qe();
    const u = [];
    mt = Ar, U = u, at = !1, Fe(r);
    var n = t == null ? void 0 : t();
    return Sr(), (U.length > 0 || u.length > 0) && Gt(), X = 0, ct = null, n;
  } finally {
    mt = e, U = r;
  }
}
function g(t) {
  var a;
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
    q !== null && q.includes(t) && dr();
    var u = h.deps;
    w === null && u !== null && u[k] === t ? k++ : w === null ? w = [t] : w.push(t), j !== null && v !== null && v.f & O && !(v.f & L) && j.includes(t) && (I(v, M), Nt(v));
  } else if (r && /** @type {Derived} */
  t.deps === null)
    for (var s = (
      /** @type {Derived} */
      t
    ), i = s.parent, f = s; i !== null; )
      if (i.f & D) {
        var l = (
          /** @type {Derived} */
          i
        );
        f = l, i = l.parent;
      } else {
        var o = (
          /** @type {Effect} */
          i
        );
        (a = o.deriveds) != null && a.includes(f) || (o.deriveds ?? (o.deriveds = [])).push(f);
        break;
      }
  return r && (s = /** @type {Derived} */
  t, vt(s) && we(s)), t.v;
}
function Hr(t) {
  const e = h;
  try {
    return h = null, t();
  } finally {
    h = e;
  }
}
const Yr = ~(M | dt | O);
function I(t, e) {
  t.f = t.f & Yr | e;
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
    const i = e.e;
    if (i !== null) {
      var r = v, n = h;
      e.e = null;
      try {
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          V(s.effect), et(s.reaction), be(s.fn);
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
function Vr(t) {
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
  ), n = t.type, u = ((m = t.composedPath) == null ? void 0 : m.call(t)) || [], s = (
    /** @type {null | Element} */
    u[0] || t.target
  ), i = 0, f = t.__root;
  if (f) {
    var l = u.indexOf(f);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = u.indexOf(e);
    if (o === -1)
      return;
    l <= o && (i = l);
  }
  if (s = /** @type {Element} */
  u[i] || t.target, s !== e) {
    wt(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var a = h, c = v;
    et(null), V(null);
    try {
      for (var _, d = []; s !== null; ) {
        var $ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + n];
          if (y !== void 0 && !/** @type {any} */
          s.disabled)
            if (ae(y)) {
              var [S, ...B] = y;
              S.apply(s, [t, ...B]);
            } else
              y.call(s, t);
        } catch (b) {
          _ ? d.push(b) : _ = b;
        }
        if (t.cancelBubble || $ === e || $ === null)
          break;
        s = $;
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
function Br(t) {
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
  var r = (e & ze) !== 0, n, u = !t.startsWith("<!>");
  return () => {
    if (N)
      return Ht(p, null), p;
    n === void 0 && (n = Br(u ? t : "<!>" + t), n = /** @type {Node} */
    /* @__PURE__ */ Et(n));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Ht(s, s), s;
  };
}
function ft(t, e) {
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
function Ur(t, e) {
  qt(), e.intro = e.intro ?? !1;
  const r = e.target, n = N, u = p;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Et(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== ie); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ ut(s);
    if (!s)
      throw it;
    Z(!0), H(
      /** @type {Comment} */
      s
    ), zt();
    const i = He(t, { ...e, anchor: s });
    if (p === null || p.nodeType !== 8 || /** @type {Comment} */
    p.data !== oe)
      throw Kt(), it;
    return Z(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === it)
      return e.recover === !1 && ar(), qt(), wr(r), Z(!1), Me(t, e);
    throw i;
  } finally {
    Z(n), H(u);
  }
}
const J = /* @__PURE__ */ new Map();
function He(t, { target: e, anchor: r, props: n = {}, events: u, context: s, intro: i = !0 }) {
  qt();
  var f = /* @__PURE__ */ new Set(), l = (c) => {
    for (var _ = 0; _ < c.length; _++) {
      var d = c[_];
      if (!f.has(d)) {
        f.add(d);
        var $ = Je(d);
        e.addEventListener(d, ht, { passive: $ });
        var y = J.get(d);
        y === void 0 ? (document.addEventListener(d, ht, { passive: $ }), J.set(d, 1)) : J.set(d, y + 1);
      }
    }
  };
  l(Ge(je)), Mt.add(l);
  var o = void 0, a = kr(() => {
    var c = r ?? e.appendChild(bt());
    return Ft(() => {
      if (s) {
        Zt({});
        var _ = (
          /** @type {ComponentContext} */
          x
        );
        _.c = s;
      }
      u && (n.$$events = u), N && Ht(
        /** @type {TemplateNode} */
        c,
        null
      ), o = t(c, n) || {}, N && (v.nodes_end = p), s && Qt();
    }), () => {
      var $;
      for (var _ of f) {
        e.removeEventListener(_, ht);
        var d = (
          /** @type {number} */
          J.get(_)
        );
        --d === 0 ? (document.removeEventListener(_, ht), J.delete(_)) : J.set(_, d);
      }
      Mt.delete(l), c !== r && (($ = c.parentNode) == null || $.removeChild(c));
    };
  });
  return Vt.set(o, a), o;
}
let Vt = /* @__PURE__ */ new WeakMap();
function Kr(t, e) {
  const r = Vt.get(t);
  return r ? (Vt.delete(t), r(e)) : Promise.resolve();
}
function zr(t, e, r = !1) {
  N && zt();
  var n = t, u = null, s = null, i = T, f = r ? Ut : 0, l = !1;
  const o = (c, _ = !0) => {
    l = !0, a(_, c);
  }, a = (c, _) => {
    if (i === (i = c)) return;
    let d = !1;
    if (N) {
      const $ = (
        /** @type {Comment} */
        n.data === le
      );
      !!i === $ && (n = pr(), H(n), Z(!1), d = !0);
    }
    i ? (u ? ne(u) : _ && (u = Ft(() => _(n))), s && It(s, () => {
      s = null;
    })) : (s ? ne(s) : _ && (s = Ft(() => _(n))), u && It(u, () => {
      u = null;
    })), d && Z(!0);
  };
  Te(() => {
    l = !1, e(o), l || a(null, null);
  }, f), N && (n = p);
}
function Wr(t, e) {
  Rr(() => {
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
      const u = document.createElement("style");
      u.id = e.hash, u.textContent = e.code, n.appendChild(u);
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
  var u = !1, s;
  s = /** @type {V} */
  t[e];
  var i = ((B = z(t, e)) == null ? void 0 : B.set) ?? void 0, f = (
    /** @type {V} */
    n
  ), l = !0, o = !1, a = () => (o = !0, l && (l = !1, f = /** @type {V} */
  n), f), c;
  if (c = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? a() : (l = !0, o = !1, m);
  }, i) {
    var _ = t.$$legacy;
    return function(m, b) {
      return arguments.length > 0 ? ((!b || _ || u) && i(b ? c() : m), m) : c();
    };
  }
  var d = !1, $ = !1, y = /* @__PURE__ */ ve(s), S = Jr(
    () => /* @__PURE__ */ gr(() => {
      var m = c(), b = g(y);
      return d ? (d = !1, $ = !0, b) : ($ = !1, y.v = m);
    })
  );
  return function(m, b) {
    if (arguments.length > 0) {
      const Rt = b ? g(S) : m;
      return S.equals(Rt) || (d = !0, C(y, Rt), o && f !== void 0 && (f = Rt), Hr(() => g(S))), m;
    }
    return g(S);
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
    var s;
    var r = /* @__PURE__ */ new Map(), n = (i, f) => {
      var l = /* @__PURE__ */ ve(f);
      return r.set(i, l), l;
    };
    const u = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, f) {
          return g(r.get(f) ?? n(f, Reflect.get(i, f)));
        },
        has(i, f) {
          return f === nr ? !0 : (g(r.get(f) ?? n(f, Reflect.get(i, f))), Reflect.has(i, f));
        },
        set(i, f, l) {
          return C(r.get(f) ?? n(f, l), l), Reflect.set(i, f, l);
        }
      }
    );
    At(this, R, (e.hydrate ? Ur : Me)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: u,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && Gt(), At(this, F, u.$$events);
    for (const i of Object.keys(E(this, R)))
      i === "$set" || i === "$destroy" || i === "$on" || wt(this, i, {
        get() {
          return E(this, R)[i];
        },
        /** @param {any} value */
        set(f) {
          E(this, R)[i] = f;
        },
        enumerable: !0
      });
    E(this, R).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(u, i);
    }, E(this, R).$destroy = () => {
      Kr(E(this, R));
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
    const n = (...u) => r.call(this, ...u);
    return E(this, F)[e].push(n), () => {
      E(this, F)[e] = E(this, F)[e].filter(
        /** @param {any} fn */
        (u) => u !== n
      );
    };
  }
  $destroy() {
    E(this, R).$destroy();
  }
}
F = new WeakMap(), R = new WeakMap();
let Ye;
typeof HTMLElement == "function" && (Ye = class extends HTMLElement {
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
      const u = this.$$c.$on(e, r);
      this.$$l_u.set(r, u);
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
      const u = this.$$l_u.get(r);
      u && (u(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(u) {
        return (s) => {
          const i = document.createElement("slot");
          u !== "default" && (i.name = u), ft(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Xr(this);
      for (const u of this.$$s)
        u in n && (u === "default" && !this.$$d.children ? (this.$$d.children = e(u), r.default = !0) : r[u] = e(u));
      for (const u of this.attributes) {
        const s = this.$$g_p(u.name);
        s in this.$$d || (this.$$d[s] = pt(s, u.value, this.$$p_d, "toProp"));
      }
      for (const u in this.$$p_d)
        !(u in this.$$d) && this[u] !== void 0 && (this.$$d[u] = this[u], delete this[u]);
      this.$$c = Zr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = xr(() => {
        Cr(() => {
          var u;
          this.$$r = !0;
          for (const s of yt(this.$$c)) {
            if (!((u = this.$$p_d[s]) != null && u.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const i = pt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
          this.$$r = !1;
        });
      });
      for (const u in this.$$l)
        for (const s of this.$$l[u]) {
          const i = this.$$c.$on(u, s);
          this.$$l_u.set(s, i);
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
    var u;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = pt(e, n, this.$$p_d, "toProp"), (u = this.$$c) == null || u.$set({ [e]: this.$$d[e] }));
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
  var s;
  const u = (s = r[t]) == null ? void 0 : s.type;
  if (e = u === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
    switch (u) {
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
    switch (u) {
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
function Ve(t, e, r, n, u, s) {
  let i = class extends Ye {
    constructor() {
      super(t, r, u), this.$$p_d = e;
    }
    static get observedAttributes() {
      return yt(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return yt(e).forEach((f) => {
    wt(i.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(l) {
        var c;
        l = pt(f, l, e), this.$$d[f] = l;
        var o = this.$$c;
        if (o) {
          var a = (c = z(o, f)) == null ? void 0 : c.get;
          a ? o[f] = l : o.$set({ [f]: l });
        }
      }
    });
  }), n.forEach((f) => {
    wt(i.prototype, f, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[f];
      }
    });
  }), t.element = /** @type {any} */
  i, i;
}
const tn = (t, e, r) => {
  C(e, g(e) + 1), r();
};
var en = /* @__PURE__ */ Ot("<div><h2> </h2> <button> </button></div>");
function rn(t, e) {
  Zt(e, !0);
  let r = Gr(e, "buttonHeader"), n = Pt(0);
  const u = () => {
    document.dispatchEvent(new CustomEvent("counter-update", {
      detail: { count: g(n) },
      bubbles: !0,
      composed: !0
    }));
  };
  ge(() => {
    u();
  });
  var s = en(), i = ot(s), f = ot(i, !0);
  lt(i);
  var l = yr(i, 2);
  l.__click = [tn, n, u];
  var o = ot(l);
  return lt(l), lt(s), Ee(() => {
    Yt(f, r()), Yt(o, `count is ${g(n) ?? ""}`);
  }), ft(t, s), Qt({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(a) {
      r(a), Gt();
    }
  });
}
Vr(["click"]);
customElements.define("counter-component", Ve(rn, { buttonHeader: {} }, [], [], !0));
var nn = /* @__PURE__ */ Ot("<p> </p>"), un = /* @__PURE__ */ Ot("<p>Pas de counter sur cette page</p>"), sn = /* @__PURE__ */ Ot('<div class="svelte-jz8ejc"><!></div>');
const ln = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function on(t, e) {
  Zt(e, !0), Wr(t, ln);
  let r = Pt(0), n = Pt(!1);
  ge(() => {
    const l = () => {
      const c = document.querySelector("counter-component");
      C(n, !!c);
    };
    l();
    const o = (c) => {
      C(r, G(c.detail.count));
    }, a = new MutationObserver(l);
    return a.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", o), () => {
      a.disconnect(), document.removeEventListener("counter-update", o);
    };
  });
  var u = sn(), s = ot(u);
  {
    var i = (l) => {
      var o = nn(), a = ot(o);
      lt(o), Ee(() => Yt(a, `Valeur du compteur : ${g(r) ?? ""}`)), ft(l, o);
    }, f = (l) => {
      var o = un();
      ft(l, o);
    };
    zr(s, (l) => {
      g(n) ? l(i) : l(f, !1);
    });
  }
  lt(u), ft(t, u), Qt();
}
customElements.define("counter-display", Ve(on, {}, [], [], !0));
export {
  rn as Counter,
  on as CounterDisplay
};
