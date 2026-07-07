import { t as cn } from "./utils-C_uf36nf.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import {
  J as ArrowUpRight,
  Z as ArrowDownRight,
} from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stat-card-CkcMZbuQ.js
var import_jsx_runtime = require_jsx_runtime();
function StatCard({ label, value, delta, hint, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "relative rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-colors",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-mono",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            children: label,
          }),
          icon &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "text-primary/70",
              children: icon,
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "mt-2 font-display text-2xl font-bold text-foreground tabular-nums",
        children: value,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-1 flex items-center justify-between text-xs",
        children: [
          delta
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: cn(
                  "font-mono inline-flex items-center gap-0.5",
                  delta.positive ? "text-success" : "text-destructive",
                ),
                children: [
                  delta.positive
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ArrowUpRight,
                        { className: "h-3 w-3" },
                      )
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ArrowDownRight,
                        { className: "h-3 w-3" },
                      ),
                  delta.value,
                ],
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          hint &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "text-muted-foreground",
              children: hint,
            }),
        ],
      }),
    ],
  });
}
//#endregion
export { StatCard as t };
