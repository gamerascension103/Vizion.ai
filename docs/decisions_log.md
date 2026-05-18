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

## 2026-05-14 — Package manager

- **npm**, not pnpm. pnpm wasn't installed on the build machine during Brief 00.
- Functionally identical for this project's needs. No migration planned.
- If pnpm becomes available later, npm remains the locked tool unless explicitly updated.

## 2026-05-14 — Nav anchors deferred

Nav links in the hero (Captain's Method, How It Works, Engagement) are rendered as static text in v1 (Brief 01). Smooth-scroll anchor wiring is deferred until Sections 4 (Engagement) and beyond are built. No code TODOs — tracked here.

## 2026-05-14 — Insignia (locked)

Vizion's brand mark is a polished amber shield insignia in the modernized officer-pin tradition. The mark exists in two canonical forms: **pin standalone** and **full lockup** (pin + wordmark + descriptor).

**Pin composition (eight assembled components):**
1. Outer shield rim — polished amber, beveled stroke (`#FFD879` → `#F2B33D` → `#6B4F18`)
2. Perimeter band with chronograph tick marks at top
3. Inner panel — recessed inset where the V mounts, with side-rib gradations
4. The V — raised relief, full vertical gradient, the focal mass
5. Secondary chevron — single stripe below the V, same amber metal as the V
6. Two steel fasteners at upper corners of the outer shield
7. Three steel cardinal markers — top center, left, right (no bottom — would crowd the chevron)
8. Hairline drop shadow at the base (the only "render" concession outside the mark itself)

**Multi-metal color logic — exclusive to the insignia:**
- *Brass amber* — rim, perimeter band, inner panel borders, V, chevron, divider lines
- *Cool steel* (`#5E6168` / `#22272F` family) — fasteners, cardinal markers (the "hardware" metal)
- *Deep recess* (`#1A0F03` / `#3D2E10`) — shadow zones, recessed channels
- *Warm bone* (`#EDE6D5`) — reserved for the wordmark below the pin, not used within the pin itself

**Full lockup composition (top to bottom):**
1. The pin
2. 20px vertical gap
3. **VIZION CORP** — Inter Tight, weight 600, 32px, letter-spacing 0.34em, color ink-primary (`#EDE6D5`), padding-left 0.34em (compensates for the trailing letter-spacing visual drift). Two-space gap between "VIZION" and "CORP" (`&nbsp;&nbsp;` in HTML).
4. 10px vertical gap
5. **Money leaks, made visible** — JetBrains Mono, 9px, weight 500, letter-spacing 0.24em, color signal-agent (`#F2B33D`), sentence case (uppercase rendering is acceptable for stylistic use but lowercase reads more issued).

## 2026-05-14 — Insignia canon exception (locked)

The insignia is the **only** element on the site permitted to use dimensional rendering. Specifically:
- Multi-stop gradients on metal surfaces
- Layered highlight + shadow paths to imply depth
- Drop shadow at the pin's base (hairline ellipse)
- Recessed dark zones implying machined channels

This exception applies **only** to the insignia mark itself in both the standalone and lockup forms. It does NOT apply to:
- Dashboard surfaces (stay flat)
- Type treatments (stay flat — color tokens only)
- Section backgrounds (stay flat)
- Buttons, banners, panels, agent strips, leak rows, anything else (all stay flat)

Reason: real brand marks function as objects within an otherwise flat system. The mark is the only three-dimensional thing on the site; everything else is the information layer. This is hierarchy, not inconsistency. Full reasoning in `design_canon.md` (Insignia section).

## 2026-05-14 — Brand descriptor (locked)

The descriptor line under the wordmark is **"Money leaks, made visible"** — verbatim, sentence case, with the comma.

Used:
- Under the wordmark in the full lockup
- As a standalone tagline where short brand statements are needed (meta tags, social previews, founder email signatures, business cards)
- May appear on the site outside the lockup if used at the same JetBrains Mono / 0.24em / signal-agent treatment

Not used:
- As a hero headline (the hero hook is "Find what your business is leaking. Then stop it.")
- As body copy
- Paraphrased ("making money leaks visible," "we find the money leaks," etc. — always the canonical phrasing)

## 2026-05-14 — Insignia usage map

| Context | What appears | Size |
|---|---|---|
| Nav (top-left of every page) | Pin alone, no wordmark | 32–40px height |
| Hero region — brand presence | Full lockup OR pin alone with wordmark text adjacent | Pin at 280px height |
| Founders section | Full lockup OR pin alone | Pin at 200–240px height |
| Footer brand moment | Pin alone OR full lockup at small scale | Pin at 80–120px height |
| Favicon / browser tab | Pin alone, simplified | 32px, 16px |
| Social preview images | Full lockup | Composition fills the OG image |
| Email signatures, business cards | Full lockup | Print-scale |

**Standalone pin** is the default for small contexts and chrome. **Full lockup** is for ceremonial placement (hero, founders, footer). Mixing within a single viewport is generally wrong — use one form per region.

## 2026-05-16 — Product naming migration (locked, supersedes prior naming)

Following the customer-facing handoff from the parallel Vizion marketing chat (Welcome Packet, Pricing Sheet, Readahead, Methodology Brief PDFs are now the source of truth for customer-facing language), the following names are locked:

**Locked customer-facing product names:**
- **The X-Ray** — the diagnostic. A dollar-quantified report that finds where the business is leaking money. Always capitalized with "The." Never "an X-Ray" or "the x-ray."
- **The Command Deck** — the dashboard product. Built from the ground up for each client's business. "Built from the ground up" is locked language.
- **Watchdog** — the AI agent product. Each Watchdog has a "handler" at the client business who approves every action. Singular when one; plural ("Watchdogs") when multiple.
- **PCORD** — the customer-facing methodology framework. People cost and risk · Cash flow visibility · Operational leakage · Revenue-side leakage · Decision latency. Five buckets that organize what The X-Ray finds.

**Retired language (no longer customer-facing):**
- ~~Captain's Method~~ — retired customer-facing. Internal-only name for the methodology. Does not appear on the website, social, or any external materials.
- ~~Four-Phase Engagement~~ — does not exist customer-facing. No four-phase framework appears in locked customer materials. Remove entirely from copy and UI labels.
- ~~AI agent on watch~~ — generic. Replace with "Watchdog on watch" or rebuild the sentence.
- ~~ops-risk-dashboard.v3~~ — placeholder label in the dashboard mockup. Replace with "Command Deck — [Client]" or canonical product naming.

Reason: Captain's Method served as positioning language during the design phase but the customer-facing materials moved to a product-led architecture (three named products + one methodology acronym) rather than an engagement-led architecture (one named service with phases). Product-led is better for buyer trust because each product stands on its own; the buyer doesn't have to commit to a four-phase journey to understand the value.

This migration is non-optional. Every appearance of retired language on the website, in code, in copy, or in briefs is wrong and must be replaced.

## 2026-05-16 — Brand subtag (locked, supersedes Air Force stamp)

The locked brand subtag is **"VETERAN-OWNED · PRACTICAL · PLAIN-SPOKEN"**.

This replaces the prior stamp "VETERAN OWNED — AIR FORCE." Reason: Air Force is Kyle's individual service history, not a brand-level credential. The brand subtag describes the partnership and posture, not either cofounder individually. Air Force specificity belongs in Kyle's bio on a future About/Founders page, not in the brand-level veteran stamp.

Typography stays the same as the prior stamp: JetBrains Mono, 9px, letter-spacing 0.22em, ink-quaternary color, flanked by horizontal rule lines.

## 2026-05-16 — Hero eyebrow (locked)

The hero eyebrow is now `THE X-RAY · THE COMMAND DECK · WATCHDOG`.

This replaces the prior eyebrow `CAPTAIN'S METHOD · FOUR-PHASE ENGAGEMENT`. Reason: names the three customer-facing products in the order the buyer encounters them (diagnostic → dashboard → agent). Sets up the hero copy below as a product tour rather than a methodology pitch.

Typography stays the same as the prior eyebrow: JetBrains Mono, 10px, weight 500, letter-spacing 0.24em, signal-agent color, uppercase.

## 2026-05-16 — Hero sub copy (locked)

The hero sub copy is now:

> The X-Ray finds the leaks. The Command Deck visualizes them. Watchdog watches them. Handler approves every action.

This replaces the prior sub copy. Reason: names the three products in the same order as the eyebrow, attributes one verb to each, and surfaces the trust model ("Handler approves every action") in the canonical PCORD-architecture language ("Handler" rather than the generic "Operator"). Concise, scannable, reads as a four-beat product description.

Typography stays the same as the prior sub: Inter Tight, 15px, weight 400, line-height 1.55, ink-secondary color, max-width 600px.

## 2026-05-16 — X-Ray Guarantee (locked, new content)

The X-Ray Guarantee is load-bearing trust content that must appear on every page where the primary CTA lives. Canonical phrasing:

> If The X-Ray doesn't surface money leaks worth significantly more than what you've paid us for it, we'll walk you through why and refund the difference.

Treatment: small bordered callout, positioned between the dashboard preview and the primary CTA. Visual register: similar to the risk banner but quieter — no animated number, no signal-leak red. Uses ink-primary for the guarantee text, signal-agent amber for the label "THE X-RAY GUARANTEE" or similar small uppercase eyebrow above the body text. Full spec in `design_canon.md` (X-Ray Guarantee component pattern, to be added).

Reason: this is a real customer-facing commitment locked in the Welcome Packet. It's a risk-reversal move that lets the primary CTA do its job — the buyer commits to a conversation knowing the engagement carries a real guarantee. Without it visible, the CTA is asking for trust the page hasn't earned yet.

## 2026-05-16 — CTAs (locked, simplified)

**Single primary CTA per hero. Secondary CTA dropped.**

- Primary CTA copy: `START A CONVERSATION` (replaces `REQUEST BRIEFING`)
- No secondary CTA in the hero

Reason: Welcome Packet voice ("the rest is a conversation") is the canonical close-state for Vizion's trust frame. "Request Briefing" was operator-grade but reads slightly procedural for the new positioning. "Start a conversation" is softer without being weak. The X-Ray Guarantee above the CTA does the trust work that the secondary CTA was awkwardly attempting.

Single-CTA pages convert at 13.5% vs. 10.5% for multi-CTA (research, `landing_page_research.md`). Dropping the secondary aligns with both the data and the new voice register.

## 2026-05-16 — Dashboard mockup label (locked)

The dashboard mockup label in the hero changes from `ops-risk-dashboard.v3` to `Command Deck — Acme Distribution` (or whatever sample client name is in use). The "PHASE 3 DELIVERABLE" tag also changes to `THE COMMAND DECK · SAMPLE` since "Phase 3" no longer exists in customer-facing language.

The dashboard's internal content (the five ranked leaks, the monthly + annual columns, the Revenue MTD / Pace / Cash sidebar, the agent activity strip) is unchanged except for one swap: the agent strip's "Agent watching · 11 leaks" becomes "Watchdog watching · 11 leaks."

---

*Append new entries below. Don't edit historic entries — supersede with a new dated entry instead.*

## 2026-05-17 — Website architecture (locked)

Hybrid five-page model:
- `/` (Homepage — 8 sections: Hero, Pain, The X-Ray, The Command Deck, Watchdog, How an engagement starts, Founders, Final CTA)
- `/about` (Jake and Kyle, partnership, thinking behind Vizion)
- `/method` (PCORD framework, engagement arc, handler-approval model, X-Ray Guarantee at depth)
- `/pricing` (Founders Plan and On-Demand Flex, public for v1)
- `/questions` (FAQ with anchor URLs per question)

Plus conversion endpoint at `/start`.

Reasoning: B2B at this ticket size requires multi-stakeholder content. Champion-share is a real use case — a current Vizion conversation lead needs to send specific URLs to specific stakeholders (CEO sees About, CFO reads Method, skeptic reads Questions). Each page can stand alone as an entry point. Single-page architecture loses 30-50% of potential conversion at this ticket size per the research.

Pricing public for v1 — tradeoff acknowledged: invites comparison shopping against MSP services that aren't actually competitive. Acceptable for first 2-3 conversations. Revisit if pricing surface becomes a sales-conversation friction point.

Deferred from v1: blog, customer/case studies page (no completed engagements yet), industry-specific pages, separate product pages for X-Ray / Command Deck / Watchdog.

Full architecture reasoning in `website_architecture_v1.md`.

## 2026-05-17 — Method page name (locked)

Page 3 is named "Method" in nav and URL (`/method`).

Reason: shorter than "How we work," more confident, aligns with consulting register, signals "we have a named approach" rather than "here's our process." The Pricing Sheet already references "our PCORD framework" — "Method" gives that framework a structural home on the site.

## 2026-05-17 — Conversion endpoint mechanism (locked)

Primary CTA `START A CONVERSATION` routes to `/start`. The `/start` page presents:

- **Primary option:** Cal.com calendar booking, 45-minute call. One-click commitment to a specific time slot.
- **Secondary option:** "Send us a note instead" — a short form (name, company, brief message). Form submission goes to `team@vizioncorp.ai`.

Phone (`281-315-0441`) and email (`team@vizioncorp.ai`) remain on every page footer as the trust-document register requires. The Welcome Packet PDF retains phone/email only, no calendar — it serves a different moment and audience.

Reason: layered CTA preserves the operator-grade trust register through the footer while making the higher-conversion calendar option available to cold visitors. Phone/email-only on the site would leave conversion on the table for register reasons that footer placement already solves. Calendar-booking CTAs convert 8-15% on B2B service pages vs 2-5% for phone/email; the gap is context-switch friction at the conversion moment.

Mechanism: Cal.com embedded (or equivalent). Kyle's calendar receives the booking; Jake CC'd via Cal.com notification settings. Form goes to `team@vizioncorp.ai` with Jake and Kyle both on the distribution.

Operator-side blocker: Kyle creates a Cal.com account, configures a 45-minute call event, shares the URL/embed code before Brief 11 (conversion endpoint) ships.

## 2026-05-17 — Centered-pin header (locked)

Two-pattern header system shipped in Brief 4.5:

- **Homepage variant** (`<Header variant="homepage" />`): ceremonial centered insignia pin (72px) → wordmark → "Money leaks, made visible" descriptor → horizontal rule → nav row with right-aligned amber CTA. Not sticky.
- **Inner page variant** (`<Header variant="inner" />`): compressed left-aligned lockup (small pin + wordmark inline) → nav links + right-aligned CTA in single row. Sticky with backdrop-blur (`rgba(11, 13, 17, 0.85)` + `blur(8px)`).
- **Mobile (both variants, below 720px):** compressed bar with small pin + wordmark on the left and hamburger on the right. Hamburger opens full-viewport overlay with stacked nav links and CTA button.

Nav links across both variants: `Method`, `About`, `Pricing`, `Questions`.

Reason: homepage feels ceremonial as the brand's entry moment; inner pages conserve vertical space for depth content; mobile prioritizes content access over brand performance. Cascade picked Option B (page-level variant selection in pages, not layout) for cleanest server/client boundaries.

## 2026-05-17 — ink-secondary-bright token (locked)

Color `#C2BBA8` is formally adopted as `ink-secondary-bright`. Used for emphasis spans within body copy that need to lift slightly above `ink-secondary` (`#A39C8C`) without going to `ink-primary` (`#EDE6D5`) or `signal-agent` amber.

Usage pattern: `<span style={{ color: 'var(--ink-secondary-bright)' }}>` on specific phrases within body paragraphs. Maximum two uses per section.

First appeared in the Pain section (Brief 04) on "But something is off" and "That's where the money goes. That's where it stays gone." — both serving as load-bearing emphasis lines.

Formalized in `design_canon.md` as part of Brief 4.6.

## 2026-05-17 — Customer-facing documents canonical (locked)

The Welcome Packet, Pricing Sheet, and Readahead PDFs (versions: Welcome Packet 6, Readahead V2, Pricing 4) are formally the canonical source of voice and content for the site. Site copy should *match* the voice of these documents, not aspire to it. Specifically:

- **Voice register:** plain-spoken, operator-grade, restrained. Sentences are short. Em-dashes used sparingly. No marketing-vocabulary.
- **In-house terms:** The X-Ray, The Command Deck, Watchdog, handler, PCORD, X-Ray Guarantee. All capitalized and used per the documents.
- **Specific phrases that carry doctrine and should appear on the site verbatim:**
 - "We don't ask you to trust the AI. We ask you to trust the loop." (Watchdog section, Brief 07)
 - "Money leaks, made visible." (brand descriptor, locked 2026-05-14)
 - "If the X-Ray we deliver doesn't surface money leaks worth significantly more than what you've paid us for it, we'll walk you through why and refund the difference." (X-Ray Guarantee, locked 2026-05-16, appears in hero and method page)
 - "Keeping you ahead of the competition is the point." (Welcome Packet closing — candidate for final CTA section, Brief 10)

## 2026-05-17 — PCORD diagram pattern (locked)

Visual pattern for rendering the PCORD framework on the website:

Five-column horizontal layout (desktop), with each column composed of:
- Letter cap in Inter Tight 600, 48px, signal-agent amber (#F2B33D)
- 12px gap
- Bucket name in Inter Tight 500, 18px, ink-primary, centered
- 8px gap
- Descriptor in Inter Tight 400, 13px, ink-tertiary, centered, max-width 120px

Contained in surface-1 panel with 1px rule-primary border, padding 40px 32px.

Below diagram (within same panel), canonical methodology line:
"5 areas · 95 risk variables · confidence levels on every finding"
JetBrains Mono 11px, 0.14em letter-spacing, ink-tertiary, centered.

Bucket content is verbatim from positioning.md. Do not paraphrase.

Responsive: two-row layout at tablet (720-959px), vertical stack at mobile (below 720px). Mobile pattern reads as a list, not a grid — letter cap on left, name + descriptor stacked on right.

First used in Brief 05 (The X-Ray section). May appear on /method page in Brief 13. Should not appear anywhere else without explicit operator decision.

## 2026-05-17 — Sample X-Ray finding artifact pattern (locked)

Visual pattern for rendering sample X-Ray output on the website:

Surface-1 panel with 0.5px rule-primary border. Top toolbar matching the dashboard frame pattern from the hero — surface-2 background, 0.5px rule-inner bottom border, 40px height. Left tag in signal-agent amber, center title in ink-secondary, right SAMPLE badge in ink-quaternary with neutral border.

Body composed of finding rows. Each row:
- 24px 28px padding
- 0.5px rule-inner bottom border
- Three-column grid: number (40px), content (1fr), annual cost (140px right)
- Number in JetBrains Mono 20px, ink-quaternary
- Title in Inter Tight 18px, 500, ink-primary
- Two badges below title (PCORD category + confidence)
- Detail paragraph in Inter Tight 14px, ink-secondary
- Annual cost in JetBrains Mono 22px, 500, signal-leak, right-aligned, with U+2212 minus sign

Bottom caption (within panel) in JetBrains Mono 11px, ink-tertiary:
"Sample only · Real X-Ray reports include 8-15 findings, ranked by recovery priority"

First used in Brief 05 (The X-Ray section). Real findings (from completed engagements) will replace samples once they exist. The pattern carries forward as the template for the production "case study" page deferred from v1.

## 2026-05-17 — Canon update discipline (locked)

Mandatory `## Canon updates` section in every brief. Pre-completion canon scan rule. Canon writes are mechanical, not interpretive. Session-close brief format. Full rules in `.windsurfrules` under "Canon update discipline" section, added Brief 4.6.

Reason: canon drift between chat and reference files was producing degraded context in subsequent sessions. The new rules push canon synchronization into the brief workflow itself, removing operator overhead while preserving operator curation authority. Three patterns layered: (1) every brief specifies its own canon updates explicitly, (2) Cascade scans before reporting done to catch unspecified drift, (3) chat-only sessions can produce session-close briefs (like this one, Brief 4.6) when needed.
