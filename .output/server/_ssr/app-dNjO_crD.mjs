import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BST6wkjw.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { $ as Sparkles, C as Map, E as LayoutDashboard, I as Command, K as Bell, O as GitCompare, P as Download, R as ClipboardList, S as Menu, W as Building2, d as ShieldAlert, f as Settings, g as Radar, k as FileText, m as Search, s as TrendingUp, ut as ChartColumn, v as Newspaper, x as MessageSquare } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuTrigger, i as DropdownMenuSeparator, n as DropdownMenuContent, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-lm0fXf4o.mjs";
import { n as SheetContent, o as SheetTrigger, t as Sheet } from "./sheet-C1vjnj_d.mjs";
import { N as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-dNjO_crD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_ITEMS = [
	{
		to: "/app",
		label: "Dashboard",
		icon: LayoutDashboard,
		section: "core"
	},
	{
		to: "/app/companies",
		label: "Companies",
		icon: Building2,
		section: "core"
	},
	{
		to: "/app/search",
		label: "Smart Search",
		icon: Search,
		section: "core",
		badge: "AI"
	},
	{
		to: "/app/chat",
		label: "AI Assistant",
		icon: MessageSquare,
		section: "core",
		badge: "AI"
	},
	{
		to: "/app/discovery",
		label: "Discovery",
		icon: Radar,
		section: "intel",
		badge: "AI"
	},
	{
		to: "/app/compare",
		label: "Compare",
		icon: GitCompare,
		section: "intel"
	},
	{
		to: "/app/risk",
		label: "Risk Engine",
		icon: ShieldAlert,
		section: "intel",
		badge: "AI"
	},
	{
		to: "/app/prices",
		label: "Price Intel",
		icon: TrendingUp,
		section: "intel"
	},
	{
		to: "/app/market",
		label: "Market Intel",
		icon: Sparkles,
		section: "intel"
	},
	{
		to: "/app/news",
		label: "News",
		icon: Newspaper,
		section: "intel"
	},
	{
		to: "/app/procurement",
		label: "Procurement",
		icon: ClipboardList,
		section: "workflow",
		badge: "AI"
	},
	{
		to: "/app/reports",
		label: "Reports",
		icon: FileText,
		section: "workflow"
	},
	{
		to: "/app/map",
		label: "World Map",
		icon: Map,
		section: "workflow"
	},
	{
		to: "/app/analytics",
		label: "Analytics",
		icon: ChartColumn,
		section: "workflow"
	},
	{
		to: "/app/admin",
		label: "Admin",
		icon: Settings,
		section: "admin"
	}
];
var SECTIONS = {
	core: "Command Center",
	intel: "Intelligence",
	workflow: "Workflows",
	admin: "System"
};
function usePwa() {
	const [deferredPrompt, setDeferredPrompt] = (0, import_react.useState)(null);
	const [isInstallable, setIsInstallable] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			e.preventDefault();
			setDeferredPrompt(e);
			setIsInstallable(true);
		};
		window.addEventListener("beforeinstallprompt", handler);
		if (window.matchMedia("(display-mode: standalone)").matches) setIsInstallable(false);
		return () => {
			window.removeEventListener("beforeinstallprompt", handler);
		};
	}, []);
	const install = async () => {
		if (!deferredPrompt) return;
		await deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		console.log(`User response to the install prompt: ${outcome}`);
		setDeferredPrompt(null);
		setIsInstallable(false);
	};
	return {
		isInstallable,
		install
	};
}
function AppSidebar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden md:flex w-60 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/gmintel_logo.png",
					alt: "GMIntel Logo",
					className: "h-7 w-7 rounded-md object-cover border border-border/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-bold leading-none",
					children: "GMIntel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5",
					children: "Textile · AI"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse" }), "LIVE · v1.0"]
				})
			})
		]
	});
}
function SidebarContent({ onItemClick }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { isInstallable, install } = usePwa();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col justify-between overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex-1 overflow-y-auto py-3 px-2 space-y-4",
			children: [
				"core",
				"intel",
				"workflow",
				"admin"
			].map((k) => ({
				key: k,
				label: SECTIONS[k],
				items: NAV_ITEMS.filter((i) => i.section === k)
			})).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pb-1.5 text-[10px] uppercase tracking-widest text-muted-foreground/70 font-medium",
				children: g.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-0.5",
				children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLink, {
					item,
					active: isActive(pathname, item.to),
					onClick: onItemClick
				}, item.to))
			})] }, g.key))
		}), isInstallable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-2 mb-3 p-3 rounded-lg border border-border bg-muted/30 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-semibold",
				children: "Offline Access Available"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					install();
					if (onItemClick) onItemClick();
				},
				className: "w-full flex items-center justify-center gap-1.5 rounded bg-primary hover:bg-primary/95 text-primary-foreground py-1 px-2 text-xs font-semibold transition-all shadow shadow-primary/10 cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), "Install App"]
			})]
		})]
	});
}
function isActive(pathname, to) {
	if (to === "/app") return pathname === "/app" || pathname === "/app/";
	return pathname === to || pathname.startsWith(to + "/");
}
function SidebarLink({ item, active, onClick }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		onClick,
		className: cn("group flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors", active ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1",
				children: item.label
			}),
			item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/15 text-primary font-semibold",
				children: item.badge
			})
		]
	});
}
function useAuth() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_ev, s) => {
			setSession(s);
			setUser(s?.user ?? null);
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setUser(data.session?.user ?? null);
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	return {
		session,
		user,
		loading,
		signOut: () => supabase.auth.signOut()
	};
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
function AppTopbar() {
	const { user, signOut } = useAuth();
	const [open, setOpen] = (0, import_react.useState)(false);
	const isMobile = useIsMobile();
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const loadNotifications = () => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("gmintel_notifications");
			setNotifications(stored ? JSON.parse(stored) : []);
		}
	};
	(0, import_react.useEffect)(() => {
		loadNotifications();
		window.addEventListener("storage", loadNotifications);
		window.addEventListener("gmintel_new_notification", loadNotifications);
		return () => {
			window.removeEventListener("storage", loadNotifications);
			window.removeEventListener("gmintel_new_notification", loadNotifications);
		};
	}, []);
	const unreadCount = notifications.filter((n) => !n.read).length;
	const markAllAsRead = () => {
		const next = notifications.map((n) => ({
			...n,
			read: true
		}));
		setNotifications(next);
		localStorage.setItem("gmintel_notifications", JSON.stringify(next));
	};
	const clearAll = () => {
		setNotifications([]);
		localStorage.setItem("gmintel_notifications", JSON.stringify([]));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "h-14 border-b border-border bg-card/50 backdrop-blur flex items-center gap-3 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							className: "h-9 w-9 text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Toggle Menu"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "left",
						className: "w-60 p-0 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/gmintel_logo.png",
									alt: "GMIntel Logo",
									className: "h-7 w-7 rounded-md object-cover border border-border/50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-sm font-bold leading-none",
									children: "GMIntel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5",
									children: "Textile · AI"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, { onItemClick: () => setOpen(false) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground mt-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse" }), "LIVE · v1.0"]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0 max-w-2xl flex items-center gap-2 h-9 px-3 rounded-md bg-muted/60 border border-border text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: isMobile ? "Search…" : "Search companies, countries, products, HS codes…",
						className: "w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("kbd", {
						className: "hidden md:inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded border border-border bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { className: "h-3 w-3" }), " K"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "icon",
					className: "text-muted-foreground relative",
					"aria-label": "Notifications",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
				align: "end",
				className: "w-80 bg-popover border border-border p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-2 py-1.5 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-foreground",
							children: [
								"Announcements (",
								unreadCount,
								" unread)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: notifications.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: markAllAsRead,
								className: "text-[10px] text-primary hover:underline",
								children: "Mark read"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: clearAll,
								className: "text-[10px] text-muted-foreground hover:underline",
								children: "Clear"
							})] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { className: "my-1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-64 overflow-y-auto space-y-1 py-1",
						children: notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-6 text-xs text-muted-foreground",
							children: "No followed announcements."
						}) : notifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							className: "flex flex-col items-start gap-1 p-2 rounded cursor-pointer hover:bg-muted/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between w-full text-[10px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-semibold text-primary", n.read && "text-muted-foreground"),
									children: n.company_name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground/60",
									children: new Date(n.timestamp).toLocaleTimeString("en-US", {
										hour: "numeric",
										minute: "numeric",
										hour12: true
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs text-foreground leading-normal", n.read && "text-muted-foreground"),
								children: n.message
							})]
						}, n.id))
					})
				]
			})] }),
			user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right hidden sm:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium leading-none",
						children: user.email
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-muted-foreground mt-0.5 font-mono",
						children: "VIEWER"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => signOut(),
					children: "Sign out"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/auth",
					children: "Sign in"
				})
			})
		]
	});
}
function AppLayout() {
	const { user, loading } = useAuth();
	const nav = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && !user) nav({ to: "/auth" });
	}, [
		loading,
		user,
		nav
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppTopbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-[1600px] mx-auto p-6 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})
			})]
		})]
	});
}
//#endregion
export { AppLayout as component };
