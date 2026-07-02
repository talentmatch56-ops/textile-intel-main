import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Building2, Factory, Globe2, Layers, Sparkles, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/")({ component: Dashboard });

function Dashboard() {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const [companies, countries, news, prices] = await Promise.all([
        supabase.from("companies").select("id, name, country_code, city, ai_risk_level, ai_trust_score, business_type, employees_range, created_at", { count: "exact" }),
        supabase.from("countries").select("code, name"),
        supabase.from("news_items").select("id, title, source, published_at, category").order("published_at", { ascending: false }).limit(6),
        supabase.from("price_points").select("id, product, country_code, unit, price_low, price_high, currency, observed_at").order("observed_at", { ascending: false }).limit(120),
      ]);
      return { companies, countries, news, prices };
    },
  });

  const companies = data?.companies.data ?? [];
  const totalCompanies = data?.companies.count ?? companies.length;
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
        actions={<Button variant="outline" size="sm"><Sparkles className="h-3.5 w-3.5 mr-1.5" />Generate AI briefing</Button>}
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
              <div className="col-span-5">Company</div>
              <div className="col-span-2">Country</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2 text-right">Trust</div>
              <div className="col-span-1 text-right">Risk</div>
            </div>
            {companies.slice(0, 8).map((c) => (
              <div key={c.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40">
                <div className="col-span-5">
                  <div className="font-medium text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.city ?? "—"}</div>
                </div>
                <div className="col-span-2 font-mono text-xs text-muted-foreground">{c.country_code ?? "—"}</div>
                <div className="col-span-2 text-xs text-muted-foreground truncate">{c.business_type ?? "—"}</div>
                <div className="col-span-2 text-right font-mono tabular-nums text-foreground">{c.ai_trust_score ?? "—"}</div>
                <div className="col-span-1 text-right"><RiskBadge level={c.ai_risk_level} /></div>
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
            {news.map((n) => (
              <div key={n.id} className="p-4 hover:bg-muted/40">
                <div className="text-[10px] font-mono uppercase text-muted-foreground flex items-center justify-between">
                  <span>{n.category ?? "News"}</span>
                  <span>{n.published_at ? new Date(n.published_at).toLocaleDateString() : ""}</span>
                </div>
                <div className="text-sm font-medium mt-1 leading-snug">{n.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{n.source}</div>
              </div>
            ))}
            {news.length === 0 && <div className="p-6 text-sm text-muted-foreground">No news yet.</div>}
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