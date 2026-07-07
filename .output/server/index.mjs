globalThis.__nitro_main__ = import.meta.url;
import {
  a as FastResponse,
  n as HTTPError,
  r as defineLazyEventHandler,
  t as H3Core,
} from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) return mod.fetch(req);
      if (!promise)
        promise = loader().then((_mod) => (mod = _mod.default || _mod));
      return promise.then((mod) => mod.fetch(req));
    },
  };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
  "/favicon.ico": {
    type: "image/vnd.microsoft.icon",
    etag: '"546-lNxJsty3ZOe6ml6qckRLcfktKXg"',
    mtime: "2026-07-03T08:27:33.394Z",
    size: 1350,
    path: "../public/favicon.ico",
  },
  "/favicon.svg": {
    type: "image/svg+xml",
    etag: '"20a-pR+gust0oUmh2ptrZQWXJtzDQBU"',
    mtime: "2026-07-03T08:27:16.612Z",
    size: 522,
    path: "../public/favicon.svg",
  },
  "/gmintel_logo.svg": {
    type: "image/svg+xml",
    etag: '"a09-QTduhmhM+gsCnAdyoSb71SPt7oE"',
    mtime: "2026-07-03T08:24:08.915Z",
    size: 2569,
    path: "../public/gmintel_logo.svg",
  },
  "/manifest.json": {
    type: "application/json",
    etag: '"293-MKjSLDnpGdWQN+QjaVAa23jtb0c"',
    mtime: "2026-07-02T06:42:50.977Z",
    size: 659,
    path: "../public/manifest.json",
  },
  "/sw.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"5ab-YwnbaGIKQWJfBy6FgHPD4dLSgrA"',
    mtime: "2026-07-02T06:43:02.222Z",
    size: 1451,
    path: "../public/sw.js",
  },
  "/assets/admin-BoN7PfLV.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"6dca-mYFnlEJxN1vvbXpvlJ5NedldXOI"',
    mtime: "2026-07-03T09:08:34.772Z",
    size: 28106,
    path: "../public/assets/admin-BoN7PfLV.js",
  },
  "/assets/app-D2nHNuio.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"73b2-XBrZBzIBjl2Py68kvM2j/RtzPgg"',
    mtime: "2026-07-03T09:08:34.773Z",
    size: 29618,
    path: "../public/assets/app-D2nHNuio.js",
  },
  "/assets/app-DpND1u4a.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"33cb-tk2+3c+D2Lwh4XP7qVU4E19M4kc"',
    mtime: "2026-07-03T09:08:34.775Z",
    size: 13259,
    path: "../public/assets/app-DpND1u4a.js",
  },
  "/assets/arrow-up-down-meuA2MCD.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"ea-5kClqxh168wP3KL/GqAgXKCGF0I"',
    mtime: "2026-07-03T09:08:34.777Z",
    size: 234,
    path: "../public/assets/arrow-up-down-meuA2MCD.js",
  },
  "/assets/analytics-C9hdVMwN.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"855e-YyP/VY3pDFhxLSCwl48rajjh5Uo"',
    mtime: "2026-07-03T09:08:34.773Z",
    size: 34142,
    path: "../public/assets/analytics-C9hdVMwN.js",
  },
  "/assets/BarChart-DuAVZb5T.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"13d-grkb/EC39+1VJPVuTRXrBKLglz0"',
    mtime: "2026-07-03T09:08:34.769Z",
    size: 317,
    path: "../public/assets/BarChart-DuAVZb5T.js",
  },
  "/assets/building-2-CXtiLEWT.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"174-FjYw8Xf+WwMAGhQQ4Vs3S7QzYrI"',
    mtime: "2026-07-03T09:08:34.778Z",
    size: 372,
    path: "../public/assets/building-2-CXtiLEWT.js",
  },
  "/assets/chart-column-eROrQ7Tt.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"f0-ORziLaN2xpXqubT5lzIhX7x3cTY"',
    mtime: "2026-07-03T09:08:34.778Z",
    size: 240,
    path: "../public/assets/chart-column-eROrQ7Tt.js",
  },
  "/assets/auth-hNNFhT3a.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2010-R4EyUKIIsLGlW/vAWr47Kv9ZbLk"',
    mtime: "2026-07-03T09:08:34.777Z",
    size: 8208,
    path: "../public/assets/auth-hNNFhT3a.js",
  },
  "/assets/AreaChart-B3i_z7zm.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2ac4-Of8d9ystE7jvgY6ndLRphOUOUYI"',
    mtime: "2026-07-03T09:08:34.769Z",
    size: 10948,
    path: "../public/assets/AreaChart-B3i_z7zm.js",
  },
  "/assets/chevron-up-CFj-K4KU.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"c0-cx3wP1GqKRX/y06OsuOn61K5nBk"',
    mtime: "2026-07-03T09:08:34.779Z",
    size: 192,
    path: "../public/assets/chevron-up-CFj-K4KU.js",
  },
  "/assets/circle-alert-D6OZZXPz.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"ef-yZVXj//RHaGW74MEmoZeE5c/ToU"',
    mtime: "2026-07-03T09:08:34.779Z",
    size: 239,
    path: "../public/assets/circle-alert-D6OZZXPz.js",
  },
  "/assets/circle-check-DRsrF1f6.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"a7-rFMLCpeuq22F9DiBcjCEmtk1lcU"',
    mtime: "2026-07-03T09:08:34.779Z",
    size: 167,
    path: "../public/assets/circle-check-DRsrF1f6.js",
  },
  "/assets/clipboard-list-CqMyINXY.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"190-UBaZz3kl2SZou7W8wfRTmGRZpoY"',
    mtime: "2026-07-03T09:08:34.780Z",
    size: 400,
    path: "../public/assets/clipboard-list-CqMyINXY.js",
  },
  "/assets/button-CoQ0AAlw.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"100d-XhQxEgx/lLiPaCFcILW2yTeH5Fs"',
    mtime: "2026-07-03T09:08:34.778Z",
    size: 4109,
    path: "../public/assets/button-CoQ0AAlw.js",
  },
  "/assets/clock-DlSgh5Ru.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"9e-YTVdZUG32ew5k9vWz9/HBR3UXTE"',
    mtime: "2026-07-03T09:08:34.780Z",
    size: 158,
    path: "../public/assets/clock-DlSgh5Ru.js",
  },
  "/assets/chat-DQfgCCJc.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"6452-ImqOmZbtPvZkAvjKbgQ3EauOitE"',
    mtime: "2026-07-03T09:08:34.779Z",
    size: 25682,
    path: "../public/assets/chat-DQfgCCJc.js",
  },
  "/assets/companies-Hf9wwp8q.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"3d54-elHX7vXPybTPlKg38DUSDqu8Jpc"',
    mtime: "2026-07-03T09:08:34.780Z",
    size: 15700,
    path: "../public/assets/companies-Hf9wwp8q.js",
  },
  "/assets/compare-C0NbWnnE.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1c92-oiEnB5OGqzE+cCUC+p+Lf+tUiXc"',
    mtime: "2026-07-03T09:08:34.781Z",
    size: 7314,
    path: "../public/assets/compare-C0NbWnnE.js",
  },
  "/gmintel_logo.png": {
    type: "image/png",
    etag: '"140afc-vrw87PlL5nzp32vTDCSZOWDfYDA"',
    mtime: "2026-07-03T08:30:35.025Z",
    size: 1313532,
    path: "../public/gmintel_logo.png",
  },
  "/assets/discovery-C7jfK33K.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"24ec-umKUZdDa9nwsWyvkiJmbEi22Bs4"',
    mtime: "2026-07-03T09:08:34.781Z",
    size: 9452,
    path: "../public/assets/discovery-C7jfK33K.js",
  },
  "/assets/dist-ByBcCr1c.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"49fc-zGH6pDaVVYPvJSbKdJTgl6bHGp8"',
    mtime: "2026-07-03T09:08:34.782Z",
    size: 18940,
    path: "../public/assets/dist-ByBcCr1c.js",
  },
  "/assets/dist-C1qB0g71.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"25b-xZvQPyEgwdAo9f5hAfnBRrdFRCw"',
    mtime: "2026-07-03T09:08:34.783Z",
    size: 603,
    path: "../public/assets/dist-C1qB0g71.js",
  },
  "/assets/dist-TeW72Ovj.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"73dd-0pbh5MKrRcsKS4I5DrIPxWJSN+M"',
    mtime: "2026-07-03T09:08:34.783Z",
    size: 29661,
    path: "../public/assets/dist-TeW72Ovj.js",
  },
  "/assets/download-B4t8_M7W.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"dd-/8zt1GabpzJDnkZnSbVrVwhYrN8"',
    mtime: "2026-07-03T09:08:34.783Z",
    size: 221,
    path: "../public/assets/download-B4t8_M7W.js",
  },
  "/assets/earth-DnUaiYk8.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"17e-yWiyklbf6BzqOhtNxuQ9YlS+IJ8"',
    mtime: "2026-07-03T09:08:34.784Z",
    size: 382,
    path: "../public/assets/earth-DnUaiYk8.js",
  },
  "/assets/factory-CJ5GuEGl.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"18c-4oN/Jdyh6X2gYmMW7jQKNWdKVjI"',
    mtime: "2026-07-03T09:08:34.784Z",
    size: 396,
    path: "../public/assets/factory-CJ5GuEGl.js",
  },
  "/assets/file-text-B5lTvAwQ.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"176-uKVeGERB1yTn/ZR3cJbh1eUtqfM"',
    mtime: "2026-07-03T09:08:34.784Z",
    size: 374,
    path: "../public/assets/file-text-B5lTvAwQ.js",
  },
  "/assets/dropdown-menu-CWAGMmn8.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"cea6-H9+JkpIiIkl6/Kohy8L/KhYP8IQ"',
    mtime: "2026-07-03T09:08:34.784Z",
    size: 52902,
    path: "../public/assets/dropdown-menu-CWAGMmn8.js",
  },
  "/assets/git-compare-BHx0fE6E.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"112-oaOAvIT7ml0moTz1PyUOVLyEkSs"',
    mtime: "2026-07-03T09:08:34.787Z",
    size: 274,
    path: "../public/assets/git-compare-BHx0fE6E.js",
  },
  "/assets/jsx-runtime-n5LQ9ujS.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2157-x+FjD3p74bnIvIhkIVLOQLFM4M0"',
    mtime: "2026-07-03T09:08:34.787Z",
    size: 8535,
    path: "../public/assets/jsx-runtime-n5LQ9ujS.js",
  },
  "/assets/label-CUCB0Lzh.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"483-f+xPvPRBj85l3qCYB8G6p1GcbnY"',
    mtime: "2026-07-03T09:08:34.788Z",
    size: 1155,
    path: "../public/assets/label-CUCB0Lzh.js",
  },
  "/assets/loader-circle-Bl7wwTNN.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"85-PJTvyp9GxIvSLLiCBRU59iZ8Q24"',
    mtime: "2026-07-03T09:08:34.789Z",
    size: 133,
    path: "../public/assets/loader-circle-Bl7wwTNN.js",
  },
  "/assets/generateCategoricalChart-UpmhMX6I.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"5a885-2ttrhs4WsLGMNDhg6kJuDHJFJcE"',
    mtime: "2026-07-03T09:08:34.786Z",
    size: 370821,
    path: "../public/assets/generateCategoricalChart-UpmhMX6I.js",
  },
  "/assets/map-D76OB9HI.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1f7c-YVHvX1wO32qr07K+Q+46DZD310c"',
    mtime: "2026-07-03T09:08:34.789Z",
    size: 8060,
    path: "../public/assets/map-D76OB9HI.js",
  },
  "/assets/message-square-B20EOjmZ.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"de-+19j92yXg1jT2yl8J/86FKNKcCg"',
    mtime: "2026-07-03T09:08:34.790Z",
    size: 222,
    path: "../public/assets/message-square-B20EOjmZ.js",
  },
  "/assets/market-BxT9C5N3.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"4d6e-19bnWJGOJx6aEKs+XM2A3wBE1ec"',
    mtime: "2026-07-03T09:08:34.790Z",
    size: 19822,
    path: "../public/assets/market-BxT9C5N3.js",
  },
  "/assets/newspaper-BWNPBK5O.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"14d-PBiJncaMnc4cbVP5jpg3otJvRGA"',
    mtime: "2026-07-03T09:08:34.792Z",
    size: 333,
    path: "../public/assets/newspaper-BWNPBK5O.js",
  },
  "/assets/mock-companies-DOsMh2YD.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"e3c-4a128cSu85oYCoL797lCXinx0e4"',
    mtime: "2026-07-03T09:08:34.791Z",
    size: 3644,
    path: "../public/assets/mock-companies-DOsMh2YD.js",
  },
  "/assets/plus-DnfuNtW7.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"8e-2itYeW3KWIFAl/sutMFyZxZEyVE"',
    mtime: "2026-07-03T09:08:34.793Z",
    size: 142,
    path: "../public/assets/plus-DnfuNtW7.js",
  },
  "/assets/mock-company-news-DAcH1U7z.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2096-mD1S10DjJ8YMkNdp2XE69X/LYrE"',
    mtime: "2026-07-03T09:08:34.791Z",
    size: 8342,
    path: "../public/assets/mock-company-news-DAcH1U7z.js",
  },
  "/assets/news-wOjJknnb.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2dc2-oN7yMlvH48doeBfChBxHztNsHBk"',
    mtime: "2026-07-03T09:08:34.792Z",
    size: 11714,
    path: "../public/assets/news-wOjJknnb.js",
  },
  "/assets/page-header-KBYaDscd.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"28e-lvn8IWP1BOV+r+cdvAB+U0xn/7c"',
    mtime: "2026-07-03T09:08:34.793Z",
    size: 654,
    path: "../public/assets/page-header-KBYaDscd.js",
  },
  "/assets/index-B8EwVZTI.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"84bac-hesosVddgaZjIGQZgi9sErXd1Do"',
    mtime: "2026-07-03T09:08:34.768Z",
    size: 543660,
    path: "../public/assets/index-B8EwVZTI.js",
  },
  "/assets/prices-Cz2Ulube.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2a8f-k1S9tGoc5U4FSkOcuzloB/aUuBI"',
    mtime: "2026-07-03T09:08:34.795Z",
    size: 10895,
    path: "../public/assets/prices-Cz2Ulube.js",
  },
  "/assets/radar-BYXsYask.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1eb-WzSU/WQh+HQR3vdrQ1ZEBtpunFY"',
    mtime: "2026-07-03T09:08:34.796Z",
    size: 491,
    path: "../public/assets/radar-BYXsYask.js",
  },
  "/assets/procurement-p-msYyFG.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"29e3-pes/70ryz9gsrLXPyBdNJ9Uo/jI"',
    mtime: "2026-07-03T09:08:34.795Z",
    size: 10723,
    path: "../public/assets/procurement-p-msYyFG.js",
  },
  "/assets/refresh-cw-DJUgOTNr.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"136-iVzl//YMom8mEaqGj+jtI724NOA"',
    mtime: "2026-07-03T09:08:34.796Z",
    size: 310,
    path: "../public/assets/refresh-cw-DJUgOTNr.js",
  },
  "/assets/reports-Cd4f3muR.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2442-Z4kFQjWZIixYrmz6A8/UPeHq5og"',
    mtime: "2026-07-03T09:08:34.797Z",
    size: 9282,
    path: "../public/assets/reports-Cd4f3muR.js",
  },
  "/assets/risk-D2nipk8Y.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2463-qOcLXm3D3qjnxfXcoqV0mdMHYsI"',
    mtime: "2026-07-03T09:08:34.797Z",
    size: 9315,
    path: "../public/assets/risk-D2nipk8Y.js",
  },
  "/assets/risk-badge-3U59-BfT.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"204-AY37FAeO2fgyXLLPx2nU2/davSY"',
    mtime: "2026-07-03T09:08:34.797Z",
    size: 516,
    path: "../public/assets/risk-badge-3U59-BfT.js",
  },
  "/assets/search-Cr1alROc.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"a3-DAVLomxPu0W+CWOfaGS52Zgz9aI"',
    mtime: "2026-07-03T09:08:34.799Z",
    size: 163,
    path: "../public/assets/search-Cr1alROc.js",
  },
  "/assets/send-3HqKDgXM.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"117-VvrKpyIYNOrTKwEILwViY3i3ecM"',
    mtime: "2026-07-03T09:08:34.799Z",
    size: 279,
    path: "../public/assets/send-3HqKDgXM.js",
  },
  "/assets/shield-alert-9Y_5-gpD.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"156-6dCO2x5Nvgj3FgNkjz7V8iE2aME"',
    mtime: "2026-07-03T09:08:34.800Z",
    size: 342,
    path: "../public/assets/shield-alert-9Y_5-gpD.js",
  },
  "/assets/search-4Y3O-Ylu.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2502-HvqDspIa1RUWvf81ioRUMrBRL4Y"',
    mtime: "2026-07-03T09:08:34.798Z",
    size: 9474,
    path: "../public/assets/search-4Y3O-Ylu.js",
  },
  "/assets/routes-DCFz1Bj9.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"4dab-dk7Os25yPjezrYzXL6Bhy8/ToCc"',
    mtime: "2026-07-03T09:08:34.798Z",
    size: 19883,
    path: "../public/assets/routes-DCFz1Bj9.js",
  },
  "/assets/trending-down-CVd78YMv.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"a7-zobH1KilyKXRZzZtNBRx+LJuC7Y"',
    mtime: "2026-07-03T09:08:34.802Z",
    size: 167,
    path: "../public/assets/trending-down-CVd78YMv.js",
  },
  "/assets/react-dom-CQmWuZA8.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"dda-+IRX1VEQ+614FViNS2l9Mg3wio8"',
    mtime: "2026-07-03T09:08:34.796Z",
    size: 3546,
    path: "../public/assets/react-dom-CQmWuZA8.js",
  },
  "/assets/shield-check-RJOI63us.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"135-WJmacWUsCWnC2ylIdSdZP47PjKU"',
    mtime: "2026-07-03T09:08:34.800Z",
    size: 309,
    path: "../public/assets/shield-check-RJOI63us.js",
  },
  "/assets/stat-card-D9N0zewM.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"502-ZxWan7E5Y8dZnjvf+GTc10IYKgM"',
    mtime: "2026-07-03T09:08:34.802Z",
    size: 1282,
    path: "../public/assets/stat-card-D9N0zewM.js",
  },
  "/assets/sheet-RFeW-6F5.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"9ee-r07nl11kTo0Oh3ufTsY8R9zmZS4"',
    mtime: "2026-07-03T09:08:34.799Z",
    size: 2542,
    path: "../public/assets/sheet-RFeW-6F5.js",
  },
  "/assets/styles-Cza_H71i.css": {
    type: "text/css; charset=utf-8",
    etag: '"196a6-uJOfRgYKCrbeoppG71876Z+Al5k"',
    mtime: "2026-07-03T09:08:34.807Z",
    size: 104102,
    path: "../public/assets/styles-Cza_H71i.css",
  },
  "/assets/users-CMoH1Sms.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"127-xAXp+YBAV+c58fMXcHtevKafW+s"',
    mtime: "2026-07-03T09:08:34.805Z",
    size: 295,
    path: "../public/assets/users-CMoH1Sms.js",
  },
  "/assets/x-COcS-5IT.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"8f-gayXK3zKUawRxkPagKs8vZwJg0g"',
    mtime: "2026-07-03T09:08:34.806Z",
    size: 143,
    path: "../public/assets/x-COcS-5IT.js",
  },
  "/assets/trending-up-B4RhHAzP.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"a4-z2EaTtptUkjSeQ/OAWtNSsPVKuQ"',
    mtime: "2026-07-03T09:08:34.803Z",
    size: 164,
    path: "../public/assets/trending-up-B4RhHAzP.js",
  },
  "/assets/utils-DbbrEv-p.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"6f42-rNji76gbpEIcpMKebytO/OCg5ik"',
    mtime: "2026-07-03T09:08:34.806Z",
    size: 28482,
    path: "../public/assets/utils-DbbrEv-p.js",
  },
  "/assets/sparkles-D9JfmPPi.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"1e3-RYTMc0ab4gRS06pz9FTmxM/Ay/k"',
    mtime: "2026-07-03T09:08:34.802Z",
    size: 483,
    path: "../public/assets/sparkles-D9JfmPPi.js",
  },
  "/assets/useQuery-BB0wjU-m.js": {
    type: "text/javascript; charset=utf-8",
    etag: '"2252-lD36uxxUneSEXNT4+wNx0DKsQ0M"',
    mtime: "2026-07-03T09:08:34.804Z",
    size: 8786,
    path: "../public/assets/useQuery-BB0wjU-m.js",
  },
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
var headers = (m) =>
  function headersRouteRule(event) {
    for (const [key, value] of Object.entries(m.options || {}))
      event.res.headers.set(key, value);
  };
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [
    {
      name: "headers",
      route: "/assets/**",
      handler: headers,
      options: { "cache-control": "public, max-age=31536000, immutable" },
    },
  ];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    if (s.length > 1) {
      if (s[1] === "assets")
        r.unshift({
          data: $0,
          params: { _: s.slice(2).join("/") },
        });
    }
    return r;
  };
})();
var _lazy_aB2W33 = defineLazyEventHandler(
  () => import("./_chunks/ssr-renderer.mjs"),
);
var findRoute = /* @__PURE__ */ (() => {
  const data = {
    route: "/**",
    handler: _lazy_aB2W33,
  };
  return (_m, p) => {
    return {
      data,
      params: { _: p.slice(1) },
    };
  };
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(
    typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2),
    res,
  );
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL))
      return {
        status: 302,
        headers: new Headers({
          location: `${baseURL}${url.pathname.slice(1)}${url.search}`,
        }),
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
      ...(unhandled
        ? {
            status,
            unhandled: true,
          }
        : typeof error.toJSON === "function"
          ? error.toJSON()
          : {
              status,
              statusText,
              message: error.message,
            }),
    },
  };
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
  for (const handler of errorHandlers)
    try {
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
      if (errors)
        errors.push({
          error,
          context: errorCtx,
        });
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return error_handler_default(error, event);
    },
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError,
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) =>
    findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length)
      middleware.push(...routeRules.routeRuleMiddleware);
    if (route?.data?.middleware?.length)
      middleware.push(...route.data.middleware);
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
  return (nitroApp.hooks = new HookableCore());
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) return { routeRuleMiddleware: [] };
  const routeRules = {};
  for (const layer of m)
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (
          typeof currentRule.options === "object" &&
          typeof rule.options === "object"
        )
          currentRule.options = {
            ...currentRule.options,
            ...rule.options,
          };
        else currentRule.options = rule.options;
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params,
        };
      } else if (rule.options !== false)
        routeRules[rule.name] = {
          ...rule,
          params: layer.params,
        };
    }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort(
    (a, b) => (a.handler?.order || 0) - (b.handler?.order || 0),
  );
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) continue;
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware,
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
        context,
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
      context.waitUntil(
        nitroHooks.callHook("cloudflare:scheduled", {
          controller,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:email", {
          message,
          event: message,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:queue", {
          batch,
          event: batch,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:tail", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(
        nitroHooks.callHook("cloudflare:trace", {
          traces,
          env,
          context,
        }) || Promise.resolve(),
      );
    },
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx,
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({
  fetch(cfRequest, env, context, url) {
    if (env.ASSETS && isPublicAssetURL(url.pathname))
      return env.ASSETS.fetch(cfRequest);
  },
});
//#endregion
export { cloudflare_module_default as default };
