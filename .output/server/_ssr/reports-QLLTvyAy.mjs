import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { $ as Sparkles, L as Clock, P as Download, _ as Plus, k as FileText, ot as CircleCheck, st as CircleAlert, tt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-QLLTvyAy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REPORT_TYPES = [
	{
		kind: "supplier",
		label: "Supplier Report",
		description: "Deep profile: capacity, scores, certifications, export history and AI assessment of a single supplier.",
		icon: "🏭",
		time: "~30 sec"
	},
	{
		kind: "country",
		label: "Country Report",
		description: "Full textile industry overview for a country: capacity, companies, export trends, risk environment, key contacts.",
		icon: "🌍",
		time: "~45 sec"
	},
	{
		kind: "market",
		label: "Market Report",
		description: "Category or product segment analysis: demand trends, pricing, top suppliers, emerging markets.",
		icon: "📈",
		time: "~60 sec"
	},
	{
		kind: "pricing",
		label: "Pricing Report",
		description: "Price benchmarking for a product or category across countries, with trend analysis and forecasts.",
		icon: "💰",
		time: "~30 sec"
	},
	{
		kind: "competitor",
		label: "Competitor Report",
		description: "Competitive intelligence: how a supplier compares against peers on scores, capacity and certifications.",
		icon: "🔍",
		time: "~45 sec"
	},
	{
		kind: "trend",
		label: "Trend Report",
		description: "Emerging fabric, product or market trends with demand signals, influencer data and forecast.",
		icon: "✨",
		time: "~60 sec"
	}
];
var STATUS_META = {
	ready: {
		icon: CircleCheck,
		cls: "text-success border-success/30 bg-success/10",
		label: "Ready"
	},
	generating: {
		icon: LoaderCircle,
		cls: "text-warning border-warning/30 bg-warning/10",
		label: "Generating"
	},
	pending: {
		icon: Clock,
		cls: "text-muted-foreground border-border bg-muted/20",
		label: "Pending"
	},
	failed: {
		icon: CircleAlert,
		cls: "text-destructive border-destructive/30 bg-destructive/10",
		label: "Failed"
	}
};
var MOCK_REPORTS = [
	{
		id: "rp1",
		kind: "supplier",
		title: "Arvind Mills Ltd — Full Intelligence Report",
		status: "ready",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 2)).toISOString()
	},
	{
		id: "rp2",
		kind: "country",
		title: "Bangladesh Textile Industry Report Q2 2026",
		status: "ready",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 5)).toISOString()
	},
	{
		id: "rp3",
		kind: "pricing",
		title: "Cotton Fabric Price Benchmarking — South Asia",
		status: "ready",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 8)).toISOString()
	},
	{
		id: "rp4",
		kind: "market",
		title: "Sustainable Denim Market Analysis 2026",
		status: "generating",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toISOString()
	}
];
function StatusBadge({ status }) {
	const meta = STATUS_META[status] ?? STATUS_META.pending;
	const Icon = meta.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${meta.cls}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-2.5 w-2.5 ${status === "generating" ? "animate-spin" : ""}` }), meta.label]
	});
}
function Page() {
	const [generating, setGenerating] = (0, import_react.useState)(null);
	const [localReports, setLocalReports] = (0, import_react.useState)([]);
	const { data: dbReports } = useQuery({
		queryKey: ["reports"],
		queryFn: async () => {
			return (await supabase.from("reports").select("*").order("created_at", { ascending: false })).data ?? [];
		}
	});
	const reports = [...localReports, ...dbReports && dbReports.length > 0 ? dbReports : MOCK_REPORTS];
	const generateReport = async (kind, title) => {
		setGenerating(kind);
		const newId = crypto.randomUUID();
		const newReport = {
			id: newId,
			kind,
			title: `${title} — ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-GB")}`,
			status: "generating",
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setLocalReports((prev) => [newReport, ...prev]);
		toast.info(`Generating ${title}...`);
		supabase.auth.getUser().then(({ data: { user } }) => {
			if (user) supabase.from("reports").insert({
				user_id: user.id,
				kind,
				title: newReport.title,
				status: "generating"
			}).then(({ error }) => {
				if (error) console.warn("Supabase report insert skipped:", error.message);
			});
		});
		setTimeout(() => {
			setLocalReports((prev) => prev.map((r) => r.id === newId ? {
				...r,
				status: "ready"
			} : r));
			setGenerating(null);
			toast.success(`${title} is ready for download!`);
		}, 4e3);
	};
	const handleDownloadReport = (r) => {
		const content = `========================================================================
GMINTEL AI REPORT
Generated: ${new Date(r.created_at).toLocaleString()}
Report ID: ${r.id}
Category: ${r.kind.toUpperCase()}
Title: ${r.title}
========================================================================

EXECUTIVE SUMMARY
This report compiles global textile sourcing intelligence, trust indices, and supply chain risk scores. Data is aggregated from public shipping records, certified bodies, and live trade flows.

KEY FINDINGS & METRICS:
- Market Confidence: STABLE
- AI Trust Score: 89/100
- Priority Action: Audit Tier-2 supplier certifications.

This is an automatically generated document. All intelligence estimations are marked with AI tags.
========================================================================`;
		const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${r.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.txt`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
		toast.success("Downloading report...");
	};
	const readyCount = reports.filter((r) => r.status === "ready").length;
	const typeMap = Object.fromEntries(REPORT_TYPES.map((t) => [t.kind, t.label]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Workflows",
				title: "AI Reports",
				description: "Generate one-click intelligence reports on suppliers, countries, markets, pricing, trends and competitors."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Reports",
						value: reports.length,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Ready",
						value: readyCount,
						delta: {
							value: "download ready",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Report Types",
						value: REPORT_TYPES.length,
						hint: "template library"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Gen Time",
						value: "42s",
						hint: "AI-powered",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-mono uppercase tracking-widest text-primary mb-3",
				children: "Report Library · Generate New"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
				children: REPORT_TYPES.map((rt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl mb-3",
							children: rt.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold text-foreground",
							children: rt.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1.5 leading-relaxed",
							children: rt.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono text-muted-foreground",
								children: rt.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "gap-1.5 h-7 text-xs",
								disabled: generating === rt.kind,
								onClick: () => generateReport(rt.kind, rt.label),
								children: generating === rt.kind ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Generating…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Generate"] })
							})]
						})
					]
				}, rt.kind))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "My Reports"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Generated intelligence reports"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-7 sm:col-span-5",
									children: "Report Title"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-2",
									children: "Generated"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-2 text-right",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 sm:col-span-1 text-right",
									children: "Action"
								})
							]
						}),
						reports.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-8 text-center text-sm text-muted-foreground",
							children: "No reports generated yet. Use the library above to create your first report."
						}),
						reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-7 sm:col-span-5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium truncate",
										children: r.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground sm:hidden truncate mt-0.5",
										children: [
											typeMap[r.kind] ?? r.kind,
											" · ",
											new Date(r.created_at).toLocaleDateString("en-GB")
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2 text-xs text-muted-foreground capitalize",
									children: typeMap[r.kind] ?? r.kind
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-2 text-xs font-mono text-muted-foreground",
									children: new Date(r.created_at).toLocaleDateString("en-GB")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-2 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 sm:col-span-1 text-right",
									children: r.status === "ready" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDownloadReport(r),
										className: "text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-muted",
										title: "Download",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
									})
								})
							]
						}, r.id))
					]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
