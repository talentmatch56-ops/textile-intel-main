import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { B as Bot, J as Sparkles, X as LoaderCircle, g as MessageSquare, i as User, m as Plus, u as Send } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-D3RfH60i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AI_RESPONSES = {
	default: "I'm GMIntel AI, your textile intelligence copilot. I can help you find suppliers, analyze markets, compare companies, assess risks, and generate sourcing reports. What would you like to know?",
	supplier: "Based on your requirements, here are the top matches from our database:\n\n**1. Arvind Mills Ltd** (India) — Trust: 94 | Risk: Low | MOQ: 200 units | GOTS certified\n**2. Vardhman Textiles** (India) — Trust: 91 | Risk: Low | MOQ: 500 units | ISO 9001\n**3. Raymond UCO Denim** (India) — Trust: 88 | Risk: Med | MOQ: 1,000 units | BSCI\n\nWould you like a detailed comparison or help drafting an RFQ?",
	price: "Current cotton index (COTTON·US): **$0.74/lb** (+1.8% MoM)\n\nCountry price comparison for cotton fabric:\n- India: $1.20–$1.80/m²\n- Bangladesh: $1.05–$1.60/m²\n- Pakistan: $1.10–$1.70/m²\n- Turkey: $1.45–$2.10/m²\n\nPrices are AI-estimated and sourced from public trade data. Shall I generate a full pricing report?",
	risk: "Risk analysis for South Asia textile sector:\n\n**Bangladesh** — Overall: Medium\n- Labour regulation compliance: improving\n- Currency risk (BDT): moderate\n- Logistics: Chittagong port congestion (-2 pts)\n\n**India** — Overall: Low\n- Strong regulatory framework\n- GST clarity improving\n- Diversified manufacturing base\n\nWant a full risk report for a specific country or supplier?",
	sustainability: "Sustainability intelligence summary:\n\n**Key certifications in demand:** GOTS 7.0 (updated 2026), OEKO-TEX MADE IN GREEN, Bluesign\n\n**Regulatory alerts:**\n- EU Eco-Design Regulation effective Jan 2027 — requires full Tier-2 traceability\n- CBAM carbon border adjustment now covers synthetic fibres\n\n**Top certified hubs:** India (23% GOTS coverage), Turkey (18%), Portugal (14%)\n\nWould you like to filter suppliers by certification?",
	market: "Global textile market intelligence — Q2 2026:\n\n**Trending segments:**\n- Technical textiles: +22% demand growth (automotive, medical)\n- Sustainable fabrics: GOTS cotton +18% premium pricing\n- Athleisure: recovery in Vietnam export orders (+14%)\n\n**Watch list:**\n- Bangladesh: order book at 94% capacity through Q3\n- Turkey: denim exports hit 5-year high\n\nWant a full market report for a specific category?",
	report: "I can generate the following reports instantly:\n\n**Supplier Reports:** Company deep-dive, trust/risk scores, certifications, contact info\n**Market Reports:** Category trends, country rankings, demand forecasts\n**Price Reports:** Historical charts, country comparisons, forward estimates\n**Competitor Reports:** Brand-to-brand sourcing comparison\n\nWhich report type would you like? Just tell me the company, country, or product.",
	compare: "**Supplier comparison — India Cotton Mills:**\n\n| Supplier | Trust | Risk | MOQ | Lead Time |\n|---|---|---|---|---|\n| Arvind Mills | 94 | Low | 200 | 45 days |\n| Vardhman | 91 | Low | 500 | 38 days |\n| Welspun | 87 | Low | 1,000 | 52 days |\n\nArvind Mills scores highest on trust and has the lowest MOQ. Vardhman offers the fastest lead time. Shall I include certifications or export history in this comparison?"
};
function getAIResponse(message) {
	const lower = message.toLowerCase();
	if (lower.includes("supplier") || lower.includes("manufacturer") || lower.includes("factory") || lower.includes("source") || lower.includes("find")) return AI_RESPONSES.supplier;
	if (lower.includes("price") || lower.includes("cost") || lower.includes("cotton") || lower.includes("polyester") || lower.includes("yarn")) return AI_RESPONSES.price;
	if (lower.includes("risk") || lower.includes("compliance") || lower.includes("safe") || lower.includes("audit")) return AI_RESPONSES.risk;
	if (lower.includes("sustain") || lower.includes("gots") || lower.includes("organic") || lower.includes("certif") || lower.includes("eco")) return AI_RESPONSES.sustainability;
	if (lower.includes("market") || lower.includes("trend") || lower.includes("demand") || lower.includes("growth")) return AI_RESPONSES.market;
	if (lower.includes("report") || lower.includes("generat") || lower.includes("export") || lower.includes("analysis")) return AI_RESPONSES.report;
	if (lower.includes("compare") || lower.includes("versus") || lower.includes("vs") || lower.includes("difference")) return AI_RESPONSES.compare;
	return AI_RESPONSES.default;
}
function renderMarkdown(text) {
	return text.split("\n").map((line, i) => {
		const isBullet = /^[-•]\s/.test(line);
		const content = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
		if (isBullet) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "ml-2",
			dangerouslySetInnerHTML: { __html: content.replace(/^[-•]\s/, "") }
		}, i);
		if (line.trim() === "") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { dangerouslySetInnerHTML: { __html: content } }, i);
	});
}
function MessageBubble({ msg }) {
	const isUser = msg.role === "user";
	const hasListItems = msg.content.includes("\n- ") || msg.content.includes("\n• ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex gap-3 ${isUser ? "flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `h-7 w-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${isUser ? "bg-primary/20 text-primary" : "bg-muted border border-border text-primary"}`,
			children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `max-w-[80%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `rounded-lg px-4 py-3 text-sm leading-relaxed ${isUser ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground"}`,
				children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "whitespace-pre-wrap",
					children: msg.content
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-chat space-y-1",
					children: hasListItems ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc pl-4 space-y-0.5",
						children: renderMarkdown(msg.content)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: renderMarkdown(msg.content)
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-mono text-muted-foreground px-1",
				children: msg.ts.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
					timeZone: "UTC"
				})
			})]
		})]
	});
}
function Page() {
	const [threads, setThreads] = (0, import_react.useState)([{
		id: "1",
		title: "Cotton supplier search — India",
		ts: /* @__PURE__ */ new Date(Date.now() - 864e5)
	}, {
		id: "2",
		title: "Bangladesh risk assessment",
		ts: /* @__PURE__ */ new Date(Date.now() - 36e5 * 5)
	}]);
	const [activeThread, setActiveThread] = (0, import_react.useState)("1");
	const [messages, setMessages] = (0, import_react.useState)({
		"1": [
			{
				id: "a1",
				role: "assistant",
				content: AI_RESPONSES.default,
				ts: /* @__PURE__ */ new Date(Date.now() - 864e5)
			},
			{
				id: "a2",
				role: "user",
				content: "Find me cotton manufacturers in India with GOTS certification",
				ts: /* @__PURE__ */ new Date(Date.now() - 864e5 + 6e4)
			},
			{
				id: "a3",
				role: "assistant",
				content: AI_RESPONSES.supplier,
				ts: /* @__PURE__ */ new Date(Date.now() - 864e5 + 9e4)
			}
		],
		"2": [{
			id: "b1",
			role: "assistant",
			content: AI_RESPONSES.default,
			ts: /* @__PURE__ */ new Date()
		}]
	});
	const [input, setInput] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const bottomRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, activeThread]);
	const send = () => {
		const text = input.trim();
		if (!text || thinking) return;
		const userMsg = {
			id: crypto.randomUUID(),
			role: "user",
			content: text,
			ts: /* @__PURE__ */ new Date()
		};
		setMessages((prev) => ({
			...prev,
			[activeThread]: [...prev[activeThread] ?? [], userMsg]
		}));
		setInput("");
		setThinking(true);
		setThreads((prev) => prev.map((t) => t.id === activeThread && t.title.startsWith("New") ? {
			...t,
			title: text.slice(0, 40)
		} : t));
		setTimeout(() => {
			const aiMsg = {
				id: crypto.randomUUID(),
				role: "assistant",
				content: getAIResponse(text),
				ts: /* @__PURE__ */ new Date()
			};
			setMessages((prev) => ({
				...prev,
				[activeThread]: [...prev[activeThread] ?? [], aiMsg]
			}));
			setThinking(false);
		}, 1200);
	};
	const newThread = () => {
		const id = crypto.randomUUID();
		setThreads((prev) => [{
			id,
			title: "New conversation",
			ts: /* @__PURE__ */ new Date()
		}, ...prev]);
		setMessages((prev) => ({
			...prev,
			[id]: [{
				id: crypto.randomUUID(),
				role: "assistant",
				content: AI_RESPONSES.default,
				ts: /* @__PURE__ */ new Date()
			}]
		}));
		setActiveThread(id);
	};
	const currentMessages = messages[activeThread] ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-0 -m-6 md:-m-8 h-[calc(100vh-3.5rem)] flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-border flex-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Command Center · AI",
				title: "AI Assistant",
				description: "Your GMIntel sourcing copilot. Ask about suppliers, prices, risks, and market trends."
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 min-h-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden md:flex w-64 flex-col border-r border-border bg-card/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "w-full gap-2",
						onClick: newThread,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New conversation"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-2 space-y-0.5",
					children: threads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveThread(t.id),
						className: `w-full text-left rounded-md px-3 py-2.5 transition-colors ${activeThread === t.id ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-muted/60"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs truncate",
								children: t.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono text-muted-foreground/60 mt-0.5 pl-5",
							children: t.ts.toLocaleDateString("en-US", { timeZone: "UTC" })
						})]
					}, t.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-4",
					children: [
						currentMessages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, { msg }, msg.id)),
						thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-7 w-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4 text-primary" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" }), "Analyzing intelligence data…"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottomRef })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-t border-border bg-card/30",
					children: [
						currentMessages.length <= 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5 mb-3",
							children: [
								"Find cotton suppliers in India with GOTS",
								"What are current polyester yarn prices?",
								"Assess risk for Bangladesh manufacturers",
								"Compare top denim mills in Turkey",
								"Sustainability certifications overview",
								"Generate a market trend report"
							].map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setInput(prompt);
								},
								className: "text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors",
								children: prompt
							}, prompt))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: input,
									onChange: (e) => setInput(e.target.value),
									onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && send(),
									placeholder: "Ask about suppliers, prices, risks, markets…",
									className: "w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: send,
								disabled: !input.trim() || thinking,
								size: "sm",
								className: "h-10 px-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[10px] font-mono text-muted-foreground text-center",
							children: "AI responses are estimates and intelligence summaries · Not financial advice"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { Page as component };
