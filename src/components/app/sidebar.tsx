import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_ITEMS, SECTIONS, type NavItem } from "./nav-items";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { usePwa } from "@/hooks/use-pwa";

export function AppSidebar() {
  return (
    <aside className="hidden md:flex w-60 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border">
        <img
          src="/gmintel_logo.png"
          alt="GMIntel Logo"
          className="h-7 w-7 rounded-md object-cover border border-border/50"
        />
        <div>
          <div className="font-display text-sm font-bold leading-none">
            GMIntel
          </div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
            Textile · AI
          </div>
        </div>
      </div>
      <SidebarContent />
      <div className="border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          LIVE · v1.0
        </div>
      </div>
    </aside>
  );
}

export function SidebarContent({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { isInstallable, install } = usePwa();
  const { role } = useAuth();

  const grouped = (["core", "intel", "workflow", "admin"] as const)
    .filter((k) => k !== "admin" || role === "admin")
    .map((k) => ({
      key: k,
      label: SECTIONS[k],
      items: NAV_ITEMS.filter((i) => i.section === k),
    }));

  return (
    <div className="flex-1 flex flex-col justify-between overflow-hidden">
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {grouped.map((g) => (
          <div key={g.key}>
            <div className="px-3 pb-1.5 text-[10px] uppercase tracking-widest text-muted-foreground/70 font-medium">
              {g.label}
            </div>
            <div className="space-y-0.5">
              {g.items.map((item) => (
                <SidebarLink
                  key={item.to}
                  item={item}
                  active={isActive(pathname, item.to)}
                  onClick={onItemClick}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
      {isInstallable && (
        <div className="mx-2 mb-3 p-3 rounded-lg border border-border bg-muted/30 space-y-2">
          <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Offline Access Available
          </div>
          <button
            onClick={() => {
              install();
              if (onItemClick) onItemClick();
            }}
            className="w-full flex items-center justify-center gap-1.5 rounded bg-primary hover:bg-primary/95 text-primary-foreground py-1 px-2 text-xs font-semibold transition-all shadow shadow-primary/10 cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            Install App
          </button>
        </div>
      )}
    </div>
  );
}

function isActive(pathname: string, to: string) {
  if (to === "/app") return pathname === "/app" || pathname === "/app/";
  return pathname === to || pathname.startsWith(to + "/");
}

function SidebarLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4",
          active ? "text-primary" : "text-muted-foreground",
        )}
      />
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/15 text-primary font-semibold">
          {item.badge}
        </span>
      )}
    </Link>
  );
}
