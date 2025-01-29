var zr = Object.defineProperty;
var Ft = (e) => {
  throw TypeError(e);
};
var Yr = (e, t, r) => t in e ? zr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var j = (e, t, r) => Yr(e, typeof t != "symbol" ? t + "" : t, r), gt = (e, t, r) => t.has(e) || Ft("Cannot " + r);
var E = (e, t, r) => (gt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ne = (e, t, r) => t.has(e) ? Ft("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ie = (e, t, r, n) => (gt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ge = (e, t, r) => (gt(e, t, "access private method"), r);
const Kr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Kr);
const Wr = 1, Gr = 2, Jr = 16, Xr = 1, Zr = 2, Qr = 4, en = 2, Zt = "[", St = "[!", At = "]", De = {}, A = Symbol(), tn = ["touchstart", "touchmove"];
function rn(e) {
  return tn.includes(e);
}
const Qt = !1;
var Lt = Array.isArray, Ot = Array.from, tt = Object.keys, rt = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, nn = Object.getOwnPropertyDescriptors, sn = Object.prototype, on = Array.prototype, er = Object.getPrototypeOf;
function un(e) {
  return typeof e == "function";
}
const Le = () => {
};
function ln(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const V = 2, tr = 4, je = 8, ut = 16, z = 32, Ce = 64, $t = 128, $e = 256, nt = 512, O = 1024, fe = 2048, Ue = 4096, Y = 8192, Ne = 16384, rr = 32768, lt = 65536, an = 1 << 19, nr = 1 << 20, Xe = Symbol("$state"), fn = Symbol("legacy props");
function ir(e) {
  return e === this.v;
}
function cn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function dn(e) {
  return !cn(e, this.v);
}
function vn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function _n(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function pn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function gn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function mn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yn() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function wn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let sr = !1;
function q(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ir,
    version: 0
  };
  return r;
}
function I(e) {
  return /* @__PURE__ */ En(q(e));
}
// @__NO_SIDE_EFFECTS__
function Rt(e, t = !1) {
  const r = q(e);
  return t || (r.equals = dn), r;
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return w !== null && w.f & V && (K === null ? Dn([e]) : K.push(e)), e;
}
function x(e, t) {
  return w !== null && qn() && w.f & (V | ut) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (K === null || !K.includes(e)) && wn(), or(e, t);
}
function or(e, t) {
  return e.equals(t) || (e.v = t, e.version = kr(), ur(e, fe), $ !== null && $.f & O && !($.f & z) && (C !== null && C.includes(e) ? (G($, fe), vt($)) : ae === null ? Pn([e]) : ae.push(e))), t;
}
function ur(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i], o = s.f;
      o & fe || (G(s, t), o & (O | $e) && (o & V ? ur(
        /** @type {Derived} */
        s,
        Ue
      ) : vt(
        /** @type {Effect} */
        s
      )));
    }
}
function Dt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function Q(e) {
  T = e;
}
let k;
function H(e) {
  if (e === null)
    throw Dt(), De;
  return k = e;
}
function Ve() {
  return H(
    /** @type {TemplateNode} */
    /* @__PURE__ */ de(k)
  );
}
function M(e) {
  if (T) {
    if (/* @__PURE__ */ de(k) !== null)
      throw Dt(), De;
    k = e;
  }
}
function bt() {
  for (var e = 0, t = k; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === At) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zt || r === St) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ de(t)
    );
    t.remove(), t = n;
  }
}
function X(e, t = null, r) {
  if (typeof e != "object" || e === null || Xe in e)
    return e;
  const n = er(e);
  if (n !== sn && n !== on)
    return e;
  var i = /* @__PURE__ */ new Map(), s = Lt(e), o = q(0);
  s && i.set("length", q(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(v, f, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && $n();
        var u = i.get(f);
        return u === void 0 ? (u = q(a.value), i.set(f, u)) : x(u, X(a.value, l)), !0;
      },
      deleteProperty(v, f) {
        var a = i.get(f);
        if (a === void 0)
          f in v && i.set(f, q(A));
        else {
          if (s && typeof f == "string") {
            var u = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(f);
            Number.isInteger(d) && d < u.v && x(u, d);
          }
          x(a, A), Bt(o);
        }
        return !0;
      },
      get(v, f, a) {
        var h;
        if (f === Xe)
          return e;
        var u = i.get(f), d = f in v;
        if (u === void 0 && (!d || (h = pe(v, f)) != null && h.writable) && (u = q(X(d ? v[f] : A, l)), i.set(f, u)), u !== void 0) {
          var c = y(u);
          return c === A ? void 0 : c;
        }
        return Reflect.get(v, f, a);
      },
      getOwnPropertyDescriptor(v, f) {
        var a = Reflect.getOwnPropertyDescriptor(v, f);
        if (a && "value" in a) {
          var u = i.get(f);
          u && (a.value = y(u));
        } else if (a === void 0) {
          var d = i.get(f), c = d == null ? void 0 : d.v;
          if (d !== void 0 && c !== A)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return a;
      },
      has(v, f) {
        var c;
        if (f === Xe)
          return !0;
        var a = i.get(f), u = a !== void 0 && a.v !== A || Reflect.has(v, f);
        if (a !== void 0 || $ !== null && (!u || (c = pe(v, f)) != null && c.writable)) {
          a === void 0 && (a = q(u ? X(v[f], l) : A), i.set(f, a));
          var d = y(a);
          if (d === A)
            return !1;
        }
        return u;
      },
      set(v, f, a, u) {
        var b;
        var d = i.get(f), c = f in v;
        if (s && f === "length")
          for (var h = a; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var p = i.get(h + "");
            p !== void 0 ? x(p, A) : h in v && (p = q(A), i.set(h + "", p));
          }
        d === void 0 ? (!c || (b = pe(v, f)) != null && b.writable) && (d = q(void 0), x(d, X(a, l)), i.set(f, d)) : (c = d.v !== A, x(d, X(a, l)));
        var g = Reflect.getOwnPropertyDescriptor(v, f);
        if (g != null && g.set && g.set.call(u, a), !c) {
          if (s && typeof f == "string") {
            var m = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(f);
            Number.isInteger(_) && _ >= m.v && x(m, _ + 1);
          }
          Bt(o);
        }
        return !0;
      },
      ownKeys(v) {
        y(o);
        var f = Reflect.ownKeys(v).filter((d) => {
          var c = i.get(d);
          return c === void 0 || c.v !== A;
        });
        for (var [a, u] of i)
          u.v !== A && !(a in v) && f.push(a);
        return f;
      },
      setPrototypeOf() {
        bn();
      }
    }
  );
}
function Bt(e, t = 1) {
  x(e, e.v + t);
}
var jt, lr, ar;
function yt() {
  if (jt === void 0) {
    jt = window;
    var e = Element.prototype, t = Node.prototype;
    lr = pe(t, "firstChild").get, ar = pe(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ce(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return lr.call(e);
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return ar.call(e);
}
function U(e, t) {
  if (!T)
    return /* @__PURE__ */ xe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(k)
  );
  if (r === null)
    r = k.appendChild(ce());
  else if (t && r.nodeType !== 3) {
    var n = ce();
    return r == null || r.before(n), H(n), n;
  }
  return H(r), r;
}
function fr(e, t) {
  if (!T) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ de(r) : r;
  }
  return k;
}
function ke(e, t = 1, r = !1) {
  let n = T ? k : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ de(n);
  if (!T)
    return n;
  var s = n == null ? void 0 : n.nodeType;
  if (r && s !== 3) {
    var o = ce();
    return n === null ? i == null || i.after(o) : n.before(o), H(o), o;
  }
  return H(n), /** @type {TemplateNode} */
  n;
}
function cr(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function xn(e) {
  var t = V | fe;
  $ === null ? t |= $e : $.f |= nr;
  var r = w !== null && w.f & V ? (
    /** @type {Derived} */
    w
  ) : null;
  const n = {
    children: null,
    ctx: L,
    deps: null,
    equals: ir,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? $
  };
  return r !== null && (r.children ?? (r.children = [])).push(n), n;
}
function dr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & V ? Pt(
        /** @type {Derived} */
        n
      ) : ee(
        /** @type {Effect} */
        n
      );
    }
  }
}
function kn(e) {
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
function vr(e) {
  var t, r = $;
  F(kn(e));
  try {
    dr(e), t = Tr(e);
  } finally {
    F(r);
  }
  return t;
}
function hr(e) {
  var t = vr(e), r = (he || e.f & $e) && e.deps !== null ? Ue : O;
  G(e, r), e.equals(t) || (e.v = t, e.version = kr());
}
function Pt(e) {
  dr(e), Fe(e, 0), G(e, Ne), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Tn(e) {
  $ === null && w === null && _n(), w !== null && w.f & $e && hn(), Mt && vn();
}
function Cn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function be(e, t, r, n = !0) {
  var i = (e & Ce) !== 0, s = $, o = {
    ctx: L,
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
    var l = we;
    try {
      Ut(!0), dt(o), o.f |= rr;
    } catch (a) {
      throw ee(o), a;
    } finally {
      Ut(l);
    }
  } else t !== null && vt(o);
  var v = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & nr) === 0;
  if (!v && !i && n && (s !== null && Cn(o, s), w !== null && w.f & V)) {
    var f = (
      /** @type {Derived} */
      w
    );
    (f.children ?? (f.children = [])).push(o);
  }
  return o;
}
function Nn(e) {
  const t = be(je, null, !1);
  return G(t, O), t.teardown = e, t;
}
function Pe(e) {
  Tn();
  var t = $ !== null && ($.f & z) !== 0 && L !== null && !L.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      L
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: $,
      reaction: w
    });
  } else {
    var n = at(e);
    return n;
  }
}
function Sn(e) {
  const t = be(Ce, e, !0);
  return () => {
    ee(t);
  };
}
function An(e) {
  const t = be(Ce, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? it(t, () => {
      ee(t), n(void 0);
    }) : (ee(t), n(void 0));
  });
}
function at(e) {
  return be(tr, e, !1);
}
function _r(e) {
  return be(je, e, !0);
}
function qe(e) {
  return qt(e);
}
function qt(e, t = 0) {
  return be(je | ut | t, e, !0);
}
function Ie(e, t = !0) {
  return be(je | z, e, !0, t);
}
function pr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mt, n = w;
    Vt(!0), W(null);
    try {
      t.call(null);
    } finally {
      Vt(r), W(n);
    }
  }
}
function gr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Pt(t[r]);
  }
}
function mr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    ee(r, t), r = n;
  }
}
function Ln(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & z || ee(t), t = r;
  }
}
function ee(e, t = !0) {
  var r = !1;
  if ((t || e.f & an) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var s = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ de(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  mr(e, t && !r), gr(e), Fe(e, 0), G(e, Ne);
  var o = e.transitions;
  if (o !== null)
    for (const v of o)
      v.stop();
  pr(e);
  var l = e.parent;
  l !== null && l.first !== null && $r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function $r(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function it(e, t) {
  var r = [];
  It(e, r, !0), br(r, () => {
    ee(e), t && t();
  });
}
function br(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function It(e, t, r) {
  if (!(e.f & Y)) {
    if (e.f ^= Y, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & lt) !== 0 || (n.f & z) !== 0;
      It(n, t, s ? r : !1), n = i;
    }
  }
}
function st(e) {
  yr(e, !0);
}
function yr(e, t) {
  if (e.f & Y) {
    ze(e) && dt(e), e.f ^= Y;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & lt) !== 0 || (r.f & z) !== 0;
      yr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let ot = !1, wt = [];
function wr() {
  ot = !1;
  const e = wt.slice();
  wt = [], ln(e);
}
function ft(e) {
  ot || (ot = !0, queueMicrotask(wr)), wt.push(e);
}
function On() {
  ot && wr();
}
const Er = 0, Rn = 1;
let Ze = !1, Qe = Er, Me = !1, He = null, we = !1, Mt = !1;
function Ut(e) {
  we = e;
}
function Vt(e) {
  Mt = e;
}
let ve = [], Ee = 0;
let w = null;
function W(e) {
  w = e;
}
let $ = null;
function F(e) {
  $ = e;
}
let K = null;
function Dn(e) {
  K = e;
}
let C = null, R = 0, ae = null;
function Pn(e) {
  ae = e;
}
let xr = 1, he = !1, L = null;
function kr() {
  return ++xr;
}
function qn() {
  return !sr;
}
function ze(e) {
  var o, l;
  var t = e.f;
  if (t & fe)
    return !0;
  if (t & Ue) {
    var r = e.deps, n = (t & $e) !== 0;
    if (r !== null) {
      var i;
      if (t & nt) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= nt;
      }
      for (i = 0; i < r.length; i++) {
        var s = r[i];
        if (ze(
          /** @type {Derived} */
          s
        ) && hr(
          /** @type {Derived} */
          s
        ), n && $ !== null && !he && !((l = s == null ? void 0 : s.reactions) != null && l.includes(e)) && (s.reactions ?? (s.reactions = [])).push(e), s.version > e.version)
          return !0;
      }
    }
    (!n || $ !== null && !he) && G(e, O);
  }
  return !1;
}
function In(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & $t)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= $t;
      }
    r = r.parent;
  }
  throw Ze = !1, e;
}
function Mn(e) {
  return (e.f & Ne) === 0 && (e.parent === null || (e.parent.f & $t) === 0);
}
function ct(e, t, r, n) {
  if (Ze) {
    if (r === null && (Ze = !1), Mn(t))
      throw e;
    return;
  }
  r !== null && (Ze = !0);
  {
    In(e, t);
    return;
  }
}
function Tr(e) {
  var d;
  var t = C, r = R, n = ae, i = w, s = he, o = K, l = L, v = e.f;
  C = /** @type {null | Value[]} */
  null, R = 0, ae = null, w = v & (z | Ce) ? null : e, he = !we && (v & $e) !== 0, K = null, L = e.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), a = e.deps;
    if (C !== null) {
      var u;
      if (Fe(e, R), a !== null && R > 0)
        for (a.length = R + C.length, u = 0; u < C.length; u++)
          a[R + u] = C[u];
      else
        e.deps = a = C;
      if (!he)
        for (u = R; u < a.length; u++)
          ((d = a[u]).reactions ?? (d.reactions = [])).push(e);
    } else a !== null && R < a.length && (Fe(e, R), a.length = R);
    return f;
  } finally {
    C = t, R = r, ae = n, w = i, he = s, K = o, L = l;
  }
}
function Hn(e, t) {
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
  (C === null || !C.includes(t)) && (G(t, Ue), t.f & ($e | nt) || (t.f ^= nt), Fe(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Fe(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Hn(e, r[n]);
}
function dt(e) {
  var t = e.f;
  if (!(t & Ne)) {
    G(e, O);
    var r = $, n = L;
    $ = e;
    try {
      t & ut ? Ln(e) : mr(e), gr(e), pr(e);
      var i = Tr(e);
      e.teardown = typeof i == "function" ? i : null, e.version = xr;
    } catch (s) {
      ct(s, e, r, n || e.ctx);
    } finally {
      $ = r;
    }
  }
}
function Cr() {
  if (Ee > 1e3) {
    Ee = 0;
    try {
      pn();
    } catch (e) {
      if (He !== null)
        ct(e, He, null);
      else
        throw e;
    }
  }
  Ee++;
}
function Nr(e) {
  var t = e.length;
  if (t !== 0) {
    Cr();
    var r = we;
    we = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & O || (i.f ^= O);
        var s = [];
        Sr(i, s), Fn(s);
      }
    } finally {
      we = r;
    }
  }
}
function Fn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if (!(n.f & (Ne | Y)))
        try {
          ze(n) && (dt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? $r(n) : n.fn = null));
        } catch (i) {
          ct(i, n, null, n.ctx);
        }
    }
}
function Bn() {
  if (Me = !1, Ee > 1001)
    return;
  const e = ve;
  ve = [], Nr(e), Me || (Ee = 0, He = null);
}
function vt(e) {
  Qe === Er && (Me || (Me = !0, queueMicrotask(Bn))), He = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ce | z)) {
      if (!(r & O)) return;
      t.f ^= O;
    }
  }
  ve.push(t);
}
function Sr(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, s = (i & z) !== 0, o = s && (i & O) !== 0, l = r.next;
    if (!o && !(i & Y))
      if (i & je) {
        if (s)
          r.f ^= O;
        else
          try {
            ze(r) && dt(r);
          } catch (u) {
            ct(u, r, null, r.ctx);
          }
        var v = r.first;
        if (v !== null) {
          r = v;
          continue;
        }
      } else i & tr && n.push(r);
    if (l === null) {
      let u = r.parent;
      for (; u !== null; ) {
        if (e === u)
          break e;
        var f = u.next;
        if (f !== null) {
          r = f;
          continue e;
        }
        u = u.parent;
      }
    }
    r = l;
  }
  for (var a = 0; a < n.length; a++)
    v = n[a], t.push(v), Sr(v, t);
}
function _e(e) {
  var t = Qe, r = ve;
  try {
    Cr();
    const i = [];
    Qe = Rn, ve = i, Me = !1, Nr(r);
    var n = e == null ? void 0 : e();
    return On(), (ve.length > 0 || i.length > 0) && _e(), Ee = 0, He = null, n;
  } finally {
    Qe = t, ve = r;
  }
}
function y(e) {
  var a;
  var t = e.f, r = (t & V) !== 0;
  if (r && t & Ne) {
    var n = vr(
      /** @type {Derived} */
      e
    );
    return Pt(
      /** @type {Derived} */
      e
    ), n;
  }
  if (w !== null) {
    K !== null && K.includes(e) && yn();
    var i = w.deps;
    C === null && i !== null && i[R] === e ? R++ : C === null ? C = [e] : C.push(e), ae !== null && $ !== null && $.f & O && !($.f & z) && ae.includes(e) && (G($, fe), vt($));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var s = (
      /** @type {Derived} */
      e
    ), o = s.parent, l = s; o !== null; )
      if (o.f & V) {
        var v = (
          /** @type {Derived} */
          o
        );
        l = v, o = v.parent;
      } else {
        var f = (
          /** @type {Effect} */
          o
        );
        (a = f.deriveds) != null && a.includes(l) || (f.deriveds ?? (f.deriveds = [])).push(l);
        break;
      }
  return r && (s = /** @type {Derived} */
  e, ze(s) && hr(s)), e.v;
}
function Ht(e) {
  const t = w;
  try {
    return w = null, e();
  } finally {
    w = t;
  }
}
const jn = ~(fe | Ue | O);
function G(e, t) {
  e.f = e.f & jn | t;
}
function Se(e, t = !1, r) {
  L = {
    p: L,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Ae(e) {
  const t = L;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = $, n = w;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var s = o[i];
          F(s.effect), W(s.reaction), at(s.fn);
        }
      } finally {
        F(r), W(n);
      }
    }
    L = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Un(e) {
  var t = w, r = $;
  W(null), F(null);
  try {
    return e();
  } finally {
    W(t), F(r);
  }
}
const Ar = /* @__PURE__ */ new Set(), Et = /* @__PURE__ */ new Set();
function Vn(e, t, r, n) {
  function i(s) {
    if (n.capture || Oe.call(t, s), !s.cancelBubble)
      return Un(() => r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ft(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function zt(e, t, r, n, i) {
  var s = { capture: n, passive: i }, o = Vn(e, t, r, s);
  (t === document.body || t === window || t === document) && Nn(() => {
    t.removeEventListener(e, o, s);
  });
}
function ht(e) {
  for (var t = 0; t < e.length; t++)
    Ar.add(e[t]);
  for (var r of Et)
    r(e);
}
function Oe(e) {
  var _;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, l = e.__root;
  if (l) {
    var v = i.indexOf(l);
    if (v !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    v <= f && (o = v);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    rt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var a = w, u = $;
    W(null), F(null);
    try {
      for (var d, c = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var p = s["__" + n];
          if (p !== void 0 && !/** @type {any} */
          s.disabled)
            if (Lt(p)) {
              var [g, ...m] = p;
              g.apply(s, [e, ...m]);
            } else
              p.call(s, e);
        } catch (b) {
          d ? c.push(b) : d = b;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (d) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, W(a), F(u);
    }
  }
}
function zn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ge(e, t) {
  var r = (
    /** @type {Effect} */
    $
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var r = (t & en) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    if (T)
      return ge(k, null), k;
    n === void 0 && (n = zn(i ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ xe(n));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return ge(s, s), s;
  };
}
function Yn(e = "") {
  if (!T) {
    var t = ce(e + "");
    return ge(t, t), t;
  }
  var r = k;
  return r.nodeType !== 3 && (r.before(r = ce()), H(r)), ge(r, r), r;
}
function Lr() {
  if (T)
    return ge(k, null), k;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ce();
  return e.append(t, r), ge(t, r), e;
}
function D(e, t) {
  if (T) {
    $.nodes_end = k, Ve();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let xt = !0;
function Te(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Or(e, t) {
  return Rr(e, t);
}
function Kn(e, t) {
  yt(), t.intro = t.intro ?? !1;
  const r = t.target, n = T, i = k;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Zt); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ de(s);
    if (!s)
      throw De;
    Q(!0), H(
      /** @type {Comment} */
      s
    ), Ve();
    const o = Rr(e, { ...t, anchor: s });
    if (k === null || k.nodeType !== 8 || /** @type {Comment} */
    k.data !== At)
      throw Dt(), De;
    return Q(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === De)
      return t.recover === !1 && gn(), yt(), cr(r), Q(!1), Or(e, t);
    throw o;
  } finally {
    Q(n), H(i);
  }
}
const ye = /* @__PURE__ */ new Map();
function Rr(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0 }) {
  yt();
  var l = /* @__PURE__ */ new Set(), v = (u) => {
    for (var d = 0; d < u.length; d++) {
      var c = u[d];
      if (!l.has(c)) {
        l.add(c);
        var h = rn(c);
        t.addEventListener(c, Oe, { passive: h });
        var p = ye.get(c);
        p === void 0 ? (document.addEventListener(c, Oe, { passive: h }), ye.set(c, 1)) : ye.set(c, p + 1);
      }
    }
  };
  v(Ot(Ar)), Et.add(v);
  var f = void 0, a = An(() => {
    var u = r ?? t.appendChild(ce());
    return Ie(() => {
      if (s) {
        Se({});
        var d = (
          /** @type {ComponentContext} */
          L
        );
        d.c = s;
      }
      i && (n.$$events = i), T && ge(
        /** @type {TemplateNode} */
        u,
        null
      ), xt = o, f = e(u, n) || {}, xt = !0, T && ($.nodes_end = k), s && Ae();
    }), () => {
      var h;
      for (var d of l) {
        t.removeEventListener(d, Oe);
        var c = (
          /** @type {number} */
          ye.get(d)
        );
        --c === 0 ? (document.removeEventListener(d, Oe), ye.delete(d)) : ye.set(d, c);
      }
      Et.delete(v), u !== r && ((h = u.parentNode) == null || h.removeChild(u));
    };
  });
  return kt.set(f, a), f;
}
let kt = /* @__PURE__ */ new WeakMap();
function Wn(e, t) {
  const r = kt.get(e);
  return r ? (kt.delete(e), r(t)) : Promise.resolve();
}
function _t(e, t, r = !1) {
  T && Ve();
  var n = e, i = null, s = null, o = A, l = r ? lt : 0, v = !1;
  const f = (u, d = !0) => {
    v = !0, a(d, u);
  }, a = (u, d) => {
    if (o === (o = u)) return;
    let c = !1;
    if (T) {
      const h = (
        /** @type {Comment} */
        n.data === St
      );
      !!o === h && (n = bt(), H(n), Q(!1), c = !0);
    }
    o ? (i ? st(i) : d && (i = Ie(() => d(n))), s && it(s, () => {
      s = null;
    })) : (s ? st(s) : d && (s = Ie(() => d(n))), i && it(i, () => {
      i = null;
    })), c && Q(!0);
  };
  qt(() => {
    v = !1, t(f), v || a(null, null);
  }, l), T && (n = k);
}
function Gn(e, t) {
  return t;
}
function Jn(e, t, r, n) {
  for (var i = [], s = t.length, o = 0; o < s; o++)
    It(t[o].e, i, !0);
  var l = s > 0 && i.length === 0 && r !== null;
  if (l) {
    var v = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    cr(v), v.append(
      /** @type {Element} */
      r
    ), n.clear(), se(e, t[0].prev, t[s - 1].next);
  }
  br(i, () => {
    for (var f = 0; f < s; f++) {
      var a = t[f];
      l || (n.delete(a.k), se(e, a.prev, a.next)), ee(a.e, !l);
    }
  });
}
function Xn(e, t, r, n, i, s = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var v = (
      /** @type {Element} */
      e
    );
    o = T ? H(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xe(v)
    ) : v.appendChild(ce());
  }
  T && Ve();
  var f = null, a = !1;
  qt(() => {
    var u = r(), d = Lt(u) ? u : u == null ? [] : Ot(u), c = d.length;
    if (a && c === 0)
      return;
    a = c === 0;
    let h = !1;
    if (T) {
      var p = (
        /** @type {Comment} */
        o.data === St
      );
      p !== (c === 0) && (o = bt(), H(o), Q(!1), h = !0);
    }
    if (T) {
      for (var g = null, m, _ = 0; _ < c; _++) {
        if (k.nodeType === 8 && /** @type {Comment} */
        k.data === At) {
          o = /** @type {Comment} */
          k, h = !0, Q(!1);
          break;
        }
        var b = d[_], N = n(b, _);
        m = Dr(
          k,
          l,
          g,
          null,
          b,
          N,
          _,
          i,
          t
        ), l.items.set(N, m), g = m;
      }
      c > 0 && H(bt());
    }
    if (!T) {
      var S = (
        /** @type {Effect} */
        w
      );
      Zn(
        d,
        l,
        o,
        i,
        t,
        (S.f & Y) !== 0,
        n
      );
    }
    s !== null && (c === 0 ? f ? st(f) : f = Ie(() => s(o)) : f !== null && it(f, () => {
      f = null;
    })), h && Q(!0);
  }), T && (o = k);
}
function Zn(e, t, r, n, i, s, o, l) {
  var v = e.length, f = t.items, a = t.first, u = a, d, c = null, h = [], p = [], g, m, _, b;
  for (b = 0; b < v; b += 1) {
    if (g = e[b], m = o(g, b), _ = f.get(m), _ === void 0) {
      var N = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : r;
      c = Dr(
        N,
        t,
        c,
        c === null ? t.first : c.next,
        g,
        m,
        b,
        n,
        i
      ), f.set(m, c), h = [], p = [], u = c.next;
      continue;
    }
    if (Qn(_, g, b), _.e.f & Y && st(_.e), _ !== u) {
      if (d !== void 0 && d.has(_)) {
        if (h.length < p.length) {
          var S = p[0], B;
          c = S.prev;
          var We = h[0], re = h[h.length - 1];
          for (B = 0; B < h.length; B += 1)
            Yt(h[B], S, r);
          for (B = 0; B < p.length; B += 1)
            d.delete(p[B]);
          se(t, We.prev, re.next), se(t, c, We), se(t, re, S), u = S, c = re, b -= 1, h = [], p = [];
        } else
          d.delete(_), Yt(_, u, r), se(t, _.prev, _.next), se(t, _, c === null ? t.first : c.next), se(t, c, _), c = _;
        continue;
      }
      for (h = [], p = []; u !== null && u.k !== m; )
        (s || !(u.e.f & Y)) && (d ?? (d = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      _ = u;
    }
    h.push(_), c = _, u = _.next;
  }
  if (u !== null || d !== void 0) {
    for (var pt = d === void 0 ? [] : Ot(d); u !== null; )
      (s || !(u.e.f & Y)) && pt.push(u), u = u.next;
    var Ur = pt.length;
    if (Ur > 0) {
      var Vr = v === 0 ? r : null;
      Jn(t, pt, Vr, f);
    }
  }
  $.first = t.first && t.first.e, $.last = c && c.e;
}
function Qn(e, t, r, n) {
  or(e.v, t), e.i = r;
}
function Dr(e, t, r, n, i, s, o, l, v, f) {
  var a = (v & Wr) !== 0, u = (v & Jr) === 0, d = a ? u ? /* @__PURE__ */ Rt(i) : q(i) : i, c = v & Gr ? q(o) : o, h = {
    i: c,
    v: d,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return h.e = Ie(() => l(e, d, c), T), h.e.prev = r && r.e, h.e.next = n && n.e, r === null ? t.first = h : (r.next = h, r.e.next = h.e), n !== null && (n.prev = h, n.e.prev = h.e), h;
  } finally {
  }
}
function Yt(e, t, r) {
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
      /* @__PURE__ */ de(s)
    );
    i.before(s), s = o;
  }
}
function se(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Tt(e, t, r, n, i) {
  var l;
  T && Ve();
  var s = (l = t.$$slots) == null ? void 0 : l[r], o = !1;
  s === !0 && (s = t[r === "default" ? "children" : r], o = !0), s === void 0 || s(e, o ? () => n : n);
}
function Ye(e, t) {
  ft(() => {
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
function ei(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  T && (i[t] = e.getAttribute(t)), i[t] !== (i[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && ti(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Kt = /* @__PURE__ */ new Map();
function ti(e) {
  var t = Kt.get(e.nodeName);
  if (t) return t;
  Kt.set(e.nodeName, t = []);
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = nn(n);
    for (var s in r)
      r[s].set && t.push(s);
    n = er(n);
  }
  return t;
}
function mt(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
const ri = () => performance.now(), Z = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => ri(),
  tasks: /* @__PURE__ */ new Set()
};
function Pr() {
  const e = Z.now();
  Z.tasks.forEach((t) => {
    t.c(e) || (Z.tasks.delete(t), t.f());
  }), Z.tasks.size !== 0 && Z.tick(Pr);
}
function ni(e) {
  let t;
  return Z.tasks.size === 0 && Z.tick(Pr), {
    promise: new Promise((r) => {
      Z.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      Z.tasks.delete(t);
    }
  };
}
function Je(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function ii(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Wt(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, s] = n.split(":");
    if (!i || s === void 0) break;
    const o = ii(i.trim());
    t[o] = s.trim();
  }
  return t;
}
const si = (e) => e;
function Gt(e, t, r, n) {
  var i = (e & Xr) !== 0, s = (e & Zr) !== 0, o = i && s, l = (e & Qr) !== 0, v = o ? "both" : i ? "in" : "out", f, a = t.inert, u, d;
  function c() {
    var _ = w, b = $;
    W(null), F(null);
    try {
      return f ?? (f = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: v
      }));
    } finally {
      W(_), F(b);
    }
  }
  var h = {
    is_global: l,
    in() {
      var _;
      if (t.inert = a, !i) {
        d == null || d.abort(), (_ = d == null ? void 0 : d.reset) == null || _.call(d);
        return;
      }
      s || u == null || u.abort(), Je(t, "introstart"), u = Ct(t, c(), d, 1, () => {
        Je(t, "introend"), u == null || u.abort(), u = f = void 0;
      });
    },
    out(_) {
      if (!s) {
        _ == null || _(), f = void 0;
        return;
      }
      t.inert = !0, Je(t, "outrostart"), d = Ct(t, c(), u, 0, () => {
        Je(t, "outroend"), _ == null || _();
      });
    },
    stop: () => {
      u == null || u.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect} */
    $
  );
  if ((p.transitions ?? (p.transitions = [])).push(h), i && xt) {
    var g = l;
    if (!g) {
      for (var m = (
        /** @type {Effect | null} */
        p.parent
      ); m && m.f & lt; )
        for (; (m = m.parent) && !(m.f & ut); )
          ;
      g = !m || (m.f & rr) !== 0;
    }
    g && at(() => {
      Ht(() => h.in());
    });
  }
}
function Ct(e, t, r, n, i) {
  var s = n === 1;
  if (un(t)) {
    var o, l = !1;
    return ft(() => {
      if (!l) {
        var g = t({ direction: s ? "in" : "out" });
        o = Ct(e, g, r, n, i);
      }
    }), {
      abort: () => {
        l = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return i(), {
      abort: Le,
      deactivate: Le,
      reset: Le,
      t: () => n
    };
  const { delay: v = 0, css: f, tick: a, easing: u = si } = t;
  var d = [];
  if (s && r === void 0 && (a && a(0, 1), f)) {
    var c = Wt(f(0, 1));
    d.push(c, c);
  }
  var h = () => 1 - n, p = e.animate(d, { duration: v });
  return p.onfinish = () => {
    var g = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var m = n - g, _ = (
      /** @type {number} */
      t.duration * Math.abs(m)
    ), b = [];
    if (_ > 0) {
      if (f)
        for (var N = Math.ceil(_ / 16.666666666666668), S = 0; S <= N; S += 1) {
          var B = g + m * u(S / N), We = f(B, 1 - B);
          b.push(Wt(We));
        }
      h = () => {
        var re = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return g + m * u(re / _);
      }, a && ni(() => {
        if (p.playState !== "running") return !1;
        var re = h();
        return a(re, 1 - re), !0;
      });
    }
    p = e.animate(b, { duration: _, fill: "forwards" }), p.onfinish = () => {
      h = () => n, a == null || a(n, 1 - n), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = Le);
    },
    deactivate: () => {
      i = Le;
    },
    reset: () => {
      n === 0 && (a == null || a(1, 0));
    },
    t: () => h()
  };
}
function Jt(e, t) {
  return e === t || (e == null ? void 0 : e[Xe]) === t;
}
function oi(e = {}, t, r, n) {
  return at(() => {
    var i, s;
    return _r(() => {
      i = s, s = [], Ht(() => {
        e !== r(...s) && (t(e, ...s), i && Jt(r(...i), e) && t(null, ...i));
      });
    }), () => {
      ft(() => {
        s && Jt(r(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
const ui = {
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
function li(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    ui
  );
}
function ai(e) {
  for (var t = $, r = $; t !== null && !(t.f & (z | Ce)); )
    t = t.parent;
  try {
    return F(t), e();
  } finally {
    F(r);
  }
}
function Re(e, t, r, n) {
  var _;
  var i = !sr, s = !1, o;
  o = /** @type {V} */
  e[t];
  var l = ((_ = pe(e, t)) == null ? void 0 : _.set) ?? void 0, v = (
    /** @type {V} */
    n
  ), f = !0, a = !1, u = () => (a = !0, f && (f = !1, v = /** @type {V} */
  n), v);
  o === void 0 && n !== void 0 && (l && i && mn(), o = u(), l && l(o));
  var d;
  if (d = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? u() : (f = !0, a = !1, b);
  }, l) {
    var c = e.$$legacy;
    return function(b, N) {
      return arguments.length > 0 ? ((!N || c || s) && l(N ? d() : b), b) : d();
    };
  }
  var h = !1, p = !1, g = /* @__PURE__ */ Rt(o), m = ai(
    () => /* @__PURE__ */ xn(() => {
      var b = d(), N = y(g);
      return h ? (h = !1, p = !0, N) : (p = !1, g.v = b);
    })
  );
  return function(b, N) {
    if (arguments.length > 0) {
      const S = N ? y(m) : b;
      return m.equals(S) || (h = !0, x(g, S), a && v !== void 0 && (v = S), Ht(() => y(m))), b;
    }
    return y(m);
  };
}
function fi(e) {
  return new ci(e);
}
var J, P;
class ci {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ne(this, J);
    /** @type {Record<string, any>} */
    ne(this, P);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (o, l) => {
      var v = /* @__PURE__ */ Rt(l);
      return r.set(o, v), v;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, l) {
          return y(r.get(l) ?? n(l, Reflect.get(o, l)));
        },
        has(o, l) {
          return l === fn ? !0 : (y(r.get(l) ?? n(l, Reflect.get(o, l))), Reflect.has(o, l));
        },
        set(o, l, v) {
          return x(r.get(l) ?? n(l, v), v), Reflect.set(o, l, v);
        }
      }
    );
    ie(this, P, (t.hydrate ? Kn : Or)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && _e(), ie(this, J, i.$$events);
    for (const o of Object.keys(E(this, P)))
      o === "$set" || o === "$destroy" || o === "$on" || rt(this, o, {
        get() {
          return E(this, P)[o];
        },
        /** @param {any} value */
        set(l) {
          E(this, P)[o] = l;
        },
        enumerable: !0
      });
    E(this, P).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, E(this, P).$destroy = () => {
      Wn(E(this, P));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    E(this, P).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    E(this, J)[t] = E(this, J)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return E(this, J)[t].push(n), () => {
      E(this, J)[t] = E(this, J)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    E(this, P).$destroy();
  }
}
J = new WeakMap(), P = new WeakMap();
let qr;
typeof HTMLElement == "function" && (qr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    j(this, "$$ctor");
    /** Slots */
    j(this, "$$s");
    /** @type {any} The Svelte component instance */
    j(this, "$$c");
    /** Whether or not the custom element is connected */
    j(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    j(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    j(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    j(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    j(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    j(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    j(this, "$$me");
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
          const l = document.createElement("slot");
          s !== "default" && (l.name = s), D(o, l);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = di(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = et(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = fi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Sn(() => {
        _r(() => {
          var s;
          this.$$r = !0;
          for (const o of tt(this.$$c)) {
            if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const l = et(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, l);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const l = this.$$c.$on(s, o);
          this.$$l_u.set(o, l);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = et(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return tt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function et(e, t, r, n) {
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
function di(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ke(e, t, r, n, i, s) {
  let o = class extends qr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return tt(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return tt(t).forEach((l) => {
    rt(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(v) {
        var u;
        v = et(l, v, t), this.$$d[l] = v;
        var f = this.$$c;
        if (f) {
          var a = (u = pe(f, l)) == null ? void 0 : u.get;
          a ? f[l] = v : f.$set({ [l]: v });
        }
      }
    });
  }), n.forEach((l) => {
    rt(o.prototype, l, {
      get() {
        var v;
        return (v = this.$$c) == null ? void 0 : v[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Xt = (e, t, r, n, i, s, o) => {
  (e.type === "click" || "key" in e && (e.key === "Enter" || e.key === " ")) && (e.preventDefault(), t() === "share" ? r(n(), i(), s()) : o(s()));
};
var vi = /* @__PURE__ */ te('<div role="presentation" tabindex="-1"><!></div>');
const hi = {
  hash: "svelte-qhwwm0",
  code: ":host {display:var(--button-display, block);width:fit-content;position:relative;}"
};
function Ir(e, t) {
  Se(t, !0), Ye(e, hi);
  let r = Re(t, "action"), n = Re(t, "entry"), i = Re(t, "title", 7, ""), s = Re(t, "text", 7, ""), o = I(!0);
  const l = (c, h = "success") => {
    const p = new CustomEvent("actionButtonEmit", {
      detail: { type: h, message: c },
      bubbles: !0,
      composed: !0
    });
    t.$$host.dispatchEvent(p);
  }, v = async (c) => {
    try {
      await navigator.clipboard.writeText(c), l("URL copiée");
    } catch (h) {
      console.error("Erreur lors de la copie : ", h), l("Échec de la copie", "error");
    }
  }, f = async (c, h, p) => {
    if (!navigator.share) {
      console.error("Web Share API non disponible"), l("Partage non disponible sur ce navigateur", "error");
      return;
    }
    const g = { title: c, text: h, url: p };
    try {
      await navigator.share(g);
    } catch (m) {
      console.error("Erreur lors du partage :", m), l("Échec du partage", "error");
    }
  };
  Pe(() => {
    t.$$host.style.setProperty("--button-display", y(o) ? "block" : "none");
  });
  var a = Lr(), u = fr(a);
  {
    var d = (c) => {
      var h = vi();
      h.__click = [
        Xt,
        r,
        f,
        i,
        s,
        n,
        v
      ], h.__keydown = [
        Xt,
        r,
        f,
        i,
        s,
        n,
        v
      ];
      var p = U(h);
      Tt(p, t, "button", {}), M(h), D(c, h);
    };
    _t(u, (c) => {
      y(o) && c(d);
    });
  }
  return D(e, a), Ae({
    get action() {
      return r();
    },
    set action(c) {
      r(c), _e();
    },
    get entry() {
      return n();
    },
    set entry(c) {
      n(c), _e();
    },
    get title() {
      return i();
    },
    set title(c = "") {
      i(c), _e();
    },
    get text() {
      return s();
    },
    set text(c = "") {
      s(c), _e();
    }
  });
}
ht(["click", "keydown"]);
customElements.define("action-button", Ke(Ir, { action: {}, entry: {}, title: {}, text: {} }, ["button"], [], !0));
class _i extends HTMLElement {
  constructor() {
    super(), new Ir({
      target: this
    });
  }
}
customElements.get("action-button") || customElements.define("action-button", _i);
const pi = (e, t, r) => {
  x(t, y(t) + 1), r();
};
var gi = /* @__PURE__ */ te("<div>Title : <h2> </h2> <button> </button></div>");
const mi = {
  hash: "svelte-zq967x",
  code: ":host {display:block;padding:1rem;background-color:var(--counter-background, aqua);color:var(--counter-text-color, black);}"
};
function Mr(e, t) {
  Se(t, !0), Ye(e, mi);
  let r = Re(t, "buttonHeader"), n = I(0);
  const i = () => {
    document.dispatchEvent(new CustomEvent("counter-update", {
      detail: { count: y(n) },
      bubbles: !0,
      composed: !0
    }));
  };
  Pe(() => {
    i();
  });
  var s = gi(), o = ke(U(s)), l = U(o, !0);
  M(o);
  var v = ke(o, 2);
  v.__click = [pi, n, i];
  var f = U(v);
  return M(v), M(s), qe(() => {
    Te(l, r()), Te(f, `count is ${y(n) ?? ""}`);
  }), D(e, s), Ae({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(a) {
      r(a), _e();
    }
  });
}
ht(["click"]);
customElements.define("counter-component", Ke(Mr, { buttonHeader: {} }, [], [], !0));
class $i extends HTMLElement {
  constructor() {
    super(), new Mr({
      target: this
    });
  }
}
customElements.get("counter-component") || customElements.define("counter-component", $i);
var bi = /* @__PURE__ */ te("<p> </p>"), yi = /* @__PURE__ */ te("<p>Pas de counter sur cette page</p>"), wi = /* @__PURE__ */ te('<div class="svelte-jz8ejc"><!> <!> <!></div>');
const Ei = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function Hr(e, t) {
  Se(t, !0), Ye(e, Ei);
  let r = I(0), n = I(!1);
  Pe(() => {
    const a = () => {
      const c = document.querySelector("counter-component");
      x(n, !!c);
    };
    a();
    const u = (c) => {
      x(r, X(c.detail.count));
    }, d = new MutationObserver(a);
    return d.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", u), () => {
      d.disconnect(), document.removeEventListener("counter-update", u);
    };
  });
  var i = wi(), s = U(i);
  Tt(s, t, "description", {});
  var o = ke(s, 2);
  {
    var l = (a) => {
      var u = bi(), d = U(u);
      M(u), qe(() => Te(d, `Valeur du compteur : ${y(r) ?? ""}`)), D(a, u);
    }, v = (a) => {
      var u = yi();
      D(a, u);
    };
    _t(o, (a) => {
      y(n) ? a(l) : a(v, !1);
    });
  }
  var f = ke(o, 2);
  Tt(f, t, "footer", {}), M(i), D(e, i), Ae();
}
customElements.define("counterdisplay-component", Ke(Hr, {}, ["description", "footer"], [], !0));
class xi extends HTMLElement {
  constructor() {
    super(), new Hr({
      target: this
    });
  }
}
customElements.get("counterdisplay-component") || customElements.define("counterdisplay-component", xi);
const ki = (e) => e;
function Ti(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Ci(e, { delay: t = 0, duration: r = 400, easing: n = ki } = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function Ni(e, { delay: t = 0, duration: r = 400, easing: n = Ti, start: i = 0, opacity: s = 0 } = {}) {
  const o = getComputedStyle(e), l = +o.opacity, v = o.transform === "none" ? "" : o.transform, f = 1 - i, a = l * (1 - s);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (u, d) => `
			transform: ${v} scale(${1 - f * d});
			opacity: ${l - a * d}
		`
  };
}
const Si = (e, t) => {
  const r = (n) => {
    e && !e.contains(n.target) && t();
  };
  return document.addEventListener("click", r), () => {
    document.removeEventListener("click", r);
  };
};
var Ai = /* @__PURE__ */ te('<div class="notifier svelte-12vgkqd" aria-live="polite"> <button class="svelte-12vgkqd">x</button></div>');
const Li = {
  hash: "svelte-12vgkqd",
  code: ".notifier.svelte-12vgkqd {position:fixed;top:var(--pc-header-spacing, 5rem);left:50%;transform:translateX(-50%);background-color:var(--pc-bg-color, #fff);padding:2px;border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);text-wrap:nowrap;font-size:var(--pc-notifier-fsize, 1.2rem);z-index:10000;}.embeded.svelte-12vgkqd {position:absolute;top:unset;bottom:calc(100% + 6px);}.notifier.svelte-12vgkqd:has(button.closeable:where(.svelte-12vgkqd)) {padding:1.5em;}button.svelte-12vgkqd {display:none;}button.closeable.svelte-12vgkqd {display:block;position:absolute;top:0;right:0;padding:4px;background-color:transparent;border:none;cursor:pointer;}.notifier.error.svelte-12vgkqd {color:#f44336;}"
};
function Fr(e, t) {
  Se(t, !0), Ye(e, Li);
  let r = I(""), n = I("success"), i = I(500), s = I(""), o = I(""), l = I(void 0);
  const v = () => {
    document.body.prepend(t.$$host), x(r, ""), x(n, "success"), x(i, 500), x(s, ""), x(o, "");
  };
  Pe(() => {
    if (y(r) && y(s) && y(l))
      return Si(y(l), v);
  }), Pe(() => {
    const d = (c) => {
      v(), c.target !== document && x(o, "embeded"), c.target instanceof HTMLElement && (c.target.shadowRoot ? c.target.shadowRoot.appendChild(t.$$host) : c.target.appendChild(t.$$host)), x(r, X(c.detail.message)), x(n, X(c.detail.type ?? y(n))), x(i, X(c.detail.duration ?? y(i))), y(i) > 0 ? setTimeout(
        () => {
          v();
        },
        y(i)
      ) : x(s, "closeable");
    };
    return document.addEventListener("pc-toast-emit", d), () => {
      document.removeEventListener("pc-toast-emit", d);
    };
  });
  var f = Lr(), a = fr(f);
  {
    var u = (d) => {
      var c = Ai(), h = U(c), p = ke(h);
      p.__click = v, M(c), oi(c, (g) => x(l, g), () => y(l)), qe(() => {
        mt(c, "embeded", y(o)), mt(c, "error", y(n) === "error"), Te(h, `${y(r) ?? ""} `), mt(p, "closeable", y(s));
      }), Gt(1, c, () => Ni), Gt(2, c, () => Ci, () => ({ duration: 500 })), D(d, c);
    };
    _t(a, (d) => {
      y(r) && d(u);
    });
  }
  D(e, f), Ae();
}
ht(["click"]);
customElements.define("notifier-component", Ke(Fr, {}, [], [], !0));
class Oi extends HTMLElement {
  constructor() {
    super(), new Fr({
      target: this,
      props: {}
    });
  }
}
customElements.get("notifier-component") || customElements.define("notifier-component", Oi);
var Ri = /* @__PURE__ */ te('<span class="placeholder svelte-vfux">Entrez votre code</span>'), Di = (e, t, r) => t(y(r)), Pi = /* @__PURE__ */ te('<button class="digit-button svelte-vfux" type="button"> </button>'), qi = /* @__PURE__ */ te('<form class="secure-pin-pad svelte-vfux" role="application" aria-label="Pavé numérique sécurisé"><div class="keypad-container svelte-vfux" role="group" tabindex="0"><div class="display svelte-vfux" role="status" aria-live="polite"><!></div> <div class="keypad svelte-vfux" role="group" aria-label="Pavé numérique"></div></div></form>');
const Ii = {
  hash: "svelte-vfux",
  code: ".secure-pin-pad.svelte-vfux {display:flex;flex-direction:column;gap:20px;padding:20px;border:1px solid #ccc;border-radius:8px;background-color:#f9f9f9;width:300px;margin:0 auto;}.keypad-container.svelte-vfux {display:flex;flex-direction:column;gap:20px;}.display.svelte-vfux {background:white;padding:10px;border:1px solid #ddd;border-radius:4px;text-align:center;min-height:30px;}.placeholder.svelte-vfux {font-size:18px;color:#ccc;}.keypad.svelte-vfux {display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;}.digit-button.svelte-vfux {padding:15px;font-size:20px;border:1px solid #ddd;border-radius:4px;background:white;cursor:pointer;transition:background-color 0.2s;}.digit-button.svelte-vfux:hover {background-color:#f0f0f0;}.digit-button.svelte-vfux:active {background-color:#e0e0e0;}"
};
function Br(e, t) {
  Se(t, !0), Ye(e, Ii);
  const r = /* @__PURE__ */ li(t, ["$$slots", "$$events", "$$legacy", "$$host"]), { layout: n, onDigitPress: i } = r;
  let s = I(""), o = I("");
  function l(g) {
    x(s, ""), i(g), x(o, y(o) + g.toString());
  }
  function v(g) {
    g.preventDefault();
  }
  var f = qi(), a = U(f);
  a.__mousedown = v;
  var u = U(a), d = U(u);
  {
    var c = (g) => {
      var m = Yn();
      qe(() => Te(m, "•".repeat(y(o).length))), D(g, m);
    }, h = (g) => {
      var m = Ri();
      D(g, m);
    };
    _t(d, (g) => {
      y(o) ? g(c) : g(h, !1);
    });
  }
  M(u);
  var p = ke(u, 2);
  Xn(p, 21, () => n, Gn, (g, m) => {
    var _ = Pi();
    _.__click = [Di, l, m];
    var b = U(_, !0);
    M(_), qe(() => {
      ei(_, "aria-label", `Chiffre ${y(m) ?? ""}`), Te(b, y(m));
    }), D(g, _);
  }), M(p), M(a), M(f), zt("submit", f, (g) => g.preventDefault()), zt("selectstart", a, v), D(e, f), Ae();
}
ht(["mousedown", "click"]);
customElements.define("securepin-component", Ke(Br, {}, [], [], !0));
var oe, ue, le, Be, me, Nt, jr;
class Mi extends HTMLElement {
  constructor() {
    super();
    ne(this, me);
    // Variables privées
    ne(this, oe, "");
    /** @type {number[]} */
    ne(this, ue, []);
    ne(this, le);
    ne(this, Be, 4);
    const r = this.attachShadow({ mode: "closed" });
    ie(this, ue, Ge(this, me, Nt).call(this)), ie(this, le, new Br({
      target: r,
      props: {
        layout: E(this, ue),
        onDigitPress: Ge(this, me, jr).bind(this)
      }
    }));
  }
  /**
   * Réinitialise le composant
   */
  reset() {
    ie(this, oe, ""), ie(this, ue, Ge(this, me, Nt).call(this)), E(this, le) && E(this, le).$set({ layout: E(this, ue) });
  }
  /**
   * Nettoie les ressources lors de la suppression du composant
   */
  disconnectedCallback() {
    E(this, le) && E(this, le).$destroy();
  }
}
oe = new WeakMap(), ue = new WeakMap(), le = new WeakMap(), Be = new WeakMap(), me = new WeakSet(), /**
 * Génère une disposition aléatoire des chiffres pour le clavier
 * @returns {number[]} Un tableau de chiffres dans un ordre aléatoire
 */
Nt = function() {
  return Array.from({ length: 10 }, (n, i) => i).sort(() => Math.random() - 0.5);
}, /**
 * Gère l'appui sur un chiffre du clavier
 * @param {number} digit - Le chiffre pressé
 */
jr = function(r) {
  if (E(this, oe).length < E(this, Be) && (ie(this, oe, E(this, oe) + r.toString()), E(this, oe).length === E(this, Be))) {
    const n = new CustomEvent("pinComplete", {
      detail: {
        pin: E(this, oe),
        layout: [...E(this, ue)]
      },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
};
customElements.get("securepin-component") || customElements.define("securepin-component", Mi);
