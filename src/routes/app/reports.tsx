import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  FileText,
  Plus,
  Download,
  Loader2,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/app/reports")({ component: Page });

const REPORT_TYPES = [
  {
    kind: "supplier",
    label: "Supplier Report",
    description:
      "Deep profile: capacity, scores, certifications, export history and AI assessment of a single supplier.",
    icon: "🏭",
    time: "~30 sec",
  },
  {
    kind: "country",
    label: "Country Report",
    description:
      "Full textile industry overview for a country: capacity, companies, export trends, risk environment, key contacts.",
    icon: "🌍",
    time: "~45 sec",
  },
  {
    kind: "market",
    label: "Market Report",
    description:
      "Category or product segment analysis: demand trends, pricing, top suppliers, emerging markets.",
    icon: "📈",
    time: "~60 sec",
  },
  {
    kind: "pricing",
    label: "Pricing Report",
    description:
      "Price benchmarking for a product or category across countries, with trend analysis and forecasts.",
    icon: "💰",
    time: "~30 sec",
  },
  {
    kind: "competitor",
    label: "Competitor Report",
    description:
      "Competitive intelligence: how a supplier compares against peers on scores, capacity and certifications.",
    icon: "🔍",
    time: "~45 sec",
  },
  {
    kind: "trend",
    label: "Trend Report",
    description:
      "Emerging fabric, product or market trends with demand signals, influencer data and forecast.",
    icon: "✨",
    time: "~60 sec",
  },
];

const STATUS_META: Record<
  string,
  { icon: typeof CheckCircle2; cls: string; label: string }
> = {
  ready: {
    icon: CheckCircle2,
    cls: "text-success border-success/30 bg-success/10",
    label: "Ready",
  },
  generating: {
    icon: Loader2,
    cls: "text-warning border-warning/30 bg-warning/10",
    label: "Generating",
  },
  pending: {
    icon: Clock,
    cls: "text-muted-foreground border-border bg-muted/20",
    label: "Pending",
  },
  failed: {
    icon: AlertCircle,
    cls: "text-destructive border-destructive/30 bg-destructive/10",
    label: "Failed",
  },
};

const MOCK_REPORTS = [
  {
    id: "rp1",
    kind: "supplier",
    title: "Arvind Mills Ltd — Full Intelligence Report",
    status: "ready",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "rp2",
    kind: "country",
    title: "Bangladesh Textile Industry Report Q2 2026",
    status: "ready",
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "rp3",
    kind: "pricing",
    title: "Cotton Fabric Price Benchmarking — South Asia",
    status: "ready",
    created_at: new Date(Date.now() - 86400000 * 8).toISOString(),
  },
  {
    id: "rp4",
    kind: "market",
    title: "Sustainable Denim Market Analysis 2026",
    status: "generating",
    created_at: new Date(Date.now() - 3600000).toISOString(),
  },
];

function StatusBadge({ status }: { status: string }) {
  const meta = STATUS_META[status] ?? STATUS_META.pending;
  const Icon = meta.icon;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${meta.cls}`}
    >
      <Icon
        className={`h-2.5 w-2.5 ${status === "generating" ? "animate-spin" : ""}`}
      />
      {meta.label}
    </span>
  );
}

function Page() {
  const [generating, setGenerating] = useState<string | null>(null);
  const [localReports, setLocalReports] = useState<typeof MOCK_REPORTS>([]);

  const { data: dbReports } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await supabase
        .from("reports")
        .select("*")
        .order("created_at", { ascending: false });
      return res.data ?? [];
    },
  });

  const reports = [
    ...localReports,
    ...(dbReports && dbReports.length > 0 ? dbReports : MOCK_REPORTS),
  ];

  const generateReport = async (kind: string, title: string) => {
    setGenerating(kind);
    const newId = crypto.randomUUID();
    const newReport = {
      id: newId,
      kind,
      title: `${title} — ${new Date().toLocaleDateString("en-GB")}`,
      status: "generating",
      created_at: new Date().toISOString(),
    };
    setLocalReports((prev) => [newReport, ...prev]);
    toast.info(`Generating ${title}...`);

    // Perform database write in background with authenticated user ID to satisfy RLS policy
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase
          .from("reports")
          .insert({
            user_id: user.id,
            kind,
            title: newReport.title,
            status: "generating",
          } as any)
          .then(({ error }) => {
            if (error) {
              console.warn("Supabase report insert skipped:", error.message);
            }
          });
      }
    });

    setTimeout(() => {
      setLocalReports((prev) =>
        prev.map((r) => (r.id === newId ? { ...r, status: "ready" } : r)),
      );
      setGenerating(null);
      toast.success(`${title} is ready for download!`);
    }, 4000);
  };

  const handleDownloadReport = (
    r: (typeof MOCK_REPORTS)[number] | Record<string, any>,
  ) => {
    const content = `========================================================================
GMINTEL AI REPORT
Generated: ${new Date(r.created_at).toLocaleString()}
Report ID: ${r.id}
Category: ${r.kind.toUpperCase()}
Title: ${r.title}
========================================================================

EXECUTIVE SUMMARY
This report compiles global textile sourcing intelligence, trust indices, and supply chain risk scores. Data is aggregated from public shipping records, certified bodies, and live trade flows.

KEY FINDINGS & METRICS:
- Market Confidence: STABLE
- AI Trust Score: 89/100
- Priority Action: Audit Tier-2 supplier certifications.

This is an automatically generated document. All intelligence estimations are marked with AI tags.
========================================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${r.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success("Downloading report...");
  };

  const readyCount = reports.filter((r) => r.status === "ready").length;
  const typeMap = Object.fromEntries(
    REPORT_TYPES.map((t) => [t.kind, t.label]),
  );

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workflows"
        title="AI Reports"
        description="Generate one-click intelligence reports on suppliers, countries, markets, pricing, trends and competitors."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          label="Total Reports"
          value={reports.length}
          icon={<FileText className="h-4 w-4" />}
        />
        <StatCard
          label="Ready"
          value={readyCount}
          delta={{ value: "download ready", positive: true }}
          icon={<CheckCircle2 className="h-4 w-4" />}
        />
        <StatCard
          label="Report Types"
          value={REPORT_TYPES.length}
          hint="template library"
        />
        <StatCard
          label="Avg Gen Time"
          value="42s"
          hint="AI-powered"
          icon={<Sparkles className="h-4 w-4" />}
        />
      </div>

      {/* Report types */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
          Report Library · Generate New
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REPORT_TYPES.map((rt) => (
            <div
              key={rt.kind}
              className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group"
            >
              <div className="text-2xl mb-3">{rt.icon}</div>
              <div className="font-display font-semibold text-foreground">
                {rt.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                {rt.description}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[10px] font-mono text-muted-foreground">
                  {rt.time}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5 h-7 text-xs"
                  disabled={generating === rt.kind}
                  onClick={() => generateReport(rt.kind, rt.label)}
                >
                  {generating === rt.kind ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" /> Generating…
                    </>
                  ) : (
                    <>
                      <Plus className="h-3 w-3" /> Generate
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My reports */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
            My Reports
          </div>
          <div className="font-display font-semibold">
            Generated intelligence reports
          </div>
        </div>
        <div className="divide-y divide-border">
          <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
            <div className="col-span-7 sm:col-span-5">Report Title</div>
            <div className="hidden sm:block col-span-2">Type</div>
            <div className="hidden md:block col-span-2">Generated</div>
            <div className="col-span-3 sm:col-span-2 text-right">Status</div>
            <div className="col-span-2 sm:col-span-1 text-right">Action</div>
          </div>
          {reports.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No reports generated yet. Use the library above to create your
              first report.
            </div>
          )}
          {reports.map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors"
            >
              <div className="col-span-7 sm:col-span-5 min-w-0">
                <div className="font-medium truncate">{r.title}</div>
                <div className="text-xs text-muted-foreground sm:hidden truncate mt-0.5">
                  {typeMap[r.kind] ?? r.kind} ·{" "}
                  {new Date(r.created_at).toLocaleDateString("en-GB")}
                </div>
              </div>
              <div className="hidden sm:block col-span-2 text-xs text-muted-foreground capitalize">
                {typeMap[r.kind] ?? r.kind}
              </div>
              <div className="hidden md:block col-span-2 text-xs font-mono text-muted-foreground">
                {new Date(r.created_at).toLocaleDateString("en-GB")}
              </div>
              <div className="col-span-3 sm:col-span-2 text-right">
                <StatusBadge status={r.status} />
              </div>
              <div className="col-span-2 sm:col-span-1 text-right">
                {r.status === "ready" && (
                  <button
                    onClick={() => handleDownloadReport(r)}
                    className="text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-muted"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
