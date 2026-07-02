import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_ITEMS, SECTIONS, type NavItem } from "./nav-items";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const grouped = (["core", "intel", "workflow", "admin"] as const).map((k) => ({
    key: k,
    label: SECTIONS[k],
    items: NAV_ITEMS.filter((i) => i.section === k),
  }));

  return (
    <aside className="hidden md:flex w-60 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="h-14 flex items-center gap-2 px-4 border-b border-sidebar-border">
        <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground text-sm font-bold">GM</div>
        <div>
          <div className="font-display text-sm font-bold leading-none">GMIntel</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Textile · AI</div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {grouped.map((g) => (
          <div key={g.key}>
            <div className="px-3 pb-1.5 text-[10px] uppercase tracking-widest text-muted-foreground/70 font-medium">
              {g.label}
            </div>
            <div className="space-y-0.5">
              {g.items.map((item) => (
                <SidebarLink key={item.to} item={item} active={isActive(pathname, item.to)} />
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          LIVE · v0.1
        </div>
      </div>
    </aside>
  );
}

function isActive(pathname: string, to: string) {
  if (to === "/app") return pathname === "/app" || pathname === "/app/";
  return pathname === to || pathname.startsWith(to + "/");
}

function SidebarLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      className={cn(
        "group flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
      )}
    >
      <Icon className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground")} />
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/15 text-primary font-semibold">
          {item.badge}
        </span>
      )}
    </Link>
  );
}