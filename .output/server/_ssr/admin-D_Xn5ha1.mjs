import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { B as ChevronUp, H as ChevronDown, L as Clock, R as ClipboardList, W as Building2, a as Users, et as OctagonAlert, ot as CircleCheck, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuTrigger, n as DropdownMenuContent, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-lm0fXf4o.mjs";
import { t as PageHeader } from "./page-header-CWLuQCbF.mjs";
import { t as StatCard } from "./stat-card-CkcMZbuQ.mjs";
import { t as RiskBadge } from "./risk-badge-kdjMzVg8.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-D_Xn5ha1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_USERS = [
	{
		id: "u1",
		email: "hr.hardik05@gmail.com",
		full_name: "Hardik Parmar",
		company: "GMIntel",
		role: "admin",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 30)).toISOString()
	},
	{
		id: "u2",
		email: "analyst@gmintelhq.com",
		full_name: "Sarah Chen",
		company: "GMIntel",
		role: "analyst",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 20)).toISOString()
	},
	{
		id: "u3",
		email: "buyer@sourcing.co",
		full_name: "Alex Rahman",
		company: "Sourcing Co",
		role: "viewer",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 10)).toISOString()
	},
	{
		id: "u4",
		email: "trade@fashionbrand.eu",
		full_name: "Marie Dubois",
		company: "Fashion Brand EU",
		role: "viewer",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 5)).toISOString()
	}
];
var MOCK_AUDIT_LOGS = [
	{
		id: "a1",
		action: "company.verified",
		entity: "Arvind Mills Ltd",
		actor: "hr.hardik05@gmail.com",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toISOString()
	},
	{
		id: "a2",
		action: "rfq.created",
		entity: "Cotton Greige RFQ",
		actor: "buyer@sourcing.co",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 72e5)).toISOString()
	},
	{
		id: "a3",
		action: "report.generated",
		entity: "Bangladesh Country Report",
		actor: "analyst@gmintelhq.com",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString()
	},
	{
		id: "a4",
		action: "user.signup",
		entity: "trade@fashionbrand.eu",
		actor: "system",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 5)).toISOString()
	},
	{
		id: "a5",
		action: "company.rejected",
		entity: "Unknown Factory CN",
		actor: "hr.hardik05@gmail.com",
		created_at: (/* @__PURE__ */ new Date(Date.now() - 864e5 * 7)).toISOString()
	}
];
var ROLE_COLORS = {
	admin: "text-primary border-primary/30 bg-primary/10",
	analyst: "text-info border-info/30 bg-info/10",
	viewer: "text-muted-foreground border-border bg-muted/20"
};
var STATUS_ACTIONS = {
	pending_review: {
		label: "Verify",
		nextStatus: "verified",
		cls: "text-success border-success/30 hover:bg-success/10"
	},
	verified: {
		label: "Archive",
		nextStatus: "archived",
		cls: "text-muted-foreground border-border hover:bg-muted/40"
	},
	rejected: {
		label: "Re-review",
		nextStatus: "pending_review",
		cls: "text-warning border-warning/30 hover:bg-warning/10"
	},
	archived: {
		label: "Restore",
		nextStatus: "pending_review",
		cls: "text-info border-info/30 hover:bg-info/10"
	}
};
function Page() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("companies");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("pending_review");
	const [expandedUser, setExpandedUser] = (0, import_react.useState)(null);
	const [mockProfiles, setMockProfiles] = (0, import_react.useState)(MOCK_USERS);
	const [suspendedUserIds, setSuspendedUserIds] = (0, import_react.useState)([]);
	const { data: companies, refetch: refetchCompanies } = useQuery({
		queryKey: ["admin-companies"],
		queryFn: async () => {
			return (await supabase.from("companies").select("id,name,country_code,city,business_type,status,ai_risk_level,ai_trust_score,created_at").order("created_at", { ascending: false })).data ?? [];
		}
	});
	const { data: profiles, refetch: refetchProfiles } = useQuery({
		queryKey: ["admin-profiles"],
		queryFn: async () => {
			const { data: pData } = await supabase.from("profiles").select("id,email,full_name,company,created_at");
			const { data: rData } = await supabase.from("user_roles").select("user_id,role");
			return (pData ?? []).map((p) => ({
				...p,
				role: rData?.find((r) => r.user_id === p.id)?.role || "viewer"
			}));
		}
	});
	const allCompanies = companies ?? [];
	const allProfiles = [...profiles ?? [], ...mockProfiles.filter((m) => !profiles?.some((p) => p.email === m.email))];
	const filteredCompanies = statusFilter === "all" ? allCompanies : allCompanies.filter((c) => c.status === statusFilter);
	const stats = {
		total: allCompanies.length,
		pending: allCompanies.filter((c) => c.status === "pending_review").length,
		verified: allCompanies.filter((c) => c.status === "verified").length,
		users: allProfiles.length
	};
	const updateStatus = async (id, status) => {
		await supabase.from("companies").update({ status }).eq("id", id);
		refetchCompanies();
	};
	const handleUpdateRole = async (userId, newRole) => {
		if (userId.startsWith("u")) {
			setMockProfiles((prev) => prev.map((u) => u.id === userId ? {
				...u,
				role: newRole
			} : u));
			toast.success(`Role updated to ${newRole} for mock user`);
			return;
		}
		try {
			const { data } = await supabase.from("user_roles").select("id").eq("user_id", userId).maybeSingle();
			let res;
			if (data) res = await supabase.from("user_roles").update({ role: newRole }).eq("user_id", userId);
			else res = await supabase.from("user_roles").insert({
				user_id: userId,
				role: newRole
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "System",
				title: "Admin Panel",
				description: "Manage company verification, user roles, and platform audit logs."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Companies",
						value: stats.total,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending Review",
						value: stats.pending,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
						delta: {
							value: "needs action",
							positive: false
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Verified",
						value: stats.verified,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }),
						delta: {
							value: "approved",
							positive: true
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Platform Users",
						value: stats.users,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 border-b border-border overflow-x-auto flex-nowrap whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: [
					[
						"companies",
						"Company Management",
						Building2
					],
					[
						"users",
						"User Management",
						Users
					],
					[
						"audit",
						"Audit Log",
						ClipboardList
					]
				].map(([key, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActiveTab(key),
					className: `flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-sm border-b-2 transition-colors ${activeTab === key ? "border-primary text-foreground font-medium" : "border-transparent text-muted-foreground hover:text-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), label]
				}, key))
			}),
			activeTab === "companies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-border gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "Company Registry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Verification queue"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [
							"all",
							"pending_review",
							"verified",
							"rejected",
							"archived"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStatusFilter(s),
							className: `px-2.5 py-1 rounded text-xs font-mono border capitalize transition-colors ${statusFilter === s ? "bg-primary/15 text-primary border-primary/40" : "border-border text-muted-foreground hover:border-primary/30"}`,
							children: s === "pending_review" ? "Pending" : s
						}, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-5 sm:col-span-4",
									children: "Company"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-2",
									children: "Country"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:block col-span-2",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 sm:col-span-1 text-right",
									children: "Trust"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block col-span-1 text-right",
									children: "Risk"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-5 sm:col-span-2 text-right",
									children: "Action"
								})
							]
						}),
						filteredCompanies.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-8 text-center text-sm text-muted-foreground",
							children: "No companies in this status."
						}),
						filteredCompanies.map((c) => {
							const action = STATUS_ACTIONS[c.status ?? "pending_review"];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-5 sm:col-span-4 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium truncate",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground truncate",
											children: [c.city ? `${c.city}, ` : "", c.country_code ?? "—"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block col-span-2 font-mono text-xs text-muted-foreground truncate",
										children: c.country_code ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden md:block col-span-2 text-xs text-muted-foreground capitalize truncate",
										children: c.business_type ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-2 sm:col-span-1 text-right font-mono tabular-nums",
										children: c.ai_trust_score ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block col-span-1 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBadge, { level: c.ai_risk_level })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-5 sm:col-span-2 text-right",
										children: action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => updateStatus(c.id, action.nextStatus),
											className: `text-[10px] font-mono px-2 py-1 rounded border transition-colors ${action.cls} truncate`,
											children: action.label
										})
									})
								]
							}, c.id);
						})
					]
				})]
			}),
			activeTab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "User Registry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "Platform accounts"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-7 sm:col-span-4",
								children: "User"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:block col-span-3",
								children: "Company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4 sm:col-span-2",
								children: "Role"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:block col-span-2",
								children: "Joined"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right",
								children: "More"
							})
						]
					}), allProfiles.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-7 sm:col-span-4 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium truncate",
										children: u.full_name || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground font-mono truncate",
										children: u.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground sm:hidden truncate mt-0.5",
										children: u.company || "No Company"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:block col-span-3 text-xs text-muted-foreground truncate",
								children: u.company || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4 sm:col-span-2",
								children: suspendedUserIds.includes(u.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded border border-destructive/30 bg-destructive/10 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OctagonAlert, { className: "h-2.5 w-2.5" }), " Suspended"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide ${ROLE_COLORS[u.role] ?? ROLE_COLORS.viewer}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-2.5 w-2.5" }), u.role || "viewer"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:block col-span-2 text-xs font-mono text-muted-foreground",
								children: new Date(u.created_at).toLocaleDateString("en-US", { timeZone: "UTC" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setExpandedUser(expandedUser === u.id ? null : u.id),
									className: "text-muted-foreground hover:text-foreground",
									children: expandedUser === u.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
								})
							})
						]
					}), expandedUser === u.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 pb-3 border-t border-border/50 bg-muted/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-3 text-xs text-muted-foreground space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-foreground",
									children: "ID:"
								}),
								" ",
								u.id
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "h-7 text-xs flex items-center gap-1",
										disabled: suspendedUserIds.includes(u.id),
										children: ["Change Role ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
									align: "start",
									children: [
										"admin",
										"analyst",
										"viewer"
									].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onClick: () => handleUpdateRole(u.id, r),
										children: r.charAt(0).toUpperCase() + r.slice(1)
									}, r))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => handleToggleSuspend(u.id),
									className: `h-7 text-xs ${suspendedUserIds.includes(u.id) ? "text-success border-success/30 hover:bg-success/10" : "text-destructive border-destructive/30 hover:bg-destructive/10"}`,
									children: suspendedUserIds.includes(u.id) ? "Unsuspend" : "Suspend"
								})]
							})]
						})
					})] }, u.id))]
				})]
			}),
			activeTab === "audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary",
						children: "Audit Trail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: "System event log"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4 sm:col-span-3",
								children: "Action"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-5 sm:col-span-4",
								children: "Entity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:block col-span-3",
								children: "Actor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3 sm:col-span-2 text-right",
								children: "When"
							})
						]
					}), MOCK_AUDIT_LOGS.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-2 px-4 py-3 text-sm items-center hover:bg-muted/40 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-4 sm:col-span-3 font-mono text-xs text-primary truncate",
								children: log.action
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-5 sm:col-span-4 text-sm min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate",
									children: log.entity
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground font-mono truncate sm:hidden mt-0.5",
									children: ["by ", log.actor]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:block col-span-3 text-xs text-muted-foreground font-mono truncate",
								children: log.actor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3 sm:col-span-2 text-right text-xs font-mono text-muted-foreground",
								children: new Date(log.created_at).toLocaleString([], {
									month: "short",
									day: "numeric",
									hour: "2-digit",
									minute: "2-digit"
								})
							})
						]
					}, log.id))]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
