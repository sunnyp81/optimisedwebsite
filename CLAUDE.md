# optimisedwebsite — Project Brain

> Per-repo brain, migrated from central claude-memory 2026-06-20. Canonical project memory now lives here.

## Current state

- **What:** optimisedwebsite.com — a standalone-brand (NO Sunny Patel branding) marketing site for a build-to-order SEO website service (£1,500-3,000 per site). The marketing site ranks for buying-intent keywords and feeds leads into an automated Astro-site-builder pipeline. Central entity throughout: "SEO-optimised website".
- **Stack:** Astro 5 + Tailwind 4, Cloudflare Pages. JSON-LD schema per page (entity-interconnected @graph), Satori OG images, @astrojs/sitemap.
- **Repo:** `sunnyp81/optimisedwebsite`, branch `master`. Local `C:\Users\sunny\repos\optimisedwebsite`. CF Pages auto-deploys from master.
- **Architecture:** hub-and-spoke. Hubs = `/services/` (transactional, 6), `/learn/` (informational, 10-14), `/compare/` (commercial, 8), plus planned `/industry/` (vertical, ~11). Core pages: home, how-it-works, portfolio, pricing, order, about, contact. ~31 pages live; topical map plans 52.
- **Revenue model:** £2,000 avg/site. Pipeline (designed, on Hermes VPS) takes a brief → keyword engine → content generator with semantic quality gates → master Astro template → GitHub push → CF Pages → WhatsApp SHIP/HOLD gate → DNS flip + client delivery.

## Key facts & warnings

- **Brand separation:** generated client sites carry the CLIENT's brand, never OptimisedWebsite branding. AuthorBox component exists but disabled by default (no fake E-E-A-T author profiles in v1).
- **Content gates (every marketing-site page before publish):** single H1 with central entity; start-with-answer ≥95%; ≥80% imperative/spec/benefit sentences; ≥95% zero-comma or enumeration-only; ZERO LLM fluff (delve/unlock/embark/seamless/elevate/"it's worth noting"/"when it comes to"/"in today's"); valid heading hierarchy; no two pages share a canonical query (zero cannibalisation). British English, no em/en-dashes.
- **Internal linking rules:** no links in first paragraph of a section; max 1 link per H2, spaced ≥1 section apart; anchor = target page's seed query; same anchor never points to two URLs; learn/compare pages carry MORE outbound links than service pages; hubs link to all spokes, spokes link back to hub + 2-3 siblings; top-importance pages avoid outbound links unless competitors do too.
- **Schema:** entity-interconnected @graph — sitewide Organization + WebSite (`#organization` / `#website` @ids), per-page BreadcrumbList, then page-type schemas (Service/Offer/PriceSpec, Article/FAQPage, ItemList, HowTo, CollectionPage/CreativeWork) all cross-referencing via @id.
- **Infra (pipeline):** Hermes VPS at `/home/hermes/optimised-website/` (engine scripts + master-template + builds). GitHub PAT needs `repo` scope; CF API token needs Pages-create. `aaa-intake` CF Worker validates/forwards briefs. WhatsApp gate must never accidentally auto-deploy to production. Credentials/tokens live in the Drive-only master-builds vault, never in git.
- **Reusable assets:** 6 vanilla-JS infographics (AnimatedCounters, InteractiveTimeline, SpeedRace, SeoScoreComparison, PageAnatomy on homepage; GrowthChart SVG sparklines on portfolio) — ~12KB total, embeddable into learn-hub articles as link-earning assets. `growth: number[]` field on `PortfolioItem` in `portfolio.ts`.
- **Full topical map + keyword clusters + build priority** are preserved in central `optimisedwebsite-topical-map.md` and the system architecture in `optimisedwebsite-design-may13.md`.

## History

- **2026-05-13:** full system design — marketing site topical architecture + automated site-builder pipeline spec (keyword engine, content generator, quality gates, master template, deploy orchestrator, WhatsApp gate).
- **2026-05-21:** 6 interactive infographics shipped (`5b5078b`) — homepage conversion + portfolio ROI proof, replacing static cards/tables.
- **Topical map:** 52-page plan (31 existing + 21 new across learn/industry/case-studies/glossary). Priority new pages: how-google-ranks-websites (2,400 vol), eeat-and-trust-signals, site-speed-and-core-web-vitals, /industry/ecommerce.
