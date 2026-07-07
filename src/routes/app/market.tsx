import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  TrendingUp,
  Globe2,
  BarChart2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export const Route = createFileRoute("/app/market")({ component: Page });

const TRENDING_CATEGORIES = [
  {
    name: "Performance Sportswear",
    growth: +34,
    demand: "Very High",
    region: "Americas + EU",
    trend: "up",
  },
  {
    name: "Sustainable Denim",
    growth: +28,
    demand: "High",
    region: "EU + Asia",
    trend: "up",
  },
  {
    name: "Technical Textiles",
    growth: +22,
    demand: "High",
    region: "Global",
    trend: "up",
  },
  {
    name: "Linen & Natural Fibres",
    growth: +18,
    demand: "High",
    region: "EU + Oceania",
    trend: "up",
  },
  {
    name: "Athleisure Fabrics",
    growth: +15,
    demand: "Medium-High",
    region: "Global",
    trend: "up",
  },
  {
    name: "Conventional Cotton",
    growth: -3,
    demand: "Medium",
    region: "Global",
    trend: "down",
  },
  {
    name: "Fast Fashion Synthetics",
    growth: -8,
    demand: "Low",
    region: "Declining",
    trend: "down",
  },
  {
    name: "Wool Suiting",
    growth: +6,
    demand: "Steady",
    region: "EU + Japan",
    trend: "up",
  },
];

const EXPORT_MOMENTUM = [
  { country: "Bangladesh", exports: 42.6, change: +18.2 },
  { country: "Vietnam", exports: 38.1, change: +12.4 },
  { country: "India", exports: 31.4, change: +9.8 },
  { country: "China", exports: 118.2, change: -2.1 },
  { country: "Turkey", exports: 19.8, change: +7.3 },
  { country: "Pakistan", exports: 14.2, change: +5.6 },
  { country: "Cambodia", exports: 8.9, change: +14.7 },
  { country: "Indonesia", exports: 11.3, change: +3.2 },
];

const DEMAND_TREND = Array.from({ length: 12 }).map((_, i) => ({
  month: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][i],
  sportswear: 80 + Math.sin(i / 2) * 8 + i * 2.2,
  sustainable: 60 + Math.sin(i / 3) * 6 + i * 1.8,
  technical: 55 + Math.sin(i / 4) * 4 + i * 1.4,
}));

const AI_SIGNALS = [
  {
    signal:
      "EU demand for GOTS-certified fabric rising 22% QoQ — lock Q4 volumes now",
    type: "opportunity",
    confidence: 91,
  },
  {
    signal:
      "Bangladesh wage review scheduled Q3 may push garment costs up 4–6%",
    type: "risk",
    confidence: 84,
  },
  {
    signal:
      "China synthetic fibre overcapacity creating buyer-favourable pricing window",
    type: "opportunity",
    confidence: 78,
  },
  {
    signal:
      "Turkish denim orders fully booked through Q1 2027 — seek alternatives",
    type: "alert",
    confidence: 96,
  },
];

function Page() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Intelligence"
        title="Market Intelligence"
        description="Global textile market trends, export momentum, category demand signals and AI-powered market insights."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          label="Global Trade Volume"
          value="$842B"
          delta={{ value: "+6.2% YoY", positive: true }}
          icon={<Globe2 className="h-4 w-4" />}
        />
        <StatCard
          label="Trending Categories"
          value="18"
          delta={{ value: "+3 new", positive: true }}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <StatCard
          label="AI Signals Active"
          value="47"
          hint="updated hourly"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <StatCard
          label="Markets Covered"
          value="43"
          hint="countries"
          icon={<BarChart2 className="h-4 w-4" />}
        />
      </div>

      {/* AI Market Signals */}
      <div className="space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
          AI Market Signals · Live
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {AI_SIGNALS.map((s, i) => (
            <div
              key={i}
              className={`rounded-lg border p-4 ${s.type === "opportunity" ? "border-success/30 bg-success/5" : s.type === "risk" ? "border-destructive/30 bg-destructive/5" : "border-warning/30 bg-warning/5"}`}
            >
              <div className="flex items-start gap-3">
                <Sparkles
                  className={`h-4 w-4 shrink-0 mt-0.5 ${s.type === "opportunity" ? "text-success" : s.type === "risk" ? "text-destructive" : "text-warning"}`}
                />
                <div className="flex-1">
                  <div className="text-sm text-foreground leading-snug">
                    {s.signal}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span
                      className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${s.type === "opportunity" ? "border-success/30 text-success bg-success/10" : s.type === "risk" ? "border-destructive/30 text-destructive bg-destructive/10" : "border-warning/30 text-warning bg-warning/10"}`}
                    >
                      {s.type}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {s.confidence}% confidence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Demand trend chart */}
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
            Demand Index
          </div>
          <div className="font-display font-semibold mb-1">
            Category demand momentum · 12 months
          </div>
          <div className="flex gap-4 text-[10px] font-mono mb-4">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span
                className="h-2 w-2 rounded-sm"
                style={{ background: "var(--chart-1)" }}
              />
              Sportswear
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span
                className="h-2 w-2 rounded-sm"
                style={{ background: "var(--chart-2)" }}
              />
              Sustainable
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span
                className="h-2 w-2 rounded-sm"
                style={{ background: "var(--chart-3)" }}
              />
              Technical
            </span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={DEMAND_TREND}>
                <CartesianGrid
                  stroke="var(--border)"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="var(--muted-foreground)"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="var(--muted-foreground)"
                  fontSize={11}
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
                <Line
                  type="monotone"
                  dataKey="sportswear"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="sustainable"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="technical"
                  stroke="var(--chart-3)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Export momentum */}
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
            Export Momentum
          </div>
          <div className="font-display font-semibold mb-4">
            Top exporters ($B, YoY %)
          </div>
          <div className="space-y-3">
            {EXPORT_MOMENTUM.map((c) => (
              <div
                key={c.country}
                className="flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium">{c.country}</div>
                  <div className="text-xs font-mono text-muted-foreground">
                    ${c.exports}B exports
                  </div>
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-mono tabular-nums ${c.change >= 0 ? "text-success" : "text-destructive"}`}
                >
                  {c.change >= 0 ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {Math.abs(c.change)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending categories */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
            Category Intelligence
          </div>
          <div className="font-display font-semibold">
            Trending textile categories
          </div>
        </div>
        <div className="divide-y divide-border">
          <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
            <div className="col-span-4">Category</div>
            <div className="col-span-3">Region</div>
            <div className="col-span-2">Demand</div>
            <div className="col-span-2 text-right">YoY Growth</div>
            <div className="col-span-1 text-right">Trend</div>
          </div>
          {TRENDING_CATEGORIES.map((c) => (
            <div
              key={c.name}
              className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors"
            >
              <div className="col-span-4 font-medium">{c.name}</div>
              <div className="col-span-3 text-xs text-muted-foreground">
                {c.region}
              </div>
              <div className="col-span-2 text-xs text-muted-foreground">
                {c.demand}
              </div>
              <div
                className={`col-span-2 text-right font-mono tabular-nums font-semibold ${c.growth >= 0 ? "text-success" : "text-destructive"}`}
              >
                {c.growth >= 0 ? "+" : ""}
                {c.growth}%
              </div>
              <div className="col-span-1 flex justify-end">
                {c.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 text-success" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-destructive" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
