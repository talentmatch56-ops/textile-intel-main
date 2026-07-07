import { a as e, n as t, t as n } from "./jsx-runtime-n5LQ9ujS.js";
import { t as r } from "./react-dom-CQmWuZA8.js";
import { E as i, T as a, w as o } from "./index-B8EwVZTI.js";
import { i as s, r as c } from "./button-CoQ0AAlw.js";
import { n as l, t as u } from "./dist-C1qB0g71.js";
var d = e(t(), 1);
typeof window < `u` && window.document && window.document.createElement;
function f(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
  };
}
var p = n();
function m(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = d.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = (t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = d.useMemo(() => o, Object.values(o));
      return (0, p.jsx)(s.Provider, { value: c, children: r });
    };
    o.displayName = t + `Provider`;
    function s(n, o) {
      let s = o?.[e]?.[a] || i,
        c = d.useContext(s);
      if (c) return c;
      if (r !== void 0) return r;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [o, s];
  }
  let i = () => {
    let t = n.map((e) => d.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return ((i.scopeName = e), [r, h(i, ...t)]);
}
function h(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var g = globalThis?.document ? d.useLayoutEffect : () => {},
  _ = d.useId || (() => void 0),
  v = 0;
function y(e) {
  let [t, n] = d.useState(_());
  return (
    g(() => {
      e || n((e) => e ?? String(v++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
var b = d.useEffectEvent,
  x = d.useInsertionEffect;
function ee(e) {
  if (typeof b == `function`) return b(e);
  let t = d.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof x == `function`
      ? x(() => {
          t.current = e;
        })
      : g(() => {
          t.current = e;
        }),
    d.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var te = d.useInsertionEffect || g;
function S({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = C({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : i;
  {
    let t = d.useRef(e !== void 0);
    d.useEffect(() => {
      let e = t.current;
      (e !== s &&
        console.warn(
          `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${s ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (t.current = s));
    }, [s, r]);
  }
  return [
    c,
    d.useCallback(
      (t) => {
        if (s) {
          let n = w(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
function C({ defaultProp: e, onChange: t }) {
  let [n, r] = d.useState(e),
    i = d.useRef(n),
    a = d.useRef(t);
  return (
    te(() => {
      a.current = t;
    }, [t]),
    d.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
function w(e) {
  return typeof e == `function`;
}
function T(e) {
  let t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var E = `DismissableLayer`,
  ne = `dismissableLayer.update`,
  re = `dismissableLayer.pointerDownOutside`,
  D = `dismissableLayer.focusOutside`,
  ie,
  O = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  k = d.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        deferPointerDownOutside: r = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: o,
        onInteractOutside: c,
        onDismiss: l,
        ...m
      } = e,
      h = d.useContext(O),
      [g, _] = d.useState(null),
      v = g?.ownerDocument ?? globalThis?.document,
      [, y] = d.useState({}),
      b = s(t, _),
      x = Array.from(h.layers),
      [te] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = x.indexOf(te),
      C = g ? x.indexOf(g) : -1,
      w = h.layersWithOutsidePointerEventsDisabled.size > 0,
      T = C >= S,
      E = d.useRef(!1),
      re = ce(
        (e) => {
          let t = e.target;
          if (!(t instanceof Node)) return;
          let n = [...h.branches].some((e) => e.contains(t));
          !T || n || (a?.(e), c?.(e), e.defaultPrevented || l?.());
        },
        {
          ownerDocument: v,
          deferPointerDownOutside: r,
          isDeferredPointerDownOutsideRef: E,
          dismissableSurfaces: h.dismissableSurfaces,
        },
      ),
      D = le((e) => {
        if (r && E.current) return;
        let t = e.target;
        [...h.branches].some((e) => e.contains(t)) ||
          (o?.(e), c?.(e), e.defaultPrevented || l?.());
      }, v),
      k = g ? C === x.length - 1 : !1,
      ae = ee((e) => {
        e.key === `Escape` &&
          (i?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
      });
    return (
      d.useEffect(() => {
        if (k)
          return (
            v.addEventListener(`keydown`, ae, { capture: !0 }),
            () => v.removeEventListener(`keydown`, ae, { capture: !0 })
          );
      }, [v, k]),
      d.useEffect(() => {
        if (g)
          return (
            n &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ie = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = `none`)),
              h.layersWithOutsidePointerEventsDisabled.add(g)),
            h.layers.add(g),
            ue(),
            () => {
              n &&
                (h.layersWithOutsidePointerEventsDisabled.delete(g),
                h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  (v.body.style.pointerEvents = ie));
            }
          );
      }, [g, v, n, h]),
      d.useEffect(
        () => () => {
          g &&
            (h.layers.delete(g),
            h.layersWithOutsidePointerEventsDisabled.delete(g),
            ue());
        },
        [g, h],
      ),
      d.useEffect(() => {
        let e = () => y({});
        return (
          document.addEventListener(ne, e),
          () => document.removeEventListener(ne, e)
        );
      }, []),
      (0, p.jsx)(u.div, {
        ...m,
        ref: b,
        style: {
          pointerEvents: w ? (T ? `auto` : `none`) : void 0,
          ...e.style,
        },
        onFocusCapture: f(e.onFocusCapture, D.onFocusCapture),
        onBlurCapture: f(e.onBlurCapture, D.onBlurCapture),
        onPointerDownCapture: f(
          e.onPointerDownCapture,
          re.onPointerDownCapture,
        ),
      })
    );
  });
k.displayName = E;
var ae = `DismissableLayerBranch`,
  oe = d.forwardRef((e, t) => {
    let n = d.useContext(O),
      r = d.useRef(null),
      i = s(t, r);
    return (
      d.useEffect(() => {
        let e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, p.jsx)(u.div, { ...e, ref: i })
    );
  });
oe.displayName = ae;
function se() {
  let e = d.useContext(O),
    [t, n] = d.useState(null);
  return (
    d.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
function ce(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
    } = t,
    o = T(e),
    s = d.useRef(!1),
    c = d.useRef(!1),
    l = d.useRef(new Map()),
    u = d.useRef(() => {});
  return (
    d.useEffect(() => {
      function e() {
        ((c.current = !1), (i.current = !1), l.current.clear());
      }
      function t() {
        return Array.from(l.current.values()).some(Boolean);
      }
      function d(e) {
        if (!c.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          l.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              c.current && u.current();
            }, 0));
      }
      function f(e) {
        c.current && l.current.set(e.type, !1);
      }
      let p = (a) => {
          if (a.target && !s.current) {
            let s = function () {
                n.removeEventListener(`click`, u.current);
                let r = t();
                (e(), r || de(re, o, d, { discrete: !0 }));
              },
              d = { originalEvent: a };
            ((c.current = !0),
              (i.current = r && a.button === 0),
              l.current.clear(),
              !r || a.button !== 0
                ? s()
                : (n.removeEventListener(`click`, u.current),
                  (u.current = s),
                  n.addEventListener(`click`, u.current, { once: !0 })));
          } else (n.removeEventListener(`click`, u.current), e());
          s.current = !1;
        },
        m = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of m) (n.addEventListener(e, d, !0), n.addEventListener(e, f));
      let h = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, p);
      }, 0);
      return () => {
        (window.clearTimeout(h),
          n.removeEventListener(`pointerdown`, p),
          n.removeEventListener(`click`, u.current));
        for (let e of m)
          (n.removeEventListener(e, d, !0), n.removeEventListener(e, f));
      };
    }, [n, o, r, i, a]),
    { onPointerDownCapture: () => (s.current = !0) }
  );
}
function le(e, t = globalThis?.document) {
  let n = T(e),
    r = d.useRef(!1);
  return (
    d.useEffect(() => {
      let e = (e) => {
        e.target &&
          !r.current &&
          de(D, n, { originalEvent: e }, { discrete: !1 });
      };
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function ue() {
  let e = new CustomEvent(ne);
  document.dispatchEvent(e);
}
function de(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? l(i, a) : i.dispatchEvent(a));
}
var fe = `focusScope.autoFocusOnMount`,
  pe = `focusScope.autoFocusOnUnmount`,
  me = { bubbles: !1, cancelable: !0 },
  he = `FocusScope`,
  ge = d.forwardRef((e, t) => {
    let {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        ...o
      } = e,
      [c, l] = d.useState(null),
      f = T(i),
      m = T(a),
      h = d.useRef(null),
      g = s(t, l),
      _ = d.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (d.useEffect(() => {
      if (r) {
        let e = function (e) {
            if (_.paused || !c) return;
            let t = e.target;
            c.contains(t) ? (h.current = t) : A(h.current, { select: !0 });
          },
          t = function (e) {
            if (_.paused || !c) return;
            let t = e.relatedTarget;
            t !== null && (c.contains(t) || A(h.current, { select: !0 }));
          },
          n = function (e) {
            if (document.activeElement === document.body)
              for (let t of e) t.removedNodes.length > 0 && A(c);
          };
        (document.addEventListener(`focusin`, e),
          document.addEventListener(`focusout`, t));
        let r = new MutationObserver(n);
        return (
          c && r.observe(c, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener(`focusin`, e),
              document.removeEventListener(`focusout`, t),
              r.disconnect());
          }
        );
      }
    }, [r, c, _.paused]),
      d.useEffect(() => {
        if (c) {
          Ce.add(_);
          let e = document.activeElement;
          if (!c.contains(e)) {
            let t = new CustomEvent(fe, me);
            (c.addEventListener(fe, f),
              c.dispatchEvent(t),
              t.defaultPrevented ||
                (_e(Ee(ye(c)), { select: !0 }),
                document.activeElement === e && A(c)));
          }
          return () => {
            (c.removeEventListener(fe, f),
              setTimeout(() => {
                let t = new CustomEvent(pe, me);
                (c.addEventListener(pe, m),
                  c.dispatchEvent(t),
                  t.defaultPrevented || A(e ?? document.body, { select: !0 }),
                  c.removeEventListener(pe, m),
                  Ce.remove(_));
              }, 0));
          };
        }
      }, [c, f, m, _]));
    let v = d.useCallback(
      (e) => {
        if ((!n && !r) || _.paused) return;
        let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
          i = document.activeElement;
        if (t && i) {
          let t = e.currentTarget,
            [r, a] = ve(t);
          r && a
            ? !e.shiftKey && i === a
              ? (e.preventDefault(), n && A(r, { select: !0 }))
              : e.shiftKey &&
                i === r &&
                (e.preventDefault(), n && A(a, { select: !0 }))
            : i === t && e.preventDefault();
        }
      },
      [n, r, _.paused],
    );
    return (0, p.jsx)(u.div, { tabIndex: -1, ...o, ref: g, onKeyDown: v });
  });
ge.displayName = he;
function _e(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((A(r, { select: t }), document.activeElement !== n)) return;
}
function ve(e) {
  let t = ye(e);
  return [be(t, e), be(t.reverse(), e)];
}
function ye(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function be(e, t) {
  for (let n of e) if (!xe(n, { upTo: t })) return n;
}
function xe(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
function Se(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
function A(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Se(e) && t && e.select());
  }
}
var Ce = we();
function we() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = Te(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Te(e, t)), e[0]?.resume());
    },
  };
}
function Te(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function Ee(e) {
  return e.filter((e) => e.tagName !== `A`);
}
var De = e(r(), 1),
  Oe = `Portal`,
  j = d.forwardRef((e, t) => {
    let { container: n, ...r } = e,
      [i, a] = d.useState(!1);
    g(() => a(!0), []);
    let o = n || (i && globalThis?.document?.body);
    return o ? De.createPortal((0, p.jsx)(u.div, { ...r, ref: t }), o) : null;
  });
j.displayName = Oe;
function ke(e, t) {
  return d.useReducer((e, n) => t[e][n] ?? e, e);
}
var M = (e) => {
  let { present: t, children: n } = e,
    r = Ae(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : d.Children.only(n),
    a = Me(r.ref, Ne(i));
  return typeof n == `function` || r.isPresent
    ? d.cloneElement(i, { ref: a })
    : null;
};
M.displayName = `Presence`;
function Ae(e) {
  let [t, n] = d.useState(),
    r = d.useRef(null),
    i = d.useRef(e),
    a = d.useRef(`none`),
    [o, s] = ke(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    d.useEffect(() => {
      let e = N(r.current);
      a.current = o === `mounted` ? e : `none`;
    }, [o]),
    g(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          o = N(t);
        (e
          ? s(`MOUNT`)
          : o === `none` || t?.display === `none`
            ? s(`UNMOUNT`)
            : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, s]),
    g(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = (a) => {
            let o = N(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          },
          c = (e) => {
            e.target === t && (a.current = N(r.current));
          };
        return (
          t.addEventListener(`animationstart`, c),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, c),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      } else s(`ANIMATION_END`);
    }, [t, s]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(o),
      ref: d.useCallback((e) => {
        ((r.current = e ? getComputedStyle(e) : null), n(e));
      }, []),
    }
  );
}
function je(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function Me(...e) {
  let t = d.useRef(e);
  return (
    (t.current = e),
    d.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = je(t, e);
          return (!r && typeof n == `function` && (r = !0), n);
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : je(n[e], null);
          }
        };
    }, [])
  );
}
function N(e) {
  return e?.animationName || `none`;
}
function Ne(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var P = 0,
  F = null;
function Pe() {
  d.useEffect(() => {
    F ||= { start: Fe(), end: Fe() };
    let { start: e, end: t } = F;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      P++,
      () => {
        (P === 1 && (F?.start.remove(), F?.end.remove(), (F = null)),
          (P = Math.max(0, P - 1)));
      }
    );
  }, []);
}
function Fe() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
var I = `right-scroll-bar-position`,
  L = `width-before-scroll-bar`,
  Ie = `with-scroll-bars-hidden`,
  Le = `--removed-body-scroll-bar-size`;
function R(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
function Re(e, t) {
  var n = (0, d.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var ze = typeof window < `u` ? d.useLayoutEffect : d.useEffect,
  Be = new WeakMap();
function Ve(e, t) {
  var n = Re(t || null, function (t) {
    return e.forEach(function (e) {
      return R(e, t);
    });
  });
  return (
    ze(
      function () {
        var t = Be.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || R(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || R(e, a);
            }));
        }
        Be.set(n, e);
      },
      [e],
    ),
    n
  );
}
function He(e) {
  return e;
}
function Ue(e, t) {
  t === void 0 && (t = He);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function We(e) {
  e === void 0 && (e = {});
  var t = Ue(null);
  return ((t.options = o({ async: !0, ssr: !1 }, e)), t);
}
var Ge = function (e) {
  var t = e.sideCar,
    n = a(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw Error(`Sidecar medium not found`);
  return d.createElement(r, o({}, n));
};
Ge.isSideCarExport = !0;
function Ke(e, t) {
  return (e.useMedium(t), Ge);
}
var qe = We(),
  z = function () {},
  B = d.forwardRef(function (e, t) {
    var n = d.useRef(null),
      r = d.useState({
        onScrollCapture: z,
        onWheelCapture: z,
        onTouchMoveCapture: z,
      }),
      i = r[0],
      s = r[1],
      c = e.forwardProps,
      l = e.children,
      u = e.className,
      f = e.removeScrollBar,
      p = e.enabled,
      m = e.shards,
      h = e.sideCar,
      g = e.noRelative,
      _ = e.noIsolation,
      v = e.inert,
      y = e.allowPinchZoom,
      b = e.as,
      x = b === void 0 ? `div` : b,
      ee = e.gapMode,
      te = a(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      S = h,
      C = Ve([n, t]),
      w = o(o({}, te), i);
    return d.createElement(
      d.Fragment,
      null,
      p &&
        d.createElement(S, {
          sideCar: qe,
          removeScrollBar: f,
          shards: m,
          noRelative: g,
          noIsolation: _,
          inert: v,
          setCallbacks: s,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: ee,
        }),
      c
        ? d.cloneElement(d.Children.only(l), o(o({}, w), { ref: C }))
        : d.createElement(x, o({}, w, { className: u, ref: C }), l),
    );
  });
((B.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (B.classNames = { fullWidth: L, zeroRight: I }));
var Je,
  Ye = function () {
    if (Je) return Je;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function Xe() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = Ye();
  return (t && e.setAttribute(`nonce`, t), e);
}
function Ze(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Qe(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var $e = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Xe()) && (Ze(t, n), Qe(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  et = function () {
    var e = $e();
    return function (t, n) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  tt = function () {
    var e = et();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return (e(n, r), null);
    };
  },
  nt = { left: 0, top: 0, right: 0, gap: 0 },
  V = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  rt = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [V(n), V(r), V(i)];
  },
  it = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return nt;
    var t = rt(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  at = tt(),
  H = `data-scroll-locked`,
  ot = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${Ie} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${H}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${I} {
    right: ${s}px ${r};
  }
  
  .${L} {
    margin-right: ${s}px ${r};
  }
  
  .${I} .${I} {
    right: 0 ${r};
  }
  
  .${L} .${L} {
    margin-right: 0 ${r};
  }
  
  body[${H}] {
    ${Le}: ${s}px;
  }
`
    );
  },
  st = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    );
    return isFinite(e) ? e : 0;
  },
  ct = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(H, (st() + 1).toString()),
        function () {
          var e = st() - 1;
          e <= 0
            ? document.body.removeAttribute(H)
            : document.body.setAttribute(H, e.toString());
        }
      );
    }, []);
  },
  lt = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    ct();
    var a = d.useMemo(
      function () {
        return it(i);
      },
      [i],
    );
    return d.createElement(at, { styles: ot(a, !t, i, n ? `` : `!important`) });
  },
  ut = !1;
if (typeof window < `u`)
  try {
    var U = Object.defineProperty({}, "passive", {
      get: function () {
        return ((ut = !0), !0);
      },
    });
    (window.addEventListener(`test`, U, U),
      window.removeEventListener(`test`, U, U));
  } catch {
    ut = !1;
  }
var W = ut ? { passive: !1 } : !1,
  dt = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  ft = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !dt(e) && n[t] === `visible`)
    );
  },
  pt = function (e) {
    return ft(e, `overflowY`);
  },
  mt = function (e) {
    return ft(e, `overflowX`);
  },
  ht = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        vt(e, r))
      ) {
        var i = yt(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  gt = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  _t = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  vt = function (e, t) {
    return e === `v` ? pt(t) : mt(t);
  },
  yt = function (e, t) {
    return e === `v` ? gt(t) : _t(t);
  },
  bt = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  xt = function (e, t, n, r, i) {
    var a = bt(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = yt(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && vt(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  G = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  St = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ct = function (e) {
    return e && `current` in e ? e.current : e;
  },
  wt = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Tt = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  Et = 0,
  K = [];
function Dt(e) {
  var t = d.useRef([]),
    n = d.useRef([0, 0]),
    r = d.useRef(),
    a = d.useState(Et++)[0],
    o = d.useState(tt)[0],
    s = d.useRef(e);
  (d.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${a}`);
          var t = i([e.lockRef.current], (e.shards || []).map(Ct), !0).filter(
            Boolean,
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${a}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${a}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${a}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var c = d.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var i = G(e),
        a = n.current,
        o = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(o) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = ht(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = ht(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (o || c) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return xt(h, t, e, h === `h` ? o : c, !0);
    }, []),
    l = d.useCallback(function (e) {
      var n = e;
      if (!(!K.length || K[K.length - 1] !== o)) {
        var r = `deltaY` in n ? St(n) : G(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              wt(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var a = (s.current.shards || [])
            .map(Ct)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    u = d.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: Ot(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    f = d.useCallback(function (e) {
      ((n.current = G(e)), (r.current = void 0));
    }, []),
    p = d.useCallback(function (t) {
      u(t.type, St(t), t.target, c(t, e.lockRef.current));
    }, []),
    m = d.useCallback(function (t) {
      u(t.type, G(t), t.target, c(t, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      K.push(o),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: m,
      }),
      document.addEventListener(`wheel`, l, W),
      document.addEventListener(`touchmove`, l, W),
      document.addEventListener(`touchstart`, f, W),
      function () {
        ((K = K.filter(function (e) {
          return e !== o;
        })),
          document.removeEventListener(`wheel`, l, W),
          document.removeEventListener(`touchmove`, l, W),
          document.removeEventListener(`touchstart`, f, W));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    g ? d.createElement(o, { styles: Tt(a) }) : null,
    h
      ? d.createElement(lt, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Ot(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
var kt = Ke(qe, Dt),
  At = d.forwardRef(function (e, t) {
    return d.createElement(B, o({}, e, { ref: t, sideCar: kt }));
  });
At.classNames = B.classNames;
var jt = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  q = new WeakMap(),
  J = new WeakMap(),
  Y = {},
  Mt = 0,
  Nt = function (e) {
    return e && (e.host || Nt(e.parentNode));
  },
  Pt = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = Nt(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  Ft = function (e, t, n, r) {
    var i = Pt(t, Array.isArray(e) ? e : [e]);
    Y[n] || (Y[n] = new WeakMap());
    var a = Y[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (q.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (q.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && J.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`));
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      Mt++,
      function () {
        (o.forEach(function (e) {
          var t = q.get(e) - 1,
            i = a.get(e) - 1;
          (q.set(e, t),
            a.set(e, i),
            t || (J.has(e) || e.removeAttribute(r), J.delete(e)),
            i || e.removeAttribute(n));
        }),
          Mt--,
          Mt ||
            ((q = new WeakMap()),
            (q = new WeakMap()),
            (J = new WeakMap()),
            (Y = {})));
      }
    );
  },
  It = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || jt(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        Ft(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  X = `Dialog`,
  [Lt, Rt] = m(X),
  [zt, Z] = Lt(X),
  Bt = (e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = d.useRef(null),
      c = d.useRef(null),
      [l, u] = S({ prop: r, defaultProp: i ?? !1, onChange: a, caller: X });
    return (0, p.jsx)(zt, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: y(),
      titleId: y(),
      descriptionId: y(),
      open: l,
      onOpenChange: u,
      onOpenToggle: d.useCallback(() => u((e) => !e), [u]),
      modal: o,
      children: n,
    });
  };
Bt.displayName = X;
var Vt = `DialogTrigger`,
  Ht = d.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Z(Vt, n),
      a = s(t, i.triggerRef);
    return (0, p.jsx)(u.button, {
      type: `button`,
      "aria-haspopup": `dialog`,
      "aria-expanded": i.open,
      "aria-controls": i.open ? i.contentId : void 0,
      "data-state": sn(i.open),
      ...r,
      ref: a,
      onClick: f(e.onClick, i.onOpenToggle),
    });
  });
Ht.displayName = Vt;
var Ut = `DialogPortal`,
  [Wt, Gt] = Lt(Ut, { forceMount: void 0 }),
  Kt = (e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = Z(Ut, t);
    return (0, p.jsx)(Wt, {
      scope: t,
      forceMount: n,
      children: d.Children.map(r, (e) =>
        (0, p.jsx)(M, {
          present: n || a.open,
          children: (0, p.jsx)(j, { asChild: !0, container: i, children: e }),
        }),
      ),
    });
  };
Kt.displayName = Ut;
var Q = `DialogOverlay`,
  qt = d.forwardRef((e, t) => {
    let n = Gt(Q, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Z(Q, e.__scopeDialog);
    return a.modal
      ? (0, p.jsx)(M, {
          present: r || a.open,
          children: (0, p.jsx)(Yt, { ...i, ref: t }),
        })
      : null;
  });
qt.displayName = Q;
var Jt = c(`DialogOverlay.RemoveScroll`),
  Yt = d.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Z(Q, n),
      a = s(t, se());
    return (0, p.jsx)(At, {
      as: Jt,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: (0, p.jsx)(u.div, {
        "data-state": sn(i.open),
        ...r,
        ref: a,
        style: { pointerEvents: `auto`, ...r.style },
      }),
    });
  }),
  $ = `DialogContent`,
  Xt = d.forwardRef((e, t) => {
    let n = Gt($, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Z($, e.__scopeDialog);
    return (0, p.jsx)(M, {
      present: r || a.open,
      children: a.modal
        ? (0, p.jsx)(Zt, { ...i, ref: t })
        : (0, p.jsx)(Qt, { ...i, ref: t }),
    });
  });
Xt.displayName = $;
var Zt = d.forwardRef((e, t) => {
    let n = Z($, e.__scopeDialog),
      r = d.useRef(null),
      i = s(t, n.contentRef, r);
    return (
      d.useEffect(() => {
        let e = r.current;
        if (e) return It(e);
      }, []),
      (0, p.jsx)($t, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: f(e.onCloseAutoFocus, (e) => {
          (e.preventDefault(), n.triggerRef.current?.focus());
        }),
        onPointerDownOutside: f(e.onPointerDownOutside, (e) => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0;
          (t.button === 2 || n) && e.preventDefault();
        }),
        onFocusOutside: f(e.onFocusOutside, (e) => e.preventDefault()),
      })
    );
  }),
  Qt = d.forwardRef((e, t) => {
    let n = Z($, e.__scopeDialog),
      r = d.useRef(!1),
      i = d.useRef(!1);
    return (0, p.jsx)($t, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (t) => {
        (e.onCloseAutoFocus?.(t),
          t.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = !1),
          (i.current = !1));
      },
      onInteractOutside: (t) => {
        (e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = !0),
            t.detail.originalEvent.type === `pointerdown` && (i.current = !0)));
        let a = t.target;
        (n.triggerRef.current?.contains(a) && t.preventDefault(),
          t.detail.originalEvent.type === `focusin` &&
            i.current &&
            t.preventDefault());
      },
    });
  }),
  $t = d.forwardRef((e, t) => {
    let {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        ...o
      } = e,
      s = Z($, n);
    return (
      Pe(),
      (0, p.jsx)(p.Fragment, {
        children: (0, p.jsx)(ge, {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: (0, p.jsx)(k, {
            role: `dialog`,
            id: s.contentId,
            "aria-describedby": s.descriptionId,
            "aria-labelledby": s.titleId,
            "data-state": sn(s.open),
            ...o,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => s.onOpenChange(!1),
          }),
        }),
      })
    );
  }),
  en = `DialogTitle`,
  tn = d.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Z(en, n);
    return (0, p.jsx)(u.h2, { id: i.titleId, ...r, ref: t });
  });
tn.displayName = en;
var nn = `DialogDescription`,
  rn = d.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Z(nn, n);
    return (0, p.jsx)(u.p, { id: i.descriptionId, ...r, ref: t });
  });
rn.displayName = nn;
var an = `DialogClose`,
  on = d.forwardRef((e, t) => {
    let { __scopeDialog: n, ...r } = e,
      i = Z(an, n);
    return (0, p.jsx)(u.button, {
      type: `button`,
      ...r,
      ref: t,
      onClick: f(e.onClick, () => i.onOpenChange(!1)),
    });
  });
on.displayName = an;
function sn(e) {
  return e ? `open` : `closed`;
}
export {
  S as _,
  qt as a,
  m as b,
  Ht as c,
  Pe as d,
  M as f,
  T as g,
  k as h,
  rn as i,
  It as l,
  ge as m,
  on as n,
  Kt as o,
  j as p,
  Xt as r,
  tn as s,
  Bt as t,
  At as u,
  y as v,
  f as x,
  g as y,
};
