import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { $ as Sparkles, A as Factory, P as Download, W as Building2, h as RefreshCw, it as Earth, l as Star, n as X, nt as Layers, st as CircleAlert, tt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { a as SheetTitle, i as SheetHeader, n as SheetContent, r as SheetDescription, t as Sheet } from "./sheet-C1vjnj_d.mjs";
import { t as MOCK_COMPANIES } from "./mock-companies-B_80WWwW.mjs";
import { n as MOCK_COMPANY_NEWS, r as PENDING_NEWS_SIMULATION, t as Badge } from "./mock-company-news-BDbtL397.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-N-oFuA4m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_NEWS_ITEMS = [
	{
		id: "d1",
		title: "Bangladesh garment exports surge 18% in Q2 2026",
		source: "Textile World",
		category: "market",
		published_at: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toISOString()
	},
	{
		id: "d2",
		title: "India announces new textile PLI scheme worth ₹10,683 crore",
		source: "Fibre2Fashion",
		category: "trade_policy",
		published_at: (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString()
	},
	{
		id: "d3",
		title: "Cotton prices stabilise as US crop forecast improves",
		source: "Reuters Commodities",
		category: "price",
		published_at: (/* @__PURE__ */ new Date(Date.now() - 1728e5)).toISOString()
	},
	{
		id: "d4",
		title: "Vietnam's textile hub in Binh Duong opens 3 new mills",
		source: "Vietnam Textiles",
		category: "factory_opening",
		published_at: (/* @__PURE__ */ new Date(Date.now() - 2592e5)).toISOString()
	},
	{
		id: "d5",
		title: "EU Green Deal textile regulations force supply chain transparency by 2027",
		source: "EcoTextile News",
		category: "trade_policy",
		published_at: (/* @__PURE__ */ new Date(Date.now() - 3456e5)).toISOString()
	},
	{
		id: "d6",
		title: "Turkey denim sector rebounds with $2.1B in export orders for H2 2026",
		source: "Textilforum",
		category: "market",
		published_at: (/* @__PURE__ */ new Date(Date.now() - 432e6)).toISOString()
	}
];
var BRIEFING_CONTENT = {
	title: "GMIntel AI Briefing",
	date: "July 3, 2026",
	sections: [
		{
			title: "1. Global Supply Chain & Logistics",
			content: "Geopolitical tensions and canal routing adjustments in Q2 2026 have led to synthetic fiber shipping delays of 20-30 days. Freight rates have risen by 11.4% MoM, squeezing margin buffers for downstream converters."
		},
		{
			title: "2. Cotton & Feedstock Pricing Index",
			content: "Raw cotton prices have stabilized near $0.84/lb due to upgraded US yield outlooks. However, PTA and MEG feedstock spikes in China have pushed polyester filament yarn up 4.2% MoM, prompting a shift towards cotton-rich blends."
		},
		{
			title: "3. Trade Policy & Compliance Shift",
			content: "The EU Green Deal and Eco-Design directives starting Jan 2027 are pushing immediate demand for full Tier-2 material traceability. Sourcing pipelines are actively shifting from Southeast Asia to integrated hubs like India and Turkey."
		},
		{
			title: "4. Actionable Sourcing Recommendation",
			content: "• Audit Tier-2 supplier certifications (GOTS, OEKO-TEX) immediately.\n• Diversify denim orders to Turkish hubs to secure H2 2026 capacity.\n• Lock in polyester yarn contracts to hedge against petroleum-feedstock spikes."
		}
	]
};
function Dashboard() {
	const [briefingOpen, setBriefingOpen] = (0, import_react.useState)(false);
	const [briefingLoading, setBriefingLoading] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [briefingTitle, setBriefingTitle] = (0, import_react.useState)(BRIEFING_CONTENT.title);
	const [briefingDate, setBriefingDate] = (0, import_react.useState)(BRIEFING_CONTENT.date);
	const [syncing, setSyncing] = (0, import_react.useState)(false);
	const [lastSyncTime, setLastSyncTime] = (0, import_react.useState)("Never");
	const [watchlist, setWatchlist] = (0, import_react.useState)([]);
	const [syncedNewsCount, setSyncedNewsCount] = (0, import_react.useState)(0);
	const [selectedCompany, setSelectedCompany] = (0, import_react.useState)(null);
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	(0, import_react.useMemo)(() => {
		if (typeof window !== "undefined") {
			const d = /* @__PURE__ */ new Date();
			BRIEFING_CONTENT.title = `GMIntel AI Briefing — ${d.toLocaleDateString("en-US", {
				month: "long",
				year: "numeric"
			})}`;
			BRIEFING_CONTENT.date = d.toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		}
	}, []);
	(0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const d = /* @__PURE__ */ new Date();
			setBriefingTitle(`GMIntel AI Briefing — ${d.toLocaleDateString("en-US", {
				month: "long",
				year: "numeric"
			})}`);
			setBriefingDate(d.toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			}));
		}
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
			const storedWatchlist = localStorage.getItem("gmintel_watchlist");
			if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
			const storedNews = localStorage.getItem("gmintel_synced_news");
			setSyncedNewsCount(storedNews ? JSON.parse(storedNews).length : 0);
			const storedTime = localStorage.getItem("gmintel_last_sync_time");
			if (storedTime) setLastSyncTime(storedTime);
		}
	}, []);
	const triggerSync = (isAuto = false) => {
		if (syncing) return;
		setSyncing(true);
		if (!isAuto) toast.info("Syncing Textile Intelligence databases...");
		setTimeout(() => {
			const storedNews = localStorage.getItem("gmintel_synced_news");
			const currentSynced = storedNews ? JSON.parse(storedNews) : [];
			const newlySynced = [];
			PENDING_NEWS_SIMULATION.forEach((item) => {
				if (!currentSynced.some((news) => news.id === item.id)) newlySynced.push(item);
			});
			const nextSynced = [...newlySynced, ...currentSynced];
			localStorage.setItem("gmintel_synced_news", JSON.stringify(nextSynced));
			setSyncedNewsCount(nextSynced.length);
			const nowStr = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			});
			setLastSyncTime(nowStr);
			localStorage.setItem("gmintel_last_sync_time", nowStr);
			if (newlySynced.length > 0) {
				const storedWatchlist = localStorage.getItem("gmintel_watchlist");
				const activeWatchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
				const storedNotifications = localStorage.getItem("gmintel_notifications");
				const currentNotifications = storedNotifications ? JSON.parse(storedNotifications) : [];
				const newNotifications = [];
				newlySynced.forEach((news) => {
					if (activeWatchlist.includes(news.company_slug)) newNotifications.push({
						id: crypto.randomUUID(),
						company_slug: news.company_slug,
						company_name: news.company_name,
						message: news.title,
						read: false,
						timestamp: (/* @__PURE__ */ new Date()).toISOString()
					});
				});
				if (newNotifications.length > 0) {
					const nextNotifications = [...newNotifications, ...currentNotifications];
					localStorage.setItem("gmintel_notifications", JSON.stringify(nextNotifications));
					window.dispatchEvent(new Event("gmintel_new_notification"));
					toast.success(`Found ${newNotifications.length} updates for companies on your watchlist!`);
				}
			}
			setSyncing(false);
			if (!isAuto) toast.success(`Sync completed. Added ${newlySynced.length} updates.`);
		}, 1500);
	};
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			triggerSync(true);
		}, 45e3);
		return () => clearInterval(timer);
	}, []);
	const handleGenerateBriefing = () => {
		setBriefingLoading(true);
		toast.info("Analyzing platform intelligence and compiling your executive briefing...");
		setTimeout(() => {
			setBriefingLoading(false);
			setBriefingOpen(true);
			toast.success("Executive briefing generated successfully!");
		}, 1500);
	};
	const { data } = useQuery({
		queryKey: ["dashboard"],
		queryFn: async () => {
			const [companies, countries, news, prices] = await Promise.all([
				supabase.from("companies").select("id, name, country_code, city, ai_risk_level, ai_trust_score, business_type, employees_range, created_at, slug"),
				supabase.from("countries").select("code, name"),
				supabase.from("news_items").select("id, title, source, published_at, category").order("published_at", { ascending: false }).limit(6),
				supabase.from("price_points").select("id, product, country_code, unit, price_low, price_high, currency, observed_at").order("observed_at", { ascending: false }).limit(120)
			]);
			return {
				companies: companies.data ?? [],
				countries: countries.data ?? [],
				news: news.data ?? [],
				prices: prices.data ?? []
			};
		}
	});
	const dbCompanies = (0, import_react.useMemo)(() => {
		if (!data) return [];
		if (Array.isArray(data.companies)) return data.companies;
		if (data.companies && Array.isArray(data.companies.data)) return data.companies.data;
		return [];
	}, [data]);
	const companies = (0, import_react.useMemo)(() => {
		const list = [...dbCompanies];
		MOCK_COMPANIES.forEach((mock) => {
			if (!list.some((c) => c.slug === mock.slug)) list.push(mock);
		});
		return list;
	}, [dbCompanies]);
	const totalCompanies = companies.length;
	const countries = data?.countries ?? [];
	const news = data?.news ?? [];
	const prices = data?.prices ?? [];
	const countryMap = (0, import_react.useMemo)(() => Object.fromEntries(countries.map((c) => [c.code, c.name])), [countries]);
	const manufacturers = companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("manufactur")).length;
	const suppliers = companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("supplier")).length;
	const brands = companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("brand")).length;
	const today = /* @__PURE__ */ new Date();
	today.setHours(0, 0, 0, 0);
	companies.filter((c) => c.created_at && new Date(c.created_at) >= today).length;
	const byCountry = {};
	companies.forEach((c) => {
		if (c.country_code) byCountry[c.country_code] = (byCountry[c.country_code] ?? 0) + 1;
	});
	const topCountries = Object.entries(byCountry).map(([code, count]) => ({
		code,
		name: countries.find((k) => k.code === code)?.name ?? code,
		count
	})).sort((a, b) => b.count - a.count).slice(0, 8);
	const priceSeries = Array.from({ length: 12 }).map((_, i) => {
		const base = 100 + Math.sin(i / 2) * 6 + i * 1.2;
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
			cotton: Math.round(base),
			polyester: Math.round(base * .72),
			denim: Math.round(base * 1.15)
		};
	});
	const watchlistedData = (0, import_react.useMemo)(() => {
		return companies.filter((c) => watchlist.includes(c.slug));
	}, [companies, watchlist]);
	const combinedCompanyNews = (0, import_react.useMemo)(() => {
		const storedNews = typeof window !== "undefined" ? localStorage.getItem("gmintel_synced_news") : null;
		return [...storedNews ? JSON.parse(storedNews) : [], ...MOCK_COMPANY_NEWS].sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
	}, [syncedNewsCount]);
	const activeCompanyNews = (0, import_react.useMemo)(() => {
		if (!selectedCompany) return [];
		return combinedCompanyNews.filter((n) => n.company_slug === selectedCompany.slug);
	}, [selectedCompany, combinedCompanyNews]);
	const aiDrawerSummary = (0, import_react.useMemo)(() => {
		if (!selectedCompany) return "";
		if (activeCompanyNews.length === 0) return `${selectedCompany.name} maintains a steady operations status with zero recent announcements. Sourcing metrics are verified.`;
		const positive = activeCompanyNews.filter((n) => n.sentiment === "positive").length;
		const negative = activeCompanyNews.filter((n) => n.sentiment === "negative").length;
		const mainUpdate = activeCompanyNews[0];
		let summaryText = `AI analysis highlights a predominantly ${positive >= negative ? "positive" : "cautious"} outlook. `;
		summaryText += `Main development: "${mainUpdate.title}". `;
		if (negative > 0) summaryText += `Supply risks are present but offset by stable raw material reserves.`;
		else summaryText += `Driven by strong sustainability progress and capacity increases.`;
		return summaryText;
	}, [selectedCompany, activeCompanyNews]);
	const toggleWatchlist = (slug, e) => {
		e.stopPropagation();
		const next = watchlist.includes(slug) ? watchlist.filter((s) => s !== slug) : [...watchlist, slug];
		setWatchlist(next);
		localStorage.setItem("gmintel_watchlist", JSON.stringify(next));
		toast.success(watchlist.includes(slug) ? "Removed from watchlist" : "Added to watchlist");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Command Center",
				title: "Global Textile Intelligence Dashboard",
				description: "Real-time market, supplier and risk signals across the world's textile hubs.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => triggerSync(),
						disabled: syncing,
						className: "gap-1.5 font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("h-3.5 w-3.5", syncing && "animate-spin") }), "Sync DB"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: handleGenerateBriefing,
						disabled: briefingLoading,
						className: "relative",
						children: briefingLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 mr-1.5 animate-spin" }), " Compiling…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 mr-1.5" }), " Generate AI briefing"] })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Companies",
						value: totalCompanies.toLocaleString(),
						delta: {
							value: "+12.4%",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Manufacturers",
						value: manufacturers,
						delta: {
							value: "+8.1%",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Factory, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Suppliers",
						value: suppliers,
						delta: {
							value: "+3.2%",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Brands",
						value: brands,
						delta: {
							value: "+1.9%",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Countries",
						value: Object.keys(byCountry).length,
						hint: `${countries.length} tracked`,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Sync Engine",
						value: lastSyncTime === "Never" ? "Ready" : lastSyncTime,
						delta: {
							value: syncing ? "polling" : "sync active",
							positive: true
						},
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" })
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
							children: "Price Intelligence · Index"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mt-0.5",
							children: "Fabric price index — trailing 12 months"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 text-[10px] font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									swatch: "var(--chart-1)",
									label: "Cotton"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									swatch: "var(--chart-2)",
									label: "Polyester"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									swatch: "var(--chart-3)",
									label: "Denim"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: priceSeries,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "g1",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "var(--chart-1)",
											stopOpacity: .35
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
										dataKey: "cotton",
										stroke: "var(--chart-1)",
										fill: "url(#g1)",
										strokeWidth: 2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "polyester",
										stroke: "var(--chart-2)",
										fill: "transparent",
										strokeWidth: 2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "denim",
										stroke: "var(--chart-3)",
										fill: "transparent",
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
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Top Sourcing Countries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mt-0.5 mb-4",
							children: "Company distribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: topCountries,
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
											width: 90,
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
											dataKey: "count",
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
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-lg border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-border flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Sourcing Watchlist"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Tracked supplier intelligence"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-mono text-muted-foreground",
							children: [watchlistedData.length, " monitored"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: watchlistedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 text-center text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-8 w-8 text-muted-foreground/45 mx-auto mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your watchlist is empty." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground/75 mt-1",
									children: "Start tracking suppliers on the Companies tab to see their latest announcements here."
								})
							]
						}) : watchlistedData.map((c) => {
							const latestCompanyNews = combinedCompanyNews.find((n) => n.company_slug === c.slug);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => {
									setSelectedCompany(c);
									setDrawerOpen(true);
								},
								className: "p-4 hover:bg-muted/30 transition-colors cursor-pointer flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground hover:text-primary transition-colors text-sm truncate",
												children: c.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "outline",
												className: "text-[9px] font-mono tracking-wide py-0 px-1 border-0 bg-primary/10 text-primary",
												children: ["Trust ", c.ai_trust_score]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: c.ai_risk_level })
										]
									}), latestCompanyNews ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5 pl-3 border-l border-border/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-semibold text-foreground/80 leading-normal truncate",
											children: latestCompanyNews.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground line-clamp-1 leading-normal",
											children: latestCompanyNews.summary
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground/75 italic pl-3",
										children: "No updates reported for this supplier."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => toggleWatchlist(c.slug, e),
									className: "p-1 hover:bg-muted rounded text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" })
								})]
							}, c.id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Announcements Feed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold font-sans",
							children: "Company updates & sentiment"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border max-h-[350px] overflow-y-auto",
						children: combinedCompanyNews.slice(0, 6).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => {
								const comp = companies.find((c) => c.slug === n.company_slug);
								if (comp) {
									setSelectedCompany(comp);
									setDrawerOpen(true);
								}
							},
							className: "p-4 hover:bg-muted/40 transition-colors cursor-pointer space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[9px] font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-semibold hover:underline",
										children: n.company_name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: cn("text-[8px] font-mono px-1 py-0 h-4 border-0 uppercase", n.sentiment === "positive" && "bg-success/15 text-success", n.sentiment === "negative" && "bg-destructive/15 text-destructive", n.sentiment === "neutral" && "bg-muted/80 text-muted-foreground"),
										children: n.sentiment
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-foreground leading-snug line-clamp-2",
									children: n.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground flex justify-between font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Source: ", n.source] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(n.published_at).toLocaleDateString("en-US", {
										timeZone: "UTC",
										month: "short",
										day: "numeric"
									}) })]
								})
							]
						}, n.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-lg border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between p-4 border-b border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Verified Companies"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Recently added & top trust"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-6 sm:col-span-5",
									children: "Company"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2",
									children: "Country"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-2",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-2 text-right",
									children: "Trust"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-1 text-right",
									children: "Risk"
								})
							]
						}), companies.slice(0, 8).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => {
								setSelectedCompany(c);
								setDrawerOpen(true);
							},
							className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-6 sm:col-span-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-foreground truncate",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground truncate",
										children: [c.city ? `${c.city}, ` : "", c.country_code ?? "—"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2 font-mono text-xs text-muted-foreground",
									children: c.country_code ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-2 text-xs text-muted-foreground truncate",
									children: c.business_type ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-2 text-right font-mono tabular-nums text-foreground",
									children: c.ai_trust_score ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3 sm:col-span-1 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: c.ai_risk_level })
								})
							]
						}, c.id))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Live News"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Industry pulse"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: (news.length > 0 ? news : MOCK_NEWS_ITEMS).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 hover:bg-muted/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-mono uppercase text-muted-foreground flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.category ?? "News" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.published_at ? new Date(n.published_at).toLocaleDateString("en-US", { timeZone: "UTC" }) : "" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium mt-1 leading-snug",
									children: n.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1",
									children: n.source
								})
							]
						}, n.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.06] to-transparent p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "AI Market Insight · Estimate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold mt-0.5",
							children: "Cotton index momentum turning positive across South Asia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1.5 max-w-3xl",
							children: "Trailing 30-day price action shows firming demand out of Bangladesh and India, with new capacity announcements offsetting soft PMI prints in Turkey. Consider locking Q1 volumes with tier-1 GOTS-certified mills."
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[10px] font-mono text-muted-foreground",
				children: [
					"Prices shown: ",
					prices.length,
					" recent observations · AI insights are estimates and clearly labeled."
				]
			}),
			briefingOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-2xl rounded-lg border border-border bg-card shadow-lg p-6 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-150",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setBriefingOpen(false),
							className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground p-1 rounded hover:bg-muted transition-colors cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: briefingTitle
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] font-mono text-muted-foreground mb-4 uppercase tracking-widest border-b border-border pb-2",
							children: [
								"Compiled on ",
								briefingDate,
								" · Live Market Intelligence"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto space-y-4 pr-1 text-sm text-muted-foreground leading-relaxed",
							children: BRIEFING_CONTENT.sections.map((sec, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-foreground font-display",
									children: sec.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "whitespace-pre-line",
									children: sec.content
								})]
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 mt-6 pt-4 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									const text = `${briefingTitle}\nDate: ${briefingDate}\n\n` + BRIEFING_CONTENT.sections.map((s) => `${s.title}\n${s.content}`).join("\n\n");
									const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
									const url = URL.createObjectURL(blob);
									const link = document.createElement("a");
									link.href = url;
									link.download = `gmintel_ai_briefing_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.txt`;
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
									URL.revokeObjectURL(url);
									toast.success("Downloading briefing...");
								},
								className: "gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Download"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => setBriefingOpen(false),
								children: "Dismiss"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: drawerOpen,
				onOpenChange: setDrawerOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					className: "sm:max-w-xl w-full overflow-y-auto bg-card border-l border-border p-6 font-sans",
					children: selectedCompany && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
								className: "text-left space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-primary text-lg font-bold",
											children: selectedCompany.name.slice(0, 2).toUpperCase()
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
											className: "font-display text-xl font-bold leading-tight text-foreground",
											children: selectedCompany.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, {
											className: "text-xs text-muted-foreground font-mono mt-0.5",
											children: [selectedCompany.city ? `${selectedCompany.city}, ` : "", countryMap[selectedCompany.country_code] ?? selectedCompany.country_code]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: (e) => toggleWatchlist(selectedCompany.slug, e),
										className: "gap-1.5 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-3.5 w-3.5", watchlist.includes(selectedCompany.slug) ? "fill-primary text-primary" : "") }), watchlist.includes(selectedCompany.slug) ? "Watchlisted" : "Watchlist"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2 pt-1 border-b border-border pb-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-[10px] font-mono capitalize",
											children: selectedCompany.business_type ?? "Supplier"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "text-[10px] font-mono",
											children: [
												"Trust: ",
												selectedCompany.ai_trust_score,
												"/100"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: selectedCompany.ai_risk_level })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 text-xs bg-muted/30 p-3 rounded-lg border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
										children: "Capacity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: selectedCompany.monthly_capacity ? `${selectedCompany.monthly_capacity.toLocaleString()} m/mo` : "—"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
										children: "Min Order Qty"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: selectedCompany.moq ? `${selectedCompany.moq.toLocaleString()} units` : "—"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
										children: "Lead Time"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: selectedCompany.lead_time_days ? `${selectedCompany.lead_time_days} days` : "—"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground block font-mono text-[9px] uppercase tracking-wide",
										children: "Employees"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: selectedCompany.employees_range ?? "—"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.06] to-transparent p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AI Sourcing Insight"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed font-sans",
									children: aiDrawerSummary
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display font-semibold text-sm text-foreground",
										children: "Company Intelligence Feed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono text-muted-foreground",
										children: [activeCompanyNews.length, " announcements"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: activeCompanyNews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center py-6 text-xs text-muted-foreground border border-dashed border-border rounded-lg bg-card/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-muted-foreground/65 mx-auto mb-1.5" }), "No recent updates reported for this supplier."]
									}) : activeCompanyNews.map((news) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 border border-border rounded-lg bg-card/40 hover:border-primary/30 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 rounded bg-muted/60 px-1 py-0.5 text-[9px] font-mono uppercase tracking-wide text-muted-foreground",
													children: news.category.replace("_", " ")
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] font-mono text-muted-foreground/80",
													children: new Date(news.published_at).toLocaleDateString("en-US", {
														timeZone: "UTC",
														month: "short",
														day: "numeric"
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "text-xs font-semibold text-foreground leading-snug mb-1",
												children: news.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground leading-relaxed mb-2.5",
												children: news.summary
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between pt-1.5 border-t border-border/50 text-[10px] font-mono",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted-foreground/75",
													children: ["Source: ", news.source]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground/65",
														children: "Sentiment:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: cn("text-[9px] px-1 py-0 border-0 h-4 uppercase", news.sentiment === "positive" && "bg-success/15 text-success", news.sentiment === "negative" && "bg-destructive/15 text-destructive", news.sentiment === "neutral" && "bg-muted/80 text-muted-foreground"),
														children: news.sentiment
													})]
												})]
											})
										]
									}, news.id))
								})]
							})
						]
					})
				})
			})
		]
	});
}
function Legend({ swatch, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-2 w-2 rounded-sm",
			style: { background: swatch }
		}), label]
	});
}
//#endregion
export { Dashboard as component };
