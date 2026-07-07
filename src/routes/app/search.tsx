import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Sparkles,
  Building2,
  Globe2,
  ShieldCheck,
  X,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";
import { MOCK_COMPANIES } from "@/utils/mock-companies";

export const Route = createFileRoute("/app/search")({ component: Page });

const CERT_OPTIONS = [
  "GOTS",
  "OEKO-TEX",
  "ISO 9001",
  "SA8000",
  "BSCI",
  "Fair Trade",
];
const TYPE_OPTIONS = [
  "manufacturer",
  "supplier",
  "exporter",
  "brand",
  "trader",
];

function Page() {
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [countryFilter, setCountryFilter] = useState("");
  const [moqMax, setMoqMax] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [localCompanies, setLocalCompanies] = useState<any[]>([]);

  // Load local companies from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("gmintel_local_companies");
      if (stored) {
        setLocalCompanies(JSON.parse(stored));
      }
    }
  }, []);

  const { data } = useQuery({
    queryKey: ["search-companies"],
    queryFn: async () => {
      const [companies, countries] = await Promise.all([
        supabase
          .from("companies")
          .select(
            "id,slug,name,country_code,city,business_type,ai_risk_level,ai_trust_score,certifications,moq,lead_time_days,employees_range,products",
          ),
        supabase.from("countries").select("code,name"),
      ]);
      return {
        companies: companies.data ?? [],
        countries: countries.data ?? [],
      };
    },
  });

  const dbCompanies = data?.companies ?? [];
  const companies = useMemo(() => {
    const list = [...dbCompanies];
    
    // Add local companies
    localCompanies.forEach((local) => {
      if (!list.some((c) => c.id === local.id)) {
        list.push(local);
      }
    });

    // Add mock companies with generated certifications/products for searching
    MOCK_COMPANIES.forEach((mock, idx) => {
      if (!list.some((c) => c.slug === mock.slug)) {
        const mockCerts = idx % 2 === 0 ? ["GOTS", "ISO 9001"] : ["OEKO-TEX", "SA8000", "BSCI"];
        if (idx % 3 === 0) mockCerts.push("Fair Trade");
        
        const mockProducts = idx % 2 === 0 
          ? ["cotton fabric", "yarn", "knitted fabric"] 
          : ["denim", "jeans", "cotton greige", "organic fibers"];

        list.push({
          ...mock,
          certifications: (mock as any).certifications ?? mockCerts,
          products: (mock as any).products ?? mockProducts,
          moq: (mock as any).moq ?? (100 + (idx * 150) % 900),
          lead_time_days: (mock as any).lead_time_days ?? (20 + (idx * 4) % 40),
        } as any);
      }
    });

    return list;
  }, [dbCompanies, localCompanies]);

  const countries = data?.countries ?? [];
  const countryMap = Object.fromEntries(countries.map((c) => [c.code, c.name]));
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

  const results = useMemo(() => {
    if (!hasSearched) return [];
    let list = [...companies];
    if (activeQuery)
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(activeQuery.toLowerCase()) ||
          (c.city ?? "").toLowerCase().includes(activeQuery.toLowerCase()) ||
          (c.business_type ?? "")
            .toLowerCase()
            .includes(activeQuery.toLowerCase()) ||
          (c.products ?? []).some((p: string) =>
            p.toLowerCase().includes(activeQuery.toLowerCase()),
          ),
      );
    if (countryFilter)
      list = list.filter((c) => c.country_code === countryFilter);
    if (selectedTypes.length > 0)
      list = list.filter((c) =>
        selectedTypes.some((t) =>
          (c.business_type ?? "").toLowerCase().includes(t),
        ),
      );
    if (selectedCerts.length > 0)
      list = list.filter((c) =>
        selectedCerts.every((cert) => (c.certifications ?? []).includes(cert)),
      );
    if (moqMax) list = list.filter((c) => (c.moq ?? 0) <= Number(moqMax));
    return list.sort(
      (a, b) => (b.ai_trust_score ?? 0) - (a.ai_trust_score ?? 0),
    );
  }, [
    companies,
    activeQuery,
    countryFilter,
    selectedTypes,
    selectedCerts,
    moqMax,
    hasSearched,
  ]);

  const handleSearch = () => {
    setActiveQuery(query);
    setHasSearched(true);
  };

  const toggleCert = (cert: string) =>
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert],
    );
  const toggleType = (type: string) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );

  const hasFilters =
    selectedCerts.length > 0 ||
    selectedTypes.length > 0 ||
    countryFilter ||
    moqMax;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Command Center · AI"
        title="Smart Search"
        description="Search across 30,000+ verified textile manufacturers, suppliers and brands using AI-powered matching."
      />

      {/* Search bar */}
      <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/[0.04] to-transparent p-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="e.g. cotton manufacturer India GOTS certified, MOQ under 500…"
              className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary placeholder:text-muted-foreground"
            />
          </div>
          <Button size="lg" onClick={handleSearch} className="shrink-0">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
        </div>

        {/* Filter chips */}
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20">
              Type
            </span>
            {TYPE_OPTIONS.map((t) => (
              <button
                key={t}
                onClick={() => toggleType(t)}
                className={`px-2.5 py-1 rounded-full text-xs border transition-colors ${selectedTypes.includes(t) ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/40"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20">
              Certs
            </span>
            {CERT_OPTIONS.map((c) => (
              <button
                key={c}
                onClick={() => toggleCert(c)}
                className={`px-2.5 py-1 rounded-full text-xs border transition-colors ${selectedCerts.includes(c) ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/40"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20">
              Filters
            </span>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="h-8 px-2 rounded border border-border bg-card text-xs text-foreground outline-none"
            >
              <option value="">Any Country</option>
              {availableCountries.map((c) => (
                <option key={c} value={c}>
                  {countryMap[c] ?? c}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">MOQ ≤</span>
              <input
                value={moqMax}
                onChange={(e) => setMoqMax(e.target.value)}
                placeholder="e.g. 500"
                className="h-8 w-24 px-2 rounded border border-border bg-card text-xs outline-none focus:border-primary"
              />
              <span className="text-xs text-muted-foreground">units</span>
            </div>
            {hasFilters && (
              <button
                onClick={() => {
                  setSelectedCerts([]);
                  setSelectedTypes([]);
                  setCountryFilter("");
                  setMoqMax("");
                }}
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <X className="h-3 w-3" /> Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {hasSearched && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground">
              <span className="font-mono text-foreground font-semibold">
                {results.length}
              </span>{" "}
              results
              {activeQuery && (
                <span>
                  {" "}
                  for "<span className="text-primary">{activeQuery}</span>"
                </span>
              )}{" "}
              · ranked by AI trust score
            </div>
          </div>

          {results.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-12 text-center">
              <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40" />
              <div className="text-sm font-medium">No results found</div>
              <div className="text-xs text-muted-foreground mt-1">
                Try adjusting your search or removing filters
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((c, i) => (
                <div
                  key={c.id}
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {i < 3 && (
                          <span className="text-[10px] font-mono bg-primary/15 text-primary px-1.5 py-0.5 rounded">
                            #{i + 1}
                          </span>
                        )}
                        <div className="font-semibold text-foreground truncate">
                          {c.name}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                        <Globe2 className="h-3 w-3" />
                        {c.city ? `${c.city}, ` : ""}
                        {countryMap[c.country_code ?? ""] ?? c.country_code}
                      </div>
                    </div>
                    <RiskBadge level={c.ai_risk_level} />
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="text-lg font-bold font-mono tabular-nums text-foreground">
                        {c.ai_trust_score ?? "—"}
                      </div>
                      <div className="text-[9px] font-mono uppercase text-muted-foreground">
                        Trust
                      </div>
                    </div>
                    <div className="text-center border-x border-border">
                      <div className="text-lg font-bold font-mono tabular-nums text-foreground">
                        {c.moq ?? "—"}
                      </div>
                      <div className="text-[9px] font-mono uppercase text-muted-foreground">
                        MOQ
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold font-mono tabular-nums text-foreground">
                        {c.lead_time_days ?? "—"}
                      </div>
                      <div className="text-[9px] font-mono uppercase text-muted-foreground">
                        Days LT
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-muted-foreground capitalize">
                      {c.business_type ?? "—"}
                    </div>
                    <div className="flex gap-1">
                      {(c.certifications ?? [])
                        .slice(0, 2)
                        .map((cert: string) => (
                          <span
                            key={cert}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-success/10 text-success border border-success/20"
                          >
                            <ShieldCheck className="h-2.5 w-2.5 inline mr-0.5" />
                            {cert}
                          </span>
                        ))}
                    </div>
                  </div>

                  {c.employees_range && (
                    <div className="mt-2 text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {c.employees_range} employees
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!hasSearched && (
        <div className="rounded-lg border border-border bg-card/50 p-12 text-center">
          <Search className="h-12 w-12 text-primary/40 mx-auto mb-4" />
          <div className="font-display font-semibold text-lg">
            Search 30,000+ suppliers
          </div>
          <div className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Use natural language, product types, certifications, MOQ ranges, or
            countries to find the right textile partners.
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {[
              "cotton manufacturers India",
              "denim suppliers Turkey GOTS",
              "synthetic fabric China MOQ 200",
            ].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuery(q);
                  setActiveQuery(q);
                  setHasSearched(true);
                }}
                className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
