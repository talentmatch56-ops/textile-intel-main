import { Link } from "@tanstack/react-router";
import { Bell, Command, Search } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

export function AppTopbar() {
  const { user, signOut } = useAuth();
  return (
    <header className="h-14 border-b border-border bg-card/50 backdrop-blur flex items-center gap-3 px-4">
      <div className="flex-1 max-w-2xl flex items-center gap-2 h-9 px-3 rounded-md bg-muted/60 border border-border text-sm text-muted-foreground">
        <Search className="h-4 w-4" />
        <input
          placeholder="Search companies, countries, products, HS codes…"
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
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