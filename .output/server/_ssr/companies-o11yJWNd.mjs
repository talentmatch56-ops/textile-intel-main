import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import {
  G as Building2,
  T as MapPin,
  Y as ArrowUpDown,
  a as Users,
  at as Funnel,
  dt as CircleAlert,
  et as Sparkles,
  h as Search,
  u as Star,
} from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import {
  a as SheetTitle,
  i as SheetHeader,
  n as SheetContent,
  r as SheetDescription,
  t as Sheet,
} from "./sheet-C1vjnj_d.mjs";
import { t as MOCK_COMPANIES } from "./mock-companies-B_80WWwW.mjs";
import {
  n as MOCK_COMPANY_NEWS,
  t as Badge,
} from "./mock-company-news-BDbtL397.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companies-o11yJWNd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
  const [search, setSearch] = (0, import_react.useState)("");
  const [countryFilter, setCountryFilter] = (0, import_react.useState)("");
  const [typeFilter, setTypeFilter] = (0, import_react.useState)("");
  const [riskFilter, setRiskFilter] = (0, import_react.useState)("");
  const [sortKey, setSortKey] = (0, import_react.useState)("name");
  const [sortAsc, setSortAsc] = (0, import_react.useState)(true);
  const [watchlist, setWatchlist] = (0, import_react.useState)([]);
  const [selectedCompany, setSelectedCompany] = (0, import_react.useState)(
    null,
  );
  const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("gmintel_watchlist");
      if (stored) setWatchlist(JSON.parse(stored));
    }
  }, []);
  const toggleWatchlist = (slug, e) => {
    e.stopPropagation();
    const next = watchlist.includes(slug)
      ? watchlist.filter((s) => s !== slug)
      : [...watchlist, slug];
    setWatchlist(next);
    localStorage.setItem("gmintel_watchlist", JSON.stringify(next));
    toast.success(
      watchlist.includes(slug)
        ? "Removed from watchlist"
        : "Added to watchlist",
    );
  };
  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const [companies, countries] = await Promise.all([
        supabase.from("companies").select("*").order("name"),
        supabase.from("countries").select("code,name"),
      ]);
      return {
        companies: companies.data ?? [],
        countries: countries.data ?? [],
      };
    },
  });
  const dbCompanies = data?.companies ?? [];
  const companies = (0, import_react.useMemo)(() => {
    const list = [...dbCompanies];
    MOCK_COMPANIES.forEach((mock) => {
      if (!list.some((c) => c.slug === mock.slug)) list.push(mock);
    });
    return list;
  }, [dbCompanies]);
  const countries = data?.countries ?? [];
  const countryMap = Object.fromEntries(countries.map((c) => [c.code, c.name]));
  const businessTypes = (0, import_react.useMemo)(
    () =>
      [
        ...new Set(companies.map((c) => c.business_type).filter(Boolean)),
      ].sort(),
    [companies],
  );
  const availableCountries = (0, import_react.useMemo)(
    () =>
      [...new Set(companies.map((c) => c.country_code).filter(Boolean))].sort(),
    [companies],
  );
  const filtered = (0, import_react.useMemo)(() => {
    let list = [...companies];
    if (search)
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          (c.city ?? "").toLowerCase().includes(search.toLowerCase()),
      );
    if (countryFilter)
      list = list.filter((c) => c.country_code === countryFilter);
    if (typeFilter)
      list = list.filter((c) =>
        (c.business_type ?? "")
          .toLowerCase()
          .includes(typeFilter.toLowerCase()),
      );
    if (riskFilter) list = list.filter((c) => c.ai_risk_level === riskFilter);
    list.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const aVal = av == null ? "" : av;
      const bVal = bv == null ? "" : bv;
      if (aVal < bVal) return sortAsc ? -1 : 1;
      if (aVal > bVal) return sortAsc ? 1 : -1;
      return 0;
    });
    return list;
  }, [
    companies,
    search,
    countryFilter,
    typeFilter,
    riskFilter,
    sortKey,
    sortAsc,
  ]);
  const stats = (0, import_react.useMemo)(
    () => ({
      total: companies.length,
      verified: companies.filter((c) => c.status === "verified").length,
      highRisk: companies.filter((c) => c.ai_risk_level === "high").length,
      avgTrust:
        companies.length > 0
          ? Math.round(
              companies.reduce((s, c) => s + (c.ai_trust_score ?? 0), 0) /
                companies.length,
            )
          : 0,
    }),
    [companies],
  );
  const handleSort = (key) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };
  const activeCompanyNews = (0, import_react.useMemo)(() => {
    if (!selectedCompany) return [];
    const storedNews =
      typeof window !== "undefined"
        ? localStorage.getItem("gmintel_synced_news")
        : null;
    return [...(storedNews ? JSON.parse(storedNews) : []), ...MOCK_COMPANY_NEWS]
      .filter((n) => n.company_slug === selectedCompany.slug)
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime(),
      );
  }, [selectedCompany]);
  const aiSummary = (0, import_react.useMemo)(() => {
    if (!selectedCompany) return "";
    if (activeCompanyNews.length === 0)
      return `${selectedCompany.name} is currently showing stable operational activity with no risk alerts. Sourcing metrics are verified and supply reliability index is high.`;
    const positive = activeCompanyNews.filter(
      (n) => n.sentiment === "positive",
    ).length;
    const negative = activeCompanyNews.filter(
      (n) => n.sentiment === "negative",
    ).length;
    const mainUpdate = activeCompanyNews[0];
    let summaryText = `AI analysis highlights a predominantly ${positive >= negative ? "positive" : "cautious"} market trajectory. `;
    summaryText += `Key event: "${mainUpdate.title}" (${mainUpdate.category.replace("_", " ")}). `;
    if (negative > 0)
      summaryText += `Minor headwinds noted (such as raw material shortages or shipping delays), but capacity and quality structures remain resilient.`;
    else
      summaryText += `Strong progress is driven by active circular/sustainability initiatives and expanded manufacturing capabilities.`;
    return summaryText;
  }, [selectedCompany, activeCompanyNews]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        eyebrow: "Command Center",
        title: "Companies",
        description:
          "Browse, search and filter verified textile manufacturers, suppliers and brands across 40+ countries.",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Total Companies",
            value: stats.total.toLocaleString(),
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
              className: "h-4 w-4",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Verified",
            value: stats.verified.toLocaleString(),
            delta: {
              value: "AI-scored",
              positive: true,
            },
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
              className: "h-4 w-4",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "High Risk",
            value: stats.highRisk,
            delta: {
              value: `${Math.round((stats.highRisk / Math.max(stats.total, 1)) * 100)}%`,
              positive: false,
            },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Avg Trust Score",
            value: stats.avgTrust,
            hint: "out of 100",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex-1 min-w-48 relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                value: search,
                onChange: (e) => setSearch(e.target.value),
                placeholder: "Search companies, cities…",
                className:
                  "w-full h-9 pl-9 pr-3 rounded-md border border-border bg-card text-sm outline-none focus:border-primary",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
            value: countryFilter,
            onChange: (e) => setCountryFilter(e.target.value),
            className:
              "h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "",
                children: "All Countries",
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
            value: typeFilter,
            onChange: (e) => setTypeFilter(e.target.value),
            className:
              "h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "",
                children: "All Types",
              }),
              businessTypes.map((t) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "option",
                  {
                    value: t,
                    children: t,
                  },
                  t,
                ),
              ),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
            value: riskFilter,
            onChange: (e) => setRiskFilter(e.target.value),
            className:
              "h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "",
                children: "All Risk Levels",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "low",
                children: "Low",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "medium",
                children: "Medium",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                value: "high",
                children: "High",
              }),
            ],
          }),
          (search || countryFilter || typeFilter || riskFilter) &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                setSearch("");
                setCountryFilter("");
                setTypeFilter("");
                setRiskFilter("");
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
                  className: "h-3.5 w-3.5 mr-1",
                }),
                " Clear",
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "rounded-lg border border-border bg-card overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "grid grid-cols-12 gap-2 px-4 py-2.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30 border-b border-border",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                className:
                  "col-span-5 sm:col-span-4 flex items-center gap-1 hover:text-foreground text-left",
                onClick: () => handleSort("name"),
                children: [
                  "Company ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
                    className: "h-3 w-3",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                className:
                  "hidden sm:flex col-span-2 items-center gap-1 hover:text-foreground",
                onClick: () => handleSort("country_code"),
                children: [
                  "Country ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
                    className: "h-3 w-3",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "hidden md:block col-span-2",
                children: "Type",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "hidden lg:block col-span-1",
                children: "Employees",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                className:
                  "col-span-3 sm:col-span-2 text-right flex items-center justify-end gap-1 hover:text-foreground",
                onClick: () => handleSort("ai_trust_score"),
                children: [
                  "Trust ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
                    className: "h-3 w-3",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "col-span-2 sm:col-span-1 text-right",
                children: "Risk",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "col-span-2 sm:col-span-1 text-center",
                children: "Follow",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "divide-y divide-border",
            children: [
              isLoading &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "p-8 text-center text-sm text-muted-foreground",
                  children: "Loading companies…",
                }),
              !isLoading &&
                filtered.length === 0 &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "p-8 text-center text-sm text-muted-foreground",
                  children: "No companies match your filters.",
                }),
              filtered.map((c) => {
                const isFollowed = watchlist.includes(c.slug);
                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    onClick: () => {
                      setSelectedCompany(c);
                      setDrawerOpen(true);
                    },
                    className:
                      "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "col-span-5 sm:col-span-4 min-w-0",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "font-medium text-foreground hover:text-primary transition-colors truncate",
                            children: c.name,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "text-xs text-muted-foreground flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-0.5",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                MapPin,
                                { className: "h-3 w-3 shrink-0" },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "span",
                                {
                                  className: "truncate",
                                  children: [
                                    c.city ?? "—",
                                    c.country_code ? `, ${c.country_code}` : "",
                                  ],
                                },
                              ),
                              c.year_founded &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "span",
                                  {
                                    className: "hidden sm:inline",
                                    children: ["· est. ", c.year_founded],
                                  },
                                ),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "div",
                          {
                            children:
                              countryMap[c.country_code ?? ""] ??
                              c.country_code ??
                              "—",
                          },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "hidden md:block col-span-2 text-xs text-muted-foreground truncate",
                        children: c.business_type ?? "—",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "hidden lg:block col-span-1 text-xs text-muted-foreground font-mono",
                        children: c.employees_range ?? "—",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "col-span-3 sm:col-span-2 text-right",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "font-mono tabular-nums text-foreground font-semibold",
                            children: c.ai_trust_score ?? "—",
                          }),
                          c.ai_quality_score != null &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "text-[10px] text-muted-foreground",
                                children: ["Q: ", c.ai_quality_score],
                              },
                            ),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "col-span-2 sm:col-span-1 text-right",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          RiskBadge,
                          { level: c.ai_risk_level },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "col-span-2 sm:col-span-1 text-center",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            onClick: (e) => toggleWatchlist(c.slug, e),
                            className:
                              "p-1.5 rounded-full hover:bg-muted/80 text-muted-foreground hover:text-primary transition-all",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsx)(Star, {
                              className: cn(
                                "h-4 w-4 transition-transform hover:scale-110",
                                isFollowed
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground",
                              ),
                            }),
                          },
                        ),
                      }),
                    ],
                  },
                  c.id,
                );
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "px-4 py-2 border-t border-border bg-muted/20 text-[10px] font-mono text-muted-foreground",
            children: [
              "Showing ",
              filtered.length,
              " of ",
              companies.length,
              " companies",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
        open: drawerOpen,
        onOpenChange: setDrawerOpen,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
          className:
            "sm:max-w-xl w-full overflow-y-auto bg-card border-l border-border p-6 font-sans",
          children:
            selectedCompany &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "space-y-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
                  className: "text-left space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between gap-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-primary text-lg font-bold",
                              children: selectedCompany.name
                                .slice(0, 2)
                                .toUpperCase(),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    SheetTitle,
                                    {
                                      className:
                                        "font-display text-xl font-bold leading-tight text-foreground",
                                      children: selectedCompany.name,
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    SheetDescription,
                                    {
                                      className:
                                        "text-xs text-muted-foreground font-mono mt-0.5",
                                      children: [
                                        selectedCompany.city
                                          ? `${selectedCompany.city}, `
                                          : "",
                                        countryMap[
                                          selectedCompany.country_code
                                        ] ?? selectedCompany.country_code,
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                          variant: "outline",
                          size: "sm",
                          onClick: (e) =>
                            toggleWatchlist(selectedCompany.slug, e),
                          className: "gap-1.5 shrink-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
                              className: cn(
                                "h-3.5 w-3.5",
                                watchlist.includes(selectedCompany.slug)
                                  ? "fill-primary text-primary"
                                  : "",
                              ),
                            }),
                            watchlist.includes(selectedCompany.slug)
                              ? "Watchlisted"
                              : "Watchlist",
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex flex-wrap gap-2 pt-1 border-b border-border pb-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
                          variant: "outline",
                          className: "text-[10px] font-mono capitalize",
                          children: selectedCompany.business_type ?? "Supplier",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
                          variant: "outline",
                          className: "text-[10px] font-mono",
                          children: [
                            "Trust: ",
                            selectedCompany.ai_trust_score,
                            "/100",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, {
                          level: selectedCompany.ai_risk_level,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "grid grid-cols-2 gap-3 text-xs bg-muted/30 p-3 rounded-lg border border-border",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
                          children: "Capacity",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-medium text-foreground",
                          children: selectedCompany.monthly_capacity
                            ? `${selectedCompany.monthly_capacity.toLocaleString()} m/mo`
                            : "—",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
                          children: "Min Order Qty",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-medium text-foreground",
                          children: selectedCompany.moq
                            ? `${selectedCompany.moq.toLocaleString()} units`
                            : "—",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
                          children: "Lead Time",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-medium text-foreground",
                          children: selectedCompany.lead_time_days
                            ? `${selectedCompany.lead_time_days} days`
                            : "—",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
                          children: "Employees",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-medium text-foreground",
                          children: selectedCompany.employees_range ?? "—",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.06] to-transparent p-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex items-center gap-1.5 text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 font-bold",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                          className: "h-3.5 w-3.5",
                        }),
                        " AI Sourcing Insight",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "text-sm text-muted-foreground leading-relaxed font-sans",
                      children: aiSummary,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex items-center justify-between border-b border-border pb-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                          className:
                            "font-display font-semibold text-sm text-foreground",
                          children: "Company Intelligence Feed",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className:
                            "text-[10px] font-mono text-muted-foreground",
                          children: [
                            activeCompanyNews.length,
                            " announcements",
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "space-y-3",
                      children:
                        activeCompanyNews.length === 0
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "text-center py-6 text-xs text-muted-foreground border border-dashed border-border rounded-lg bg-card/30",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    CircleAlert,
                                    {
                                      className:
                                        "h-5 w-5 text-muted-foreground/60 mx-auto mb-1.5",
                                    },
                                  ),
                                  "No recent updates reported for this supplier.",
                                ],
                              },
                            )
                          : activeCompanyNews.map((news) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "p-3 border border-border rounded-lg bg-card/40 hover:border-primary/30 transition-colors",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between gap-2 mb-1.5",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "inline-flex items-center gap-1 rounded bg-muted/60 px-1 py-0.5 text-[9px] font-mono uppercase tracking-wide text-muted-foreground",
                                          children: news.category.replace(
                                            "_",
                                            " ",
                                          ),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "text-[9px] font-mono text-muted-foreground/80",
                                          children: new Date(
                                            news.published_at,
                                          ).toLocaleDateString("en-US", {
                                            timeZone: "UTC",
                                            month: "short",
                                            day: "numeric",
                                          }),
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "h5",
                                      {
                                        className:
                                          "text-xs font-semibold text-foreground leading-snug mb-1",
                                        children: news.title,
                                      },
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "p",
                                      {
                                        className:
                                          "text-[11px] text-muted-foreground leading-relaxed mb-2.5",
                                        children: news.summary,
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between pt-1.5 border-t border-border/50 text-[10px] font-mono",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("span", {
                                          className: "text-muted-foreground/75",
                                          children: ["Source: ", news.source],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("span", {
                                              className:
                                                "text-muted-foreground/65",
                                              children: "Sentiment:",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)(Badge, {
                                              variant: "outline",
                                              className: cn(
                                                "text-[9px] px-1 py-0 border-0 h-4 uppercase",
                                                news.sentiment === "positive" &&
                                                  "bg-success/15 text-success",
                                                news.sentiment === "negative" &&
                                                  "bg-destructive/15 text-destructive",
                                                news.sentiment === "neutral" &&
                                                  "bg-muted/80 text-muted-foreground",
                                              ),
                                              children: news.sentiment,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                news.id,
                              ),
                            ),
                    }),
                  ],
                }),
              ],
            }),
        }),
      }),
    ],
  });
}
//#endregion
export { Page as component };
