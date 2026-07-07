import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, Command, Menu, Search } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function AppTopbar() {
  const { user, signOut, role } = useAuth();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // Load and subscribe to notifications
  const [notifications, setNotifications] = useState<any[]>([]);

  const loadNotifications = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("gmintel_notifications");
      setNotifications(stored ? JSON.parse(stored) : []);
    }
  };

  useEffect(() => {
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
    const next = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(next);
    localStorage.setItem("gmintel_notifications", JSON.stringify(next));
  };

  const clearAll = () => {
    setNotifications([]);
    localStorage.setItem("gmintel_notifications", JSON.stringify([]));
  };

  return (
    <header className="h-14 border-b border-border bg-card/50 backdrop-blur flex items-center gap-3 px-4">
      {/* Mobile Menu Trigger */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 p-0 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
            <div className="h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border">
              <img src="/gmintel_logo.png" alt="GMIntel Logo" className="h-7 w-7 rounded-md object-cover border border-border/50" />
              <div>
                <div className="font-display text-sm font-bold leading-none">GMIntel</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Textile · AI</div>
              </div>
            </div>
            <SidebarContent onItemClick={() => setOpen(false)} />
            <div className="border-t border-sidebar-border px-3 py-3 text-[10px] font-mono text-muted-foreground mt-auto">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                LIVE · v1.0
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 min-w-0 max-w-2xl flex items-center gap-2 h-9 px-3 rounded-md bg-muted/60 border border-border text-sm text-muted-foreground">
        <Search className="h-4 w-4 shrink-0" />
        <input
          placeholder={isMobile ? "Search…" : "Search companies, countries, products, HS codes…"}
          className="w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
        />
        <kbd className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded border border-border bg-background">
          <Command className="h-3 w-3" /> K
        </kbd>
      </div>
      <div className="flex-1" />

      {/* Notifications Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-muted-foreground relative" aria-label="Notifications">
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 bg-popover border border-border p-2">
          <div className="flex items-center justify-between px-2 py-1.5 text-xs">
            <span className="font-semibold text-foreground">Announcements ({unreadCount} unread)</span>
            <div className="flex gap-2">
              {notifications.length > 0 && (
                <>
                  <button onClick={markAllAsRead} className="text-[10px] text-primary hover:underline">Mark read</button>
                  <button onClick={clearAll} className="text-[10px] text-muted-foreground hover:underline">Clear</button>
                </>
              )}
            </div>
          </div>
          <DropdownMenuSeparator className="my-1" />
          <div className="max-h-64 overflow-y-auto space-y-1 py-1">
            {notifications.length === 0 ? (
              <div className="text-center py-6 text-xs text-muted-foreground">
                No followed announcements.
              </div>
            ) : (
              notifications.map((n) => (
                <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-1 p-2 rounded cursor-pointer hover:bg-muted/50">
                  <div className="flex items-center justify-between w-full text-[10px]">
                    <span className={cn("font-semibold text-primary", n.read && "text-muted-foreground")}>{n.company_name}</span>
                    <span className="text-muted-foreground/60">{new Date(n.timestamp).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}</span>
                  </div>
                  <span className={cn("text-xs text-foreground leading-normal", n.read && "text-muted-foreground")}>{n.message}</span>
                </DropdownMenuItem>
              ))
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {user ? (
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-medium leading-none">{user.email}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 font-mono uppercase">{role}</div>
          </div>
          <Button size="sm" variant="outline" onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <Button size="sm" asChild>
          <Link to="/auth">Sign in</Link>
        </Button>
      )}
    </header>
  );
}