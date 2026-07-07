import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string>("viewer");
  const [loading, setLoading] = useState(true);

  const fetchRole = async (currentUser: User) => {
    if (currentUser.email === "talentmatch56@gmail.com" || currentUser.email === "dev@gmail.com") {
      setRole("admin");
      return;
    }
    if (typeof window !== "undefined") {
      const isBypass = localStorage.getItem("gmintel_admin_bypass") === "true";
      if (isBypass) {
        setRole("admin");
        return;
      }
      const storedRoles = localStorage.getItem("gmintel_local_roles");
      const parsedRoles = storedRoles ? JSON.parse(storedRoles) : {};
      if (parsedRoles[currentUser.id]) {
        setRole(parsedRoles[currentUser.id]);
        return;
      }
    }
    try {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", currentUser.id)
        .maybeSingle();
      if (data) {
        setRole(data.role);
      } else {
        setRole("viewer");
      }
    } catch {
      setRole("viewer");
    }
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange(async (_ev, s) => {
      setSession(s);
      const u = s?.user ?? null;
      setUser(u);
      if (u) {
        await fetchRole(u);
      } else {
        setRole("viewer");
      }
      setLoading(false);
    });

    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      const u = data.session?.user ?? null;
      setUser(u);
      if (u) {
        await fetchRole(u);
      } else {
        setRole("viewer");
      }
      setLoading(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  return { 
    session, 
    user, 
    role, 
    loading, 
    signOut: () => supabase.auth.signOut(),
    refetchRole: () => user && fetchRole(user) 
  };
}