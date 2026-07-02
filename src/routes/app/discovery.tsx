import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { Radar, CheckCircle2, Clock, AlertCircle, Sparkles, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/app/discovery")({ component: Page });

const MOCK_PIPELINE = [
  { id: "d1", name: "Shahi Exports Pvt Ltd", country_code: "IN", city: "Bangalore", business_type: "manufacturer", status: "pending_review", ai_trust_score: 82, ai_risk_level: "low", discovered_at: new Date(Date.now() - 3600000 * 2), source: "LinkedIn + Trade Portal" },
  { id: "d2", name: "Ha Tien Weaving Co.", country_code: "VN", city: "Ho Chi Minh City", business_type: "manufacturer", status: "pending_review", ai_trust_score: 74, ai_risk_level: "medium", discovered_at: new Date(Date.now() - 3600000 * 5), source: "Web Crawl" },
  { id: "d3", name: "Karachi Textile Mills", country_code: "PK", city: "Karachi", business_type: "supplier", status: "pending_review", ai_trust_score: 68, ai_risk_level: "medium", discovered_at: new Date(Date.now() - 86400000), source: "Trade Directory" },
  { id: "d4", name: "EcoWear Bangladesh Ltd", country_code: "BD", city: "Dhaka", business_type: "exporter", status: "verified", ai_trust_score: 91, ai_risk_level: "low", discovered_at: new Date(Date.now() - 86400000 * 2), source: "Govt Export DB" },
  { id: "d5", name: "Izmir Denim Factory", country_code: "TR", city: "Izmir", business_type: "manufacturer", status: "verified", ai_trust_score: 87, ai_risk_level: "low", discovered_at: new Date(Date.now() - 86400000 * 2), source: "Chamber of Commerce" },
  { id: "d6", name: "Guangzhou Fast Fabrics", country_code: "CN", city: "Guangzhou", business_type: "manufacturer", status: "pending_review", ai_trust_score: 61, ai_risk_level: "high", discovered_at: new Date(Date.now() - 86400000 * 3), source: "Alibaba Scrape" },
  { id: "d7", name: "Marocain Textiles SA", country_code: "MA", city: "Casablanca", business_type: "manufacturer", status: "pending_review", ai_trust_score: 72, ai_risk_level: "low", discovered_at: new Date(Date.now() - 86400000 * 4), source: "B2B Portal" },
  { id: "d8", name: "Camtex Apparel Cambodia", country_code: "KH", city: "Phnom Penh", business_type: "manufacturer", status: "verified", ai_trust_score: 79, ai_risk_level: "medium", discovered_at: new Date(Date.now() - 86400000 * 5), source: "Trade Fair Data" },
];

const WEEKLY_DISCOVERY = [
  { week: "W1", discovered: 312, verified: 87 },
  { week: "W2", discovered: 428, verified: 119 },
  { week: "W3", discovered: 381, verified: 104 },
  { week: "W4", discovered: 502, verified: 143 },
  { week: "W5", discovered: 467, verified: 128 },
  { week: "W6", discovered: 594, verified: 168 },
  { week: "W7", discovered: 611, verified: 182 },
  { week: "W8", discovered: 538, verified: 154 },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { cls: string; icon: typeof CheckCircle2; label: string }> = {
    verified: { cls: "text-success border-success/30 bg-success/10", icon: CheckCircle2, label: "Verified" },
    pending_review: { cls: "text-warning border-warning/30 bg-warning/10", icon: Clock, label: "Pending" },
    rejected: { cls: "text-destructive border-destructive/30 bg-destructive/10", icon: AlertCircle, label: "Rejected" },
  };
  const m = map[status] ?? map.pending_review;
  const Icon = m.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${m.cls}`}>
      <Icon className="h-2.5 w-2.5" />{m.label}
    </span>
  );
}

function Page() {
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const { data } = useQuery({
    queryKey: ["discovery"],
    queryFn: async () => {
      const res = await supabase.from("companies").select("id,name,country_code,city,business_type,status,ai_trust_score,ai_risk_level,created_at").order("created_at", { ascending: false }).limit(50);
      return res.data ?? [];
    },
  });

  const dbCompanies = data ?? [];
  const pipeline = dbCompanies.length > 0
    ? dbCompanies.map((c) => ({ ...c, discovered_at: new Date(c.created_at), source: "Database" }))
    : MOCK_PIPELINE;

  const filtered = useMemo(() => statusFilter === "all" ? pipeline : pipeline.filter((c) => c.status === statusFilter), [pipeline, statusFilter]);

  const stats = useMemo(() => ({
    total: pipeline.length,
    pending: pipeline.filter((c) => c.status === "pending_review").length,
    verified: pipeline.filter((c) => c.status === "verified").length,
    rate: Math.round(pipeline.filter((c) => c.status === "verified").length / Math.max(pipeline.length, 1) * 100),
  }), [pipeline]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Intelligence · AI"
        title="Discovery Pipeline"
        description="GMIntel's AI continuously crawls trade portals, government databases, B2B platforms and web sources to discover and verify new textile businesses."
        actions={
          <Button variant="outline" size="sm" className="gap-1.5">
            <RefreshCw className="h-3.5 w-3.5" /> Run discovery
          </Button>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Discovered" value={stats.total} icon={<Radar className="h-4 w-4" />} delta={{ value: "+54 today", positive: true }} />
        <StatCard label="Pending Review" value={stats.pending} icon={<Clock className="h-4 w-4" />} />
        <StatCard label="Verified" value={stats.verified} icon={<CheckCircle2 className="h-4 w-4" />} delta={{ value: "+12 today", positive: true }} />
        <StatCard label="Verify Rate" value={`${stats.rate}%`} hint="AI precision" />
      </div>

      {/* Weekly chart */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Discovery Pipeline</div>
          <div className="font-display font-semibold mb-4">Weekly discovered vs verified</div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={WEEKLY_DISCOVERY} barCategoryGap="30%">
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="discovered" fill="var(--muted)" radius={[3, 3, 0, 0]} name="Discovered" />
                <Bar dataKey="verified" fill="var(--primary)" radius={[3, 3, 0, 0]} name="Verified" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">AI Data Sources</div>
          <div className="font-display font-semibold mb-4">Discovery channels</div>
          <div className="space-y-3">
            {[
              { source: "Trade Portals", count: 1842, pct: 38 },
              { source: "Web Crawl", count: 1205, pct: 25 },
              { source: "Govt Databases", count: 921, pct: 19 },
              { source: "B2B Platforms", count: 578, pct: 12 },
              { source: "Trade Fairs", count: 284, pct: 6 },
            ].map((s) => (
              <div key={s.source}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-foreground">{s.source}</span>
                  <span className="font-mono text-muted-foreground">{s.count.toLocaleString()}</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Discovery Queue</div>
            <div className="font-display font-semibold">Recently discovered companies</div>
          </div>
          <div className="flex gap-2">
            {["all", "pending_review", "verified"].map((s) => (
              <button key={s} onClick={() => setStatusFilter(s)}
                className={`px-2.5 py-1 rounded text-xs font-mono border transition-colors ${statusFilter === s ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                {s === "all" ? "All" : s === "pending_review" ? "Pending" : "Verified"}
              </button>
            ))}
          </div>
        </div>
        <div className="divide-y divide-border">
          <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
            <div className="col-span-4">Company</div>
            <div className="col-span-2">Country</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Source</div>
            <div className="col-span-1 text-right">Trust</div>
            <div className="col-span-1 text-right">Status</div>
          </div>
          {filtered.map((c) => (
            <div key={c.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
              <div className="col-span-4">
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.city}</div>
              </div>
              <div className="col-span-2 font-mono text-xs text-muted-foreground">{c.country_code}</div>
              <div className="col-span-2 text-xs text-muted-foreground capitalize">{c.business_type}</div>
              <div className="col-span-2 text-xs text-muted-foreground">{(c as Record<string, unknown>).source as string}</div>
              <div className="col-span-1 text-right font-mono tabular-nums text-foreground">{c.ai_trust_score}</div>
              <div className="col-span-1 text-right"><StatusBadge status={c.status ?? "pending_review"} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
