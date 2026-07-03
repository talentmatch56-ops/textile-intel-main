import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { Q as Funnel, U as ArrowUpDown, d as Search, r as Users, y as MapPin, z as Building2 } from "../_libs/lucide-react.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as MOCK_COMPANIES } from "./mock-companies-B_80WWwW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companies-mJsygNxp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [countryFilter, setCountryFilter] = (0, import_react.useState)("");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("");
	const [riskFilter, setRiskFilter] = (0, import_react.useState)("");
	const [sortKey, setSortKey] = (0, import_react.useState)("name");
	const [sortAsc, setSortAsc] = (0, import_react.useState)(true);
	const { data, isLoading } = useQuery({
		queryKey: ["companies"],
		queryFn: async () => {
			const [companies, countries] = await Promise.all([supabase.from("companies").select("*").order("name"), supabase.from("countries").select("code,name")]);
			return {
				companies: companies.data ?? [],
				countries: countries.data ?? []
			};
		}
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
	const businessTypes = (0, import_react.useMemo)(() => [...new Set(companies.map((c) => c.business_type).filter(Boolean))].sort(), [companies]);
	const availableCountries = (0, import_react.useMemo)(() => [...new Set(companies.map((c) => c.country_code).filter(Boolean))].sort(), [companies]);
	const filtered = (0, import_react.useMemo)(() => {
		let list = [...companies];
		if (search) list = list.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || (c.city ?? "").toLowerCase().includes(search.toLowerCase()));
		if (countryFilter) list = list.filter((c) => c.country_code === countryFilter);
		if (typeFilter) list = list.filter((c) => (c.business_type ?? "").toLowerCase().includes(typeFilter.toLowerCase()));
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
		sortAsc
	]);
	const stats = (0, import_react.useMemo)(() => ({
		total: companies.length,
		verified: companies.filter((c) => c.status === "verified").length,
		highRisk: companies.filter((c) => c.ai_risk_level === "high").length,
		avgTrust: companies.length > 0 ? Math.round(companies.reduce((s, c) => s + (c.ai_trust_score ?? 0), 0) / companies.length) : 0
	}), [companies]);
	const handleSort = (key) => {
		if (sortKey === key) setSortAsc(!sortAsc);
		else {
			setSortKey(key);
			setSortAsc(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Command Center",
				title: "Companies",
				description: "Browse, search and filter verified textile manufacturers, suppliers and brands across 40+ countries."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Companies",
						value: stats.total.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Verified",
						value: stats.verified.toLocaleString(),
						delta: {
							value: "AI-scored",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "High Risk",
						value: stats.highRisk,
						delta: {
							value: `${Math.round(stats.highRisk / Math.max(stats.total, 1) * 100)}%`,
							positive: false
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Trust Score",
						value: stats.avgTrust,
						hint: "out of 100"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-48 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search companies, cities…",
							className: "w-full h-9 pl-9 pr-3 rounded-md border border-border bg-card text-sm outline-none focus:border-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: countryFilter,
						onChange: (e) => setCountryFilter(e.target.value),
						className: "h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All Countries"
						}), availableCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: countryMap[c] ?? c
						}, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: typeFilter,
						onChange: (e) => setTypeFilter(e.target.value),
						className: "h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All Types"
						}), businessTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: t,
							children: t
						}, t))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: riskFilter,
						onChange: (e) => setRiskFilter(e.target.value),
						className: "h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All Risk Levels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "low",
								children: "Low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "medium",
								children: "Medium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "high",
								children: "High"
							})
						]
					}),
					(search || countryFilter || typeFilter || riskFilter) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => {
							setSearch("");
							setCountryFilter("");
							setTypeFilter("");
							setRiskFilter("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5 mr-1" }), " Clear"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-2.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30 border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "col-span-6 sm:col-span-4 flex items-center gap-1 hover:text-foreground text-left",
								onClick: () => handleSort("name"),
								children: ["Company ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "hidden sm:flex col-span-2 items-center gap-1 hover:text-foreground",
								onClick: () => handleSort("country_code"),
								children: ["Country ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:block col-span-2",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:block col-span-1",
								children: "Employees"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "col-span-3 sm:col-span-2 text-right flex items-center justify-end gap-1 hover:text-foreground",
								onClick: () => handleSort("ai_trust_score"),
								children: ["Trust ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3 sm:col-span-1 text-right",
								children: "Risk"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border",
						children: [
							isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-8 text-center text-sm text-muted-foreground",
								children: "Loading companies…"
							}),
							!isLoading && filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-8 text-center text-sm text-muted-foreground",
								children: "No companies match your filters."
							}),
							filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-6 sm:col-span-4 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium text-foreground truncate",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 shrink-0" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "truncate",
													children: [c.city ?? "—", c.country_code ? `, ${c.country_code}` : ""]
												}),
												c.year_founded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "hidden sm:inline",
													children: ["· est. ", c.year_founded]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: countryMap[c.country_code ?? ""] ?? c.country_code ?? "—" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden md:block col-span-2 text-xs text-muted-foreground truncate",
										children: c.business_type ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden lg:block col-span-1 text-xs text-muted-foreground font-mono",
										children: c.employees_range ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-3 sm:col-span-2 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono tabular-nums text-foreground font-semibold",
											children: c.ai_trust_score ?? "—"
										}), c.ai_quality_score != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-muted-foreground",
											children: ["Q: ", c.ai_quality_score]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-3 sm:col-span-1 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: c.ai_risk_level })
									})
								]
							}, c.id))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-2 border-t border-border bg-muted/20 text-[10px] font-mono text-muted-foreground",
						children: [
							"Showing ",
							filtered.length,
							" of ",
							companies.length,
							" companies"
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Page as component };
