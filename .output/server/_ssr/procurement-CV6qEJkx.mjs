import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { $ as Sparkles, B as ChevronUp, H as ChevronDown, R as ClipboardList, _ as Plus, n as X, p as Send } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/procurement-CV6qEJkx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CERT_OPTIONS = [
	"GOTS",
	"OEKO-TEX",
	"ISO 9001",
	"SA8000",
	"BSCI",
	"Fair Trade",
	"WRAP"
];
var STATUS_COLORS = {
	draft: "text-muted-foreground border-border bg-muted/20",
	active: "text-warning border-warning/30 bg-warning/10",
	matched: "text-success border-success/30 bg-success/10",
	closed: "text-muted-foreground border-border bg-muted/20"
};
var MOCK_RFQS = [
	{
		id: "r1",
		product: "100% Cotton Greige Fabric",
		quantity: 5e3,
		unit: "kg",
		target_price: 1.45,
		currency: "USD",
		country_code: "IN",
		lead_time_days: 30,
		status: "matched",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 3)).toISOString()
	},
	{
		id: "r2",
		product: "GOTS Certified Organic Denim",
		quantity: 2e3,
		unit: "m²",
		target_price: 4.2,
		currency: "USD",
		country_code: "TR",
		lead_time_days: 45,
		status: "active",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString()
	},
	{
		id: "r3",
		product: "Polyester Microfibre",
		quantity: 1e4,
		unit: "kg",
		target_price: 1.1,
		currency: "USD",
		country_code: "CN",
		lead_time_days: 21,
		status: "draft",
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	}
];
var AI_MATCHES = [
	{
		name: "Arvind Mills Ltd",
		country: "IN",
		trust: 94,
		risk: "low",
		moq: 2e3,
		lead: 28,
		match: 97
	},
	{
		name: "Vardhman Textiles",
		country: "IN",
		trust: 91,
		risk: "low",
		moq: 1e3,
		lead: 35,
		match: 92
	},
	{
		name: "Bombay Dyeing",
		country: "IN",
		trust: 86,
		risk: "medium",
		moq: 500,
		lead: 30,
		match: 88
	},
	{
		name: "DCM Shriram Industries",
		country: "IN",
		trust: 83,
		risk: "low",
		moq: 3e3,
		lead: 40,
		match: 81
	}
];
function Page() {
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		product: "",
		quantity: "",
		unit: "kg",
		target_price: "",
		country_code: "",
		lead_time_days: "30",
		certs: [],
		notes: ""
	});
	const [expandedRfq, setExpandedRfq] = (0, import_react.useState)(null);
	const { data: rfqData, refetch } = useQuery({
		queryKey: ["rfqs"],
		queryFn: async () => {
			return (await supabase.from("rfqs").select("*").order("created_at", { ascending: false })).data ?? [];
		}
	});
	const rfqs = rfqData && rfqData.length > 0 ? rfqData : MOCK_RFQS;
	const toggleCert = (cert) => setForm((f) => ({
		...f,
		certs: f.certs.includes(cert) ? f.certs.filter((c) => c !== cert) : [...f.certs, cert]
	}));
	const submitRfq = async () => {
		if (!form.product || !form.quantity) return;
		const { data: { user } } = await supabase.auth.getUser();
		if (!user) {
			toast.error("Please sign in to submit an RFQ");
			return;
		}
		const { error } = await supabase.from("rfqs").insert({
			user_id: user.id,
			product: form.product,
			quantity: Number(form.quantity),
			target_price: Number(form.target_price),
			country_code: form.country_code || null,
			lead_time_days: Number(form.lead_time_days),
			certifications: form.certs,
			notes: form.notes,
			status: "draft"
		});
		if (error) {
			toast.error(`Failed to submit RFQ: ${error.message}`);
			return;
		}
		setShowForm(false);
		setForm({
			product: "",
			quantity: "",
			unit: "kg",
			target_price: "",
			country_code: "",
			lead_time_days: "30",
			certs: [],
			notes: ""
		});
		refetch();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Workflows · AI",
				title: "Procurement Copilot",
				description: "Submit RFQs and let AI match you with ranked, verified suppliers based on your requirements.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => setShowForm(!showForm),
					className: "gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New RFQ"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total RFQs",
						value: rfqs.length,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Matched",
						value: rfqs.filter((r) => r.status === "matched").length,
						delta: {
							value: "AI-ranked",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active",
						value: rfqs.filter((r) => r.status === "active").length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Match Score",
						value: "89%",
						hint: "supplier fit"
					})
				]
			}),
			showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-primary/30 bg-gradient-to-br from-primary/[0.04] to-transparent p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "New Request for Quotation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Describe your sourcing requirement"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowForm(false),
							className: "text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1",
								children: "Product / Fabric *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.product,
								onChange: (e) => setForm((f) => ({
									...f,
									product: e.target.value
								})),
								placeholder: "e.g. 100% Cotton Greige Fabric, 200 GSM",
								className: "w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1",
										children: "Quantity *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.quantity,
										onChange: (e) => setForm((f) => ({
											...f,
											quantity: e.target.value
										})),
										placeholder: "e.g. 5000",
										className: "w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-24",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1",
										children: "Unit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: form.unit,
										onChange: (e) => setForm((f) => ({
											...f,
											unit: e.target.value
										})),
										className: "w-full h-9 px-2 rounded border border-border bg-card text-sm outline-none focus:border-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "kg" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "m²" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "yard" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "piece" })
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1",
								children: [
									"Target Price (USD/",
									form.unit,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.target_price,
								onChange: (e) => setForm((f) => ({
									...f,
									target_price: e.target.value
								})),
								placeholder: "e.g. 1.50",
								className: "w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1",
								children: "Max Lead Time (days)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.lead_time_days,
								onChange: (e) => setForm((f) => ({
									...f,
									lead_time_days: e.target.value
								})),
								className: "w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2",
									children: "Required Certifications"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: CERT_OPTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toggleCert(c),
										className: `px-2.5 py-1 rounded-full text-xs border transition-colors ${form.certs.includes(c) ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`,
										children: c
									}, c))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1",
									children: "Additional Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.notes,
									onChange: (e) => setForm((f) => ({
										...f,
										notes: e.target.value
									})),
									placeholder: "Colour preferences, packaging, sample requirements…",
									rows: 3,
									className: "w-full px-3 py-2 rounded border border-border bg-card text-sm outline-none focus:border-primary resize-none"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2 mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => setShowForm(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: submitRfq,
							className: "gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), " Submit RFQ"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "My RFQs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Active sourcing requests"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: rfqs.map((rfq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-3 hover:bg-muted/40 transition-colors cursor-pointer",
						onClick: () => setExpandedRfq(expandedRfq === rfq.id ? null : rfq.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-sm truncate",
										children: rfq.product
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${STATUS_COLORS[rfq.status ?? "draft"]}`,
										children: rfq.status
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground font-mono mt-0.5",
									children: [
										rfq.quantity?.toLocaleString(),
										" units · $",
										rfq.target_price,
										"/unit · ",
										rfq.lead_time_days,
										"d lead time"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono text-muted-foreground",
									children: new Date(rfq.created_at).toLocaleDateString("en-US", { timeZone: "UTC" })
								}), expandedRfq === rfq.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })]
							})]
						})
					}), expandedRfq === rfq.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 pb-4 border-t border-border/50 bg-muted/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-3 mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono uppercase tracking-widest text-primary",
								children: "AI Matched Suppliers"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-2 gap-2",
							children: AI_MATCHES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono bg-primary/15 text-primary px-1 rounded",
										children: ["#", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: m.name
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground font-mono mt-0.5",
									children: [
										m.country,
										" · MOQ ",
										m.moq.toLocaleString(),
										" · ",
										m.lead,
										"d"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-sm font-semibold text-primary",
										children: [m.match, "%"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground",
										children: "match"
									})]
								})]
							}, m.name))
						})]
					})] }, rfq.id))
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
