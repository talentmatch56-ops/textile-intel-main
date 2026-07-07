import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import {
  G as Building2,
  d as ShieldCheck,
  et as Sparkles,
  h as Search,
  n as X,
  st as Earth,
} from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-B_QpMoA6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CERT_OPTIONS = [
  "GOTS",
  "OEKO-TEX",
  "ISO 9001",
  "SA8000",
  "BSCI",
  "Fair Trade",
];
var TYPE_OPTIONS = ["manufacturer", "supplier", "exporter", "brand", "trader"];
function Page() {
  const [query, setQuery] = (0, import_react.useState)("");
  const [activeQuery, setActiveQuery] = (0, import_react.useState)("");
  const [selectedCerts, setSelectedCerts] = (0, import_react.useState)([]);
  const [selectedTypes, setSelectedTypes] = (0, import_react.useState)([]);
  const [countryFilter, setCountryFilter] = (0, import_react.useState)("");
  const [moqMax, setMoqMax] = (0, import_react.useState)("");
  const [hasSearched, setHasSearched] = (0, import_react.useState)(false);
  const { data } = useQuery({
    queryKey: ["search-companies"],
    queryFn: async () => {
      const [companies, countries] = await Promise.all([
        supabase
          .from("companies")
          .select(
            "id,name,country_code,city,business_type,ai_risk_level,ai_trust_score,certifications,moq,lead_time_days,employees_range,products",
          ),
        supabase.from("countries").select("code,name"),
      ]);
      return {
        companies: companies.data ?? [],
        countries: countries.data ?? [],
      };
    },
  });
  const companies = data?.companies ?? [];
  const countries = data?.countries ?? [];
  const countryMap = Object.fromEntries(countries.map((c) => [c.code, c.name]));
  const availableCountries = (0, import_react.useMemo)(
    () =>
      [...new Set(companies.map((c) => c.country_code).filter(Boolean))].sort(),
    [companies],
  );
  const results = (0, import_react.useMemo)(() => {
    if (!hasSearched) return [];
    let list = [...companies];
    if (activeQuery)
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(activeQuery.toLowerCase()) ||
          (c.city ?? "").toLowerCase().includes(activeQuery.toLowerCase()) ||
          (c.business_type ?? "")
            .toLowerCase()
            .includes(activeQuery.toLowerCase()) ||
          (c.products ?? []).some((p) =>
            p.toLowerCase().includes(activeQuery.toLowerCase()),
          ),
      );
    if (countryFilter)
      list = list.filter((c) => c.country_code === countryFilter);
    if (selectedTypes.length > 0)
      list = list.filter((c) =>
        selectedTypes.some((t) =>
          (c.business_type ?? "").toLowerCase().includes(t),
        ),
      );
    if (selectedCerts.length > 0)
      list = list.filter((c) =>
        selectedCerts.every((cert) => (c.certifications ?? []).includes(cert)),
      );
    if (moqMax) list = list.filter((c) => (c.moq ?? 0) <= Number(moqMax));
    return list.sort(
      (a, b) => (b.ai_trust_score ?? 0) - (a.ai_trust_score ?? 0),
    );
  }, [
    companies,
    activeQuery,
    countryFilter,
    selectedTypes,
    selectedCerts,
    moqMax,
    hasSearched,
  ]);
  const handleSearch = () => {
    setActiveQuery(query);
    setHasSearched(true);
  };
  const toggleCert = (cert) =>
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert],
    );
  const toggleType = (type) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  const hasFilters =
    selectedCerts.length > 0 ||
    selectedTypes.length > 0 ||
    countryFilter ||
    moqMax;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        eyebrow: "Command Center · AI",
        title: "Smart Search",
        description:
          "Search across 30,000+ verified textile manufacturers, suppliers and brands using AI-powered matching.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "rounded-xl border border-primary/30 bg-gradient-to-br from-primary/[0.04] to-transparent p-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex-1 relative",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                    className:
                      "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    value: query,
                    onChange: (e) => setQuery(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleSearch(),
                    placeholder:
                      "e.g. cotton manufacturer India GOTS certified, MOQ under 500…",
                    className:
                      "w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary placeholder:text-muted-foreground",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                size: "lg",
                onClick: handleSearch,
                className: "shrink-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                    className: "h-4 w-4 mr-2",
                  }),
                  " Search",
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-4 space-y-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap gap-2 items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20",
                    children: "Type",
                  }),
                  TYPE_OPTIONS.map((t) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        onClick: () => toggleType(t),
                        className: `px-2.5 py-1 rounded-full text-xs border transition-colors ${selectedTypes.includes(t) ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/40"}`,
                        children: t,
                      },
                      t,
                    ),
                  ),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap gap-2 items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20",
                    children: "Certs",
                  }),
                  CERT_OPTIONS.map((c) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        onClick: () => toggleCert(c),
                        className: `px-2.5 py-1 rounded-full text-xs border transition-colors ${selectedCerts.includes(c) ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/40"}`,
                        children: c,
                      },
                      c,
                    ),
                  ),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap gap-3 items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20",
                    children: "Filters",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                    value: countryFilter,
                    onChange: (e) => setCountryFilter(e.target.value),
                    className:
                      "h-8 px-2 rounded border border-border bg-card text-xs text-foreground outline-none",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                        value: "",
                        children: "Any Country",
                      }),
                      availableCountries.map((c) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "option",
                          {
                            value: c,
                            children: countryMap[c] ?? c,
                          },
                          c,
                        ),
                      ),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: "MOQ ≤",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        value: moqMax,
                        onChange: (e) => setMoqMax(e.target.value),
                        placeholder: "e.g. 500",
                        className:
                          "h-8 w-24 px-2 rounded border border-border bg-card text-xs outline-none focus:border-primary",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-xs text-muted-foreground",
                        children: "units",
                      }),
                    ],
                  }),
                  hasFilters &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => {
                        setSelectedCerts([]);
                        setSelectedTypes([]);
                        setCountryFilter("");
                        setMoqMax("");
                      },
                      className:
                        "text-xs text-muted-foreground hover:text-foreground flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                          className: "h-3 w-3",
                        }),
                        " Clear filters",
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      hasSearched &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex items-center justify-between mb-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-sm text-muted-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-mono text-foreground font-semibold",
                    children: results.length,
                  }),
                  " results",
                  activeQuery &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: [
                        ' for "',
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-primary",
                          children: activeQuery,
                        }),
                        '"',
                      ],
                    }),
                  " ",
                  "· ranked by AI trust score",
                ],
              }),
            }),
            results.length === 0
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-lg border border-border bg-card p-12 text-center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                      className:
                        "h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "text-sm font-medium",
                      children: "No results found",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "text-xs text-muted-foreground mt-1",
                      children: "Try adjusting your search or removing filters",
                    }),
                  ],
                })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: results.map((c, i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className:
                          "rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        i < 3 &&
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("span", {
                                            className:
                                              "text-[10px] font-mono bg-primary/15 text-primary px-1.5 py-0.5 rounded",
                                            children: ["#", i + 1],
                                          }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("div", {
                                          className:
                                            "font-semibold text-foreground truncate",
                                          children: c.name,
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(Earth, {
                                          className: "h-3 w-3",
                                        }),
                                        c.city ? `${c.city}, ` : "",
                                        countryMap[c.country_code ?? ""] ??
                                          c.country_code,
                                      ],
                                    }),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                RiskBadge,
                                { level: c.ai_risk_level },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "mt-3 grid grid-cols-3 gap-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "text-center",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "text-lg font-bold font-mono tabular-nums text-foreground",
                                        children: c.ai_trust_score ?? "—",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "text-[9px] font-mono uppercase text-muted-foreground",
                                        children: "Trust",
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "text-center border-x border-border",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "text-lg font-bold font-mono tabular-nums text-foreground",
                                        children: c.moq ?? "—",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "text-[9px] font-mono uppercase text-muted-foreground",
                                        children: "MOQ",
                                      },
                                    ),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "text-center",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "text-lg font-bold font-mono tabular-nums text-foreground",
                                        children: c.lead_time_days ?? "—",
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className:
                                          "text-[9px] font-mono uppercase text-muted-foreground",
                                        children: "Days LT",
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "mt-3 flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className:
                                    "text-xs text-muted-foreground capitalize",
                                  children: c.business_type ?? "—",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "flex gap-1",
                                  children: (c.certifications ?? [])
                                    .slice(0, 2)
                                    .map((cert) =>
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)(
                                        "span",
                                        {
                                          className:
                                            "text-[9px] font-mono px-1.5 py-0.5 rounded bg-success/10 text-success border border-success/20",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(
                                              ShieldCheck,
                                              {
                                                className:
                                                  "h-2.5 w-2.5 inline mr-0.5",
                                              },
                                            ),
                                            cert,
                                          ],
                                        },
                                        cert,
                                      ),
                                    ),
                                },
                              ),
                            ],
                          }),
                          c.employees_range &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "mt-2 text-[10px] text-muted-foreground font-mono flex items-center gap-1",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    Building2,
                                    { className: "h-3 w-3" },
                                  ),
                                  c.employees_range,
                                  " employees",
                                ],
                              },
                            ),
                        ],
                      },
                      c.id,
                    ),
                  ),
                }),
          ],
        }),
      !hasSearched &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "rounded-lg border border-border bg-card/50 p-12 text-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
              className: "h-12 w-12 text-primary/40 mx-auto mb-4",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "font-display font-semibold text-lg",
              children: "Search 30,000+ suppliers",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "text-sm text-muted-foreground mt-2 max-w-md mx-auto",
              children:
                "Use natural language, product types, certifications, MOQ ranges, or countries to find the right textile partners.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-4 flex flex-wrap gap-2 justify-center",
              children: [
                "cotton manufacturers India",
                "denim suppliers Turkey GOTS",
                "synthetic fabric China MOQ 200",
              ].map((q) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    onClick: () => {
                      setQuery(q);
                      setActiveQuery(q);
                      setHasSearched(true);
                    },
                    className:
                      "px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors",
                    children: q,
                  },
                  q,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
//#endregion
export { Page as component };
