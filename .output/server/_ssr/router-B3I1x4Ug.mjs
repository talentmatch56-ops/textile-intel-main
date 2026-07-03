import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { P as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B3I1x4Ug.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B4FJKr5C.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "GMIntel AI — Global Textile Intelligence Platform" },
			{
				name: "description",
				content: "The Bloomberg of textiles. AI-powered intelligence on manufacturers, suppliers, brands, prices, and market trends across 40+ countries."
			},
			{
				name: "author",
				content: "GMIntel"
			},
			{
				name: "theme-color",
				content: "#1a1815"
			},
			{
				property: "og:title",
				content: "GMIntel AI — Global Textile Intelligence"
			},
			{
				property: "og:description",
				content: "AI-powered discovery, sourcing, risk and market intelligence for the global textile and apparel industry."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "apple-touch-icon",
				href: "/gmintel_logo.png"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "serviceWorker" in navigator) window.addEventListener("load", () => {
			navigator.serviceWorker.register("/sw.js").then((registration) => {
				console.log("Service Worker registered with scope:", registration.scope);
			}).catch((error) => {
				console.error("Service Worker registration failed:", error);
			});
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$17 = () => import("./auth-BwsD3Ykb.mjs");
var Route$17 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./app-dNjO_crD.mjs");
var Route$16 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./routes-C1oVPHj8.mjs");
var Route$15 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./app-N-oFuA4m.mjs");
var Route$14 = createFileRoute("/app/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./search-B_QpMoA6.mjs");
var Route$13 = createFileRoute("/app/search")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./risk-Io_OW1_c.mjs");
var Route$12 = createFileRoute("/app/risk")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./reports-QLLTvyAy.mjs");
var Route$11 = createFileRoute("/app/reports")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./procurement-CV6qEJkx.mjs");
var Route$10 = createFileRoute("/app/procurement")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./prices-BczA8viw.mjs");
var Route$9 = createFileRoute("/app/prices")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./news-B_n6bJ8J.mjs");
var Route$8 = createFileRoute("/app/news")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./market-Bk2vz_V5.mjs");
var Route$7 = createFileRoute("/app/market")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./map-XVVo4VuS.mjs");
var Route$6 = createFileRoute("/app/map")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./discovery-B4Ft7Ybm.mjs");
var Route$5 = createFileRoute("/app/discovery")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./compare-Df0O_F_5.mjs");
var Route$4 = createFileRoute("/app/compare")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./companies-o11yJWNd.mjs");
var Route$3 = createFileRoute("/app/companies")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./chat-CDajpALz.mjs");
var Route$2 = createFileRoute("/app/chat")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./analytics-95P8hFUr.mjs");
var Route$1 = createFileRoute("/app/analytics")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin-D_Xn5ha1.mjs");
var Route = createFileRoute("/app/admin")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var AuthRoute = Route$17.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$18
});
var AppRoute = Route$16.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$18
});
var IndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AppIndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppSearchRoute = Route$13.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => AppRoute
});
var AppRiskRoute = Route$12.update({
	id: "/risk",
	path: "/risk",
	getParentRoute: () => AppRoute
});
var AppReportsRoute = Route$11.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AppRoute
});
var AppProcurementRoute = Route$10.update({
	id: "/procurement",
	path: "/procurement",
	getParentRoute: () => AppRoute
});
var AppPricesRoute = Route$9.update({
	id: "/prices",
	path: "/prices",
	getParentRoute: () => AppRoute
});
var AppNewsRoute = Route$8.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => AppRoute
});
var AppMarketRoute = Route$7.update({
	id: "/market",
	path: "/market",
	getParentRoute: () => AppRoute
});
var AppMapRoute = Route$6.update({
	id: "/map",
	path: "/map",
	getParentRoute: () => AppRoute
});
var AppDiscoveryRoute = Route$5.update({
	id: "/discovery",
	path: "/discovery",
	getParentRoute: () => AppRoute
});
var AppCompareRoute = Route$4.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => AppRoute
});
var AppCompaniesRoute = Route$3.update({
	id: "/companies",
	path: "/companies",
	getParentRoute: () => AppRoute
});
var AppChatRoute = Route$2.update({
	id: "/chat",
	path: "/chat",
	getParentRoute: () => AppRoute
});
var AppAnalyticsRoute = Route$1.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AppRoute
});
var AppRouteChildren = {
	AppAdminRoute: Route.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => AppRoute
	}),
	AppAnalyticsRoute,
	AppChatRoute,
	AppCompaniesRoute,
	AppCompareRoute,
	AppDiscoveryRoute,
	AppMapRoute,
	AppMarketRoute,
	AppNewsRoute,
	AppPricesRoute,
	AppProcurementRoute,
	AppReportsRoute,
	AppRiskRoute,
	AppSearchRoute,
	AppIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	AuthRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
