import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, MessageSquare, Plus, Loader2, Bot, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/chat")({ component: Page });

type Message = { id: string; role: "user" | "assistant"; content: string; ts: Date };

const AI_RESPONSES: Record<string, string> = {
  default:      "I'm GMIntel AI, your textile intelligence copilot. I can help you find suppliers, analyze markets, compare companies, assess risks, and generate sourcing reports. What would you like to know?",
  supplier:     "Based on your requirements, here are the top matches from our database:\n\n**1. Arvind Mills Ltd** (India) — Trust: 94 | Risk: Low | MOQ: 200 units | GOTS certified\n**2. Vardhman Textiles** (India) — Trust: 91 | Risk: Low | MOQ: 500 units | ISO 9001\n**3. Raymond UCO Denim** (India) — Trust: 88 | Risk: Med | MOQ: 1,000 units | BSCI\n\nWould you like a detailed comparison or help drafting an RFQ?",
  price:        "Current cotton index (COTTON·US): **$0.74/lb** (+1.8% MoM)\n\nCountry price comparison for cotton fabric:\n- India: $1.20–$1.80/m²\n- Bangladesh: $1.05–$1.60/m²\n- Pakistan: $1.10–$1.70/m²\n- Turkey: $1.45–$2.10/m²\n\nPrices are AI-estimated and sourced from public trade data. Shall I generate a full pricing report?",
  risk:         "Risk analysis for South Asia textile sector:\n\n**Bangladesh** — Overall: Medium\n- Labour regulation compliance: improving\n- Currency risk (BDT): moderate\n- Logistics: Chittagong port congestion (-2 pts)\n\n**India** — Overall: Low\n- Strong regulatory framework\n- GST clarity improving\n- Diversified manufacturing base\n\nWant a full risk report for a specific country or supplier?",
  sustainability: "Sustainability intelligence summary:\n\n**Key certifications in demand:** GOTS 7.0 (updated 2026), OEKO-TEX MADE IN GREEN, Bluesign\n\n**Regulatory alerts:**\n- EU Eco-Design Regulation effective Jan 2027 — requires full Tier-2 traceability\n- CBAM carbon border adjustment now covers synthetic fibres\n\n**Top certified hubs:** India (23% GOTS coverage), Turkey (18%), Portugal (14%)\n\nWould you like to filter suppliers by certification?",
  market:       "Global textile market intelligence — Q2 2026:\n\n**Trending segments:**\n- Technical textiles: +22% demand growth (automotive, medical)\n- Sustainable fabrics: GOTS cotton +18% premium pricing\n- Athleisure: recovery in Vietnam export orders (+14%)\n\n**Watch list:**\n- Bangladesh: order book at 94% capacity through Q3\n- Turkey: denim exports hit 5-year high\n\nWant a full market report for a specific category?",
  report:       "I can generate the following reports instantly:\n\n**Supplier Reports:** Company deep-dive, trust/risk scores, certifications, contact info\n**Market Reports:** Category trends, country rankings, demand forecasts\n**Price Reports:** Historical charts, country comparisons, forward estimates\n**Competitor Reports:** Brand-to-brand sourcing comparison\n\nWhich report type would you like? Just tell me the company, country, or product.",
  compare:      "**Supplier comparison — India Cotton Mills:**\n\n| Supplier | Trust | Risk | MOQ | Lead Time |\n|---|---|---|---|---|\n| Arvind Mills | 94 | Low | 200 | 45 days |\n| Vardhman | 91 | Low | 500 | 38 days |\n| Welspun | 87 | Low | 1,000 | 52 days |\n\nArvind Mills scores highest on trust and has the lowest MOQ. Vardhman offers the fastest lead time. Shall I include certifications or export history in this comparison?",
};

function getAIResponse(message: string): string {
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

function renderMarkdown(text: string) {
  // Simple markdown: **bold**, bullet lists starting with - or •, newlines to <br>
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const isBullet = /^[-•]\s/.test(line);
    const content = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    if (isBullet) {
      return <li key={i} className="ml-2" dangerouslySetInnerHTML={{ __html: content.replace(/^[-•]\s/, "") }} />;
    }
    if (line.trim() === "") return <div key={i} className="h-2" />;
    return <p key={i} dangerouslySetInnerHTML={{ __html: content }} />;
  });
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  const hasListItems = msg.content.includes("\n- ") || msg.content.includes("\n• ");
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className={`h-7 w-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${isUser ? "bg-primary/20 text-primary" : "bg-muted border border-border text-primary"}`}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className={`max-w-[80%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
        <div className={`rounded-lg px-4 py-3 text-sm leading-relaxed ${
          isUser ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground"
        }`}>
          {isUser ? (
            <span className="whitespace-pre-wrap">{msg.content}</span>
          ) : (
            <div className="prose-chat space-y-1">
              {hasListItems ? (
                <ul className="list-disc pl-4 space-y-0.5">{renderMarkdown(msg.content)}</ul>
              ) : (
                <div className="space-y-1">{renderMarkdown(msg.content)}</div>
              )}
            </div>
          )}
        </div>
        <div className="text-[10px] font-mono text-muted-foreground px-1">
          {msg.ts.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" })}
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [threads, setThreads] = useState([
    { id: "1", title: "Cotton supplier search — India", ts: new Date(Date.now() - 86400000) },
    { id: "2", title: "Bangladesh risk assessment", ts: new Date(Date.now() - 3600000 * 5) },
  ]);
  const [activeThread, setActiveThread] = useState("1");
  const [messages, setMessages] = useState<Record<string, Message[]>>({
    "1": [
      { id: "a1", role: "assistant", content: AI_RESPONSES.default, ts: new Date(Date.now() - 86400000) },
      { id: "a2", role: "user", content: "Find me cotton manufacturers in India with GOTS certification", ts: new Date(Date.now() - 86400000 + 60000) },
      { id: "a3", role: "assistant", content: AI_RESPONSES.supplier, ts: new Date(Date.now() - 86400000 + 90000) },
    ],
    "2": [
      { id: "b1", role: "assistant", content: AI_RESPONSES.default, ts: new Date() },
    ],
  });
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, activeThread]);

  const send = () => {
    const text = input.trim();
    if (!text || thinking) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text, ts: new Date() };
    setMessages((prev) => ({ ...prev, [activeThread]: [...(prev[activeThread] ?? []), userMsg] }));
    setInput("");
    setThinking(true);
    // Update thread title if first user message
    setThreads((prev) => prev.map((t) => t.id === activeThread && t.title.startsWith("New") ? { ...t, title: text.slice(0, 40) } : t));
    setTimeout(() => {
      const aiMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: getAIResponse(text), ts: new Date() };
      setMessages((prev) => ({ ...prev, [activeThread]: [...(prev[activeThread] ?? []), aiMsg] }));
      setThinking(false);
    }, 1200);
  };

  const newThread = () => {
    const id = crypto.randomUUID();
    setThreads((prev) => [{ id, title: "New conversation", ts: new Date() }, ...prev]);
    setMessages((prev) => ({ ...prev, [id]: [{ id: crypto.randomUUID(), role: "assistant", content: AI_RESPONSES.default, ts: new Date() }] }));
    setActiveThread(id);
  };

  const currentMessages = messages[activeThread] ?? [];

  return (
    <div className="space-y-0 -m-6 md:-m-8 h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-border flex-none">
        <PageHeader
          eyebrow="Command Center · AI"
          title="AI Assistant"
          description="Your GMIntel sourcing copilot. Ask about suppliers, prices, risks, and market trends."
        />
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Thread sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card/30">
          <div className="p-3 border-b border-border">
            <Button variant="outline" size="sm" className="w-full gap-2" onClick={newThread}>
              <Plus className="h-3.5 w-3.5" /> New conversation
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
            {threads.map((t) => (
              <button key={t.id} onClick={() => setActiveThread(t.id)}
                className={`w-full text-left rounded-md px-3 py-2.5 transition-colors ${activeThread === t.id ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-muted/60"}`}>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-xs truncate">{t.title}</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground/60 mt-0.5 pl-5">
                  {t.ts.toLocaleDateString("en-US", { timeZone: "UTC" })}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {currentMessages.map((msg) => <MessageBubble key={msg.id} msg={msg} />)}
            {thinking && (
              <div className="flex gap-3">
                <div className="h-7 w-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  Analyzing intelligence data…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div className="p-4 border-t border-border bg-card/30">
            {/* Suggested prompts */}
            {currentMessages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {[
                  "Find cotton suppliers in India with GOTS",
                  "What are current polyester yarn prices?",
                  "Assess risk for Bangladesh manufacturers",
                  "Compare top denim mills in Turkey",
                  "Sustainability certifications overview",
                  "Generate a market trend report",
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => { setInput(prompt); }}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                  placeholder="Ask about suppliers, prices, risks, markets…"
                  className="w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary"
                />
              </div>
              <Button onClick={send} disabled={!input.trim() || thinking} size="sm" className="h-10 px-4">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 text-[10px] font-mono text-muted-foreground text-center">
              AI responses are estimates and intelligence summaries · Not financial advice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
