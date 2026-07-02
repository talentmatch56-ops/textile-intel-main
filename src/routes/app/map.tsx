import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Map, Globe2, Building2, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";

export const Route = createFileRoute("/app/map")({ component: Page });

const WORLD_COUNTRIES = [
  { code: "CN", name: "China", region: "Asia", lat: 35, lng: 105 },
  { code: "IN", name: "India", region: "Asia", lat: 20, lng: 77 },
  { code: "BD", name: "Bangladesh", region: "Asia", lat: 24, lng: 90 },
  { code: "PK", name: "Pakistan", region: "Asia", lat: 30, lng: 70 },
  { code: "VN", name: "Vietnam", region: "Asia", lat: 16, lng: 108 },
  { code: "TR", name: "Turkey", region: "Europe", lat: 39, lng: 35 },
  { code: "KH", name: "Cambodia", region: "Asia", lat: 13, lng: 105 },
  { code: "ID", name: "Indonesia", region: "Asia", lat: -5, lng: 120 },
  { code: "MM", name: "Myanmar", region: "Asia", lat: 22, lng: 98 },
  { code: "US", name: "USA", region: "Americas", lat: 38, lng: -97 },
  { code: "DE", name: "Germany", region: "Europe", lat: 51, lng: 10 },
  { code: "IT", name: "Italy", region: "Europe", lat: 42, lng: 12 },
  { code: "MA", name: "Morocco", region: "Africa", lat: 32, lng: -6 },
  { code: "ET", name: "Ethiopia", region: "Africa", lat: 9, lng: 39 },
  { code: "MX", name: "Mexico", region: "Americas", lat: 23, lng: -102 },
  { code: "BR", name: "Brazil", region: "Americas", lat: -10, lng: -55 },
  { code: "PT", name: "Portugal", region: "Europe", lat: 39, lng: -8 },
  { code: "KR", name: "South Korea", region: "Asia", lat: 37, lng: 128 },
  { code: "LK", name: "Sri Lanka", region: "Asia", lat: 7, lng: 81 },
  { code: "TH", name: "Thailand", region: "Asia", lat: 15, lng: 101 },
];

const MOCK_COUNTS: Record<string, number> = {
  CN: 142, IN: 118, BD: 87, PK: 64, VN: 72, TR: 54, KH: 33, ID: 48,
  MM: 28, US: 22, DE: 18, IT: 24, MA: 19, ET: 12, MX: 16, BR: 21, PT: 14, KR: 19, LK: 31, TH: 38,
};

function getSize(count: number, max: number): number {
  return Math.max(32, Math.round((count / max) * 80) + 32);
}

function getColor(count: number, max: number): string {
  const pct = count / max;
  if (pct >= 0.7) return "bg-primary text-primary-foreground";
  if (pct >= 0.4) return "bg-primary/60 text-primary-foreground";
  if (pct >= 0.2) return "bg-primary/35 text-foreground";
  return "bg-primary/15 text-muted-foreground";
}

const REGION_ORDER = ["Asia", "Europe", "Africa", "Americas"];

function Page() {
  const { data } = useQuery({
    queryKey: ["map-data"],
    queryFn: async () => {
      const res = await supabase.from("companies").select("country_code");
      return res.data ?? [];
    },
  });

  const counts = useMemo(() => {
    if (!data || data.length === 0) return MOCK_COUNTS;
    const map: Record<string, number> = {};
    data.forEach((c) => { if (c.country_code) map[c.country_code] = (map[c.country_code] ?? 0) + 1; });
    return Object.keys(map).length > 0 ? map : MOCK_COUNTS;
  }, [data]);

  const maxCount = Math.max(...Object.values(counts));
  const totalCompanies = Object.values(counts).reduce((a, b) => a + b, 0);
  const coveredCountries = Object.keys(counts).length;

  const topCountries = [...WORLD_COUNTRIES]
    .map((c) => ({ ...c, count: counts[c.code] ?? 0 }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const byRegion = REGION_ORDER.map((region) => ({
    region,
    countries: WORLD_COUNTRIES.filter((c) => c.region === region && (counts[c.code] ?? 0) > 0).map((c) => ({ ...c, count: counts[c.code] ?? 0 })).sort((a, b) => b.count - a.count),
  })).filter((r) => r.countries.length > 0);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workflows"
        title="World Map"
        description="Geographic distribution of textile manufacturers, suppliers and brands across 40+ countries."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Companies Mapped" value={totalCompanies.toLocaleString()} icon={<Building2 className="h-4 w-4" />} />
        <StatCard label="Countries" value={coveredCountries} delta={{ value: "& growing", positive: true }} icon={<Globe2 className="h-4 w-4" />} />
        <StatCard label="Top Market" value={topCountries[0]?.name ?? "China"} hint={`${topCountries[0]?.count ?? 142} companies`} />
        <StatCard label="Fastest Growing" value="Bangladesh" delta={{ value: "+18% QoQ", positive: true }} icon={<TrendingUp className="h-4 w-4" />} />
      </div>

      {/* Bubble map by region */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Geographic Distribution</div>
          <div className="font-display font-semibold">Company density by country</div>
        </div>
        <div className="p-6 space-y-8">
          {byRegion.map(({ region, countries }) => (
            <div key={region}>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="h-px flex-1 bg-border" />
                {region}
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {countries.map((c) => {
                  const size = getSize(c.count, maxCount);
                  const colorCls = getColor(c.count, maxCount);
                  return (
                    <div key={c.code} className="flex flex-col items-center gap-1.5 group cursor-pointer">
                      <div
                        className={`rounded-full flex flex-col items-center justify-center transition-transform group-hover:scale-110 ${colorCls}`}
                        style={{ width: size, height: size }}
                      >
                        <div className="font-mono font-bold leading-none" style={{ fontSize: Math.max(9, size / 5) }}>
                          {c.count}
                        </div>
                        <div className="font-mono leading-none opacity-70" style={{ fontSize: Math.max(8, size / 6) }}>
                          {c.code}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground text-center max-w-16 leading-tight">
                        {c.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 border-t border-border bg-muted/20 flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
          <span>Bubble size = company count</span>
          <span>·</span>
          <div className="flex items-center gap-3">
            {[{ cls: "bg-primary/15", label: "Low" }, { cls: "bg-primary/35", label: "Moderate" }, { cls: "bg-primary/60", label: "High" }, { cls: "bg-primary", label: "Very High" }].map((l) => (
              <span key={l.label} className="flex items-center gap-1"><span className={`h-2.5 w-2.5 rounded-full ${l.cls}`} />{l.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Top countries table */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Top 10 Markets</div>
            <div className="font-display font-semibold">Companies by country</div>
          </div>
          <div className="divide-y divide-border">
            {topCountries.map((c, i) => (
              <div key={c.code} className="flex items-center gap-4 px-4 py-3 hover:bg-muted/40 transition-colors">
                <span className="text-[10px] font-mono text-muted-foreground w-5 text-right">{i + 1}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{c.region}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono tabular-nums font-semibold text-foreground">{c.count.toLocaleString()}</div>
                  <div className="text-[10px] text-muted-foreground">companies</div>
                </div>
                <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${(c.count / maxCount) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Region breakdown */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Regional Breakdown</div>
            <div className="font-display font-semibold">Companies by region</div>
          </div>
          <div className="p-4 space-y-4">
            {byRegion.map(({ region, countries }) => {
              const total = countries.reduce((s, c) => s + c.count, 0);
              const pct = Math.round((total / totalCompanies) * 100);
              return (
                <div key={region}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{region}</span>
                    <span className="font-mono tabular-nums text-muted-foreground">{total.toLocaleString()} ({pct}%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-mono mt-1">{countries.length} countries</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
