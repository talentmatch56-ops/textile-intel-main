import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  Building2,
  MapPin,
  Users,
  ArrowUpDown,
  Star,
  Sparkles,
  Clock,
  AlertCircle,
  FileText,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import type { Database } from "@/integrations/supabase/types";
import { MOCK_COMPANIES, type Company } from "@/utils/mock-companies";
import { MOCK_COMPANY_NEWS } from "@/utils/mock-company-news";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/companies")({ component: Page });

type CompanyRow = Database["public"]["Tables"]["companies"]["Row"];
type AppCompany = Partial<CompanyRow> & {
  year_founded?: number | null;
};

type SortKey = "name" | "ai_trust_score" | "ai_risk_score" | "country_code";

function Page() {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortAsc, setSortAsc] = useState(true);

  // Watchlist & Details state
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<AppCompany | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [localCompanies, setLocalCompanies] = useState<AppCompany[]>([]);

  // Load watchlist and local companies on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWatchlist = localStorage.getItem("gmintel_watchlist");
      if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));

      const storedLocalCompanies = localStorage.getItem("gmintel_local_companies");
      if (storedLocalCompanies) setLocalCompanies(JSON.parse(storedLocalCompanies));
    }
  }, []);

  const handleQuickAddCompany = async (companyName: string) => {
    const slug =
      companyName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") +
      `-${Math.random().toString(36).substring(2, 6)}`;

    const newCompany: AppCompany = {
      id: crypto.randomUUID(),
      name: companyName.trim(),
      slug: slug,
      country_code: "US",
      city: "Sourcing City",
      business_type: "manufacturer",
      ai_trust_score: 85,
      ai_risk_level: "low" as const,
      status: "verified" as const,
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from("companies").insert([newCompany] as any);
      if (error) throw error;
      toast.success(`Successfully added "${companyName}" to directory`);
    } catch (e) {
      console.warn("DB insert failed, using local storage fallback:", e);
      const updatedLocal = [newCompany, ...localCompanies];
      setLocalCompanies(updatedLocal);
      localStorage.setItem("gmintel_local_companies", JSON.stringify(updatedLocal));
      toast.success(`Successfully added "${companyName}" (Local Demo Mode)`);
    }
  };

  const toggleWatchlist = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = watchlist.includes(slug)
      ? watchlist.filter((s) => s !== slug)
      : [...watchlist, slug];
    setWatchlist(next);
    localStorage.setItem("gmintel_watchlist", JSON.stringify(next));
    toast.success(
      watchlist.includes(slug)
        ? "Removed from watchlist"
        : "Added to watchlist",
    );
  };

  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const [companies, countries] = await Promise.all([
        supabase.from("companies").select("*").order("name"),
        supabase.from("countries").select("code,name"),
      ]);
      return {
        companies: companies.data ?? [],
        countries: countries.data ?? [],
      };
    },
  });

  const dbCompanies = data?.companies ?? [];
  const companies = useMemo<AppCompany[]>(() => {
    const list: AppCompany[] = [...dbCompanies];
    
    // Add locally saved companies from localStorage
    localCompanies.forEach((local) => {
      if (!list.some((c) => c.id === local.id || c.slug === local.slug)) {
        list.push(local);
      }
    });

    MOCK_COMPANIES.forEach((mock) => {
      if (!list.some((c) => c.slug === mock.slug)) {
        list.push(mock as AppCompany);
      }
    });
    return list;
  }, [dbCompanies, localCompanies]);
  const countries = data?.countries ?? [];
  const countryMap = Object.fromEntries(countries.map((c) => [c.code, c.name]));

  const businessTypes = useMemo(
    () =>
      [
        ...new Set(
          companies.map((c) => c.business_type).filter((t): t is string => !!t),
        ),
      ].sort(),
    [companies],
  );
  const availableCountries = useMemo(
    () =>
      [
        ...new Set(
          companies
            .map((c) => c.country_code)
            .filter((code): code is string => !!code),
        ),
      ].sort(),
    [companies],
  );

  const filtered = useMemo(() => {
    let list = [...companies];
    if (search)
      list = list.filter(
        (c) =>
          (c.name ?? "").toLowerCase().includes(search.toLowerCase()) ||
          (c.city ?? "").toLowerCase().includes(search.toLowerCase()),
      );
    if (countryFilter)
      list = list.filter((c) => c.country_code === countryFilter);
    if (typeFilter)
      list = list.filter((c) =>
        (c.business_type ?? "")
          .toLowerCase()
          .includes(typeFilter.toLowerCase()),
      );
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
  }, [
    companies,
    search,
    countryFilter,
    typeFilter,
    riskFilter,
    sortKey,
    sortAsc,
  ]);

  const stats = useMemo(
    () => ({
      total: companies.length,
      verified: companies.filter((c) => c.status === "verified").length,
      highRisk: companies.filter((c) => c.ai_risk_level === "high").length,
      avgTrust:
        companies.length > 0
          ? Math.round(
              companies.reduce((s, c) => s + (c.ai_trust_score ?? 0), 0) /
                companies.length,
            )
          : 0,
    }),
    [companies],
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  // Get company-specific news (pre-loaded + any simulated/synced updates)
  const activeCompanyNews = useMemo(() => {
    if (!selectedCompany) return [];
    const storedNews =
      typeof window !== "undefined"
        ? localStorage.getItem("gmintel_synced_news")
        : null;
    const syncedNews = storedNews ? JSON.parse(storedNews) : [];
    const allNews = [...syncedNews, ...MOCK_COMPANY_NEWS];
    return allNews
      .filter((n) => n.company_slug === selectedCompany.slug)
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime(),
      );
  }, [selectedCompany]);

  // AI Sourcing & Sentiment summary generator
  const aiSummary = useMemo(() => {
    if (!selectedCompany) return "";
    if (activeCompanyNews.length === 0) {
      return `${selectedCompany.name} is currently showing stable operational activity with no risk alerts. Sourcing metrics are verified and supply reliability index is high.`;
    }
    const positive = activeCompanyNews.filter(
      (n) => n.sentiment === "positive",
    ).length;
    const negative = activeCompanyNews.filter(
      (n) => n.sentiment === "negative",
    ).length;
    const mainUpdate = activeCompanyNews[0];

    let summaryText = `AI analysis highlights a predominantly ${positive >= negative ? "positive" : "cautious"} market trajectory. `;
    summaryText += `Key event: "${mainUpdate.title}" (${mainUpdate.category.replace("_", " ")}). `;
    if (negative > 0) {
      summaryText += `Minor headwinds noted (such as raw material shortages or shipping delays), but capacity and quality structures remain resilient.`;
    } else {
      summaryText += `Strong progress is driven by active circular/sustainability initiatives and expanded manufacturing capabilities.`;
    }
    return summaryText;
  }, [selectedCompany, activeCompanyNews]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Command Center"
        title="Companies"
        description="Browse, search and filter verified textile manufacturers, suppliers and brands across 40+ countries."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          label="Total Companies"
          value={stats.total.toLocaleString()}
          icon={<Building2 className="h-4 w-4" />}
        />
        <StatCard
          label="Verified"
          value={stats.verified.toLocaleString()}
          delta={{ value: "AI-scored", positive: true }}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard
          label="High Risk"
          value={stats.highRisk}
          delta={{
            value: `${Math.round((stats.highRisk / Math.max(stats.total, 1)) * 100)}%`,
            positive: false,
          }}
        />
        <StatCard
          label="Avg Trust Score"
          value={stats.avgTrust}
          hint="out of 100"
        />
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
        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary"
        >
          <option value="">All Countries</option>
          {availableCountries.map((c) => (
            <option key={c} value={c}>
              {countryMap[c] ?? c}
            </option>
          ))}
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary"
        >
          <option value="">All Types</option>
          {businessTypes.map((t) => (
            <option key={t} value={t!}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className="h-9 px-3 rounded-md border border-border bg-card text-sm text-foreground outline-none focus:border-primary"
        >
          <option value="">All Risk Levels</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {(search || countryFilter || typeFilter || riskFilter) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearch("");
              setCountryFilter("");
              setTypeFilter("");
              setRiskFilter("");
            }}
          >
            <Filter className="h-3.5 w-3.5 mr-1" /> Clear
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30 border-b border-border">
          <button
            className="col-span-5 sm:col-span-4 flex items-center gap-1 hover:text-foreground text-left"
            onClick={() => handleSort("name")}
          >
            Company <ArrowUpDown className="h-3 w-3" />
          </button>
          <button
            className="hidden sm:flex col-span-2 items-center gap-1 hover:text-foreground"
            onClick={() => handleSort("country_code")}
          >
            Country <ArrowUpDown className="h-3 w-3" />
          </button>
          <div className="hidden md:block col-span-2">Type</div>
          <div className="hidden lg:block col-span-1">Employees</div>
          <button
            className="col-span-3 sm:col-span-2 text-right flex items-center justify-end gap-1 hover:text-foreground"
            onClick={() => handleSort("ai_trust_score")}
          >
            Trust <ArrowUpDown className="h-3 w-3" />
          </button>
          <div className="col-span-2 sm:col-span-1 text-right">Risk</div>
          <div className="col-span-2 sm:col-span-1 text-center">Follow</div>
        </div>
        <div className="divide-y divide-border">
          {isLoading && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              Loading companies…
            </div>
          )}
          {!isLoading && filtered.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground space-y-3">
              <div>No companies match your filters.</div>
              {search && (
                <div className="pt-2">
                  <Button
                    onClick={() => handleQuickAddCompany(search)}
                    size="sm"
                    className="gap-1.5 font-mono text-xs"
                  >
                    <Building2 className="h-3.5 w-3.5" /> Add "{search}" to directory
                  </Button>
                </div>
              )}
            </div>
          )}
          {filtered.map((c) => {
            const isFollowed = watchlist.includes(c.slug ?? "");
            return (
              <div
                key={c.id}
                onClick={() => {
                  setSelectedCompany(c);
                  setDrawerOpen(true);
                }}
                className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors cursor-pointer"
              >
                <div className="col-span-5 sm:col-span-4 min-w-0">
                  <div className="font-medium text-foreground hover:text-primary transition-colors truncate">
                    {c.name}
                  </div>
                  <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-0.5">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span className="truncate">
                      {c.city ?? "—"}
                      {c.country_code ? `, ${c.country_code}` : ""}
                    </span>
                    {c.year_founded && (
                      <span className="hidden sm:inline">
                        · est. {c.year_founded}
                      </span>
                    )}
                  </div>
                </div>
                <div className="hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate">
                  <div>
                    {countryMap[c.country_code ?? ""] ?? c.country_code ?? "—"}
                  </div>
                </div>
                <div className="hidden md:block col-span-2 text-xs text-muted-foreground truncate">
                  {c.business_type ?? "—"}
                </div>
                <div className="hidden lg:block col-span-1 text-xs text-muted-foreground font-mono">
                  {c.employees_range ?? "—"}
                </div>
                <div className="col-span-3 sm:col-span-2 text-right">
                  <div className="font-mono tabular-nums text-foreground font-semibold">
                    {c.ai_trust_score ?? "—"}
                  </div>
                  {c.ai_quality_score != null && (
                    <div className="text-[10px] text-muted-foreground">
                      Q: {c.ai_quality_score}
                    </div>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1 text-right">
                  <RiskBadge level={c.ai_risk_level} />
                </div>
                <div className="col-span-2 sm:col-span-1 text-center">
                  <button
                    onClick={(e) => toggleWatchlist(c.slug ?? "", e)}
                    className="p-1.5 rounded-full hover:bg-muted/80 text-muted-foreground hover:text-primary transition-all"
                  >
                    <Star
                      className={cn(
                        "h-4 w-4 transition-transform hover:scale-110",
                        isFollowed
                          ? "fill-primary text-primary"
                          : "text-muted-foreground",
                      )}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 py-2 border-t border-border bg-muted/20 text-[10px] font-mono text-muted-foreground">
          Showing {filtered.length} of {companies.length} companies
        </div>
      </div>

      {/* Interactive Company Profile Drawer */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent className="sm:max-w-xl w-full overflow-y-auto bg-card border-l border-border p-6 font-sans">
          {selectedCompany && (
            <div className="space-y-6">
              <SheetHeader className="text-left space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-primary text-lg font-bold">
                      {(selectedCompany.name ?? "").slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <SheetTitle className="font-display text-xl font-bold leading-tight text-foreground">
                        {selectedCompany.name}
                      </SheetTitle>
                      <SheetDescription className="text-xs text-muted-foreground font-mono mt-0.5">
                        {selectedCompany.city
                          ? `${selectedCompany.city}, `
                          : ""}
                        {countryMap[selectedCompany.country_code ?? ""] ??
                          selectedCompany.country_code}
                      </SheetDescription>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => toggleWatchlist(selectedCompany.slug ?? "", e)}
                    className="gap-1.5 shrink-0"
                  >
                    <Star
                      className={cn(
                        "h-3.5 w-3.5",
                        watchlist.includes(selectedCompany.slug ?? "")
                          ? "fill-primary text-primary"
                          : "",
                      )}
                    />
                    {watchlist.includes(selectedCompany.slug ?? "")
                      ? "Watchlisted"
                      : "Watchlist"}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 border-b border-border pb-3">
                  <Badge
                    variant="outline"
                    className="text-[10px] font-mono capitalize"
                  >
                    {selectedCompany.business_type ?? "Supplier"}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    Trust: {selectedCompany.ai_trust_score}/100
                  </Badge>
                  <RiskBadge level={selectedCompany.ai_risk_level} />
                </div>
              </SheetHeader>

              {/* General details */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-muted/30 p-3 rounded-lg border border-border">
                <div>
                  <span className="text-muted-foreground block font-mono text-[9px] uppercase tracking-wide">
                    Capacity
                  </span>
                  <span className="font-medium text-foreground">
                    {selectedCompany.monthly_capacity
                      ? `${selectedCompany.monthly_capacity.toLocaleString()} m/mo`
                      : "—"}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block font-mono text-[9px] uppercase tracking-wide">
                    Min Order Qty
                  </span>
                  <span className="font-medium text-foreground">
                    {selectedCompany.moq
                      ? `${selectedCompany.moq.toLocaleString()} units`
                      : "—"}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block font-mono text-[9px] uppercase tracking-wide">
                    Lead Time
                  </span>
                  <span className="font-medium text-foreground">
                    {selectedCompany.lead_time_days
                      ? `${selectedCompany.lead_time_days} days`
                      : "—"}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block font-mono text-[9px] uppercase tracking-wide">
                    Employees
                  </span>
                  <span className="font-medium text-foreground">
                    {selectedCompany.employees_range ?? "—"}
                  </span>
                </div>
              </div>

              {/* AI summary */}
              <div className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/[0.06] to-transparent p-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 font-bold">
                  <Sparkles className="h-3.5 w-3.5" /> AI Sourcing Insight
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {aiSummary}
                </p>
              </div>

              {/* Company specific announcement intelligence feed */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h4 className="font-display font-semibold text-sm text-foreground">
                    Company Intelligence Feed
                  </h4>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {activeCompanyNews.length} announcements
                  </span>
                </div>

                <div className="space-y-3">
                  {activeCompanyNews.length === 0 ? (
                    <div className="text-center py-6 text-xs text-muted-foreground border border-dashed border-border rounded-lg bg-card/30">
                      <AlertCircle className="h-5 w-5 text-muted-foreground/60 mx-auto mb-1.5" />
                      No recent updates reported for this supplier.
                    </div>
                  ) : (
                    activeCompanyNews.map((news) => (
                      <div
                        key={news.id}
                        className="p-3 border border-border rounded-lg bg-card/40 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1 rounded bg-muted/60 px-1 py-0.5 text-[9px] font-mono uppercase tracking-wide text-muted-foreground">
                            {news.category.replace("_", " ")}
                          </span>
                          <span className="text-[9px] font-mono text-muted-foreground/80">
                            {new Date(news.published_at).toLocaleDateString(
                              "en-US",
                              {
                                timeZone: "UTC",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <h5 className="text-xs font-semibold text-foreground leading-snug mb-1">
                          {news.title}
                        </h5>
                        <p className="text-[11px] text-muted-foreground leading-relaxed mb-2.5">
                          {news.summary}
                        </p>

                        <div className="flex items-center justify-between pt-1.5 border-t border-border/50 text-[10px] font-mono">
                          <span className="text-muted-foreground/75">
                            Source: {news.source}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-muted-foreground/65">
                              Sentiment:
                            </span>
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-[9px] px-1 py-0 border-0 h-4 uppercase",
                                news.sentiment === "positive" &&
                                  "bg-success/15 text-success",
                                news.sentiment === "negative" &&
                                  "bg-destructive/15 text-destructive",
                                news.sentiment === "neutral" &&
                                  "bg-muted/80 text-muted-foreground",
                              )}
                            >
                              {news.sentiment}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
