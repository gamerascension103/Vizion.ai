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

## 2026-05-17 — Hero visual restructure (locked, supersedes 2026-05-16 Hero dashboard placement)

The Hero is restructured to single-column composition. Removed from the Hero render tree:

- DashboardFrame component (now reserved for Section 4, Command Deck)
- Revenue/cash sidebar (reserved for Section 4)
- Watchdog agent activity strip (reserved for Section 5, Watchdog)
- Full XRayGuarantee callout (replaced by a compressed trust line)

The risk banner remains as the Hero's sole visual proof element. It carries the dollar-quantified pain claim that anchors the page's positioning.

Reasoning: showing the dashboard, sidebar, and agent strip in the Hero pre-spends each subsequent product section's signature visual. Each product section now owns its own visual proof — Section 4 reveals the Command Deck for the first time, Section 5 reveals the Watchdog loop for the first time. The Hero's job becomes positioning + risk articulation, not product display. Restraint reads as confidence; visual density reads as overselling.

## 2026-05-17 — X-Ray Guarantee placement (layered, locked)

The X-Ray Guarantee appears in three layered forms:

1. Hero — compressed single-line trust mark: BACKED BY THE X-RAY GUARANTEE
   JetBrains Mono 10px, 0.22em letter-spacing, ink-tertiary, uppercase, centered.
   Above the primary CTA. Functions as a trust signal, not a callout.

2. X-Ray section (Section 3) — full XRayGuarantee callout with canonical paragraph:
   "If the X-Ray we deliver doesn't surface money leaks worth significantly more than
   what you've paid us for it, we'll walk you through why and refund the difference."
   Bordered horizontal panel with amber accent, styled per the existing component.

3. Method page (Brief 13, not yet built) — full canonical text plus reasoning:
   why the Guarantee exists, what conditions trigger a refund, how the dollar
   threshold gets evaluated.

Each appearance does a different job. The Hero version is the trust mark for
bouncing visitors. The X-Ray section version is the product-contextual full claim.
The Method page version is the depth treatment for methodical evaluators.

Reasoning: full-paragraph callout in the Hero competed visually with the CTA button
and read as defensive repetition when the same text appeared again in the X-Ray
section. Layered approach preserves the trust mechanism at every reading depth
without redundancy.

## 2026-05-17 — X-Ray timing language (removed, locked)

All timing claims removed from X-Ray section copy. Previous "three weeks" language
was inaccurate. The website does not state X-Ray timing until the operator has
concrete data from completed engagements to support a specific claim. Replacement
phrasing focuses on what the X-Ray does, not how long it takes:

"We evaluate your business. We assess your risks. You get a written report with
our findings, our confidence levels, the dollar math behind each one, and our
recommended order of operations."

This honors the operator's "be honest about what we know" principle. Specific
timing can be added in a future revision once it's defensible with real engagement
data.

## 2026-05-17 — Centered composition for body sections (provisional, pending operator review)

Pain and X-Ray sections converted from left-aligned to centered composition. Prose column tightened to 560px max-width for centered legibility. Visual elements (PCORD diagram, sample finding artifact, X-Ray Guarantee callout, Dashboard) stay at wider widths (~760-880px) because they're horizontal visual elements that benefit from width.

Command Deck section built centered from the start, matching the new pattern.

Reasoning: Hero (post-Brief 05.5) is centered single-column composition. The homepage Header is centered ceremonial composition. Pain and X-Ray were left-aligned, creating visual inconsistency. "Centered all the way" is the operator decision. Body prose at 560px stays legible centered; wider columns at 760px would slow reading speed by ~15-20%.

This pattern is PROVISIONAL pending operator perceptual review across all three converted sections. If the pattern works at scale, a future canon-sync brief will formalize it in design_canon.md as the default body section composition. Until then, future briefs should build new sections centered with the same column-width pattern, but the canon is not yet locked.

## 2026-05-17 — Section 4 (The Command Deck) shipped (locked)

Section 4 built below Section 3 (X-Ray). Composition: eyebrow (THE PRODUCT · TWO), 52px header (The Command Deck.), single short opening paragraph, full-breakout Dashboard component at ~880px max-width as the section centerpiece, single closing paragraph with ink-secondary-bright accent on "You log in.", transition line pointing forward to Watchdog.

The Dashboard component (previously in Hero, removed by Brief 05.5) is now imported and consumed by CommandDeck.tsx. This is its first appearance on the page post-restructure. The Dashboard's content (leaks panel, month sidebar, agent strip) is unchanged from prior briefs.

Section's job: visually demonstrate "built from the ground up" through the Dashboard itself rather than through explanatory prose. The dashboard carries the argument. Prose is restrained.

Transition line previews Section 5 (Watchdog): "Watching the deck for what needs your attention — that's Watchdog's job." Prepares the buyer for the Watchdog reveal without naming Section 5 explicitly.

## 2026-05-17 — Hero centering finalized (locked)

The Hero's outer column is now horizontally centered on the page via flex
column with align-items: center, matching Pain, X-Ray, and Command Deck.
Brief 05.5 converted the Hero to single-column composition but left the
column anchored to the page's left side; Brief 06.5 completes the
centering.

Internal Hero text elements (eyebrow, hook fragments, pivot lines, sub
copy) now have text-align: center applied. Hook fragments and pivot lines
are centered independently (each line centered on its own width) rather
than as a block — preserves the rising-fragments effect where each beat
stands on its own.

Veteran stamp, compressed Guarantee line, and CTA button retain their
existing centered behavior — those were already correctly aligned post-
Brief 05.5.

## 2026-05-17 — Risk banner breakout width (locked)

Risk banner widened from ~760px max-width to 1080px max-width as a feature
breakout from the Hero's prose column. The wider treatment gives the
banner visual weight as the Hero's anchor element — the dollar-quantified
proof of the page's positioning.

Dollar number font size scaled from ~56-60px to 72px at desktop to match
the wider treatment. Number's font weight, color (signal-leak #E36842),
tabular-nums, and animated counter behavior all preserved unchanged.

Banner's internal layout (label left, number right) preserved. The wider
horizontal space between label and number is intentional — it communicates
the contrast between the descriptive label and the dollar magnitude.

Mobile: banner collapses to viewport-width minus padding. Number scales
to 44-48px. Banner may stack vertically (label on top, number below) at
very narrow widths if side-by-side doesn't fit cleanly.

The 1080px width establishes a pattern: prose columns at 560-760px,
feature visuals at 1080px. The Command Deck's dashboard at 880px sits
between these widths — appropriate because it's a centered-but-not-
breakout product visual. Future visual breakouts (Watchdog's loop
diagram in Brief 07, etc.) should default to 1080px unless there's a
specific reason to use a different width.

## 2026-05-17 — Section 5 (Watchdog) shipped (locked)

Section 5 built below Section 4 (Command Deck). Composition: eyebrow
(THE PRODUCT · THREE), 52px header (Watchdog.), two opening paragraphs,
trust loop diagram (new visual pattern at 1080px breakout), doctrine
prose with canonical "We don't ask you to trust the AI. We ask you to
trust the loop." accent line, three learning-over-time paragraphs
(industry baseline, business-specific learning with handler-decides
control, isolation and ownership with the second ink-secondary-bright
accent), closing prose, and transition line referencing the X-Ray
Guarantee as the page's trust anchor.

Total prose ~395 words across four claims (trust loop architecture,
industry baseline, business learning, isolation). The four-claim structure
is heavier than X-Ray's three-claim structure (~280 words) because
Watchdog has more to communicate — it's the most architecturally complex
product. Section reflects that.

Voice register matches Pain, X-Ray, and Command Deck. Two ink-secondary-
bright accents at the canon-maximum (one on the doctrine phrase, one on
the ownership claim). Closing line "That's the deal." echoes the Welcome
Packet's X-Ray Guarantee closing for canon voice continuity.

## 2026-05-17 — Trust loop diagram pattern (provisional, pending operator review)

New visual pattern for rendering the proposal-approval-execution-debrief
loop on the website:

Four-state linear sequence rendered horizontally at desktop with arrows
between states and a curved return arrow below connecting state 04 back
to state 01. Each state composed of: numbered tag (01-04) in JetBrains
Mono ink-quaternary, state label in Inter Tight 500 18px ink-primary,
sub-label in Inter Tight 400 13px ink-tertiary, all centered within
state column.

States:
- 01 Watchdog proposes — The agent surfaces what it's seen
- 02 Handler reviews — A named person approves, modifies, or declines
- 03 Action executes — Only the approved action — only as approved
- 04 Outcome logs — Every action becomes part of the audit trail

Contained in surface-1 panel with 1px rule-primary border, padding
48px 40px, max-width 1080px (matching risk banner breakout width).

Below diagram: methodology summary line "Four states · One handler · No
autonomous action" in JetBrains Mono ink-tertiary.

Responsive: 2x2 grid at tablet (720-959px), vertical stack at mobile
(below 720px) with downward chevrons replacing horizontal arrows.

Curved return arrow implemented as inline SVG path with signal-agent
amber 0.5px stroke and strokeDasharray 4 4. Arrow points from right edge
(state 04) back to left edge (state 01) with gentle arc below the row.
Desktop only — hidden at tablet and mobile.

First used in Brief 07 (Watchdog section). May appear on /method page in
Brief 13 with deeper explanation of each state. Should not appear
anywhere else without explicit operator decision. Pattern is provisional
pending operator perceptual review — not yet formalized in design_canon.md.

## 2026-05-17 — ink-secondary-bright token in Pain.tsx (cleanup)

Pain.tsx's raw #C2BBA8 hex literal replaced with var(--color-ink-secondary-bright)
CSS variable. Token was formalized in Brief 4.6 but Pain.tsx's usage
predated the formalization. Cleanup folded into Brief 07. Visual rendering
identical; codebase now consistent in using the variable rather than the
raw hex literal across all components that reference this color.

If any other components (XRay.tsx, CommandDeck.tsx) also use the raw
#C2BBA8 hex literal rather than the variable, they were already corrected
during their respective brief work. Pain.tsx was the only outstanding case.

## 2026-05-18 — Em dashes retired from customer-facing copy (locked)

All em dash characters (U+2014, —) and HTML entities (&mdash;) removed
from website copy. Replaced with period-driven short sentences following
the canonical voice register of the Welcome Packet, Pricing Sheet, and
Readahead PDFs.

Replacement patterns applied:
- Parenthetical em dashes → "Could be X. Could be Y." short-sentence
  constructions
- Idea-continuation em dashes → period replacement
- Two-clause connection em dashes → period replacement
- Trailing clarification em dashes → period replacement (multiple short
  sentences) or absorbed into main sentence with comma where cleaner
- Compact label separators → middle dot (·, U+00B7) matching the
  canonical THE COMMAND DECK · SAMPLE register

The em dash character is now in the forbidden vocabulary list in
.windsurfrules. Future briefs containing em dashes in customer-facing
copy will fail Cascade's mechanical grep check.

Scope: customer-facing JSX/TSX strings only — this includes both
inline JSX text content and string literals passed as data to
components, if the string renders visibly to a user. Em dashes in
code comments ({/* */} or //) are not subject to this rule. Other
dash-like characters (hyphen, en dash, middle dot) are not affected.

Reason: voice continuity with the canonical PDF artifacts, which use
period-driven short sentences as their dominant rhythm pattern. The
"Could be you. Could be someone on your team." construction in the
Welcome Packet is the canonical voice template that the em dash
replacements follow.

## 2026-05-18 — Section 6 (How an engagement starts) shipped (locked)

Section 6 built below Section 5 (Watchdog). Engagement composition:
eyebrow (THE ENGAGEMENT, deliberately not following the THE PRODUCT · N
convention since this section is not a product), 52px header ("How an
engagement starts." with period), one opening paragraph, EngagementSequence
component at 1080px breakout (four-state linear sequence: conversation →
X-Ray → decision → build), two closing paragraphs with one ink-secondary-
bright accent on "Then you decide what happens next.", and transition
line "Two people. Two veterans. Both on the phone every time." previewing
the Founders section.

Total prose ~210 words. Lighter than X-Ray, Command Deck, and Watchdog
because the visual carries most of the argument. The buyer scans the four
phases, then reads the prose for context.

Voice register matches preceding sections. Period-driven rhythm per the
em dash removal in Brief 07.5. Opening line "Not a sales pitch" borrows
the Readahead PDF's canonical framing for voice continuity. Closing
phrase "the same two people on the phone every time" paraphrases the
Welcome Packet's "On every engagement, you talk to both of us."

## 2026-05-18 — EngagementSequence diagram pattern (provisional, pending operator review)

New visual pattern for rendering the engagement arc on the website:

Four-state linear sequence rendered horizontally at desktop with arrows
between states. No curved return arrow (engagement is linear, not cyclical).
Each state composed identically to the trust loop diagram's states:
numbered tag (01-04) in JetBrains Mono ink-quaternary, state label in
Inter Tight 500 18px ink-primary, sub-label in Inter Tight 400 13px
ink-tertiary, all centered within state column.

States:
- 01 The conversation — Forty-five minutes. We talk, we listen, we decide together.
- 02 The X-Ray — We dig into your books and surface the leaks.
- 03 The decision — You see the report. You decide what happens next.
- 04 The build — Command Deck designed. Watchdog trained. Monthly rhythm begins.

Contained in surface-1 panel with 1px rule-primary border, padding
48px 40px, max-width 1080px (matching trust loop diagram's breakout
width and the risk banner's breakout width).

Below diagram: methodology summary line "Four phases · One conversation
to start · No surprises" in JetBrains Mono ink-tertiary.

Responsive: 2x2 grid at tablet, vertical stack at mobile.

First used in Brief 08 (Engagement section). The visual register
intentionally mirrors the trust loop diagram but represents a linear
progression rather than a cycle. The two patterns together establish
the page's visual language for sequence visualization: cycle (Watchdog's
runtime loop) and progression (engagement arc). Future briefs introducing
similar sequence visualizations should default to one of these two
patterns rather than introducing a third.

Pattern is provisional pending operator review across both diagrams in
context. May be formalized in design_canon.md in a future canon-sync
brief if both patterns prove stable.

## 2026-05-18 — Engagement arc structure (locked, corrects Brief 08)

The Vizion engagement arc is four phases, in this order:

1. The conversation — Forty-five minutes. No pitch. Both sides decide
   whether there's a fit. No payment, no commitment yet.

2. The engagement begins — Buyer signs. Onboarding fee paid. Monthly
   billing starts. The X-Ray Guarantee stands behind every step from
   this moment forward.

3. The X-Ray — Vizion runs the diagnostic, produces the report, walks
   the buyer through findings. This is the first deliverable inside
   the paid engagement, not a separate try-before-you-buy diagnostic.

4. The build — Command Deck designed, Watchdog trained, monthly rhythm
   begins.

The X-Ray Guarantee functions as: "If after the X-Ray we haven't
surfaced money leaks worth significantly more than what you've paid
us for it, we'll walk you through why and refund the difference."

The Guarantee is not a "decide whether to continue" moment. It's a
trust mechanism that protects the buyer's upfront commercial commitment.
The buyer pays first; the Guarantee covers them if the X-Ray doesn't
prove its value.

This structure is locked. Brief 08 shipped with an incorrect arc that
implied the buyer's commercial decision happens after the X-Ray. Brief
08.5 corrects this in the Engagement section. Future briefs (especially
Brief 13 - Method page) must reflect this structure. Specifically:

- The conversation precedes any commercial commitment
- Payment happens at signing, after the conversation
- The X-Ray happens after payment, not before
- The Guarantee protects the buyer through the X-Ray phase
- There is no "buyer decides whether to continue after the X-Ray"
  phase — that framing is retired

## 2026-05-18 — Veteran-owned framing (locked clarification)

Vizion Corp AI is veteran-owned because Kyle Ames is an 18-year Air
Force veteran. Jake Salisbury is not a veteran. He is a small business
owner and behavior change practitioner (per his Welcome Packet bio).

The brand subtag VETERAN-OWNED · PRACTICAL · PLAIN-SPOKEN is correct
because the company is owned by a veteran (singular ownership of
veteran status, not joint).

Copy that frames both founders as veterans is factually wrong and
retired. Examples of correct framing:

- "Veteran-owned" (singular, refers to the company)
- "Kyle is a veteran. Jake is an operator." (accurate paired framing
  if needed)
- "Both owners. Both on the phone every time." (preferred for the
  Engagement transition line — accurate without conflating veteran
  status)

Examples of retired framing:

- "Two veterans" (wrong — implies both Jake and Kyle are veterans)
- "Two vets" (same)
- "Founded by veterans" (plural — wrong)

This clarification applies to all future copy decisions. Brief 09
(Founders section) must reflect this accurately when Jake's and
Kyle's bios are rendered on the site.

## 2026-05-23 — SIGHT — Website Canon update: SIGHT moves customer-facing.

Decision: SIGHT, the proper noun for the autonomous business advisory
system, is now permitted on customer-facing surfaces (website, eventual
client materials). Previously listed as internal-only in Website Canon
v1 Section 1.

Reasoning: A&D's locked positioning includes "autonomous business
advisory system for mid-market businesses." SIGHT is the proper noun for
that system. Refusing to name it customer-facing creates a gap where the
positioning language exists but the named entity doesn't, which is
weaker than naming both. PCORD, Watchdog, X-Ray, Command Deck, and
Handler are all customer-facing; SIGHT joins them.

Scope: Customer-facing usage on website, /method page, future client
materials. Internal architecture documents are unaffected.

Cross-domain: No PDF assets change. Welcome Packet, Readahead, Pricing
Sheet stay locked. Future versions of those documents MAY introduce
SIGHT, but this decision does not require it.

Note: docs/website_canon_v1_revised_2026-05-23.md was the intended
target for the complementary canon update (W-Method Part B), but that
file was never created — W02b logged it as PENDING. This decisions_log
entry is the canonical record of the SIGHT positioning change until
the website_canon file is created in a future brief.
