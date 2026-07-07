import { a as e, n as t, t as n } from "./jsx-runtime-n5LQ9ujS.js";
import {
  C as r,
  a as i,
  i as a,
  n as o,
  o as s,
  r as c,
  t as l,
} from "./index-B8EwVZTI.js";
import { r as u, t as d } from "./utils-DbbrEv-p.js";
import { t as f } from "./chart-column-eROrQ7Tt.js";
import { t as p } from "./sparkles-D9JfmPPi.js";
import { t as m } from "./building-2-CXtiLEWT.js";
import {
  a as h,
  i as g,
  n as _,
  r as v,
  t as y,
} from "./dropdown-menu-CWAGMmn8.js";
import { t as b } from "./clipboard-list-CqMyINXY.js";
import { t as x } from "./download-B4t8_M7W.js";
import { t as S } from "./file-text-B5lTvAwQ.js";
import { t as C } from "./git-compare-BHx0fE6E.js";
import { t as w } from "./message-square-B20EOjmZ.js";
import { t as T } from "./newspaper-BWNPBK5O.js";
import { t as E } from "./radar-BYXsYask.js";
import { t as D } from "./search-Cr1alROc.js";
import { t as O } from "./shield-alert-9Y_5-gpD.js";
import { t as k } from "./trending-up-B4RhHAzP.js";
import { t as A } from "./button-CoQ0AAlw.js";
import { n as j, o as M, t as N } from "./sheet-RFeW-6F5.js";
function P(e) {
  let t = s({ warn: e?.router === void 0 }),
    n = e?.router || t;
  return a(n.stores.__store, o(e, n));
}
var F = u(`bell`, [
    [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
    [
      `path`,
      {
        d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
        key: `11g9vi`,
      },
    ],
  ]),
  ee = u(`command`, [
    [
      `path`,
      {
        d: `M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3`,
        key: `11bfej`,
      },
    ],
  ]),
  I = u(`layout-dashboard`, [
    [
      `rect`,
      { width: `7`, height: `9`, x: `3`, y: `3`, rx: `1`, key: `10lvy0` },
    ],
    [
      `rect`,
      { width: `7`, height: `5`, x: `14`, y: `3`, rx: `1`, key: `16une8` },
    ],
    [
      `rect`,
      { width: `7`, height: `9`, x: `14`, y: `12`, rx: `1`, key: `1hutg5` },
    ],
    [
      `rect`,
      { width: `7`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `ldoo1y` },
    ],
  ]),
  L = u(`map`, [
    [
      `path`,
      {
        d: `M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,
        key: `169xi5`,
      },
    ],
    [`path`, { d: `M15 5.764v15`, key: `1pn4in` }],
    [`path`, { d: `M9 3.236v15`, key: `1uimfh` }],
  ]),
  R = u(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  z = u(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  B = e(t(), 1),
  V = [
    { to: `/app`, label: `Dashboard`, icon: I, section: `core` },
    { to: `/app/companies`, label: `Companies`, icon: m, section: `core` },
    {
      to: `/app/search`,
      label: `Smart Search`,
      icon: D,
      section: `core`,
      badge: `AI`,
    },
    {
      to: `/app/chat`,
      label: `AI Assistant`,
      icon: w,
      section: `core`,
      badge: `AI`,
    },
    {
      to: `/app/discovery`,
      label: `Discovery`,
      icon: E,
      section: `intel`,
      badge: `AI`,
    },
    { to: `/app/compare`, label: `Compare`, icon: C, section: `intel` },
    {
      to: `/app/risk`,
      label: `Risk Engine`,
      icon: O,
      section: `intel`,
      badge: `AI`,
    },
    { to: `/app/prices`, label: `Price Intel`, icon: k, section: `intel` },
    { to: `/app/market`, label: `Market Intel`, icon: p, section: `intel` },
    { to: `/app/news`, label: `News`, icon: T, section: `intel` },
    {
      to: `/app/procurement`,
      label: `Procurement`,
      icon: b,
      section: `workflow`,
      badge: `AI`,
    },
    { to: `/app/reports`, label: `Reports`, icon: S, section: `workflow` },
    { to: `/app/map`, label: `World Map`, icon: L, section: `workflow` },
    { to: `/app/analytics`, label: `Analytics`, icon: f, section: `workflow` },
    { to: `/app/admin`, label: `Admin`, icon: z, section: `admin` },
  ],
  H = {
    core: `Command Center`,
    intel: `Intelligence`,
    workflow: `Workflows`,
    admin: `System`,
  };
function U() {
  let [e, t] = (0, B.useState)(null),
    [n, r] = (0, B.useState)(!1);
  return (
    (0, B.useEffect)(() => {
      let e = (e) => {
        (e.preventDefault(), t(e), r(!0));
      };
      return (
        window.addEventListener(`beforeinstallprompt`, e),
        window.matchMedia(`(display-mode: standalone)`).matches && r(!1),
        () => {
          window.removeEventListener(`beforeinstallprompt`, e);
        }
      );
    }, []),
    {
      isInstallable: n,
      install: async () => {
        if (!e) return;
        await e.prompt();
        let { outcome: n } = await e.userChoice;
        (console.log(`User response to the install prompt: ${n}`),
          t(null),
          r(!1));
      },
    }
  );
}
var W = n();
function G() {
  return (0, W.jsxs)(`aside`, {
    className: `hidden md:flex w-60 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground`,
    children: [
      (0, W.jsxs)(`div`, {
        className: `h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border`,
        children: [
          (0, W.jsx)(`img`, {
            src: `/gmintel_logo.png`,
            alt: `GMIntel Logo`,
            className: `h-7 w-7 rounded-md object-cover border border-border/50`,
          }),
          (0, W.jsxs)(`div`, {
            children: [
              (0, W.jsx)(`div`, {
                className: `font-display text-sm font-bold leading-none`,
                children: `GMIntel`,
              }),
              (0, W.jsx)(`div`, {
                className: `text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5`,
                children: `Textile · AI`,
              }),
            ],
          }),
        ],
      }),
      (0, W.jsx)(K, {}),
      (0, W.jsx)(`div`, {
        className: `border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground`,
        children: (0, W.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, W.jsx)(`span`, {
              className: `h-1.5 w-1.5 rounded-full bg-success animate-pulse`,
            }),
            `LIVE · v1.0`,
          ],
        }),
      }),
    ],
  });
}
function K({ onItemClick: e }) {
  let t = P({ select: (e) => e.location.pathname }),
    { isInstallable: n, install: r } = U();
  return (0, W.jsxs)(`div`, {
    className: `flex-1 flex flex-col justify-between overflow-hidden`,
    children: [
      (0, W.jsx)(`nav`, {
        className: `flex-1 overflow-y-auto py-3 px-2 space-y-4`,
        children: [`core`, `intel`, `workflow`, `admin`]
          .map((e) => ({
            key: e,
            label: H[e],
            items: V.filter((t) => t.section === e),
          }))
          .map((n) =>
            (0, W.jsxs)(
              `div`,
              {
                children: [
                  (0, W.jsx)(`div`, {
                    className: `px-3 pb-1.5 text-[10px] uppercase tracking-widest text-muted-foreground/70 font-medium`,
                    children: n.label,
                  }),
                  (0, W.jsx)(`div`, {
                    className: `space-y-0.5`,
                    children: n.items.map((n) =>
                      (0, W.jsx)(
                        J,
                        { item: n, active: q(t, n.to), onClick: e },
                        n.to,
                      ),
                    ),
                  }),
                ],
              },
              n.key,
            ),
          ),
      }),
      n &&
        (0, W.jsxs)(`div`, {
          className: `mx-2 mb-3 p-3 rounded-lg border border-border bg-muted/30 space-y-2`,
          children: [
            (0, W.jsx)(`div`, {
              className: `text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-semibold`,
              children: `Offline Access Available`,
            }),
            (0, W.jsxs)(`button`, {
              onClick: () => {
                (r(), e && e());
              },
              className: `w-full flex items-center justify-center gap-1.5 rounded bg-primary hover:bg-primary/95 text-primary-foreground py-1 px-2 text-xs font-semibold transition-all shadow shadow-primary/10 cursor-pointer`,
              children: [
                (0, W.jsx)(x, { className: `h-3.5 w-3.5` }),
                `Install App`,
              ],
            }),
          ],
        }),
    ],
  });
}
function q(e, t) {
  return t === `/app`
    ? e === `/app` || e === `/app/`
    : e === t || e.startsWith(t + `/`);
}
function J({ item: e, active: t, onClick: n }) {
  let r = e.icon;
  return (0, W.jsxs)(c, {
    to: e.to,
    onClick: n,
    className: d(
      `group flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors`,
      t
        ? `bg-sidebar-accent text-sidebar-accent-foreground font-medium`
        : `text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground`,
    ),
    children: [
      (0, W.jsx)(r, {
        className: d(`h-4 w-4`, t ? `text-primary` : `text-muted-foreground`),
      }),
      (0, W.jsx)(`span`, { className: `flex-1`, children: e.label }),
      e.badge &&
        (0, W.jsx)(`span`, {
          className: `text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/15 text-primary font-semibold`,
          children: e.badge,
        }),
    ],
  });
}
function Y() {
  let [e, t] = (0, B.useState)(null),
    [n, i] = (0, B.useState)(null),
    [a, o] = (0, B.useState)(!0);
  return (
    (0, B.useEffect)(() => {
      let { data: e } = r.auth.onAuthStateChange((e, n) => {
        (t(n), i(n?.user ?? null));
      });
      return (
        r.auth.getSession().then(({ data: e }) => {
          (t(e.session), i(e.session?.user ?? null), o(!1));
        }),
        () => e.subscription.unsubscribe()
      );
    }, []),
    { session: e, user: n, loading: a, signOut: () => r.auth.signOut() }
  );
}
var X = 768;
function Z() {
  let [e, t] = B.useState(void 0);
  return (
    B.useEffect(() => {
      let e = window.matchMedia(`(max-width: ${X - 1}px)`),
        n = () => {
          t(window.innerWidth < X);
        };
      return (
        e.addEventListener(`change`, n),
        t(window.innerWidth < X),
        () => e.removeEventListener(`change`, n)
      );
    }, []),
    !!e
  );
}
function Q() {
  let { user: e, signOut: t } = Y(),
    [n, r] = (0, B.useState)(!1),
    i = Z(),
    [a, o] = (0, B.useState)([]),
    s = () => {
      if (typeof window < `u`) {
        let e = localStorage.getItem(`gmintel_notifications`);
        o(e ? JSON.parse(e) : []);
      }
    };
  (0, B.useEffect)(
    () => (
      s(),
      window.addEventListener(`storage`, s),
      window.addEventListener(`gmintel_new_notification`, s),
      () => {
        (window.removeEventListener(`storage`, s),
          window.removeEventListener(`gmintel_new_notification`, s));
      }
    ),
    [],
  );
  let l = a.filter((e) => !e.read).length;
  return (0, W.jsxs)(`header`, {
    className: `h-14 border-b border-border bg-card/50 backdrop-blur flex items-center gap-3 px-4`,
    children: [
      (0, W.jsx)(`div`, {
        className: `md:hidden`,
        children: (0, W.jsxs)(N, {
          open: n,
          onOpenChange: r,
          children: [
            (0, W.jsx)(M, {
              asChild: !0,
              children: (0, W.jsxs)(A, {
                variant: `ghost`,
                size: `icon`,
                className: `h-9 w-9 text-muted-foreground hover:text-foreground`,
                children: [
                  (0, W.jsx)(R, { className: `h-5 w-5` }),
                  (0, W.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Toggle Menu`,
                  }),
                ],
              }),
            }),
            (0, W.jsxs)(j, {
              side: `left`,
              className: `w-60 p-0 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border`,
              children: [
                (0, W.jsxs)(`div`, {
                  className: `h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border`,
                  children: [
                    (0, W.jsx)(`img`, {
                      src: `/gmintel_logo.png`,
                      alt: `GMIntel Logo`,
                      className: `h-7 w-7 rounded-md object-cover border border-border/50`,
                    }),
                    (0, W.jsxs)(`div`, {
                      children: [
                        (0, W.jsx)(`div`, {
                          className: `font-display text-sm font-bold leading-none`,
                          children: `GMIntel`,
                        }),
                        (0, W.jsx)(`div`, {
                          className: `text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5`,
                          children: `Textile · AI`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, W.jsx)(K, { onItemClick: () => r(!1) }),
                (0, W.jsx)(`div`, {
                  className: `border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground mt-auto`,
                  children: (0, W.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, W.jsx)(`span`, {
                        className: `h-1.5 w-1.5 rounded-full bg-success animate-pulse`,
                      }),
                      `LIVE · v1.0`,
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, W.jsxs)(`div`, {
        className: `flex-1 min-w-0 max-w-2xl flex items-center gap-2 h-9 px-3 rounded-md bg-muted/60 border border-border text-sm text-muted-foreground`,
        children: [
          (0, W.jsx)(D, { className: `h-4 w-4 shrink-0` }),
          (0, W.jsx)(`input`, {
            placeholder: i
              ? `Search…`
              : `Search companies, countries, products, HS codes…`,
            className: `w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground text-foreground`,
          }),
          (0, W.jsxs)(`kbd`, {
            className: `hidden md:inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded border border-border bg-background`,
            children: [(0, W.jsx)(ee, { className: `h-3 w-3` }), ` K`],
          }),
        ],
      }),
      (0, W.jsx)(`div`, { className: `flex-1` }),
      (0, W.jsxs)(y, {
        children: [
          (0, W.jsx)(h, {
            asChild: !0,
            children: (0, W.jsxs)(A, {
              variant: `ghost`,
              size: `icon`,
              className: `text-muted-foreground relative`,
              "aria-label": `Notifications`,
              children: [
                (0, W.jsx)(F, { className: `h-4 w-4` }),
                l > 0 &&
                  (0, W.jsx)(`span`, {
                    className: `absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse`,
                  }),
              ],
            }),
          }),
          (0, W.jsxs)(_, {
            align: `end`,
            className: `w-80 bg-popover border border-border p-2`,
            children: [
              (0, W.jsxs)(`div`, {
                className: `flex items-center justify-between px-2 py-1.5 text-xs`,
                children: [
                  (0, W.jsxs)(`span`, {
                    className: `font-semibold text-foreground`,
                    children: [`Announcements (`, l, ` unread)`],
                  }),
                  (0, W.jsx)(`div`, {
                    className: `flex gap-2`,
                    children:
                      a.length > 0 &&
                      (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsx)(`button`, {
                            onClick: () => {
                              let e = a.map((e) => ({ ...e, read: !0 }));
                              (o(e),
                                localStorage.setItem(
                                  `gmintel_notifications`,
                                  JSON.stringify(e),
                                ));
                            },
                            className: `text-[10px] text-primary hover:underline`,
                            children: `Mark read`,
                          }),
                          (0, W.jsx)(`button`, {
                            onClick: () => {
                              (o([]),
                                localStorage.setItem(
                                  `gmintel_notifications`,
                                  JSON.stringify([]),
                                ));
                            },
                            className: `text-[10px] text-muted-foreground hover:underline`,
                            children: `Clear`,
                          }),
                        ],
                      }),
                  }),
                ],
              }),
              (0, W.jsx)(g, { className: `my-1` }),
              (0, W.jsx)(`div`, {
                className: `max-h-64 overflow-y-auto space-y-1 py-1`,
                children:
                  a.length === 0
                    ? (0, W.jsx)(`div`, {
                        className: `text-center py-6 text-xs text-muted-foreground`,
                        children: `No followed announcements.`,
                      })
                    : a.map((e) =>
                        (0, W.jsxs)(
                          v,
                          {
                            className: `flex flex-col items-start gap-1 p-2 rounded cursor-pointer hover:bg-muted/50`,
                            children: [
                              (0, W.jsxs)(`div`, {
                                className: `flex items-center justify-between w-full text-[10px]`,
                                children: [
                                  (0, W.jsx)(`span`, {
                                    className: d(
                                      `font-semibold text-primary`,
                                      e.read && `text-muted-foreground`,
                                    ),
                                    children: e.company_name,
                                  }),
                                  (0, W.jsx)(`span`, {
                                    className: `text-muted-foreground/60`,
                                    children: new Date(
                                      e.timestamp,
                                    ).toLocaleTimeString(`en-US`, {
                                      hour: `numeric`,
                                      minute: `numeric`,
                                      hour12: !0,
                                    }),
                                  }),
                                ],
                              }),
                              (0, W.jsx)(`span`, {
                                className: d(
                                  `text-xs text-foreground leading-normal`,
                                  e.read && `text-muted-foreground`,
                                ),
                                children: e.message,
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
              }),
            ],
          }),
        ],
      }),
      e
        ? (0, W.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, W.jsxs)(`div`, {
                className: `text-right hidden sm:block`,
                children: [
                  (0, W.jsx)(`div`, {
                    className: `text-xs font-medium leading-none`,
                    children: e.email,
                  }),
                  (0, W.jsx)(`div`, {
                    className: `text-[10px] text-muted-foreground mt-0.5 font-mono`,
                    children: `VIEWER`,
                  }),
                ],
              }),
              (0, W.jsx)(A, {
                size: `sm`,
                variant: `outline`,
                onClick: () => t(),
                children: `Sign out`,
              }),
            ],
          })
        : (0, W.jsx)(A, {
            size: `sm`,
            asChild: !0,
            children: (0, W.jsx)(c, { to: `/auth`, children: `Sign in` }),
          }),
    ],
  });
}
function $() {
  let { user: e, loading: t } = Y(),
    n = i();
  return (
    (0, B.useEffect)(() => {
      !t && !e && n({ to: `/auth` });
    }, [t, e, n]),
    (0, W.jsxs)(`div`, {
      className: `min-h-screen flex bg-background text-foreground`,
      children: [
        (0, W.jsx)(G, {}),
        (0, W.jsxs)(`div`, {
          className: `flex-1 flex flex-col min-w-0`,
          children: [
            (0, W.jsx)(Q, {}),
            (0, W.jsx)(`main`, {
              className: `flex-1 overflow-y-auto`,
              children: (0, W.jsx)(`div`, {
                className: `max-w-[1600px] mx-auto p-6 md:p-8`,
                children: (0, W.jsx)(l, {}),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
export { $ as component };
