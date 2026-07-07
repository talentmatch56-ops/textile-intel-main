import { cn } from "@/lib/utils";

export function RiskBadge({ level }: { level?: string | null }) {
  const map: Record<string, string> = {
    low: "bg-success/15 text-success border-success/30",
    medium: "bg-warning/15 text-warning border-warning/30",
    high: "bg-destructive/15 text-destructive border-destructive/30",
  };
  const cls =
    map[level ?? "low"] ?? "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide",
        cls,
      )}
    >
      {level ?? "n/a"}
    </span>
  );
}
