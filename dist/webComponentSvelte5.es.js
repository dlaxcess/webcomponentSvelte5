var Ur = Object.defineProperty;
var Ht = (e) => {
  throw TypeError(e);
};
var Vr = (e, t, r) => t in e ? Ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var B = (e, t, r) => Vr(e, typeof t != "symbol" ? t + "" : t, r), ht = (e, t, r) => t.has(e) || Ht("Cannot " + r);
var E = (e, t, r) => (ht(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ne = (e, t, r) => t.has(e) ? Ht("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ie = (e, t, r, n) => (ht(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), We = (e, t, r) => (ht(e, t, "access private method"), r);
const zr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(zr);
const Yr = 1, Kr = 2, Wr = 16, Gr = 1, Jr = 2, Xr = 4, Zr = 2, Jt = "[", Ct = "[!", Nt = "]", De = {}, A = Symbol(), Qr = ["touchstart", "touchmove"];
function en(e) {
  return Qr.includes(e);
}
const Xt = !1;
var St = Array.isArray, At = Array.from, Qe = Object.keys, et = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, tn = Object.getOwnPropertyDescriptors, rn = Object.prototype, nn = Array.prototype, Zt = Object.getPrototypeOf;
function sn(e) {
  return typeof e == "function";
}
const Oe = () => {
};
function on(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const V = 2, Qt = 4, Be = 8, st = 16, z = 32, Ce = 64, mt = 128, $e = 256, tt = 512, R = 1024, fe = 2048, je = 4096, Y = 8192, Ne = 16384, er = 32768, ot = 65536, un = 1 << 19, tr = 1 << 20, _t = Symbol("$state"), ln = Symbol("legacy props");
function rr(e) {
  return e === this.v;
}
function an(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function fn(e) {
  return !an(e, this.v);
}
function cn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function dn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function vn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _n() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function pn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function mn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function bn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let nr = !1;
function q(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: rr,
    version: 0
  };
  return r;
}
function j(e) {
  return /* @__PURE__ */ yn(q(e));
}
// @__NO_SIDE_EFFECTS__
function Ot(e, t = !1) {
  const r = q(e);
  return t || (r.equals = fn), r;
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return w !== null && w.f & V && (K === null ? Ln([e]) : K.push(e)), e;
}
function k(e, t) {
  return w !== null && Pn() && w.f & (V | st) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (K === null || !K.includes(e)) && bn(), ir(e, t);
}
function ir(e, t) {
  return e.equals(t) || (e.v = t, e.version = wr(), sr(e, fe), $ !== null && $.f & R && !($.f & z) && (C !== null && C.includes(e) ? (G($, fe), ft($)) : ae === null ? Dn([e]) : ae.push(e))), t;
}
function sr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var s = r[i], o = s.f;
      o & fe || (G(s, t), o & (R | $e) && (o & V ? sr(
        /** @type {Derived} */
        s,
        je
      ) : ft(
        /** @type {Effect} */
        s
      )));
    }
}
function Rt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function Q(e) {
  T = e;
}
let x;
function M(e) {
  if (e === null)
    throw Rt(), De;
  return x = e;
}
function Ue() {
  return M(
    /** @type {TemplateNode} */
    /* @__PURE__ */ de(x)
  );
}
function I(e) {
  if (T) {
    if (/* @__PURE__ */ de(x) !== null)
      throw Rt(), De;
    x = e;
  }
}
function gt() {
  for (var e = 0, t = x; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Nt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Jt || r === Ct) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ de(t)
    );
    t.remove(), t = n;
  }
}
function X(e, t = null, r) {
  if (typeof e != "object" || e === null || _t in e)
    return e;
  const n = Zt(e);
  if (n !== rn && n !== nn)
    return e;
  var i = /* @__PURE__ */ new Map(), s = St(e), o = q(0);
  s && i.set("length", q(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && mn();
        var u = i.get(c);
        return u === void 0 ? (u = q(f.value), i.set(c, u)) : k(u, X(f.value, l)), !0;
      },
      deleteProperty(d, c) {
        var f = i.get(c);
        if (f === void 0)
          c in d && i.set(c, q(A));
        else {
          if (s && typeof c == "string") {
            var u = (
              /** @type {Source<number>} */
              i.get("length")
            ), a = Number(c);
            Number.isInteger(a) && a < u.v && k(u, a);
          }
          k(f, A), Ft(o);
        }
        return !0;
      },
      get(d, c, f) {
        var h;
        if (c === _t)
          return e;
        var u = i.get(c), a = c in d;
        if (u === void 0 && (!a || (h = pe(d, c)) != null && h.writable) && (u = q(X(a ? d[c] : A, l)), i.set(c, u)), u !== void 0) {
          var v = y(u);
          return v === A ? void 0 : v;
        }
        return Reflect.get(d, c, f);
      },
      getOwnPropertyDescriptor(d, c) {
        var f = Reflect.getOwnPropertyDescriptor(d, c);
        if (f && "value" in f) {
          var u = i.get(c);
          u && (f.value = y(u));
        } else if (f === void 0) {
          var a = i.get(c), v = a == null ? void 0 : a.v;
          if (a !== void 0 && v !== A)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(d, c) {
        var v;
        if (c === _t)
          return !0;
        var f = i.get(c), u = f !== void 0 && f.v !== A || Reflect.has(d, c);
        if (f !== void 0 || $ !== null && (!u || (v = pe(d, c)) != null && v.writable)) {
          f === void 0 && (f = q(u ? X(d[c], l) : A), i.set(c, f));
          var a = y(f);
          if (a === A)
            return !1;
        }
        return u;
      },
      set(d, c, f, u) {
        var b;
        var a = i.get(c), v = c in d;
        if (s && c === "length")
          for (var h = f; h < /** @type {Source<number>} */
          a.v; h += 1) {
            var p = i.get(h + "");
            p !== void 0 ? k(p, A) : h in d && (p = q(A), i.set(h + "", p));
          }
        a === void 0 ? (!v || (b = pe(d, c)) != null && b.writable) && (a = q(void 0), k(a, X(f, l)), i.set(c, a)) : (v = a.v !== A, k(a, X(f, l)));
        var m = Reflect.getOwnPropertyDescriptor(d, c);
        if (m != null && m.set && m.set.call(u, f), !v) {
          if (s && typeof c == "string") {
            var g = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(c);
            Number.isInteger(_) && _ >= g.v && k(g, _ + 1);
          }
          Ft(o);
        }
        return !0;
      },
      ownKeys(d) {
        y(o);
        var c = Reflect.ownKeys(d).filter((a) => {
          var v = i.get(a);
          return v === void 0 || v.v !== A;
        });
        for (var [f, u] of i)
          u.v !== A && !(f in d) && c.push(f);
        return c;
      },
      setPrototypeOf() {
        gn();
      }
    }
  );
}
function Ft(e, t = 1) {
  k(e, e.v + t);
}
var Bt, or, ur;
function $t() {
  if (Bt === void 0) {
    Bt = window;
    var e = Element.prototype, t = Node.prototype;
    or = pe(t, "firstChild").get, ur = pe(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ce(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return or.call(e);
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return ur.call(e);
}
function U(e, t) {
  if (!T)
    return /* @__PURE__ */ xe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(x)
  );
  if (r === null)
    r = x.appendChild(ce());
  else if (t && r.nodeType !== 3) {
    var n = ce();
    return r == null || r.before(n), M(n), n;
  }
  return M(r), r;
}
function lr(e, t) {
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
  return x;
}
function ke(e, t = 1, r = !1) {
  let n = T ? x : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ de(n);
  if (!T)
    return n;
  var s = n == null ? void 0 : n.nodeType;
  if (r && s !== 3) {
    var o = ce();
    return n === null ? i == null || i.after(o) : n.before(o), M(o), o;
  }
  return M(n), /** @type {TemplateNode} */
  n;
}
function ar(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  var t = V | fe;
  $ === null ? t |= $e : $.f |= tr;
  var r = w !== null && w.f & V ? (
    /** @type {Derived} */
    w
  ) : null;
  const n = {
    children: null,
    ctx: O,
    deps: null,
    equals: rr,
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
function fr(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var n = t[r];
      n.f & V ? Lt(
        /** @type {Derived} */
        n
      ) : ee(
        /** @type {Effect} */
        n
      );
    }
  }
}
function En(e) {
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
function cr(e) {
  var t, r = $;
  H(En(e));
  try {
    fr(e), t = Er(e);
  } finally {
    H(r);
  }
  return t;
}
function dr(e) {
  var t = cr(e), r = (he || e.f & $e) && e.deps !== null ? je : R;
  G(e, r), e.equals(t) || (e.v = t, e.version = wr());
}
function Lt(e) {
  fr(e), He(e, 0), G(e, Ne), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function xn(e) {
  $ === null && w === null && vn(), w !== null && w.f & $e && dn(), Mt && cn();
}
function kn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function be(e, t, r, n = !0) {
  var i = (e & Ce) !== 0, s = $, o = {
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
    var l = we;
    try {
      jt(!0), at(o), o.f |= er;
    } catch (f) {
      throw ee(o), f;
    } finally {
      jt(l);
    }
  } else t !== null && ft(o);
  var d = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & tr) === 0;
  if (!d && !i && n && (s !== null && kn(o, s), w !== null && w.f & V)) {
    var c = (
      /** @type {Derived} */
      w
    );
    (c.children ?? (c.children = [])).push(o);
  }
  return o;
}
function Tn(e) {
  const t = be(Be, null, !1);
  return G(t, R), t.teardown = e, t;
}
function ut(e) {
  xn();
  var t = $ !== null && ($.f & z) !== 0 && O !== null && !O.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      O
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: $,
      reaction: w
    });
  } else {
    var n = Dt(e);
    return n;
  }
}
function Cn(e) {
  const t = be(Ce, e, !0);
  return () => {
    ee(t);
  };
}
function Nn(e) {
  const t = be(Ce, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? rt(t, () => {
      ee(t), n(void 0);
    }) : (ee(t), n(void 0));
  });
}
function Dt(e) {
  return be(Qt, e, !1);
}
function Sn(e) {
  return be(Be, e, !0);
}
function Pe(e) {
  return Pt(e);
}
function Pt(e, t = 0) {
  return be(Be | st | t, e, !0);
}
function qe(e, t = !0) {
  return be(Be | z, e, !0, t);
}
function vr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mt, n = w;
    Ut(!0), W(null);
    try {
      t.call(null);
    } finally {
      Ut(r), W(n);
    }
  }
}
function hr(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Lt(t[r]);
  }
}
function _r(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    ee(r, t), r = n;
  }
}
function An(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & z || ee(t), t = r;
  }
}
function ee(e, t = !0) {
  var r = !1;
  if ((t || e.f & un) && e.nodes_start !== null) {
    for (var n = e.nodes_start, i = e.nodes_end; n !== null; ) {
      var s = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ de(n)
      );
      n.remove(), n = s;
    }
    r = !0;
  }
  _r(e, t && !r), hr(e), He(e, 0), G(e, Ne);
  var o = e.transitions;
  if (o !== null)
    for (const d of o)
      d.stop();
  vr(e);
  var l = e.parent;
  l !== null && l.first !== null && pr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function pr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function rt(e, t) {
  var r = [];
  qt(e, r, !0), mr(r, () => {
    ee(e), t && t();
  });
}
function mr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function qt(e, t, r) {
  if (!(e.f & Y)) {
    if (e.f ^= Y, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, s = (n.f & ot) !== 0 || (n.f & z) !== 0;
      qt(n, t, s ? r : !1), n = i;
    }
  }
}
function nt(e) {
  gr(e, !0);
}
function gr(e, t) {
  if (e.f & Y) {
    Ve(e) && at(e), e.f ^= Y;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & ot) !== 0 || (r.f & z) !== 0;
      gr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let it = !1, bt = [];
function $r() {
  it = !1;
  const e = bt.slice();
  bt = [], on(e);
}
function It(e) {
  it || (it = !0, queueMicrotask($r)), bt.push(e);
}
function On() {
  it && $r();
}
const br = 0, Rn = 1;
let Je = !1, Xe = br, Ie = !1, Me = null, we = !1, Mt = !1;
function jt(e) {
  we = e;
}
function Ut(e) {
  Mt = e;
}
let ve = [], Ee = 0;
let w = null;
function W(e) {
  w = e;
}
let $ = null;
function H(e) {
  $ = e;
}
let K = null;
function Ln(e) {
  K = e;
}
let C = null, L = 0, ae = null;
function Dn(e) {
  ae = e;
}
let yr = 1, he = !1, O = null;
function wr() {
  return ++yr;
}
function Pn() {
  return !nr;
}
function Ve(e) {
  var o, l;
  var t = e.f;
  if (t & fe)
    return !0;
  if (t & je) {
    var r = e.deps, n = (t & $e) !== 0;
    if (r !== null) {
      var i;
      if (t & tt) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= tt;
      }
      for (i = 0; i < r.length; i++) {
        var s = r[i];
        if (Ve(
          /** @type {Derived} */
          s
        ) && dr(
          /** @type {Derived} */
          s
        ), n && $ !== null && !he && !((l = s == null ? void 0 : s.reactions) != null && l.includes(e)) && (s.reactions ?? (s.reactions = [])).push(e), s.version > e.version)
          return !0;
      }
    }
    (!n || $ !== null && !he) && G(e, R);
  }
  return !1;
}
function qn(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & mt)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= mt;
      }
    r = r.parent;
  }
  throw Je = !1, e;
}
function In(e) {
  return (e.f & Ne) === 0 && (e.parent === null || (e.parent.f & mt) === 0);
}
function lt(e, t, r, n) {
  if (Je) {
    if (r === null && (Je = !1), In(t))
      throw e;
    return;
  }
  r !== null && (Je = !0);
  {
    qn(e, t);
    return;
  }
}
function Er(e) {
  var a;
  var t = C, r = L, n = ae, i = w, s = he, o = K, l = O, d = e.f;
  C = /** @type {null | Value[]} */
  null, L = 0, ae = null, w = d & (z | Ce) ? null : e, he = !we && (d & $e) !== 0, K = null, O = e.ctx;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (C !== null) {
      var u;
      if (He(e, L), f !== null && L > 0)
        for (f.length = L + C.length, u = 0; u < C.length; u++)
          f[L + u] = C[u];
      else
        e.deps = f = C;
      if (!he)
        for (u = L; u < f.length; u++)
          ((a = f[u]).reactions ?? (a.reactions = [])).push(e);
    } else f !== null && L < f.length && (He(e, L), f.length = L);
    return c;
  } finally {
    C = t, L = r, ae = n, w = i, he = s, K = o, O = l;
  }
}
function Mn(e, t) {
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
  (C === null || !C.includes(t)) && (G(t, je), t.f & ($e | tt) || (t.f ^= tt), He(
    /** @type {Derived} **/
    t,
    0
  ));
}
function He(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Mn(e, r[n]);
}
function at(e) {
  var t = e.f;
  if (!(t & Ne)) {
    G(e, R);
    var r = $, n = O;
    $ = e;
    try {
      t & st ? An(e) : _r(e), hr(e), vr(e);
      var i = Er(e);
      e.teardown = typeof i == "function" ? i : null, e.version = yr;
    } catch (s) {
      lt(s, e, r, n || e.ctx);
    } finally {
      $ = r;
    }
  }
}
function xr() {
  if (Ee > 1e3) {
    Ee = 0;
    try {
      hn();
    } catch (e) {
      if (Me !== null)
        lt(e, Me, null);
      else
        throw e;
    }
  }
  Ee++;
}
function kr(e) {
  var t = e.length;
  if (t !== 0) {
    xr();
    var r = we;
    we = !0;
    try {
      for (var n = 0; n < t; n++) {
        var i = e[n];
        i.f & R || (i.f ^= R);
        var s = [];
        Tr(i, s), Hn(s);
      }
    } finally {
      we = r;
    }
  }
}
function Hn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if (!(n.f & (Ne | Y)))
        try {
          Ve(n) && (at(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? pr(n) : n.fn = null));
        } catch (i) {
          lt(i, n, null, n.ctx);
        }
    }
}
function Fn() {
  if (Ie = !1, Ee > 1001)
    return;
  const e = ve;
  ve = [], kr(e), Ie || (Ee = 0, Me = null);
}
function ft(e) {
  Xe === br && (Ie || (Ie = !0, queueMicrotask(Fn))), Me = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ce | z)) {
      if (!(r & R)) return;
      t.f ^= R;
    }
  }
  ve.push(t);
}
function Tr(e, t) {
  var r = e.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, s = (i & z) !== 0, o = s && (i & R) !== 0, l = r.next;
    if (!o && !(i & Y))
      if (i & Be) {
        if (s)
          r.f ^= R;
        else
          try {
            Ve(r) && at(r);
          } catch (u) {
            lt(u, r, null, r.ctx);
          }
        var d = r.first;
        if (d !== null) {
          r = d;
          continue;
        }
      } else i & Qt && n.push(r);
    if (l === null) {
      let u = r.parent;
      for (; u !== null; ) {
        if (e === u)
          break e;
        var c = u.next;
        if (c !== null) {
          r = c;
          continue e;
        }
        u = u.parent;
      }
    }
    r = l;
  }
  for (var f = 0; f < n.length; f++)
    d = n[f], t.push(d), Tr(d, t);
}
function _e(e) {
  var t = Xe, r = ve;
  try {
    xr();
    const i = [];
    Xe = Rn, ve = i, Ie = !1, kr(r);
    var n = e == null ? void 0 : e();
    return On(), (ve.length > 0 || i.length > 0) && _e(), Ee = 0, Me = null, n;
  } finally {
    Xe = t, ve = r;
  }
}
function y(e) {
  var f;
  var t = e.f, r = (t & V) !== 0;
  if (r && t & Ne) {
    var n = cr(
      /** @type {Derived} */
      e
    );
    return Lt(
      /** @type {Derived} */
      e
    ), n;
  }
  if (w !== null) {
    K !== null && K.includes(e) && $n();
    var i = w.deps;
    C === null && i !== null && i[L] === e ? L++ : C === null ? C = [e] : C.push(e), ae !== null && $ !== null && $.f & R && !($.f & z) && ae.includes(e) && (G($, fe), ft($));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var s = (
      /** @type {Derived} */
      e
    ), o = s.parent, l = s; o !== null; )
      if (o.f & V) {
        var d = (
          /** @type {Derived} */
          o
        );
        l = d, o = d.parent;
      } else {
        var c = (
          /** @type {Effect} */
          o
        );
        (f = c.deriveds) != null && f.includes(l) || (c.deriveds ?? (c.deriveds = [])).push(l);
        break;
      }
  return r && (s = /** @type {Derived} */
  e, Ve(s) && dr(s)), e.v;
}
function Cr(e) {
  const t = w;
  try {
    return w = null, e();
  } finally {
    w = t;
  }
}
const Bn = ~(fe | je | R);
function G(e, t) {
  e.f = e.f & Bn | t;
}
function Se(e, t = !1, r) {
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
function Ae(e) {
  const t = O;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = $, n = w;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var s = o[i];
          H(s.effect), W(s.reaction), Dt(s.fn);
        }
      } finally {
        H(r), W(n);
      }
    }
    O = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function jn(e) {
  var t = w, r = $;
  W(null), H(null);
  try {
    return e();
  } finally {
    W(t), H(r);
  }
}
const Nr = /* @__PURE__ */ new Set(), yt = /* @__PURE__ */ new Set();
function Un(e, t, r, n) {
  function i(s) {
    if (n.capture || Re.call(t, s), !s.cancelBubble)
      return jn(() => r.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? It(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Vt(e, t, r, n, i) {
  var s = { capture: n, passive: i }, o = Un(e, t, r, s);
  (t === document.body || t === window || t === document) && Tn(() => {
    t.removeEventListener(e, o, s);
  });
}
function ct(e) {
  for (var t = 0; t < e.length; t++)
    Nr.add(e[t]);
  for (var r of yt)
    r(e);
}
function Re(e) {
  var _;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, l = e.__root;
  if (l) {
    var d = i.indexOf(l);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    d <= c && (o = d);
  }
  if (s = /** @type {Element} */
  i[o] || e.target, s !== t) {
    et(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var f = w, u = $;
    W(null), H(null);
    try {
      for (var a, v = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var p = s["__" + n];
          if (p !== void 0 && !/** @type {any} */
          s.disabled)
            if (St(p)) {
              var [m, ...g] = p;
              m.apply(s, [e, ...g]);
            } else
              p.call(s, e);
        } catch (b) {
          a ? v.push(b) : a = b;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (a) {
        for (let b of v)
          queueMicrotask(() => {
            throw b;
          });
        throw a;
      }
    } finally {
      e.__root = t, delete e.currentTarget, W(f), H(u);
    }
  }
}
function Vn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function me(e, t) {
  var r = (
    /** @type {Effect} */
    $
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var r = (t & Zr) !== 0, n, i = !e.startsWith("<!>");
  return () => {
    if (T)
      return me(x, null), x;
    n === void 0 && (n = Vn(i ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ xe(n));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return me(s, s), s;
  };
}
function zn(e = "") {
  if (!T) {
    var t = ce(e + "");
    return me(t, t), t;
  }
  var r = x;
  return r.nodeType !== 3 && (r.before(r = ce()), M(r)), me(r, r), r;
}
function Sr() {
  if (T)
    return me(x, null), x;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ce();
  return e.append(t, r), me(t, r), e;
}
function D(e, t) {
  if (T) {
    $.nodes_end = x, Ue();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let wt = !0;
function Te(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r == null ? "" : r + "");
}
function Ar(e, t) {
  return Or(e, t);
}
function Yn(e, t) {
  $t(), t.intro = t.intro ?? !1;
  const r = t.target, n = T, i = x;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(r)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Jt); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ de(s);
    if (!s)
      throw De;
    Q(!0), M(
      /** @type {Comment} */
      s
    ), Ue();
    const o = Or(e, { ...t, anchor: s });
    if (x === null || x.nodeType !== 8 || /** @type {Comment} */
    x.data !== Nt)
      throw Rt(), De;
    return Q(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === De)
      return t.recover === !1 && _n(), $t(), ar(r), Q(!1), Ar(e, t);
    throw o;
  } finally {
    Q(n), M(i);
  }
}
const ye = /* @__PURE__ */ new Map();
function Or(e, { target: t, anchor: r, props: n = {}, events: i, context: s, intro: o = !0 }) {
  $t();
  var l = /* @__PURE__ */ new Set(), d = (u) => {
    for (var a = 0; a < u.length; a++) {
      var v = u[a];
      if (!l.has(v)) {
        l.add(v);
        var h = en(v);
        t.addEventListener(v, Re, { passive: h });
        var p = ye.get(v);
        p === void 0 ? (document.addEventListener(v, Re, { passive: h }), ye.set(v, 1)) : ye.set(v, p + 1);
      }
    }
  };
  d(At(Nr)), yt.add(d);
  var c = void 0, f = Nn(() => {
    var u = r ?? t.appendChild(ce());
    return qe(() => {
      if (s) {
        Se({});
        var a = (
          /** @type {ComponentContext} */
          O
        );
        a.c = s;
      }
      i && (n.$$events = i), T && me(
        /** @type {TemplateNode} */
        u,
        null
      ), wt = o, c = e(u, n) || {}, wt = !0, T && ($.nodes_end = x), s && Ae();
    }), () => {
      var h;
      for (var a of l) {
        t.removeEventListener(a, Re);
        var v = (
          /** @type {number} */
          ye.get(a)
        );
        --v === 0 ? (document.removeEventListener(a, Re), ye.delete(a)) : ye.set(a, v);
      }
      yt.delete(d), u !== r && ((h = u.parentNode) == null || h.removeChild(u));
    };
  });
  return Et.set(c, f), c;
}
let Et = /* @__PURE__ */ new WeakMap();
function Kn(e, t) {
  const r = Et.get(e);
  return r ? (Et.delete(e), r(t)) : Promise.resolve();
}
function dt(e, t, r = !1) {
  T && Ue();
  var n = e, i = null, s = null, o = A, l = r ? ot : 0, d = !1;
  const c = (u, a = !0) => {
    d = !0, f(a, u);
  }, f = (u, a) => {
    if (o === (o = u)) return;
    let v = !1;
    if (T) {
      const h = (
        /** @type {Comment} */
        n.data === Ct
      );
      !!o === h && (n = gt(), M(n), Q(!1), v = !0);
    }
    o ? (i ? nt(i) : a && (i = qe(() => a(n))), s && rt(s, () => {
      s = null;
    })) : (s ? nt(s) : a && (s = qe(() => a(n))), i && rt(i, () => {
      i = null;
    })), v && Q(!0);
  };
  Pt(() => {
    d = !1, t(c), d || f(null, null);
  }, l), T && (n = x);
}
function Wn(e, t) {
  return t;
}
function Gn(e, t, r, n) {
  for (var i = [], s = t.length, o = 0; o < s; o++)
    qt(t[o].e, i, !0);
  var l = s > 0 && i.length === 0 && r !== null;
  if (l) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    ar(d), d.append(
      /** @type {Element} */
      r
    ), n.clear(), se(e, t[0].prev, t[s - 1].next);
  }
  mr(i, () => {
    for (var c = 0; c < s; c++) {
      var f = t[c];
      l || (n.delete(f.k), se(e, f.prev, f.next)), ee(f.e, !l);
    }
  });
}
function Jn(e, t, r, n, i, s = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var d = (
      /** @type {Element} */
      e
    );
    o = T ? M(
      /** @type {Comment | Text} */
      /* @__PURE__ */ xe(d)
    ) : d.appendChild(ce());
  }
  T && Ue();
  var c = null, f = !1;
  Pt(() => {
    var u = r(), a = St(u) ? u : u == null ? [] : At(u), v = a.length;
    if (f && v === 0)
      return;
    f = v === 0;
    let h = !1;
    if (T) {
      var p = (
        /** @type {Comment} */
        o.data === Ct
      );
      p !== (v === 0) && (o = gt(), M(o), Q(!1), h = !0);
    }
    if (T) {
      for (var m = null, g, _ = 0; _ < v; _++) {
        if (x.nodeType === 8 && /** @type {Comment} */
        x.data === Nt) {
          o = /** @type {Comment} */
          x, h = !0, Q(!1);
          break;
        }
        var b = a[_], N = n(b, _);
        g = Rr(
          x,
          l,
          m,
          null,
          b,
          N,
          _,
          i,
          t
        ), l.items.set(N, g), m = g;
      }
      v > 0 && M(gt());
    }
    if (!T) {
      var S = (
        /** @type {Effect} */
        w
      );
      Xn(
        a,
        l,
        o,
        i,
        t,
        (S.f & Y) !== 0,
        n
      );
    }
    s !== null && (v === 0 ? c ? nt(c) : c = qe(() => s(o)) : c !== null && rt(c, () => {
      c = null;
    })), h && Q(!0);
  }), T && (o = x);
}
function Xn(e, t, r, n, i, s, o, l) {
  var d = e.length, c = t.items, f = t.first, u = f, a, v = null, h = [], p = [], m, g, _, b;
  for (b = 0; b < d; b += 1) {
    if (m = e[b], g = o(m, b), _ = c.get(g), _ === void 0) {
      var N = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : r;
      v = Rr(
        N,
        t,
        v,
        v === null ? t.first : v.next,
        m,
        g,
        b,
        n,
        i
      ), c.set(g, v), h = [], p = [], u = v.next;
      continue;
    }
    if (Zn(_, m, b), _.e.f & Y && nt(_.e), _ !== u) {
      if (a !== void 0 && a.has(_)) {
        if (h.length < p.length) {
          var S = p[0], F;
          v = S.prev;
          var Ke = h[0], re = h[h.length - 1];
          for (F = 0; F < h.length; F += 1)
            zt(h[F], S, r);
          for (F = 0; F < p.length; F += 1)
            a.delete(p[F]);
          se(t, Ke.prev, re.next), se(t, v, Ke), se(t, re, S), u = S, v = re, b -= 1, h = [], p = [];
        } else
          a.delete(_), zt(_, u, r), se(t, _.prev, _.next), se(t, _, v === null ? t.first : v.next), se(t, v, _), v = _;
        continue;
      }
      for (h = [], p = []; u !== null && u.k !== g; )
        (s || !(u.e.f & Y)) && (a ?? (a = /* @__PURE__ */ new Set())).add(u), p.push(u), u = u.next;
      if (u === null)
        continue;
      _ = u;
    }
    h.push(_), v = _, u = _.next;
  }
  if (u !== null || a !== void 0) {
    for (var vt = a === void 0 ? [] : At(a); u !== null; )
      (s || !(u.e.f & Y)) && vt.push(u), u = u.next;
    var Br = vt.length;
    if (Br > 0) {
      var jr = d === 0 ? r : null;
      Gn(t, vt, jr, c);
    }
  }
  $.first = t.first && t.first.e, $.last = v && v.e;
}
function Zn(e, t, r, n) {
  ir(e.v, t), e.i = r;
}
function Rr(e, t, r, n, i, s, o, l, d, c) {
  var f = (d & Yr) !== 0, u = (d & Wr) === 0, a = f ? u ? /* @__PURE__ */ Ot(i) : q(i) : i, v = d & Kr ? q(o) : o, h = {
    i: v,
    v: a,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return h.e = qe(() => l(e, a, v), T), h.e.prev = r && r.e, h.e.next = n && n.e, r === null ? t.first = h : (r.next = h, r.e.next = h.e), n !== null && (n.prev = h, n.e.prev = h.e), h;
  } finally {
  }
}
function zt(e, t, r) {
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
function xt(e, t, r, n, i) {
  var l;
  T && Ue();
  var s = (l = t.$$slots) == null ? void 0 : l[r], o = !1;
  s === !0 && (s = t[r === "default" ? "children" : r], o = !0), s === void 0 || s(e, o ? () => n : n);
}
function ze(e, t) {
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
function Qn(e, t, r, n) {
  var i = e.__attributes ?? (e.__attributes = {});
  T && (i[t] = e.getAttribute(t)), i[t] !== (i[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && ei(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Yt = /* @__PURE__ */ new Map();
function ei(e) {
  var t = Yt.get(e.nodeName);
  if (t) return t;
  Yt.set(e.nodeName, t = []);
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = tn(n);
    for (var s in r)
      r[s].set && t.push(s);
    n = Zt(n);
  }
  return t;
}
function pt(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
const ti = () => performance.now(), Z = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => ti(),
  tasks: /* @__PURE__ */ new Set()
};
function Lr() {
  const e = Z.now();
  Z.tasks.forEach((t) => {
    t.c(e) || (Z.tasks.delete(t), t.f());
  }), Z.tasks.size !== 0 && Z.tick(Lr);
}
function ri(e) {
  let t;
  return Z.tasks.size === 0 && Z.tick(Lr), {
    promise: new Promise((r) => {
      Z.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      Z.tasks.delete(t);
    }
  };
}
function Ge(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function ni(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Kt(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, s] = n.split(":");
    if (!i || s === void 0) break;
    const o = ni(i.trim());
    t[o] = s.trim();
  }
  return t;
}
const ii = (e) => e;
function Wt(e, t, r, n) {
  var i = (e & Gr) !== 0, s = (e & Jr) !== 0, o = i && s, l = (e & Xr) !== 0, d = o ? "both" : i ? "in" : "out", c, f = t.inert, u, a;
  function v() {
    var _ = w, b = $;
    W(null), H(null);
    try {
      return c ?? (c = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: d
      }));
    } finally {
      W(_), H(b);
    }
  }
  var h = {
    is_global: l,
    in() {
      var _;
      if (t.inert = f, !i) {
        a == null || a.abort(), (_ = a == null ? void 0 : a.reset) == null || _.call(a);
        return;
      }
      s || u == null || u.abort(), Ge(t, "introstart"), u = kt(t, v(), a, 1, () => {
        Ge(t, "introend"), u == null || u.abort(), u = c = void 0;
      });
    },
    out(_) {
      if (!s) {
        _ == null || _(), c = void 0;
        return;
      }
      t.inert = !0, Ge(t, "outrostart"), a = kt(t, v(), u, 0, () => {
        Ge(t, "outroend"), _ == null || _();
      });
    },
    stop: () => {
      u == null || u.abort(), a == null || a.abort();
    }
  }, p = (
    /** @type {Effect} */
    $
  );
  if ((p.transitions ?? (p.transitions = [])).push(h), i && wt) {
    var m = l;
    if (!m) {
      for (var g = (
        /** @type {Effect | null} */
        p.parent
      ); g && g.f & ot; )
        for (; (g = g.parent) && !(g.f & st); )
          ;
      m = !g || (g.f & er) !== 0;
    }
    m && Dt(() => {
      Cr(() => h.in());
    });
  }
}
function kt(e, t, r, n, i) {
  var s = n === 1;
  if (sn(t)) {
    var o, l = !1;
    return It(() => {
      if (!l) {
        var m = t({ direction: s ? "in" : "out" });
        o = kt(e, m, r, n, i);
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
      abort: Oe,
      deactivate: Oe,
      reset: Oe,
      t: () => n
    };
  const { delay: d = 0, css: c, tick: f, easing: u = ii } = t;
  var a = [];
  if (s && r === void 0 && (f && f(0, 1), c)) {
    var v = Kt(c(0, 1));
    a.push(v, v);
  }
  var h = () => 1 - n, p = e.animate(a, { duration: d });
  return p.onfinish = () => {
    var m = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var g = n - m, _ = (
      /** @type {number} */
      t.duration * Math.abs(g)
    ), b = [];
    if (_ > 0) {
      if (c)
        for (var N = Math.ceil(_ / 16.666666666666668), S = 0; S <= N; S += 1) {
          var F = m + g * u(S / N), Ke = c(F, 1 - F);
          b.push(Kt(Ke));
        }
      h = () => {
        var re = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + g * u(re / _);
      }, f && ri(() => {
        if (p.playState !== "running") return !1;
        var re = h();
        return f(re, 1 - re), !0;
      });
    }
    p = e.animate(b, { duration: _, fill: "forwards" }), p.onfinish = () => {
      h = () => n, f == null || f(n, 1 - n), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = Oe);
    },
    deactivate: () => {
      i = Oe;
    },
    reset: () => {
      n === 0 && (f == null || f(1, 0));
    },
    t: () => h()
  };
}
const si = {
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
function oi(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    si
  );
}
function ui(e) {
  for (var t = $, r = $; t !== null && !(t.f & (z | Ce)); )
    t = t.parent;
  try {
    return H(t), e();
  } finally {
    H(r);
  }
}
function Le(e, t, r, n) {
  var _;
  var i = !nr, s = !1, o;
  o = /** @type {V} */
  e[t];
  var l = ((_ = pe(e, t)) == null ? void 0 : _.set) ?? void 0, d = (
    /** @type {V} */
    n
  ), c = !0, f = !1, u = () => (f = !0, c && (c = !1, d = /** @type {V} */
  n), d);
  o === void 0 && n !== void 0 && (l && i && pn(), o = u(), l && l(o));
  var a;
  if (a = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? u() : (c = !0, f = !1, b);
  }, l) {
    var v = e.$$legacy;
    return function(b, N) {
      return arguments.length > 0 ? ((!N || v || s) && l(N ? a() : b), b) : a();
    };
  }
  var h = !1, p = !1, m = /* @__PURE__ */ Ot(o), g = ui(
    () => /* @__PURE__ */ wn(() => {
      var b = a(), N = y(m);
      return h ? (h = !1, p = !0, N) : (p = !1, m.v = b);
    })
  );
  return function(b, N) {
    if (arguments.length > 0) {
      const S = N ? y(g) : b;
      return g.equals(S) || (h = !0, k(m, S), f && d !== void 0 && (d = S), Cr(() => y(g))), b;
    }
    return y(g);
  };
}
function li(e) {
  return new ai(e);
}
var J, P;
class ai {
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
      var d = /* @__PURE__ */ Ot(l);
      return r.set(o, d), d;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, l) {
          return y(r.get(l) ?? n(l, Reflect.get(o, l)));
        },
        has(o, l) {
          return l === ln ? !0 : (y(r.get(l) ?? n(l, Reflect.get(o, l))), Reflect.has(o, l));
        },
        set(o, l, d) {
          return k(r.get(l) ?? n(l, d), d), Reflect.set(o, l, d);
        }
      }
    );
    ie(this, P, (t.hydrate ? Yn : Ar)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && _e(), ie(this, J, i.$$events);
    for (const o of Object.keys(E(this, P)))
      o === "$set" || o === "$destroy" || o === "$on" || et(this, o, {
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
      Kn(E(this, P));
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
let Dr;
typeof HTMLElement == "function" && (Dr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    B(this, "$$ctor");
    /** Slots */
    B(this, "$$s");
    /** @type {any} The Svelte component instance */
    B(this, "$$c");
    /** Whether or not the custom element is connected */
    B(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    B(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    B(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    B(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    B(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    B(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    B(this, "$$me");
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
      const n = {}, i = fi(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = r(s), n.default = !0) : n[s] = r(s));
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = Ze(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = li({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Cn(() => {
        Sn(() => {
          var s;
          this.$$r = !0;
          for (const o of Qe(this.$$c)) {
            if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const l = Ze(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ze(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Qe(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Ze(e, t, r, n) {
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
function fi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ye(e, t, r, n, i, s) {
  let o = class extends Dr {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Qe(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Qe(t).forEach((l) => {
    et(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(d) {
        var u;
        d = Ze(l, d, t), this.$$d[l] = d;
        var c = this.$$c;
        if (c) {
          var f = (u = pe(c, l)) == null ? void 0 : u.get;
          f ? c[l] = d : c.$set({ [l]: d });
        }
      }
    });
  }), n.forEach((l) => {
    et(o.prototype, l, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Gt = (e, t, r, n, i, s, o) => {
  (e.type === "click" || "key" in e && (e.key === "Enter" || e.key === " ")) && (e.preventDefault(), t() === "share" ? r(n(), i(), s()) : o(s()));
};
var ci = /* @__PURE__ */ te('<div role="presentation" tabindex="-1"><!></div>');
const di = {
  hash: "svelte-qhwwm0",
  code: ":host {display:var(--button-display, block);width:fit-content;position:relative;}"
};
function Pr(e, t) {
  Se(t, !0), ze(e, di);
  let r = Le(t, "action"), n = Le(t, "entry"), i = Le(t, "title", 7, ""), s = Le(t, "text", 7, ""), o = j(!0);
  const l = (v, h = "success") => {
    const p = new CustomEvent("actionButtonEmit", {
      detail: { type: h, message: v },
      bubbles: !0,
      composed: !0
    });
    t.$$host.dispatchEvent(p);
  }, d = async (v) => {
    try {
      await navigator.clipboard.writeText(v), l("URL copiée");
    } catch (h) {
      console.error("Erreur lors de la copie : ", h), l("Échec de la copie", "error");
    }
  }, c = async (v, h, p) => {
    if (!navigator.share) {
      console.error("Web Share API non disponible"), l("Partage non disponible sur ce navigateur", "error");
      return;
    }
    const m = { title: v, text: h, url: p };
    try {
      await navigator.share(m);
    } catch (g) {
      console.error("Erreur lors du partage :", g), l("Échec du partage", "error");
    }
  };
  ut(() => {
    t.$$host.style.setProperty("--button-display", y(o) ? "block" : "none");
  });
  var f = Sr(), u = lr(f);
  {
    var a = (v) => {
      var h = ci();
      h.__click = [
        Gt,
        r,
        c,
        i,
        s,
        n,
        d
      ], h.__keydown = [
        Gt,
        r,
        c,
        i,
        s,
        n,
        d
      ];
      var p = U(h);
      xt(p, t, "button", {}), I(h), D(v, h);
    };
    dt(u, (v) => {
      y(o) && v(a);
    });
  }
  return D(e, f), Ae({
    get action() {
      return r();
    },
    set action(v) {
      r(v), _e();
    },
    get entry() {
      return n();
    },
    set entry(v) {
      n(v), _e();
    },
    get title() {
      return i();
    },
    set title(v = "") {
      i(v), _e();
    },
    get text() {
      return s();
    },
    set text(v = "") {
      s(v), _e();
    }
  });
}
ct(["click", "keydown"]);
customElements.define("action-button", Ye(Pr, { action: {}, entry: {}, title: {}, text: {} }, ["button"], [], !0));
class vi extends HTMLElement {
  constructor() {
    super(), new Pr({
      target: this
    });
  }
}
customElements.get("action-button") || customElements.define("action-button", vi);
const hi = (e, t, r) => {
  k(t, y(t) + 1), r();
};
var _i = /* @__PURE__ */ te("<div>Title : <h2> </h2> <button> </button></div>");
const pi = {
  hash: "svelte-zq967x",
  code: ":host {display:block;padding:1rem;background-color:var(--counter-background, aqua);color:var(--counter-text-color, black);}"
};
function qr(e, t) {
  Se(t, !0), ze(e, pi);
  let r = Le(t, "buttonHeader"), n = j(0);
  const i = () => {
    document.dispatchEvent(new CustomEvent("counter-update", {
      detail: { count: y(n) },
      bubbles: !0,
      composed: !0
    }));
  };
  ut(() => {
    i();
  });
  var s = _i(), o = ke(U(s)), l = U(o, !0);
  I(o);
  var d = ke(o, 2);
  d.__click = [hi, n, i];
  var c = U(d);
  return I(d), I(s), Pe(() => {
    Te(l, r()), Te(c, `count is ${y(n) ?? ""}`);
  }), D(e, s), Ae({
    get buttonHeader() {
      return r();
    },
    set buttonHeader(f) {
      r(f), _e();
    }
  });
}
ct(["click"]);
customElements.define("counter-component", Ye(qr, { buttonHeader: {} }, [], [], !0));
class mi extends HTMLElement {
  constructor() {
    super(), new qr({
      target: this
    });
  }
}
customElements.get("counter-component") || customElements.define("counter-component", mi);
var gi = /* @__PURE__ */ te("<p> </p>"), $i = /* @__PURE__ */ te("<p>Pas de counter sur cette page</p>"), bi = /* @__PURE__ */ te('<div class="svelte-jz8ejc"><!> <!> <!></div>');
const yi = {
  hash: "svelte-jz8ejc",
  code: "div.svelte-jz8ejc {padding:1rem;border:1px solid #ccc;border-radius:4px;margin:1rem 0;}"
};
function Ir(e, t) {
  Se(t, !0), ze(e, yi);
  let r = j(0), n = j(!1);
  ut(() => {
    const f = () => {
      const v = document.querySelector("counter-component");
      k(n, !!v);
    };
    f();
    const u = (v) => {
      k(r, X(v.detail.count));
    }, a = new MutationObserver(f);
    return a.observe(document.body, { childList: !0, subtree: !0 }), document.addEventListener("counter-update", u), () => {
      a.disconnect(), document.removeEventListener("counter-update", u);
    };
  });
  var i = bi(), s = U(i);
  xt(s, t, "description", {});
  var o = ke(s, 2);
  {
    var l = (f) => {
      var u = gi(), a = U(u);
      I(u), Pe(() => Te(a, `Valeur du compteur : ${y(r) ?? ""}`)), D(f, u);
    }, d = (f) => {
      var u = $i();
      D(f, u);
    };
    dt(o, (f) => {
      y(n) ? f(l) : f(d, !1);
    });
  }
  var c = ke(o, 2);
  xt(c, t, "footer", {}), I(i), D(e, i), Ae();
}
customElements.define("counterdisplay-component", Ye(Ir, {}, ["description", "footer"], [], !0));
class wi extends HTMLElement {
  constructor() {
    super(), new Ir({
      target: this
    });
  }
}
customElements.get("counterdisplay-component") || customElements.define("counterdisplay-component", wi);
const Ei = (e) => e;
function xi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function ki(e, { delay: t = 0, duration: r = 400, easing: n = Ei } = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function Ti(e, { delay: t = 0, duration: r = 400, easing: n = xi, start: i = 0, opacity: s = 0 } = {}) {
  const o = getComputedStyle(e), l = +o.opacity, d = o.transform === "none" ? "" : o.transform, c = 1 - i, f = l * (1 - s);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (u, a) => `
			transform: ${d} scale(${1 - c * a});
			opacity: ${l - f * a}
		`
  };
}
var Ci = /* @__PURE__ */ te('<div class="notifier svelte-12vgkqd" aria-live="polite"> <button class="svelte-12vgkqd">x</button></div>');
const Ni = {
  hash: "svelte-12vgkqd",
  code: ".notifier.svelte-12vgkqd {position:fixed;top:var(--pc-header-spacing, 5rem);left:50%;transform:translateX(-50%);background-color:var(--pc-bg-color, #fff);padding:2px;border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);text-wrap:nowrap;font-size:var(--pc-notifier-fsize, 1.2rem);z-index:10000;}.embeded.svelte-12vgkqd {position:absolute;top:unset;bottom:calc(100% + 6px);}.notifier.svelte-12vgkqd:has(button.closeable:where(.svelte-12vgkqd)) {padding:1.5em;}button.svelte-12vgkqd {display:none;}button.closeable.svelte-12vgkqd {display:block;position:absolute;top:0;right:0;padding:4px;background-color:transparent;border:none;cursor:pointer;}.notifier.error.svelte-12vgkqd {color:#f44336;}"
};
function Mr(e, t) {
  Se(t, !0), ze(e, Ni);
  let r = j(""), n = j("success"), i = j(500), s = j(""), o = j("");
  const l = () => {
    document.body.prepend(t.$$host), k(r, ""), k(n, "success"), k(i, 500), k(s, ""), k(o, "");
  };
  ut(() => {
    const u = (a) => {
      l(), a.target !== document && k(o, "embeded"), a.target instanceof HTMLElement && (a.target.shadowRoot ? a.target.shadowRoot.appendChild(t.$$host) : a.target.appendChild(t.$$host)), k(r, X(a.detail.message)), k(n, X(a.detail.type ?? y(n))), k(i, X(a.detail.duration ?? y(i))), y(i) > 0 ? setTimeout(
        () => {
          l();
        },
        y(i)
      ) : k(s, "closeable");
    };
    return document.addEventListener("pc-toast-emit", u), () => {
      document.removeEventListener("pc-toast-emit", u);
    };
  });
  var d = Sr(), c = lr(d);
  {
    var f = (u) => {
      var a = Ci(), v = U(a), h = ke(v);
      h.__click = l, I(a), Pe(() => {
        pt(a, "embeded", y(o)), pt(a, "error", y(n) === "error"), Te(v, `${y(r) ?? ""} `), pt(h, "closeable", y(s));
      }), Wt(1, a, () => Ti), Wt(2, a, () => ki, () => ({ duration: 500 })), D(u, a);
    };
    dt(c, (u) => {
      y(r) && u(f);
    });
  }
  D(e, d), Ae();
}
ct(["click"]);
customElements.define("notifier-component", Ye(Mr, {}, [], [], !0));
class Si extends HTMLElement {
  constructor() {
    super(), new Mr({
      target: this,
      props: {}
    });
  }
}
customElements.get("notifier-component") || customElements.define("notifier-component", Si);
var Ai = /* @__PURE__ */ te('<span class="placeholder svelte-vfux">Entrez votre code</span>'), Oi = (e, t, r) => t(y(r)), Ri = /* @__PURE__ */ te('<button class="digit-button svelte-vfux" type="button"> </button>'), Li = /* @__PURE__ */ te('<form class="secure-pin-pad svelte-vfux" role="application" aria-label="Pavé numérique sécurisé"><div class="keypad-container svelte-vfux" role="group" tabindex="0"><div class="display svelte-vfux" role="status" aria-live="polite"><!></div> <div class="keypad svelte-vfux" role="group" aria-label="Pavé numérique"></div></div></form>');
const Di = {
  hash: "svelte-vfux",
  code: ".secure-pin-pad.svelte-vfux {display:flex;flex-direction:column;gap:20px;padding:20px;border:1px solid #ccc;border-radius:8px;background-color:#f9f9f9;width:300px;margin:0 auto;}.keypad-container.svelte-vfux {display:flex;flex-direction:column;gap:20px;}.display.svelte-vfux {background:white;padding:10px;border:1px solid #ddd;border-radius:4px;text-align:center;min-height:30px;}.placeholder.svelte-vfux {font-size:18px;color:#ccc;}.keypad.svelte-vfux {display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;}.digit-button.svelte-vfux {padding:15px;font-size:20px;border:1px solid #ddd;border-radius:4px;background:white;cursor:pointer;transition:background-color 0.2s;}.digit-button.svelte-vfux:hover {background-color:#f0f0f0;}.digit-button.svelte-vfux:active {background-color:#e0e0e0;}"
};
function Hr(e, t) {
  Se(t, !0), ze(e, Di);
  const r = /* @__PURE__ */ oi(t, ["$$slots", "$$events", "$$legacy", "$$host"]), { layout: n, onDigitPress: i } = r;
  let s = j(""), o = j("");
  function l(m) {
    k(s, ""), i(m), k(o, y(o) + m.toString());
  }
  function d(m) {
    m.preventDefault();
  }
  var c = Li(), f = U(c);
  f.__mousedown = d;
  var u = U(f), a = U(u);
  {
    var v = (m) => {
      var g = zn();
      Pe(() => Te(g, "•".repeat(y(o).length))), D(m, g);
    }, h = (m) => {
      var g = Ai();
      D(m, g);
    };
    dt(a, (m) => {
      y(o) ? m(v) : m(h, !1);
    });
  }
  I(u);
  var p = ke(u, 2);
  Jn(p, 21, () => n, Wn, (m, g) => {
    var _ = Ri();
    _.__click = [Oi, l, g];
    var b = U(_, !0);
    I(_), Pe(() => {
      Qn(_, "aria-label", `Chiffre ${y(g) ?? ""}`), Te(b, y(g));
    }), D(m, _);
  }), I(p), I(f), I(c), Vt("submit", c, (m) => m.preventDefault()), Vt("selectstart", f, d), D(e, c), Ae();
}
ct(["mousedown", "click"]);
customElements.define("securepin-component", Ye(Hr, {}, [], [], !0));
var oe, ue, le, Fe, ge, Tt, Fr;
class Pi extends HTMLElement {
  constructor() {
    super();
    ne(this, ge);
    // Variables privées
    ne(this, oe, "");
    /** @type {number[]} */
    ne(this, ue, []);
    ne(this, le);
    ne(this, Fe, 4);
    const r = this.attachShadow({ mode: "closed" });
    ie(this, ue, We(this, ge, Tt).call(this)), ie(this, le, new Hr({
      target: r,
      props: {
        layout: E(this, ue),
        onDigitPress: We(this, ge, Fr).bind(this)
      }
    }));
  }
  /**
   * Réinitialise le composant
   */
  reset() {
    ie(this, oe, ""), ie(this, ue, We(this, ge, Tt).call(this)), E(this, le) && E(this, le).$set({ layout: E(this, ue) });
  }
  /**
   * Nettoie les ressources lors de la suppression du composant
   */
  disconnectedCallback() {
    E(this, le) && E(this, le).$destroy();
  }
}
oe = new WeakMap(), ue = new WeakMap(), le = new WeakMap(), Fe = new WeakMap(), ge = new WeakSet(), /**
 * Génère une disposition aléatoire des chiffres pour le clavier
 * @returns {number[]} Un tableau de chiffres dans un ordre aléatoire
 */
Tt = function() {
  return Array.from({ length: 10 }, (n, i) => i).sort(() => Math.random() - 0.5);
}, /**
 * Gère l'appui sur un chiffre du clavier
 * @param {number} digit - Le chiffre pressé
 */
Fr = function(r) {
  if (E(this, oe).length < E(this, Fe) && (ie(this, oe, E(this, oe) + r.toString()), E(this, oe).length === E(this, Fe))) {
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
customElements.get("securepin-component") || customElements.define("securepin-component", Pi);
