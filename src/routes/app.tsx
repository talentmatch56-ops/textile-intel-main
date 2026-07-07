import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { AppSidebar } from "@/components/app/sidebar";
import { AppTopbar } from "@/components/app/topbar";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/app")({ component: AppLayout });

function AppLayout() {
  const { user, loading } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (!loading && !user) nav({ to: "/auth" });
  }, [loading, user, nav]);

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AppTopbar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6 md:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
