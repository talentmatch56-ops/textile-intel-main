import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import { 
  Settings, Users, Building2, ShieldCheck, ClipboardList, 
  CheckCircle2, Clock, XCircle, ChevronDown, ChevronUp, 
  AlertOctagon, MoreVertical, Edit3, Trash2, Plus 
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/app/page-header";
import { StatCard } from "@/components/app/stat-card";
import { RiskBadge } from "@/components/app/risk-badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
  pending_review: { label: "Verify", nextStatus: "verified", cls: "text-success" },
  verified: { label: "Archive", nextStatus: "archived", cls: "text-muted-foreground" },
  rejected: { label: "Re-review", nextStatus: "pending_review", cls: "text-warning" },
  archived: { label: "Restore", nextStatus: "pending_review", cls: "text-info" },
};

function Page() {
  const [activeTab, setActiveTab] = useState<"companies" | "users" | "audit">("companies");
  const [statusFilter, setStatusFilter] = useState("pending_review");
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [mockProfiles, setMockProfiles] = useState(MOCK_USERS);
  const [suspendedUserIds, setSuspendedUserIds] = useState<string[]>([]);

  // Active user role checking
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentUserRole, setCurrentUserRole] = useState<string>("viewer");

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setCurrentUser(user);
        supabase.from("user_roles").select("role").eq("user_id", user.id).maybeSingle().then(({ data }) => {
          if (data) {
            setCurrentUserRole(data.role);
          }
        });
      }
    });
  }, []);

  // CRUD modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCompanyId, setEditingCompanyId] = useState<string | null>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCountry, setFormCountry] = useState("IN");
  const [formCity, setFormCity] = useState("");
  const [formBusinessType, setFormBusinessType] = useState("manufacturer");
  const [formTrustScore, setFormTrustScore] = useState("85");
  const [formRiskLevel, setFormRiskLevel] = useState<"low" | "medium" | "high">("low");
  const [formCapacity, setFormCapacity] = useState("");
  const [formMOQ, setFormMOQ] = useState("");
  const [formLeadTime, setFormLeadTime] = useState("");
  const [formStatus, setFormStatus] = useState("pending_review");

  // Query companies and countries
  const { data: queryData, refetch: refetchCompanies } = useQuery({
    queryKey: ["admin-companies"],
    queryFn: async () => {
      const [compRes, countRes] = await Promise.all([
        supabase.from("companies").select("id,slug,name,country_code,city,business_type,status,ai_risk_level,ai_trust_score,monthly_capacity,moq,lead_time_days,created_at").order("created_at", { ascending: false }),
        supabase.from("countries").select("code,name").order("name")
      ]);
      return {
        companies: compRes.data ?? [],
        countries: countRes.data ?? []
      };
    },
  });

  const { data: profiles, refetch: refetchProfiles } = useQuery({
    queryKey: ["admin-profiles"],
    queryFn: async () => {
      const { data: pData } = await supabase.from("profiles").select("id,email,full_name,company,created_at");
      const { data: rData } = await supabase.from("user_roles").select("user_id,role");
      return (pData ?? []).map(p => ({
        ...p,
        role: rData?.find(r => r.user_id === p.id)?.role || "viewer"
      }));
    },
  });

  const allCompanies = queryData?.companies ?? [];
  const countries = queryData?.countries ?? [];

  const allProfiles = [
    ...(profiles ?? []),
    ...mockProfiles.filter(m => !profiles?.some(p => p.email === m.email))
  ];

  const filteredCompanies = statusFilter === "all" ? allCompanies : allCompanies.filter((c) => c.status === statusFilter);

  const stats = {
    total: allCompanies.length,
    pending: allCompanies.filter((c) => c.status === "pending_review").length,
    verified: allCompanies.filter((c) => c.status === "verified").length,
    users: allProfiles.length,
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase.from("companies").update({ status } as any).eq("id", id);
      if (error) throw error;
      toast.success(`Status updated successfully`);
      refetchCompanies();
    } catch (e: any) {
      toast.error(e.message || "Failed to update status");
    }
  };

  const handleUpdateRole = async (userId: string, newRole: string) => {
    if (userId.startsWith("u")) {
      setMockProfiles(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
      toast.success(`Role updated to ${newRole} for mock user`);
      return;
    }
    try {
      const { data } = await supabase.from("user_roles").select("id").eq("user_id", userId).maybeSingle();
      let res;
      if (data) {
        res = await supabase.from("user_roles").update({ role: newRole } as any).eq("user_id", userId);
      } else {
        res = await supabase.from("user_roles").insert({ user_id: userId, role: newRole } as any);
      }
      if (res.error) throw res.error;
      toast.success(`Role updated to ${newRole} successfully`);
      refetchProfiles();
    } catch (e: unknown) {
      console.error(e);
      toast.error(e instanceof Error ? e.message : "Failed to update role");
    }
  };

  const handleToggleSuspend = (userId: string) => {
    const isSuspended = suspendedUserIds.includes(userId);
    if (isSuspended) {
      setSuspendedUserIds(prev => prev.filter(id => id !== userId));
      toast.success("User account activated");
    } else {
      setSuspendedUserIds(prev => [...prev, userId]);
      toast.error("User account suspended");
    }
  };

  // Open modals
  const handleOpenAddModal = () => {
    setIsEditing(false);
    setEditingCompanyId(null);
    setFormName("");
    setFormSlug("");
    setFormCountry(countries[0]?.code || "IN");
    setFormCity("");
    setFormBusinessType("manufacturer");
    setFormTrustScore("85");
    setFormRiskLevel("low");
    setFormCapacity("");
    setFormMOQ("");
    setFormLeadTime("");
    setFormStatus("pending_review");
    setModalOpen(true);
  };

  const handleOpenEditModal = (c: any) => {
    setIsEditing(true);
    setEditingCompanyId(c.id);
    setFormName(c.name || "");
    setFormSlug(c.slug || "");
    setFormCountry(c.country_code || "IN");
    setFormCity(c.city || "");
    setFormBusinessType(c.business_type || "manufacturer");
    setFormTrustScore(String(c.ai_trust_score ?? 85));
    setFormRiskLevel(c.ai_risk_level || "low");
    setFormCapacity(c.monthly_capacity ? String(c.monthly_capacity) : "");
    setFormMOQ(c.moq ? String(c.moq) : "");
    setFormLeadTime(c.lead_time_days ? String(c.lead_time_days) : "");
    setFormStatus(c.status || "pending_review");
    setModalOpen(true);
  };

  const handleDeleteCompany = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to permanently delete "${name}"?`)) {
      try {
        const { error } = await supabase.from("companies").delete().eq("id", id);
        if (error) throw error;
        toast.success(`Successfully deleted "${name}"`);
        refetchCompanies();
      } catch (e: any) {
        console.error("Delete failed:", e);
        toast.error(e.message || "Delete rejected by RLS. Ensure you have the companies delete policy.");
      }
    }
  };

  const handleSaveCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      toast.error("Company name is required");
      return;
    }

    // Ensure unique slug by appending a short random suffix on creation to bypass key constraints
    const baseSlug = formName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const generatedSlug = formSlug.trim() || (isEditing 
      ? baseSlug 
      : `${baseSlug}-${Math.random().toString(36).substring(2, 6)}`);

    const payload = {
      name: formName.trim(),
      slug: generatedSlug,
      country_code: formCountry,
      city: formCity.trim() || null,
      business_type: formBusinessType,
      ai_trust_score: Number(formTrustScore) || 85,
      ai_risk_level: formRiskLevel,
      monthly_capacity: formCapacity ? Number(formCapacity) : null,
      moq: formMOQ ? Number(formMOQ) : null,
      lead_time_days: formLeadTime ? Number(formLeadTime) : null,
      status: formStatus,
    };

    try {
      if (isEditing && editingCompanyId) {
        const { error } = await supabase.from("companies").update(payload as any).eq("id", editingCompanyId);
        if (error) throw error;
        toast.success(`Successfully updated "${formName}"`);
      } else {
        const { error } = await supabase.from("companies").insert([payload] as any);
        if (error) throw error;
        toast.success(`Successfully added "${formName}"`);
      }
      setModalOpen(false);
      refetchCompanies();
    } catch (e: any) {
      console.error("Save failed:", e);
      toast.error(e.message || e.details || "Failed to save company details due to Supabase RLS policy or format issue");
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="System"
        title="Admin Panel"
        description="Manage company verification, user roles, and platform audit logs."
      />

      {currentUserRole !== "admin" && (
        <div className="p-4 rounded-lg border border-warning/30 bg-warning/5 text-warning text-xs flex flex-col gap-2 font-mono">
          <div className="flex items-start gap-2">
            <AlertOctagon className="h-4 w-4 shrink-0 mt-0.5 text-warning" />
            <div>
              <span className="font-bold uppercase tracking-wider text-amber-500">Security Access Alert:</span> Your current session <strong>({currentUser?.email || "anonymous"})</strong> has database role <span className="underline font-bold">"{currentUserRole}"</span>.
            </div>
          </div>
          <div>
            Supabase Row Level Security (RLS) policies prevent non-admin accounts from writing to the companies registry table.
          </div>
          <div className="mt-1 text-[11px] bg-background/80 p-2.5 rounded border border-border font-mono select-all">
            INSERT INTO public.user_roles (user_id, role) VALUES ('{currentUser?.id || "your-user-id"}', 'admin') ON CONFLICT (user_id, role) DO UPDATE SET role = 'admin';
          </div>
          <div className="text-[10px] text-muted-foreground">
            👉 Copy and run the SQL query above in your Supabase Dashboard SQL Editor to grant yourself Admin rights!
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total Companies" value={stats.total} icon={<Building2 className="h-4 w-4" />} />
        <StatCard label="Pending Review" value={stats.pending} icon={<Clock className="h-4 w-4" />} delta={{ value: "needs action", positive: false }} />
        <StatCard label="Verified" value={stats.verified} icon={<CheckCircle2 className="h-4 w-4" />} delta={{ value: "approved", positive: true }} />
        <StatCard label="Platform Users" value={stats.users} icon={<Users className="h-4 w-4" />} />
      </div>

      {/* Tab navigation */}
      <div className="flex gap-1 border-b border-border overflow-x-auto flex-nowrap whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {([["companies", "Company Management", Building2], ["users", "User Management", Users], ["audit", "Audit Log", ClipboardList]] as const).map(([key, label, Icon]) => (
          <button key={key} onClick={() => setActiveTab(key)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition-colors ${activeTab === key ? "border-primary text-foreground font-medium" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            <Icon className="h-3.5 w-3.5" />{label}
          </button>
        ))}
      </div>

      {/* Company Management */}
      {activeTab === "companies" && (
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-border gap-3 bg-muted/10">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Company Registry</div>
              <div className="font-display font-semibold">Verification queue</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["all", "pending_review", "verified", "rejected", "archived"].map((s) => (
                  <button key={s} onClick={() => setStatusFilter(s)}
                    className={`px-2.5 py-1 rounded text-xs font-mono border capitalize transition-colors ${statusFilter === s ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                    {s === "pending_review" ? "Pending" : s}
                  </button>
                ))}
              </div>
              <Button size="sm" onClick={handleOpenAddModal} className="gap-1.5 text-xs font-mono">
                <Plus className="h-3.5 w-3.5" /> Add Company
              </Button>
            </div>
          </div>

          <div className="divide-y divide-border">
            <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30">
              <div className="col-span-5 sm:col-span-4">Company</div>
              <div className="hidden sm:block col-span-2">Country</div>
              <div className="hidden md:block col-span-2">Type</div>
              <div className="col-span-2 sm:col-span-1 text-right">Trust</div>
              <div className="hidden sm:block col-span-1 text-right">Risk</div>
              <div className="col-span-5 sm:col-span-2 text-right">Actions</div>
            </div>
            
            {filteredCompanies.length === 0 && (
              <div className="p-8 text-center text-sm text-muted-foreground">No companies in this status.</div>
            )}
            
            {filteredCompanies.map((c) => {
              const action = STATUS_ACTIONS[c.status ?? "pending_review"];
              return (
                <div key={c.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
                  <div className="col-span-5 sm:col-span-4 min-w-0">
                    <div className="font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {c.city ? `${c.city}, ` : ""}{c.country_code ?? "—"}
                    </div>
                  </div>
                  <div className="hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate">{c.country_code ?? "—"}</div>
                  <div className="hidden md:block col-span-2 text-xs text-muted-foreground capitalize truncate">{c.business_type ?? "—"}</div>
                  <div className="col-span-2 sm:col-span-1 text-right font-mono tabular-nums">{c.ai_trust_score ?? "—"}</div>
                  <div className="hidden sm:block col-span-1 text-right"><RiskBadge level={c.ai_risk_level} /></div>
                  <div className="col-span-5 sm:col-span-2 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {action && (
                        <button 
                          onClick={() => updateStatus(c.id, action.nextStatus)}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border border-border/80 hover:bg-muted transition-colors ${action.cls}`}
                        >
                          {action.label}
                        </button>
                      )}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-7 w-7 p-0 rounded-md hover:bg-muted">
                            <MoreVertical className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40 font-sans">
                          <DropdownMenuItem onClick={() => handleOpenEditModal(c)} className="gap-2 text-xs cursor-pointer">
                            <Edit3 className="h-3.5 w-3.5" /> Edit Details
                          </DropdownMenuItem>
                          
                          {action && (
                            <DropdownMenuItem onClick={() => updateStatus(c.id, action.nextStatus)} className="gap-2 text-xs cursor-pointer text-success">
                              <CheckCircle2 className="h-3.5 w-3.5" /> {action.label}
                            </DropdownMenuItem>
                          )}
                          
                          {c.status !== 'rejected' && (
                            <DropdownMenuItem onClick={() => updateStatus(c.id, 'rejected')} className="gap-2 text-xs cursor-pointer text-warning">
                              <XCircle className="h-3.5 w-3.5" /> Reject
                            </DropdownMenuItem>
                          )}
                          
                          <DropdownMenuSeparator />
                          
                          <DropdownMenuItem 
                            onClick={() => handleDeleteCompany(c.id, c.name)} 
                            className="gap-2 text-xs text-destructive focus:bg-destructive/10 cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" /> Delete Company
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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
              <div className="col-span-7 sm:col-span-4">User</div>
              <div className="hidden sm:block col-span-3">Company</div>
              <div className="col-span-4 sm:col-span-2">Role</div>
              <div className="hidden md:block col-span-2">Joined</div>
              <div className="col-span-1 text-right">More</div>
            </div>
            {allProfiles.map((u) => (
              <div key={u.id}>
                <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
                  <div className="col-span-7 sm:col-span-4 min-w-0">
                    <div className="font-medium truncate">{u.full_name || "—"}</div>
                    <div className="text-xs text-muted-foreground font-mono truncate">{u.email}</div>
                    <div className="text-xs text-muted-foreground sm:hidden truncate mt-0.5">
                      {(u as any).company || "No Company"}
                    </div>
                  </div>
                  <div className="hidden sm:block col-span-3 text-xs text-muted-foreground truncate">{(u as any).company || "—"}</div>
                  <div className="col-span-4 sm:col-span-2">
                    {suspendedUserIds.includes(u.id) ? (
                      <span className="inline-flex items-center gap-1 rounded border border-destructive/30 bg-destructive/10 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide text-destructive">
                        <AlertOctagon className="h-2.5 w-2.5" /> Suspended
                      </span>
                    ) : (
                      <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${ROLE_COLORS[(u as any).role] ?? ROLE_COLORS.viewer}`}>
                        <ShieldCheck className="h-2.5 w-2.5" />{(u as any).role || "viewer"}
                      </span>
                    )}
                  </div>
                  <div className="hidden md:block col-span-2 text-xs font-mono text-muted-foreground">{new Date(u.created_at).toLocaleDateString("en-US")}</div>
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="outline" className="h-7 text-xs flex items-center gap-1" disabled={suspendedUserIds.includes(u.id)}>
                              Change Role <ChevronDown className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            {["admin", "analyst", "viewer"].map((r) => (
                              <DropdownMenuItem key={r} onClick={() => handleUpdateRole(u.id, r)} className="cursor-pointer">
                                {r.charAt(0).toUpperCase() + r.slice(1)}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleSuspend(u.id)}
                          className={`h-7 text-xs ${
                            suspendedUserIds.includes(u.id)
                              ? "text-success border-success/30 hover:bg-success/10"
                              : "text-destructive border-destructive/30 hover:bg-destructive/10"
                          }`}
                        >
                          {suspendedUserIds.includes(u.id) ? "Unsuspend" : "Suspend"}
                        </Button>
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
              <div className="col-span-4 sm:col-span-3">Action</div>
              <div className="col-span-5 sm:col-span-4">Entity</div>
              <div className="hidden sm:block col-span-3">Actor</div>
              <div className="col-span-3 sm:col-span-2 text-right">When</div>
            </div>
            {MOCK_AUDIT_LOGS.map((log) => (
              <div key={log.id} className="grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors">
                <div className="col-span-4 sm:col-span-3 font-mono text-xs text-primary truncate">{log.action}</div>
                <div className="col-span-5 sm:col-span-4 text-sm min-w-0">
                  <div className="truncate">{log.entity}</div>
                  <div className="text-[10px] text-muted-foreground font-mono truncate sm:hidden mt-0.5">
                    by {log.actor}
                  </div>
                </div>
                <div className="hidden sm:block col-span-3 text-xs text-muted-foreground font-mono truncate">{log.actor}</div>
                <div className="col-span-3 sm:col-span-2 text-right text-xs font-mono text-muted-foreground">
                  {new Date(log.created_at).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CRUD dialog modal for Create and Update */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto bg-card border border-border p-6 font-sans">
          <DialogHeader>
            <DialogTitle className="font-display text-lg font-bold text-foreground">
              {isEditing ? "Edit Company Registry Profile" : "Add New Verified Company"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSaveCompany} className="space-y-4 py-3 text-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="c-name" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Company Name *</Label>
                <Input 
                  id="c-name" 
                  value={formName} 
                  onChange={(e) => setFormName(e.target.value)} 
                  placeholder="e.g. Arvind Mills Ltd" 
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-slug" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Slug (Optional URL segment)</Label>
                <Input 
                  id="c-slug" 
                  value={formSlug} 
                  onChange={(e) => setFormSlug(e.target.value)} 
                  placeholder="e.g. arvind-mills-ltd" 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-country" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Country Hub *</Label>
                <select 
                  id="c-country"
                  value={formCountry}
                  onChange={(e) => setFormCountry(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {countries.map((cnt: any) => (
                    <option key={cnt.code} value={cnt.code}>{cnt.name} ({cnt.code})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-city" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">City</Label>
                <Input 
                  id="c-city" 
                  value={formCity} 
                  onChange={(e) => setFormCity(e.target.value)} 
                  placeholder="e.g. Ahmedabad" 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-type" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Business Category</Label>
                <select 
                  id="c-type"
                  value={formBusinessType}
                  onChange={(e) => setFormBusinessType(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="manufacturer">Manufacturer</option>
                  <option value="supplier">Supplier / Trading House</option>
                  <option value="exporter">Exporter</option>
                  <option value="brand">Brand</option>
                  <option value="organic supplier">Organic Fiber Supplier</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-status" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">System Status</Label>
                <select 
                  id="c-status"
                  value={formStatus}
                  onChange={(e) => setFormStatus(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="pending_review">Pending Review</option>
                  <option value="verified">Verified (Active)</option>
                  <option value="rejected">Rejected</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-trust" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">AI Trust Score (1-100)</Label>
                <Input 
                  id="c-trust" 
                  type="number"
                  min="1"
                  max="100"
                  value={formTrustScore} 
                  onChange={(e) => setFormTrustScore(e.target.value)} 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-risk" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">AI Risk Level</Label>
                <select 
                  id="c-risk"
                  value={formRiskLevel}
                  onChange={(e) => setFormRiskLevel(e.target.value as any)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="low">Low Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="high">High Risk</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-capacity" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Monthly Capacity (meters/month)</Label>
                <Input 
                  id="c-capacity" 
                  type="number" 
                  value={formCapacity} 
                  onChange={(e) => setFormCapacity(e.target.value)} 
                  placeholder="e.g. 1000000" 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-moq" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Minimum Order Qty (MOQ)</Label>
                <Input 
                  id="c-moq" 
                  type="number" 
                  value={formMOQ} 
                  onChange={(e) => setFormMOQ(e.target.value)} 
                  placeholder="e.g. 500" 
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="c-lead" className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Lead Time (Days)</Label>
                <Input 
                  id="c-lead" 
                  type="number" 
                  value={formLeadTime} 
                  onChange={(e) => setFormLeadTime(e.target.value)} 
                  placeholder="e.g. 45" 
                />
              </div>
            </div>

            <DialogFooter className="mt-6 flex justify-end gap-2 border-t border-border pt-4">
              <Button type="button" variant="outline" size="sm" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" size="sm">
                Save Profile
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
