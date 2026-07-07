import { a as e, n as t, t as n } from "./jsx-runtime-n5LQ9ujS.js";
import { C as r, a as i, r as a } from "./index-B8EwVZTI.js";
import { r as o } from "./utils-DbbrEv-p.js";
import { t as s } from "./circle-alert-D6OZZXPz.js";
import { t as c } from "./circle-check-DRsrF1f6.js";
import { t as l } from "./button-CoQ0AAlw.js";
import { n as u, t as d } from "./label-CUCB0Lzh.js";
var f = o(`eye-off`, [
    [
      `path`,
      {
        d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
        key: `ct8e1f`,
      },
    ],
    [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }],
    [
      `path`,
      {
        d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
        key: `13bj9a`,
      },
    ],
    [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
  ]),
  p = o(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  m = e(t()),
  h = n();
function g() {
  let e = i(),
    [t, n] = (0, m.useState)(`signin`),
    [o, g] = (0, m.useState)(``),
    [_, v] = (0, m.useState)(``),
    [y, b] = (0, m.useState)(``),
    [x, S] = (0, m.useState)(!1),
    [C, w] = (0, m.useState)(null),
    [T, E] = (0, m.useState)(!1),
    [D, O] = (0, m.useState)(!1);
  function k(e) {
    if (!e) return { label: ``, color: ``, pct: 0 };
    let t = 0;
    return (
      e.length >= 8 && t++,
      /[A-Z]/.test(e) && t++,
      /[0-9]/.test(e) && t++,
      /[^A-Za-z0-9]/.test(e) && t++,
      t <= 1
        ? { label: `Weak`, color: `bg-destructive`, pct: 25 }
        : t === 2
          ? { label: `Fair`, color: `bg-warning`, pct: 50 }
          : t === 3
            ? { label: `Good`, color: `bg-info`, pct: 75 }
            : { label: `Strong`, color: `bg-success`, pct: 100 }
    );
  }
  async function A() {
    if (!o) {
      w(`Enter your email first to reset password.`);
      return;
    }
    (w(null), S(!0));
    try {
      let { error: e } = await r.auth.resetPasswordForEmail(o, {
        redirectTo:
          typeof window < `u` ? `${window.location.origin}/auth` : void 0,
      });
      if (e) throw e;
      O(!0);
    } catch (e) {
      w(e instanceof Error ? e.message : `Password reset failed`);
    } finally {
      S(!1);
    }
  }
  async function j() {
    (w(null), S(!0));
    try {
      let { error: e } = await r.auth.signInWithOAuth({
        provider: `google`,
        options: {
          redirectTo:
            typeof window < `u` ? `${window.location.origin}/app` : void 0,
          queryParams: { prompt: `select_account` },
        },
      });
      if (e) throw e;
    } catch (e) {
      (w(e instanceof Error ? e.message : `Google login failed`), S(!1));
    }
  }
  async function M(n) {
    (n.preventDefault(), w(null), S(!0));
    try {
      let n =
        t === `signin`
          ? await r.auth.signInWithPassword({ email: o, password: _ })
          : await r.auth.signUp({
              email: o,
              password: _,
              options: {
                emailRedirectTo:
                  typeof window < `u`
                    ? `${window.location.origin}/app`
                    : void 0,
                data: { full_name: y },
              },
            });
      if (n.error) throw n.error;
      e({ to: `/app` });
    } catch (e) {
      w(e instanceof Error ? e.message : `Authentication failed`);
    } finally {
      S(!1);
    }
  }
  return (0, h.jsxs)(`div`, {
    className: `min-h-screen grid lg:grid-cols-2 bg-background`,
    children: [
      (0, h.jsxs)(`div`, {
        className: `hidden lg:flex flex-col justify-between p-10 bg-sidebar border-r border-sidebar-border relative overflow-hidden`,
        children: [
          (0, h.jsx)(`div`, {
            className: `absolute inset-0 ticker-grid opacity-[0.07]`,
          }),
          (0, h.jsxs)(a, {
            to: `/`,
            className: `relative flex items-center gap-2`,
            children: [
              (0, h.jsx)(`div`, {
                className: `h-8 w-8 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground font-bold`,
                children: `GM`,
              }),
              (0, h.jsxs)(`span`, {
                className: `font-display font-bold`,
                children: [
                  `GMIntel`,
                  (0, h.jsx)(`span`, {
                    className: `text-primary`,
                    children: `.AI`,
                  }),
                ],
              }),
            ],
          }),
          (0, h.jsxs)(`div`, {
            className: `relative space-y-4`,
            children: [
              (0, h.jsx)(`div`, {
                className: `text-[10px] font-mono uppercase tracking-widest text-primary`,
                children: `Terminal Access`,
              }),
              (0, h.jsx)(`h2`, {
                className: `font-display text-4xl font-bold leading-tight max-w-md`,
                children: `The intelligence layer for global textile sourcing.`,
              }),
              (0, h.jsx)(`p`, {
                className: `text-sm text-muted-foreground max-w-md`,
                children: `30,000+ verified companies, AI risk & quality scores, live prices, and a natural-language sourcing assistant — all in one terminal.`,
              }),
            ],
          }),
          (0, h.jsx)(`div`, {
            className: `relative text-[10px] font-mono text-muted-foreground`,
            children: `SECURE · SOC-2 READY · RBAC`,
          }),
        ],
      }),
      (0, h.jsx)(`div`, {
        className: `flex items-center justify-center p-8`,
        children: (0, h.jsxs)(`div`, {
          className: `w-full max-w-sm space-y-5`,
          children: [
            (0, h.jsxs)(`form`, {
              onSubmit: M,
              className: `space-y-5`,
              children: [
                (0, h.jsxs)(`div`, {
                  children: [
                    (0, h.jsx)(`div`, {
                      className: `text-[10px] font-mono uppercase tracking-widest text-primary`,
                      children: t === `signin` ? `Sign in` : `Create account`,
                    }),
                    (0, h.jsx)(`h1`, {
                      className: `font-display text-2xl font-bold mt-1`,
                      children:
                        t === `signin`
                          ? `Access your terminal`
                          : `Join GMIntel AI`,
                    }),
                  ],
                }),
                t === `signup` &&
                  (0, h.jsxs)(`div`, {
                    className: `space-y-1.5`,
                    children: [
                      (0, h.jsx)(d, { htmlFor: `name`, children: `Full name` }),
                      (0, h.jsx)(u, {
                        id: `name`,
                        value: y,
                        onChange: (e) => b(e.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                (0, h.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, h.jsx)(d, { htmlFor: `email`, children: `Email` }),
                    (0, h.jsx)(u, {
                      id: `email`,
                      type: `email`,
                      value: o,
                      onChange: (e) => g(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                (0, h.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, h.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, h.jsx)(d, {
                          htmlFor: `password`,
                          children: `Password`,
                        }),
                        t === `signin` &&
                          (0, h.jsx)(`button`, {
                            type: `button`,
                            onClick: A,
                            disabled: x,
                            className: `text-[11px] text-muted-foreground hover:text-primary transition-colors`,
                            children: `Forgot password?`,
                          }),
                      ],
                    }),
                    (0, h.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        (0, h.jsx)(u, {
                          id: `password`,
                          type: T ? `text` : `password`,
                          value: _,
                          onChange: (e) => v(e.target.value),
                          required: !0,
                          minLength: 6,
                          className: `pr-10`,
                        }),
                        (0, h.jsx)(`button`, {
                          type: `button`,
                          onClick: () => E(!T),
                          className: `absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors`,
                          children: T
                            ? (0, h.jsx)(f, { className: `h-4 w-4` })
                            : (0, h.jsx)(p, { className: `h-4 w-4` }),
                        }),
                      ],
                    }),
                    t === `signup` &&
                      _ &&
                      (() => {
                        let e = k(_);
                        return (0, h.jsxs)(`div`, {
                          className: `space-y-1`,
                          children: [
                            (0, h.jsx)(`div`, {
                              className: `h-1 rounded-full bg-muted overflow-hidden`,
                              children: (0, h.jsx)(`div`, {
                                className: `h-full rounded-full transition-all ${e.color}`,
                                style: { width: `${e.pct}%` },
                              }),
                            }),
                            (0, h.jsxs)(`div`, {
                              className: `text-[10px] font-mono text-muted-foreground`,
                              children: [`Password strength: `, e.label],
                            }),
                          ],
                        });
                      })(),
                  ],
                }),
                C &&
                  (0, h.jsxs)(`div`, {
                    className: `flex items-start gap-2 text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2`,
                    children: [
                      (0, h.jsx)(s, {
                        className: `h-3.5 w-3.5 shrink-0 mt-0.5`,
                      }),
                      (0, h.jsx)(`span`, { children: C }),
                    ],
                  }),
                D &&
                  (0, h.jsxs)(`div`, {
                    className: `flex items-start gap-2 text-xs text-success bg-success/10 border border-success/20 rounded-md px-3 py-2`,
                    children: [
                      (0, h.jsx)(c, {
                        className: `h-3.5 w-3.5 shrink-0 mt-0.5`,
                      }),
                      (0, h.jsx)(`span`, {
                        children: `Password reset email sent! Check your inbox.`,
                      }),
                    ],
                  }),
                (0, h.jsx)(l, {
                  type: `submit`,
                  disabled: x,
                  className: `w-full`,
                  children: x
                    ? `…`
                    : t === `signin`
                      ? `Sign in`
                      : `Create account`,
                }),
              ],
            }),
            (0, h.jsxs)(`div`, {
              className: `relative my-4 flex items-center justify-center`,
              children: [
                (0, h.jsx)(`div`, {
                  className: `absolute inset-0 flex items-center`,
                  children: (0, h.jsx)(`span`, {
                    className: `w-full border-t border-border`,
                  }),
                }),
                (0, h.jsx)(`span`, {
                  className: `relative bg-background px-3 text-[10px] font-mono uppercase text-muted-foreground`,
                  children: `Or continue with`,
                }),
              ],
            }),
            (0, h.jsxs)(l, {
              type: `button`,
              variant: `outline`,
              disabled: x,
              onClick: j,
              className: `w-full flex items-center justify-center gap-2`,
              children: [
                (0, h.jsxs)(`svg`, {
                  className: `h-4 w-4 shrink-0`,
                  viewBox: `0 0 24 24`,
                  width: `24`,
                  height: `24`,
                  xmlns: `http://www.w3.org/2000/svg`,
                  children: [
                    (0, h.jsx)(`path`, {
                      d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
                      fill: `#4285F4`,
                    }),
                    (0, h.jsx)(`path`, {
                      d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
                      fill: `#34A853`,
                    }),
                    (0, h.jsx)(`path`, {
                      d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z`,
                      fill: `#FBBC05`,
                    }),
                    (0, h.jsx)(`path`, {
                      d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z`,
                      fill: `#EA4335`,
                    }),
                  ],
                }),
                `Google`,
              ],
            }),
            (0, h.jsx)(`button`, {
              type: `button`,
              onClick: () => n(t === `signin` ? `signup` : `signin`),
              className: `text-xs text-muted-foreground hover:text-foreground w-full text-center block mt-3`,
              children:
                t === `signin`
                  ? `Need an account? Sign up`
                  : `Already have an account? Sign in`,
            }),
          ],
        }),
      }),
    ],
  });
}
export { g as component };
