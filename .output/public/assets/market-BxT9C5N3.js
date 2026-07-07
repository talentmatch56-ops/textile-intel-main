import { a as e, n as t, t as n } from "./jsx-runtime-n5LQ9ujS.js";
import { n as r, r as i } from "./utils-DbbrEv-p.js";
import { t as a } from "./earth-DnUaiYk8.js";
import { t as o } from "./sparkles-D9JfmPPi.js";
import { n as s, r as c, t as l } from "./stat-card-D9N0zewM.js";
import { t as u } from "./trending-up-B4RhHAzP.js";
import { t as d } from "./page-header-KBYaDscd.js";
import {
  A as f,
  B as p,
  C as m,
  E as h,
  F as g,
  G as _,
  H as v,
  L as y,
  O as b,
  P as x,
  T as S,
  _ as C,
  a as w,
  g as T,
  h as E,
  i as D,
  j as ee,
  k as O,
  l as te,
  n as k,
  o as ne,
  r as A,
  t as re,
  w as j,
} from "./generateCategoricalChart-UpmhMX6I.js";
var ie = i(`chart-no-axes-column`, [
    [`path`, { d: `M5 21v-6`, key: `1hz6c0` }],
    [`path`, { d: `M12 21V3`, key: `1lcnhd` }],
    [`path`, { d: `M19 21V9`, key: `unv183` }],
  ]),
  M = e(t()),
  ae = e(_()),
  N = e(v()),
  oe = e(S()),
  se = [`type`, `layout`, `connectNulls`, `ref`],
  ce = [`key`];
function P(e) {
  "@babel/helpers - typeof";
  return (
    (P =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    P(e)
  );
}
function F(e, t) {
  if (e == null) return {};
  var n = le(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function le(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function I() {
  return (
    (I = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    I.apply(this, arguments)
  );
}
function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? L(Object(n), !0).forEach(function (t) {
          Y(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : L(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function z(e) {
  return U(e) || H(e) || V(e) || B();
}
function B() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, t) {
  if (e) {
    if (typeof e == `string`) return W(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return W(e, t);
  }
}
function H(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function U(e) {
  if (Array.isArray(e)) return W(e);
}
function W(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ue(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function G(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, X(r.key), r));
  }
}
function de(e, t, n) {
  return (
    t && G(e.prototype, t),
    n && G(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function fe(e, t, n) {
  return (
    (t = q(t)),
    pe(e, K() ? Reflect.construct(t, n || [], q(e).constructor) : t.apply(e, n))
  );
}
function pe(e, t) {
  if (t && (P(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return me(e);
}
function me(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function K() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (K = function () {
    return !!e;
  })();
}
function q(e) {
  return (
    (q = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    q(e)
  );
}
function he(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && J(e, t));
}
function J(e, t) {
  return (
    (J = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    J(e, t)
  );
}
function Y(e, t, n) {
  return (
    (t = X(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function X(e) {
  var t = Z(e, `string`);
  return P(t) == `symbol` ? t : t + ``;
}
function Z(e, t) {
  if (P(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (P(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Q = (function (e) {
  function t() {
    var e;
    ue(this, t);
    var n = [...arguments];
    return (
      (e = fe(this, t, [].concat(n))),
      Y(e, `state`, { isAnimationFinished: !0, totalLength: 0 }),
      Y(e, `generateSimpleStrokeDasharray`, function (e, t) {
        return `${t}px ${e - t}px`;
      }),
      Y(e, `getStrokeDasharray`, function (n, r, i) {
        var a = i.reduce(function (e, t) {
          return e + t;
        });
        if (!a) return e.generateSimpleStrokeDasharray(r, n);
        for (
          var o = Math.floor(n / a), s = n % a, c = r - n, l = [], u = 0, d = 0;
          u < i.length;
          d += i[u], ++u
        )
          if (d + i[u] > s) {
            l = [].concat(z(i.slice(0, u)), [s - d]);
            break;
          }
        var f = l.length % 2 == 0 ? [0, c] : [c];
        return []
          .concat(z(t.repeat(i, o)), z(l), f)
          .map(function (e) {
            return `${e}px`;
          })
          .join(`, `);
      }),
      Y(e, `id`, p(`recharts-line-`)),
      Y(e, `pathRef`, function (t) {
        e.mainCurve = t;
      }),
      Y(e, `handleAnimationEnd`, function () {
        (e.setState({ isAnimationFinished: !0 }),
          e.props.onAnimationEnd && e.props.onAnimationEnd());
      }),
      Y(e, `handleAnimationStart`, function () {
        (e.setState({ isAnimationFinished: !1 }),
          e.props.onAnimationStart && e.props.onAnimationStart());
      }),
      e
    );
  }
  return (
    he(t, e),
    de(
      t,
      [
        {
          key: `componentDidMount`,
          value: function () {
            if (this.props.isAnimationActive) {
              var e = this.getTotalLength();
              this.setState({ totalLength: e });
            }
          },
        },
        {
          key: `componentDidUpdate`,
          value: function () {
            if (this.props.isAnimationActive) {
              var e = this.getTotalLength();
              e !== this.state.totalLength && this.setState({ totalLength: e });
            }
          },
        },
        {
          key: `getTotalLength`,
          value: function () {
            var e = this.mainCurve;
            try {
              return (e && e.getTotalLength && e.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: `renderErrorBar`,
          value: function (e, t) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var n = this.props,
              r = n.points,
              i = n.xAxis,
              a = n.yAxis,
              o = n.layout,
              s = n.children,
              c = f(s, C);
            if (!c) return null;
            var l = function (e, t) {
                return {
                  x: e.x,
                  y: e.y,
                  value: e.value,
                  errorVal: T(e.payload, t),
                };
              },
              u = { clipPath: e ? `url(#clipPath-${t})` : null };
            return M.createElement(
              j,
              u,
              c.map(function (e) {
                return M.cloneElement(e, {
                  key: `bar-${e.props.dataKey}`,
                  data: r,
                  xAxis: i,
                  yAxis: a,
                  layout: o,
                  dataPointFormatter: l,
                });
              }),
            );
          },
        },
        {
          key: `renderDots`,
          value: function (e, n, r) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var i = this.props,
              a = i.dot,
              o = i.points,
              s = i.dataKey,
              c = O(this.props, !1),
              l = O(a, !0),
              u = o.map(function (e, n) {
                var r = R(
                  R(R({ key: `dot-${n}`, r: 3 }, c), l),
                  {},
                  {
                    index: n,
                    cx: e.x,
                    cy: e.y,
                    value: e.value,
                    dataKey: s,
                    payload: e.payload,
                    points: o,
                  },
                );
                return t.renderDotItem(a, r);
              }),
              d = {
                clipPath: e ? `url(#clipPath-${n ? `` : `dots-`}${r})` : null,
              };
            return M.createElement(
              j,
              I({ className: `recharts-line-dots`, key: `dots` }, d),
              u,
            );
          },
        },
        {
          key: `renderCurveStatically`,
          value: function (e, t, n, r) {
            var i = this.props,
              a = i.type,
              o = i.layout,
              s = i.connectNulls;
            i.ref;
            var c = R(
              R(
                R({}, O(F(i, se), !0)),
                {},
                {
                  fill: `none`,
                  className: `recharts-line-curve`,
                  clipPath: t ? `url(#clipPath-${n})` : null,
                  points: e,
                },
                r,
              ),
              {},
              { type: a, layout: o, connectNulls: s },
            );
            return M.createElement(m, I({}, c, { pathRef: this.pathRef }));
          },
        },
        {
          key: `renderCurveWithAnimation`,
          value: function (e, t) {
            var n = this,
              r = this.props,
              i = r.points,
              a = r.strokeDasharray,
              o = r.isAnimationActive,
              s = r.animationBegin,
              c = r.animationDuration,
              l = r.animationEasing,
              u = r.animationId,
              d = r.animateNewValues,
              f = r.width,
              p = r.height,
              m = this.state,
              g = m.prevPoints,
              _ = m.totalLength;
            return M.createElement(
              h,
              {
                begin: s,
                duration: c,
                isActive: o,
                easing: l,
                from: { t: 0 },
                to: { t: 1 },
                key: `line-${u}`,
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (r) {
                var o = r.t;
                if (g) {
                  var s = g.length / i.length,
                    c = i.map(function (e, t) {
                      var n = Math.floor(t * s);
                      if (g[n]) {
                        var r = g[n],
                          i = y(r.x, e.x),
                          a = y(r.y, e.y);
                        return R(R({}, e), {}, { x: i(o), y: a(o) });
                      }
                      if (d) {
                        var c = y(f * 2, e.x),
                          l = y(p / 2, e.y);
                        return R(R({}, e), {}, { x: c(o), y: l(o) });
                      }
                      return R(R({}, e), {}, { x: e.x, y: e.y });
                    });
                  return n.renderCurveStatically(c, e, t);
                }
                var l = y(0, _)(o),
                  u;
                if (a) {
                  var m = `${a}`.split(/[,\s]+/gim).map(function (e) {
                    return parseFloat(e);
                  });
                  u = n.getStrokeDasharray(l, _, m);
                } else u = n.generateSimpleStrokeDasharray(_, l);
                return n.renderCurveStatically(i, e, t, { strokeDasharray: u });
              },
            );
          },
        },
        {
          key: `renderCurve`,
          value: function (e, t) {
            var n = this.props,
              r = n.points,
              i = n.isAnimationActive,
              a = this.state,
              o = a.prevPoints,
              s = a.totalLength;
            return i &&
              r &&
              r.length &&
              ((!o && s > 0) || !(0, oe.default)(o, r))
              ? this.renderCurveWithAnimation(e, t)
              : this.renderCurveStatically(r, e, t);
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.hide,
              n = e.dot,
              i = e.points,
              a = e.className,
              o = e.xAxis,
              s = e.yAxis,
              c = e.top,
              l = e.left,
              u = e.width,
              d = e.height,
              f = e.isAnimationActive,
              p = e.id;
            if (t || !i || !i.length) return null;
            var m = this.state.isAnimationFinished,
              h = i.length === 1,
              g = r(`recharts-line`, a),
              _ = o && o.allowDataOverflow,
              v = s && s.allowDataOverflow,
              y = _ || v,
              b = (0, N.default)(p) ? this.id : p,
              x = O(n, !1) ?? { r: 3, strokeWidth: 2 },
              S = x.r,
              C = S === void 0 ? 3 : S,
              w = x.strokeWidth,
              T = w === void 0 ? 2 : w,
              E = (ee(n) ? n : {}).clipDot,
              D = E === void 0 ? !0 : E,
              k = C * 2 + T;
            return M.createElement(
              j,
              { className: g },
              _ || v
                ? M.createElement(
                    `defs`,
                    null,
                    M.createElement(
                      `clipPath`,
                      { id: `clipPath-${b}` },
                      M.createElement(`rect`, {
                        x: _ ? l : l - u / 2,
                        y: v ? c : c - d / 2,
                        width: _ ? u : u * 2,
                        height: v ? d : d * 2,
                      }),
                    ),
                    !D &&
                      M.createElement(
                        `clipPath`,
                        { id: `clipPath-dots-${b}` },
                        M.createElement(`rect`, {
                          x: l - k / 2,
                          y: c - k / 2,
                          width: u + k,
                          height: d + k,
                        }),
                      ),
                  )
                : null,
              !h && this.renderCurve(y, b),
              this.renderErrorBar(y, b),
              (h || n) && this.renderDots(y, D, b),
              (!f || m) && te.renderCallByParent(this.props, i),
            );
          },
        },
      ],
      [
        {
          key: `getDerivedStateFromProps`,
          value: function (e, t) {
            return e.animationId === t.prevAnimationId
              ? e.points === t.curPoints
                ? null
                : { curPoints: e.points }
              : {
                  prevAnimationId: e.animationId,
                  curPoints: e.points,
                  prevPoints: t.curPoints,
                };
          },
        },
        {
          key: `repeat`,
          value: function (e, t) {
            for (
              var n = e.length % 2 == 0 ? e : [].concat(z(e), [0]),
                r = [],
                i = 0;
              i < t;
              ++i
            )
              r = [].concat(z(r), z(n));
            return r;
          },
        },
        {
          key: `renderDotItem`,
          value: function (e, t) {
            var n;
            if (M.isValidElement(e)) n = M.cloneElement(e, t);
            else if ((0, ae.default)(e)) n = e(t);
            else {
              var i = t.key,
                a = F(t, ce),
                o = r(
                  `recharts-line-dot`,
                  typeof e == `boolean` ? `` : e.className,
                );
              n = M.createElement(D, I({ key: i }, a, { className: o }));
            }
            return n;
          },
        },
      ],
    )
  );
})(M.PureComponent);
(Y(Q, `displayName`, `Line`),
  Y(Q, `defaultProps`, {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    fill: `#fff`,
    points: [],
    isAnimationActive: !g.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    hide: !1,
    label: !1,
  }),
  Y(Q, `getComposedData`, function (e) {
    var t = e.props,
      n = e.xAxis,
      r = e.yAxis,
      i = e.xAxisTicks,
      a = e.yAxisTicks,
      o = e.dataKey,
      s = e.bandSize,
      c = e.displayedData,
      l = e.offset,
      u = t.layout;
    return R(
      {
        points: c.map(function (e, t) {
          var c = T(e, o);
          return u === `horizontal`
            ? {
                x: E({ axis: n, ticks: i, bandSize: s, entry: e, index: t }),
                y: (0, N.default)(c) ? null : r.scale(c),
                value: c,
                payload: e,
              }
            : {
                x: (0, N.default)(c) ? null : n.scale(c),
                y: E({ axis: r, ticks: a, bandSize: s, entry: e, index: t }),
                value: c,
                payload: e,
              };
        }),
        layout: u,
      },
      l,
    );
  }));
var ge = re({
    chartName: `LineChart`,
    GraphicalChild: Q,
    axisComponents: [
      { axisType: `xAxis`, AxisComp: A },
      { axisType: `yAxis`, AxisComp: k },
    ],
    formatAxisMap: ne,
  }),
  $ = n(),
  _e = [
    {
      name: `Performance Sportswear`,
      growth: 34,
      demand: `Very High`,
      region: `Americas + EU`,
      trend: `up`,
    },
    {
      name: `Sustainable Denim`,
      growth: 28,
      demand: `High`,
      region: `EU + Asia`,
      trend: `up`,
    },
    {
      name: `Technical Textiles`,
      growth: 22,
      demand: `High`,
      region: `Global`,
      trend: `up`,
    },
    {
      name: `Linen & Natural Fibres`,
      growth: 18,
      demand: `High`,
      region: `EU + Oceania`,
      trend: `up`,
    },
    {
      name: `Athleisure Fabrics`,
      growth: 15,
      demand: `Medium-High`,
      region: `Global`,
      trend: `up`,
    },
    {
      name: `Conventional Cotton`,
      growth: -3,
      demand: `Medium`,
      region: `Global`,
      trend: `down`,
    },
    {
      name: `Fast Fashion Synthetics`,
      growth: -8,
      demand: `Low`,
      region: `Declining`,
      trend: `down`,
    },
    {
      name: `Wool Suiting`,
      growth: 6,
      demand: `Steady`,
      region: `EU + Japan`,
      trend: `up`,
    },
  ],
  ve = [
    { country: `Bangladesh`, exports: 42.6, change: 18.2 },
    { country: `Vietnam`, exports: 38.1, change: 12.4 },
    { country: `India`, exports: 31.4, change: 9.8 },
    { country: `China`, exports: 118.2, change: -2.1 },
    { country: `Turkey`, exports: 19.8, change: 7.3 },
    { country: `Pakistan`, exports: 14.2, change: 5.6 },
    { country: `Cambodia`, exports: 8.9, change: 14.7 },
    { country: `Indonesia`, exports: 11.3, change: 3.2 },
  ],
  ye = Array.from({ length: 12 }).map((e, t) => ({
    month: [
      `Jan`,
      `Feb`,
      `Mar`,
      `Apr`,
      `May`,
      `Jun`,
      `Jul`,
      `Aug`,
      `Sep`,
      `Oct`,
      `Nov`,
      `Dec`,
    ][t],
    sportswear: 80 + Math.sin(t / 2) * 8 + t * 2.2,
    sustainable: 60 + Math.sin(t / 3) * 6 + t * 1.8,
    technical: 55 + Math.sin(t / 4) * 4 + t * 1.4,
  })),
  be = [
    {
      signal: `EU demand for GOTS-certified fabric rising 22% QoQ — lock Q4 volumes now`,
      type: `opportunity`,
      confidence: 91,
    },
    {
      signal: `Bangladesh wage review scheduled Q3 may push garment costs up 4–6%`,
      type: `risk`,
      confidence: 84,
    },
    {
      signal: `China synthetic fibre overcapacity creating buyer-favourable pricing window`,
      type: `opportunity`,
      confidence: 78,
    },
    {
      signal: `Turkish denim orders fully booked through Q1 2027 — seek alternatives`,
      type: `alert`,
      confidence: 96,
    },
  ];
function xe() {
  return (0, $.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, $.jsx)(d, {
        eyebrow: `Intelligence`,
        title: `Market Intelligence`,
        description: `Global textile market trends, export momentum, category demand signals and AI-powered market insights.`,
      }),
      (0, $.jsxs)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-3`,
        children: [
          (0, $.jsx)(l, {
            label: `Global Trade Volume`,
            value: `$842B`,
            delta: { value: `+6.2% YoY`, positive: !0 },
            icon: (0, $.jsx)(a, { className: `h-4 w-4` }),
          }),
          (0, $.jsx)(l, {
            label: `Trending Categories`,
            value: `18`,
            delta: { value: `+3 new`, positive: !0 },
            icon: (0, $.jsx)(u, { className: `h-4 w-4` }),
          }),
          (0, $.jsx)(l, {
            label: `AI Signals Active`,
            value: `47`,
            hint: `updated hourly`,
            icon: (0, $.jsx)(o, { className: `h-4 w-4` }),
          }),
          (0, $.jsx)(l, {
            label: `Markets Covered`,
            value: `43`,
            hint: `countries`,
            icon: (0, $.jsx)(ie, { className: `h-4 w-4` }),
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, $.jsx)(`div`, {
            className: `text-[10px] font-mono uppercase tracking-widest text-primary`,
            children: `AI Market Signals · Live`,
          }),
          (0, $.jsx)(`div`, {
            className: `grid md:grid-cols-2 gap-3`,
            children: be.map((e, t) =>
              (0, $.jsx)(
                `div`,
                {
                  className: `rounded-lg border p-4 ${e.type === `opportunity` ? `border-success/30 bg-success/5` : e.type === `risk` ? `border-destructive/30 bg-destructive/5` : `border-warning/30 bg-warning/5`}`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex items-start gap-3`,
                    children: [
                      (0, $.jsx)(o, {
                        className: `h-4 w-4 shrink-0 mt-0.5 ${e.type === `opportunity` ? `text-success` : e.type === `risk` ? `text-destructive` : `text-warning`}`,
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex-1`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `text-sm text-foreground leading-snug`,
                            children: e.signal,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-3 mt-2`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${e.type === `opportunity` ? `border-success/30 text-success bg-success/10` : e.type === `risk` ? `border-destructive/30 text-destructive bg-destructive/10` : `border-warning/30 text-warning bg-warning/10`}`,
                                children: e.type,
                              }),
                              (0, $.jsxs)(`span`, {
                                className: `text-[10px] font-mono text-muted-foreground`,
                                children: [e.confidence, `% confidence`],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                t,
              ),
            ),
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `grid lg:grid-cols-3 gap-4`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `lg:col-span-2 rounded-lg border border-border bg-card p-5`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-[10px] font-mono uppercase tracking-widest text-primary mb-1`,
                children: `Demand Index`,
              }),
              (0, $.jsx)(`div`, {
                className: `font-display font-semibold mb-1`,
                children: `Category demand momentum · 12 months`,
              }),
              (0, $.jsxs)(`div`, {
                className: `flex gap-4 text-[10px] font-mono mb-4`,
                children: [
                  (0, $.jsxs)(`span`, {
                    className: `flex items-center gap-1.5 text-muted-foreground`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `h-2 w-2 rounded-sm`,
                        style: { background: `var(--chart-1)` },
                      }),
                      `Sportswear`,
                    ],
                  }),
                  (0, $.jsxs)(`span`, {
                    className: `flex items-center gap-1.5 text-muted-foreground`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `h-2 w-2 rounded-sm`,
                        style: { background: `var(--chart-2)` },
                      }),
                      `Sustainable`,
                    ],
                  }),
                  (0, $.jsxs)(`span`, {
                    className: `flex items-center gap-1.5 text-muted-foreground`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `h-2 w-2 rounded-sm`,
                        style: { background: `var(--chart-3)` },
                      }),
                      `Technical`,
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `h-56`,
                children: (0, $.jsx)(b, {
                  width: `100%`,
                  height: `100%`,
                  children: (0, $.jsxs)(ge, {
                    data: ye,
                    children: [
                      (0, $.jsx)(w, {
                        stroke: `var(--border)`,
                        strokeDasharray: `3 3`,
                        vertical: !1,
                      }),
                      (0, $.jsx)(A, {
                        dataKey: `month`,
                        stroke: `var(--muted-foreground)`,
                        fontSize: 11,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      (0, $.jsx)(k, {
                        stroke: `var(--muted-foreground)`,
                        fontSize: 11,
                        tickLine: !1,
                        axisLine: !1,
                      }),
                      (0, $.jsx)(x, {
                        contentStyle: {
                          background: `var(--popover)`,
                          border: `1px solid var(--border)`,
                          borderRadius: 8,
                          fontSize: 12,
                        },
                      }),
                      (0, $.jsx)(Q, {
                        type: `monotone`,
                        dataKey: `sportswear`,
                        stroke: `var(--chart-1)`,
                        strokeWidth: 2,
                        dot: !1,
                      }),
                      (0, $.jsx)(Q, {
                        type: `monotone`,
                        dataKey: `sustainable`,
                        stroke: `var(--chart-2)`,
                        strokeWidth: 2,
                        dot: !1,
                      }),
                      (0, $.jsx)(Q, {
                        type: `monotone`,
                        dataKey: `technical`,
                        stroke: `var(--chart-3)`,
                        strokeWidth: 2,
                        dot: !1,
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `rounded-lg border border-border bg-card p-5`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-[10px] font-mono uppercase tracking-widest text-primary mb-1`,
                children: `Export Momentum`,
              }),
              (0, $.jsx)(`div`, {
                className: `font-display font-semibold mb-4`,
                children: `Top exporters ($B, YoY %)`,
              }),
              (0, $.jsx)(`div`, {
                className: `space-y-3`,
                children: ve.map((e) =>
                  (0, $.jsxs)(
                    `div`,
                    {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-sm font-medium`,
                              children: e.country,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-xs font-mono text-muted-foreground`,
                              children: [`$`, e.exports, `B exports`],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-1 text-sm font-mono tabular-nums ${e.change >= 0 ? `text-success` : `text-destructive`}`,
                          children: [
                            e.change >= 0
                              ? (0, $.jsx)(s, { className: `h-3.5 w-3.5` })
                              : (0, $.jsx)(c, { className: `h-3.5 w-3.5` }),
                            Math.abs(e.change),
                            `%`,
                          ],
                        }),
                      ],
                    },
                    e.country,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `rounded-lg border border-border bg-card overflow-hidden`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `p-4 border-b border-border`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-[10px] font-mono uppercase tracking-widest text-primary`,
                children: `Category Intelligence`,
              }),
              (0, $.jsx)(`div`, {
                className: `font-display font-semibold`,
                children: `Trending textile categories`,
              }),
            ],
          }),
          (0, $.jsxs)(`div`, {
            className: `divide-y divide-border`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30`,
                children: [
                  (0, $.jsx)(`div`, {
                    className: `col-span-4`,
                    children: `Category`,
                  }),
                  (0, $.jsx)(`div`, {
                    className: `col-span-3`,
                    children: `Region`,
                  }),
                  (0, $.jsx)(`div`, {
                    className: `col-span-2`,
                    children: `Demand`,
                  }),
                  (0, $.jsx)(`div`, {
                    className: `col-span-2 text-right`,
                    children: `YoY Growth`,
                  }),
                  (0, $.jsx)(`div`, {
                    className: `col-span-1 text-right`,
                    children: `Trend`,
                  }),
                ],
              }),
              _e.map((e) =>
                (0, $.jsxs)(
                  `div`,
                  {
                    className: `grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `col-span-4 font-medium`,
                        children: e.name,
                      }),
                      (0, $.jsx)(`div`, {
                        className: `col-span-3 text-xs text-muted-foreground`,
                        children: e.region,
                      }),
                      (0, $.jsx)(`div`, {
                        className: `col-span-2 text-xs text-muted-foreground`,
                        children: e.demand,
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `col-span-2 text-right font-mono tabular-nums font-semibold ${e.growth >= 0 ? `text-success` : `text-destructive`}`,
                        children: [e.growth >= 0 ? `+` : ``, e.growth, `%`],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `col-span-1 flex justify-end`,
                        children:
                          e.trend === `up`
                            ? (0, $.jsx)(s, {
                                className: `h-4 w-4 text-success`,
                              })
                            : (0, $.jsx)(c, {
                                className: `h-4 w-4 text-destructive`,
                              }),
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
export { xe as component };
