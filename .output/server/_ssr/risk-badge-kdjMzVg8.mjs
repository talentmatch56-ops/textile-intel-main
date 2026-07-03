import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/risk-badge-kdjMzVg8.js
var import_jsx_runtime = require_jsx_runtime();
function RiskBadge({ level }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide", {
			low: "bg-success/15 text-success border-success/30",
			medium: "bg-warning/15 text-warning border-warning/30",
			high: "bg-destructive/15 text-destructive border-destructive/30"
		}[level ?? "low"] ?? "bg-muted text-muted-foreground border-border"),
		children: level ?? "n/a"
	});
}
//#endregion
export { RiskBadge as t };
