import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Settings, Users, Building2, ShieldCheck, ClipboardList, CheckCircle2, Clock, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/admin")({ component: Page });

const MOCK_USERS = [
  { id: "u1", email: "hr.hardik05@gmail.com", full_name: "Hardik Parmar", company: "GMIntel", role: "admin", created_at: new Date(Date.now() - 86400000 * 30).toISOString() },
  { id: "u2", email: "analyst@gmintelhq.com", full_name: "Sarah Chen", company: "GMIntel", role: "analyst", created_at: new Date(Date.now() - 86400000 * 20).toISOString() },
  { id: "u3", email: "buyer@sourcing.co", full_name: "Alex Rahman", company: "Sourcing Co", role: "viewer", created_at: new Date(Date.now() - 86400000 * 10).toISOString() },
  { id: "u4", email: "trade@fashionbrand.eu", full_name: "Marie Dubois", company: "Fashion Brand EU", role: "viewer", created_at: new Date(Date.now() - 86400000 * 5).toISOString() },
];

const MOCK_AUDIT_LOGS = [
  { id: "a1", action: "company.verified", entity: "Arvind Mills Ltd", actor: "hr.hardik05@gmail.com", created_at: new Date(Date.now() - 3600000).toISOString() },
  { id: "a2", action: "rfq.created", entity: "Cotton Greige RFQ", actor: "buyer@sourcing.co", created_at: new Date(Date.now() - 7200000).toISOString() },
  { id: "a3", action: "report.generated", entity: "Bangladesh Country Report", actor: "analyst@gmintelhq.com", created_at: new Date(Date.now() - 86400000).toISOString() },
  { id: "a4", action: "user.signup", entity: "trade@fashionbrand.eu", actor: "system", created_at: new Date(Date.now() - 86400000 * 5).toISOString() },
  { id: "a5", action: "company.rejected", entity: "Unknown Factory CN", actor: "hr.hardik05@gmail.com", created_at: new Date(Date.now() - 86400000 * 7).toISOString() },
];

const ROLE_COLORS: Record<string, string> = {
  admin: "text-primary border-primary/30 bg-primary/10",
  analyst: "text-info border-info/30 bg-info/10",
  viewer: "text-muted-foreground border-border bg-muted/20",
};

const STATUS_ACTIONS: Record<string, { label: string; nextStatus: string; cls: string }> = {
  pending_review: { label: "Verify", nextStatus: "verified", cls: "text-success border-success/30 hover:bg-success/10" },
  verified: { label: "Archive", nextStatus: "archived", cls: "text-muted-foreground border-border hover:bg-muted/40" },
  rejected: { label: "Re-review", nextStatus: "pending_review", cls: "text-warning border-warning/30 hover:bg-warning/10" },
  archived: { label: "Restore", nextStatus: "pending_review", cls: "text-info border-info/30 hover:bg-info/10" },
};

function Page() {
  const [activeTab, setActiveTab] = useState<"companies" | "users" | "audit">("companies");
  const [statusFilter, setStatusFilter] = useState("pending_review");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  const { data: companies, refetch: refetchCompanies } = useQuery({
    queryKey: ["admin-companies"],
    queryFn: async () => {
      const res = await supabase.from("companies").select("id,name,country_code,city,business_type,status,ai_risk_level,ai_trust_score,created_at").order("created_at", { ascending: false });
      return res.data ?? [];
    },
  });

  const { data: profiles } = useQuery({
    queryKey: ["admin-profiles"],
    queryFn: async () => {
      const res = await supabase.from("profiles").select("id,email,full_name,company,created_at");
      return res.data ?? [];
    },
  });

  const allCompanies = companies ?? [];
  const allProfiles = profiles && profiles.length > 0 ? profiles : MOCK_USERS;

  const filteredCompanies = statusFilter === "all" ? allCompanies : allCompanies.filter((c) => c.status === statusFilter);

  const stats = {
    total: allCompanies.length,
    pending: allCompanies.filter((c) => c.status === "pending_review").length,
    verified: allCompanies.filter((c) => c.status === "verified").length,
    users: allProfiles.length,
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("companies").update({ status } as Record<string, string>).eq("id", id);
    refetchCompanies();
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="System"
        title="Admin Panel"
        description="Manage company verification, user roles, and platform audit logs."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total Companies" value={stats.total} icon={<Building2 className="h-4 w-4" />} />
        <StatCard label="Pending Review" value={stats.pending} icon={<Clock className="h-4 w-4" />} delta={{ value: "needs action", positive: false }} />
        <StatCard label="Verified" value={stats.verified} icon={<CheckCircle2 className="h-4 w-4" />} delta={{ value: "approved", positive: true }} />
        <StatCard label="Platform Users" value={stats.users} icon={<Users className="h-4 w-4" />} />
      </div>

      {/* Tab navigation */}
      <div className="flex gap-1 border-b border-border">
        {([["companies", "Company Management", Building2], ["users", "User Management", Users], ["audit", "Audit Log", ClipboardList]] as const).map(([key, label, Icon]) => (
          <button key={key} onClick={() => setActiveTab(key)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition-colors ${activeTab === key ? "border-primary text-foreground font-medium" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            <Icon className="h-3.5 w-3.5" />{label}
          </button>
        ))}
      </div>

      {/* Company Management */}
      {activeTab === "companies" && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Company Registry</div>
              <div className="font-display font-semibold">Verification queue</div>
            </div>
            <div className="flex gap-2">
              {["all", "pending_review", "verified", "rejected", "archived"].map((s) => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className={`px-2.5 py-1 rounded text-xs font-mono border capitalize transition-colors ${statusFilter === s ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                  {s === "pending_review" ? "Pending" : s}
                </button>
              ))}
            </div>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
              <div className="col-span-4">Company</div>
              <div className="col-span-2">Country</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-1 text-right">Trust</div>
              <div className="col-span-1 text-right">Risk</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            {filteredCompanies.length === 0 && (
              <div className="p-8 text-center text-sm text-muted-foreground">No companies in this status.</div>
            )}
            {filteredCompanies.map((c) => {
              const action = STATUS_ACTIONS[c.status ?? "pending_review"];
              return (
                <div key={c.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
                  <div className="col-span-4">
                    <div className="font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.city}</div>
                  </div>
                  <div className="col-span-2 font-mono text-xs text-muted-foreground">{c.country_code}</div>
                  <div className="col-span-2 text-xs text-muted-foreground capitalize">{c.business_type}</div>
                  <div className="col-span-1 text-right font-mono tabular-nums">{c.ai_trust_score ?? "—"}</div>
                  <div className="col-span-1 text-right"><RiskBadge level={c.ai_risk_level} /></div>
                  <div className="col-span-2 text-right">
                    {action && (
                      <button onClick={() => updateStatus(c.id, action.nextStatus)}
                        className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${action.cls}`}>
                        {action.label}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* User Management */}
      {activeTab === "users" && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">User Registry</div>
            <div className="font-display font-semibold">Platform accounts</div>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
              <div className="col-span-4">User</div>
              <div className="col-span-3">Company</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Joined</div>
              <div className="col-span-1 text-right">More</div>
            </div>
            {allProfiles.map((u) => (
              <div key={u.id}>
                <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
                  <div className="col-span-4">
                    <div className="font-medium">{u.full_name || "—"}</div>
                    <div className="text-xs text-muted-foreground font-mono truncate">{u.email}</div>
                  </div>
                  <div className="col-span-3 text-xs text-muted-foreground truncate">{(u as Record<string, unknown>).company as string || "—"}</div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${ROLE_COLORS[(u as Record<string, unknown>).role as string] ?? ROLE_COLORS.viewer}`}>
                      <ShieldCheck className="h-2.5 w-2.5" />{(u as Record<string, unknown>).role as string || "viewer"}
                    </span>
                  </div>
                  <div className="col-span-2 text-xs font-mono text-muted-foreground">{new Date(u.created_at).toLocaleDateString()}</div>
                  <div className="col-span-1 text-right">
                    <button onClick={() => setExpandedUser(expandedUser === u.id ? null : u.id)} className="text-muted-foreground hover:text-foreground">
                      {expandedUser === u.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                {expandedUser === u.id && (
                  <div className="px-4 pb-3 border-t border-border/50 bg-muted/10">
                    <div className="pt-3 text-xs text-muted-foreground space-y-1">
                      <div><span className="font-mono text-foreground">ID:</span> {u.id}</div>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline" className="h-7 text-xs">Change Role</Button>
                        <Button size="sm" variant="outline" className="h-7 text-xs text-destructive border-destructive/30 hover:bg-destructive/10">Suspend</Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Audit Log */}
      {activeTab === "audit" && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-4 border-b border-border">
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Audit Trail</div>
            <div className="font-display font-semibold">System event log</div>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
              <div className="col-span-3">Action</div>
              <div className="col-span-4">Entity</div>
              <div className="col-span-3">Actor</div>
              <div className="col-span-2 text-right">When</div>
            </div>
            {MOCK_AUDIT_LOGS.map((log) => (
              <div key={log.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
                <div className="col-span-3 font-mono text-xs text-primary">{log.action}</div>
                <div className="col-span-4 text-sm truncate">{log.entity}</div>
                <div className="col-span-3 text-xs text-muted-foreground font-mono truncate">{log.actor}</div>
                <div className="col-span-2 text-right text-xs font-mono text-muted-foreground">
                  {new Date(log.created_at).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
