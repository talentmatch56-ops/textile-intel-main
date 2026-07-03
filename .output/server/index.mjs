globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-02T05:17:01.644Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/analytics-CcZRoJBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"855e-79Uer3niMlx0NJUQMu2fdURtCd0\"",
		"mtime": "2026-07-03T05:35:13.341Z",
		"size": 34142,
		"path": "../public/assets/analytics-CcZRoJBT.js"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ab-YwnbaGIKQWJfBy6FgHPD4dLSgrA\"",
		"mtime": "2026-07-02T06:43:02.222Z",
		"size": 1451,
		"path": "../public/sw.js"
	},
	"/assets/app-DkTl8kuE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f91-TNyvUL6d/Fw+G95E6nq36UnYHWA\"",
		"mtime": "2026-07-03T05:35:13.342Z",
		"size": 16273,
		"path": "../public/assets/app-DkTl8kuE.js"
	},
	"/assets/admin-BkusAXlW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106e2-tm8nl1khFKmXkn+lbgDe1sNyy24\"",
		"mtime": "2026-07-03T05:35:13.328Z",
		"size": 67298,
		"path": "../public/assets/admin-BkusAXlW.js"
	},
	"/manifest.json": {
		"type": "application/json",
		"etag": "\"293-MKjSLDnpGdWQN+QjaVAa23jtb0c\"",
		"mtime": "2026-07-02T06:42:50.977Z",
		"size": 659,
		"path": "../public/manifest.json"
	},
	"/assets/app-BBhbPUwL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43b7-/zGwFp9aWSjxyFUyc/k0FxCMzw4\"",
		"mtime": "2026-07-03T05:35:13.342Z",
		"size": 17335,
		"path": "../public/assets/app-BBhbPUwL.js"
	},
	"/assets/arrow-up-down-meuA2MCD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-5kClqxh168wP3KL/GqAgXKCGF0I\"",
		"mtime": "2026-07-03T05:35:13.343Z",
		"size": 234,
		"path": "../public/assets/arrow-up-down-meuA2MCD.js"
	},
	"/assets/AreaChart-B3i_z7zm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac4-Of8d9ystE7jvgY6ndLRphOUOUYI\"",
		"mtime": "2026-07-03T05:35:13.328Z",
		"size": 10948,
		"path": "../public/assets/AreaChart-B3i_z7zm.js"
	},
	"/assets/auth-MWyQpfwr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23bc-g4jLM/RkpxR1MGR2l1lDABo3BPg\"",
		"mtime": "2026-07-03T05:35:13.343Z",
		"size": 9148,
		"path": "../public/assets/auth-MWyQpfwr.js"
	},
	"/assets/BarChart-DuAVZb5T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-grkb/EC39+1VJPVuTRXrBKLglz0\"",
		"mtime": "2026-07-03T05:35:13.328Z",
		"size": 317,
		"path": "../public/assets/BarChart-DuAVZb5T.js"
	},
	"/assets/chart-column-eROrQ7Tt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-ORziLaN2xpXqubT5lzIhX7x3cTY\"",
		"mtime": "2026-07-03T05:35:13.345Z",
		"size": 240,
		"path": "../public/assets/chart-column-eROrQ7Tt.js"
	},
	"/assets/building-2-CXtiLEWT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-FjYw8Xf+WwMAGhQQ4Vs3S7QzYrI\"",
		"mtime": "2026-07-03T05:35:13.344Z",
		"size": 372,
		"path": "../public/assets/building-2-CXtiLEWT.js"
	},
	"/assets/circle-alert-D6OZZXPz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-yZVXj//RHaGW74MEmoZeE5c/ToU\"",
		"mtime": "2026-07-03T05:35:13.347Z",
		"size": 239,
		"path": "../public/assets/circle-alert-D6OZZXPz.js"
	},
	"/assets/chevron-up-CFj-K4KU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-cx3wP1GqKRX/y06OsuOn61K5nBk\"",
		"mtime": "2026-07-03T05:35:13.346Z",
		"size": 192,
		"path": "../public/assets/chevron-up-CFj-K4KU.js"
	},
	"/assets/button-CoQ0AAlw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100d-XhQxEgx/lLiPaCFcILW2yTeH5Fs\"",
		"mtime": "2026-07-03T05:35:13.344Z",
		"size": 4109,
		"path": "../public/assets/button-CoQ0AAlw.js"
	},
	"/assets/chat-Ddc2vNO6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b05-UltbECIblU7Gfk77ftheB1Mt9ck\"",
		"mtime": "2026-07-03T05:35:13.346Z",
		"size": 11013,
		"path": "../public/assets/chat-Ddc2vNO6.js"
	},
	"/assets/circle-check-DRsrF1f6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-rFMLCpeuq22F9DiBcjCEmtk1lcU\"",
		"mtime": "2026-07-03T05:35:13.347Z",
		"size": 167,
		"path": "../public/assets/circle-check-DRsrF1f6.js"
	},
	"/assets/clock-DlSgh5Ru.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-YTVdZUG32ew5k9vWz9/HBR3UXTE\"",
		"mtime": "2026-07-03T05:35:13.348Z",
		"size": 158,
		"path": "../public/assets/clock-DlSgh5Ru.js"
	},
	"/assets/companies-ByhrHTxa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f6a-gbWsxRc4D8lQw4UHxeLrv7tpVqU\"",
		"mtime": "2026-07-03T05:35:13.348Z",
		"size": 8042,
		"path": "../public/assets/companies-ByhrHTxa.js"
	},
	"/assets/clipboard-list-CqMyINXY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"190-UBaZz3kl2SZou7W8wfRTmGRZpoY\"",
		"mtime": "2026-07-03T05:35:13.347Z",
		"size": 400,
		"path": "../public/assets/clipboard-list-CqMyINXY.js"
	},
	"/assets/discovery-BgA3RTge.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e7-MHlchYqDf47aSrAHbvCHCKjIRjg\"",
		"mtime": "2026-07-03T05:35:13.349Z",
		"size": 9703,
		"path": "../public/assets/discovery-BgA3RTge.js"
	},
	"/assets/compare-Bbdckj9L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c92-Y8eSHdahqXgJN9+vbkcehXH1iHw\"",
		"mtime": "2026-07-03T05:35:13.349Z",
		"size": 7314,
		"path": "../public/assets/compare-Bbdckj9L.js"
	},
	"/assets/dist-ByBcCr1c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49fc-zGH6pDaVVYPvJSbKdJTgl6bHGp8\"",
		"mtime": "2026-07-03T05:35:13.350Z",
		"size": 18940,
		"path": "../public/assets/dist-ByBcCr1c.js"
	},
	"/gmintel_logo.png": {
		"type": "image/png",
		"etag": "\"83136-VqihGcQmtK7PlpXFvv6Dn36knMA\"",
		"mtime": "2026-07-02T07:28:56.680Z",
		"size": 536886,
		"path": "../public/gmintel_logo.png"
	},
	"/assets/dist-C1qB0g71.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25b-xZvQPyEgwdAo9f5hAfnBRrdFRCw\"",
		"mtime": "2026-07-03T05:35:13.351Z",
		"size": 603,
		"path": "../public/assets/dist-C1qB0g71.js"
	},
	"/assets/download-B4t8_M7W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd-/8zt1GabpzJDnkZnSbVrVwhYrN8\"",
		"mtime": "2026-07-03T05:35:13.351Z",
		"size": 221,
		"path": "../public/assets/download-B4t8_M7W.js"
	},
	"/assets/earth-DnUaiYk8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-yWiyklbf6BzqOhtNxuQ9YlS+IJ8\"",
		"mtime": "2026-07-03T05:35:13.351Z",
		"size": 382,
		"path": "../public/assets/earth-DnUaiYk8.js"
	},
	"/assets/factory-CJ5GuEGl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-4oN/Jdyh6X2gYmMW7jQKNWdKVjI\"",
		"mtime": "2026-07-03T05:35:13.353Z",
		"size": 396,
		"path": "../public/assets/factory-CJ5GuEGl.js"
	},
	"/assets/file-text-B5lTvAwQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-uKVeGERB1yTn/ZR3cJbh1eUtqfM\"",
		"mtime": "2026-07-03T05:35:13.353Z",
		"size": 374,
		"path": "../public/assets/file-text-B5lTvAwQ.js"
	},
	"/assets/es2015-DYD6kN3_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63f0-ZLliXW4MkjKRqQeLqErdZ4odeMY\"",
		"mtime": "2026-07-03T05:35:13.353Z",
		"size": 25584,
		"path": "../public/assets/es2015-DYD6kN3_.js"
	},
	"/assets/git-compare-BHx0fE6E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-oaOAvIT7ml0moTz1PyUOVLyEkSs\"",
		"mtime": "2026-07-03T05:35:13.353Z",
		"size": 274,
		"path": "../public/assets/git-compare-BHx0fE6E.js"
	},
	"/assets/loader-circle-Bl7wwTNN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-PJTvyp9GxIvSLLiCBRU59iZ8Q24\"",
		"mtime": "2026-07-03T05:35:13.356Z",
		"size": 133,
		"path": "../public/assets/loader-circle-Bl7wwTNN.js"
	},
	"/assets/jsx-runtime-n5LQ9ujS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2157-x+FjD3p74bnIvIhkIVLOQLFM4M0\"",
		"mtime": "2026-07-03T05:35:13.356Z",
		"size": 8535,
		"path": "../public/assets/jsx-runtime-n5LQ9ujS.js"
	},
	"/assets/map-rhCSjouZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f7c-7eOqoOC5BFjxtLW0TCkV4/cykxU\"",
		"mtime": "2026-07-03T05:35:13.356Z",
		"size": 8060,
		"path": "../public/assets/map-rhCSjouZ.js"
	},
	"/assets/message-square-B20EOjmZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de-+19j92yXg1jT2yl8J/86FKNKcCg\"",
		"mtime": "2026-07-03T05:35:13.358Z",
		"size": 222,
		"path": "../public/assets/message-square-B20EOjmZ.js"
	},
	"/assets/market-BxT9C5N3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d6e-19bnWJGOJx6aEKs+XM2A3wBE1ec\"",
		"mtime": "2026-07-03T05:35:13.358Z",
		"size": 19822,
		"path": "../public/assets/market-BxT9C5N3.js"
	},
	"/assets/mock-companies-DOsMh2YD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3c-4a128cSu85oYCoL797lCXinx0e4\"",
		"mtime": "2026-07-03T05:35:13.359Z",
		"size": 3644,
		"path": "../public/assets/mock-companies-DOsMh2YD.js"
	},
	"/assets/news-zCd0gpbm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2dc2-pRZKFnn1s4t0ghdvVrSC9CZ9aVk\"",
		"mtime": "2026-07-03T05:35:13.359Z",
		"size": 11714,
		"path": "../public/assets/news-zCd0gpbm.js"
	},
	"/assets/newspaper-BWNPBK5O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d-PBiJncaMnc4cbVP5jpg3otJvRGA\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 333,
		"path": "../public/assets/newspaper-BWNPBK5O.js"
	},
	"/assets/page-header-KBYaDscd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28e-lvn8IWP1BOV+r+cdvAB+U0xn/7c\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 654,
		"path": "../public/assets/page-header-KBYaDscd.js"
	},
	"/assets/plus-DnfuNtW7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-2itYeW3KWIFAl/sutMFyZxZEyVE\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 142,
		"path": "../public/assets/plus-DnfuNtW7.js"
	},
	"/assets/prices-ClMTKZzG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a8f-/LeDs906AYyBUFP1g+RLptcZiP0\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 10895,
		"path": "../public/assets/prices-ClMTKZzG.js"
	},
	"/assets/reports-Bm2QaUm6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2406-ldSC1Lje9fRvH/0DyPDa9BGySgA\"",
		"mtime": "2026-07-03T05:35:13.365Z",
		"size": 9222,
		"path": "../public/assets/reports-Bm2QaUm6.js"
	},
	"/assets/procurement-C3qgeMGu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2904-UgQe8P8+z+Yxufl62skJsThsOPY\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 10500,
		"path": "../public/assets/procurement-C3qgeMGu.js"
	},
	"/assets/radar-BYXsYask.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eb-WzSU/WQh+HQR3vdrQ1ZEBtpunFY\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 491,
		"path": "../public/assets/radar-BYXsYask.js"
	},
	"/assets/react-dom-CQmWuZA8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-+IRX1VEQ+614FViNS2l9Mg3wio8\"",
		"mtime": "2026-07-03T05:35:13.361Z",
		"size": 3546,
		"path": "../public/assets/react-dom-CQmWuZA8.js"
	},
	"/assets/generateCategoricalChart-UpmhMX6I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a885-2ttrhs4WsLGMNDhg6kJuDHJFJcE\"",
		"mtime": "2026-07-03T05:35:13.353Z",
		"size": 370821,
		"path": "../public/assets/generateCategoricalChart-UpmhMX6I.js"
	},
	"/assets/risk-badge-3U59-BfT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"204-AY37FAeO2fgyXLLPx2nU2/davSY\"",
		"mtime": "2026-07-03T05:35:13.366Z",
		"size": 516,
		"path": "../public/assets/risk-badge-3U59-BfT.js"
	},
	"/assets/index-bg4q4NoJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84ac5-nkniFUC4KsoYrDscHRJ8m5I++fw\"",
		"mtime": "2026-07-03T05:35:13.328Z",
		"size": 543429,
		"path": "../public/assets/index-bg4q4NoJ.js"
	},
	"/assets/risk-Cs9cC0bM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2463-2dXhIx0jbeqKDwNcil1cW9AbnuQ\"",
		"mtime": "2026-07-03T05:35:13.365Z",
		"size": 9315,
		"path": "../public/assets/risk-Cs9cC0bM.js"
	},
	"/assets/search-Cr1alROc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-DAVLomxPu0W+CWOfaGS52Zgz9aI\"",
		"mtime": "2026-07-03T05:35:13.366Z",
		"size": 163,
		"path": "../public/assets/search-Cr1alROc.js"
	},
	"/assets/routes-CLayKZrM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dab-frbVM6wjvdHtaelCdR5oCrC7oFI\"",
		"mtime": "2026-07-03T05:35:13.366Z",
		"size": 19883,
		"path": "../public/assets/routes-CLayKZrM.js"
	},
	"/assets/send-3HqKDgXM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-VvrKpyIYNOrTKwEILwViY3i3ecM\"",
		"mtime": "2026-07-03T05:35:13.368Z",
		"size": 279,
		"path": "../public/assets/send-3HqKDgXM.js"
	},
	"/assets/search-Bwf_Rk2s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2502-FyzdVyGdQRI9r47NaXUZAsJiqww\"",
		"mtime": "2026-07-03T05:35:13.366Z",
		"size": 9474,
		"path": "../public/assets/search-Bwf_Rk2s.js"
	},
	"/assets/shield-check-RJOI63us.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-WJmacWUsCWnC2ylIdSdZP47PjKU\"",
		"mtime": "2026-07-03T05:35:13.368Z",
		"size": 309,
		"path": "../public/assets/shield-check-RJOI63us.js"
	},
	"/assets/sparkles-D9JfmPPi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-RYTMc0ab4gRS06pz9FTmxM/Ay/k\"",
		"mtime": "2026-07-03T05:35:13.368Z",
		"size": 483,
		"path": "../public/assets/sparkles-D9JfmPPi.js"
	},
	"/assets/shield-alert-9Y_5-gpD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-6dCO2x5Nvgj3FgNkjz7V8iE2aME\"",
		"mtime": "2026-07-03T05:35:13.368Z",
		"size": 342,
		"path": "../public/assets/shield-alert-9Y_5-gpD.js"
	},
	"/assets/trending-down-CVd78YMv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-zobH1KilyKXRZzZtNBRx+LJuC7Y\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 167,
		"path": "../public/assets/trending-down-CVd78YMv.js"
	},
	"/assets/trending-up-B4RhHAzP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-z2EaTtptUkjSeQ/OAWtNSsPVKuQ\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 164,
		"path": "../public/assets/trending-up-B4RhHAzP.js"
	},
	"/assets/stat-card-D9N0zewM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"502-ZxWan7E5Y8dZnjvf+GTc10IYKgM\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 1282,
		"path": "../public/assets/stat-card-D9N0zewM.js"
	},
	"/assets/users-CMoH1Sms.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-xAXp+YBAV+c58fMXcHtevKafW+s\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 295,
		"path": "../public/assets/users-CMoH1Sms.js"
	},
	"/assets/useQuery-Bn_InlVv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2252-9jWVDZ0l5GvTV27EZEnq/ttd4m4\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 8786,
		"path": "../public/assets/useQuery-Bn_InlVv.js"
	},
	"/assets/utils-DbbrEv-p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f42-rNji76gbpEIcpMKebytO/OCg5ik\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 28482,
		"path": "../public/assets/utils-DbbrEv-p.js"
	},
	"/assets/x-COcS-5IT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f-gayXK3zKUawRxkPagKs8vZwJg0g\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 143,
		"path": "../public/assets/x-COcS-5IT.js"
	},
	"/assets/styles-DtvkXv9r.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"183c0-rp/mn6rcPh8KSvaTuLo+wL32ny8\"",
		"mtime": "2026-07-03T05:35:13.370Z",
		"size": 99264,
		"path": "../public/assets/styles-DtvkXv9r.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_aB2W33 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_aB2W33
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
