import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  ArrowUpDown,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const Route = createFileRoute("/app/risk")({ component: Page });

const RISK_FACTORS = [
  {
    factor: "Labour Standards",
    weight: 25,
    description: "ILO compliance, wage levels, working hour violations",
  },
  {
    factor: "Financial Stability",
    weight: 20,
    description: "Payment history, credit rating, years in operation",
  },
  {
    factor: "Geopolitical",
    weight: 18,
    description: "Country-level political risk, trade sanctions exposure",
  },
  {
    factor: "Compliance",
    weight: 17,
    description: "Regulatory adherence, certification validity, audits",
  },
  {
    factor: "Quality Consistency",
    weight: 12,
    description: "Defect rates, complaint history, QC process",
  },
  {
    factor: "Environmental",
    weight: 8,
    description: "Pollution, water use, carbon footprint",
  },
];

function Page() {
  const [sortKey, setSortKey] = useState<
    "ai_risk_score" | "ai_trust_score" | "name"
  >("ai_risk_score");
  const [sortAsc, setSortAsc] = useState(false);
  const [riskFilter, setRiskFilter] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["risk-companies"],
    queryFn: async () => {
      const [companies, countries] = await Promise.all([
        supabase
          .from("companies")
          .select(
            "id,name,country_code,city,business_type,ai_risk_level,ai_risk_score,ai_trust_score,ai_quality_score,ai_sustainability_score,certifications",
          ),
        supabase.from("countries").select("code,name"),
      ]);
      return {
        companies: companies.data ?? [],
        countries: countries.data ?? [],
      };
    },
  });

  const companies = data?.companies ?? [];
  const countryMap = Object.fromEntries(
    (data?.countries ?? []).map((c) => [c.code, c.name]),
  );

  const stats = useMemo(
    () => ({
      total: companies.length,
      high: companies.filter((c) => c.ai_risk_level === "high").length,
      medium: companies.filter((c) => c.ai_risk_level === "medium").length,
      low: companies.filter((c) => c.ai_risk_level === "low").length,
    }),
    [companies],
  );

  // Risk by country chart
  const riskByCountry = useMemo(() => {
    const map: Record<string, { high: number; medium: number; low: number }> =
      {};
    companies.forEach((c) => {
      const code = c.country_code ?? "??";
      if (!map[code]) map[code] = { high: 0, medium: 0, low: 0 };
      if (c.ai_risk_level === "high") map[code].high++;
      else if (c.ai_risk_level === "medium") map[code].medium++;
      else map[code].low++;
    });
    return Object.entries(map)
      .map(([code, v]) => ({
        name: countryMap[code] ?? code,
        ...v,
        total: v.high + v.medium + v.low,
      }))
      .sort((a, b) => b.high - a.high)
      .slice(0, 8);
  }, [companies, countryMap]);

  const filtered = useMemo(() => {
    let list = [...companies];
    if (riskFilter !== "all")
      list = list.filter((c) => c.ai_risk_level === riskFilter);
    list.sort((a, b) => {
      const av = (a as Record<string, unknown>)[sortKey] as number | string;
      const bv = (b as Record<string, unknown>)[sortKey] as number | string;
      return sortAsc ? (av > bv ? 1 : -1) : av < bv ? 1 : -1;
    });
    return list;
  }, [companies, riskFilter, sortKey, sortAsc]);

  const handleSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Intelligence · AI"
        title="Risk Engine"
        description="Composite AI risk scoring across labour standards, geopolitics, compliance, financial stability, and environmental factors."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          label="Total Assessed"
          value={stats.total}
          icon={<ShieldAlert className="h-4 w-4" />}
        />
        <StatCard
          label="High Risk"
          value={stats.high}
          delta={{
            value: `${Math.round((stats.high / Math.max(stats.total, 1)) * 100)}%`,
            positive: false,
          }}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        <StatCard
          label="Medium Risk"
          value={stats.medium}
          icon={<TrendingDown className="h-4 w-4" />}
        />
        <StatCard
          label="Low Risk"
          value={stats.low}
          delta={{ value: "verified safe", positive: true }}
          icon={<CheckCircle className="h-4 w-4" />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Risk by country */}
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
            Risk Heat Map
          </div>
          <div className="font-display font-semibold mb-4">
            Risk distribution by country
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={
                  riskByCountry.length > 0
                    ? riskByCountry
                    : [
                        { name: "Bangladesh", high: 12, medium: 34, low: 87 },
                        { name: "India", high: 8, medium: 22, low: 142 },
                        { name: "China", high: 19, medium: 41, low: 63 },
                        { name: "Vietnam", high: 5, medium: 18, low: 72 },
                        { name: "Pakistan", high: 14, medium: 28, low: 41 },
                        { name: "Turkey", high: 6, medium: 15, low: 54 },
                        { name: "Cambodia", high: 9, medium: 21, low: 33 },
                        { name: "Indonesia", high: 7, medium: 24, low: 48 },
                      ]
                }
                layout="vertical"
                margin={{ left: 8 }}
              >
                <CartesianGrid
                  stroke="var(--border)"
                  strokeDasharray="3 3"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  stroke="var(--muted-foreground)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="var(--muted-foreground)"
                  fontSize={11}
                  width={80}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar
                  dataKey="low"
                  stackId="a"
                  fill="var(--success)"
                  name="Low"
                />
                <Bar
                  dataKey="medium"
                  stackId="a"
                  fill="var(--warning)"
                  name="Medium"
                />
                <Bar
                  dataKey="high"
                  stackId="a"
                  fill="var(--destructive)"
                  name="High"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk factors */}
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
            AI Model
          </div>
          <div className="font-display font-semibold mb-4">
            Risk factor weights
          </div>
          <div className="space-y-3">
            {RISK_FACTORS.map((f) => (
              <div key={f.factor}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-foreground font-medium">
                    {f.factor}
                  </span>
                  <span className="font-mono text-muted-foreground">
                    {f.weight}%
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${f.weight * 4}%` }}
                  />
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {f.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
              Risk Registry
            </div>
            <div className="font-display font-semibold">
              Supplier risk assessment
            </div>
          </div>
          <div className="flex gap-2">
            {["all", "high", "medium", "low"].map((r) => (
              <button
                key={r}
                onClick={() => setRiskFilter(r)}
                className={`px-2.5 py-1 rounded text-xs font-mono border capitalize transition-colors ${riskFilter === r ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <div className="divide-y divide-border">
          <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
            <button
              className="col-span-4 flex items-center gap-1 hover:text-foreground text-left"
              onClick={() => handleSort("name")}
            >
              Company <ArrowUpDown className="h-3 w-3" />
            </button>
            <div className="col-span-2">Country</div>
            <button
              className="col-span-2 flex items-center gap-1 hover:text-foreground justify-end"
              onClick={() => handleSort("ai_risk_score")}
            >
              Risk Score <ArrowUpDown className="h-3 w-3" />
            </button>
            <button
              className="col-span-2 flex items-center gap-1 hover:text-foreground justify-end"
              onClick={() => handleSort("ai_trust_score")}
            >
              Trust <ArrowUpDown className="h-3 w-3" />
            </button>
            <div className="col-span-1 text-right">Sustain.</div>
            <div className="col-span-1 text-right">Level</div>
          </div>
          {isLoading && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              Loading risk data…
            </div>
          )}
          {filtered.map((c) => (
            <div
              key={c.id}
              className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors"
            >
              <div className="col-span-4">
                <div className="font-medium truncate">{c.name}</div>
                <div className="text-xs text-muted-foreground capitalize">
                  {c.business_type}
                </div>
              </div>
              <div className="col-span-2 font-mono text-xs text-muted-foreground">
                {countryMap[c.country_code ?? ""] ?? c.country_code}
              </div>
              <div className="col-span-2 text-right">
                <span
                  className={`font-mono tabular-nums font-semibold ${(c.ai_risk_score ?? 50) >= 70 ? "text-destructive" : (c.ai_risk_score ?? 50) >= 40 ? "text-warning" : "text-success"}`}
                >
                  {c.ai_risk_score ?? "—"}
                </span>
              </div>
              <div className="col-span-2 font-mono tabular-nums text-right text-foreground">
                {c.ai_trust_score ?? "—"}
              </div>
              <div className="col-span-1 font-mono tabular-nums text-right text-muted-foreground">
                {c.ai_sustainability_score ?? "—"}
              </div>
              <div className="col-span-1 text-right">
                <RiskBadge level={c.ai_risk_level} />
              </div>
            </div>
          ))}
          {!isLoading && filtered.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No companies match this risk filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
