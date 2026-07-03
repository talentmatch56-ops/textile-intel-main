import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Globe2, LineChart, MessageSquare, Radar,
  ShieldCheck, Sparkles, TrendingUp, BarChart3, ClipboardList,
  GitCompare, CheckCircle2, Zap, Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
});

const TICKER = [
  { sym: "COTTON·US",    v: "0.74/lb",  d: "+1.8%", up: true  },
  { sym: "POLYESTER·CN", v: "1.12/kg",  d: "-0.4%", up: false },
  { sym: "DENIM·TR",     v: "3.85/yd",  d: "+0.6%", up: true  },
  { sym: "T-SHIRT·BD",   v: "1.90/pc",  d: "+2.1%", up: true  },
  { sym: "HOODIE·PK",    v: "6.40/pc",  d: "-0.9%", up: false },
  { sym: "SILK·IN",      v: "28.50/kg", d: "+3.2%", up: true  },
  { sym: "WOOL·IT",      v: "12.20/kg", d: "+0.3%", up: true  },
  { sym: "LINEN·PT",     v: "9.10/kg",  d: "-1.1%", up: false },
  { sym: "VISCOSE·CN",   v: "1.35/kg",  d: "+0.7%", up: true  },
  { sym: "NYLON·VN",     v: "2.40/kg",  d: "-0.2%", up: false },
];

const FEATURES = [
  { icon: Building2,     title: "Company Intelligence",   body: "Deep profiles: capacity, MOQ, certifications, exports, factory media and buyer relationships." },
  { icon: Radar,         title: "AI Discovery Pipeline",  body: "Continuously identify and verify newly published textile businesses across 40+ markets." },
  { icon: MessageSquare, title: "AI Sourcing Assistant",  body: "Ask anything. Get suppliers, RFQs, comparisons, and market reports in seconds." },
  { icon: ShieldCheck,   title: "Risk Engine",            body: "Composite risk, quality, trust and sustainability scores per supplier — updated weekly." },
  { icon: TrendingUp,    title: "Price Intelligence",     body: "Historical trends, country comparisons and demand-side forecasts across 200+ products." },
  { icon: LineChart,     title: "Market Intelligence",    body: "Trending fabrics, colors, categories, export & import momentum by country." },
  { icon: Globe2,        title: "Interactive World Map",  body: "Explore capacity and market signals country by country on a live heatmap." },
  { icon: Sparkles,      title: "AI Reports",             body: "One-click supplier, country, market, competitor & pricing reports — export-ready." },
  { icon: ClipboardList, title: "Procurement Copilot",   body: "Enter requirements — get ranked suppliers with explainable AI reasoning and RFQ drafts." },
  { icon: GitCompare,    title: "Supplier Compare",       body: "Side-by-side comparison of up to 5 suppliers across 20+ intelligence dimensions." },
  { icon: BarChart3,     title: "Analytics",              body: "Track your sourcing pipeline, watchlists, and market movements over time." },
  { icon: ShieldCheck,   title: "Compliance Tracker",     body: "Monitor GOTS, OEKO-TEX, BSCI and EU Green Deal compliance status per supplier." },
];

const INTEL_SIGNALS = [
  { label: "Real-Time Prices",  desc: "ICE cotton, polyester, silk, wool spot and forward prices updated every 24h from public trade feeds." },
  { label: "AI Risk Scores",    desc: "18 composite signals across geopolitical, labour, logistics and financial risk factors per company." },
  { label: "News Radar",        desc: "Trade policy, factory openings, regulatory changes and market shifts — auto-categorized by AI." },
  { label: "Supplier Radar",    desc: "Continuous discovery of new suppliers from trade registries, B2B directories and export records." },
];

const COVERAGE_HUBS = [
  { region: "South Asia", countries: "India, Bangladesh, Pakistan, Sri Lanka", pct: 38 },
  { region: "East Asia",  countries: "China, Vietnam, Indonesia, Cambodia",    pct: 31 },
  { region: "Europe",     countries: "Turkey, Italy, Portugal, Germany",       pct: 16 },
  { region: "Americas",   countries: "Brazil, Mexico, Peru, USA",              pct: 9  },
  { region: "Rest",       countries: "Egypt, Morocco, Ethiopia, others",       pct: 6  },
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
            <a href="#modules"      className="hover:text-foreground transition-colors">Platform</a>
            <a href="#intelligence" className="hover:text-foreground transition-colors">Intelligence</a>
            <a href="#coverage"     className="hover:text-foreground transition-colors">Coverage</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          </nav>
          <div className="flex-1" />
          <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</Link>
          <Button size="sm" asChild><Link to="/app">Launch Terminal <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link></Button>
        </div>
      </header>

      {/* Ticker */}
      <div className="border-b border-border bg-card/50 overflow-hidden">
        <div className="flex gap-8 py-2 px-6 whitespace-nowrap animate-scroll font-mono text-xs">
          {[...TICKER, ...TICKER].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-muted-foreground">{t.sym}</span>
              <span className="text-foreground font-semibold">{t.v}</span>
              <span className={t.up ? "text-success" : "text-destructive"}>{t.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 ticker-grid opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Global Textile Intelligence · Live
              </div>
              <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                The <span className="text-primary">Bloomberg</span> terminal for the global textile industry.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                GMIntel AI discovers, verifies, and analyzes manufacturers, suppliers, brands, prices, and market
                signals across 40+ textile hubs — surfaced through a real-time terminal and an AI sourcing copilot.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link to="/app">Open the Terminal <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/app/chat">Try AI Assistant</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-muted-foreground font-mono">
                {["SOC-2 Ready", "RBAC Access Control", "Public Data Only", "AI labels clearly marked"].map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />{f}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl glow-primary">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
                  <span className="h-3 w-3 rounded-full bg-destructive/60" />
                  <span className="h-3 w-3 rounded-full bg-warning/60" />
                  <span className="h-3 w-3 rounded-full bg-success/60" />
                  <span className="ml-3 text-[11px] font-mono text-muted-foreground">GMIntel Terminal · v1.0</span>
                  <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />LIVE
                  </span>
                </div>
                <div className="p-5 font-mono text-xs space-y-3">
                  <div className="text-muted-foreground">
                    <span className="text-primary">❯</span> search suppliers cotton india certified
                  </div>
                  <div className="space-y-2 pl-3 border-l border-primary/30">
                    {[
                      { name: "Arvind Mills Ltd",  country: "IN", trust: "94", risk: "Low", cert: "GOTS"     },
                      { name: "Vardhman Textiles", country: "IN", trust: "91", risk: "Low", cert: "ISO 9001" },
                      { name: "Raymond UCO Denim", country: "IN", trust: "88", risk: "Med", cert: "BSCI"     },
                      { name: "Welspun India Ltd", country: "IN", trust: "86", risk: "Low", cert: "OEKO-TEX" },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between gap-3 py-1.5 border-b border-border/50 last:border-0">
                        <div>
                          <div className="text-foreground font-medium">{r.name}</div>
                          <div className="text-muted-foreground text-[10px] mt-0.5">{r.country} · {r.cert}</div>
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
                <div className="px-5 py-3 border-t border-border bg-muted/20 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-muted-foreground">4 results · AI-ranked by trust score</div>
                  <div className="text-[10px] font-mono text-primary">LIVE DATA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "Companies",   v: "30K+", h: "Verified & AI-scored" },
              { k: "Countries",   v: "40+",  h: "Textile hubs covered" },
              { k: "Data points", v: "2.4M", h: "Refreshed daily" },
              { k: "AI signals",  v: "18",   h: "Risk · Quality · Trust" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-2 font-display text-3xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">The Platform</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl">Twelve modules. One intelligence layer.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Every tool in GMIntel connects to the same live data engine — no silos, no switching tabs.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-lg border border-border bg-card p-5 hover:border-primary/50 hover:bg-primary/[0.02] transition-all group">
                <div className="h-9 w-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="font-display font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence */}
      <section id="intelligence" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Intelligence Layer</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl">Built on live data. Powered by AI.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Every signal on GMIntel is sourced from public trade data, verified registries, and licensed market feeds — then enriched by AI.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {INTEL_SIGNALS.map((s) => (
              <div key={s.label} className="flex gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="h-9 w-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold">{s.label}</div>
                  <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-lg border border-border bg-muted/20 flex items-start gap-3">
            <Lock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Data transparency: </span>
              All AI-generated insights are clearly labeled. We use public trade registries, B2B directories, and licensed price feeds. AI estimates are never presented as financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Global Coverage</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl">40+ countries. Every major textile hub.</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">From Dhaka to Guangdong, Izmir to Ludhiana — GMIntel covers the world's entire textile supply chain geography.</p>
          <div className="mt-10 space-y-3">
            {COVERAGE_HUBS.map((h) => (
              <div key={h.region} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="w-32 shrink-0">
                  <div className="font-display font-semibold text-sm">{h.region}</div>
                  <div className="text-[10px] font-mono text-muted-foreground mt-0.5">{h.pct}% of database</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground">{h.countries}</div>
                  <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${h.pct}%` }} />
                  </div>
                </div>
                <div className="shrink-0 text-sm font-mono font-semibold text-primary">{h.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">How It Works</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold max-w-2xl">Intelligence in 3 steps.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Connect & Search", desc: "Open the terminal and search for companies, products, or countries. Filters narrow 30K+ records instantly." },
              { step: "02", title: "AI Analysis",      desc: "GMIntel AI scores every company on trust, risk, quality, and compliance — updated weekly from live data." },
              { step: "03", title: "Act & Export",     desc: "Generate reports, draft RFQs, compare suppliers and export sourcing intelligence to your team." },
            ].map((s) => (
              <div key={s.step} className="relative pl-6 border-l border-primary/30">
                <div className="text-[10px] font-mono text-primary uppercase tracking-widest">{s.step}</div>
                <div className="mt-2 font-display text-xl font-bold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/app">Get started — it's free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-start justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground text-sm font-bold">GM</div>
                <div className="font-display font-bold">GMIntel<span className="text-primary">.AI</span></div>
              </div>
              <p className="text-xs text-muted-foreground max-w-xs">
                The intelligence terminal for global textile sourcing. Built for procurement teams, brands and investors.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Platform</div>
                <div className="space-y-2 text-muted-foreground">
                  <Link to="/app" className="block hover:text-foreground transition-colors">Terminal</Link>
                  <Link to="/app/chat" className="block hover:text-foreground transition-colors">AI Assistant</Link>
                  <Link to="/app/prices" className="block hover:text-foreground transition-colors">Price Intel</Link>
                  <Link to="/app/news" className="block hover:text-foreground transition-colors">Industry News</Link>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Company</div>
                <div className="space-y-2 text-muted-foreground">
                  <a href="mailto:hello@gmintel.ai" className="block hover:text-foreground transition-colors">Contact</a>
                  <a href="#" className="block hover:text-foreground transition-colors">Privacy Policy</a>
                  <a href="#" className="block hover:text-foreground transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground font-mono">
            <div>© {new Date().getFullYear()} GMIntel AI · Global Textile Intelligence</div>
            <div>Public data · Licensed feeds · AI insights clearly labeled</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
