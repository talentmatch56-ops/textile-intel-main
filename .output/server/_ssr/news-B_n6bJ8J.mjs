import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { A as Factory, D as Globe, N as ExternalLink, k as FileText, s as TrendingUp, v as Newspaper } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-B_n6bJ8J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORY_META = {
	trade_policy: {
		label: "Trade Policy",
		color: "text-info bg-info/10 border-info/30",
		icon: Globe
	},
	price: {
		label: "Prices",
		color: "text-warning bg-warning/10 border-warning/30",
		icon: TrendingUp
	},
	factory_opening: {
		label: "Factory",
		color: "text-success bg-success/10 border-success/30",
		icon: Factory
	},
	sustainability: {
		label: "Sustainability",
		color: "text-primary bg-primary/10 border-primary/30",
		icon: FileText
	},
	market: {
		label: "Market",
		color: "text-chart-3 bg-chart-3/10 border-chart-3/30",
		icon: TrendingUp
	}
};
function CategoryBadge({ category }) {
	const meta = CATEGORY_META[category ?? ""] ?? {
		label: category ?? "News",
		color: "text-muted-foreground bg-muted border-border",
		icon: Newspaper
	};
	const Icon = meta.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${meta.color}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-2.5 w-2.5" }), meta.label]
	});
}
function Page() {
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const { data, isLoading } = useQuery({
		queryKey: ["news-all"],
		queryFn: async () => {
			const [news, countries] = await Promise.all([supabase.from("news_items").select("*").order("published_at", { ascending: false }).limit(100), supabase.from("countries").select("code,name")]);
			return {
				news: news.data ?? [],
				countries: countries.data ?? []
			};
		}
	});
	const news = data?.news ?? [];
	const countryMap = Object.fromEntries((data?.countries ?? []).map((c) => [c.code, c.name]));
	(0, import_react.useMemo)(() => ["all", ...new Set(news.map((n) => n.category).filter(Boolean))], [news]);
	const filtered = (0, import_react.useMemo)(() => {
		if (categoryFilter === "all") return news;
		return news.filter((n) => n.category === categoryFilter);
	}, [news, categoryFilter]);
	filtered[0];
	filtered.slice(1);
	const mockNews = [
		{
			id: "1",
			title: "Bangladesh garment exports surge 18% in Q2 2026 driven by EU demand",
			summary: "Dhaka — Bangladesh's readymade garment sector recorded its strongest quarterly performance in five years, with exports climbing 18% YoY as European buyers shifted sourcing away from Southeast Asia.",
			source: "Textile World",
			category: "market",
			country_code: "BD",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toISOString(),
			url: "https://fubex.net"
		},
		{
			id: "2",
			title: "India announces new textile PLI scheme worth ₹10,683 crore for technical textiles",
			summary: "New Delhi — The Ministry of Textiles unveiled expanded production-linked incentives targeting technical textile manufacturers, aiming to double sector output by 2028.",
			source: "Fibre2Fashion",
			category: "trade_policy",
			country_code: "IN",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString(),
			url: "https://www.fibre2fashion.com"
		},
		{
			id: "3",
			title: "Cotton prices stabilise as US crop forecast improves",
			summary: "New York — ICE cotton futures edged lower after USDA revised its US crop estimate upward, easing supply concerns that had pushed prices to 18-month highs earlier this month.",
			source: "Reuters Commodities",
			category: "price",
			country_code: "US",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 1728e5)).toISOString(),
			url: "https://grandviewresearch.com"
		},
		{
			id: "4",
			title: "Vietnam's textile hub in Binh Duong opens 3 new mills with 12,000 capacity",
			summary: "Ho Chi Minh City — Binh Duong Province inaugurated a new industrial cluster housing three state-of-the-art spinning mills, adding 12,000 tonnes of monthly yarn capacity.",
			source: "Vietnam Textiles",
			category: "factory_opening",
			country_code: "VN",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 2592e5)).toISOString(),
			url: "https://svegea.se"
		},
		{
			id: "5",
			title: "EU Green Deal textile regulations force supply chain transparency by 2027",
			summary: "Brussels — The European Parliament passed updated Ecodesign Regulation amendments requiring brands to disclose full Tier-2 supplier information by January 2027.",
			source: "EcoTextile News",
			category: "trade_policy",
			country_code: "DE",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 3456e5)).toISOString(),
			url: "https://heuritech.com"
		},
		{
			id: "6",
			title: "Turkey denim sector rebounds with $2.1B in export orders for H2 2026",
			summary: "Istanbul — Turkish denim manufacturers are reporting full order books through end-2026, with order volumes up 31% compared to the same period last year.",
			source: "Textilforum",
			category: "market",
			country_code: "TR",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 432e6)).toISOString(),
			url: "https://texdata.com"
		},
		{
			id: "7",
			title: "Global apparel markets face supply shocks in H1 2026 due to shipping disruptions",
			summary: "Global shipping routes via key canals face severe logistics logjams and fuel cost updates, driving freight costs higher and delaying raw synthetic fibers deliveries by 20-30 days.",
			source: "AlchemPro Sourcing",
			category: "market",
			country_code: "US",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 4752e5)).toISOString(),
			url: "https://alchempro.com"
		},
		{
			id: "8",
			title: "Punjab cabinet approves new Textile and Apparel Policy 2026 for infrastructure boost",
			summary: "Ludhiana — The regional government approved capital subsidies and power concession packages to upgrade looms, print hubs, and green effluent treatment networks.",
			source: "Textile Insights",
			category: "trade_policy",
			country_code: "IN",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 502e6)).toISOString(),
			url: "https://textileinsights.in"
		},
		{
			id: "9",
			title: "Pakistan polyester staple fibre capacity doubles with Faisalabad expansion",
			summary: "Lahore — Major PSF producers in Punjab's textile hub have commissioned new lines bringing total national capacity to 800,000 tonnes per annum.",
			source: "APTMA Weekly",
			category: "factory_opening",
			country_code: "PK",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 5184e5)).toISOString(),
			url: "#"
		},
		{
			id: "10",
			title: "China's synthetic fibre prices rise 4.2% on higher feedstock costs",
			summary: "Shanghai — Polyester filament yarn prices climbed 4.2% MoM as PTA and MEG costs rose following crude oil strength, squeezing downstream converter margins.",
			source: "CCFGroup",
			category: "price",
			country_code: "CN",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 6048e5)).toISOString(),
			url: "#"
		},
		{
			id: "11",
			title: "GOTS 7.0 standard takes effect — tighter chemical restrictions for certified mills",
			summary: "Hamburg — The Global Organic Textile Standard released version 7.0 with expanded chemical input restrictions and mandatory digital traceability requirements, affecting 12,000+ certified facilities worldwide.",
			source: "GOTS Press",
			category: "sustainability",
			country_code: "DE",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 648e6)).toISOString(),
			url: "https://global-standard.org"
		},
		{
			id: "12",
			title: "Patagonia and Inditex join Science-Based Targets initiative for textile decarbonization",
			summary: "Barcelona — Two of fashion's largest buyers have committed to 50% Scope 3 emission reductions by 2030, triggering cascading sustainability requirements across 4,000 Tier-1 and Tier-2 suppliers.",
			source: "Sustainable Apparel Coalition",
			category: "sustainability",
			country_code: "ES",
			published_at: (/* @__PURE__ */ new Date(Date.now() - 6912e5)).toISOString(),
			url: "#"
		}
	];
	const baseMock = categoryFilter === "all" ? mockNews : mockNews.filter((n) => n.category === categoryFilter);
	const displayNews = news.length > 0 ? filtered : baseMock;
	const displayFiltered = searchQuery ? displayNews.filter((n) => n.title.toLowerCase().includes(searchQuery.toLowerCase()) || (n.summary ?? "").toLowerCase().includes(searchQuery.toLowerCase())) : displayNews;
	const displayFeatured = displayFiltered[0];
	const displayRest = displayFiltered.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Intelligence",
				title: "Industry News",
				description: "Live textile industry news — trade policy, price movements, factory openings, and market signals."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Articles",
						value: displayNews.length.toString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Trade Policy",
						value: displayNews.filter((n) => n.category === "trade_policy").length,
						delta: {
							value: "this week",
							positive: true
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Sustainability",
						value: displayNews.filter((n) => n.category === "sustainability").length,
						delta: {
							value: "new",
							positive: true
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Factory Openings",
						value: displayNews.filter((n) => n.category === "factory_opening").length,
						delta: {
							value: "new",
							positive: true
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Search articles by title or keyword…",
						className: "w-full h-9 pl-9 pr-3 rounded-md border border-border bg-card text-sm outline-none focus:border-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"all",
						"trade_policy",
						"price",
						"factory_opening",
						"market",
						"sustainability"
					].map((cat) => {
						const meta = CATEGORY_META[cat];
						const label = cat === "all" ? "All News" : meta?.label ?? cat;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCategoryFilter(cat),
							className: `px-3 py-1.5 rounded-full text-xs font-mono border transition-colors ${categoryFilter === cat ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`,
							children: label
						}, cat);
					})
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-12 text-center text-muted-foreground text-sm",
				children: "Loading news…"
			}),
			!isLoading && displayFeatured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.05] to-transparent p-6 hover:border-primary/50 transition-colors group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { category: displayFeatured.category }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-muted-foreground",
										children: displayFeatured.published_at ? new Date(displayFeatured.published_at).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric"
										}) : ""
									}),
									displayFeatured.country_code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-muted-foreground",
										children: countryMap[displayFeatured.country_code] ?? displayFeatured.country_code
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors",
								children: displayFeatured.title
							}),
							displayFeatured.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-2 line-clamp-3",
								children: displayFeatured.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-xs text-muted-foreground font-mono",
								children: displayFeatured.source
							})
						]
					}), displayFeatured.url && displayFeatured.url !== "#" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: displayFeatured.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "shrink-0 text-muted-foreground hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
					})]
				})
			}),
			!isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
				children: displayRest.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { category: n.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono text-muted-foreground",
								children: n.published_at ? new Date(n.published_at).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric"
								}) : ""
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-sm text-foreground leading-snug mt-2 line-clamp-3",
							children: n.title
						}),
						n.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1.5 line-clamp-2",
							children: n.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono text-muted-foreground",
								children: n.source
							}), n.country_code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono text-muted-foreground",
								children: countryMap[n.country_code] ?? n.country_code
							})]
						})
					]
				}, n.id))
			})
		]
	});
}
//#endregion
export { Page as component };
