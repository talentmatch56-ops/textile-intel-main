import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function StatCard({
  label,
  value,
  delta,
  hint,
  icon,
}: {
  label: string;
  value: ReactNode;
  delta?: { value: string; positive?: boolean };
  hint?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="relative rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
        <span>{label}</span>
        {icon && <span className="text-primary/70">{icon}</span>}
      </div>
      <div className="mt-2 font-display text-2xl font-bold text-foreground tabular-nums">
        {value}
      </div>
      <div className="mt-1 flex items-center justify-between text-xs">
        {delta ? (
          <span
            className={cn(
              "font-mono inline-flex items-center gap-0.5",
              delta.positive ? "text-success" : "text-destructive",
            )}
          >
            {delta.positive ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {delta.value}
          </span>
        ) : (
          <span />
        )}
        {hint && <span className="text-muted-foreground">{hint}</span>}
      </div>
    </div>
  );
}
