import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { GitCompare, X, Plus, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/compare")({ component: Page });

const COMPARISON_FIELDS = [
  { key: "country_code", label: "Country" },
  { key: "city", label: "City" },
  { key: "business_type", label: "Business Type" },
  { key: "employees_range", label: "Employees" },
  { key: "year_founded", label: "Founded" },
  { key: "monthly_capacity", label: "Monthly Capacity" },
  { key: "moq", label: "Min. Order Qty" },
  { key: "lead_time_days", label: "Lead Time (days)" },
  { key: "ai_trust_score", label: "Trust Score" },
  { key: "ai_quality_score", label: "Quality Score" },
  { key: "ai_risk_score", label: "Risk Score" },
  { key: "ai_sustainability_score", label: "Sustainability" },
  { key: "ai_risk_level", label: "Risk Level" },
  { key: "certifications", label: "Certifications" },
  { key: "products", label: "Products" },
  { key: "export_countries", label: "Export Markets" },
];

function ScoreBar({
  value,
  max = 100,
}: {
  value?: number | null;
  max?: number;
}) {
  if (value == null)
    return <span className="text-muted-foreground text-sm">—</span>;
  const pct = Math.min(100, (value / max) * 100);
  const color =
    pct >= 70 ? "bg-success" : pct >= 40 ? "bg-warning" : "bg-destructive";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-mono text-sm tabular-nums text-foreground w-8 text-right">
        {value}
      </span>
    </div>
  );
}

function renderValue(key: string, value: unknown) {
  if (value == null)
    return <span className="text-muted-foreground text-sm">—</span>;
  if (key === "ai_risk_level") return <RiskBadge level={value as string} />;
  if (
    [
      "ai_trust_score",
      "ai_quality_score",
      "ai_risk_score",
      "ai_sustainability_score",
    ].includes(key)
  )
    return <ScoreBar value={value as number} />;
  if (Array.isArray(value)) {
    if (value.length === 0)
      return <span className="text-muted-foreground text-sm">None listed</span>;
    return (
      <div className="flex flex-wrap gap-1">
        {value.slice(0, 4).map((v: string, i: number) => (
          <span
            key={i}
            className="text-[10px] px-1.5 py-0.5 rounded bg-muted border border-border font-mono"
          >
            {v}
          </span>
        ))}
        {value.length > 4 && (
          <span className="text-[10px] text-muted-foreground font-mono">
            +{value.length - 4}
          </span>
        )}
      </div>
    );
  }
  if (key === "moq")
    return (
      <span className="text-sm font-mono tabular-nums">
        {(value as number).toLocaleString()} units
      </span>
    );
  if (key === "monthly_capacity")
    return (
      <span className="text-sm font-mono tabular-nums">
        {(value as number).toLocaleString()} units
      </span>
    );
  if (key === "lead_time_days")
    return <span className="text-sm font-mono">{value as string} days</span>;
  return (
    <span className="text-sm text-foreground capitalize">{String(value)}</span>
  );
}

function Page() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const { data } = useQuery({
    queryKey: ["compare-companies"],
    queryFn: async () => {
      const res = await supabase
        .from("companies")
        .select(
          "id,name,country_code,city,business_type,employees_range,year_founded,monthly_capacity,moq,lead_time_days,products,certifications,export_countries,ai_trust_score,ai_quality_score,ai_risk_score,ai_sustainability_score,ai_risk_level",
        );
      return res.data ?? [];
    },
  });

  const companies = data ?? [];
  const selected = useMemo(
    () =>
      selectedIds
        .map((id) => companies.find((c) => c.id === id))
        .filter(Boolean),
    [selectedIds, companies],
  );
  const searchResults = useMemo(
    () =>
      companies
        .filter(
          (c) =>
            !selectedIds.includes(c.id) &&
            c.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 8),
    [companies, selectedIds, searchQuery],
  );

  const addCompany = (id: string) => {
    if (selectedIds.length < 3) {
      setSelectedIds((p) => [...p, id]);
      setShowPicker(false);
      setSearchQuery("");
    }
  };
  const removeCompany = (id: string) =>
    setSelectedIds((p) => p.filter((x) => x !== id));

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Intelligence"
        title="Company Comparison"
        description="Compare up to 3 textile companies side by side across trust scores, capacity, certifications and AI risk ratings."
      />

      {/* Company selector */}
      <div className="flex gap-4 flex-wrap">
        {selected.map(
          (c) =>
            c && (
              <div
                key={c.id}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/40 bg-primary/5"
              >
                <div>
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {c.country_code} · {c.business_type}
                  </div>
                </div>
                <button
                  onClick={() => removeCompany(c.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ),
        )}
        {selectedIds.length < 3 && (
          <div className="relative">
            <button
              onClick={() => setShowPicker(!showPicker)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors text-sm"
            >
              <Plus className="h-4 w-4" /> Add company
            </button>
            {showPicker && (
              <div className="absolute top-full left-0 mt-1 w-72 rounded-lg border border-border bg-popover shadow-xl z-10">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search companies…"
                  className="w-full h-9 px-3 rounded-t-lg border-b border-border bg-transparent text-sm outline-none"
                  autoFocus
                />
                <div className="max-h-56 overflow-y-auto">
                  {searchResults.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => addCompany(c.id)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted/60 transition-colors border-b border-border/50 last:border-0"
                    >
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {c.country_code} · {c.business_type}
                      </div>
                    </button>
                  ))}
                  {searchResults.length === 0 && (
                    <div className="p-3 text-sm text-muted-foreground">
                      No companies found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {selected.length === 0 && (
        <div className="rounded-lg border border-border bg-card/50 p-16 text-center">
          <GitCompare className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
          <div className="font-display font-semibold text-lg">
            Select companies to compare
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Add up to 3 companies using the button above to see a side-by-side
            comparison.
          </div>
        </div>
      )}

      {selected.length >= 2 && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          {/* Header row */}
          <div
            className="grid border-b border-border"
            style={{
              gridTemplateColumns: `200px repeat(${selected.length}, 1fr)`,
            }}
          >
            <div className="p-4 bg-muted/30 border-r border-border" />
            {selected.map(
              (c) =>
                c && (
                  <div
                    key={c.id}
                    className="p-4 border-r border-border last:border-0 bg-card"
                  >
                    <div className="font-display font-semibold text-foreground">
                      {c.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      {c.country_code} · {c.business_type}
                    </div>
                  </div>
                ),
            )}
          </div>

          {/* Comparison rows */}
          {COMPARISON_FIELDS.map((field, idx) => (
            <div
              key={field.key}
              className={`grid border-b border-border last:border-0 ${idx % 2 === 0 ? "" : "bg-muted/20"}`}
              style={{
                gridTemplateColumns: `200px repeat(${selected.length}, 1fr)`,
              }}
            >
              <div className="p-3 px-4 border-r border-border flex items-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {field.label}
                </span>
              </div>
              {selected.map(
                (c) =>
                  c && (
                    <div
                      key={c.id}
                      className="p-3 px-4 border-r border-border last:border-0 flex items-center"
                    >
                      {renderValue(
                        field.key,
                        (c as Record<string, unknown>)[field.key],
                      )}
                    </div>
                  ),
              )}
            </div>
          ))}
        </div>
      )}

      {selected.length === 1 && (
        <div className="p-6 rounded-lg border border-dashed border-border text-center text-sm text-muted-foreground">
          Add at least one more company to start comparing. You can compare up
          to 3 at a time.
        </div>
      )}
    </div>
  );
}
