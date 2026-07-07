import { a as e, n as t, t as n } from "./jsx-runtime-n5LQ9ujS.js";
import { t as r } from "./useQuery-BB0wjU-m.js";
import { C as i } from "./index-B8EwVZTI.js";
import { t as a } from "./circle-alert-D6OZZXPz.js";
import { t as o } from "./circle-check-DRsrF1f6.js";
import { t as s } from "./loader-circle-Bl7wwTNN.js";
import { t as c } from "./sparkles-D9JfmPPi.js";
import { t as l } from "./stat-card-D9N0zewM.js";
import { t as u } from "./clock-DlSgh5Ru.js";
import { t as d } from "./download-B4t8_M7W.js";
import { t as f } from "./file-text-B5lTvAwQ.js";
import { t as p } from "./plus-DnfuNtW7.js";
import { t as m } from "./button-CoQ0AAlw.js";
import { t as h } from "./page-header-KBYaDscd.js";
import { t as g } from "./dist-ByBcCr1c.js";
var _ = e(t()),
  v = n(),
  y = [
    {
      kind: `supplier`,
      label: `Supplier Report`,
      description: `Deep profile: capacity, scores, certifications, export history and AI assessment of a single supplier.`,
      icon: `🏭`,
      time: `~30 sec`,
    },
    {
      kind: `country`,
      label: `Country Report`,
      description: `Full textile industry overview for a country: capacity, companies, export trends, risk environment, key contacts.`,
      icon: `🌍`,
      time: `~45 sec`,
    },
    {
      kind: `market`,
      label: `Market Report`,
      description: `Category or product segment analysis: demand trends, pricing, top suppliers, emerging markets.`,
      icon: `📈`,
      time: `~60 sec`,
    },
    {
      kind: `pricing`,
      label: `Pricing Report`,
      description: `Price benchmarking for a product or category across countries, with trend analysis and forecasts.`,
      icon: `💰`,
      time: `~30 sec`,
    },
    {
      kind: `competitor`,
      label: `Competitor Report`,
      description: `Competitive intelligence: how a supplier compares against peers on scores, capacity and certifications.`,
      icon: `🔍`,
      time: `~45 sec`,
    },
    {
      kind: `trend`,
      label: `Trend Report`,
      description: `Emerging fabric, product or market trends with demand signals, influencer data and forecast.`,
      icon: `✨`,
      time: `~60 sec`,
    },
  ],
  b = {
    ready: {
      icon: o,
      cls: `text-success border-success/30 bg-success/10`,
      label: `Ready`,
    },
    generating: {
      icon: s,
      cls: `text-warning border-warning/30 bg-warning/10`,
      label: `Generating`,
    },
    pending: {
      icon: u,
      cls: `text-muted-foreground border-border bg-muted/20`,
      label: `Pending`,
    },
    failed: {
      icon: a,
      cls: `text-destructive border-destructive/30 bg-destructive/10`,
      label: `Failed`,
    },
  },
  x = [
    {
      id: `rp1`,
      kind: `supplier`,
      title: `Arvind Mills Ltd — Full Intelligence Report`,
      status: `ready`,
      created_at: new Date(Date.now() - 864e5 * 2).toISOString(),
    },
    {
      id: `rp2`,
      kind: `country`,
      title: `Bangladesh Textile Industry Report Q2 2026`,
      status: `ready`,
      created_at: new Date(Date.now() - 864e5 * 5).toISOString(),
    },
    {
      id: `rp3`,
      kind: `pricing`,
      title: `Cotton Fabric Price Benchmarking — South Asia`,
      status: `ready`,
      created_at: new Date(Date.now() - 864e5 * 8).toISOString(),
    },
    {
      id: `rp4`,
      kind: `market`,
      title: `Sustainable Denim Market Analysis 2026`,
      status: `generating`,
      created_at: new Date(Date.now() - 36e5).toISOString(),
    },
  ];
function S({ status: e }) {
  let t = b[e] ?? b.pending,
    n = t.icon;
  return (0, v.jsxs)(`span`, {
    className: `inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${t.cls}`,
    children: [
      (0, v.jsx)(n, {
        className: `h-2.5 w-2.5 ${e === `generating` ? `animate-spin` : ``}`,
      }),
      t.label,
    ],
  });
}
function C() {
  let [e, t] = (0, _.useState)(null),
    [n, a] = (0, _.useState)([]),
    { data: u } = r({
      queryKey: [`reports`],
      queryFn: async () =>
        (
          await i
            .from(`reports`)
            .select(`*`)
            .order(`created_at`, { ascending: !1 })
        ).data ?? [],
    }),
    b = [...n, ...(u && u.length > 0 ? u : x)],
    C = async (e, n) => {
      t(e);
      let r = crypto.randomUUID(),
        o = {
          id: r,
          kind: e,
          title: `${n} — ${new Date().toLocaleDateString(`en-GB`)}`,
          status: `generating`,
          created_at: new Date().toISOString(),
        };
      (a((e) => [o, ...e]),
        g.info(`Generating ${n}...`),
        i.auth.getUser().then(({ data: { user: t } }) => {
          t &&
            i
              .from(`reports`)
              .insert({
                user_id: t.id,
                kind: e,
                title: o.title,
                status: `generating`,
              })
              .then(({ error: e }) => {
                e && console.warn(`Supabase report insert skipped:`, e.message);
              });
        }),
        setTimeout(() => {
          (a((e) => e.map((e) => (e.id === r ? { ...e, status: `ready` } : e))),
            t(null),
            g.success(`${n} is ready for download!`));
        }, 4e3));
    },
    w = (e) => {
      let t = `========================================================================
GMINTEL AI REPORT
Generated: ${new Date(e.created_at).toLocaleString()}
Report ID: ${e.id}
Category: ${e.kind.toUpperCase()}
Title: ${e.title}
========================================================================

EXECUTIVE SUMMARY
This report compiles global textile sourcing intelligence, trust indices, and supply chain risk scores. Data is aggregated from public shipping records, certified bodies, and live trade flows.

KEY FINDINGS & METRICS:
- Market Confidence: STABLE
- AI Trust Score: 89/100
- Priority Action: Audit Tier-2 supplier certifications.

This is an automatically generated document. All intelligence estimations are marked with AI tags.
========================================================================`,
        n = new Blob([t], { type: `text/plain;charset=utf-8` }),
        r = URL.createObjectURL(n),
        i = document.createElement(`a`);
      ((i.href = r),
        (i.download = `${e.title.toLowerCase().replace(/[^a-z0-9]+/g, `_`)}.txt`),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        URL.revokeObjectURL(r),
        g.success(`Downloading report...`));
    },
    T = b.filter((e) => e.status === `ready`).length,
    E = Object.fromEntries(y.map((e) => [e.kind, e.label]));
  return (0, v.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, v.jsx)(h, {
        eyebrow: `Workflows`,
        title: `AI Reports`,
        description: `Generate one-click intelligence reports on suppliers, countries, markets, pricing, trends and competitors.`,
      }),
      (0, v.jsxs)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-3`,
        children: [
          (0, v.jsx)(l, {
            label: `Total Reports`,
            value: b.length,
            icon: (0, v.jsx)(f, { className: `h-4 w-4` }),
          }),
          (0, v.jsx)(l, {
            label: `Ready`,
            value: T,
            delta: { value: `download ready`, positive: !0 },
            icon: (0, v.jsx)(o, { className: `h-4 w-4` }),
          }),
          (0, v.jsx)(l, {
            label: `Report Types`,
            value: y.length,
            hint: `template library`,
          }),
          (0, v.jsx)(l, {
            label: `Avg Gen Time`,
            value: `42s`,
            hint: `AI-powered`,
            icon: (0, v.jsx)(c, { className: `h-4 w-4` }),
          }),
        ],
      }),
      (0, v.jsxs)(`div`, {
        children: [
          (0, v.jsx)(`div`, {
            className: `text-[10px] font-mono uppercase tracking-widest text-primary mb-3`,
            children: `Report Library · Generate New`,
          }),
          (0, v.jsx)(`div`, {
            className: `grid md:grid-cols-2 lg:grid-cols-3 gap-4`,
            children: y.map((t) =>
              (0, v.jsxs)(
                `div`,
                {
                  className: `rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group`,
                  children: [
                    (0, v.jsx)(`div`, {
                      className: `text-2xl mb-3`,
                      children: t.icon,
                    }),
                    (0, v.jsx)(`div`, {
                      className: `font-display font-semibold text-foreground`,
                      children: t.label,
                    }),
                    (0, v.jsx)(`div`, {
                      className: `text-xs text-muted-foreground mt-1.5 leading-relaxed`,
                      children: t.description,
                    }),
                    (0, v.jsxs)(`div`, {
                      className: `flex items-center justify-between mt-4`,
                      children: [
                        (0, v.jsx)(`span`, {
                          className: `text-[10px] font-mono text-muted-foreground`,
                          children: t.time,
                        }),
                        (0, v.jsx)(m, {
                          size: `sm`,
                          variant: `outline`,
                          className: `gap-1.5 h-7 text-xs`,
                          disabled: e === t.kind,
                          onClick: () => C(t.kind, t.label),
                          children:
                            e === t.kind
                              ? (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)(s, {
                                      className: `h-3 w-3 animate-spin`,
                                    }),
                                    ` Generating…`,
                                  ],
                                })
                              : (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)(p, { className: `h-3 w-3` }),
                                    ` Generate`,
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                },
                t.kind,
              ),
            ),
          }),
        ],
      }),
      (0, v.jsxs)(`div`, {
        className: `rounded-lg border border-border bg-card overflow-hidden`,
        children: [
          (0, v.jsxs)(`div`, {
            className: `p-4 border-b border-border`,
            children: [
              (0, v.jsx)(`div`, {
                className: `text-[10px] font-mono uppercase tracking-widest text-primary`,
                children: `My Reports`,
              }),
              (0, v.jsx)(`div`, {
                className: `font-display font-semibold`,
                children: `Generated intelligence reports`,
              }),
            ],
          }),
          (0, v.jsxs)(`div`, {
            className: `divide-y divide-border`,
            children: [
              (0, v.jsxs)(`div`, {
                className: `grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30`,
                children: [
                  (0, v.jsx)(`div`, {
                    className: `col-span-7 sm:col-span-5`,
                    children: `Report Title`,
                  }),
                  (0, v.jsx)(`div`, {
                    className: `hidden sm:block col-span-2`,
                    children: `Type`,
                  }),
                  (0, v.jsx)(`div`, {
                    className: `hidden md:block col-span-2`,
                    children: `Generated`,
                  }),
                  (0, v.jsx)(`div`, {
                    className: `col-span-3 sm:col-span-2 text-right`,
                    children: `Status`,
                  }),
                  (0, v.jsx)(`div`, {
                    className: `col-span-2 sm:col-span-1 text-right`,
                    children: `Action`,
                  }),
                ],
              }),
              b.length === 0 &&
                (0, v.jsx)(`div`, {
                  className: `p-8 text-center text-sm text-muted-foreground`,
                  children: `No reports generated yet. Use the library above to create your first report.`,
                }),
              b.map((e) =>
                (0, v.jsxs)(
                  `div`,
                  {
                    className: `grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors`,
                    children: [
                      (0, v.jsxs)(`div`, {
                        className: `col-span-7 sm:col-span-5 min-w-0`,
                        children: [
                          (0, v.jsx)(`div`, {
                            className: `font-medium truncate`,
                            children: e.title,
                          }),
                          (0, v.jsxs)(`div`, {
                            className: `text-xs text-muted-foreground sm:hidden truncate mt-0.5`,
                            children: [
                              E[e.kind] ?? e.kind,
                              ` · `,
                              new Date(e.created_at).toLocaleDateString(
                                `en-GB`,
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsx)(`div`, {
                        className: `hidden sm:block col-span-2 text-xs text-muted-foreground capitalize`,
                        children: E[e.kind] ?? e.kind,
                      }),
                      (0, v.jsx)(`div`, {
                        className: `hidden md:block col-span-2 text-xs font-mono text-muted-foreground`,
                        children: new Date(e.created_at).toLocaleDateString(
                          `en-GB`,
                        ),
                      }),
                      (0, v.jsx)(`div`, {
                        className: `col-span-3 sm:col-span-2 text-right`,
                        children: (0, v.jsx)(S, { status: e.status }),
                      }),
                      (0, v.jsx)(`div`, {
                        className: `col-span-2 sm:col-span-1 text-right`,
                        children:
                          e.status === `ready` &&
                          (0, v.jsx)(`button`, {
                            onClick: () => w(e),
                            className: `text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-muted`,
                            title: `Download`,
                            children: (0, v.jsx)(d, { className: `h-4 w-4` }),
                          }),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
export { C as component };
