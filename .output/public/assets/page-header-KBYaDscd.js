import { t as e } from "./jsx-runtime-n5LQ9ujS.js";
var t = e();
function n({ eyebrow: e, title: n, description: r, actions: i }) {
  return (0, t.jsxs)(`div`, {
    className: `flex items-start justify-between gap-6 pb-6 border-b border-border`,
    children: [
      (0, t.jsxs)(`div`, {
        children: [
          e &&
            (0, t.jsx)(`div`, {
              className: `text-[10px] uppercase tracking-widest font-mono text-primary mb-2`,
              children: e,
            }),
          (0, t.jsx)(`h1`, {
            className: `font-display text-2xl md:text-3xl font-bold text-foreground`,
            children: n,
          }),
          r &&
            (0, t.jsx)(`p`, {
              className: `text-sm text-muted-foreground mt-1.5 max-w-2xl`,
              children: r,
            }),
        ],
      }),
      i &&
        (0, t.jsx)(`div`, {
          className: `flex items-center gap-2 shrink-0`,
          children: i,
        }),
    ],
  });
}
export { n as t };
