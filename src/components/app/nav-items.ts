import {
  LayoutDashboard, Building2, Search, Sparkles, GitCompare, ShieldAlert,
  TrendingUp, Newspaper, ClipboardList, FileText, Map, BarChart3,
  Settings, Radar, MessageSquare,
} from "lucide-react";

export type NavItem = {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  section: "core" | "intel" | "workflow" | "admin";
  badge?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, section: "core" },
  { to: "/app/companies", label: "Companies", icon: Building2, section: "core" },
  { to: "/app/search", label: "Smart Search", icon: Search, section: "core", badge: "AI" },
  { to: "/app/chat", label: "AI Assistant", icon: MessageSquare, section: "core", badge: "AI" },
  { to: "/app/discovery", label: "Discovery", icon: Radar, section: "intel", badge: "AI" },
  { to: "/app/compare", label: "Compare", icon: GitCompare, section: "intel" },
  { to: "/app/risk", label: "Risk Engine", icon: ShieldAlert, section: "intel", badge: "AI" },
  { to: "/app/prices", label: "Price Intel", icon: TrendingUp, section: "intel" },
  { to: "/app/market", label: "Market Intel", icon: Sparkles, section: "intel" },
  { to: "/app/news", label: "News", icon: Newspaper, section: "intel" },
  { to: "/app/procurement", label: "Procurement", icon: ClipboardList, section: "workflow", badge: "AI" },
  { to: "/app/reports", label: "Reports", icon: FileText, section: "workflow" },
  { to: "/app/map", label: "World Map", icon: Map, section: "workflow" },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3, section: "workflow" },
  { to: "/app/admin", label: "Admin", icon: Settings, section: "admin" },
];

export const SECTIONS: Record<NavItem["section"], string> = {
  core: "Command Center",
  intel: "Intelligence",
  workflow: "Workflows",
  admin: "System",
};