import{a as e,n as t,t as n}from"./jsx-runtime-n5LQ9ujS.js";import{r}from"./utils-DbbrEv-p.js";import{t as i}from"./loader-circle-Bl7wwTNN.js";import{t as a}from"./sparkles-D9JfmPPi.js";import{t as o}from"./message-square-B20EOjmZ.js";import{t as s}from"./plus-DnfuNtW7.js";import{t as c}from"./send-3HqKDgXM.js";import{t as l}from"./button-CoQ0AAlw.js";import{t as u}from"./page-header-KBYaDscd.js";var d=r(`bot`,[[`path`,{d:`M12 8V4H8`,key:`hb8ula`}],[`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`,key:`enze0r`}],[`path`,{d:`M2 14h2`,key:`vft8re`}],[`path`,{d:`M20 14h2`,key:`4cs60a`}],[`path`,{d:`M15 13v2`,key:`1xurst`}],[`path`,{d:`M9 13v2`,key:`rq6x2g`}]]),f=r(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),p=e(t()),m=n(),h={default:`I'm GMIntel AI, your textile intelligence copilot. I can help you find suppliers, analyze markets, compare companies, assess risks, and generate sourcing reports. What would you like to know?`,supplier:`Based on your requirements, here are the top matches from our database:

**1. Arvind Mills Ltd** (India) — Trust: 94 | Risk: Low | MOQ: 200 units | GOTS certified
**2. Vardhman Textiles** (India) — Trust: 91 | Risk: Low | MOQ: 500 units | ISO 9001
**3. Raymond UCO Denim** (India) — Trust: 88 | Risk: Med | MOQ: 1,000 units | BSCI

Would you like a detailed comparison or help drafting an RFQ?`,price:`Current cotton index (COTTON·US): **$0.74/lb** (+1.8% MoM)

Country price comparison for cotton fabric:
- India: $1.20–$1.80/m²
- Bangladesh: $1.05–$1.60/m²
- Pakistan: $1.10–$1.70/m²
- Turkey: $1.45–$2.10/m²

Prices are AI-estimated and sourced from public trade data. Shall I generate a full pricing report?`,risk:`Risk analysis for South Asia textile sector:

**Bangladesh** — Overall: Medium
- Labour regulation compliance: improving
- Currency risk (BDT): moderate
- Logistics: Chittagong port congestion (-2 pts)

**India** — Overall: Low
- Strong regulatory framework
- GST clarity improving
- Diversified manufacturing base

Want a full risk report for a specific country or supplier?`,sustainability:`Sustainability intelligence summary:

**Key certifications in demand:** GOTS 7.0 (updated 2026), OEKO-TEX MADE IN GREEN, Bluesign

**Regulatory alerts:**
- EU Eco-Design Regulation effective Jan 2027 — requires full Tier-2 traceability
- CBAM carbon border adjustment now covers synthetic fibres

**Top certified hubs:** India (23% GOTS coverage), Turkey (18%), Portugal (14%)

Would you like to filter suppliers by certification?`,market:`Global textile market intelligence — Q2 2026:

**Trending segments:**
- Technical textiles: +22% demand growth (automotive, medical)
- Sustainable fabrics: GOTS cotton +18% premium pricing
- Athleisure: recovery in Vietnam export orders (+14%)

**Watch list:**
- Bangladesh: order book at 94% capacity through Q3
- Turkey: denim exports hit 5-year high

Want a full market report for a specific category?`,report:`I can generate the following reports instantly:

**Supplier Reports:** Company deep-dive, trust/risk scores, certifications, contact info
**Market Reports:** Category trends, country rankings, demand forecasts
**Price Reports:** Historical charts, country comparisons, forward estimates
**Competitor Reports:** Brand-to-brand sourcing comparison

Which report type would you like? Just tell me the company, country, or product.`,compare:`**Supplier comparison — India Cotton Mills:**

| Supplier | Trust | Risk | MOQ | Lead Time |
|---|---|---|---|---|
| Arvind Mills | 94 | Low | 200 | 45 days |
| Vardhman | 91 | Low | 500 | 38 days |
| Welspun | 87 | Low | 1,000 | 52 days |

Arvind Mills scores highest on trust and has the lowest MOQ. Vardhman offers the fastest lead time. Shall I include certifications or export history in this comparison?`};function g(e){let t=e.toLowerCase();return t.includes(`supplier`)||t.includes(`manufacturer`)||t.includes(`factory`)||t.includes(`source`)||t.includes(`find`)?h.supplier:t.includes(`price`)||t.includes(`cost`)||t.includes(`cotton`)||t.includes(`polyester`)||t.includes(`yarn`)?h.price:t.includes(`risk`)||t.includes(`compliance`)||t.includes(`safe`)||t.includes(`audit`)?h.risk:t.includes(`sustain`)||t.includes(`gots`)||t.includes(`organic`)||t.includes(`certif`)||t.includes(`eco`)?h.sustainability:t.includes(`market`)||t.includes(`trend`)||t.includes(`demand`)||t.includes(`growth`)?h.market:t.includes(`report`)||t.includes(`generat`)||t.includes(`export`)||t.includes(`analysis`)?h.report:t.includes(`compare`)||t.includes(`versus`)||t.includes(`vs`)||t.includes(`difference`)?h.compare:h.default}function _(e){return e.split(`
`).map((e,t)=>{let n=/^[-•]\s/.test(e),r=e.replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`);return n?(0,m.jsx)(`li`,{className:`ml-2`,dangerouslySetInnerHTML:{__html:r.replace(/^[-•]\s/,``)}},t):e.trim()===``?(0,m.jsx)(`div`,{className:`h-2`},t):(0,m.jsx)(`p`,{dangerouslySetInnerHTML:{__html:r}},t)})}function v({msg:e}){let t=e.role===`user`,n=e.content.includes(`
- `)||e.content.includes(`
• `);return(0,m.jsxs)(`div`,{className:`flex gap-3 ${t?`flex-row-reverse`:``}`,children:[(0,m.jsx)(`div`,{className:`h-7 w-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${t?`bg-primary/20 text-primary`:`bg-muted border border-border text-primary`}`,children:t?(0,m.jsx)(f,{className:`h-4 w-4`}):(0,m.jsx)(d,{className:`h-4 w-4`})}),(0,m.jsxs)(`div`,{className:`max-w-[80%] ${t?`items-end`:`items-start`} flex flex-col gap-1`,children:[(0,m.jsx)(`div`,{className:`rounded-lg px-4 py-3 text-sm leading-relaxed ${t?`bg-primary text-primary-foreground`:`bg-card border border-border text-foreground`}`,children:t?(0,m.jsx)(`span`,{className:`whitespace-pre-wrap`,children:e.content}):(0,m.jsx)(`div`,{className:`prose-chat space-y-1`,children:n?(0,m.jsx)(`ul`,{className:`list-disc pl-4 space-y-0.5`,children:_(e.content)}):(0,m.jsx)(`div`,{className:`space-y-1`,children:_(e.content)})})}),(0,m.jsx)(`div`,{className:`text-[10px] font-mono text-muted-foreground px-1`,children:e.ts.toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`,timeZone:`UTC`})})]})]})}function y(){let[e,t]=(0,p.useState)([{id:`1`,title:`Cotton supplier search — India`,ts:new Date(Date.now()-864e5)},{id:`2`,title:`Bangladesh risk assessment`,ts:new Date(Date.now()-36e5*5)}]),[n,r]=(0,p.useState)(`1`),[f,_]=(0,p.useState)({1:[{id:`a1`,role:`assistant`,content:h.default,ts:new Date(Date.now()-864e5)},{id:`a2`,role:`user`,content:`Find me cotton manufacturers in India with GOTS certification`,ts:new Date(Date.now()-864e5+6e4)},{id:`a3`,role:`assistant`,content:h.supplier,ts:new Date(Date.now()-864e5+9e4)}],2:[{id:`b1`,role:`assistant`,content:h.default,ts:new Date}]}),[y,b]=(0,p.useState)(``),[x,S]=(0,p.useState)(!1),C=(0,p.useRef)(null);(0,p.useEffect)(()=>{C.current?.scrollIntoView({behavior:`smooth`})},[f,n]);let w=()=>{let e=y.trim();if(!e||x)return;let r={id:crypto.randomUUID(),role:`user`,content:e,ts:new Date};_(e=>({...e,[n]:[...e[n]??[],r]})),b(``),S(!0),t(t=>t.map(t=>t.id===n&&t.title.startsWith(`New`)?{...t,title:e.slice(0,40)}:t)),setTimeout(()=>{let t={id:crypto.randomUUID(),role:`assistant`,content:g(e),ts:new Date};_(e=>({...e,[n]:[...e[n]??[],t]})),S(!1)},1200)},T=()=>{let e=crypto.randomUUID();t(t=>[{id:e,title:`New conversation`,ts:new Date},...t]),_(t=>({...t,[e]:[{id:crypto.randomUUID(),role:`assistant`,content:h.default,ts:new Date}]})),r(e)},E=f[n]??[];return(0,m.jsxs)(`div`,{className:`space-y-0 -m-6 md:-m-8 h-[calc(100vh-3.5rem)] flex flex-col`,children:[(0,m.jsx)(`div`,{className:`px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-border flex-none`,children:(0,m.jsx)(u,{eyebrow:`Command Center · AI`,title:`AI Assistant`,description:`Your GMIntel sourcing copilot. Ask about suppliers, prices, risks, and market trends.`})}),(0,m.jsxs)(`div`,{className:`flex flex-1 min-h-0`,children:[(0,m.jsxs)(`aside`,{className:`hidden md:flex w-64 flex-col border-r border-border bg-card/30`,children:[(0,m.jsx)(`div`,{className:`p-3 border-b border-border`,children:(0,m.jsxs)(l,{variant:`outline`,size:`sm`,className:`w-full gap-2`,onClick:T,children:[(0,m.jsx)(s,{className:`h-3.5 w-3.5`}),` New conversation`]})}),(0,m.jsx)(`div`,{className:`flex-1 overflow-y-auto p-2 space-y-0.5`,children:e.map(e=>(0,m.jsxs)(`button`,{onClick:()=>r(e.id),className:`w-full text-left rounded-md px-3 py-2.5 transition-colors ${n===e.id?`bg-sidebar-accent text-sidebar-accent-foreground`:`text-muted-foreground hover:bg-muted/60`}`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(o,{className:`h-3.5 w-3.5 shrink-0`}),(0,m.jsx)(`span`,{className:`text-xs truncate`,children:e.title})]}),(0,m.jsx)(`div`,{className:`text-[10px] font-mono text-muted-foreground/60 mt-0.5 pl-5`,children:e.ts.toLocaleDateString(`en-US`,{timeZone:`UTC`})})]},e.id))})]}),(0,m.jsxs)(`div`,{className:`flex-1 flex flex-col min-w-0`,children:[(0,m.jsxs)(`div`,{className:`flex-1 overflow-y-auto p-6 space-y-4`,children:[E.map(e=>(0,m.jsx)(v,{msg:e},e.id)),x&&(0,m.jsxs)(`div`,{className:`flex gap-3`,children:[(0,m.jsx)(`div`,{className:`h-7 w-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0`,children:(0,m.jsx)(d,{className:`h-4 w-4 text-primary`})}),(0,m.jsxs)(`div`,{className:`bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground`,children:[(0,m.jsx)(i,{className:`h-4 w-4 animate-spin text-primary`}),`Analyzing intelligence data…`]})]}),(0,m.jsx)(`div`,{ref:C})]}),(0,m.jsxs)(`div`,{className:`p-4 border-t border-border bg-card/30`,children:[E.length<=1&&(0,m.jsx)(`div`,{className:`flex flex-wrap gap-1.5 mb-3`,children:[`Find cotton suppliers in India with GOTS`,`What are current polyester yarn prices?`,`Assess risk for Bangladesh manufacturers`,`Compare top denim mills in Turkey`,`Sustainability certifications overview`,`Generate a market trend report`].map(e=>(0,m.jsx)(`button`,{onClick:()=>{b(e)},className:`text-[11px] font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors`,children:e},e))}),(0,m.jsxs)(`div`,{className:`flex gap-3`,children:[(0,m.jsxs)(`div`,{className:`flex-1 relative`,children:[(0,m.jsx)(a,{className:`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60`}),(0,m.jsx)(`input`,{value:y,onChange:e=>b(e.target.value),onKeyDown:e=>e.key===`Enter`&&!e.shiftKey&&w(),placeholder:`Ask about suppliers, prices, risks, markets…`,className:`w-full h-10 pl-9 pr-4 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary`})]}),(0,m.jsx)(l,{onClick:w,disabled:!y.trim()||x,size:`sm`,className:`h-10 px-4`,children:(0,m.jsx)(c,{className:`h-4 w-4`})})]}),(0,m.jsx)(`div`,{className:`mt-2 text-[10px] font-mono text-muted-foreground text-center`,children:`AI responses are estimates and intelligence summaries · Not financial advice`})]})]})]})]})}export{y as component};