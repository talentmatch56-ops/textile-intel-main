import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { J as ArrowUpDown, Q as TriangleAlert, at as CircleCheckBig, c as TrendingDown, d as ShieldAlert } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/risk-Io_OW1_c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RISK_FACTORS = [
	{
		factor: "Labour Standards",
		weight: 25,
		description: "ILO compliance, wage levels, working hour violations"
	},
	{
		factor: "Financial Stability",
		weight: 20,
		description: "Payment history, credit rating, years in operation"
	},
	{
		factor: "Geopolitical",
		weight: 18,
		description: "Country-level political risk, trade sanctions exposure"
	},
	{
		factor: "Compliance",
		weight: 17,
		description: "Regulatory adherence, certification validity, audits"
	},
	{
		factor: "Quality Consistency",
		weight: 12,
		description: "Defect rates, complaint history, QC process"
	},
	{
		factor: "Environmental",
		weight: 8,
		description: "Pollution, water use, carbon footprint"
	}
];
function Page() {
	const [sortKey, setSortKey] = (0, import_react.useState)("ai_risk_score");
	const [sortAsc, setSortAsc] = (0, import_react.useState)(false);
	const [riskFilter, setRiskFilter] = (0, import_react.useState)("all");
	const { data, isLoading } = useQuery({
		queryKey: ["risk-companies"],
		queryFn: async () => {
			const [companies, countries] = await Promise.all([supabase.from("companies").select("id,name,country_code,city,business_type,ai_risk_level,ai_risk_score,ai_trust_score,ai_quality_score,ai_sustainability_score,certifications"), supabase.from("countries").select("code,name")]);
			return {
				companies: companies.data ?? [],
				countries: countries.data ?? []
			};
		}
	});
	const companies = data?.companies ?? [];
	const countryMap = Object.fromEntries((data?.countries ?? []).map((c) => [c.code, c.name]));
	const stats = (0, import_react.useMemo)(() => ({
		total: companies.length,
		high: companies.filter((c) => c.ai_risk_level === "high").length,
		medium: companies.filter((c) => c.ai_risk_level === "medium").length,
		low: companies.filter((c) => c.ai_risk_level === "low").length
	}), [companies]);
	const riskByCountry = (0, import_react.useMemo)(() => {
		const map = {};
		companies.forEach((c) => {
			const code = c.country_code ?? "??";
			if (!map[code]) map[code] = {
				high: 0,
				medium: 0,
				low: 0
			};
			if (c.ai_risk_level === "high") map[code].high++;
			else if (c.ai_risk_level === "medium") map[code].medium++;
			else map[code].low++;
		});
		return Object.entries(map).map(([code, v]) => ({
			name: countryMap[code] ?? code,
			...v,
			total: v.high + v.medium + v.low
		})).sort((a, b) => b.high - a.high).slice(0, 8);
	}, [companies, countryMap]);
	const filtered = (0, import_react.useMemo)(() => {
		let list = [...companies];
		if (riskFilter !== "all") list = list.filter((c) => c.ai_risk_level === riskFilter);
		list.sort((a, b) => {
			const av = a[sortKey];
			const bv = b[sortKey];
			return sortAsc ? av > bv ? 1 : -1 : av < bv ? 1 : -1;
		});
		return list;
	}, [
		companies,
		riskFilter,
		sortKey,
		sortAsc
	]);
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
				eyebrow: "Intelligence · AI",
				title: "Risk Engine",
				description: "Composite AI risk scoring across labour standards, geopolitics, compliance, financial stability, and environmental factors."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Assessed",
						value: stats.total,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "High Risk",
						value: stats.high,
						delta: {
							value: `${Math.round(stats.high / Math.max(stats.total, 1) * 100)}%`,
							positive: false
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Medium Risk",
						value: stats.medium,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Low Risk",
						value: stats.low,
						delta: {
							value: "verified safe",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-lg border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary mb-1",
							children: "Risk Heat Map"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Risk distribution by country"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: riskByCountry.length > 0 ? riskByCountry : [
										{
											name: "Bangladesh",
											high: 12,
											medium: 34,
											low: 87
										},
										{
											name: "India",
											high: 8,
											medium: 22,
											low: 142
										},
										{
											name: "China",
											high: 19,
											medium: 41,
											low: 63
										},
										{
											name: "Vietnam",
											high: 5,
											medium: 18,
											low: 72
										},
										{
											name: "Pakistan",
											high: 14,
											medium: 28,
											low: 41
										},
										{
											name: "Turkey",
											high: 6,
											medium: 15,
											low: 54
										},
										{
											name: "Cambodia",
											high: 9,
											medium: 21,
											low: 33
										},
										{
											name: "Indonesia",
											high: 7,
											medium: 24,
											low: 48
										}
									],
									layout: "vertical",
									margin: { left: 8 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--border)",
											strokeDasharray: "3 3",
											horizontal: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											stroke: "var(--muted-foreground)",
											fontSize: 11,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "name",
											stroke: "var(--muted-foreground)",
											fontSize: 11,
											width: 80,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											background: "var(--popover)",
											border: "1px solid var(--border)",
											borderRadius: 8,
											fontSize: 12
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "low",
											stackId: "a",
											fill: "var(--success)",
											name: "Low"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "medium",
											stackId: "a",
											fill: "var(--warning)",
											name: "Medium"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "high",
											stackId: "a",
											fill: "var(--destructive)",
											name: "High",
											radius: [
												0,
												4,
												4,
												0
											]
										})
									]
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary mb-1",
							children: "AI Model"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Risk factor weights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: RISK_FACTORS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: f.factor
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-muted-foreground",
										children: [f.weight, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 bg-muted rounded-full overflow-hidden mb-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary rounded-full",
										style: { width: `${f.weight * 4}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted-foreground",
									children: f.description
								})
							] }, f.factor))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "Risk Registry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Supplier risk assessment"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: [
							"all",
							"high",
							"medium",
							"low"
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setRiskFilter(r),
							className: `px-2.5 py-1 rounded text-xs font-mono border capitalize transition-colors ${riskFilter === r ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`,
							children: r
						}, r))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "col-span-4 flex items-center gap-1 hover:text-foreground text-left",
									onClick: () => handleSort("name"),
									children: ["Company ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2",
									children: "Country"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "col-span-2 flex items-center gap-1 hover:text-foreground justify-end",
									onClick: () => handleSort("ai_risk_score"),
									children: ["Risk Score ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "col-span-2 flex items-center gap-1 hover:text-foreground justify-end",
									onClick: () => handleSort("ai_trust_score"),
									children: ["Trust ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "h-3 w-3" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-1 text-right",
									children: "Sustain."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-1 text-right",
									children: "Level"
								})
							]
						}),
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-8 text-center text-sm text-muted-foreground",
							children: "Loading risk data…"
						}),
						filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium truncate",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground capitalize",
										children: c.business_type
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 font-mono text-xs text-muted-foreground",
									children: countryMap[c.country_code ?? ""] ?? c.country_code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono tabular-nums font-semibold ${(c.ai_risk_score ?? 50) >= 70 ? "text-destructive" : (c.ai_risk_score ?? 50) >= 40 ? "text-warning" : "text-success"}`,
										children: c.ai_risk_score ?? "—"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 font-mono tabular-nums text-right text-foreground",
									children: c.ai_trust_score ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-1 font-mono tabular-nums text-right text-muted-foreground",
									children: c.ai_sustainability_score ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-1 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: c.ai_risk_level })
								})
							]
						}, c.id)),
						!isLoading && filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-8 text-center text-sm text-muted-foreground",
							children: "No companies match this risk filter."
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
