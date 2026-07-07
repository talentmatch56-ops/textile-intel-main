import { t as e } from "./jsx-runtime-n5LQ9ujS.js";
import { t } from "./utils-DbbrEv-p.js";
var n = e();
function r({ level: e }) {
  return (0, n.jsx)(`span`, {
    className: t(
      `inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide`,
      {
        low: `bg-success/15 text-success border-success/30`,
        medium: `bg-warning/15 text-warning border-warning/30`,
        high: `bg-destructive/15 text-destructive border-destructive/30`,
      }[e ?? `low`] ?? `bg-muted text-muted-foreground border-border`,
    ),
    children: e ?? `n/a`,
  });
}
export { r as t };
