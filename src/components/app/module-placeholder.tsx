import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function ModulePlaceholder({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-card/40 p-10 text-center">
      <div className="mx-auto h-10 w-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="font-display text-lg font-semibold text-foreground">
        {title}
      </div>
      <div className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
        {children ??
          "This module ships in the next phase. The schema and RLS are ready — the UI arrives next."}
      </div>
    </div>
  );
}
