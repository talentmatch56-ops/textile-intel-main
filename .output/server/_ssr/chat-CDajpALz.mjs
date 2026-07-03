import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { $ as Sparkles, G as Bot, _ as Plus, b as MicOff, i as Volume2, o as User, p as Send, r as VolumeX, tt as LoaderCircle, x as MessageSquare, y as Mic } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { t as MOCK_COMPANIES } from "./mock-companies-B_80WWwW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-CDajpALz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AI_RESPONSES = {
	default: "I'm GMIntel AI, your textile intelligence copilot. I can help you find suppliers, analyze markets, compare companies, assess risks, and generate sourcing reports. What would you like to know?",
	supplier: "Based on your requirements, here are the top matches from our database:\n\n- **Arvind Mills Ltd** (India) — Trust: 94 | Risk: Low | MOQ: 200 units | GOTS certified\n- **Vardhman Textiles** (India) — Trust: 91 | Risk: Low | MOQ: 500 units | ISO 9001\n- **Raymond UCO Denim** (India) — Trust: 88 | Risk: Med | MOQ: 1,000 units | BSCI\n\nWould you like a detailed comparison or help drafting an RFQ?",
	price: "Current cotton index (COTTON·US): **$0.74/lb** (+1.8% MoM)\n\nCountry price comparison for cotton fabric:\n- India: $1.20–$1.80/m²\n- Bangladesh: $1.05–$1.60/m²\n- Pakistan: $1.10–$1.70/m²\n- Turkey: $1.45–$2.10/m²\n\nPrices are AI-estimated and sourced from public trade data. Shall I generate a full pricing report?",
	risk: "Risk analysis for South Asia textile sector:\n\n**Bangladesh** — Overall: Medium\n- Labour regulation compliance: improving\n- Currency risk (BDT): moderate\n- Logistics: Chittagong port congestion (-2 pts)\n\n**India** — Overall: Low\n- Strong regulatory framework\n- GST clarity improving\n- Diversified manufacturing base\n\nWant a full risk report for a specific country or supplier?",
	sustainability: "Sustainability intelligence summary:\n\n- **Key certifications in demand:** GOTS 7.0 (updated 2026), OEKO-TEX MADE IN GREEN, Bluesign\n- **Regulatory alerts:** EU Eco-Design Regulation effective Jan 2027 — requires full Tier-2 traceability\n- **Carbon border fees:** CBAM carbon border adjustment now covers synthetic fibres\n- **Top certified hubs:** India (23% GOTS coverage), Turkey (18%), Portugal (14%)\n\nWould you like to filter suppliers by certification?",
	market: "Global textile market intelligence — Q2 2026:\n\n- **Trending segments:** Technical textiles (+22% demand growth), sustainable fabrics (+18% GOTS premium pricing)\n- **Watch list:** Bangladesh (order book at 94% capacity through Q3), Turkey (denim exports hit 5-year high)\n\nWant a full market report for a specific category?",
	report: "I can generate the following reports instantly:\n\n- **Supplier Reports:** Company deep-dive, trust/risk scores, certifications, contact info\n- **Market Reports:** Category trends, country rankings, demand forecasts\n- **Price Reports:** Historical charts, country comparisons, forward estimates\n- **Competitor Reports:** Brand-to-brand sourcing comparison\n\nWhich report type would you like? Just tell me the company, country, or product.",
	compare: "**Supplier comparison — India Cotton Mills:**\n\n| Supplier | Trust | Risk | MOQ | Lead Time |\n|---|---|---|---|---|\n| Arvind Mills | 94 | Low | 200 | 45 days |\n| Vardhman | 91 | Low | 500 | 38 days |\n| Welspun | 87 | Low | 1,000 | 52 days |\n\nArvind Mills scores highest on trust and has the lowest MOQ. Vardhman offers the fastest lead time. Shall I include certifications or export history in this comparison?"
};
function getAIResponse(message, companies, countries, news, lastAssistantContent) {
	const lower = message.toLowerCase().trim();
	const getCountryName = (code) => {
		const found = countries.find((c) => c.code?.toLowerCase() === code?.toLowerCase());
		return found ? found.name : code;
	};
	if (lastAssistantContent) {
		const lastLower = lastAssistantContent.toLowerCase();
		if (lastLower.includes("would you like a detailed comparison or help drafting an rfq?")) {
			if (lower === "yes" || lower === "yes please" || lower === "sure" || lower === "ok" || lower.includes("comparison") || lower.includes("compare")) {
				const top3 = companies.slice(0, 3);
				let comparison = "Here is a detailed comparison of the top matches:\n\n";
				top3.forEach((c, idx) => {
					comparison += `${idx + 1}. **${c.name}** (${getCountryName(c.country_code)}) — Trust Score: **${c.ai_trust_score ?? 85}/100** | Risk: **${(c.ai_risk_level ?? "Low").toUpperCase()}** | MOQ: **${c.moq ?? 200}** units | Lead Time: **${c.lead_time_days ?? 45}** days\n`;
				});
				comparison += "\nWould you like me to draft a Request for Quote (RFQ) email template for " + (top3[0]?.name ?? "the top supplier") + "?";
				return comparison;
			}
			if (lower.includes("rfq") || lower.includes("draft") || lower.includes("email") || lower.includes("request")) {
				const topCompany = companies[0] || { name: "Arvind Mills Ltd" };
				return `Here is a drafted Request for Quote (RFQ) template for **${topCompany.name}**:\n\n\`\`\`text\nSubject: RFQ: Premium Textile Material Sourcing inquiry\n\nDear Sourcing Team at ${topCompany.name},\n\nWe are looking to source high-quality textile materials for our upcoming apparel collection. Please find our specifications below:\n- Target Quantity: 5,000 units\n- Required Certifications: GOTS / OEKO-TEX Standard 100\n- Target Delivery: Within 45-60 days\n\nPlease let us know your standard lead times, pricing metrics, and available capacities.\n\nBest regards,\n[Your Name]\n\`\`\`\n\nWould you like me to customize this draft or download it?`;
			}
		}
		if (lastLower.includes("email template for arvind mills?") || lastLower.includes("email template for")) {
			if (lower === "yes" || lower === "yes please" || lower === "sure" || lower === "ok" || lower.includes("rfq") || lower.includes("draft") || lower.includes("email")) {
				const topCompany = companies[0] || { name: "Arvind Mills Ltd" };
				return `Here is a drafted Request for Quote (RFQ) template for **${topCompany.name}**:\n\n\`\`\`text\nSubject: RFQ: Premium Textile Material Sourcing inquiry\n\nDear Sourcing Team at ${topCompany.name},\n\nWe are looking to source high-quality textile materials for our upcoming apparel collection. Please find our specifications below:\n- Target Quantity: 5,000 units\n- Required Certifications: GOTS / OEKO-TEX Standard 100\n- Target Delivery: Within 45-60 days\n\nPlease let us know your standard lead times, pricing metrics, and available capacities.\n\nBest regards,\n[Your Name]\n\`\`\`\n\nWould you like me to customize this draft or download it?`;
			}
		}
		if (lastLower.includes("want a full risk report for a specific country or supplier?")) {
			if (lower === "yes" || lower === "yes please" || lower === "sure" || lower === "ok" || lower.includes("bangladesh") || lower.includes("india")) return "Generating South Asia Risk Intelligence Report:\n\n- **Arvind Mills Ltd**: Risk Level: **Low**. Stable energy grid connectivity, OEKO-TEX audited, zero industrial dispute flags in last 12 months.\n- **Logistics routing**: Bangladesh ports currently face a 4.2-day average anchorage delay, whereas Indian western ports (Mundra/Pipavav) are clearing cargo within 36 hours.\n\nWould you like to draft a risk mitigation plan for your supply chain?";
		}
		if (lastLower.includes("would you like to check compliance for one of these suppliers?")) {
			if (lower === "yes" || lower === "yes please" || lower === "sure" || lower === "ok" || lower.includes("check") || lower.includes("want to check")) {
				const topCompany = companies[0] || { name: "Arvind Mills Ltd" };
				const secondCompany = companies[1] || { name: "Vardhman Textiles" };
				return `### EU Green Deal Compliance Audit - Sourcing Report

Here is the compliance report for our top organic suppliers:

- **${topCompany.name}**:\n  - **GOTS Certification:** Valid (ID: GOTS-IN-88392, expires Oct 2026).\n  - **Tier-2 material traceability:** **100% Mapped**. Cotton fibers traced back to cotton growers cooperatives in Gujarat, India.\n  - **Carbon footprint estimate:** 2.15 kg CO2e / kg of fabric (Exceeds EU target limit of 3.0).\n  - **Chemical compliance:** ZDHC Level 3 certified.\n  - **Status:** **FULLY COMPLIANT** (Low compliance risk).\n\n- **${secondCompany.name}**:\n  - **GOTS Certification:** Valid (ID: GOTS-IN-90211, expires Dec 2026).\n  - **Tier-2 material traceability:** **85% Mapped**. Traced back to spinning mills in Punjab, India. Ginning stage documentation pending.\n  - **Carbon footprint estimate:** 2.65 kg CO2e / kg of fabric.\n  - **Status:** **PROVISIONALLY COMPLIANT** (Minor audit update requested).\n\nWould you like to draft an inquiry to Arvind Mills for their Tier-2 certificate verification or run a risk report?`;
			}
		}
		if (lastLower.includes("draft an inquiry to arvind mills for their tier-2 certificate verification")) {
			if (lower === "yes" || lower === "yes please" || lower === "sure" || lower === "ok" || lower.includes("inquiry") || lower.includes("draft") || lower.includes("email")) return `Here is a drafted compliance audit inquiry for **Arvind Mills Ltd**:\n\n\`\`\`text\nSubject: URGENT: Tier-2 Material Traceability Verification (EU Green Deal Compliance)\n\nDear Arvind Mills Sourcing Team,\n\nIn preparation for the upcoming EU Eco-Design and Green Deal regulations starting 2027, we are updating our supplier compliance registry.\n\nCould you please provide the latest Transaction Certificates (TCs) validating the raw cotton fiber origin for our current orders? Specifically, we require documentation mapping the spinning and ginning mills for our organic cotton fabric orders.\n\nPlease send the PDF certificates at your earliest convenience.\n\nBest regards,\n[Your Name]\n\`\`\`\n\nWould you like me to customize this template or would you like to run a risk report?`;
		}
	}
	for (const comp of companies) {
		const compNameLower = comp.name.toLowerCase();
		if (lower.includes(compNameLower) || comp.slug && lower.includes(comp.slug.replace("-", " "))) return `Here is the current intelligence profile for **${comp.name}**:\n\n- **Location:** ${comp.city ?? "Primary Hub"}, ${getCountryName(comp.country_code)}\n- **Business Type:** ${comp.business_type ?? "Manufacturer"}\n- **AI Trust Score:** **${comp.ai_trust_score ?? 85}/100**\n- **AI Risk Level:** **${(comp.ai_risk_level ?? "Low").toUpperCase()}**\n- **Monthly Capacity:** ${comp.monthly_capacity ? comp.monthly_capacity.toLocaleString() + " meters/month" : "150,000 meters/month"}\n- **Minimum Order Quantity (MOQ):** ${comp.moq ? comp.moq.toLocaleString() + " units" : "500 units"}\n- **Sourcing Certification:** GOTS Certified / ISO 9001 compliant\n\nWould you like to compare ${comp.name} with another supplier or draft an RFQ?`;
	}
	if (lower.includes("highest trust") || lower.includes("best trust") || lower.includes("top trust") || lower.includes("most trusted")) {
		const sorted = [...companies].sort((a, b) => (b.ai_trust_score ?? 0) - (a.ai_trust_score ?? 0));
		const top = sorted[0];
		if (top) return `The supplier with the highest AI Trust Score in our database is **${top.name}** with a score of **${top.ai_trust_score}/100** (Location: ${top.city ?? "Primary Hub"}, ${getCountryName(top.country_code)}).\n\nOther high trust suppliers include:\n` + sorted.slice(1, 4).map((c) => `- **${c.name}**: Trust ${c.ai_trust_score}/100`).join("\n") + `\n\nWould you like me to compare these top trusted suppliers?`;
	}
	if (lower.includes("how many companies") || lower.includes("total companies") || lower.includes("how many suppliers")) return `We are currently tracking **${companies.length} companies** in the GMIntel system:\n- **Manufacturers:** ${companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("manufactur")).length}\n- **Suppliers / Traders:** ${companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("supplier")).length}\n- **Tracked Sourcing Hubs:** ${new Set(companies.map((c) => c.country_code).filter(Boolean)).size} countries\n\nYou can filter this list by country or ask me for details on a specific supplier.`;
	if (lower.includes("gots") || lower.includes("organic") || lower.includes("sustainab")) return `Here are the key GOTS-certified/organic manufacturers in our registry:\n\n` + companies.filter((c) => c.name.toLowerCase().includes("arvind") || c.name.toLowerCase().includes("vardhman") || c.name.toLowerCase().includes("envoy") || (c.business_type ?? "").toLowerCase().includes("organic")).slice(0, 4).map((c) => `- **${c.name}** (${getCountryName(c.country_code)}) — Trust: ${c.ai_trust_score}/100 | Specializes in certified organic fiber.`).join("\n") + `\n\nStarting January 2027, the EU Green Deal regulation requires complete Tier-2 material transparency. Would you like to check compliance for one of these suppliers?`;
	if (lower.includes("india") || lower.includes("indian")) {
		const indians = companies.filter((c) => c.country_code === "IN");
		if (indians.length > 0) return `We track **${indians.length} suppliers in India**:\n\n` + indians.slice(0, 5).map((c) => `- **${c.name}** (Trust: ${c.ai_trust_score}/100 | Risk: ${c.ai_risk_level})`).join("\n") + (indians.length > 5 ? `\n...and ${indians.length - 5} more.` : "") + `\n\nWould you like to compare their capacities and Minimum Order Quantities?`;
	}
	if (lower.includes("bangladesh") || lower.includes("bangladeshi")) {
		const bd = companies.filter((c) => c.country_code === "BD");
		if (bd.length > 0) return `We track **${bd.length} suppliers in Bangladesh**:\n\n` + bd.slice(0, 5).map((c) => `- **${c.name}** (Trust: ${c.ai_trust_score}/100 | Risk: ${c.ai_risk_level})`).join("\n") + (bd.length > 5 ? `\n...and ${bd.length - 5} more.` : "") + `\n\nWould you like to analyze logisitcs or port delays for these Bangladesh mills?`;
	}
	if (lower.includes("turkey") || lower.includes("turkish")) {
		const tr = companies.filter((c) => c.country_code === "TR");
		if (tr.length > 0) return `We track **${tr.length} suppliers in Turkey**:\n\n` + tr.slice(0, 5).map((c) => `- **${c.name}** (Trust: ${c.ai_trust_score}/100 | Risk: ${c.ai_risk_level})`).join("\n") + (tr.length > 5 ? `\n...and ${tr.length - 5} more.` : "") + `\n\nTurkey mills are popular due to short lead times for Europe. Shall we review their lead times?`;
	}
	if (lower === "hello" || lower === "hi" || lower === "hey" || lower === "greetings") return "Hello! I am your GMIntel AI Copilot. I can help you search verified suppliers, fetch live fabric prices, or compile risk alerts. What are you sourcing today?";
	if (lower === "thanks" || lower === "thank you" || lower === "great" || lower === "awesome" || lower === "thanks!") return "You're very welcome! Let me know if you need help generating a PDF supplier report or analyzing more price index points.";
	if (lower === "no" || lower === "no thanks" || lower === "clear" || lower === "stop" || lower === "nope") return "Understood. Let me know when you are ready to start a new sourcing run.";
	if (lower.includes("supplier") || lower.includes("manufacturer") || lower.includes("factory") || lower.includes("source") || lower.includes("find")) return AI_RESPONSES.supplier;
	if (lower.includes("price") || lower.includes("cost") || lower.includes("cotton") || lower.includes("polyester") || lower.includes("yarn")) return AI_RESPONSES.price;
	if (lower.includes("risk") || lower.includes("compliance") || lower.includes("safe") || lower.includes("audit")) return AI_RESPONSES.risk;
	if (lower.includes("market") || lower.includes("trend") || lower.includes("demand") || lower.includes("growth")) return AI_RESPONSES.market;
	if (lower.includes("report") || lower.includes("generat") || lower.includes("export") || lower.includes("analysis")) return AI_RESPONSES.report;
	if (lower.includes("compare") || lower.includes("versus") || lower.includes("vs") || lower.includes("difference")) return AI_RESPONSES.compare;
	return `I've noted your input: "${message}". Let me assist you by finding manufacturers, tracking textile price sheets, drafting RFQs, or reviewing sustainability targets. What is the main fiber or supplier name you are searching for?`;
}
function renderMarkdown(text) {
	if (text.includes("```text")) return text.split("```text").map((part, i) => {
		if (i % 2 === 1) {
			const codeContent = part.split("```")[0];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "my-2 p-3 bg-muted/60 border border-border rounded font-mono text-xs overflow-x-auto whitespace-pre text-foreground",
				children: codeContent.trim()
			}, i);
		} else return renderNormalLines(part);
	});
	return renderNormalLines(text);
}
function renderNormalLines(text) {
	return text.split("\n").map((line, i) => {
		const isBullet = /^[-•]\s/.test(line);
		const content = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
		if (isBullet) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "ml-2 list-disc",
			dangerouslySetInnerHTML: { __html: content.replace(/^[-•]\s/, "") }
		}, i);
		if (line.trim() === "") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { dangerouslySetInnerHTML: { __html: content } }, i);
	});
}
function MessageBubble({ msg, onSpeak, playingVoiceId }) {
	const isUser = msg.role === "user";
	const hasListItems = msg.content.includes("\n- ") || msg.content.includes("\n• ");
	const isPlaying = playingVoiceId === msg.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex gap-3 ${isUser ? "flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `h-7 w-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${isUser ? "bg-primary/20 text-primary" : "bg-muted border border-border text-primary"}`,
			children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `max-w-[80%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rounded-lg px-4 py-3 text-sm leading-relaxed relative group ${isUser ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground"}`,
				children: [isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "whitespace-pre-wrap",
					children: msg.content
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose-chat space-y-1 pr-4",
					children: [hasListItems ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc pl-4 space-y-0.5",
						children: renderMarkdown(msg.content)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: renderMarkdown(msg.content)
					}), msg.isStreaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-3.5 w-1.5 ml-0.5 bg-primary animate-pulse" })]
				}), !isUser && !msg.isStreaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onSpeak(msg.id, msg.content),
					className: cn("absolute bottom-2.5 right-2.5 p-1 rounded hover:bg-muted text-muted-foreground hover:text-primary transition-all opacity-0 group-hover:opacity-100 cursor-pointer", isPlaying && "opacity-100 text-primary bg-primary/10"),
					title: isPlaying ? "Mute speech" : "Read response aloud",
					children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3 w-3" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-mono text-muted-foreground px-1",
				children: msg.ts.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit"
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
	const [isListening, setIsListening] = (0, import_react.useState)(false);
	const [playingVoiceId, setPlayingVoiceId] = (0, import_react.useState)(null);
	const bottomRef = (0, import_react.useRef)(null);
	const recognitionRef = (0, import_react.useRef)(null);
	const { data } = useQuery({
		queryKey: ["dashboard"],
		queryFn: async () => {
			const [companies, countries, news] = await Promise.all([
				supabase.from("companies").select("id, name, country_code, city, ai_risk_level, ai_trust_score, business_type, employees_range, created_at, slug, monthly_capacity, moq, lead_time_days"),
				supabase.from("countries").select("code, name"),
				supabase.from("news_items").select("id, title, source, published_at, category").order("published_at", { ascending: false }).limit(6)
			]);
			return {
				companies: companies.data ?? [],
				countries: countries.data ?? [],
				news: news.data ?? []
			};
		}
	});
	const dbCompanies = data?.companies ?? [];
	const companies = (0, import_react.useMemo)(() => {
		const list = [...dbCompanies];
		MOCK_COMPANIES.forEach((mock) => {
			if (!list.some((c) => c.slug === mock.slug)) list.push(mock);
		});
		return list;
	}, [dbCompanies]);
	const countries = data?.countries ?? [];
	const news = data?.news ?? [];
	(0, import_react.useEffect)(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [
		messages,
		activeThread,
		thinking
	]);
	const speakText = (msgId, text) => {
		if (typeof window !== "undefined") {
			if (playingVoiceId === msgId) {
				window.speechSynthesis.cancel();
				setPlayingVoiceId(null);
				return;
			}
			window.speechSynthesis.cancel();
			const cleanText = text.replace(/\*\*/g, "");
			const utterance = new SpeechSynthesisUtterance(cleanText);
			utterance.onend = () => setPlayingVoiceId(null);
			utterance.onerror = () => setPlayingVoiceId(null);
			setPlayingVoiceId(msgId);
			window.speechSynthesis.speak(utterance);
		}
	};
	const startListening = () => {
		if (typeof window !== "undefined") {
			const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
			if (!SpeechRecognition) {
				toast.error("Voice dictation is not supported by your current browser. Use Google Chrome.");
				return;
			}
			window.speechSynthesis.cancel();
			setPlayingVoiceId(null);
			const rec = new SpeechRecognition();
			rec.continuous = false;
			rec.interimResults = false;
			rec.lang = "en-US";
			rec.onstart = () => {
				setIsListening(true);
				toast.info("Listening... Speak your question.");
			};
			rec.onresult = (event) => {
				const transcript = event.results[0][0].transcript;
				setInput(transcript);
				setIsListening(false);
			};
			rec.onerror = (e) => {
				console.warn("Speech recognition error:", e);
				setIsListening(false);
			};
			rec.onend = () => {
				setIsListening(false);
			};
			recognitionRef.current = rec;
			rec.start();
		}
	};
	const stopListening = () => {
		recognitionRef.current?.stop();
		setIsListening(false);
	};
	const streamAIResponse = (responseText) => {
		const aiMessageId = crypto.randomUUID();
		const streamingMsg = {
			id: aiMessageId,
			role: "assistant",
			content: "",
			ts: /* @__PURE__ */ new Date(),
			isStreaming: true
		};
		setMessages((prev) => ({
			...prev,
			[activeThread]: [...prev[activeThread] ?? [], streamingMsg]
		}));
		const words = responseText.split(" ");
		let index = 0;
		const timer = setInterval(() => {
			if (index >= words.length) {
				clearInterval(timer);
				setMessages((prev) => {
					const list = prev[activeThread] ?? [];
					return {
						...prev,
						[activeThread]: list.map((m) => m.id === aiMessageId ? {
							...m,
							isStreaming: false
						} : m)
					};
				});
				return;
			}
			const nextWord = words[index] + (index === words.length - 1 ? "" : " ");
			setMessages((prev) => {
				const list = prev[activeThread] ?? [];
				return {
					...prev,
					[activeThread]: list.map((m) => m.id === aiMessageId ? {
						...m,
						content: m.content + nextWord
					} : m)
				};
			});
			index++;
		}, 45);
	};
	const currentMessages = messages[activeThread] ?? [];
	const send = () => {
		const text = input.trim();
		if (!text || thinking) return;
		if (typeof window !== "undefined") {
			window.speechSynthesis.cancel();
			setPlayingVoiceId(null);
		}
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
		const lastAssistantContent = [...currentMessages].reverse().find((m) => m.role === "assistant")?.content;
		setTimeout(() => {
			setThinking(false);
			streamAIResponse(getAIResponse(text, companies, countries, news, lastAssistantContent));
		}, 1200);
	};
	const newThread = () => {
		if (typeof window !== "undefined") {
			window.speechSynthesis.cancel();
			setPlayingVoiceId(null);
		}
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
						onClick: () => {
							if (typeof window !== "undefined") {
								window.speechSynthesis.cancel();
								setPlayingVoiceId(null);
							}
							setActiveThread(t.id);
						},
						className: `w-full text-left rounded-md px-3 py-2.5 transition-colors ${activeThread === t.id ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-muted/60"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs truncate",
								children: t.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono text-muted-foreground/60 mt-0.5 pl-5",
							children: t.ts.toLocaleDateString("en-US")
						})]
					}, t.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-4 bg-muted/5",
					children: [
						currentMessages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
							msg,
							onSpeak: speakText,
							playingVoiceId
						}, msg.id)),
						thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-7 w-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4 text-primary animate-pulse" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" }), "Analyzing market signals…"]
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
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: input,
										onChange: (e) => setInput(e.target.value),
										onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && send(),
										placeholder: isListening ? "Listening..." : "Ask about suppliers, prices, risks, markets…",
										disabled: isListening,
										className: cn("w-full h-10 pl-9 pr-10 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary transition-all", isListening && "border-red-500/50 bg-red-50/5 ring-1 ring-red-500/30 placeholder:text-red-400")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: isListening ? stopListening : startListening,
										className: cn("absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-primary transition-all cursor-pointer", isListening && "text-red-500 hover:text-red-600 bg-red-100/10 animate-pulse"),
										title: isListening ? "Stop listening" : "Dictate your query",
										children: isListening ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: send,
								disabled: !input.trim() || thinking || isListening,
								size: "sm",
								className: "h-10 px-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[10px] font-mono text-muted-foreground text-center",
							children: "AI responses are estimates and intelligence summaries · Connected to verified company databases"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { Page as component };
