import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { k as GitCompare, n as X, v as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-Df0O_F_5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COMPARISON_FIELDS = [
	{
		key: "country_code",
		label: "Country"
	},
	{
		key: "city",
		label: "City"
	},
	{
		key: "business_type",
		label: "Business Type"
	},
	{
		key: "employees_range",
		label: "Employees"
	},
	{
		key: "year_founded",
		label: "Founded"
	},
	{
		key: "monthly_capacity",
		label: "Monthly Capacity"
	},
	{
		key: "moq",
		label: "Min. Order Qty"
	},
	{
		key: "lead_time_days",
		label: "Lead Time (days)"
	},
	{
		key: "ai_trust_score",
		label: "Trust Score"
	},
	{
		key: "ai_quality_score",
		label: "Quality Score"
	},
	{
		key: "ai_risk_score",
		label: "Risk Score"
	},
	{
		key: "ai_sustainability_score",
		label: "Sustainability"
	},
	{
		key: "ai_risk_level",
		label: "Risk Level"
	},
	{
		key: "certifications",
		label: "Certifications"
	},
	{
		key: "products",
		label: "Products"
	},
	{
		key: "export_countries",
		label: "Export Markets"
	}
];
function ScoreBar({ value, max = 100 }) {
	if (value == null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-muted-foreground text-sm",
		children: "—"
	});
	const pct = Math.min(100, value / max * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `h-full rounded-full ${pct >= 70 ? "bg-success" : pct >= 40 ? "bg-warning" : "bg-destructive"}`,
				style: { width: `${pct}%` }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-sm tabular-nums text-foreground w-8 text-right",
			children: value
		})]
	});
}
function renderValue(key, value) {
	if (value == null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-muted-foreground text-sm",
		children: "—"
	});
	if (key === "ai_risk_level") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: value });
	if ([
		"ai_trust_score",
		"ai_quality_score",
		"ai_risk_score",
		"ai_sustainability_score"
	].includes(key)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, { value });
	if (Array.isArray(value)) {
		if (value.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground text-sm",
			children: "None listed"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-1",
			children: [value.slice(0, 4).map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] px-1.5 py-0.5 rounded bg-muted border border-border font-mono",
				children: v
			}, i)), value.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[10px] text-muted-foreground font-mono",
				children: ["+", value.length - 4]
			})]
		});
	}
	if (key === "moq") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-sm font-mono tabular-nums",
		children: [value.toLocaleString(), " units"]
	});
	if (key === "monthly_capacity") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-sm font-mono tabular-nums",
		children: [value.toLocaleString(), " units"]
	});
	if (key === "lead_time_days") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-sm font-mono",
		children: [value, " days"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-sm text-foreground capitalize",
		children: String(value)
	});
}
function Page() {
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [showPicker, setShowPicker] = (0, import_react.useState)(false);
	const { data } = useQuery({
		queryKey: ["compare-companies"],
		queryFn: async () => {
			return (await supabase.from("companies").select("id,name,country_code,city,business_type,employees_range,year_founded,monthly_capacity,moq,lead_time_days,products,certifications,export_countries,ai_trust_score,ai_quality_score,ai_risk_score,ai_sustainability_score,ai_risk_level")).data ?? [];
		}
	});
	const companies = data ?? [];
	const selected = (0, import_react.useMemo)(() => selectedIds.map((id) => companies.find((c) => c.id === id)).filter(Boolean), [selectedIds, companies]);
	const searchResults = (0, import_react.useMemo)(() => companies.filter((c) => !selectedIds.includes(c.id) && c.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8), [
		companies,
		selectedIds,
		searchQuery
	]);
	const addCompany = (id) => {
		if (selectedIds.length < 3) {
			setSelectedIds((p) => [...p, id]);
			setShowPicker(false);
			setSearchQuery("");
		}
	};
	const removeCompany = (id) => setSelectedIds((p) => p.filter((x) => x !== id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Intelligence",
				title: "Company Comparison",
				description: "Compare up to 3 textile companies side by side across trust scores, capacity, certifications and AI risk ratings."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 flex-wrap",
				children: [selected.map((c) => c && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/40 bg-primary/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground font-mono",
						children: [
							c.country_code,
							" · ",
							c.business_type
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => removeCompany(c.id),
						className: "text-muted-foreground hover:text-destructive transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}, c.id)), selectedIds.length < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowPicker(!showPicker),
						className: "flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add company"]
					}), showPicker && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-full left-0 mt-1 w-72 rounded-lg border border-border bg-popover shadow-xl z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search companies…",
							className: "w-full h-9 px-3 rounded-t-lg border-b border-border bg-transparent text-sm outline-none",
							autoFocus: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-h-56 overflow-y-auto",
							children: [searchResults.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => addCompany(c.id),
								className: "w-full text-left px-3 py-2 text-sm hover:bg-muted/60 transition-colors border-b border-border/50 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground font-mono",
									children: [
										c.country_code,
										" · ",
										c.business_type
									]
								})]
							}, c.id)), searchResults.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 text-sm text-muted-foreground",
								children: "No companies found"
							})]
						})]
					})]
				})]
			}),
			selected.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card/50 p-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "h-12 w-12 text-muted-foreground/40 mx-auto mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold text-lg",
						children: "Select companies to compare"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground mt-2",
						children: "Add up to 3 companies using the button above to see a side-by-side comparison."
					})
				]
			}),
			selected.length >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid border-b border-border",
					style: { gridTemplateColumns: `200px repeat(${selected.length}, 1fr)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4 bg-muted/30 border-r border-border" }), selected.map((c) => c && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-r border-border last:border-0 bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold text-foreground",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground font-mono mt-0.5",
							children: [
								c.country_code,
								" · ",
								c.business_type
							]
						})]
					}, c.id))]
				}), COMPARISON_FIELDS.map((field, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid border-b border-border last:border-0 ${idx % 2 === 0 ? "" : "bg-muted/20"}`,
					style: { gridTemplateColumns: `200px repeat(${selected.length}, 1fr)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 px-4 border-r border-border flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
							children: field.label
						})
					}), selected.map((c) => c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3 px-4 border-r border-border last:border-0 flex items-center",
						children: renderValue(field.key, c[field.key])
					}, c.id))]
				}, field.key))]
			}),
			selected.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6 rounded-lg border border-dashed border-border text-center text-sm text-muted-foreground",
				children: "Add at least one more company to start comparing. You can compare up to 3 at a time."
			})
		]
	});
}
//#endregion
export { Page as component };
