import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { $ as Earth, G as ArrowDownRight, H as ArrowUpRight, J as Sparkles, a as TrendingUp, rt as ChartNoAxesColumn } from "../_libs/lucide-react.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { a as YAxis, c as Line, i as LineChart, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market-Bk2vz_V5.js
var import_jsx_runtime = require_jsx_runtime();
var TRENDING_CATEGORIES = [
	{
		name: "Performance Sportswear",
		growth: 34,
		demand: "Very High",
		region: "Americas + EU",
		trend: "up"
	},
	{
		name: "Sustainable Denim",
		growth: 28,
		demand: "High",
		region: "EU + Asia",
		trend: "up"
	},
	{
		name: "Technical Textiles",
		growth: 22,
		demand: "High",
		region: "Global",
		trend: "up"
	},
	{
		name: "Linen & Natural Fibres",
		growth: 18,
		demand: "High",
		region: "EU + Oceania",
		trend: "up"
	},
	{
		name: "Athleisure Fabrics",
		growth: 15,
		demand: "Medium-High",
		region: "Global",
		trend: "up"
	},
	{
		name: "Conventional Cotton",
		growth: -3,
		demand: "Medium",
		region: "Global",
		trend: "down"
	},
	{
		name: "Fast Fashion Synthetics",
		growth: -8,
		demand: "Low",
		region: "Declining",
		trend: "down"
	},
	{
		name: "Wool Suiting",
		growth: 6,
		demand: "Steady",
		region: "EU + Japan",
		trend: "up"
	}
];
var EXPORT_MOMENTUM = [
	{
		country: "Bangladesh",
		exports: 42.6,
		change: 18.2
	},
	{
		country: "Vietnam",
		exports: 38.1,
		change: 12.4
	},
	{
		country: "India",
		exports: 31.4,
		change: 9.8
	},
	{
		country: "China",
		exports: 118.2,
		change: -2.1
	},
	{
		country: "Turkey",
		exports: 19.8,
		change: 7.3
	},
	{
		country: "Pakistan",
		exports: 14.2,
		change: 5.6
	},
	{
		country: "Cambodia",
		exports: 8.9,
		change: 14.7
	},
	{
		country: "Indonesia",
		exports: 11.3,
		change: 3.2
	}
];
var DEMAND_TREND = Array.from({ length: 12 }).map((_, i) => ({
	month: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][i],
	sportswear: 80 + Math.sin(i / 2) * 8 + i * 2.2,
	sustainable: 60 + Math.sin(i / 3) * 6 + i * 1.8,
	technical: 55 + Math.sin(i / 4) * 4 + i * 1.4
}));
var AI_SIGNALS = [
	{
		signal: "EU demand for GOTS-certified fabric rising 22% QoQ — lock Q4 volumes now",
		type: "opportunity",
		confidence: 91
	},
	{
		signal: "Bangladesh wage review scheduled Q3 may push garment costs up 4–6%",
		type: "risk",
		confidence: 84
	},
	{
		signal: "China synthetic fibre overcapacity creating buyer-favourable pricing window",
		type: "opportunity",
		confidence: 78
	},
	{
		signal: "Turkish denim orders fully booked through Q1 2027 — seek alternatives",
		type: "alert",
		confidence: 96
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Intelligence",
				title: "Market Intelligence",
				description: "Global textile market trends, export momentum, category demand signals and AI-powered market insights."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Global Trade Volume",
						value: "$842B",
						delta: {
							value: "+6.2% YoY",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Trending Categories",
						value: "18",
						delta: {
							value: "+3 new",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "AI Signals Active",
						value: "47",
						hint: "updated hourly",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Markets Covered",
						value: "43",
						hint: "countries",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumn, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-mono uppercase tracking-widest text-primary",
					children: "AI Market Signals · Live"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-3",
					children: AI_SIGNALS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `rounded-lg border p-4 ${s.type === "opportunity" ? "border-success/30 bg-success/5" : s.type === "risk" ? "border-destructive/30 bg-destructive/5" : "border-warning/30 bg-warning/5"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: `h-4 w-4 shrink-0 mt-0.5 ${s.type === "opportunity" ? "text-success" : s.type === "risk" ? "text-destructive" : "text-warning"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-foreground leading-snug",
									children: s.signal
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${s.type === "opportunity" ? "border-success/30 text-success bg-success/10" : s.type === "risk" ? "border-destructive/30 text-destructive bg-destructive/10" : "border-warning/30 text-warning bg-warning/10"}`,
										children: s.type
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono text-muted-foreground",
										children: [s.confidence, "% confidence"]
									})]
								})]
							})]
						})
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-lg border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary mb-1",
							children: "Demand Index"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-1",
							children: "Category demand momentum · 12 months"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 text-[10px] font-mono mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-sm",
										style: { background: "var(--chart-1)" }
									}), "Sportswear"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-sm",
										style: { background: "var(--chart-2)" }
									}), "Sustainable"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-sm",
										style: { background: "var(--chart-3)" }
									}), "Technical"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: DEMAND_TREND,
									children: [
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "sportswear",
											stroke: "var(--chart-1)",
											strokeWidth: 2,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "sustainable",
											stroke: "var(--chart-2)",
											strokeWidth: 2,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "technical",
											stroke: "var(--chart-3)",
											strokeWidth: 2,
											dot: false
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
							children: "Export Momentum"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Top exporters ($B, YoY %)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: EXPORT_MOMENTUM.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: c.country
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-mono text-muted-foreground",
									children: [
										"$",
										c.exports,
										"B exports"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-center gap-1 text-sm font-mono tabular-nums ${c.change >= 0 ? "text-success" : "text-destructive"}`,
									children: [
										c.change >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-3.5 w-3.5" }),
										Math.abs(c.change),
										"%"
									]
								})]
							}, c.country))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "Category Intelligence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Trending textile categories"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3",
								children: "Region"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2",
								children: "Demand"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2 text-right",
								children: "YoY Growth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right",
								children: "Trend"
							})
						]
					}), TRENDING_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4 font-medium",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3 text-xs text-muted-foreground",
								children: c.region
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2 text-xs text-muted-foreground",
								children: c.demand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `col-span-2 text-right font-mono tabular-nums font-semibold ${c.growth >= 0 ? "text-success" : "text-destructive"}`,
								children: [
									c.growth >= 0 ? "+" : "",
									c.growth,
									"%"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 flex justify-end",
								children: c.trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-4 w-4 text-destructive" })
							})
						]
					}, c.name))]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
