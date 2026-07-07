import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-6 pb-6 border-b border-border">
      <div>
        {eyebrow && (
          <div className="text-[10px] uppercase tracking-widest font-mono text-primary mb-2">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 shrink-0">{actions}</div>
      )}
    </div>
  );
}
