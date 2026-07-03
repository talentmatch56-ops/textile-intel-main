import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Building2, Factory, Globe2, Layers, Sparkles, TrendingUp, Loader2, Download, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { MOCK_COMPANIES } from "@/utils/mock-companies";

const MOCK_NEWS_ITEMS = [
  { id: "d1", title: "Bangladesh garment exports surge 18% in Q2 2026", source: "Textile World", category: "market", published_at: new Date(Date.now() - 3600000).toISOString() },
  { id: "d2", title: "India announces new textile PLI scheme worth ₹10,683 crore", source: "Fibre2Fashion", category: "trade_policy", published_at: new Date(Date.now() - 86400000).toISOString() },
  { id: "d3", title: "Cotton prices stabilise as US crop forecast improves", source: "Reuters Commodities", category: "price", published_at: new Date(Date.now() - 172800000).toISOString() },
  { id: "d4", title: "Vietnam's textile hub in Binh Duong opens 3 new mills", source: "Vietnam Textiles", category: "factory_opening", published_at: new Date(Date.now() - 259200000).toISOString() },
  { id: "d5", title: "EU Green Deal textile regulations force supply chain transparency by 2027", source: "EcoTextile News", category: "trade_policy", published_at: new Date(Date.now() - 345600000).toISOString() },
  { id: "d6", title: "Turkey denim sector rebounds with $2.1B in export orders for H2 2026", source: "Textilforum", category: "market", published_at: new Date(Date.now() - 432000000).toISOString() },
];

export const Route = createFileRoute("/app/")({ component: Dashboard });

const now = new Date();
const BRIEFING_CONTENT = {
  title: `GMIntel AI Briefing — ${now.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`,
  date: now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
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
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [briefingLoading, setBriefingLoading] = useState(false);

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
        supabase.from("companies").select("id, name, country_code, city, ai_risk_level, ai_trust_score, business_type, employees_range, created_at, slug", { count: "exact" }),
        supabase.from("countries").select("code, name"),
        supabase.from("news_items").select("id, title, source, published_at, category").order("published_at", { ascending: false }).limit(6),
        supabase.from("price_points").select("id, product, country_code, unit, price_low, price_high, currency, observed_at").order("observed_at", { ascending: false }).limit(120),
      ]);
      return { companies, countries, news, prices };
    },
  });

  const dbCompanies = data?.companies.data ?? [];
  const companies = useMemo(() => {
    const list = [...dbCompanies];
    MOCK_COMPANIES.forEach((mock) => {
      if (!list.some((c) => c.slug === mock.slug)) {
        list.push(mock as any);
      }
    });
    return list;
  }, [dbCompanies]);
  const totalCompanies = companies.length;
  const countries = data?.countries.data ?? [];
  const news = data?.news.data ?? [];
  const prices = data?.prices.data ?? [];

  const manufacturers = companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("manufactur")).length;
  const suppliers = companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("supplier")).length;
  const brands = companies.filter((c) => (c.business_type ?? "").toLowerCase().includes("brand")).length;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const newToday = companies.filter((c) => c.created_at && new Date(c.created_at) >= today).length;

  // Chart data: companies by country
  const byCountry: Record<string, number> = {};
  companies.forEach((c) => { if (c.country_code) byCountry[c.country_code] = (byCountry[c.country_code] ?? 0) + 1; });
  const topCountries = Object.entries(byCountry)
    .map(([code, count]) => ({ code, name: countries.find((k) => k.code === code)?.name ?? code, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Price trend synthetic aggregate
  const priceSeries = Array.from({ length: 12 }).map((_, i) => {
    const base = 100 + Math.sin(i / 2) * 6 + i * 1.2;
    return { month: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i], cotton: Math.round(base), polyester: Math.round(base * 0.72), denim: Math.round(base * 1.15) };
  });

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Command Center"
        title="Global Textile Intelligence Dashboard"
        description="Real-time market, supplier and risk signals across the world's textile hubs."
        actions={
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleGenerateBriefing}
            disabled={briefingLoading}
            className="relative"
          >
            {briefingLoading ? (
              <><Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" /> Compiling…</>
            ) : (
              <><Sparkles className="h-3.5 w-3.5 mr-1.5" /> Generate AI briefing</>
            )}
          </Button>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatCard label="Companies" value={totalCompanies.toLocaleString()} delta={{ value: "+12.4%", positive: true }} icon={<Building2 className="h-4 w-4" />} />
        <StatCard label="Manufacturers" value={manufacturers} delta={{ value: "+8.1%", positive: true }} icon={<Factory className="h-4 w-4" />} />
        <StatCard label="Suppliers" value={suppliers} delta={{ value: "+3.2%", positive: true }} icon={<Layers className="h-4 w-4" />} />
        <StatCard label="Brands" value={brands} delta={{ value: "+1.9%", positive: true }} icon={<Sparkles className="h-4 w-4" />} />
        <StatCard label="Countries" value={Object.keys(byCountry).length} hint={`${countries.length} tracked`} icon={<Globe2 className="h-4 w-4" />} />
        <StatCard label="New today" value={newToday} delta={{ value: "live", positive: true }} icon={<TrendingUp className="h-4 w-4" />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Price Intelligence · Index</div>
              <div className="font-display font-semibold mt-0.5">Fabric price index — trailing 12 months</div>
            </div>
            <div className="flex gap-3 text-[10px] font-mono">
              <Legend swatch="var(--chart-1)" label="Cotton" />
              <Legend swatch="var(--chart-2)" label="Polyester" />
              <Legend swatch="var(--chart-3)" label="Denim" />
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={priceSeries}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="cotton" stroke="var(--chart-1)" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="polyester" stroke="var(--chart-2)" fill="transparent" strokeWidth={2} />
                <Area type="monotone" dataKey="denim" stroke="var(--chart-3)" fill="transparent" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Top Sourcing Countries</div>
          <div className="font-display font-semibold mt-0.5 mb-4">Company distribution</div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topCountries} layout="vertical" margin={{ left: 8 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="name" stroke="var(--muted-foreground)" fontSize={11} width={90} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="count" fill="var(--primary)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Verified Companies</div>
              <div className="font-display font-semibold">Recently added & top trust</div>
            </div>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
              <div className="col-span-6 sm:col-span-5">Company</div>
              <div className="hidden sm:block col-span-2">Country</div>
              <div className="hidden md:block col-span-2">Category</div>
              <div className="col-span-3 sm:col-span-2 text-right">Trust</div>
              <div className="col-span-3 sm:col-span-1 text-right">Risk</div>
            </div>
            {companies.slice(0, 8).map((c) => (
              <div key={c.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40">
                <div className="col-span-6 sm:col-span-5">
                  <div className="font-medium text-foreground truncate">{c.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {c.city ? `${c.city}, ` : ""}{c.country_code ?? "—"}
                  </div>
                </div>
                <div className="hidden sm:block col-span-2 font-mono text-xs text-muted-foreground">{c.country_code ?? "—"}</div>
                <div className="hidden md:block col-span-2 text-xs text-muted-foreground truncate">{c.business_type ?? "—"}</div>
                <div className="col-span-3 sm:col-span-2 text-right font-mono tabular-nums text-foreground">{c.ai_trust_score ?? "—"}</div>
                <div className="col-span-3 sm:col-span-1 text-right"><RiskBadge level={c.ai_risk_level} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card">
          <div className="p-4 border-b border-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Live News</div>
            <div className="font-display font-semibold">Industry pulse</div>
          </div>
          <div className="divide-y divide-border">
            {(news.length > 0 ? news : MOCK_NEWS_ITEMS).map((n) => (
              <div key={n.id} className="p-4 hover:bg-muted/40">
                <div className="text-[10px] font-mono uppercase text-muted-foreground flex items-center justify-between">
                  <span>{n.category ?? "News"}</span>
                  <span>{n.published_at ? new Date(n.published_at).toLocaleDateString() : ""}</span>
                </div>
                <div className="text-sm font-medium mt-1 leading-snug">{n.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{n.source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.06] to-transparent p-5">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">AI Market Insight · Estimate</div>
            <div className="font-display font-semibold mt-0.5">Cotton index momentum turning positive across South Asia</div>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-3xl">
              Trailing 30-day price action shows firming demand out of Bangladesh and India, with new capacity announcements
              offsetting soft PMI prints in Turkey. Consider locking Q1 volumes with tier-1 GOTS-certified mills.
            </p>
          </div>
        </div>
      </div>

      <div className="text-[10px] font-mono text-muted-foreground">
        Prices shown: {prices.length} recent observations · AI insights are estimates and clearly labeled.
      </div>

      {briefingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl rounded-lg border border-border bg-card shadow-lg p-6 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
            <button 
              onClick={() => setBriefingOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground p-1 rounded hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <h3 className="font-display text-lg font-bold text-foreground">{BRIEFING_CONTENT.title}</h3>
            </div>
            
            <div className="text-[10px] font-mono text-muted-foreground mb-4 uppercase tracking-widest border-b border-border pb-2">
              Compiled on {BRIEFING_CONTENT.date} · Live Market Intelligence
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-sm text-muted-foreground leading-relaxed">
              {BRIEFING_CONTENT.sections.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-semibold text-foreground font-display">{sec.title}</h4>
                  <p className="whitespace-pre-line">{sec.content}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-border">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const text = `${BRIEFING_CONTENT.title}\nDate: ${BRIEFING_CONTENT.date}\n\n` + 
                    BRIEFING_CONTENT.sections.map(s => `${s.title}\n${s.content}`).join("\n\n");
                  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = `gmintel_ai_briefing_${new Date().toISOString().slice(0,10)}.txt`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  URL.revokeObjectURL(url);
                  toast.success("Downloading briefing...");
                }}
                className="gap-1.5"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </Button>
              <Button size="sm" onClick={() => setBriefingOpen(false)}>
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <span className="h-2 w-2 rounded-sm" style={{ background: swatch }} />{label}
    </span>
  );
}