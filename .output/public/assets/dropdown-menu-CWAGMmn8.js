import { a as e, n as t, t as n } from "./jsx-runtime-n5LQ9ujS.js";
import { t as r } from "./react-dom-CQmWuZA8.js";
import { r as i, t as a } from "./utils-DbbrEv-p.js";
import { i as o, r as s } from "./button-CoQ0AAlw.js";
import {
  _ as c,
  b as l,
  d as u,
  f as d,
  g as f,
  h as p,
  l as m,
  m as h,
  p as g,
  u as _,
  v,
  x as y,
  y as b,
} from "./dist-TeW72Ovj.js";
import { n as x, t as S } from "./dist-C1qB0g71.js";
var C = i(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  w = i(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  T = i(`circle`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }]]),
  E = e(t(), 1),
  D = n();
function O(e) {
  let t = e + `CollectionProvider`,
    [n, r] = l(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (e) => {
      let { scope: t, children: n } = e,
        r = E.useRef(null),
        a = E.useRef(new Map()).current;
      return (0, D.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    };
  c.displayName = t;
  let u = e + `CollectionSlot`,
    d = s(u),
    f = E.forwardRef((e, t) => {
      let { scope: n, children: r } = e;
      return (0, D.jsx)(d, { ref: o(t, a(u, n).collectionRef), children: r });
    });
  f.displayName = u;
  let p = e + `CollectionItemSlot`,
    m = `data-radix-collection-item`,
    h = s(p),
    g = E.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        s = E.useRef(null),
        c = o(t, s),
        l = a(p, n);
      return (
        E.useEffect(
          () => (
            l.itemMap.set(s, { ref: s, ...i }),
            () => void l.itemMap.delete(s)
          ),
        ),
        (0, D.jsx)(h, { [m]: ``, ref: c, children: r })
      );
    });
  g.displayName = p;
  function _(t) {
    let n = a(e + `CollectionConsumer`, t);
    return E.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${m}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return [{ Provider: c, Slot: f, ItemSlot: g }, _, r];
}
var k = E.createContext(void 0);
function A(e) {
  let t = E.useContext(k);
  return e || t || `ltr`;
}
var j = [`top`, `right`, `bottom`, `left`],
  M = Math.min,
  N = Math.max,
  P = Math.round,
  F = Math.floor,
  I = (e) => ({ x: e, y: e }),
  ee = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function L(e, t, n) {
  return N(e, M(t, n));
}
function R(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function z(e) {
  return e.split(`-`)[0];
}
function B(e) {
  return e.split(`-`)[1];
}
function V(e) {
  return e === `x` ? `y` : `x`;
}
function te(e) {
  return e === `y` ? `height` : `width`;
}
function H(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function ne(e) {
  return V(H(e));
}
function re(e, t, n) {
  n === void 0 && (n = !1);
  let r = B(e),
    i = ne(e),
    a = te(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = fe(o)), [o, fe(o)]);
}
function ie(e) {
  let t = fe(e);
  return [ae(e), t, ae(t)];
}
function ae(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var oe = [`left`, `right`],
  se = [`right`, `left`],
  ce = [`top`, `bottom`],
  le = [`bottom`, `top`];
function ue(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? se : oe) : t ? oe : se;
    case `left`:
    case `right`:
      return t ? ce : le;
    default:
      return [];
  }
}
function de(e, t, n, r) {
  let i = B(e),
    a = ue(z(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(ae)))),
    a
  );
}
function fe(e) {
  let t = z(e);
  return ee[t] + e.slice(t.length);
}
function pe(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function me(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : pe(e);
}
function he(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function ge(e, t, n) {
  let { reference: r, floating: i } = e,
    a = H(t),
    o = ne(t),
    s = te(o),
    c = z(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (B(t)) {
    case `start`:
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case `end`:
      p[o] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function _e(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = R(t, e),
    p = me(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = he(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = he(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var ve = 50,
  ye = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: _e },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = ge(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < ve &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = ge(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  be = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = R(e, t) || {};
      if (l == null) return {};
      let d = me(u),
        f = { x: n, y: r },
        p = ne(i),
        m = te(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = M(d[_], T),
        D = M(d[v], T),
        O = E,
        k = C - h[m] - D,
        A = C / 2 - h[m] / 2 + w,
        j = L(O, A, k),
        N =
          !c.arrow &&
          B(i) != null &&
          A !== j &&
          a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0,
        P = N ? (A < O ? A - O : A - k) : 0;
      return {
        [p]: f[p] + P,
        data: {
          [p]: j,
          centerOffset: A - j - P,
          ...(N && { alignmentOffset: P }),
        },
        reset: N,
      };
    },
  }),
  xe = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = R(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = z(r),
            _ = H(o),
            v = z(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [fe(o)] : ie(o)),
            x = p !== `none`;
          !d && x && b.push(...de(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = re(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== H(t)) ||
                T.every((e) =>
                  H(e.placement) === _ ? e.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = H(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  };
function Se(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Ce(e) {
  return j.some((t) => e[t] >= 0);
}
var we = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = R(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = Se(
                await r.detectOverflow(t, {
                  ...a,
                  elementContext: `reference`,
                }),
                n.reference,
              );
              return {
                data: { referenceHiddenOffsets: e, referenceHidden: Ce(e) },
              };
            }
            case `escaped`: {
              let e = Se(
                await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                n.floating,
              );
              return { data: { escapedOffsets: e, escaped: Ce(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Te = new Set([`left`, `top`]);
async function Ee(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = z(n),
    s = B(n),
    c = H(n) === `y`,
    l = Te.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = R(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var De = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await Ee(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  Oe = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = R(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = H(z(i)),
            p = V(f),
            m = u[p],
            h = u[f];
          if (o) {
            let e = p === `y` ? `top` : `left`,
              t = p === `y` ? `bottom` : `right`,
              n = m + d[e],
              r = m - d[t];
            m = L(n, m, r);
          }
          if (s) {
            let e = f === `y` ? `top` : `left`,
              t = f === `y` ? `bottom` : `right`,
              n = h + d[e],
              r = h - d[t];
            h = L(n, h, r);
          }
          let g = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  ke = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = R(e, t),
            u = { x: n, y: r },
            d = H(i),
            f = V(d),
            p = u[f],
            m = u[d],
            h = R(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = Te.has(z(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  Ae = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          var n, r;
          let { placement: i, rects: a, platform: o, elements: s } = t,
            { apply: c = () => {}, ...l } = R(e, t),
            u = await o.detectOverflow(t, l),
            d = z(i),
            f = B(i),
            p = H(i) === `y`,
            { width: m, height: h } = a.floating,
            g,
            _;
          d === `top` || d === `bottom`
            ? ((g = d),
              (_ =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((_ = d), (g = f === `end` ? `top` : `bottom`));
          let v = h - u.top - u.bottom,
            y = m - u.left - u.right,
            b = M(h - u[g], v),
            x = M(m - u[_], y),
            S = !t.middlewareData.shift,
            C = b,
            w = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = v),
            S && !f)
          ) {
            let e = N(u.left, 0),
              t = N(u.right, 0),
              n = N(u.top, 0),
              r = N(u.bottom, 0);
            p
              ? (w = m - 2 * (e !== 0 || t !== 0 ? e + t : N(u.left, u.right)))
              : (C = h - 2 * (n !== 0 || r !== 0 ? n + r : N(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: w, availableHeight: C });
          let T = await o.getDimensions(s.floating);
          return m !== T.width || h !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function je() {
  return typeof window < `u`;
}
function Me(e) {
  return Ne(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function U(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function W(e) {
  return ((Ne(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function Ne(e) {
  return je() ? e instanceof Node || e instanceof U(e).Node : !1;
}
function G(e) {
  return je() ? e instanceof Element || e instanceof U(e).Element : !1;
}
function K(e) {
  return je() ? e instanceof HTMLElement || e instanceof U(e).HTMLElement : !1;
}
function Pe(e) {
  return !je() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof U(e).ShadowRoot;
}
function Fe(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = J(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function Ie(e) {
  return /^(table|td|th)$/.test(Me(e));
}
function Le(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var Re = /transform|translate|scale|rotate|perspective|filter/,
  ze = /paint|layout|strict|content/,
  q = (e) => !!e && e !== `none`,
  Be;
function Ve(e) {
  let t = G(e) ? J(e) : e;
  return (
    q(t.transform) ||
    q(t.translate) ||
    q(t.scale) ||
    q(t.rotate) ||
    q(t.perspective) ||
    (!Ue() && (q(t.backdropFilter) || q(t.filter))) ||
    Re.test(t.willChange || ``) ||
    ze.test(t.contain || ``)
  );
}
function He(e) {
  let t = Y(e);
  for (; K(t) && !We(t);) {
    if (Ve(t)) return t;
    if (Le(t)) return null;
    t = Y(t);
  }
  return null;
}
function Ue() {
  return (
    (Be ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    Be
  );
}
function We(e) {
  return /^(html|body|#document)$/.test(Me(e));
}
function J(e) {
  return U(e).getComputedStyle(e);
}
function Ge(e) {
  return G(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Y(e) {
  if (Me(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (Pe(e) && e.host) || W(e);
  return Pe(t) ? t.host : t;
}
function Ke(e) {
  let t = Y(e);
  return We(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : K(t) && Fe(t)
      ? t
      : Ke(t);
}
function qe(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = Ke(e),
    i = r === e.ownerDocument?.body,
    a = U(r);
  if (i) {
    let e = Je(a);
    return t.concat(
      a,
      a.visualViewport || [],
      Fe(r) ? r : [],
      e && n ? qe(e) : [],
    );
  } else return t.concat(r, qe(r, [], n));
}
function Je(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ye(e) {
  let t = J(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = K(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = P(n) !== a || P(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function Xe(e) {
  return G(e) ? e : e.contextElement;
}
function Ze(e) {
  let t = Xe(e);
  if (!K(t)) return I(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Ye(t),
    o = (a ? P(n.width) : n.width) / r,
    s = (a ? P(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Qe = I(0);
function $e(e) {
  let t = U(e);
  return !Ue() || !t.visualViewport
    ? Qe
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function et(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== U(e)) ? !1 : t);
}
function X(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = Xe(e),
    o = I(1);
  t && (r ? G(r) && (o = Ze(r)) : (o = Ze(e)));
  let s = et(a, n, r) ? $e(a) : I(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a) {
    let e = U(a),
      t = r && G(r) ? U(r) : r,
      n = e,
      i = Je(n);
    for (; i && r && t !== n;) {
      let e = Ze(i),
        t = i.getBoundingClientRect(),
        r = J(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = U(i)),
        (i = Je(n)));
    }
  }
  return he({ width: u, height: d, x: c, y: l });
}
function tt(e, t) {
  let n = Ge(e).scrollLeft;
  return t ? t.left + n : X(W(e)).left + n;
}
function nt(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - tt(e, n), y: n.top + t.scrollTop };
}
function rt(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = W(r),
    s = t ? Le(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = I(1),
    u = I(0),
    d = K(r);
  if ((d || (!d && !a)) && ((Me(r) !== `body` || Fe(o)) && (c = Ge(r)), d)) {
    let e = X(r);
    ((l = Ze(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? nt(o, c) : I(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function it(e) {
  return Array.from(e.getClientRects());
}
function at(e) {
  let t = W(e),
    n = Ge(e),
    r = e.ownerDocument.body,
    i = N(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = N(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    o = -n.scrollLeft + tt(e),
    s = -n.scrollTop;
  return (
    J(r).direction === `rtl` && (o += N(t.clientWidth, r.clientWidth) - i),
    { width: i, height: a, x: o, y: s }
  );
}
var ot = 25;
function st(e, t) {
  let n = U(e),
    r = W(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    let e = Ue();
    (!e || (e && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  let l = tt(r);
  if (l <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= ot && (a -= o);
  } else l <= ot && (a += l);
  return { width: a, height: o, x: s, y: c };
}
function ct(e, t) {
  let n = X(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = K(e) ? Ze(e) : I(1);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function lt(e, t, n) {
  let r;
  if (t === `viewport`) r = st(e, n);
  else if (t === `document`) r = at(W(e));
  else if (G(t)) r = ct(t, n);
  else {
    let n = $e(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return he(r);
}
function ut(e, t) {
  let n = Y(e);
  return n === t || !G(n) || We(n) ? !1 : J(n).position === `fixed` || ut(n, t);
}
function dt(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = qe(e, [], !1).filter((e) => G(e) && Me(e) !== `body`),
    i = null,
    a = J(e).position === `fixed`,
    o = a ? Y(e) : e;
  for (; G(o) && !We(o);) {
    let t = J(o),
      n = Ve(o);
    (!n && t.position === `fixed` && (i = null),
      (
        a
          ? !n && !i
          : (!n &&
              t.position === `static` &&
              i &&
              (i.position === `absolute` || i.position === `fixed`)) ||
            (Fe(o) && !n && ut(e, o))
      )
        ? (r = r.filter((e) => e !== o))
        : (i = t),
      (o = Y(o)));
  }
  return (t.set(e, r), r);
}
function ft(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? Le(t)
          ? []
          : dt(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = lt(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = lt(t, a[e], i);
    ((s = N(n.top, s)),
      (c = M(n.right, c)),
      (l = M(n.bottom, l)),
      (u = N(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function pt(e) {
  let { width: t, height: n } = Ye(e);
  return { width: t, height: n };
}
function mt(e, t, n) {
  let r = K(t),
    i = W(t),
    a = n === `fixed`,
    o = X(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = I(0);
  function l() {
    c.x = tt(i);
  }
  if (r || (!r && !a))
    if (((Me(t) !== `body` || Fe(i)) && (s = Ge(t)), r)) {
      let e = X(t, !0, a, t);
      ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    } else i && l();
  a && !r && i && l();
  let u = i && !r && !a ? nt(i, s) : I(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height,
  };
}
function ht(e) {
  return J(e).position === `static`;
}
function gt(e, t) {
  if (!K(e) || J(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (W(e) === n && (n = n.ownerDocument.body), n);
}
function _t(e, t) {
  let n = U(e);
  if (Le(e)) return n;
  if (!K(e)) {
    let t = Y(e);
    for (; t && !We(t);) {
      if (G(t) && !ht(t)) return t;
      t = Y(t);
    }
    return n;
  }
  let r = gt(e, t);
  for (; r && Ie(r) && ht(r);) r = gt(r, t);
  return r && We(r) && ht(r) && !Ve(r) ? n : r || He(e) || n;
}
var vt = async function (e) {
  let t = this.getOffsetParent || _t,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: mt(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function yt(e) {
  return J(e).direction === `rtl`;
}
var bt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rt,
  getDocumentElement: W,
  getClippingRect: ft,
  getOffsetParent: _t,
  getElementRects: vt,
  getClientRects: it,
  getDimensions: pt,
  getScale: Ze,
  isElement: G,
  isRTL: yt,
};
function xt(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function St(e, t) {
  let n = null,
    r,
    i = W(e);
  function a() {
    var e;
    (clearTimeout(r), (e = n) == null || e.disconnect(), (n = null));
  }
  function o(s, c) {
    (s === void 0 && (s = !1), c === void 0 && (c = 1), a());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((s || t(), !f || !p)) return;
    let m = F(d),
      h = F(i.clientWidth - (u + f)),
      g = F(i.clientHeight - (d + p)),
      _ = F(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: N(0, M(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (n !== c) {
        if (!y) return o();
        n
          ? o(!1, n)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (n === 1 && !xt(l, e.getBoundingClientRect()) && o(), (y = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...v, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return (o(!0), a);
}
function Ct(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Xe(e),
    u = i || a ? [...(l ? qe(l) : []), ...(t ? qe(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n, { passive: !0 }),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? St(l, n) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? X(e) : null;
  c && g();
  function g() {
    let t = X(e);
    (h && !xt(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var wt = De,
  Tt = Oe,
  Et = xe,
  Dt = Ae,
  Ot = we,
  kt = be,
  At = ke,
  jt = (e, t, n) => {
    let r = new Map(),
      i = { platform: bt, ...n },
      a = { ...i.platform, _c: r };
    return ye(e, t, { ...i, platform: a });
  },
  Mt = e(r(), 1),
  Nt = typeof document < `u` ? E.useLayoutEffect : function () {};
function Pt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!Pt(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !Pt(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ft(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function It(e, t) {
  let n = Ft(e);
  return Math.round(t * n) / n;
}
function Lt(e) {
  let t = E.useRef(e);
  return (
    Nt(() => {
      t.current = e;
    }),
    t
  );
}
function Rt(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = E.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = E.useState(r);
  Pt(f, r) || p(r);
  let [m, h] = E.useState(null),
    [g, _] = E.useState(null),
    v = E.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e));
    }, []),
    y = E.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e));
    }, []),
    b = a || m,
    x = o || g,
    S = E.useRef(null),
    C = E.useRef(null),
    w = E.useRef(u),
    T = c != null,
    D = Lt(c),
    O = Lt(i),
    k = Lt(l),
    A = E.useCallback(() => {
      if (!S.current || !C.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (O.current && (e.platform = O.current),
        jt(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: k.current !== !1 };
          j.current &&
            !Pt(w.current, t) &&
            ((w.current = t),
            Mt.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, O, k]);
  Nt(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let j = E.useRef(!1);
  (Nt(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    [],
  ),
    Nt(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (D.current) return D.current(b, x, A);
        A();
      }
    }, [b, x, A, D, T]));
  let M = E.useMemo(
      () => ({ reference: S, floating: C, setReference: v, setFloating: y }),
      [v, y],
    ),
    N = E.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    P = E.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!N.floating) return e;
      let t = It(N.floating, u.x),
        r = It(N.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(Ft(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, N.floating, u.x, u.y]);
  return E.useMemo(
    () => ({ ...u, update: A, refs: M, elements: N, floatingStyles: P }),
    [u, A, M, N, P],
  );
}
var zt = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`);
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
        return r && t(r)
          ? r.current == null
            ? {}
            : kt({ element: r.current, padding: i }).fn(n)
          : r
            ? kt({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  Bt = (e, t) => {
    let n = wt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Vt = (e, t) => {
    let n = Tt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ht = (e, t) => ({ fn: At(e).fn, options: [e, t] }),
  Ut = (e, t) => {
    let n = Et(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Wt = (e, t) => {
    let n = Dt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Gt = (e, t) => {
    let n = Ot(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Kt = (e, t) => {
    let n = zt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  qt = `Arrow`,
  Jt = E.forwardRef((e, t) => {
    let { children: n, width: r = 10, height: i = 5, ...a } = e;
    return (0, D.jsx)(S.svg, {
      ...a,
      ref: t,
      width: r,
      height: i,
      viewBox: `0 0 30 10`,
      preserveAspectRatio: `none`,
      children: e.asChild
        ? n
        : (0, D.jsx)(`polygon`, { points: `0,0 30,0 15,10` }),
    });
  });
Jt.displayName = qt;
var Yt = Jt;
function Xt(e) {
  let [t, n] = E.useState(void 0);
  return (
    b(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Zt = `Popper`,
  [Qt, $t] = l(Zt),
  [en, tn] = Qt(Zt),
  nn = (e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = E.useState(null),
      [a, o] = E.useState(void 0);
    return (0, D.jsx)(en, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    });
  };
nn.displayName = Zt;
var rn = `PopperAnchor`,
  an = E.forwardRef((e, t) => {
    let { __scopePopper: n, virtualRef: r, ...i } = e,
      a = tn(rn, n),
      s = E.useRef(null),
      c = a.onAnchorChange,
      l = o(
        t,
        E.useCallback(
          (e) => {
            ((s.current = e), e && c(e));
          },
          [c],
        ),
      ),
      u = E.useRef(null);
    E.useEffect(() => {
      if (!r) return;
      let e = u.current;
      ((u.current = r.current), e !== u.current && c(u.current));
    });
    let d = a.placementState && hn(a.placementState),
      f = d?.[0],
      p = d?.[1];
    return r
      ? null
      : (0, D.jsx)(S.div, {
          "data-radix-popper-side": f,
          "data-radix-popper-align": p,
          ...i,
          ref: l,
        });
  });
an.displayName = rn;
var on = `PopperContent`,
  [sn, cn] = Qt(on),
  ln = E.forwardRef((e, t) => {
    let {
        __scopePopper: n,
        side: r = `bottom`,
        sideOffset: i = 0,
        align: a = `center`,
        alignOffset: s = 0,
        arrowPadding: c = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: p = `partial`,
        hideWhenDetached: m = !1,
        updatePositionStrategy: h = `optimized`,
        onPlaced: g,
        ..._
      } = e,
      v = tn(on, n),
      [y, x] = E.useState(null),
      C = o(t, x),
      [w, T] = E.useState(null),
      O = Xt(w),
      k = O?.width ?? 0,
      A = O?.height ?? 0,
      j = r + (a === `center` ? `` : `-` + a),
      M =
        typeof d == `number`
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      N = Array.isArray(u) ? u : [u],
      P = N.length > 0,
      F = { padding: M, boundary: N.filter(pn), altBoundary: P },
      {
        refs: I,
        floatingStyles: ee,
        placement: L,
        isPositioned: R,
        middlewareData: z,
      } = Rt({
        strategy: `fixed`,
        placement: j,
        whileElementsMounted: (...e) =>
          Ct(...e, { animationFrame: h === `always` }),
        elements: { reference: v.anchor },
        middleware: [
          Bt({ mainAxis: i + A, alignmentAxis: s }),
          l &&
            Vt({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === `partial` ? Ht() : void 0,
              ...F,
            }),
          l && Ut({ ...F }),
          Wt({
            ...F,
            apply: ({
              elements: e,
              rects: t,
              availableWidth: n,
              availableHeight: r,
            }) => {
              let { width: i, height: a } = t.reference,
                o = e.floating.style;
              (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                o.setProperty(`--radix-popper-available-height`, `${r}px`),
                o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
            },
          }),
          w && Kt({ element: w, padding: c }),
          mn({ arrowWidth: k, arrowHeight: A }),
          m &&
            Gt({
              strategy: `referenceHidden`,
              ...F,
              boundary: P ? F.boundary : void 0,
            }),
        ],
      }),
      B = v.setPlacementState;
    b(
      () => (
        B(L),
        () => {
          B(void 0);
        }
      ),
      [L, B],
    );
    let [V, te] = hn(L),
      H = f(g);
    b(() => {
      R && H?.();
    }, [R, H]);
    let ne = z.arrow?.x,
      re = z.arrow?.y,
      ie = z.arrow?.centerOffset !== 0,
      [ae, oe] = E.useState();
    return (
      b(() => {
        y && oe(window.getComputedStyle(y).zIndex);
      }, [y]),
      (0, D.jsx)(`div`, {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": ``,
        style: {
          ...ee,
          transform: R ? ee.transform : `translate(0, -200%)`,
          minWidth: `max-content`,
          zIndex: ae,
          "--radix-popper-transform-origin": [
            z.transformOrigin?.x,
            z.transformOrigin?.y,
          ].join(` `),
          ...(z.hide?.referenceHidden && {
            visibility: `hidden`,
            pointerEvents: `none`,
          }),
        },
        dir: e.dir,
        children: (0, D.jsx)(sn, {
          scope: n,
          placedSide: V,
          placedAlign: te,
          onArrowChange: T,
          arrowX: ne,
          arrowY: re,
          shouldHideArrow: ie,
          children: (0, D.jsx)(S.div, {
            "data-side": V,
            "data-align": te,
            ..._,
            ref: C,
            style: { ..._.style, animation: R ? void 0 : `none` },
          }),
        }),
      })
    );
  });
ln.displayName = on;
var un = `PopperArrow`,
  dn = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
  fn = E.forwardRef(function (e, t) {
    let { __scopePopper: n, ...r } = e,
      i = cn(un, n),
      a = dn[i.placedSide];
    return (0, D.jsx)(`span`, {
      ref: i.onArrowChange,
      style: {
        position: `absolute`,
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: ``,
          right: `0 0`,
          bottom: `center 0`,
          left: `100% 0`,
        }[i.placedSide],
        transform: {
          top: `translateY(100%)`,
          right: `translateY(50%) rotate(90deg) translateX(-50%)`,
          bottom: `rotate(180deg)`,
          left: `translateY(50%) rotate(-90deg) translateX(50%)`,
        }[i.placedSide],
        visibility: i.shouldHideArrow ? `hidden` : void 0,
      },
      children: (0, D.jsx)(Yt, {
        ...r,
        ref: t,
        style: { ...r.style, display: `block` },
      }),
    });
  });
fn.displayName = un;
function pn(e) {
  return e !== null;
}
var mn = (e) => ({
  name: `transformOrigin`,
  options: e,
  fn(t) {
    let { placement: n, rects: r, middlewareData: i } = t,
      a = i.arrow?.centerOffset !== 0,
      o = a ? 0 : e.arrowWidth,
      s = a ? 0 : e.arrowHeight,
      [c, l] = hn(n),
      u = { start: `0%`, center: `50%`, end: `100%` }[l],
      d = (i.arrow?.x ?? 0) + o / 2,
      f = (i.arrow?.y ?? 0) + s / 2,
      p = ``,
      m = ``;
    return (
      c === `bottom`
        ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
        : c === `top`
          ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
          : c === `right`
            ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
            : c === `left` &&
              ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
      { data: { x: p, y: m } }
    );
  },
});
function hn(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
var gn = nn,
  _n = an,
  vn = ln,
  yn = fn,
  bn = `rovingFocusGroup.onEntryFocus`,
  xn = { bubbles: !1, cancelable: !0 },
  Sn = `RovingFocusGroup`,
  [Cn, wn, Tn] = O(Sn),
  [En, Dn] = l(Sn, [Tn]),
  [On, kn] = En(Sn),
  An = E.forwardRef((e, t) =>
    (0, D.jsx)(Cn.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: (0, D.jsx)(Cn.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, D.jsx)(jn, { ...e, ref: t }),
      }),
    }),
  );
An.displayName = Sn;
var jn = E.forwardRef((e, t) => {
    let {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: i = !1,
        dir: a,
        currentTabStopId: s,
        defaultCurrentTabStopId: l,
        onCurrentTabStopIdChange: u,
        onEntryFocus: d,
        preventScrollOnEntryFocus: p = !1,
        ...m
      } = e,
      h = E.useRef(null),
      g = o(t, h),
      _ = A(a),
      [v, b] = c({ prop: s, defaultProp: l ?? null, onChange: u, caller: Sn }),
      [x, C] = E.useState(!1),
      w = f(d),
      T = wn(n),
      O = E.useRef(!1),
      [k, j] = E.useState(0);
    return (
      E.useEffect(() => {
        let e = h.current;
        if (e)
          return (
            e.addEventListener(bn, w),
            () => e.removeEventListener(bn, w)
          );
      }, [w]),
      (0, D.jsx)(On, {
        scope: n,
        orientation: r,
        dir: _,
        loop: i,
        currentTabStopId: v,
        onItemFocus: E.useCallback((e) => b(e), [b]),
        onItemShiftTab: E.useCallback(() => C(!0), []),
        onFocusableItemAdd: E.useCallback(() => j((e) => e + 1), []),
        onFocusableItemRemove: E.useCallback(() => j((e) => e - 1), []),
        children: (0, D.jsx)(S.div, {
          tabIndex: x || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: g,
          style: { outline: `none`, ...e.style },
          onMouseDown: y(e.onMouseDown, () => {
            O.current = !0;
          }),
          onFocus: y(e.onFocus, (e) => {
            let t = !O.current;
            if (e.target === e.currentTarget && t && !x) {
              let t = new CustomEvent(bn, xn);
              if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                let e = T().filter((e) => e.focusable);
                Ln(
                  [e.find((e) => e.active), e.find((e) => e.id === v), ...e]
                    .filter(Boolean)
                    .map((e) => e.ref.current),
                  p,
                );
              }
            }
            O.current = !1;
          }),
          onBlur: y(e.onBlur, () => C(!1)),
        }),
      })
    );
  }),
  Mn = `RovingFocusGroupItem`,
  Nn = E.forwardRef((e, t) => {
    let {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: i = !1,
        tabStopId: a,
        children: o,
        ...s
      } = e,
      c = v(),
      l = a || c,
      u = kn(Mn, n),
      d = u.currentTabStopId === l,
      f = wn(n),
      {
        onFocusableItemAdd: p,
        onFocusableItemRemove: m,
        currentTabStopId: h,
      } = u;
    return (
      E.useEffect(() => {
        if (r) return (p(), () => m());
      }, [r, p, m]),
      (0, D.jsx)(Cn.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: i,
        children: (0, D.jsx)(S.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: y(e.onMouseDown, (e) => {
            r ? u.onItemFocus(l) : e.preventDefault();
          }),
          onFocus: y(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: y(e.onKeyDown, (e) => {
            if (e.key === `Tab` && e.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (e.target !== e.currentTarget) return;
            let t = In(e, u.orientation, u.dir);
            if (t !== void 0) {
              if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
              e.preventDefault();
              let n = f()
                .filter((e) => e.focusable)
                .map((e) => e.ref.current);
              if (t === `last`) n.reverse();
              else if (t === `prev` || t === `next`) {
                t === `prev` && n.reverse();
                let r = n.indexOf(e.currentTarget);
                n = u.loop ? Rn(n, r + 1) : n.slice(r + 1);
              }
              setTimeout(() => Ln(n));
            }
          }),
          children:
            typeof o == `function`
              ? o({ isCurrentTabStop: d, hasTabStop: h != null })
              : o,
        }),
      })
    );
  });
Nn.displayName = Mn;
var Pn = {
  ArrowLeft: `prev`,
  ArrowUp: `prev`,
  ArrowRight: `next`,
  ArrowDown: `next`,
  PageUp: `first`,
  Home: `first`,
  PageDown: `last`,
  End: `last`,
};
function Fn(e, t) {
  return t === `rtl`
    ? e === `ArrowLeft`
      ? `ArrowRight`
      : e === `ArrowRight`
        ? `ArrowLeft`
        : e
    : e;
}
function In(e, t, n) {
  let r = Fn(e.key, n);
  if (
    !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
    !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
  )
    return Pn[r];
}
function Ln(e, t = !1) {
  let n = document.activeElement;
  for (let r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function Rn(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var zn = An,
  Bn = Nn,
  Vn = [`Enter`, ` `],
  Hn = [`ArrowDown`, `PageUp`, `Home`],
  Un = [`ArrowUp`, `PageDown`, `End`],
  Wn = [...Hn, ...Un],
  Gn = { ltr: [...Vn, `ArrowRight`], rtl: [...Vn, `ArrowLeft`] },
  Kn = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
  qn = `Menu`,
  [Jn, Yn, Xn] = O(qn),
  [Zn, Qn] = l(qn, [Xn, $t, Dn]),
  $n = $t(),
  er = Dn(),
  [tr, Z] = Zn(qn),
  [nr, rr] = Zn(qn),
  ir = (e) => {
    let {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = $n(t),
      [c, l] = E.useState(null),
      u = E.useRef(!1),
      d = f(a),
      p = A(i);
    return (
      E.useEffect(() => {
        let e = () => {
            ((u.current = !0),
              document.addEventListener(`pointerdown`, t, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener(`pointermove`, t, {
                capture: !0,
                once: !0,
              }));
          },
          t = () => (u.current = !1);
        return (
          document.addEventListener(`keydown`, e, { capture: !0 }),
          () => {
            (document.removeEventListener(`keydown`, e, { capture: !0 }),
              document.removeEventListener(`pointerdown`, t, { capture: !0 }),
              document.removeEventListener(`pointermove`, t, { capture: !0 }));
          }
        );
      }, []),
      E.useEffect(() => {
        if (!n) return;
        let e = () => d(!1);
        return (
          window.addEventListener(`blur`, e),
          () => window.removeEventListener(`blur`, e)
        );
      }, [n, d]),
      (0, D.jsx)(gn, {
        ...s,
        children: (0, D.jsx)(tr, {
          scope: t,
          open: n,
          onOpenChange: d,
          content: c,
          onContentChange: l,
          children: (0, D.jsx)(nr, {
            scope: t,
            onClose: E.useCallback(() => d(!1), [d]),
            isUsingKeyboardRef: u,
            dir: p,
            modal: o,
            children: r,
          }),
        }),
      })
    );
  };
ir.displayName = qn;
var ar = `MenuAnchor`,
  or = E.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e,
      i = $n(n);
    return (0, D.jsx)(_n, { ...i, ...r, ref: t });
  });
or.displayName = ar;
var sr = `MenuPortal`,
  [cr, lr] = Zn(sr, { forceMount: void 0 }),
  ur = (e) => {
    let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
      a = Z(sr, t);
    return (0, D.jsx)(cr, {
      scope: t,
      forceMount: n,
      children: (0, D.jsx)(d, {
        present: n || a.open,
        children: (0, D.jsx)(g, { asChild: !0, container: i, children: r }),
      }),
    });
  };
ur.displayName = sr;
var Q = `MenuContent`,
  [dr, fr] = Zn(Q),
  pr = E.forwardRef((e, t) => {
    let n = lr(Q, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Z(Q, e.__scopeMenu),
      o = rr(Q, e.__scopeMenu);
    return (0, D.jsx)(Jn.Provider, {
      scope: e.__scopeMenu,
      children: (0, D.jsx)(d, {
        present: r || a.open,
        children: (0, D.jsx)(Jn.Slot, {
          scope: e.__scopeMenu,
          children: o.modal
            ? (0, D.jsx)(mr, { ...i, ref: t })
            : (0, D.jsx)(hr, { ...i, ref: t }),
        }),
      }),
    });
  }),
  mr = E.forwardRef((e, t) => {
    let n = Z(Q, e.__scopeMenu),
      r = E.useRef(null),
      i = o(t, r);
    return (
      E.useEffect(() => {
        let e = r.current;
        if (e) return m(e);
      }, []),
      (0, D.jsx)(_r, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: y(e.onFocusOutside, (e) => e.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  hr = E.forwardRef((e, t) => {
    let n = Z(Q, e.__scopeMenu);
    return (0, D.jsx)(_r, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  gr = s(`MenuContent.ScrollLock`),
  _r = E.forwardRef((e, t) => {
    let {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: i,
        onOpenAutoFocus: a,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: c,
        onEntryFocus: l,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: m,
        onInteractOutside: g,
        onDismiss: v,
        disableOutsideScroll: b,
        ...x
      } = e,
      S = Z(Q, n),
      C = rr(Q, n),
      w = $n(n),
      T = er(n),
      O = Yn(n),
      [k, A] = E.useState(null),
      j = E.useRef(null),
      M = o(t, j, S.onContentChange),
      N = E.useRef(0),
      P = E.useRef(``),
      F = E.useRef(0),
      I = E.useRef(null),
      ee = E.useRef(`right`),
      L = E.useRef(0),
      R = b ? _ : E.Fragment,
      z = b ? { as: gr, allowPinchZoom: !0 } : void 0,
      B = (e) => {
        let t = P.current + e,
          n = O().filter((e) => !e.disabled),
          r = document.activeElement,
          i = n.find((e) => e.ref.current === r)?.textValue,
          a = ti(
            n.map((e) => e.textValue),
            t,
            i,
          ),
          o = n.find((e) => e.textValue === a)?.ref.current;
        ((function e(t) {
          ((P.current = t),
            window.clearTimeout(N.current),
            t !== `` && (N.current = window.setTimeout(() => e(``), 1e3)));
        })(t),
          o && setTimeout(() => o.focus()));
      };
    (E.useEffect(() => () => window.clearTimeout(N.current), []), u());
    let V = E.useCallback(
      (e) => ee.current === I.current?.side && ri(e, I.current?.area),
      [],
    );
    return (0, D.jsx)(dr, {
      scope: n,
      searchRef: P,
      onItemEnter: E.useCallback(
        (e) => {
          V(e) && e.preventDefault();
        },
        [V],
      ),
      onItemLeave: E.useCallback(
        (e) => {
          V(e) || (j.current?.focus(), A(null));
        },
        [V],
      ),
      onTriggerLeave: E.useCallback(
        (e) => {
          V(e) && e.preventDefault();
        },
        [V],
      ),
      pointerGraceTimerRef: F,
      onPointerGraceIntentChange: E.useCallback((e) => {
        I.current = e;
      }, []),
      children: (0, D.jsx)(R, {
        ...z,
        children: (0, D.jsx)(h, {
          asChild: !0,
          trapped: i,
          onMountAutoFocus: y(a, (e) => {
            (e.preventDefault(), j.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: s,
          children: (0, D.jsx)(p, {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onEscapeKeyDown: d,
            onPointerDownOutside: f,
            onFocusOutside: m,
            onInteractOutside: g,
            onDismiss: v,
            children: (0, D.jsx)(zn, {
              asChild: !0,
              ...T,
              dir: C.dir,
              orientation: `vertical`,
              loop: r,
              currentTabStopId: k,
              onCurrentTabStopIdChange: A,
              onEntryFocus: y(l, (e) => {
                C.isUsingKeyboardRef.current || e.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: (0, D.jsx)(vn, {
                role: `menu`,
                "aria-orientation": `vertical`,
                "data-state": Xr(S.open),
                "data-radix-menu-content": ``,
                dir: C.dir,
                ...w,
                ...x,
                ref: M,
                style: { outline: `none`, ...x.style },
                onKeyDown: y(x.onKeyDown, (e) => {
                  let t =
                      e.target.closest(`[data-radix-menu-content]`) ===
                      e.currentTarget,
                    n = e.ctrlKey || e.altKey || e.metaKey,
                    r = e.key.length === 1;
                  t &&
                    (e.key === `Tab` && e.preventDefault(),
                    !n && r && B(e.key));
                  let i = j.current;
                  if (e.target !== i || !Wn.includes(e.key)) return;
                  e.preventDefault();
                  let a = O()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  (Un.includes(e.key) && a.reverse(), $r(a));
                }),
                onBlur: y(e.onBlur, (e) => {
                  e.currentTarget.contains(e.target) ||
                    (window.clearTimeout(N.current), (P.current = ``));
                }),
                onPointerMove: y(
                  e.onPointerMove,
                  ii((e) => {
                    let t = e.target,
                      n = L.current !== e.clientX;
                    e.currentTarget.contains(t) &&
                      n &&
                      ((ee.current = e.clientX > L.current ? `right` : `left`),
                      (L.current = e.clientX));
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
pr.displayName = Q;
var vr = `MenuGroup`,
  yr = E.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e;
    return (0, D.jsx)(S.div, { role: `group`, ...r, ref: t });
  });
yr.displayName = vr;
var br = `MenuLabel`,
  xr = E.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e;
    return (0, D.jsx)(S.div, { ...r, ref: t });
  });
xr.displayName = br;
var Sr = `MenuItem`,
  Cr = `menu.itemSelect`,
  wr = E.forwardRef((e, t) => {
    let { disabled: n = !1, onSelect: r, ...i } = e,
      a = E.useRef(null),
      s = rr(Sr, e.__scopeMenu),
      c = fr(Sr, e.__scopeMenu),
      l = o(t, a),
      u = E.useRef(!1),
      d = () => {
        let e = a.current;
        if (!n && e) {
          let t = new CustomEvent(Cr, { bubbles: !0, cancelable: !0 });
          (e.addEventListener(Cr, (e) => r?.(e), { once: !0 }),
            x(e, t),
            t.defaultPrevented ? (u.current = !1) : s.onClose());
        }
      };
    return (0, D.jsx)(Tr, {
      ...i,
      ref: l,
      disabled: n,
      onClick: y(e.onClick, d),
      onPointerDown: (t) => {
        (e.onPointerDown?.(t), (u.current = !0));
      },
      onPointerUp: y(e.onPointerUp, (e) => {
        u.current || e.currentTarget?.click();
      }),
      onKeyDown: y(e.onKeyDown, (e) => {
        let t = c.searchRef.current !== ``;
        n ||
          (t && e.key === ` `) ||
          (Vn.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
      }),
    });
  });
wr.displayName = Sr;
var Tr = E.forwardRef((e, t) => {
    let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e,
      s = fr(Sr, n),
      c = er(n),
      l = E.useRef(null),
      u = o(t, l),
      [d, f] = E.useState(!1),
      [p, m] = E.useState(``);
    return (
      E.useEffect(() => {
        let e = l.current;
        e && m((e.textContent ?? ``).trim());
      }, [a.children]),
      (0, D.jsx)(Jn.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: i ?? p,
        children: (0, D.jsx)(Bn, {
          asChild: !0,
          ...c,
          focusable: !r,
          children: (0, D.jsx)(S.div, {
            role: `menuitem`,
            "data-highlighted": d ? `` : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? `` : void 0,
            ...a,
            ref: u,
            onPointerMove: y(
              e.onPointerMove,
              ii((e) => {
                r
                  ? s.onItemLeave(e)
                  : (s.onItemEnter(e),
                    e.defaultPrevented ||
                      e.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: y(
              e.onPointerLeave,
              ii((e) => s.onItemLeave(e)),
            ),
            onFocus: y(e.onFocus, () => f(!0)),
            onBlur: y(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  Er = `MenuCheckboxItem`,
  Dr = E.forwardRef((e, t) => {
    let { checked: n = !1, onCheckedChange: r, ...i } = e;
    return (0, D.jsx)(Fr, {
      scope: e.__scopeMenu,
      checked: n,
      children: (0, D.jsx)(wr, {
        role: `menuitemcheckbox`,
        "aria-checked": Zr(n) ? `mixed` : n,
        ...i,
        ref: t,
        "data-state": Qr(n),
        onSelect: y(i.onSelect, () => r?.(Zr(n) ? !0 : !n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
Dr.displayName = Er;
var Or = `MenuRadioGroup`,
  [kr, Ar] = Zn(Or, { value: void 0, onValueChange: () => {} }),
  jr = E.forwardRef((e, t) => {
    let { value: n, onValueChange: r, ...i } = e,
      a = f(r);
    return (0, D.jsx)(kr, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: a,
      children: (0, D.jsx)(yr, { ...i, ref: t }),
    });
  });
jr.displayName = Or;
var Mr = `MenuRadioItem`,
  Nr = E.forwardRef((e, t) => {
    let { value: n, ...r } = e,
      i = Ar(Mr, e.__scopeMenu),
      a = n === i.value;
    return (0, D.jsx)(Fr, {
      scope: e.__scopeMenu,
      checked: a,
      children: (0, D.jsx)(wr, {
        role: `menuitemradio`,
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Qr(a),
        onSelect: y(r.onSelect, () => i.onValueChange?.(n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
Nr.displayName = Mr;
var Pr = `MenuItemIndicator`,
  [Fr, Ir] = Zn(Pr, { checked: !1 }),
  Lr = E.forwardRef((e, t) => {
    let { __scopeMenu: n, forceMount: r, ...i } = e,
      a = Ir(Pr, n);
    return (0, D.jsx)(d, {
      present: r || Zr(a.checked) || a.checked === !0,
      children: (0, D.jsx)(S.span, {
        ...i,
        ref: t,
        "data-state": Qr(a.checked),
      }),
    });
  });
Lr.displayName = Pr;
var Rr = `MenuSeparator`,
  zr = E.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e;
    return (0, D.jsx)(S.div, {
      role: `separator`,
      "aria-orientation": `horizontal`,
      ...r,
      ref: t,
    });
  });
zr.displayName = Rr;
var Br = `MenuArrow`,
  Vr = E.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e,
      i = $n(n);
    return (0, D.jsx)(yn, { ...i, ...r, ref: t });
  });
Vr.displayName = Br;
var Hr = `MenuSub`,
  [Ur, Wr] = Zn(Hr),
  Gr = (e) => {
    let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e,
      a = Z(Hr, t),
      o = $n(t),
      [s, c] = E.useState(null),
      [l, u] = E.useState(null),
      d = f(i);
    return (
      E.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]),
      (0, D.jsx)(gn, {
        ...o,
        children: (0, D.jsx)(tr, {
          scope: t,
          open: r,
          onOpenChange: d,
          content: l,
          onContentChange: u,
          children: (0, D.jsx)(Ur, {
            scope: t,
            contentId: v(),
            triggerId: v(),
            trigger: s,
            onTriggerChange: c,
            children: n,
          }),
        }),
      })
    );
  };
Gr.displayName = Hr;
var Kr = `MenuSubTrigger`,
  qr = E.forwardRef((e, t) => {
    let n = Z(Kr, e.__scopeMenu),
      r = rr(Kr, e.__scopeMenu),
      i = Wr(Kr, e.__scopeMenu),
      a = fr(Kr, e.__scopeMenu),
      s = E.useRef(null),
      { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = a,
      u = { __scopeMenu: e.__scopeMenu },
      d = E.useCallback(() => {
        (s.current && window.clearTimeout(s.current), (s.current = null));
      }, []);
    (E.useEffect(() => d, [d]),
      E.useEffect(() => {
        let e = c.current;
        return () => {
          (window.clearTimeout(e), l(null));
        };
      }, [c, l]));
    let f = o(t, i.onTriggerChange);
    return (0, D.jsx)(or, {
      asChild: !0,
      ...u,
      children: (0, D.jsx)(Tr, {
        id: i.triggerId,
        "aria-haspopup": `menu`,
        "aria-expanded": n.open,
        "aria-controls": n.open ? i.contentId : void 0,
        "data-state": Xr(n.open),
        ...e,
        ref: f,
        onClick: (t) => {
          (e.onClick?.(t),
            !(e.disabled || t.defaultPrevented) &&
              (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
        },
        onPointerMove: y(
          e.onPointerMove,
          ii((t) => {
            (a.onItemEnter(t),
              !t.defaultPrevented &&
                !e.disabled &&
                !n.open &&
                !s.current &&
                (a.onPointerGraceIntentChange(null),
                (s.current = window.setTimeout(() => {
                  (n.onOpenChange(!0), d());
                }, 100))));
          }),
        ),
        onPointerLeave: y(
          e.onPointerLeave,
          ii((e) => {
            d();
            let t = n.content?.getBoundingClientRect();
            if (t) {
              let r = n.content?.dataset.side,
                i = r === `right`,
                o = i ? -5 : 5,
                s = t[i ? `left` : `right`],
                l = t[i ? `right` : `left`];
              (a.onPointerGraceIntentChange({
                area: [
                  { x: e.clientX + o, y: e.clientY },
                  { x: s, y: t.top },
                  { x: l, y: t.top },
                  { x: l, y: t.bottom },
                  { x: s, y: t.bottom },
                ],
                side: r,
              }),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(
                  () => a.onPointerGraceIntentChange(null),
                  300,
                )));
            } else {
              if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
              a.onPointerGraceIntentChange(null);
            }
          }),
        ),
        onKeyDown: y(e.onKeyDown, (t) => {
          let i = a.searchRef.current !== ``;
          e.disabled ||
            (i && t.key === ` `) ||
            (Gn[r.dir].includes(t.key) &&
              (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
        }),
      }),
    });
  });
qr.displayName = Kr;
var Jr = `MenuSubContent`,
  Yr = E.forwardRef((e, t) => {
    let n = lr(Q, e.__scopeMenu),
      { forceMount: r = n.forceMount, align: i = `start`, ...a } = e,
      s = Z(Q, e.__scopeMenu),
      c = rr(Q, e.__scopeMenu),
      l = Wr(Jr, e.__scopeMenu),
      u = E.useRef(null),
      f = o(t, u);
    return (0, D.jsx)(Jn.Provider, {
      scope: e.__scopeMenu,
      children: (0, D.jsx)(d, {
        present: r || s.open,
        children: (0, D.jsx)(Jn.Slot, {
          scope: e.__scopeMenu,
          children: (0, D.jsx)(_r, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...a,
            ref: f,
            align: i,
            side: c.dir === `rtl` ? `left` : `right`,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (e) => {
              (c.isUsingKeyboardRef.current && u.current?.focus(),
                e.preventDefault());
            },
            onCloseAutoFocus: (e) => e.preventDefault(),
            onFocusOutside: y(e.onFocusOutside, (e) => {
              e.target !== l.trigger && s.onOpenChange(!1);
            }),
            onEscapeKeyDown: y(e.onEscapeKeyDown, (e) => {
              (c.onClose(), e.preventDefault());
            }),
            onKeyDown: y(e.onKeyDown, (e) => {
              let t = e.currentTarget.contains(e.target),
                n = Kn[c.dir].includes(e.key);
              t &&
                n &&
                (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Yr.displayName = Jr;
function Xr(e) {
  return e ? `open` : `closed`;
}
function Zr(e) {
  return e === `indeterminate`;
}
function Qr(e) {
  return Zr(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
function $r(e) {
  let t = document.activeElement;
  for (let n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ei(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function ti(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = ei(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
function ni(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function ri(e, t) {
  return t ? ni({ x: e.clientX, y: e.clientY }, t) : !1;
}
function ii(e) {
  return (t) => (t.pointerType === `mouse` ? e(t) : void 0);
}
var ai = ir,
  oi = or,
  si = ur,
  ci = pr,
  li = yr,
  ui = xr,
  di = wr,
  fi = Dr,
  pi = jr,
  mi = Nr,
  hi = Lr,
  gi = zr,
  _i = Vr,
  vi = qr,
  yi = Yr,
  bi = `DropdownMenu`,
  [xi, Si] = l(bi, [Qn]),
  $ = Qn(),
  [Ci, wi] = xi(bi),
  Ti = (e) => {
    let {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: i,
        defaultOpen: a,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      l = $(t),
      u = E.useRef(null),
      [d, f] = c({ prop: i, defaultProp: a ?? !1, onChange: o, caller: bi });
    return (0, D.jsx)(Ci, {
      scope: t,
      triggerId: v(),
      triggerRef: u,
      contentId: v(),
      open: d,
      onOpenChange: f,
      onOpenToggle: E.useCallback(() => f((e) => !e), [f]),
      modal: s,
      children: (0, D.jsx)(ai, {
        ...l,
        open: d,
        onOpenChange: f,
        dir: r,
        modal: s,
        children: n,
      }),
    });
  };
Ti.displayName = bi;
var Ei = `DropdownMenuTrigger`,
  Di = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
      a = wi(Ei, n),
      s = $(n),
      c = o(t, a.triggerRef);
    return (0, D.jsx)(oi, {
      asChild: !0,
      ...s,
      children: (0, D.jsx)(S.button, {
        type: `button`,
        id: a.triggerId,
        "aria-haspopup": `menu`,
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? `open` : `closed`,
        "data-disabled": r ? `` : void 0,
        disabled: r,
        ...i,
        ref: c,
        onPointerDown: y(e.onPointerDown, (e) => {
          !r &&
            e.button === 0 &&
            e.ctrlKey === !1 &&
            (a.onOpenToggle(), a.open || e.preventDefault());
        }),
        onKeyDown: y(e.onKeyDown, (e) => {
          r ||
            ([`Enter`, ` `].includes(e.key) && a.onOpenToggle(),
            e.key === `ArrowDown` && a.onOpenChange(!0),
            [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault());
        }),
      }),
    });
  });
Di.displayName = Ei;
var Oi = `DropdownMenuPortal`,
  ki = (e) => {
    let { __scopeDropdownMenu: t, ...n } = e,
      r = $(t);
    return (0, D.jsx)(si, { ...r, ...n });
  };
ki.displayName = Oi;
var Ai = `DropdownMenuContent`,
  ji = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = wi(Ai, n),
      a = $(n),
      o = E.useRef(!1);
    return (0, D.jsx)(ci, {
      id: i.contentId,
      "aria-labelledby": i.triggerId,
      ...a,
      ...r,
      ref: t,
      onCloseAutoFocus: y(e.onCloseAutoFocus, (e) => {
        (o.current || i.triggerRef.current?.focus(),
          (o.current = !1),
          e.preventDefault());
      }),
      onInteractOutside: y(e.onInteractOutside, (e) => {
        let t = e.detail.originalEvent,
          n = t.button === 0 && t.ctrlKey === !0,
          r = t.button === 2 || n;
        (!i.modal || r) && (o.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
        "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
        "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
        "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
        "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
      },
    });
  });
ji.displayName = Ai;
var Mi = `DropdownMenuGroup`,
  Ni = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(li, { ...i, ...r, ref: t });
  });
Ni.displayName = Mi;
var Pi = `DropdownMenuLabel`,
  Fi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(ui, { ...i, ...r, ref: t });
  });
Fi.displayName = Pi;
var Ii = `DropdownMenuItem`,
  Li = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(di, { ...i, ...r, ref: t });
  });
Li.displayName = Ii;
var Ri = `DropdownMenuCheckboxItem`,
  zi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(fi, { ...i, ...r, ref: t });
  });
zi.displayName = Ri;
var Bi = `DropdownMenuRadioGroup`,
  Vi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(pi, { ...i, ...r, ref: t });
  });
Vi.displayName = Bi;
var Hi = `DropdownMenuRadioItem`,
  Ui = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(mi, { ...i, ...r, ref: t });
  });
Ui.displayName = Hi;
var Wi = `DropdownMenuItemIndicator`,
  Gi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(hi, { ...i, ...r, ref: t });
  });
Gi.displayName = Wi;
var Ki = `DropdownMenuSeparator`,
  qi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(gi, { ...i, ...r, ref: t });
  });
qi.displayName = Ki;
var Ji = `DropdownMenuArrow`,
  Yi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(_i, { ...i, ...r, ref: t });
  });
Yi.displayName = Ji;
var Xi = `DropdownMenuSubTrigger`,
  Zi = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(vi, { ...i, ...r, ref: t });
  });
Zi.displayName = Xi;
var Qi = `DropdownMenuSubContent`,
  $i = E.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = $(n);
    return (0, D.jsx)(yi, {
      ...i,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
        "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
        "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
        "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
        "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
      },
    });
  });
$i.displayName = Qi;
var ea = Ti,
  ta = Di,
  na = ki,
  ra = ji,
  ia = Fi,
  aa = Li,
  oa = zi,
  sa = Ui,
  ca = Gi,
  la = qi,
  ua = Zi,
  da = $i,
  fa = ea,
  pa = ta,
  ma = E.forwardRef(({ className: e, inset: t, children: n, ...r }, i) =>
    (0, D.jsxs)(ua, {
      ref: i,
      className: a(
        `flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        t && `pl-8`,
        e,
      ),
      ...r,
      children: [n, (0, D.jsx)(w, { className: `ml-auto` })],
    }),
  );
ma.displayName = ua.displayName;
var ha = E.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(da, {
    ref: n,
    className: a(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`,
      e,
    ),
    ...t,
  }),
);
ha.displayName = da.displayName;
var ga = E.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  (0, D.jsx)(na, {
    children: (0, D.jsx)(ra, {
      ref: r,
      sideOffset: t,
      className: a(
        `z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md`,
        `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`,
        e,
      ),
      ...n,
    }),
  }),
);
ga.displayName = ra.displayName;
var _a = E.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, D.jsx)(aa, {
    ref: r,
    className: a(
      `relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
);
_a.displayName = aa.displayName;
var va = E.forwardRef(({ className: e, children: t, checked: n, ...r }, i) =>
  (0, D.jsxs)(oa, {
    ref: i,
    className: a(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    checked: n,
    ...r,
    children: [
      (0, D.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, D.jsx)(ca, {
          children: (0, D.jsx)(C, { className: `h-4 w-4` }),
        }),
      }),
      t,
    ],
  }),
);
va.displayName = oa.displayName;
var ya = E.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, D.jsxs)(sa, {
    ref: r,
    className: a(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, D.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, D.jsx)(ca, {
          children: (0, D.jsx)(T, { className: `h-2 w-2 fill-current` }),
        }),
      }),
      t,
    ],
  }),
);
ya.displayName = sa.displayName;
var ba = E.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, D.jsx)(ia, {
    ref: r,
    className: a(`px-2 py-1.5 text-sm font-semibold`, t && `pl-8`, e),
    ...n,
  }),
);
ba.displayName = ia.displayName;
var xa = E.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(la, { ref: n, className: a(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
xa.displayName = la.displayName;
var Sa = ({ className: e, ...t }) =>
  (0, D.jsx)(`span`, {
    className: a(`ml-auto text-xs tracking-widest opacity-60`, e),
    ...t,
  });
Sa.displayName = `DropdownMenuShortcut`;
export { pa as a, xa as i, ga as n, _a as r, fa as t };
