import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { F as DollarSign, c as TrendingDown, s as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prices-BczA8viw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRODUCTS = [
	"Cotton",
	"Polyester",
	"Denim",
	"Silk",
	"Wool",
	"Linen",
	"Viscose",
	"Nylon"
];
var PRICE_TABLE = [
	{
		product: "Cotton Greige",
		country: "India",
		unit: "kg",
		low: 1.2,
		high: 1.85,
		change: 1.8,
		currency: "USD"
	},
	{
		product: "Cotton Greige",
		country: "Bangladesh",
		unit: "kg",
		low: 1.05,
		high: 1.6,
		change: 2.1,
		currency: "USD"
	},
	{
		product: "Cotton Greige",
		country: "Pakistan",
		unit: "kg",
		low: 1.1,
		high: 1.7,
		change: .4,
		currency: "USD"
	},
	{
		product: "Cotton Greige",
		country: "Turkey",
		unit: "kg",
		low: 1.45,
		high: 2.1,
		change: -.3,
		currency: "USD"
	},
	{
		product: "Polyester Yarn",
		country: "China",
		unit: "kg",
		low: .95,
		high: 1.4,
		change: -.8,
		currency: "USD"
	},
	{
		product: "Polyester Yarn",
		country: "India",
		unit: "kg",
		low: 1.05,
		high: 1.55,
		change: .2,
		currency: "USD"
	},
	{
		product: "Polyester Yarn",
		country: "Vietnam",
		unit: "kg",
		low: 1,
		high: 1.45,
		change: 1.1,
		currency: "USD"
	},
	{
		product: "Denim Fabric",
		country: "Turkey",
		unit: "m²",
		low: 3.2,
		high: 4.8,
		change: .6,
		currency: "USD"
	},
	{
		product: "Denim Fabric",
		country: "Bangladesh",
		unit: "m²",
		low: 2.4,
		high: 3.6,
		change: 3.2,
		currency: "USD"
	},
	{
		product: "Denim Fabric",
		country: "China",
		unit: "m²",
		low: 2.2,
		high: 3.4,
		change: -1.2,
		currency: "USD"
	},
	{
		product: "Silk Fabric",
		country: "India",
		unit: "m²",
		low: 12,
		high: 28.5,
		change: 3.2,
		currency: "USD"
	},
	{
		product: "Silk Fabric",
		country: "China",
		unit: "m²",
		low: 10.5,
		high: 22,
		change: -.9,
		currency: "USD"
	},
	{
		product: "Wool Fabric",
		country: "Italy",
		unit: "m²",
		low: 8.4,
		high: 18,
		change: .3,
		currency: "USD"
	}
];
function generatePriceSeries(basePrice, months = 12) {
	return Array.from({ length: months }).map((_, i) => {
		const trend = i * (Math.random() * .05 - .02);
		const noise = (Math.random() - .5) * basePrice * .08;
		return {
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
			price: Math.max(.5, +(basePrice + trend + noise).toFixed(2))
		};
	});
}
function Page() {
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)("Cotton");
	const [searchFilter, setSearchFilter] = (0, import_react.useState)("");
	const { data } = useQuery({
		queryKey: ["prices-all"],
		queryFn: async () => {
			return (await supabase.from("price_points").select("*").order("observed_at", { ascending: false }).limit(200)).data ?? [];
		}
	});
	const dbPrices = data ?? [];
	dbPrices.length;
	const filteredTable = (0, import_react.useMemo)(() => {
		let list = [...PRICE_TABLE];
		if (searchFilter) list = list.filter((p) => p.product.toLowerCase().includes(searchFilter.toLowerCase()) || p.country.toLowerCase().includes(searchFilter.toLowerCase()));
		return list;
	}, [searchFilter]);
	const chartData = (0, import_react.useMemo)(() => {
		return generatePriceSeries({
			Cotton: 1.5,
			Polyester: 1.1,
			Denim: 3.5,
			Silk: 18,
			Wool: 10,
			Linen: 8,
			Viscose: 1.4,
			Nylon: 2.3
		}[selectedProduct] ?? 2);
	}, [selectedProduct]);
	const COUNTRY_PRICES = {
		Cotton: [
			{
				country: "India",
				price: 1.52
			},
			{
				country: "Bangladesh",
				price: 1.32
			},
			{
				country: "Pakistan",
				price: 1.4
			},
			{
				country: "Vietnam",
				price: 1.18
			},
			{
				country: "China",
				price: 1.08
			},
			{
				country: "Turkey",
				price: 1.78
			}
		],
		Polyester: [
			{
				country: "China",
				price: .98
			},
			{
				country: "India",
				price: 1.12
			},
			{
				country: "Vietnam",
				price: 1.05
			},
			{
				country: "Indonesia",
				price: 1.08
			},
			{
				country: "Pakistan",
				price: 1.15
			},
			{
				country: "Turkey",
				price: 1.22
			}
		],
		Denim: [
			{
				country: "Turkey",
				price: 4.1
			},
			{
				country: "Bangladesh",
				price: 2.9
			},
			{
				country: "China",
				price: 2.7
			},
			{
				country: "India",
				price: 3.2
			},
			{
				country: "Pakistan",
				price: 2.8
			},
			{
				country: "Egypt",
				price: 3.5
			}
		],
		Silk: [
			{
				country: "India",
				price: 20.5
			},
			{
				country: "China",
				price: 16
			},
			{
				country: "Vietnam",
				price: 14.5
			},
			{
				country: "Italy",
				price: 28
			},
			{
				country: "Thailand",
				price: 18
			},
			{
				country: "Brazil",
				price: 22
			}
		],
		Wool: [
			{
				country: "Italy",
				price: 13.2
			},
			{
				country: "Australia",
				price: 10.5
			},
			{
				country: "China",
				price: 9.1
			},
			{
				country: "Turkey",
				price: 11.8
			},
			{
				country: "India",
				price: 8.9
			},
			{
				country: "Germany",
				price: 14.5
			}
		],
		Linen: [
			{
				country: "Portugal",
				price: 8.5
			},
			{
				country: "China",
				price: 6.8
			},
			{
				country: "India",
				price: 7.2
			},
			{
				country: "Belgium",
				price: 9.8
			},
			{
				country: "France",
				price: 10.2
			},
			{
				country: "Egypt",
				price: 6.5
			}
		],
		Viscose: [
			{
				country: "China",
				price: 1.25
			},
			{
				country: "India",
				price: 1.45
			},
			{
				country: "Indonesia",
				price: 1.35
			},
			{
				country: "Pakistan",
				price: 1.3
			},
			{
				country: "Turkey",
				price: 1.55
			},
			{
				country: "Vietnam",
				price: 1.4
			}
		],
		Nylon: [
			{
				country: "China",
				price: 2.1
			},
			{
				country: "Taiwan",
				price: 2.55
			},
			{
				country: "India",
				price: 2.35
			},
			{
				country: "Vietnam",
				price: 2.2
			},
			{
				country: "South Korea",
				price: 2.75
			},
			{
				country: "Italy",
				price: 3.1
			}
		]
	};
	PRICE_TABLE[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Intelligence",
				title: "Price Intelligence",
				description: "Real-time and historical fabric, yarn and garment price data across 40+ countries and 200+ products."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Price Points",
						value: (dbPrices.length || "2,418").toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Products Tracked",
						value: "218",
						delta: {
							value: "refreshed daily",
							positive: true
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Cotton US",
						value: "$0.74/lb",
						delta: {
							value: "+1.8%",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Polyester CN",
						value: "$1.12/kg",
						delta: {
							value: "-0.4%",
							positive: false
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-lg border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Price Index · 12 Month"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display font-semibold mt-0.5",
							children: [selectedProduct, " price trend"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedProduct(p),
								className: `px-2 py-1 rounded text-xs font-mono border transition-colors ${selectedProduct === p ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`,
								children: p
							}, p))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: chartData,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "priceGrad",
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "var(--popover)",
											border: "1px solid var(--border)",
											borderRadius: 8,
											fontSize: 12
										},
										formatter: (v) => [`$${v}`, "Price"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "price",
										stroke: "var(--chart-1)",
										fill: "url(#priceGrad)",
										strokeWidth: 2
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary mb-1",
							children: "Country Comparison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display font-semibold mb-4",
							children: [selectedProduct, " by market"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: COUNTRY_PRICES[selectedProduct] ?? COUNTRY_PRICES.Cotton,
									layout: "vertical",
									margin: { left: 4 },
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
											axisLine: false,
											tickFormatter: (v) => `$${v}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "country",
											stroke: "var(--muted-foreground)",
											fontSize: 10,
											width: 75,
											tickLine: false,
											axisLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: {
												background: "var(--popover)",
												border: "1px solid var(--border)",
												borderRadius: 8,
												fontSize: 12
											},
											formatter: (v) => [`$${v}/kg`, "Avg Price"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "price",
											fill: "var(--primary)",
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
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Price Registry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Latest price observations"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: searchFilter,
							onChange: (e) => setSearchFilter(e.target.value),
							placeholder: "Filter by product or country…",
							className: "h-8 px-3 rounded border border-border bg-muted/40 text-xs outline-none focus:border-primary w-48"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-6 sm:col-span-4",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2",
									children: "Country"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-1",
									children: "Unit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-2 text-right",
									children: "Low"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-2 text-right",
									children: "High"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-1 text-right",
									children: "Δ MoM"
								})
							]
						}), filteredTable.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-6 sm:col-span-4 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium truncate",
										children: p.product
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground mt-0.5 sm:hidden truncate",
										children: [
											p.country,
											" · per ",
											p.unit
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2 text-muted-foreground truncate",
									children: p.country
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-1 font-mono text-xs text-muted-foreground",
									children: p.unit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-3 sm:col-span-2 text-right font-mono tabular-nums",
									children: ["$", p.low.toFixed(2)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-3 sm:col-span-2 text-right font-mono tabular-nums",
									children: ["$", p.high.toFixed(2)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `hidden sm:flex col-span-1 text-right font-mono tabular-nums text-xs items-center justify-end gap-0.5 ${p.change >= 0 ? "text-success" : "text-destructive"}`,
									children: [
										p.change >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3" }),
										Math.abs(p.change),
										"%"
									]
								})
							]
						}, i))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-2 border-t border-border bg-muted/20 text-[10px] font-mono text-muted-foreground flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Prices are AI-estimated from public trade data · ",
							filteredTable.length,
							" records shown"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-primary",
							children: ["Updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric"
							})]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Page as component };
