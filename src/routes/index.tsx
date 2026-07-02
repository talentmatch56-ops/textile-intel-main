import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Globe2, LineChart, MessageSquare, Radar, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
});

const TICKER = [
  { sym: "COTTON·US", v: "0.74/lb", d: "+1.8%", up: true },
  { sym: "POLYESTER·CN", v: "1.12/kg", d: "-0.4%", up: false },
  { sym: "DENIM·TR", v: "3.85/yd", d: "+0.6%", up: true },
  { sym: "T-SHIRT·BD", v: "1.90/pc", d: "+2.1%", up: true },
  { sym: "HOODIE·PK", v: "6.40/pc", d: "-0.9%", up: false },
  { sym: "SILK·IN", v: "28.50/kg", d: "+3.2%", up: true },
  { sym: "WOOL·IT", v: "12.20/kg", d: "+0.3%", up: true },
  { sym: "LINEN·PT", v: "9.10/kg", d: "-1.1%", up: false },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground text-sm font-bold">GM</div>
            <div className="font-display font-bold">GMIntel<span className="text-primary">.AI</span></div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#modules" className="hover:text-foreground">Platform</a>
            <a href="#intelligence" className="hover:text-foreground">Intelligence</a>
            <a href="#coverage" className="hover:text-foreground">Coverage</a>
          </nav>
          <div className="flex-1" />
          <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
          <Button size="sm" asChild><Link to="/app">Launch Terminal <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link></Button>
        </div>
      </header>

      {/* Ticker */}
      <div className="border-b border-border bg-card/50 overflow-hidden">
        <div className="flex gap-8 py-2 px-6 whitespace-nowrap animate-[scroll_40s_linear_infinite] font-mono text-xs">
          {[...TICKER, ...TICKER].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-muted-foreground">{t.sym}</span>
              <span className="text-foreground">{t.v}</span>
              <span className={t.up ? "text-success" : "text-destructive"}>{t.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 ticker-grid opacity-[0.06] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Global Textile Intelligence · Live
              </div>
              <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-tight">
                The <span className="text-primary">Bloomberg</span> of the global textile industry.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                GMIntel AI discovers, verifies, and analyzes manufacturers, suppliers, brands, prices, and market
                signals across 40+ textile hubs — surfaced through a real-time terminal and an AI sourcing copilot.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild><Link to="/app">Open the Terminal <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                <Button size="lg" variant="outline" asChild><Link to="/app/chat">Try the AI Assistant</Link></Button>
              </div>
            </div>

            {/* Right: Terminal preview card */}
            <div className="hidden lg:block">
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl glow-primary">
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
                  <span className="h-3 w-3 rounded-full bg-destructive/60" />
                  <span className="h-3 w-3 rounded-full bg-warning/60" />
                  <span className="h-3 w-3 rounded-full bg-success/60" />
                  <span className="ml-3 text-[11px] font-mono text-muted-foreground">GMIntel Terminal · v0.1</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                </div>
                {/* Terminal body */}
                <div className="p-5 font-mono text-xs space-y-3">
                  <div className="text-muted-foreground">
                    <span className="text-primary">❯</span> search suppliers cotton india certified
                  </div>
                  <div className="space-y-2 pl-3 border-l border-primary/30">
                    {[
                      { name: "Arvind Mills Ltd", country: "IN", trust: "94", risk: "Low" },
                      { name: "Vardhman Textiles", country: "IN", trust: "91", risk: "Low" },
                      { name: "Raymond UCO Denim", country: "IN", trust: "88", risk: "Med" },
                      { name: "Welspun India Ltd", country: "IN", trust: "86", risk: "Low" },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between gap-3 py-1.5 border-b border-border/50 last:border-0">
                        <div>
                          <div className="text-foreground font-medium">{r.name}</div>
                          <div className="text-muted-foreground text-[10px] mt-0.5">{r.country} · GOTS Certified</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-foreground tabular-nums">{r.trust}</div>
                          <div className={`text-[10px] mt-0.5 ${r.risk === "Low" ? "text-success" : "text-warning"}`}>{r.risk} Risk</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-muted-foreground pt-1">
                    <span className="text-primary">❯</span> <span className="animate-pulse">_</span>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="px-5 py-3 border-t border-border bg-muted/20 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-muted-foreground">4 results · AI-ranked by trust score</div>
                  <div className="text-[10px] font-mono text-primary">LIVE DATA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row below */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "Companies", v: "30K+", h: "Verified & AI-scored" },
              { k: "Countries", v: "40+", h: "Textile hubs covered" },
              { k: "Data points", v: "2.4M", h: "Refreshed daily" },
              { k: "AI signals", v: "18", h: "Risk · Quality · Trust" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-card p-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-2 font-display text-3xl font-bold text-foreground">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <section id="modules" className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">The Platform</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl">
            Fifteen modules. One intelligence layer.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition">
                <f.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>© {new Date().getFullYear()} GMIntel AI · Global Textile Intelligence</div>
          <div>Public data · Licensed feeds · AI insights clearly labeled</div>
        </div>
      </footer>

      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

const FEATURES = [
  { icon: Building2, title: "Company Intelligence", body: "Deep profiles: capacity, MOQ, certifications, exports, factory media." },
  { icon: Radar, title: "AI Discovery Pipeline", body: "Continuously identify and verify newly published textile businesses." },
  { icon: MessageSquare, title: "AI Sourcing Assistant", body: "Ask anything. Get suppliers, RFQs, comparisons, and market reports." },
  { icon: ShieldCheck, title: "Risk Engine", body: "Composite risk, quality, trust and sustainability scores per supplier." },
  { icon: TrendingUp, title: "Price Intelligence", body: "Historical trends, country comparisons and demand-side forecasts." },
  { icon: LineChart, title: "Market Intelligence", body: "Trending fabrics, colors, categories, export & import momentum." },
  { icon: Globe2, title: "Interactive World Map", body: "Explore capacity and market signals country by country." },
  { icon: Sparkles, title: "AI Reports", body: "One-click supplier, country, market, competitor & pricing reports." },
  { icon: Building2, title: "Procurement Copilot", body: "Enter requirements — get ranked suppliers with explainable AI reasoning." },
];
