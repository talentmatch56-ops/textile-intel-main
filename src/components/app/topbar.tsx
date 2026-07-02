import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, Command, Menu, Search } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function AppTopbar() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

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
                LIVE · v0.1
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
      <Button variant="ghost" size="icon" className="text-muted-foreground">
        <Bell className="h-4 w-4" />
      </Button>
      {user ? (
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-medium leading-none">{user.email}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">VIEWER</div>
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