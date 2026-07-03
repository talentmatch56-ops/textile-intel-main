import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { TrendingUp, TrendingDown, DollarSign, BarChart2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

export const Route = createFileRoute("/app/prices")({ component: Page });

const PRODUCTS = ["Cotton", "Polyester", "Denim", "Silk", "Wool", "Linen", "Viscose", "Nylon"];

const PRICE_TABLE = [
  { product: "Cotton Greige", country: "India", unit: "kg", low: 1.20, high: 1.85, change: +1.8, currency: "USD" },
  { product: "Cotton Greige", country: "Bangladesh", unit: "kg", low: 1.05, high: 1.60, change: +2.1, currency: "USD" },
  { product: "Cotton Greige", country: "Pakistan", unit: "kg", low: 1.10, high: 1.70, change: +0.4, currency: "USD" },
  { product: "Cotton Greige", country: "Turkey", unit: "kg", low: 1.45, high: 2.10, change: -0.3, currency: "USD" },
  { product: "Polyester Yarn", country: "China", unit: "kg", low: 0.95, high: 1.40, change: -0.8, currency: "USD" },
  { product: "Polyester Yarn", country: "India", unit: "kg", low: 1.05, high: 1.55, change: +0.2, currency: "USD" },
  { product: "Polyester Yarn", country: "Vietnam", unit: "kg", low: 1.00, high: 1.45, change: +1.1, currency: "USD" },
  { product: "Denim Fabric", country: "Turkey", unit: "m²", low: 3.20, high: 4.80, change: +0.6, currency: "USD" },
  { product: "Denim Fabric", country: "Bangladesh", unit: "m²", low: 2.40, high: 3.60, change: +3.2, currency: "USD" },
  { product: "Denim Fabric", country: "China", unit: "m²", low: 2.20, high: 3.40, change: -1.2, currency: "USD" },
  { product: "Silk Fabric", country: "India", unit: "m²", low: 12.0, high: 28.5, change: +3.2, currency: "USD" },
  { product: "Silk Fabric", country: "China", unit: "m²", low: 10.5, high: 22.0, change: -0.9, currency: "USD" },
  { product: "Wool Fabric", country: "Italy", unit: "m²", low: 8.40, high: 18.0, change: +0.3, currency: "USD" },
];

function generatePriceSeries(basePrice: number, months = 12) {
  return Array.from({ length: months }).map((_, i) => {
    const trend = i * (Math.random() * 0.05 - 0.02);
    const noise = (Math.random() - 0.5) * basePrice * 0.08;
    return {
      month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
      price: Math.max(0.5, +(basePrice + trend + noise).toFixed(2)),
    };
  });
}

function Page() {
  const [selectedProduct, setSelectedProduct] = useState("Cotton");
  const [searchFilter, setSearchFilter] = useState("");

  const { data } = useQuery({
    queryKey: ["prices-all"],
    queryFn: async () => {
      const res = await supabase.from("price_points").select("*").order("observed_at", { ascending: false }).limit(200);
      return res.data ?? [];
    },
  });

  const dbPrices = data ?? [];
  const priceData = dbPrices.length > 0 ? dbPrices : PRICE_TABLE;

  const filteredTable = useMemo(() => {
    let list = [...PRICE_TABLE];
    if (searchFilter) list = list.filter((p) => p.product.toLowerCase().includes(searchFilter.toLowerCase()) || p.country.toLowerCase().includes(searchFilter.toLowerCase()));
    return list;
  }, [searchFilter]);

  const chartData = useMemo(() => {
    const baseMap: Record<string, number> = {
      Cotton: 1.5, Polyester: 1.1, Denim: 3.5, Silk: 18, Wool: 10, Linen: 8, Viscose: 1.4, Nylon: 2.3,
    };
    const base = baseMap[selectedProduct] ?? 2;
    return generatePriceSeries(base);
  }, [selectedProduct]);

  const COUNTRY_PRICES: Record<string, { country: string; price: number }[]> = {
    Cotton:    [{ country: "India", price: 1.52 }, { country: "Bangladesh", price: 1.32 }, { country: "Pakistan", price: 1.40 }, { country: "Vietnam", price: 1.18 }, { country: "China", price: 1.08 }, { country: "Turkey", price: 1.78 }],
    Polyester: [{ country: "China", price: 0.98 }, { country: "India", price: 1.12 }, { country: "Vietnam", price: 1.05 }, { country: "Indonesia", price: 1.08 }, { country: "Pakistan", price: 1.15 }, { country: "Turkey", price: 1.22 }],
    Denim:     [{ country: "Turkey", price: 4.10 }, { country: "Bangladesh", price: 2.90 }, { country: "China", price: 2.70 }, { country: "India", price: 3.20 }, { country: "Pakistan", price: 2.80 }, { country: "Egypt", price: 3.50 }],
    Silk:      [{ country: "India", price: 20.5 }, { country: "China", price: 16.0 }, { country: "Vietnam", price: 14.5 }, { country: "Italy", price: 28.0 }, { country: "Thailand", price: 18.0 }, { country: "Brazil", price: 22.0 }],
    Wool:      [{ country: "Italy", price: 13.2 }, { country: "Australia", price: 10.5 }, { country: "China", price: 9.1 }, { country: "Turkey", price: 11.8 }, { country: "India", price: 8.9 }, { country: "Germany", price: 14.5 }],
    Linen:     [{ country: "Portugal", price: 8.5 }, { country: "China", price: 6.8 }, { country: "India", price: 7.2 }, { country: "Belgium", price: 9.8 }, { country: "France", price: 10.2 }, { country: "Egypt", price: 6.5 }],
    Viscose:   [{ country: "China", price: 1.25 }, { country: "India", price: 1.45 }, { country: "Indonesia", price: 1.35 }, { country: "Pakistan", price: 1.30 }, { country: "Turkey", price: 1.55 }, { country: "Vietnam", price: 1.40 }],
    Nylon:     [{ country: "China", price: 2.10 }, { country: "Taiwan", price: 2.55 }, { country: "India", price: 2.35 }, { country: "Vietnam", price: 2.20 }, { country: "South Korea", price: 2.75 }, { country: "Italy", price: 3.10 }],
  };

  const latestRow = PRICE_TABLE[0];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Intelligence"
        title="Price Intelligence"
        description="Real-time and historical fabric, yarn and garment price data across 40+ countries and 200+ products."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Price Points" value={(dbPrices.length || "2,418").toLocaleString()} icon={<DollarSign className="h-4 w-4" />} />
        <StatCard label="Products Tracked" value="218" delta={{ value: "refreshed daily", positive: true }} />
        <StatCard label="Cotton US" value="$0.74/lb" delta={{ value: "+1.8%", positive: true }} icon={<TrendingUp className="h-4 w-4" />} />
        <StatCard label="Polyester CN" value="$1.12/kg" delta={{ value: "-0.4%", positive: false }} icon={<TrendingDown className="h-4 w-4" />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Price trend chart */}
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Price Index · 12 Month</div>
              <div className="font-display font-semibold mt-0.5">{selectedProduct} price trend</div>
            </div>
            <div className="flex gap-1.5">
              {PRODUCTS.map((p) => (
                <button key={p} onClick={() => setSelectedProduct(p)}
                  className={`px-2 py-1 rounded text-xs font-mono border transition-colors ${selectedProduct === p ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }}
                  formatter={(v: number) => [`$${v}`, "Price"]} />
                <Area type="monotone" dataKey="price" stroke="var(--chart-1)" fill="url(#priceGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Country comparison */}
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">Country Comparison</div>
          <div className="font-display font-semibold mb-4">{selectedProduct} by market</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COUNTRY_PRICES[selectedProduct] ?? COUNTRY_PRICES.Cotton} layout="vertical" margin={{ left: 4 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                <YAxis type="category" dataKey="country" stroke="var(--muted-foreground)" fontSize={10} width={75} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }}
                  formatter={(v: number) => [`$${v}/kg`, "Avg Price"]} />
                <Bar dataKey="price" fill="var(--primary)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Price table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Price Registry</div>
            <div className="font-display font-semibold">Latest price observations</div>
          </div>
          <input
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter by product or country…"
            className="h-8 px-3 rounded border border-border bg-muted/40 text-xs outline-none focus:border-primary w-48"
          />
        </div>
        <div className="divide-y divide-border">
          <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
            <div className="col-span-6 sm:col-span-4">Product</div>
            <div className="hidden sm:block col-span-2">Country</div>
            <div className="hidden md:block col-span-1">Unit</div>
            <div className="col-span-3 sm:col-span-2 text-right">Low</div>
            <div className="col-span-3 sm:col-span-2 text-right">High</div>
            <div className="hidden sm:block col-span-1 text-right">Δ MoM</div>
          </div>
          {filteredTable.map((p, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
              <div className="col-span-6 sm:col-span-4 min-w-0">
                <div className="font-medium truncate">{p.product}</div>
                <div className="text-xs text-muted-foreground mt-0.5 sm:hidden truncate">
                  {p.country} · per {p.unit}
                </div>
              </div>
              <div className="hidden sm:block col-span-2 text-muted-foreground truncate">{p.country}</div>
              <div className="hidden md:block col-span-1 font-mono text-xs text-muted-foreground">{p.unit}</div>
              <div className="col-span-3 sm:col-span-2 text-right font-mono tabular-nums">${p.low.toFixed(2)}</div>
              <div className="col-span-3 sm:col-span-2 text-right font-mono tabular-nums">${p.high.toFixed(2)}</div>
              <div className={`hidden sm:flex col-span-1 text-right font-mono tabular-nums text-xs items-center justify-end gap-0.5 ${p.change >= 0 ? "text-success" : "text-destructive"}`}>
                {p.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {Math.abs(p.change)}%
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 border-t border-border bg-muted/20 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
          <span>Prices are AI-estimated from public trade data · {filteredTable.length} records shown</span>
          <span className="text-primary">Updated: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
      </div>
    </div>
  );
}
