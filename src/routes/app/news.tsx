import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { ExternalLink, Newspaper, TrendingUp, Globe, Factory, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";

export const Route = createFileRoute("/app/news")({ component: Page });

const CATEGORY_META: Record<string, { label: string; color: string; icon: typeof Newspaper }> = {
  trade_policy:   { label: "Trade Policy",    color: "text-info bg-info/10 border-info/30",        icon: Globe },
  price:          { label: "Prices",          color: "text-warning bg-warning/10 border-warning/30", icon: TrendingUp },
  factory_opening:{ label: "Factory",         color: "text-success bg-success/10 border-success/30", icon: Factory },
  sustainability: { label: "Sustainability",  color: "text-primary bg-primary/10 border-primary/30", icon: FileText },
  market:         { label: "Market",          color: "text-chart-3 bg-chart-3/10 border-chart-3/30", icon: TrendingUp },
};

function CategoryBadge({ category }: { category?: string | null }) {
  const meta = CATEGORY_META[category ?? ""] ?? { label: category ?? "News", color: "text-muted-foreground bg-muted border-border", icon: Newspaper };
  const Icon = meta.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${meta.color}`}>
      <Icon className="h-2.5 w-2.5" />{meta.label}
    </span>
  );
}

function Page() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["news-all"],
    queryFn: async () => {
      const [news, countries] = await Promise.all([
        supabase.from("news_items").select("*").order("published_at", { ascending: false }).limit(100),
        supabase.from("countries").select("code,name"),
      ]);
      return { news: news.data ?? [], countries: countries.data ?? [] };
    },
  });

  const news = data?.news ?? [];
  const countryMap = Object.fromEntries((data?.countries ?? []).map((c) => [c.code, c.name]));
  const categories = useMemo(() => ["all", ...new Set(news.map((n) => n.category).filter(Boolean))] as string[], [news]);

  const filtered = useMemo(() => {
    if (categoryFilter === "all") return news;
    return news.filter((n) => n.category === categoryFilter);
  }, [news, categoryFilter]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  // Mock news if none in DB
  const mockNews = [
    { id: "1", title: "Bangladesh garment exports surge 18% in Q2 2026 driven by EU demand", summary: "Dhaka — Bangladesh's readymade garment sector recorded its strongest quarterly performance in five years, with exports climbing 18% YoY as European buyers shifted sourcing away from Southeast Asia.", source: "Textile World", category: "market", country_code: "BD", published_at: new Date(Date.now() - 3600000).toISOString(), url: "https://fubex.net" },
    { id: "2", title: "India announces new textile PLI scheme worth ₹10,683 crore for technical textiles", summary: "New Delhi — The Ministry of Textiles unveiled expanded production-linked incentives targeting technical textile manufacturers, aiming to double sector output by 2028.", source: "Fibre2Fashion", category: "trade_policy", country_code: "IN", published_at: new Date(Date.now() - 86400000).toISOString(), url: "https://www.fibre2fashion.com" },
    { id: "3", title: "Cotton prices stabilise as US crop forecast improves", summary: "New York — ICE cotton futures edged lower after USDA revised its US crop estimate upward, easing supply concerns that had pushed prices to 18-month highs earlier this month.", source: "Reuters Commodities", category: "price", country_code: "US", published_at: new Date(Date.now() - 172800000).toISOString(), url: "https://grandviewresearch.com" },
    { id: "4", title: "Vietnam's textile hub in Binh Duong opens 3 new mills with 12,000 capacity", summary: "Ho Chi Minh City — Binh Duong Province inaugurated a new industrial cluster housing three state-of-the-art spinning mills, adding 12,000 tonnes of monthly yarn capacity.", source: "Vietnam Textiles", category: "factory_opening", country_code: "VN", published_at: new Date(Date.now() - 259200000).toISOString(), url: "https://svegea.se" },
    { id: "5", title: "EU Green Deal textile regulations force supply chain transparency by 2027", summary: "Brussels — The European Parliament passed updated Ecodesign Regulation amendments requiring brands to disclose full Tier-2 supplier information by January 2027.", source: "EcoTextile News", category: "trade_policy", country_code: "DE", published_at: new Date(Date.now() - 345600000).toISOString(), url: "https://heuritech.com" },
    { id: "6", title: "Turkey denim sector rebounds with $2.1B in export orders for H2 2026", summary: "Istanbul — Turkish denim manufacturers are reporting full order books through end-2026, with order volumes up 31% compared to the same period last year.", source: "Textilforum", category: "market", country_code: "TR", published_at: new Date(Date.now() - 432000000).toISOString(), url: "https://texdata.com" },
    { id: "7", title: "Global apparel markets face supply shocks in H1 2026 due to shipping disruptions", summary: "Global shipping routes via key canals face severe logistics logjams and fuel cost updates, driving freight costs higher and delaying raw synthetic fibers deliveries by 20-30 days.", source: "AlchemPro Sourcing", category: "market", country_code: "US", published_at: new Date(Date.now() - 475200000).toISOString(), url: "https://alchempro.com" },
    { id: "8", title: "Punjab cabinet approves new Textile and Apparel Policy 2026 for infrastructure boost", summary: "Ludhiana — The regional government approved capital subsidies and power concession packages to upgrade looms, print hubs, and green effluent treatment networks.", source: "Textile Insights", category: "trade_policy", country_code: "IN", published_at: new Date(Date.now() - 502000000).toISOString(), url: "https://textileinsights.in" },
    { id: "9", title: "Pakistan polyester staple fibre capacity doubles with Faisalabad expansion", summary: "Lahore — Major PSF producers in Punjab's textile hub have commissioned new lines bringing total national capacity to 800,000 tonnes per annum.", source: "APTMA Weekly", category: "factory_opening", country_code: "PK", published_at: new Date(Date.now() - 518400000).toISOString(), url: "#" },
    { id: "10", title: "China's synthetic fibre prices rise 4.2% on higher feedstock costs", summary: "Shanghai — Polyester filament yarn prices climbed 4.2% MoM as PTA and MEG costs rose following crude oil strength, squeezing downstream converter margins.", source: "CCFGroup", category: "price", country_code: "CN", published_at: new Date(Date.now() - 604800000).toISOString(), url: "#" },
  ];

  const displayNews = news.length > 0 ? filtered : (categoryFilter === "all" ? mockNews : mockNews.filter((n) => n.category === categoryFilter));
  const displayFeatured = displayNews[0];
  const displayRest = displayNews.slice(1);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Intelligence"
        title="Industry News"
        description="Live textile industry news — trade policy, price movements, factory openings, and market signals."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total Articles" value={(news.length || mockNews.length).toString()} icon={<Newspaper className="h-4 w-4" />} />
        <StatCard label="Trade Policy" value={mockNews.filter(n => n.category === "trade_policy").length} delta={{ value: "this week", positive: true }} />
        <StatCard label="Price Alerts" value={mockNews.filter(n => n.category === "price").length} />
        <StatCard label="Factory Openings" value={mockNews.filter(n => n.category === "factory_opening").length} delta={{ value: "new", positive: true }} />
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2">
        {["all", "trade_policy", "price", "factory_opening", "market", "sustainability"].map((cat) => {
          const meta = CATEGORY_META[cat];
          const label = cat === "all" ? "All News" : meta?.label ?? cat;
          return (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-colors ${
                categoryFilter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {isLoading && <div className="p-12 text-center text-muted-foreground text-sm">Loading news…</div>}

      {!isLoading && displayFeatured && (
        <div className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.05] to-transparent p-6 hover:border-primary/50 transition-colors group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <CategoryBadge category={displayFeatured.category} />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {displayFeatured.published_at ? new Date(displayFeatured.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                </span>
                {displayFeatured.country_code && <span className="text-[10px] font-mono text-muted-foreground">{countryMap[displayFeatured.country_code] ?? displayFeatured.country_code}</span>}
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                {displayFeatured.title}
              </h2>
              {displayFeatured.summary && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{displayFeatured.summary}</p>
              )}
              <div className="mt-3 text-xs text-muted-foreground font-mono">{displayFeatured.source}</div>
            </div>
            {displayFeatured.url && displayFeatured.url !== "#" && (
              <a href={displayFeatured.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-muted-foreground hover:text-primary">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayRest.map((n) => (
            <div key={n.id} className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <CategoryBadge category={n.category} />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {n.published_at ? new Date(n.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : ""}
                </span>
              </div>
              <h3 className="font-medium text-sm text-foreground leading-snug mt-2 line-clamp-3">{n.title}</h3>
              {n.summary && <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{n.summary}</p>}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground">{n.source}</span>
                {n.country_code && <span className="text-[10px] font-mono text-muted-foreground">{countryMap[n.country_code] ?? n.country_code}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
