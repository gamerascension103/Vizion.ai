# Decisions log — Vizion Corp AI

Locked decisions. Append-only. If a brief proposes something that conflicts with an entry here, the brief is wrong — stop and flag to the operator.

Format: dated entry, one-line decision, one-line reason. Longer reasoning lives in `design_canon.md`, `positioning.md`, `competitor_landscape.md`, or `landing_page_research.md`.

---

## 2026-05-13 — Brand structure

- **Parent brand:** Vizion Corp AI. AI + business intelligence for operations. The consultancy.
- **Flagship service:** Captain's Method. Four-phase engagement. The named service that's sold.
- **Proprietary tooling:** Mr. Clean. Internal web app that powers Phase 1. Back-of-house except where the briefing explicitly invites it.

Reason: parent/service/tooling split is the right way to talk about Vizion publicly. Captain's Method is what the page sells; Mr. Clean is the proof point that the consultancy ships its own tools.

## 2026-05-13 — Mr. Clean naming posture

- **Mr. Clean stays back-of-house in the hero and nav.**
- **Mr. Clean may be named in the methodology section** (Section 4 — the engagement) where Phase 1 is explained.

Reason: hero focus is the engagement and its output, not the tooling. Naming the tool in the hero adds a noun the buyer doesn't need yet. May revisit if the proprietary-tool angle becomes more central to conversion.

## 2026-05-13 — Tech stack

- **Framework:** Next.js 14+ (App Router), TypeScript, Tailwind
- **Hosting:** Vercel
- **Content:** Code-defined. No CMS until content velocity demands one.
- **Lead capture / email:** Resend (transactional). Form storage TBD per brief — likely a Turso table or a third-party form endpoint.
- **Analytics:** Plausible (privacy-respecting, lightweight).
- **Auth:** None in v1. The site has no logged-in surface. Re-evaluate if a client portal or gated content section ships.

If a brief proposes a different stack choice, stop and flag — the brief is wrong, not the stack.

## 2026-05-13 — Brand direction (visual)

- **Direction:** veteran-owned, machine-enhanced, current-issue avionics aesthetic.
- **NOT:** vintage-field-guide military, costume-military, defense-contractor cosplay, AI-consulting cyan-mesh, generic SaaS dashboard.

Reason: the field is saturated with cyan-on-black neural-mesh imagery. Vintage military reads as costume. Avionics-current — instrument panels, signal-agent amber, machine-precise typography — is the wedge. Full reasoning in `competitor_landscape.md`.

## 2026-05-13 — Palette (locked)

- **Ground:** `#0B0D11` near-black gunmetal
- **Surface (dashboard inner):** `#0E1116`
- **Surface (toolbar):** `#11141A`
- **Rule lines (primary):** `#22272F`
- **Rule lines (inner):** `#1A1E25`
- **Ink primary (warm bone):** `#EDE6D5` body text on dark
- **Ink secondary (muted bone):** `#A39C8C` sub copy, dimmed text
- **Ink tertiary:** `#8A8F99` labels, captions
- **Ink quaternary:** `#5E6168` metadata, timestamps
- **Signal-leak:** `#E36842` amber-red — exclusive use for leak indicators, risk numbers, warning states
- **Signal-agent:** `#F2B33D` warm amber — exclusive use for AI-agent indicators, eyebrow accents, active-status signals, the pivot line in the hook
- **Signal-leak border:** `#4A2218` for risk-banner border

Reason: pure red signals danger in financial UI (research from `landing_page_research.md`). Amber-red lets us flag cost without alarming. Amber signal-agent has aviation warning-light heritage and Bloomberg-terminal precedent — reads as machine signal, not decoration. Color is signal, not decoration. Full palette discipline in `design_canon.md`.

## 2026-05-13 — Type stack (locked, v1)

- **Display + body sans:** Inter Tight (variable, weights 400/500/600/700)
- **Mono (numbers, labels, status):** JetBrains Mono (weights 400/500)
- **Source:** Google Fonts (no license dance)

Roles:
- Eyebrow → JetBrains Mono, 10–11px, 0.24em letter-spacing, uppercase
- Headline pivot → Inter Tight 44px+ weight 600
- Headline fragments → Inter Tight 30px weight 400, muted bone
- Body / sub → Inter Tight 14–15px weight 400
- Numbers / financial data → JetBrains Mono, tabular-nums, varies in size
- Labels / status / UI chrome → JetBrains Mono, 9–11px, letter-spaced, uppercase

If a brief proposes a different font, stop and flag — type stack is canon. Future evaluation of paid fonts (PP Neue Montreal, Söhne, Berkeley Mono) is allowed but requires explicit decision before substitution.

## 2026-05-13 — Hero direction (locked)

The hero is the **fragment-and-pivot hook + risk banner + Phase 3 dashboard preview + CTAs.**

- **Eyebrow:** `CAPTAIN'S METHOD · FOUR-PHASE ENGAGEMENT` (amber, mono, uppercase)
- **Hook fragments (muted bone, weight 400, ~30px):**
  - "Software you forgot."
  - "Customers who never paid."
  - "Vendors who quietly raised prices."
- **Pivot (warm bone → amber, weight 600, ~44px):**
  - Line 1: "The bleed has a number."
  - Line 2: "We find it." (amber)
- **Sub:** "A risk evaluation that identifies what's actually costing you the most, a dashboard built for your business, and an AI agent on watch. Operator approves every action."
- **Veteran stamp:** "VETERAN OWNED — AIR FORCE" between nav and titleblock, mono, ultra-tracked, with rule lines flanking
- **Risk banner:** "Revenue at risk · 12 months · −$3,287,280" with sub copy, sample tag, amber-red border accent
- **Dashboard frame:** tagged `PHASE 3 DELIVERABLE`. Two-column grid: leaks dominate (5 ranked, monthly + annual cost), sidebar shows month context (revenue MTD, pace, cash). Agent activity strip across the bottom.
- **CTAs:** Primary `REQUEST BRIEFING`, secondary `SEE WHAT WE FIND` (muted)

Reason: hook lands in 6 seconds (fragments rise, pivot lands, sub clarifies, risk number animates, dashboard reveals). Validated against `landing_page_research.md` — PAS-structured, eyebrow technique, single primary CTA, trust signal above fold, pain-first.

## 2026-05-13 — Rejected hero directions (do not revisit without operator approval)

- Radar scope (too tropey, Pelican Brief feel)
- Sonar (off-metaphor — implies active probing, Vizion is continuous)
- HUD / targeting reticles (uncomfortable: customer = "target")
- Engineering schematic / cutaway cash-flow diagram
- Cyan-on-black / V-mark / eye+brain reference moodboard
- Vintage-field-guide military (warm bone palette, olive drab — WWII archival feel)
- Goal/pace-as-hero dashboard (pre-correction; leaks are the priority, not pace)
- "Clean your books" framing in hero sub (cleaning is plumbing, not product)

## 2026-05-13 — Forbidden vocabulary (copy)

Words and phrases that may not appear in copy without explicit operator approval. They are how the entire competitive field talks; using them puts Vizion in the herd.

> transform, unlock, scale, operationalize, harness, leverage, journey, empower, AI-powered, intelligent, hybrid intelligence, responsible AI, beyond pilots, at scale, seamless, robust, cutting-edge, next-generation, revolutionize, democratize

If a draft contains any of these, rewrite. Full reasoning in `positioning.md`.

## 2026-05-13 — In-house vocabulary (copy)

Words used freely, treated as proper nouns of the brand:

> money leaks, the bleed, visibility, the dashboard, decision latency, debrief, handler agents, operator, operator approves, industry-specific, risk evaluation

These are Vizion's language. Use them in preference to weaker substitutes.

## 2026-05-13 — Imagery posture

- **No stock photography. Ever.**
- **No AI-generated decorative imagery.** AI-generated illustrations that look AI-generated are fatal for a brand selling AI competence.
- **No generic icon sets without intentional curation** (lucide / feather acceptable if used sparingly and consistent).
- **Founder photography:** real photos of Jake and Kyle in the founders section. Photographed deliberately. No avatars, no silhouettes.
- **Process diagrams:** acceptable only if they convey information text can't. No "5-step methodology" graphics for their own sake.

## 2026-05-13 — Single primary CTA

- **One primary CTA per page section.** Secondary CTAs allowed only if visually subordinate.
- **Primary CTA copy:** `REQUEST BRIEFING` (locked for hero, repeated at final CTA)
- **Secondary CTA copy:** `SEE WHAT WE FIND` (hero only)

Reason: single-CTA pages convert at 13.5% vs. 10.5% for multi-CTA (research, `landing_page_research.md`).

## 2026-05-13 — Verification posture

- **Operator (Jake) verifies in real Chrome — desktop AND mobile — every brief that touches UI.**
- **Cascade verifies build (TypeScript, Tailwind, accessibility) and reports pass/fail.**
- **Cascade does not self-grade perceptual quality.** "Looks signature" is not a verification status. If Cascade has uncertainty about whether something feels right, surface it; don't assert it.

## 2026-05-13 — Brief sequencing for site build

- **Hero is the first build brief.** Locks tonal register Cascade will use everywhere.
- **Section 2 (Pain) is the second brief.** Locks copy voice.
- **Sections 3–7 (Cost/Agitate, Engagement, Why us, Proof, Founders) batched** once voice is locked.
- **Section 8 (FAQ) and Section 9 (Final CTA) as standalone briefs** at the end.

Reason: section 2 is where the writing voice gets established. If voice lands wrong on section 2, batching sections 3–7 would waste briefs. Get voice locked, then accelerate.

---

## 2026-05-13 — Nav anchors deferred

Nav links in the hero (Captain's Method, How It Works, Engagement) are rendered as static text in v1 (Brief 01). Smooth-scroll anchor wiring deferred until Sections 4 (Engagement) and beyond are built. No code TODOs.

---

*Append new entries below. Don't edit historic entries — supersede with a new dated entry instead.*
