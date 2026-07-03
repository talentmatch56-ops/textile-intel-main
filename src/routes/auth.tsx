import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/auth")({ component: AuthPage });

function AuthPage() {
  const nav = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  function getPasswordStrength(pw: string): { label: string; color: string; pct: number } {
    if (!pw) return { label: "", color: "", pct: 0 };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (score <= 1) return { label: "Weak",   color: "bg-destructive", pct: 25 };
    if (score === 2) return { label: "Fair",   color: "bg-warning",     pct: 50 };
    if (score === 3) return { label: "Good",   color: "bg-info",        pct: 75 };
    return               { label: "Strong", color: "bg-success",    pct: 100 };
  }

  async function handleForgotPassword() {
    if (!email) { setErr("Enter your email first to reset password."); return; }
    setErr(null); setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: typeof window !== "undefined" ? `${window.location.origin}/auth` : undefined,
      });
      if (error) throw error;
      setForgotSent(true);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Password reset failed");
    } finally { setLoading(false); }
  }

  async function handleGoogleSignIn() {
    setErr(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: typeof window !== "undefined" ? `${window.location.origin}/app` : undefined,
          queryParams: {
            prompt: "select_account",
          },
        },
      });
      if (error) throw error;
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Google login failed");
      setLoading(false);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null); setLoading(true);
    try {
      const res = mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email, password,
            options: {
              emailRedirectTo: typeof window !== "undefined" ? `${window.location.origin}/app` : undefined,
              data: { full_name: name },
            },
          });
      if (res.error) throw res.error;
      nav({ to: "/app" });
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Authentication failed");
    } finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:flex flex-col justify-between p-10 bg-sidebar border-r border-sidebar-border relative overflow-hidden">
        <div className="absolute inset-0 ticker-grid opacity-[0.07]" />
        <Link to="/" className="relative flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center font-mono text-primary-foreground font-bold">GM</div>
          <span className="font-display font-bold">GMIntel<span className="text-primary">.AI</span></span>
        </Link>
        <div className="relative space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Terminal Access</div>
          <h2 className="font-display text-4xl font-bold leading-tight max-w-md">
            The intelligence layer for global textile sourcing.
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            30,000+ verified companies, AI risk & quality scores, live prices, and a natural-language
            sourcing assistant — all in one terminal.
          </p>
        </div>
        <div className="relative text-[10px] font-mono text-muted-foreground">SECURE · SOC-2 READY · RBAC</div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-5">
          <form onSubmit={submit} className="space-y-5">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary">
                {mode === "signin" ? "Sign in" : "Create account"}
              </div>
              <h1 className="font-display text-2xl font-bold mt-1">
                {mode === "signin" ? "Access your terminal" : "Join GMIntel AI"}
              </h1>
            </div>
            {mode === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {mode === "signin" && (
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading}
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {mode === "signup" && password && (() => {
                const s = getPasswordStrength(password);
                return (
                  <div className="space-y-1">
                    <div className="h-1 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${s.color}`} style={{ width: `${s.pct}%` }} />
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">Password strength: {s.label}</div>
                  </div>
                );
              })()}
            </div>
            {err && (
              <div className="flex items-start gap-2 text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2">
                <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>{err}</span>
              </div>
            )}
            {forgotSent && (
              <div className="flex items-start gap-2 text-xs text-success bg-success/10 border border-success/20 rounded-md px-3 py-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>Password reset email sent! Check your inbox.</span>
              </div>
            )}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <div className="relative my-4 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <span className="relative bg-background px-3 text-[10px] font-mono uppercase text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Google
          </Button>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-xs text-muted-foreground hover:text-foreground w-full text-center block mt-3"
          >
            {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}