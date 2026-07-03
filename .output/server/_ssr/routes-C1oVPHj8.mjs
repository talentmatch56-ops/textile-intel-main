import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { E as Lock, G as Building2, S as MessageSquare, X as ArrowRight, _ as Radar, d as ShieldCheck, et as Sparkles, k as GitCompare, mt as ChartColumn, pt as ChartLine, s as TrendingUp, st as Earth, t as Zap, ut as CircleCheck, z as ClipboardList } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C1oVPHj8.js
var import_jsx_runtime = require_jsx_runtime();
var TICKER = [
	{
		sym: "COTTON·US",
		v: "0.74/lb",
		d: "+1.8%",
		up: true
	},
	{
		sym: "POLYESTER·CN",
		v: "1.12/kg",
		d: "-0.4%",
		up: false
	},
	{
		sym: "DENIM·TR",
		v: "3.85/yd",
		d: "+0.6%",
		up: true
	},
	{
		sym: "T-SHIRT·BD",
		v: "1.90/pc",
		d: "+2.1%",
		up: true
	},
	{
		sym: "HOODIE·PK",
		v: "6.40/pc",
		d: "-0.9%",
		up: false
	},
	{
		sym: "SILK·IN",
		v: "28.50/kg",
		d: "+3.2%",
		up: true
	},
	{
		sym: "WOOL·IT",
		v: "12.20/kg",
		d: "+0.3%",
		up: true
	},
	{
		sym: "LINEN·PT",
		v: "9.10/kg",
		d: "-1.1%",
		up: false
	},
	{
		sym: "VISCOSE·CN",
		v: "1.35/kg",
		d: "+0.7%",
		up: true
	},
	{
		sym: "NYLON·VN",
		v: "2.40/kg",
		d: "-0.2%",
		up: false
	}
];
var FEATURES = [
	{
		icon: Building2,
		title: "Company Intelligence",
		body: "Deep profiles: capacity, MOQ, certifications, exports, factory media and buyer relationships."
	},
	{
		icon: Radar,
		title: "AI Discovery Pipeline",
		body: "Continuously identify and verify newly published textile businesses across 40+ markets."
	},
	{
		icon: MessageSquare,
		title: "AI Sourcing Assistant",
		body: "Ask anything. Get suppliers, RFQs, comparisons, and market reports in seconds."
	},
	{
		icon: ShieldCheck,
		title: "Risk Engine",
		body: "Composite risk, quality, trust and sustainability scores per supplier — updated weekly."
	},
	{
		icon: TrendingUp,
		title: "Price Intelligence",
		body: "Historical trends, country comparisons and demand-side forecasts across 200+ products."
	},
	{
		icon: ChartLine,
		title: "Market Intelligence",
		body: "Trending fabrics, colors, categories, export & import momentum by country."
	},
	{
		icon: Earth,
		title: "Interactive World Map",
		body: "Explore capacity and market signals country by country on a live heatmap."
	},
	{
		icon: Sparkles,
		title: "AI Reports",
		body: "One-click supplier, country, market, competitor & pricing reports — export-ready."
	},
	{
		icon: ClipboardList,
		title: "Procurement Copilot",
		body: "Enter requirements — get ranked suppliers with explainable AI reasoning and RFQ drafts."
	},
	{
		icon: GitCompare,
		title: "Supplier Compare",
		body: "Side-by-side comparison of up to 5 suppliers across 20+ intelligence dimensions."
	},
	{
		icon: ChartColumn,
		title: "Analytics",
		body: "Track your sourcing pipeline, watchlists, and market movements over time."
	},
	{
		icon: ShieldCheck,
		title: "Compliance Tracker",
		body: "Monitor GOTS, OEKO-TEX, BSCI and EU Green Deal compliance status per supplier."
	}
];
var INTEL_SIGNALS = [
	{
		label: "Real-Time Prices",
		desc: "ICE cotton, polyester, silk, wool spot and forward prices updated every 24h from public trade feeds."
	},
	{
		label: "AI Risk Scores",
		desc: "18 composite signals across geopolitical, labour, logistics and financial risk factors per company."
	},
	{
		label: "News Radar",
		desc: "Trade policy, factory openings, regulatory changes and market shifts — auto-categorized by AI."
	},
	{
		label: "Supplier Radar",
		desc: "Continuous discovery of new suppliers from trade registries, B2B directories and export records."
	}
];
var COVERAGE_HUBS = [
	{
		region: "South Asia",
		countries: "India, Bangladesh, Pakistan, Sri Lanka",
		pct: 38
	},
	{
		region: "East Asia",
		countries: "China, Vietnam, Indonesia, Cambodia",
		pct: 31
	},
	{
		region: "Europe",
		countries: "Turkey, Italy, Portugal, Germany",
		pct: 16
	},
	{
		region: "Americas",
		countries: "Brazil, Mexico, Peru, USA",
		pct: 9
	},
	{
		region: "Rest",
		countries: "Egypt, Morocco, Ethiopia, others",
		pct: 6
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 h-14 flex items-center gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-7 w-7 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground text-sm font-bold",
								children: "GM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display font-bold",
								children: ["GMIntel", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: ".AI"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex items-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#modules",
									className: "hover:text-foreground transition-colors",
									children: "Platform"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#intelligence",
									className: "hover:text-foreground transition-colors",
									children: "Intelligence"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#coverage",
									className: "hover:text-foreground transition-colors",
									children: "Coverage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how-it-works",
									className: "hover:text-foreground transition-colors",
									children: "How it works"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app",
								children: ["Launch Terminal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-card/50 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-8 py-2 px-6 whitespace-nowrap animate-scroll font-mono text-xs",
					children: [...TICKER, ...TICKER].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t.sym
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-semibold",
								children: t.v
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: t.up ? "text-success" : "text-destructive",
								children: t.d
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ticker-grid opacity-[0.05] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-7xl mx-auto px-6 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "Global Textile Intelligence · Live"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight",
								children: [
									"The ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "Bloomberg"
									}),
									" terminal for the global textile industry."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg text-muted-foreground leading-relaxed",
								children: "GMIntel AI discovers, verifies, and analyzes manufacturers, suppliers, brands, prices, and market signals across 40+ textile hubs — surfaced through a real-time terminal and an AI sourcing copilot."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/app",
										children: ["Open the Terminal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/chat",
										children: "Try AI Assistant"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground font-mono",
								children: [
									"SOC-2 Ready",
									"RBAC Access Control",
									"Public Data Only",
									"AI labels clearly marked"
								].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-success shrink-0" }), f]
								}, f))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card overflow-hidden shadow-2xl glow-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-destructive/60" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-warning/60" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-success/60" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-3 text-[11px] font-mono text-muted-foreground",
												children: "GMIntel Terminal · v1.0"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "ml-auto flex items-center gap-1.5 text-[10px] font-mono text-success",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse" }), "LIVE"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5 font-mono text-xs space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: "❯"
												}), " search suppliers cotton india certified"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-2 pl-3 border-l border-primary/30",
												children: [
													{
														name: "Arvind Mills Ltd",
														country: "IN",
														trust: "94",
														risk: "Low",
														cert: "GOTS"
													},
													{
														name: "Vardhman Textiles",
														country: "IN",
														trust: "91",
														risk: "Low",
														cert: "ISO 9001"
													},
													{
														name: "Raymond UCO Denim",
														country: "IN",
														trust: "88",
														risk: "Med",
														cert: "BSCI"
													},
													{
														name: "Welspun India Ltd",
														country: "IN",
														trust: "86",
														risk: "Low",
														cert: "OEKO-TEX"
													}
												].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-3 py-1.5 border-b border-border/50 last:border-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-foreground font-medium",
														children: r.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-muted-foreground text-[10px] mt-0.5",
														children: [
															r.country,
															" · ",
															r.cert
														]
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-right shrink-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-foreground tabular-nums",
															children: r.trust
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: `text-[10px] mt-0.5 ${r.risk === "Low" ? "text-success" : "text-warning"}`,
															children: [r.risk, " Risk"]
														})]
													})]
												}, r.name))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-muted-foreground pt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-primary",
														children: "❯"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "animate-pulse",
														children: "_"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-5 py-3 border-t border-border bg-muted/20 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-mono text-muted-foreground",
											children: "4 results · AI-ranked by trust score"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-mono text-primary",
											children: "LIVE DATA"
										})]
									})
								]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-4",
						children: [
							{
								k: "Companies",
								v: "30K+",
								h: "Verified & AI-scored"
							},
							{
								k: "Countries",
								v: "40+",
								h: "Textile hubs covered"
							},
							{
								k: "Data points",
								v: "2.4M",
								h: "Refreshed daily"
							},
							{
								k: "AI signals",
								v: "18",
								h: "Risk · Quality · Trust"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground",
									children: s.k
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 font-display text-3xl font-bold text-primary",
									children: s.v
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1",
									children: s.h
								})
							]
						}, s.k))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "modules",
				className: "border-t border-border bg-card/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "The Platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl",
							children: "Twelve modules. One intelligence layer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl",
							children: "Every tool in GMIntel connects to the same live data engine — no silos, no switching tabs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4",
							children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-card p-5 hover:border-primary/50 hover:bg-primary/[0.02] transition-all group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4 w-4 text-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display font-semibold",
										children: f.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground mt-1 leading-relaxed",
										children: f.body
									})
								]
							}, f.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "intelligence",
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Intelligence Layer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl",
							children: "Built on live data. Powered by AI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl",
							children: "Every signal on GMIntel is sourced from public trade data, verified registries, and licensed market feeds — then enriched by AI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid md:grid-cols-2 gap-6",
							children: INTEL_SIGNALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display font-semibold",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground mt-1 leading-relaxed",
									children: s.desc
								})] })]
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 p-4 rounded-lg border border-border bg-muted/20 flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-muted-foreground mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "Data transparency: "
								}), "All AI-generated insights are clearly labeled. We use public trade registries, B2B directories, and licensed price feeds. AI estimates are never presented as financial advice."]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "coverage",
				className: "border-t border-border bg-card/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "Global Coverage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl",
							children: "40+ countries. Every major textile hub."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl",
							children: "From Dhaka to Guangdong, Izmir to Ludhiana — GMIntel covers the world's entire textile supply chain geography."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 space-y-3",
							children: COVERAGE_HUBS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-4 rounded-lg border border-border bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-32 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display font-semibold text-sm",
											children: h.region
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] font-mono text-muted-foreground mt-0.5",
											children: [h.pct, "% of database"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: h.countries
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 h-1.5 rounded-full bg-muted overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full bg-primary",
												style: { width: `${h.pct}%` }
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "shrink-0 text-sm font-mono font-semibold text-primary",
										children: [h.pct, "%"]
									})
								]
							}, h.region))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how-it-works",
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-primary",
							children: "How It Works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl",
							children: "Intelligence in 3 steps."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid md:grid-cols-3 gap-8",
							children: [
								{
									step: "01",
									title: "Connect & Search",
									desc: "Open the terminal and search for companies, products, or countries. Filters narrow 30K+ records instantly."
								},
								{
									step: "02",
									title: "AI Analysis",
									desc: "GMIntel AI scores every company on trust, risk, quality, and compliance — updated weekly from live data."
								},
								{
									step: "03",
									title: "Act & Export",
									desc: "Generate reports, draft RFQs, compare suppliers and export sourcing intelligence to your team."
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative pl-6 border-l border-primary/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-mono text-primary uppercase tracking-widest",
										children: s.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-xl font-bold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed",
										children: s.desc
									})
								]
							}, s.step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/app",
									children: ["Get started — it's free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-8 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-7 w-7 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground text-sm font-bold",
								children: "GM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display font-bold",
								children: ["GMIntel", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: ".AI"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground max-w-xs",
							children: "The intelligence terminal for global textile sourcing. Built for procurement teams, brands and investors."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-8 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3",
								children: "Platform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app",
										className: "block hover:text-foreground transition-colors",
										children: "Terminal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/chat",
										className: "block hover:text-foreground transition-colors",
										children: "AI Assistant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/prices",
										className: "block hover:text-foreground transition-colors",
										children: "Price Intel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/news",
										className: "block hover:text-foreground transition-colors",
										children: "Industry News"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:hello@gmintel.ai",
										className: "block hover:text-foreground transition-colors",
										children: "Contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "block hover:text-foreground transition-colors",
										children: "Privacy Policy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "block hover:text-foreground transition-colors",
										children: "Terms of Service"
									})
								]
							})] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" GMIntel AI · Global Textile Intelligence"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Public data · Licensed feeds · AI insights clearly labeled" })]
					})]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
