import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { $ as Earth, a as TrendingUp, z as Building2 } from "../_libs/lucide-react.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-XVVo4VuS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WORLD_COUNTRIES = [
	{
		code: "CN",
		name: "China",
		region: "Asia",
		lat: 35,
		lng: 105
	},
	{
		code: "IN",
		name: "India",
		region: "Asia",
		lat: 20,
		lng: 77
	},
	{
		code: "BD",
		name: "Bangladesh",
		region: "Asia",
		lat: 24,
		lng: 90
	},
	{
		code: "PK",
		name: "Pakistan",
		region: "Asia",
		lat: 30,
		lng: 70
	},
	{
		code: "VN",
		name: "Vietnam",
		region: "Asia",
		lat: 16,
		lng: 108
	},
	{
		code: "TR",
		name: "Turkey",
		region: "Europe",
		lat: 39,
		lng: 35
	},
	{
		code: "KH",
		name: "Cambodia",
		region: "Asia",
		lat: 13,
		lng: 105
	},
	{
		code: "ID",
		name: "Indonesia",
		region: "Asia",
		lat: -5,
		lng: 120
	},
	{
		code: "MM",
		name: "Myanmar",
		region: "Asia",
		lat: 22,
		lng: 98
	},
	{
		code: "US",
		name: "USA",
		region: "Americas",
		lat: 38,
		lng: -97
	},
	{
		code: "DE",
		name: "Germany",
		region: "Europe",
		lat: 51,
		lng: 10
	},
	{
		code: "IT",
		name: "Italy",
		region: "Europe",
		lat: 42,
		lng: 12
	},
	{
		code: "MA",
		name: "Morocco",
		region: "Africa",
		lat: 32,
		lng: -6
	},
	{
		code: "ET",
		name: "Ethiopia",
		region: "Africa",
		lat: 9,
		lng: 39
	},
	{
		code: "MX",
		name: "Mexico",
		region: "Americas",
		lat: 23,
		lng: -102
	},
	{
		code: "BR",
		name: "Brazil",
		region: "Americas",
		lat: -10,
		lng: -55
	},
	{
		code: "PT",
		name: "Portugal",
		region: "Europe",
		lat: 39,
		lng: -8
	},
	{
		code: "KR",
		name: "South Korea",
		region: "Asia",
		lat: 37,
		lng: 128
	},
	{
		code: "LK",
		name: "Sri Lanka",
		region: "Asia",
		lat: 7,
		lng: 81
	},
	{
		code: "TH",
		name: "Thailand",
		region: "Asia",
		lat: 15,
		lng: 101
	}
];
var MOCK_COUNTS = {
	CN: 142,
	IN: 118,
	BD: 87,
	PK: 64,
	VN: 72,
	TR: 54,
	KH: 33,
	ID: 48,
	MM: 28,
	US: 22,
	DE: 18,
	IT: 24,
	MA: 19,
	ET: 12,
	MX: 16,
	BR: 21,
	PT: 14,
	KR: 19,
	LK: 31,
	TH: 38
};
function getSize(count, max) {
	return Math.max(32, Math.round(count / max * 80) + 32);
}
function getColor(count, max) {
	const pct = count / max;
	if (pct >= .7) return "bg-primary text-primary-foreground";
	if (pct >= .4) return "bg-primary/60 text-primary-foreground";
	if (pct >= .2) return "bg-primary/35 text-foreground";
	return "bg-primary/15 text-muted-foreground";
}
var REGION_ORDER = [
	"Asia",
	"Europe",
	"Africa",
	"Americas"
];
function Page() {
	const { data } = useQuery({
		queryKey: ["map-data"],
		queryFn: async () => {
			return (await supabase.from("companies").select("country_code")).data ?? [];
		}
	});
	const counts = (0, import_react.useMemo)(() => {
		if (!data || data.length === 0) return MOCK_COUNTS;
		const map = {};
		data.forEach((c) => {
			if (c.country_code) map[c.country_code] = (map[c.country_code] ?? 0) + 1;
		});
		return Object.keys(map).length > 0 ? map : MOCK_COUNTS;
	}, [data]);
	const maxCount = Math.max(...Object.values(counts));
	const totalCompanies = Object.values(counts).reduce((a, b) => a + b, 0);
	const coveredCountries = Object.keys(counts).length;
	const topCountries = [...WORLD_COUNTRIES].map((c) => ({
		...c,
		count: counts[c.code] ?? 0
	})).filter((c) => c.count > 0).sort((a, b) => b.count - a.count).slice(0, 10);
	const byRegion = REGION_ORDER.map((region) => ({
		region,
		countries: WORLD_COUNTRIES.filter((c) => c.region === region && (counts[c.code] ?? 0) > 0).map((c) => ({
			...c,
			count: counts[c.code] ?? 0
		})).sort((a, b) => b.count - a.count)
	})).filter((r) => r.countries.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Workflows",
				title: "World Map",
				description: "Geographic distribution of textile manufacturers, suppliers and brands across 40+ countries."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Companies Mapped",
						value: totalCompanies.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Countries",
						value: coveredCountries,
						delta: {
							value: "& growing",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Top Market",
						value: topCountries[0]?.name ?? "China",
						hint: `${topCountries[0]?.count ?? 142} companies`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Fastest Growing",
						value: "Bangladesh",
						delta: {
							value: "+18% QoQ",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Geographic Distribution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Company density by country"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 space-y-8",
						children: byRegion.map(({ region, countries }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
								region,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-3 justify-center",
							children: countries.map((c) => {
								const size = getSize(c.count, maxCount);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-1.5 group cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-full flex flex-col items-center justify-center transition-transform group-hover:scale-110 ${getColor(c.count, maxCount)}`,
										style: {
											width: size,
											height: size
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono font-bold leading-none",
											style: { fontSize: Math.max(9, size / 5) },
											children: c.count
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono leading-none opacity-70",
											style: { fontSize: Math.max(8, size / 6) },
											children: c.code
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-mono text-muted-foreground text-center max-w-16 leading-tight",
										children: c.name
									})]
								}, c.code);
							})
						})] }, region))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-2 border-t border-border bg-muted/20 flex items-center gap-4 text-[10px] font-mono text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bubble size = company count" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3",
								children: [
									{
										cls: "bg-primary/15",
										label: "Low"
									},
									{
										cls: "bg-primary/35",
										label: "Moderate"
									},
									{
										cls: "bg-primary/60",
										label: "High"
									},
									{
										cls: "bg-primary",
										label: "Very High"
									}
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2.5 w-2.5 rounded-full ${l.cls}` }), l.label]
								}, l.label))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Top 10 Markets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Companies by country"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: topCountries.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 px-4 py-3 hover:bg-muted/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono text-muted-foreground w-5 text-right",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground font-mono",
										children: c.region
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono tabular-nums font-semibold text-foreground",
										children: c.count.toLocaleString()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground",
										children: "companies"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-24 h-1.5 bg-muted rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary rounded-full",
										style: { width: `${c.count / maxCount * 100}%` }
									})
								})
							]
						}, c.code))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Regional Breakdown"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Companies by region"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 space-y-4",
						children: byRegion.map(({ region, countries }) => {
							const total = countries.reduce((s, c) => s + c.count, 0);
							const pct = Math.round(total / totalCompanies * 100);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: region
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono tabular-nums text-muted-foreground",
										children: [
											total.toLocaleString(),
											" (",
											pct,
											"%)"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2 bg-muted rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary rounded-full transition-all",
										style: { width: `${pct}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground font-mono mt-1",
									children: [countries.length, " countries"]
								})
							] }, region);
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
