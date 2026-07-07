import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import {
  a as DialogOverlay$1,
  i as DialogDescription$1,
  n as DialogClose,
  o as DialogPortal$1,
  r as DialogContent$1,
  s as DialogTitle$1,
  t as Dialog$1,
} from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import {
  G as Building2,
  R as Clock,
  U as ChevronDown,
  V as ChevronUp,
  a as Users,
  ct as CircleX,
  d as ShieldCheck,
  l as Trash2,
  n as X,
  nt as OctagonAlert,
  ot as EllipsisVertical,
  tt as PenLine,
  ut as CircleCheck,
  v as Plus,
  z as ClipboardList,
} from "../_libs/lucide-react.mjs";
import {
  a as DropdownMenuTrigger,
  i as DropdownMenuSeparator,
  n as DropdownMenuContent,
  r as DropdownMenuItem,
  t as DropdownMenu,
} from "./dropdown-menu-lm0fXf4o.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { n as Label, t as Input } from "./label-B7oQAA24.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-D9dIwcJ2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
  }),
);
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(
  ({ className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
          ref,
          className: cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
            className,
          ),
          ...props,
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                  className: "h-4 w-4",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
);
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    ),
    ...props,
  });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    ),
    ...props,
  });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    ),
    ...props,
  }),
);
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(
  ({ className, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props,
    }),
);
DialogDescription.displayName = DialogDescription$1.displayName;
var MOCK_USERS = [
  {
    id: "u1",
    email: "hr.hardik05@gmail.com",
    full_name: "Hardik Parmar",
    company: "GMIntel",
    role: "admin",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 30).toISOString(),
  },
  {
    id: "u2",
    email: "analyst@gmintelhq.com",
    full_name: "Sarah Chen",
    company: "GMIntel",
    role: "analyst",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 20).toISOString(),
  },
  {
    id: "u3",
    email: "buyer@sourcing.co",
    full_name: "Alex Rahman",
    company: "Sourcing Co",
    role: "viewer",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 10).toISOString(),
  },
  {
    id: "u4",
    email: "trade@fashionbrand.eu",
    full_name: "Marie Dubois",
    company: "Fashion Brand EU",
    role: "viewer",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 5).toISOString(),
  },
];
var MOCK_AUDIT_LOGS = [
  {
    id: "a1",
    action: "company.verified",
    entity: "Arvind Mills Ltd",
    actor: "hr.hardik05@gmail.com",
    created_at: /* @__PURE__ */ new Date(Date.now() - 36e5).toISOString(),
  },
  {
    id: "a2",
    action: "rfq.created",
    entity: "Cotton Greige RFQ",
    actor: "buyer@sourcing.co",
    created_at: /* @__PURE__ */ new Date(Date.now() - 72e5).toISOString(),
  },
  {
    id: "a3",
    action: "report.generated",
    entity: "Bangladesh Country Report",
    actor: "analyst@gmintelhq.com",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5).toISOString(),
  },
  {
    id: "a4",
    action: "user.signup",
    entity: "trade@fashionbrand.eu",
    actor: "system",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 5).toISOString(),
  },
  {
    id: "a5",
    action: "company.rejected",
    entity: "Unknown Factory CN",
    actor: "hr.hardik05@gmail.com",
    created_at: /* @__PURE__ */ new Date(Date.now() - 864e5 * 7).toISOString(),
  },
];
var ROLE_COLORS = {
  admin: "text-primary border-primary/30 bg-primary/10",
  analyst: "text-info border-info/30 bg-info/10",
  viewer: "text-muted-foreground border-border bg-muted/20",
};
var STATUS_ACTIONS = {
  pending_review: {
    label: "Verify",
    nextStatus: "verified",
    cls: "text-success",
  },
  verified: {
    label: "Archive",
    nextStatus: "archived",
    cls: "text-muted-foreground",
  },
  rejected: {
    label: "Re-review",
    nextStatus: "pending_review",
    cls: "text-warning",
  },
  archived: {
    label: "Restore",
    nextStatus: "pending_review",
    cls: "text-info",
  },
};
function Page() {
  const [activeTab, setActiveTab] = (0, import_react.useState)("companies");
  const [statusFilter, setStatusFilter] = (0, import_react.useState)(
    "pending_review",
  );
  const [expandedUser, setExpandedUser] = (0, import_react.useState)(null);
  const [mockProfiles, setMockProfiles] = (0, import_react.useState)(
    MOCK_USERS,
  );
  const [suspendedUserIds, setSuspendedUserIds] = (0, import_react.useState)(
    [],
  );
  const [currentUser, setCurrentUser] = (0, import_react.useState)(null);
  const [currentUserRole, setCurrentUserRole] = (0, import_react.useState)(
    "viewer",
  );
  (0, import_react.useEffect)(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setCurrentUser(user);
        supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .maybeSingle()
          .then(({ data }) => {
            if (data) setCurrentUserRole(data.role);
          });
      }
    });
  }, []);
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  const [isEditing, setIsEditing] = (0, import_react.useState)(false);
  const [editingCompanyId, setEditingCompanyId] = (0, import_react.useState)(
    null,
  );
  const [formName, setFormName] = (0, import_react.useState)("");
  const [formSlug, setFormSlug] = (0, import_react.useState)("");
  const [formCountry, setFormCountry] = (0, import_react.useState)("IN");
  const [formCity, setFormCity] = (0, import_react.useState)("");
  const [formBusinessType, setFormBusinessType] = (0, import_react.useState)(
    "manufacturer",
  );
  const [formTrustScore, setFormTrustScore] = (0, import_react.useState)("85");
  const [formRiskLevel, setFormRiskLevel] = (0, import_react.useState)("low");
  const [formCapacity, setFormCapacity] = (0, import_react.useState)("");
  const [formMOQ, setFormMOQ] = (0, import_react.useState)("");
  const [formLeadTime, setFormLeadTime] = (0, import_react.useState)("");
  const [formStatus, setFormStatus] = (0, import_react.useState)(
    "pending_review",
  );
  const { data: queryData, refetch: refetchCompanies } = useQuery({
    queryKey: ["admin-companies"],
    queryFn: async () => {
      const [compRes, countRes] = await Promise.all([
        supabase
          .from("companies")
          .select(
            "id,slug,name,country_code,city,business_type,status,ai_risk_level,ai_trust_score,monthly_capacity,moq,lead_time_days,created_at",
          )
          .order("created_at", { ascending: false }),
        supabase.from("countries").select("code,name").order("name"),
      ]);
      return {
        companies: compRes.data ?? [],
        countries: countRes.data ?? [],
      };
    },
  });
  const { data: profiles, refetch: refetchProfiles } = useQuery({
    queryKey: ["admin-profiles"],
    queryFn: async () => {
      const { data: pData } = await supabase
        .from("profiles")
        .select("id,email,full_name,company,created_at");
      const { data: rData } = await supabase
        .from("user_roles")
        .select("user_id,role");
      return (pData ?? []).map((p) => ({
        ...p,
        role: rData?.find((r) => r.user_id === p.id)?.role || "viewer",
      }));
    },
  });
  const allCompanies = queryData?.companies ?? [];
  const countries = queryData?.countries ?? [];
  const allProfiles = [
    ...(profiles ?? []),
    ...mockProfiles.filter((m) => !profiles?.some((p) => p.email === m.email)),
  ];
  const filteredCompanies =
    statusFilter === "all"
      ? allCompanies
      : allCompanies.filter((c) => c.status === statusFilter);
  const stats = {
    total: allCompanies.length,
    pending: allCompanies.filter((c) => c.status === "pending_review").length,
    verified: allCompanies.filter((c) => c.status === "verified").length,
    users: allProfiles.length,
  };
  const updateStatus = async (id, status) => {
    try {
      const { error } = await supabase
        .from("companies")
        .update({ status })
        .eq("id", id);
      if (error) throw error;
      toast.success(`Status updated successfully`);
      refetchCompanies();
    } catch (e) {
      toast.error(e.message || "Failed to update status");
    }
  };
  const handleUpdateRole = async (userId, newRole) => {
    if (userId.startsWith("u")) {
      setMockProfiles((prev) =>
        prev.map((u) =>
          u.id === userId
            ? {
                ...u,
                role: newRole,
              }
            : u,
        ),
      );
      toast.success(`Role updated to ${newRole} for mock user`);
      return;
    }
    try {
      const { data } = await supabase
        .from("user_roles")
        .select("id")
        .eq("user_id", userId)
        .maybeSingle();
      let res;
      if (data)
        res = await supabase
          .from("user_roles")
          .update({ role: newRole })
          .eq("user_id", userId);
      else
        res = await supabase.from("user_roles").insert({
          user_id: userId,
          role: newRole,
        });
      if (res.error) throw res.error;
      toast.success(`Role updated to ${newRole} successfully`);
      refetchProfiles();
    } catch (e) {
      console.error(e);
      toast.error(e instanceof Error ? e.message : "Failed to update role");
    }
  };
  const handleToggleSuspend = (userId) => {
    if (suspendedUserIds.includes(userId)) {
      setSuspendedUserIds((prev) => prev.filter((id) => id !== userId));
      toast.success("User account activated");
    } else {
      setSuspendedUserIds((prev) => [...prev, userId]);
      toast.error("User account suspended");
    }
  };
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
  const handleOpenEditModal = (c) => {
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
  const handleDeleteCompany = async (id, name) => {
    if (
      window.confirm(`Are you sure you want to permanently delete "${name}"?`)
    )
      try {
        const { error } = await supabase
          .from("companies")
          .delete()
          .eq("id", id);
        if (error) throw error;
        toast.success(`Successfully deleted "${name}"`);
        refetchCompanies();
      } catch (e) {
        console.error("Delete failed:", e);
        toast.error(
          e.message ||
            "Delete rejected by RLS. Ensure you have the companies delete policy.",
        );
      }
  };
  const handleSaveCompany = async (e) => {
    e.preventDefault();
    if (!formName.trim()) {
      toast.error("Company name is required");
      return;
    }
    const baseSlug = formName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const generatedSlug =
      formSlug.trim() ||
      (isEditing
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
        const { error } = await supabase
          .from("companies")
          .update(payload)
          .eq("id", editingCompanyId);
        if (error) throw error;
        toast.success(`Successfully updated "${formName}"`);
      } else {
        const { error } = await supabase.from("companies").insert([payload]);
        if (error) throw error;
        toast.success(`Successfully added "${formName}"`);
      }
      setModalOpen(false);
      refetchCompanies();
    } catch (e) {
      console.error("Save failed:", e);
      toast.error(
        e.message ||
          e.details ||
          "Failed to save company details due to Supabase RLS policy or format issue",
      );
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        eyebrow: "System",
        title: "Admin Panel",
        description:
          "Manage company verification, user roles, and platform audit logs.",
      }),
      currentUserRole !== "admin" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "p-4 rounded-lg border border-warning/30 bg-warning/5 text-warning text-xs flex flex-col gap-2 font-mono",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-start gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonAlert, {
                  className: "h-4 w-4 shrink-0 mt-0.5 text-warning",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "font-bold uppercase tracking-wider text-amber-500",
                      children: "Security Access Alert:",
                    }),
                    " Your current session ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
                      children: ["(", currentUser?.email || "anonymous", ")"],
                    }),
                    " has database role ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "underline font-bold",
                      children: ['"', currentUserRole, '"'],
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              children:
                "Supabase Row Level Security (RLS) policies prevent non-admin accounts from writing to the companies registry table.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "mt-1 text-[11px] bg-background/80 p-2.5 rounded border border-border font-mono select-all",
              children: [
                "INSERT INTO public.user_roles (user_id, role) VALUES ('",
                currentUser?.id || "your-user-id",
                "', 'admin') ON CONFLICT (user_id, role) DO UPDATE SET role = 'admin';",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "text-[10px] text-muted-foreground",
              children:
                "👉 Copy and run the SQL query above in your Supabase Dashboard SQL Editor to grant yourself Admin rights!",
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Total Companies",
            value: stats.total,
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
              className: "h-4 w-4",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Pending Review",
            value: stats.pending,
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
              className: "h-4 w-4",
            }),
            delta: {
              value: "needs action",
              positive: false,
            },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Verified",
            value: stats.verified,
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
              className: "h-4 w-4",
            }),
            delta: {
              value: "approved",
              positive: true,
            },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
            label: "Platform Users",
            value: stats.users,
            icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
              className: "h-4 w-4",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "flex gap-1 border-b border-border overflow-x-auto flex-nowrap whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        children: [
          ["companies", "Company Management", Building2],
          ["users", "User Management", Users],
          ["audit", "Audit Log", ClipboardList],
        ].map(([key, label, Icon]) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              onClick: () => setActiveTab(key),
              className: `flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition-colors ${activeTab === key ? "border-primary text-foreground font-medium" : "border-transparent text-muted-foreground hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                  className: "h-3.5 w-3.5",
                }),
                label,
              ],
            },
            key,
          ),
        ),
      }),
      activeTab === "companies" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "rounded-lg border border-border bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-border gap-3 bg-muted/10",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "text-[10px] font-mono uppercase tracking-widest text-primary",
                      children: "Company Registry",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "font-display font-semibold",
                      children: "Verification queue",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "flex flex-wrap gap-1.5",
                      children: [
                        "all",
                        "pending_review",
                        "verified",
                        "rejected",
                        "archived",
                      ].map((s) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "button",
                          {
                            onClick: () => setStatusFilter(s),
                            className: `px-2.5 py-1 rounded text-xs font-mono border capitalize transition-colors ${statusFilter === s ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`,
                            children: s === "pending_review" ? "Pending" : s,
                          },
                          s,
                        ),
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                      size: "sm",
                      onClick: handleOpenAddModal,
                      className: "gap-1.5 text-xs font-mono",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
                          className: "h-3.5 w-3.5",
                        }),
                        " Add Company",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "divide-y divide-border",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-5 sm:col-span-4",
                      children: "Company",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden sm:block col-span-2",
                      children: "Country",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden md:block col-span-2",
                      children: "Type",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-2 sm:col-span-1 text-right",
                      children: "Trust",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden sm:block col-span-1 text-right",
                      children: "Risk",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-5 sm:col-span-2 text-right",
                      children: "Actions",
                    }),
                  ],
                }),
                filteredCompanies.length === 0 &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "p-8 text-center text-sm text-muted-foreground",
                    children: "No companies in this status.",
                  }),
                filteredCompanies.map((c) => {
                  const action = STATUS_ACTIONS[c.status ?? "pending_review"];
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "col-span-5 sm:col-span-4 min-w-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "font-medium truncate",
                              children: c.name,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "text-xs text-muted-foreground truncate",
                                children: [
                                  c.city ? `${c.city}, ` : "",
                                  c.country_code ?? "—",
                                ],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate",
                          children: c.country_code ?? "—",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "hidden md:block col-span-2 text-xs text-muted-foreground capitalize truncate",
                          children: c.business_type ?? "—",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "col-span-2 sm:col-span-1 text-right font-mono tabular-nums",
                          children: c.ai_trust_score ?? "—",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "hidden sm:block col-span-1 text-right",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            RiskBadge,
                            { level: c.ai_risk_level },
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "col-span-5 sm:col-span-2 text-right",
                          children: /* @__PURE__ */ (0,
                          import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-end gap-1.5",
                            children: [
                              action &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "button",
                                  {
                                    onClick: () =>
                                      updateStatus(c.id, action.nextStatus),
                                    className: `text-[10px] font-mono px-2 py-0.5 rounded border border-border/80 hover:bg-muted transition-colors ${action.cls}`,
                                    children: action.label,
                                  },
                                ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                DropdownMenu,
                                {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      DropdownMenuTrigger,
                                      {
                                        asChild: true,
                                        children: /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(Button, {
                                          variant: "ghost",
                                          size: "icon",
                                          className:
                                            "h-7 w-7 p-0 rounded-md hover:bg-muted",
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(
                                            EllipsisVertical,
                                            {
                                              className:
                                                "h-4 w-4 text-muted-foreground",
                                            },
                                          ),
                                        }),
                                      },
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)(
                                      DropdownMenuContent,
                                      {
                                        align: "end",
                                        className: "w-40 font-sans",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            DropdownMenuItem,
                                            {
                                              onClick: () =>
                                                handleOpenEditModal(c),
                                              className:
                                                "gap-2 text-xs cursor-pointer",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  PenLine,
                                                  { className: "h-3.5 w-3.5" },
                                                ),
                                                " Edit Details",
                                              ],
                                            },
                                          ),
                                          action &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              DropdownMenuItem,
                                              {
                                                onClick: () =>
                                                  updateStatus(
                                                    c.id,
                                                    action.nextStatus,
                                                  ),
                                                className:
                                                  "gap-2 text-xs cursor-pointer text-success",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    CircleCheck,
                                                    {
                                                      className: "h-3.5 w-3.5",
                                                    },
                                                  ),
                                                  " ",
                                                  action.label,
                                                ],
                                              },
                                            ),
                                          c.status !== "rejected" &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)(
                                              DropdownMenuItem,
                                              {
                                                onClick: () =>
                                                  updateStatus(
                                                    c.id,
                                                    "rejected",
                                                  ),
                                                className:
                                                  "gap-2 text-xs cursor-pointer text-warning",
                                                children: [
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    CircleX,
                                                    {
                                                      className: "h-3.5 w-3.5",
                                                    },
                                                  ),
                                                  " Reject",
                                                ],
                                              },
                                            ),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(
                                            DropdownMenuSeparator,
                                            {},
                                          ),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            DropdownMenuItem,
                                            {
                                              onClick: () =>
                                                handleDeleteCompany(
                                                  c.id,
                                                  c.name,
                                                ),
                                              className:
                                                "gap-2 text-xs text-destructive focus:bg-destructive/10 cursor-pointer",
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  Trash2,
                                                  { className: "h-3.5 w-3.5" },
                                                ),
                                                " Delete Company",
                                              ],
                                            },
                                          ),
                                        ],
                                      },
                                    ),
                                  ],
                                },
                              ),
                            ],
                          }),
                        }),
                      ],
                    },
                    c.id,
                  );
                }),
              ],
            }),
          ],
        }),
      activeTab === "users" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "rounded-lg border border-border bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "p-4 border-b border-border",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "text-[10px] font-mono uppercase tracking-widest text-primary",
                  children: "User Registry",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "font-display font-semibold",
                  children: "Platform accounts",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "divide-y divide-border",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-7 sm:col-span-4",
                      children: "User",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden sm:block col-span-3",
                      children: "Company",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-4 sm:col-span-2",
                      children: "Role",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden md:block col-span-2",
                      children: "Joined",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-1 text-right",
                      children: "More",
                    }),
                  ],
                }),
                allProfiles.map((u) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "col-span-7 sm:col-span-4 min-w-0",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "font-medium truncate",
                                      children: u.full_name || "—",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "text-xs text-muted-foreground font-mono truncate",
                                      children: u.email,
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className:
                                        "text-xs text-muted-foreground sm:hidden truncate mt-0.5",
                                      children: u.company || "No Company",
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "hidden sm:block col-span-3 text-xs text-muted-foreground truncate",
                              children: u.company || "—",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "col-span-4 sm:col-span-2",
                              children: suspendedUserIds.includes(u.id)
                                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "inline-flex items-center gap-1 rounded border border-destructive/30 bg-destructive/10 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide text-destructive",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(OctagonAlert, {
                                          className: "h-2.5 w-2.5",
                                        }),
                                        " Suspended",
                                      ],
                                    },
                                  )
                                : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "span",
                                    {
                                      className: `inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${ROLE_COLORS[u.role] ?? ROLE_COLORS.viewer}`,
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)(ShieldCheck, {
                                          className: "h-2.5 w-2.5",
                                        }),
                                        u.role || "viewer",
                                      ],
                                    },
                                  ),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "hidden md:block col-span-2 text-xs font-mono text-muted-foreground",
                              children: new Date(
                                u.created_at,
                              ).toLocaleDateString("en-US"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "col-span-1 text-right",
                              children: /* @__PURE__ */ (0,
                              import_jsx_runtime.jsx)("button", {
                                onClick: () =>
                                  setExpandedUser(
                                    expandedUser === u.id ? null : u.id,
                                  ),
                                className:
                                  "text-muted-foreground hover:text-foreground",
                                children:
                                  expandedUser === u.id
                                    ? /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(ChevronUp, {
                                        className: "h-4 w-4",
                                      })
                                    : /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(ChevronDown, {
                                        className: "h-4 w-4",
                                      }),
                              }),
                            }),
                          ],
                        }),
                        expandedUser === u.id &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "px-4 pb-3 border-t border-border/50 bg-muted/10",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsxs)("div", {
                              className:
                                "pt-3 text-xs text-muted-foreground space-y-1",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)("span", {
                                        className: "font-mono text-foreground",
                                        children: "ID:",
                                      }),
                                      " ",
                                      u.id,
                                    ],
                                  },
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: "flex gap-2 mt-2",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)(DropdownMenu, {
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(
                                            DropdownMenuTrigger,
                                            {
                                              asChild: true,
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsxs)(Button, {
                                                size: "sm",
                                                variant: "outline",
                                                className:
                                                  "h-7 text-xs flex items-center gap-1",
                                                disabled:
                                                  suspendedUserIds.includes(
                                                    u.id,
                                                  ),
                                                children: [
                                                  "Change Role ",
                                                  /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    ChevronDown,
                                                    { className: "h-3 w-3" },
                                                  ),
                                                ],
                                              }),
                                            },
                                          ),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(
                                            DropdownMenuContent,
                                            {
                                              align: "start",
                                              children: [
                                                "admin",
                                                "analyst",
                                                "viewer",
                                              ].map((r) =>
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(
                                                  DropdownMenuItem,
                                                  {
                                                    onClick: () =>
                                                      handleUpdateRole(u.id, r),
                                                    className: "cursor-pointer",
                                                    children:
                                                      r
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                      r.slice(1),
                                                  },
                                                  r,
                                                ),
                                              ),
                                            },
                                          ),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(Button, {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: () =>
                                          handleToggleSuspend(u.id),
                                        className: `h-7 text-xs ${suspendedUserIds.includes(u.id) ? "text-success border-success/30 hover:bg-success/10" : "text-destructive border-destructive/30 hover:bg-destructive/10"}`,
                                        children: suspendedUserIds.includes(
                                          u.id,
                                        )
                                          ? "Unsuspend"
                                          : "Suspend",
                                      }),
                                    ],
                                  },
                                ),
                              ],
                            }),
                          }),
                      ],
                    },
                    u.id,
                  ),
                ),
              ],
            }),
          ],
        }),
      activeTab === "audit" &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "rounded-lg border border-border bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "p-4 border-b border-border",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "text-[10px] font-mono uppercase tracking-widest text-primary",
                  children: "Audit Trail",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "font-display font-semibold",
                  children: "System event log",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "divide-y divide-border",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-4 sm:col-span-3",
                      children: "Action",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-5 sm:col-span-4",
                      children: "Entity",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden sm:block col-span-3",
                      children: "Actor",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "col-span-3 sm:col-span-2 text-right",
                      children: "When",
                    }),
                  ],
                }),
                MOCK_AUDIT_LOGS.map((log) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "col-span-4 sm:col-span-3 font-mono text-xs text-primary truncate",
                          children: log.action,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "col-span-5 sm:col-span-4 text-sm min-w-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "truncate",
                              children: log.entity,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "text-[10px] text-muted-foreground font-mono truncate sm:hidden mt-0.5",
                                children: ["by ", log.actor],
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "hidden sm:block col-span-3 text-xs text-muted-foreground font-mono truncate",
                          children: log.actor,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "col-span-3 sm:col-span-2 text-right text-xs font-mono text-muted-foreground",
                          children: new Date(log.created_at).toLocaleString(
                            [],
                            {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          ),
                        }),
                      ],
                    },
                    log.id,
                  ),
                ),
              ],
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
        open: modalOpen,
        onOpenChange: setModalOpen,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
          className:
            "sm:max-w-xl max-h-[90vh] overflow-y-auto bg-card border border-border p-6 font-sans",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                DialogTitle,
                {
                  className: "font-display text-lg font-bold text-foreground",
                  children: isEditing
                    ? "Edit Company Registry Profile"
                    : "Add New Verified Company",
                },
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
              onSubmit: handleSaveCompany,
              className: "space-y-4 py-3 text-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "grid sm:grid-cols-2 gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-name",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Company Name *",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-name",
                          value: formName,
                          onChange: (e) => setFormName(e.target.value),
                          placeholder: "e.g. Arvind Mills Ltd",
                          required: true,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-slug",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Slug (Optional URL segment)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-slug",
                          value: formSlug,
                          onChange: (e) => setFormSlug(e.target.value),
                          placeholder: "e.g. arvind-mills-ltd",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-country",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Country Hub *",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
                          id: "c-country",
                          value: formCountry,
                          onChange: (e) => setFormCountry(e.target.value),
                          className:
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                          children: countries.map((cnt) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "option",
                              {
                                value: cnt.code,
                                children: [cnt.name, " (", cnt.code, ")"],
                              },
                              cnt.code,
                            ),
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-city",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "City",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-city",
                          value: formCity,
                          onChange: (e) => setFormCity(e.target.value),
                          placeholder: "e.g. Ahmedabad",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-type",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Business Category",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                          id: "c-type",
                          value: formBusinessType,
                          onChange: (e) => setFormBusinessType(e.target.value),
                          className:
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "manufacturer",
                                children: "Manufacturer",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "supplier",
                                children: "Supplier / Trading House",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "exporter",
                                children: "Exporter",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "brand",
                                children: "Brand",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "organic supplier",
                                children: "Organic Fiber Supplier",
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-status",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "System Status",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                          id: "c-status",
                          value: formStatus,
                          onChange: (e) => setFormStatus(e.target.value),
                          className:
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "pending_review",
                                children: "Pending Review",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "verified",
                                children: "Verified (Active)",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "rejected",
                                children: "Rejected",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "archived",
                                children: "Archived",
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-trust",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "AI Trust Score (1-100)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-trust",
                          type: "number",
                          min: "1",
                          max: "100",
                          value: formTrustScore,
                          onChange: (e) => setFormTrustScore(e.target.value),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-risk",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "AI Risk Level",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                          id: "c-risk",
                          value: formRiskLevel,
                          onChange: (e) => setFormRiskLevel(e.target.value),
                          className:
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "low",
                                children: "Low Risk",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "medium",
                                children: "Medium Risk",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: "high",
                                children: "High Risk",
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-capacity",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Monthly Capacity (meters/month)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-capacity",
                          type: "number",
                          value: formCapacity,
                          onChange: (e) => setFormCapacity(e.target.value),
                          placeholder: "e.g. 1000000",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-moq",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Minimum Order Qty (MOQ)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-moq",
                          type: "number",
                          value: formMOQ,
                          onChange: (e) => setFormMOQ(e.target.value),
                          placeholder: "e.g. 500",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5 sm:col-span-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "c-lead",
                          className:
                            "text-xs text-muted-foreground uppercase font-mono tracking-wide",
                          children: "Lead Time (Days)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "c-lead",
                          type: "number",
                          value: formLeadTime,
                          onChange: (e) => setFormLeadTime(e.target.value),
                          placeholder: "e.g. 45",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
                  className:
                    "mt-6 flex justify-end gap-2 border-t border-border pt-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => setModalOpen(false),
                      children: "Cancel",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      type: "submit",
                      size: "sm",
                      children: "Save Profile",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { Page as component };
