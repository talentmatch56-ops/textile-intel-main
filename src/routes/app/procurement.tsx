import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ClipboardList, Plus, Sparkles, ChevronDown, ChevronUp, Send, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/procurement")({ component: Page });

const CERT_OPTIONS = ["GOTS", "OEKO-TEX", "ISO 9001", "SA8000", "BSCI", "Fair Trade", "WRAP"];
const STATUS_COLORS: Record<string, string> = {
  draft: "text-muted-foreground border-border bg-muted/20",
  active: "text-warning border-warning/30 bg-warning/10",
  matched: "text-success border-success/30 bg-success/10",
  closed: "text-muted-foreground border-border bg-muted/20",
};

const MOCK_RFQS = [
  { id: "r1", product: "100% Cotton Greige Fabric", quantity: 5000, unit: "kg", target_price: 1.45, currency: "USD", country_code: "IN", lead_time_days: 30, status: "matched", created_at: new Date(Date.now() - 86400000 * 3).toISOString() },
  { id: "r2", product: "GOTS Certified Organic Denim", quantity: 2000, unit: "m²", target_price: 4.20, currency: "USD", country_code: "TR", lead_time_days: 45, status: "active", created_at: new Date(Date.now() - 86400000).toISOString() },
  { id: "r3", product: "Polyester Microfibre", quantity: 10000, unit: "kg", target_price: 1.10, currency: "USD", country_code: "CN", lead_time_days: 21, status: "draft", created_at: new Date().toISOString() },
];

const AI_MATCHES = [
  { name: "Arvind Mills Ltd", country: "IN", trust: 94, risk: "low", moq: 2000, lead: 28, match: 97 },
  { name: "Vardhman Textiles", country: "IN", trust: 91, risk: "low", moq: 1000, lead: 35, match: 92 },
  { name: "Bombay Dyeing", country: "IN", trust: 86, risk: "medium", moq: 500, lead: 30, match: 88 },
  { name: "DCM Shriram Industries", country: "IN", trust: 83, risk: "low", moq: 3000, lead: 40, match: 81 },
];

function Page() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ product: "", quantity: "", unit: "kg", target_price: "", country_code: "", lead_time_days: "30", certs: [] as string[], notes: "" });
  const [expandedRfq, setExpandedRfq] = useState<string | null>(null);

  const { data: rfqData, refetch } = useQuery({
    queryKey: ["rfqs"],
    queryFn: async () => { const res = await supabase.from("rfqs").select("*").order("created_at", { ascending: false }); return res.data ?? []; },
  });

  const rfqs = (rfqData && rfqData.length > 0) ? rfqData : MOCK_RFQS;

  const toggleCert = (cert: string) => setForm((f) => ({ ...f, certs: f.certs.includes(cert) ? f.certs.filter((c) => c !== cert) : [...f.certs, cert] }));

  const submitRfq = async () => {
    if (!form.product || !form.quantity) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("Please sign in to submit an RFQ");
      return;
    }
    const { error } = await supabase.from("rfqs").insert({
      user_id: user.id,
      product: form.product,
      quantity: Number(form.quantity),
      target_price: Number(form.target_price),
      country_code: form.country_code || null,
      lead_time_days: Number(form.lead_time_days),
      certifications: form.certs,
      notes: form.notes,
      status: "draft"
    } as any);
    if (error) {
      toast.error(`Failed to submit RFQ: ${error.message}`);
      return;
    }
    setShowForm(false);
    setForm({ product: "", quantity: "", unit: "kg", target_price: "", country_code: "", lead_time_days: "30", certs: [], notes: "" });
    refetch();
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workflows · AI"
        title="Procurement Copilot"
        description="Submit RFQs and let AI match you with ranked, verified suppliers based on your requirements."
        actions={
          <Button size="sm" onClick={() => setShowForm(!showForm)} className="gap-1.5">
            <Plus className="h-3.5 w-3.5" /> New RFQ
          </Button>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total RFQs" value={rfqs.length} icon={<ClipboardList className="h-4 w-4" />} />
        <StatCard label="Matched" value={rfqs.filter((r) => r.status === "matched").length} delta={{ value: "AI-ranked", positive: true }} icon={<Sparkles className="h-4 w-4" />} />
        <StatCard label="Active" value={rfqs.filter((r) => r.status === "active").length} />
        <StatCard label="Avg Match Score" value="89%" hint="supplier fit" />
      </div>

      {/* RFQ Form */}
      {showForm && (
        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/[0.04] to-transparent p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">New Request for Quotation</div>
              <div className="font-display font-semibold">Describe your sourcing requirement</div>
            </div>
            <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Product / Fabric *</label>
              <input value={form.product} onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                placeholder="e.g. 100% Cotton Greige Fabric, 200 GSM"
                className="w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Quantity *</label>
                <input value={form.quantity} onChange={(e) => setForm((f) => ({ ...f, quantity: e.target.value }))}
                  placeholder="e.g. 5000"
                  className="w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary" />
              </div>
              <div className="w-24">
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Unit</label>
                <select value={form.unit} onChange={(e) => setForm((f) => ({ ...f, unit: e.target.value }))}
                  className="w-full h-9 px-2 rounded border border-border bg-card text-sm outline-none focus:border-primary">
                  <option>kg</option><option>m²</option><option>yard</option><option>piece</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Target Price (USD/{form.unit})</label>
              <input value={form.target_price} onChange={(e) => setForm((f) => ({ ...f, target_price: e.target.value }))}
                placeholder="e.g. 1.50"
                className="w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Max Lead Time (days)</label>
              <input value={form.lead_time_days} onChange={(e) => setForm((f) => ({ ...f, lead_time_days: e.target.value }))}
                className="w-full h-9 px-3 rounded border border-border bg-card text-sm outline-none focus:border-primary" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Required Certifications</label>
              <div className="flex flex-wrap gap-2">
                {CERT_OPTIONS.map((c) => (
                  <button key={c} type="button" onClick={() => toggleCert(c)}
                    className={`px-2.5 py-1 rounded-full text-xs border transition-colors ${form.certs.includes(c) ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Additional Notes</label>
              <textarea value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                placeholder="Colour preferences, packaging, sample requirements…"
                rows={3}
                className="w-full px-3 py-2 rounded border border-border bg-card text-sm outline-none focus:border-primary resize-none" />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
            <Button size="sm" onClick={submitRfq} className="gap-1.5">
              <Send className="h-3.5 w-3.5" /> Submit RFQ
            </Button>
          </div>
        </div>
      )}

      {/* My RFQs */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">My RFQs</div>
          <div className="font-display font-semibold">Active sourcing requests</div>
        </div>
        <div className="divide-y divide-border">
          {rfqs.map((rfq) => (
            <div key={rfq.id}>
              <div className="px-4 py-3 hover:bg-muted/40 transition-colors cursor-pointer" onClick={() => setExpandedRfq(expandedRfq === rfq.id ? null : rfq.id)}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm truncate">{rfq.product}</span>
                      <span className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${STATUS_COLORS[rfq.status ?? "draft"]}`}>
                        {rfq.status}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      {rfq.quantity?.toLocaleString()} units · ${rfq.target_price}/unit · {rfq.lead_time_days}d lead time
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-muted-foreground">{new Date(rfq.created_at).toLocaleDateString("en-US", { timeZone: "UTC" })}</span>
                    {expandedRfq === rfq.id ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </div>
                </div>
              </div>

              {/* Expanded: AI matches */}
              {expandedRfq === rfq.id && (
                <div className="px-4 pb-4 border-t border-border/50 bg-muted/20">
                  <div className="pt-3 mb-3 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary">AI Matched Suppliers</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {AI_MATCHES.map((m, i) => (
                      <div key={m.name} className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2.5">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono bg-primary/15 text-primary px-1 rounded">#{i + 1}</span>
                            <span className="text-sm font-medium">{m.name}</span>
                          </div>
                          <div className="text-xs text-muted-foreground font-mono mt-0.5">{m.country} · MOQ {m.moq.toLocaleString()} · {m.lead}d</div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-sm font-semibold text-primary">{m.match}%</div>
                          <div className="text-[10px] text-muted-foreground">match</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
