import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { $ as Earth, K as Activity, a as TrendingUp, z as Building2 } from "../_libs/lucide-react.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-95P8hFUr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MONTHLY_ADDITIONS = [
	{
		month: "Jan",
		companies: 142,
		countries: 8
	},
	{
		month: "Feb",
		companies: 198,
		countries: 11
	},
	{
		month: "Mar",
		companies: 234,
		countries: 13
	},
	{
		month: "Apr",
		companies: 287,
		countries: 15
	},
	{
		month: "May",
		companies: 312,
		countries: 16
	},
	{
		month: "Jun",
		companies: 378,
		countries: 18
	},
	{
		month: "Jul",
		companies: 421,
		countries: 19
	},
	{
		month: "Aug",
		companies: 389,
		countries: 17
	},
	{
		month: "Sep",
		companies: 445,
		countries: 20
	},
	{
		month: "Oct",
		companies: 502,
		countries: 22
	},
	{
		month: "Nov",
		companies: 478,
		countries: 21
	},
	{
		month: "Dec",
		companies: 561,
		countries: 24
	}
];
var PLATFORM_USAGE = [
	{
		day: "Mon",
		searches: 1240,
		rfqs: 34,
		reports: 12
	},
	{
		day: "Tue",
		searches: 1580,
		rfqs: 42,
		reports: 18
	},
	{
		day: "Wed",
		searches: 1320,
		rfqs: 38,
		reports: 15
	},
	{
		day: "Thu",
		searches: 1890,
		rfqs: 56,
		reports: 24
	},
	{
		day: "Fri",
		searches: 2140,
		rfqs: 61,
		reports: 28
	},
	{
		day: "Sat",
		searches: 820,
		rfqs: 18,
		reports: 8
	},
	{
		day: "Sun",
		searches: 680,
		rfqs: 12,
		reports: 6
	}
];
var RISK_DISTRIBUTION = [
	{
		name: "Low Risk",
		value: 58,
		fill: "var(--success)"
	},
	{
		name: "Medium Risk",
		value: 28,
		fill: "var(--warning)"
	},
	{
		name: "High Risk",
		value: 14,
		fill: "var(--destructive)"
	}
];
var TOP_PRODUCTS = [
	{
		product: "Cotton Fabric",
		companies: 2840
	},
	{
		product: "Polyester Yarn",
		companies: 2210
	},
	{
		product: "Denim",
		companies: 1840
	},
	{
		product: "Knitwear",
		companies: 1620
	},
	{
		product: "Technical Textile",
		companies: 1340
	},
	{
		product: "Silk",
		companies: 980
	},
	{
		product: "Wool",
		companies: 820
	},
	{
		product: "Linen",
		companies: 640
	}
];
function Page() {
	const { data } = useQuery({
		queryKey: ["analytics"],
		queryFn: async () => {
			const [companies, countries, prices, news] = await Promise.all([
				supabase.from("companies").select("id,country_code,business_type,ai_risk_level,created_at", { count: "exact" }),
				supabase.from("countries").select("code"),
				supabase.from("price_points").select("id", { count: "exact" }),
				supabase.from("news_items").select("id", { count: "exact" })
			]);
			return {
				totalCompanies: companies.count ?? 0,
				totalCountries: countries.data?.length ?? 0,
				totalPrices: prices.count ?? 0,
				totalNews: news.count ?? 0,
				companies: companies.data ?? []
			};
		}
	});
	(0, import_react.useMemo)(() => {
		const map = {};
		(data?.companies ?? []).forEach((c) => {
			const t = c.business_type ?? "unknown";
			map[t] = (map[t] ?? 0) + 1;
		});
		return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, value]) => ({
			name,
			value
		}));
	}, [data]);
	const stats = {
		companies: data?.totalCompanies || 30241,
		countries: data?.totalCountries || 43,
		prices: data?.totalPrices || 2418,
		news: data?.totalNews || 847
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Workflows",
				title: "Analytics",
				description: "Platform-level analytics: data coverage, discovery trends, risk distribution, and usage metrics."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Companies",
						value: stats.companies.toLocaleString(),
						delta: {
							value: "+12.4%",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Countries Covered",
						value: stats.countries,
						delta: {
							value: "+3 this month",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Price Records",
						value: stats.prices.toLocaleString(),
						hint: "refreshed daily",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "News Articles",
						value: stats.news.toLocaleString(),
						delta: {
							value: "+54 today",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" })
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
							children: "Data Coverage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Companies added per month"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: MONTHLY_ADDITIONS,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "companyGrad",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "var(--chart-1)",
												stopOpacity: .4
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "var(--chart-1)",
												stopOpacity: 0
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--border)",
											strokeDasharray: "3 3",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											stroke: "var(--muted-foreground)",
											fontSize: 11,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: "var(--muted-foreground)",
											fontSize: 11,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											background: "var(--popover)",
											border: "1px solid var(--border)",
											borderRadius: 8,
											fontSize: 12
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "companies",
											stroke: "var(--chart-1)",
											fill: "url(#companyGrad)",
											strokeWidth: 2,
											name: "Companies"
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
							children: "Risk Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "AI risk distribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-48 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: RISK_DISTRIBUTION,
									cx: "50%",
									cy: "50%",
									innerRadius: 50,
									outerRadius: 80,
									paddingAngle: 3,
									dataKey: "value",
									children: RISK_DISTRIBUTION.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.fill }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "var(--popover)",
										border: "1px solid var(--border)",
										borderRadius: 8,
										fontSize: 12
									},
									formatter: (v) => [`${v}%`, ""]
								})] })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 mt-2",
							children: RISK_DISTRIBUTION.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-full",
										style: { background: r.fill }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: r.name
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono tabular-nums font-semibold",
									children: [r.value, "%"]
								})]
							}, r.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary mb-1",
							children: "Usage Metrics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Weekly platform activity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: PLATFORM_USAGE,
									barCategoryGap: "25%",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--border)",
											strokeDasharray: "3 3",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "day",
											stroke: "var(--muted-foreground)",
											fontSize: 11,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: "var(--muted-foreground)",
											fontSize: 11,
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
											dataKey: "searches",
											fill: "var(--chart-1)",
											radius: [
												3,
												3,
												0,
												0
											],
											name: "Searches"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "rfqs",
											fill: "var(--chart-2)",
											radius: [
												3,
												3,
												0,
												0
											],
											name: "RFQs"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "reports",
											fill: "var(--chart-3)",
											radius: [
												3,
												3,
												0,
												0
											],
											name: "Reports"
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
							children: "Product Coverage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Top product categories by supplier count"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: TOP_PRODUCTS,
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
											fontSize: 10,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "product",
											stroke: "var(--muted-foreground)",
											fontSize: 10,
											width: 100,
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
											dataKey: "companies",
											fill: "var(--primary)",
											radius: [
												0,
												4,
												4,
												0
											],
											name: "Companies"
										})
									]
								})
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
