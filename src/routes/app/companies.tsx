import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Search, Filter, Building2, MapPin, Users, ArrowUpDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/companies")({ component: Page });

type SortKey = "name" | "ai_trust_score" | "ai_risk_score" | "country_code";

function Page() {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("ai_trust_score");
  const [sortAsc, setSortAsc] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["companies-all"],
    queryFn: async () => {
      const [companies, countries] = await Promise.all([
        supabase.from("companies").select("id,name,country_code,city,business_type,ai_risk_level,ai_trust_score,ai_quality_score,employees_range,certifications,moq,status,year_founded"),
        supabase.from("countries").select("code,name"),
      ]);
      return { companies: companies.data ?? [], countries: countries.data ?? [] };
    },
  });

  const companies = data?.companies ?? [];
  const countries = data?.countries ?? [];
  const countryMap = Object.fromEntries(countries.map((c) => [c.code, c.name]));

  const businessTypes = useMemo(() => [...new Set(companies.map((c) => c.business_type).filter(Boolean))].sort(), [companies]);
  const availableCountries = useMemo(() => [...new Set(companies.map((c) => c.country_code).filter(Boolean))].sort(), [companies]);

  const filtered = useMemo(() => {
    let list = [...companies];
    if (search) list = list.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || (c.city ?? "").toLowerCase().includes(search.toLowerCase()));
    if (countryFilter) list = list.filter((c) => c.country_code === countryFilter);
    if (typeFilter) list = list.filter((c) => (c.business_type ?? "").toLowerCase().includes(typeFilter.toLowerCase()));
    if (riskFilter) list = list.filter((c) => c.ai_risk_level === riskFilter);
    list.sort((a, b) => {
      const av = (a as Record<string, unknown>)[sortKey];
      const bv = (b as Record<string, unknown>)[sortKey];
      const aVal = av == null ? "" : av;
      const bVal = bv == null ? "" : bv;
      if (aVal < bVal) return sortAsc ? -1 : 1;
      if (aVal > bVal) return sortAsc ? 1 : -1;
      return 0;
    });
    return list;
  }, [companies, search, countryFilter, typeFilter, riskFilter, sortKey, sortAsc]);

  const stats = useMemo(() => ({
    total: companies.length,
    verified: companies.filter((c) => c.status === "verified").length,
    highRisk: companies.filter((c) => c.ai_risk_level === "high").length,
    avgTrust: companies.length > 0 ? Math.round(companies.reduce((s, c) => s + (c.ai_trust_score ?? 0), 0) / companies.length) : 0,
  }), [companies]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Command Center"
        title="Companies"
        description="Browse, search and filter verified textile manufacturers, suppliers and brands across 40+ countries."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total Companies" value={stats.total.toLocaleString()} icon={<Building2 className="h-4 w-4" />} />
        <StatCard label="Verified" value={stats.verified.toLocaleString()} delta={{ value: "AI-scored", positive: true }} icon={<Users className="h-4 w-4" />} />
        <StatCard label="High Risk" value={stats.highRisk} delta={{ value: `${Math.round(stats.highRisk / Math.max(stats.total, 1) * 100)}%`, positive: false }} />
        <StatCard label="Avg Trust Score" value={stats.avgTrust} hint="out of 100" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies, cities…"
            className="w-full h-9 pl-9 pr-3 rounded-md border border-border bg-card text-sm outline-none focus:border-primary"
          />
        </div>
        <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}
          className="h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary">
          <option value="">All Countries</option>
          {availableCountries.map((c) => <option key={c} value={c}>{countryMap[c] ?? c}</option>)}
        </select>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
          className="h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary">
          <option value="">All Types</option>
          {businessTypes.map((t) => <option key={t} value={t!}>{t}</option>)}
        </select>
        <select value={riskFilter} onChange={(e) => setRiskFilter(e.target.value)}
          className="h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary">
          <option value="">All Risk Levels</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {(search || countryFilter || typeFilter || riskFilter) && (
          <Button variant="ghost" size="sm" onClick={() => { setSearch(""); setCountryFilter(""); setTypeFilter(""); setRiskFilter(""); }}>
            <Filter className="h-3.5 w-3.5 mr-1" /> Clear
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30 border-b border-border">
          <button className="col-span-6 sm:col-span-4 flex items-center gap-1 hover:text-foreground text-left" onClick={() => handleSort("name")}>
            Company <ArrowUpDown className="h-3 w-3" />
          </button>
          <button className="hidden sm:flex col-span-2 items-center gap-1 hover:text-foreground" onClick={() => handleSort("country_code")}>
            Country <ArrowUpDown className="h-3 w-3" />
          </button>
          <div className="hidden md:block col-span-2">Type</div>
          <div className="hidden lg:block col-span-1">Employees</div>
          <button className="col-span-3 sm:col-span-2 text-right flex items-center justify-end gap-1 hover:text-foreground" onClick={() => handleSort("ai_trust_score")}>
            Trust <ArrowUpDown className="h-3 w-3" />
          </button>
          <div className="col-span-3 sm:col-span-1 text-right">Risk</div>
        </div>
        <div className="divide-y divide-border">
          {isLoading && (
            <div className="p-8 text-center text-sm text-muted-foreground">Loading companies…</div>
          )}
          {!isLoading && filtered.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">No companies match your filters.</div>
          )}
          {filtered.map((c) => (
            <div key={c.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
              <div className="col-span-6 sm:col-span-4 min-w-0">
                <div className="font-medium text-foreground truncate">{c.name}</div>
                <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-0.5">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span className="truncate">{c.city ?? "—"}{c.country_code ? `, ${c.country_code}` : ""}</span>
                  {c.year_founded && <span className="hidden sm:inline">· est. {c.year_founded}</span>}
                </div>
              </div>
              <div className="hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate">
                <div>{countryMap[c.country_code ?? ""] ?? c.country_code ?? "—"}</div>
              </div>
              <div className="hidden md:block col-span-2 text-xs text-muted-foreground truncate">{c.business_type ?? "—"}</div>
              <div className="hidden lg:block col-span-1 text-xs text-muted-foreground font-mono">{c.employees_range ?? "—"}</div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <div className="font-mono tabular-nums text-foreground font-semibold">{c.ai_trust_score ?? "—"}</div>
                {c.ai_quality_score != null && (
                  <div className="text-[10px] text-muted-foreground">Q: {c.ai_quality_score}</div>
                )}
              </div>
              <div className="col-span-3 sm:col-span-1 text-right"><RiskBadge level={c.ai_risk_level} /></div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 border-t border-border bg-muted/20 text-[10px] font-mono text-muted-foreground">
          Showing {filtered.length} of {companies.length} companies
        </div>
      </div>
    </div>
  );
}
