import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { M as Clock, f as RefreshCw, nt as CircleAlert, p as Radar, tt as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/discovery-B4Ft7Ybm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_PIPELINE = [
	{
		id: "d1",
		name: "Shahi Exports Pvt Ltd",
		country_code: "IN",
		city: "Bangalore",
		business_type: "manufacturer",
		status: "pending_review",
		ai_trust_score: 82,
		ai_risk_level: "low",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 36e5 * 2),
		source: "LinkedIn + Trade Portal"
	},
	{
		id: "d2",
		name: "Ha Tien Weaving Co.",
		country_code: "VN",
		city: "Ho Chi Minh City",
		business_type: "manufacturer",
		status: "pending_review",
		ai_trust_score: 74,
		ai_risk_level: "medium",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 36e5 * 5),
		source: "Web Crawl"
	},
	{
		id: "d3",
		name: "Karachi Textile Mills",
		country_code: "PK",
		city: "Karachi",
		business_type: "supplier",
		status: "pending_review",
		ai_trust_score: 68,
		ai_risk_level: "medium",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 864e5),
		source: "Trade Directory"
	},
	{
		id: "d4",
		name: "EcoWear Bangladesh Ltd",
		country_code: "BD",
		city: "Dhaka",
		business_type: "exporter",
		status: "verified",
		ai_trust_score: 91,
		ai_risk_level: "low",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 2),
		source: "Govt Export DB"
	},
	{
		id: "d5",
		name: "Izmir Denim Factory",
		country_code: "TR",
		city: "Izmir",
		business_type: "manufacturer",
		status: "verified",
		ai_trust_score: 87,
		ai_risk_level: "low",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 2),
		source: "Chamber of Commerce"
	},
	{
		id: "d6",
		name: "Guangzhou Fast Fabrics",
		country_code: "CN",
		city: "Guangzhou",
		business_type: "manufacturer",
		status: "pending_review",
		ai_trust_score: 61,
		ai_risk_level: "high",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 3),
		source: "Alibaba Scrape"
	},
	{
		id: "d7",
		name: "Marocain Textiles SA",
		country_code: "MA",
		city: "Casablanca",
		business_type: "manufacturer",
		status: "pending_review",
		ai_trust_score: 72,
		ai_risk_level: "low",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 4),
		source: "B2B Portal"
	},
	{
		id: "d8",
		name: "Camtex Apparel Cambodia",
		country_code: "KH",
		city: "Phnom Penh",
		business_type: "manufacturer",
		status: "verified",
		ai_trust_score: 79,
		ai_risk_level: "medium",
		discovered_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 5),
		source: "Trade Fair Data"
	}
];
var WEEKLY_DISCOVERY = [
	{
		week: "W1",
		discovered: 312,
		verified: 87
	},
	{
		week: "W2",
		discovered: 428,
		verified: 119
	},
	{
		week: "W3",
		discovered: 381,
		verified: 104
	},
	{
		week: "W4",
		discovered: 502,
		verified: 143
	},
	{
		week: "W5",
		discovered: 467,
		verified: 128
	},
	{
		week: "W6",
		discovered: 594,
		verified: 168
	},
	{
		week: "W7",
		discovered: 611,
		verified: 182
	},
	{
		week: "W8",
		discovered: 538,
		verified: 154
	}
];
function StatusBadge({ status }) {
	const map = {
		verified: {
			cls: "text-success border-success/30 bg-success/10",
			icon: CircleCheck,
			label: "Verified"
		},
		pending_review: {
			cls: "text-warning border-warning/30 bg-warning/10",
			icon: Clock,
			label: "Pending"
		},
		rejected: {
			cls: "text-destructive border-destructive/30 bg-destructive/10",
			icon: CircleAlert,
			label: "Rejected"
		}
	};
	const m = map[status] ?? map.pending_review;
	const Icon = m.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${m.cls}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-2.5 w-2.5" }), m.label]
	});
}
function Page() {
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const { data } = useQuery({
		queryKey: ["discovery"],
		queryFn: async () => {
			return (await supabase.from("companies").select("id,name,country_code,city,business_type,status,ai_trust_score,ai_risk_level,created_at").order("created_at", { ascending: false }).limit(50)).data ?? [];
		}
	});
	const dbCompanies = data ?? [];
	const pipeline = dbCompanies.length > 0 ? dbCompanies.map((c) => ({
		...c,
		discovered_at: new Date(c.created_at),
		source: "Database"
	})) : MOCK_PIPELINE;
	const filtered = (0, import_react.useMemo)(() => statusFilter === "all" ? pipeline : pipeline.filter((c) => c.status === statusFilter), [pipeline, statusFilter]);
	const stats = (0, import_react.useMemo)(() => ({
		total: pipeline.length,
		pending: pipeline.filter((c) => c.status === "pending_review").length,
		verified: pipeline.filter((c) => c.status === "verified").length,
		rate: Math.round(pipeline.filter((c) => c.status === "verified").length / Math.max(pipeline.length, 1) * 100)
	}), [pipeline]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Intelligence · AI",
				title: "Discovery Pipeline",
				description: "GMIntel's AI continuously crawls trade portals, government databases, B2B platforms and web sources to discover and verify new textile businesses.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), " Run discovery"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Discovered",
						value: stats.total,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { className: "h-4 w-4" }),
						delta: {
							value: "+54 today",
							positive: true
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending Review",
						value: stats.pending,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Verified",
						value: stats.verified,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }),
						delta: {
							value: "+12 today",
							positive: true
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Verify Rate",
						value: `${stats.rate}%`,
						hint: "AI precision"
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
							children: "Discovery Pipeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Weekly discovered vs verified"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: WEEKLY_DISCOVERY,
									barCategoryGap: "30%",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--border)",
											strokeDasharray: "3 3",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "week",
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
											dataKey: "discovered",
											fill: "var(--muted)",
											radius: [
												3,
												3,
												0,
												0
											],
											name: "Discovered"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "verified",
											fill: "var(--primary)",
											radius: [
												3,
												3,
												0,
												0
											],
											name: "Verified"
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
							children: "AI Data Sources"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mb-4",
							children: "Discovery channels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									source: "Trade Portals",
									count: 1842,
									pct: 38
								},
								{
									source: "Web Crawl",
									count: 1205,
									pct: 25
								},
								{
									source: "Govt Databases",
									count: 921,
									pct: 19
								},
								{
									source: "B2B Platforms",
									count: 578,
									pct: 12
								},
								{
									source: "Trade Fairs",
									count: 284,
									pct: 6
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: s.source
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-muted-foreground",
									children: s.count.toLocaleString()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 bg-muted rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-primary rounded-full",
									style: { width: `${s.pct}%` }
								})
							})] }, s.source))
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
						children: "Discovery Queue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Recently discovered companies"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: [
							"all",
							"pending_review",
							"verified"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStatusFilter(s),
							className: `px-2.5 py-1 rounded text-xs font-mono border transition-colors ${statusFilter === s ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`,
							children: s === "all" ? "All" : s === "pending_review" ? "Pending" : "Verified"
						}, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4",
								children: "Company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2",
								children: "Country"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2",
								children: "Source"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right",
								children: "Trust"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right",
								children: "Status"
							})
						]
					}), filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: c.city
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2 font-mono text-xs text-muted-foreground",
								children: c.country_code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2 text-xs text-muted-foreground capitalize",
								children: c.business_type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-2 text-xs text-muted-foreground",
								children: c.source
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right font-mono tabular-nums text-foreground",
								children: c.ai_trust_score
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status ?? "pending_review" })
							})
						]
					}, c.id))]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
