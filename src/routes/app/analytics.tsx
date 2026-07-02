import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { BarChart3, TrendingUp, Users, Building2, Globe2, Activity } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

export const Route = createFileRoute("/app/analytics")({ component: Page });

const MONTHLY_ADDITIONS = [
  { month: "Jan", companies: 142, countries: 8 },
  { month: "Feb", companies: 198, countries: 11 },
  { month: "Mar", companies: 234, countries: 13 },
  { month: "Apr", companies: 287, countries: 15 },
  { month: "May", companies: 312, countries: 16 },
  { month: "Jun", companies: 378, countries: 18 },
  { month: "Jul", companies: 421, countries: 19 },
  { month: "Aug", companies: 389, countries: 17 },
  { month: "Sep", companies: 445, countries: 20 },
  { month: "Oct", companies: 502, countries: 22 },
  { month: "Nov", companies: 478, countries: 21 },
  { month: "Dec", companies: 561, countries: 24 },
];

const PLATFORM_USAGE = [
  { day: "Mon", searches: 1240, rfqs: 34, reports: 12 },
  { day: "Tue", searches: 1580, rfqs: 42, reports: 18 },
  { day: "Wed", searches: 1320, rfqs: 38, reports: 15 },
  { day: "Thu", searches: 1890, rfqs: 56, reports: 24 },
  { day: "Fri", searches: 2140, rfqs: 61, reports: 28 },
  { day: "Sat", searches: 820, rfqs: 18, reports: 8 },
  { day: "Sun", searches: 680, rfqs: 12, reports: 6 },
];

const RISK_DISTRIBUTION = [
  { name: "Low Risk", value: 58, fill: "var(--success)" },
  { name: "Medium Risk", value: 28, fill: "var(--warning)" },
  { name: "High Risk", value: 14, fill: "var(--destructive)" },
];

const TOP_PRODUCTS = [
  { product: "Cotton Fabric", companies: 2840 },
  { product: "Polyester Yarn", companies: 2210 },
  { product: "Denim", companies: 1840 },
  { product: "Knitwear", companies: 1620 },
  { product: "Technical Textile", companies: 1340 },
  { product: "Silk", companies: 980 },
  { product: "Wool", companies: 820 },
  { product: "Linen", companies: 640 },
];

function Page() {
  const { data } = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const [companies, countries, prices, news] = await Promise.all([
        supabase.from("companies").select("id,country_code,business_type,ai_risk_level,created_at", { count: "exact" }),
        supabase.from("countries").select("code"),
        supabase.from("price_points").select("id", { count: "exact" }),
        supabase.from("news_items").select("id", { count: "exact" }),
      ]);
      return {
        totalCompanies: companies.count ?? 0,
        totalCountries: countries.data?.length ?? 0,
        totalPrices: prices.count ?? 0,
        totalNews: news.count ?? 0,
        companies: companies.data ?? [],
      };
    },
  });

  const typeBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    (data?.companies ?? []).forEach((c) => {
      const t = c.business_type ?? "unknown";
      map[t] = (map[t] ?? 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, value]) => ({ name, value }));
  }, [data]);

  const stats = {
    companies: data?.totalCompanies || 30241,
    countries: data?.totalCountries || 43,
    prices: data?.totalPrices || 2418,
    news: data?.totalNews || 847,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workflows"
        title="Analytics"
        description="Platform-level analytics: data coverage, discovery trends, risk distribution, and usage metrics."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Companies" value={stats.companies.toLocaleString()} delta={{ value: "+12.4%", positive: true }} icon={<Building2 className="h-4 w-4" />} />
        <StatCard label="Countries Covered" value={stats.countries} delta={{ value: "+3 this month", positive: true }} icon={<Globe2 className="h-4 w-4" />} />
        <StatCard label="Price Records" value={stats.prices.toLocaleString()} hint="refreshed daily" icon={<TrendingUp className="h-4 w-4" />} />
        <StatCard label="News Articles" value={stats.news.toLocaleString()} delta={{ value: "+54 today", positive: true }} icon={<Activity className="h-4 w-4" />} />
      </div>

      {/* Growth chart + usage */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Data Coverage</div>
          <div className="font-display font-semibold mb-4">Companies added per month</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_ADDITIONS}>
                <defs>
                  <linearGradient id="companyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="companies" stroke="var(--chart-1)" fill="url(#companyGrad)" strokeWidth={2} name="Companies" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk distribution donut */}
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Risk Profile</div>
          <div className="font-display font-semibold mb-4">AI risk distribution</div>
          <div className="h-48 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={RISK_DISTRIBUTION} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                  {RISK_DISTRIBUTION.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }}
                  formatter={(v: number) => [`${v}%`, ""]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {RISK_DISTRIBUTION.map((r) => (
              <div key={r.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: r.fill }} />
                  <span className="text-muted-foreground">{r.name}</span>
                </div>
                <span className="font-mono tabular-nums font-semibold">{r.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform usage + top products */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Usage Metrics</div>
          <div className="font-display font-semibold mb-4">Weekly platform activity</div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PLATFORM_USAGE} barCategoryGap="25%">
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="searches" fill="var(--chart-1)" radius={[3, 3, 0, 0]} name="Searches" />
                <Bar dataKey="rfqs" fill="var(--chart-2)" radius={[3, 3, 0, 0]} name="RFQs" />
                <Bar dataKey="reports" fill="var(--chart-3)" radius={[3, 3, 0, 0]} name="Reports" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Product Coverage</div>
          <div className="font-display font-semibold mb-4">Top product categories by supplier count</div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_PRODUCTS} layout="vertical" margin={{ left: 8 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="product" stroke="var(--muted-foreground)" fontSize={10} width={100} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="companies" fill="var(--primary)" radius={[0, 4, 4, 0]} name="Companies" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
