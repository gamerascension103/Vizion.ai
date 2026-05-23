# Website Canon v1 (revised 2026-05-23)

**Owner:** SIGHT — Website Build chat
**Status:** Locked 2026-05-23. Supersedes 2026-05-22 lock. Update via decisions-log entry only.
**Surface:** vizion-ai-bay.vercel.app (deployed) → eventual production domain
**Relationship to other canons:**
- **Source canon.** This documents the customer-facing visual language that already lives on the production site. Workbench Canon v1 is *derived from* this canon, not the other way around.
- Workbench Canon v1 honors the same foundation tokens with operator-side density adjustments
- X-Ray Canon v1 inherits voice and visual hierarchy from this canon for the deliverable

---

## Correction note — why this document is v1 (revised)

The original 2026-05-22 Website Canon v1 inherited from a Chamber Canon handoff document that described an indigo-midnight redesign aesthetic, three-typeface system including Cormorant Garamond, and state-color tokens that do not exist on the live site. That handoff was working from a separate design direction — not the canon already in production.

The structurally correct move: inherit from what's actually live. The live site already carries the locked Vizion visual language. Workbench Canon v1 (locked 2026-05-18) explicitly states it inherits from this same source. Any redesign direction in the Chamber Canon handoff was speccing a future state we have not approved.

This revision corrects the foundation. The 2026-05-22 decisions about hero treatment, motion restraint, hero copy held verbatim, and the subdescriptor approach all carry forward — they were not palette-dependent. Only the visual tokens, type system, and motion specs are corrected.

---

## What this document is

The locked reference for all design and copy decisions on the public-facing Vizion AI marketing site. Briefs targeting the site cite this document as source of truth for tokens, type system, motion, voice, and positioning.

Open questions resolved during the canon design pass are recorded here as decisions, not re-litigated.

---

## Section 1 — Positioning and voice (locked)

### Top descriptor (locked verbatim)

> Money leaks, made visible

Renders under the VIZION CORP wordmark. Sentence case. No period in the live render (verified 2026-05-23 — the live site renders without a terminal period despite the verbatim Welcome Packet text including one; treat this as a live-site fact, surface to operator separately if punctuation alignment is wanted).

### Subdescriptor (added 2026-05-23, locked)

> Then watched, so they don't come back.

Layers directly beneath top descriptor. Implementation lives in Brief 02b. Pairs the visceral hit of the top descriptor with the protector mechanic per A&D's 2026-05-22 category-verb shift (advisor → protector, vigilance-leaning).

### Permitted customer-facing language (post-2026-05-23 shift)

- "Money leaks, made visible" (top descriptor, locked)
- "Then watched, so they don't come back" (subdescriptor, locked)
- "Protector," "watched," "vigilance" — vigilance-leaning protector vocabulary
- "The bleed has a number. We find it." (locked hero copy)
- Watchdog mechanics described in operator language (the loop, handler approval, four states)

### Permitted internal/architectural language (unchanged)

For internal architecture references, A&D's 2026-05-20 framing remains valid:

- "Autonomous business advisory system"
- "Industry-specialized AI advisors"
- "Trading-agent model, built for business decisions"

These are NOT used on the customer-facing surface. They describe the system internally. The customer-facing surface uses the protector framing above.

### Prohibited language (all surfaces)

- "AI-powered diagnostic tool"
- "AI bookkeeping assistant"
- "QuickBooks AI"
- "Powered by Claude"
- Any framing that reduces Vizion to a feature of QuickBooks or to a Claude wrapper

### Retired language (do not reuse on customer surfaces)

- "Captain's Method" (closed in prior vocab sweep)
- "Four-Phase Engagement" as a label (closed; engagement section uses "Four phases · One conversation to start · No surprises" as eyebrow, which is currently live)
- "AI agent" as customer-facing label (replaced by "Watchdog")
- "ops-risk-dashboard" (replaced by "The Command Deck")
- Generic "the agent" inside Watchdog copy — use "Watchdog" as the named actor

### Voice rules (carry from operator-side canon)

- No self-validating transitions
- No emphasis words (actually, honestly, truly, genuinely, real)
- No em-dashes for multi-idea load
- Fragment sentences at turning points
- Direct, plain-spoken; no marketing breathlessness

**Reference voice samples from live site:**

> "Bookkeeping makes the numbers accurate. Tax filing makes the numbers legal. Neither one surfaces the software you forgot you were paying for."

> "We don't ask you to trust the AI. We ask you to trust the loop."

> "Two people. Both owners. Both on the phone every time."

These are the canon. Any copy added or revised must match this register.

### Locked product names (customer-facing)

- The X-Ray (diagnostic deliverable)
- The Command Deck (client dashboard)
- Watchdog (AI agents, post-engagement)
- Handler (the named human who approves Watchdog actions)
- PCORD (the five-bucket framework — customer-visible)
- The X-Ray Guarantee
- Founders Plan / On-Demand Flex (pricing tiers)
- Vizion / Vizion Corp / VIZION CORP (wordmark)
- SIGHT (the system name — the autonomous business advisory system itself)

SIGHT is the proper noun for the autonomous business advisory system that houses the X-Ray, Command Deck, Watchdog, and the loop. Customer-facing usage was opened 2026-05-23.

### Internal-only names — NEVER on public site

- Mr. Clean
- Chamber, Synthesize, Data Pull, Cleanup queue
- Workshop, Workbench
- Captain's Method (retired from customer-facing use)

---

## Section 2 — Color tokens (locked, inherited from live site)

Same tokens as Workbench Canon v1, which derived them from the live customer-facing site. The website is the source; Workbench inherits from the website.

### Ground

```css
--color-ground: #0b0d11    /* primary background, deep slate-black */
```

### Ink hierarchy

```css
--color-ink-primary: #ede6d5             /* headings, key data — warm parchment */
--color-ink-secondary-bright: #c2bba8    /* secondary headings, emphasized text */
--color-ink-secondary: #a39c8c           /* body text, descriptions */
--color-ink-tertiary: #8a8f99            /* labels, metadata, captions */
--color-ink-quaternary: #5e6168          /* disabled, deepest de-emphasis */
```

### Rules

```css
--color-rule-primary: #22272f    /* primary borders, card edges */
--color-rule-inner: #1a1e25      /* inner dividers, subtle separations */
```

### Signal colors

```css
--color-signal-agent: #f2b33d         /* amber — Watchdog, agents, the system itself */
--color-signal-leak: #e36842          /* amber-red — leaks, alerts, money at risk */
--color-signal-leak-border: #4a2218   /* deep red-brown — borders on leak callouts */
```

### Signal color discipline (locked)

Two signal colors only. Amber for the system (Watchdog, agents, the platform itself). Amber-red for money at risk (leaks, alerts, dollar figures showing loss). No additional signal colors without a canon update.

### Removed from 2026-05-22 canon

- All indigo-midnight ground tokens (`#0a0e1f`, `#0f1428`, `#151c36`) — not on the live site
- State-color system (active amber `#f5b454`, available violet `#8c7ce0`, completed silver `#c5cde2`, alert red `#e0556a`, locked slate `#4a5273`) — different from live signal colors; not in use
- PCORD palette as separate token set — PCORD on the live site uses ink-hierarchy treatment within the X-Ray section's letter labels, not its own color palette
- Atmospheric gradient and particle tokens — the live site does not currently render either, and Workbench Canon does not include them

---

## Section 3 — Typography (locked, inherited from live site)

### Type pair

```css
--font-sans: var(--font-inter-tight), -apple-system, system-ui, sans-serif
--font-mono: var(--font-jetbrains-mono), Menlo, monospace
```

**Inter Tight** is the workhorse for everything except numerical data and uppercase-tracked labels.

**JetBrains Mono** carries numerical data, dollar figures, dates, and uppercase-tracked small caps for section labels and metadata.

### Cormorant Garamond — REMOVED

Cormorant Garamond is not part of the locked Vizion canon. Earlier references to it (2026-05-22 Website Canon v1, Chamber Canon handoff) are outdated and superseded. Do not introduce it in any brief targeting the website.

### Hero typography (decided 2026-05-22, carries forward)

Hero uses Inter Tight at confident sans-serif weight. The current live treatment is the locked direction. Going to display-serif at large sizes was rejected as trading "serious advisory firm" for "editorial fashion magazine" register.

### Tracked uppercase pattern

Section labels, metadata, and ceremonial small text use JetBrains Mono uppercase with wide tracking. Current live examples:

- "VETERAN-OWNED · PRACTICAL · PLAIN-SPOKEN"
- "THE X-RAY · THE COMMAND DECK · WATCHDOG"
- "THE PRODUCT · ONE"
- "THE X-RAY GUARANTEE"
- "BACKED BY THE X-RAY GUARANTEE"

This is the canonical treatment for eyebrow labels, section dividers, and ceremonial small text. Tracking is wide (approximately 0.08–0.18em depending on size). All-caps mono is the brand's visual signature for these moments.

### Type scale

The live site renders a working scale. Token-level specification deferred to Brief 01's repo survey output — Cascade reports the actual rendered scale, then this section gets updated with the verified values. Until then, treat the live site as the type-scale reference.

---

## Section 4 — Visual signature (locked, inherited from live site)

### Border treatment

Hard borders carry structural meaning. Cards and panels have visible edges in `--color-rule-primary` (#22272f). Inner dividers use `--color-rule-inner` (#1a1e25). The signature is precision — clear edges, not glowing edges.

### Glow philosophy — NOT inherited

The "glow-over-edges" philosophy from the Chamber Canon handoff is operator-canon language describing a different aesthetic direction. The live website does not use glow as state language. Cards and CTAs use border + background-contrast for emphasis, not radial glow.

If a future brief proposes adding glow as a visual move, it's a canon-update decision, not an inherited pattern.

### Leak callouts

Dollar amounts representing leaks render in `--color-signal-leak` (#e36842) with mono treatment, often inside cards with `--color-signal-leak-border` (#4a2218) edge accent. Current live examples: the −$93,710 and −$42,180 figures in the X-Ray sample, the −$184,500 / −$2,214,000 figures in the Command Deck preview.

### Agent / system callouts

Watchdog mentions, system-level CTAs ("START A CONVERSATION"), and ceremonial system mentions render in `--color-signal-agent` (#f2b33d) for the active states. Default state is `--color-ink-primary` (#ede6d5).

---

## Section 5 — Motion (revised)

### Permitted

- Subtle transitions on hover (border color shifts, ink lightening) — 200–300ms ease-out
- Smooth scroll behavior
- Cross-fades on stage transitions where they exist
- Number counter animations on data reveals (if used; verify with operator before introducing)

### Prohibited

- Magnetic cursor effects on CTAs
- 3D tilt-on-mousemove cards
- Bouncy springs
- Rotating loaders
- Celebrations / confetti
- Bouncing scroll arrows
- Animated hero gradients with rainbow morphing
- Text that animates character-by-character
- Glow pulse animations
- Particle field backgrounds

### Motion intensity calibration

The live site is restrained. Motion is functional — hover states, transitions, smooth scrolling. The site does not currently use atmospheric motion (gradient washes, particle fields, parallax). Adding any of those would be a canon-update decision.

The 2026-05-22 decision to permit "animated hero gradient — slow indigo-family wash" is **superseded by this revision** because the indigo-family palette itself is superseded. No hero gradient animation in v1.

If a future brief proposes adding atmospheric motion (gradient wash within the warm-parchment palette, subtle particle field, scroll parallax), it's evaluated then.

---

## Section 6 — Spacing (locked)

Token scale matches Workbench Canon:

```
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160
```

Customer-facing surfaces use the larger end of the scale. 96px+ between major sections is appropriate on the marketing site. 160px between hero and first content section is permitted.

Max content widths:
- Hero text block: ~720px
- Body paragraphs: ~640px
- Section headlines: ~880px
- Card grids: ~1080px
- Full-bleed atmospheric: viewport width

Exact values to be verified against the live site's actual rendered widths in Brief 01's repo survey.

---

## Section 7 — Imagery and illustration

### Permitted

- Abstract geometric forms used as accent (the live X-Ray sample card and Command Deck dashboard preview are examples of this — UI as marketing asset)
- Product screenshots / UI mockups (Chamber, X-Ray, Command Deck) used as marketing assets
- Restrained client testimonial photography (small, integrated, never hero)

### Prohibited

- Stock photography
- Illustrated mascots
- Cartoon iconography
- Bright accent colors outside locked palette

---

## Section 8 — Hero copy (locked 2026-05-22, carries forward)

The hero copy is locked verbatim:

> Software you forgot.
> Customers who never paid.
> Vendors who quietly raised prices.
> The bleed has a number.
> We find it.

This is the weathered-operator voice. Direct. Concrete. Lists what the owner has felt but couldn't name. No marketing flourish. The words don't change.

---

## Section 9 — Open questions resolved across canon passes

| Question | Resolution | Date |
|---|---|---|
| Hero typography — display serif or sober sans? | Sober sans (Inter Tight). No Cormorant. | 2026-05-22, reaffirmed 2026-05-23 |
| Magnetic cursor effects? | No. | 2026-05-22 |
| 3D tilt cards? | No. | 2026-05-22 |
| Animated hero gradient? | No (superseded — indigo-family palette retired). | 2026-05-23 |
| PCORD palette as separate token set? | No — PCORD uses ink hierarchy on live site. | 2026-05-23 |
| Hero copy — hold or replace? | Hold verbatim. | 2026-05-22 |
| Subdescriptor under "Money leaks, made visible"? | Yes: "Then watched, so they don't come back." | 2026-05-23 |
| Photography on site? | Permitted: product screenshots + restrained testimonial. No stock. | 2026-05-22 |
| Per-industry landing pages? | Deferred. | 2026-05-22 |
| Inherit from Chamber Canon or live site? | Live site. Chamber Canon is a derivative; this canon is the source. | 2026-05-23 |

---

## Section 10 — Brief sequence (revised)

Each brief targets ONE section or one infrastructure concern. Each brief bundles copy fixes and design adjustments for that section. Cascade implements. Operator verifies in Chrome on Vercel preview before promote.

Brief numbering reconciliation: A&D's prior handoffs reference repo briefs 12-15. The repo `BUILD_LOG.md` is the source of truth for actual brief numbers. Brief 01 below is the next *Website Build–owned* brief; its actual number in the repo is determined by Cascade's survey output. The labels below are internal sequence labels.

| Sequence | Scope | Notes |
|---|---|---|
| W01 | Token foundation + repo survey | Cascade walks the repo, reports actual structure of Header component, descriptor render location, current Tailwind config, and current brief-numbering in `BUILD_LOG.md`. Updates `tailwind.config.ts` to expose live-site tokens as named tokens if not already done. No visual change. |
| W02b | Subdescriptor (protector framing) | Per A&D's hybrid Option 2 decision (2026-05-23). Add "Then watched, so they don't come back." beneath top descriptor in Header component. Includes git backup branch creation per A&D's locked mechanism. |
| W02 | Hero section design pass | Apply token discipline. Hero copy held verbatim. Inter Tight type confirmed. Primary CTA in agent amber. |
| W03 | Problem section ("You can feel it. You can't see it.") | Apply tokens, generous spacing, ink hierarchy. |
| W04 | The X-Ray section | Apply tokens. X-Ray Guarantee callout. Sample finding cards with leak-color treatment. PCORD ink hierarchy. |
| W05 | The Command Deck section | Apply tokens. Dashboard preview as marketing asset. Mono on data values. Leak-color on negative figures. |
| W06 | Watchdog section | **Copy fix:** "The agent surfaces what it's seen" → "Watchdog surfaces what it's seen." Apply tokens. Loop diagram with agent-amber treatment. |
| W07 | Engagement section ("How an engagement starts") | Apply tokens. Four-phase steps. |
| W08 | Footer | Mono-led, wide-tracked small caps section labels, generous space. |
| W09 | Site nav and 404 routes | Decide: build out /method, /about, /pricing, /questions, /start, or remove the nav links until pages exist. Currently all 404. |

Each brief includes the locked-canon vocabulary check (Section 1) and verification per Section 11.

---

## Section 11 — Verification rules (per .windsurfrules + activation doc)

Every brief requires before reporting done:

- `tsc --noEmit` passes
- Vercel preview build succeeds
- Vocabulary check against locked terms list (Section 1 of this doc)
- No prohibited language anywhere in the diff
- No retired language anywhere in the diff
- Operator verifies visually in Chrome on preview URL before merge to production

For copy changes, Cascade greps the repo for any other instance of the old term to ensure the fix is complete and not partial.

For any copy-replacement brief, the git backup branch mechanism applies per A&D's 2026-05-23 lock:

> Before any copy is replaced, create a git branch named `pre-protector-shift-backup` (or appropriately named for the brief) from the current HEAD. Push the branch to origin so it persists outside the local working copy. Confirm the branch exists in the remote repository before beginning any copy-replacement work.

---

## Section 12 — What this canon does not cover

- Customer-facing PDF assets (Welcome Packet, Readahead, Pricing Sheet) — NOT touched by Website Build per A&D's 2026-05-23 hybrid Option 2 scope refinement
- Consultation script and Kyle-facing materials — different slice, not Website Build
- Email templates — separate concern
- Conversion mechanics (Calendly integration, form UX) — open question, decided in a later brief when /start is built
- SEO meta tags and OpenGraph — handle in a dedicated brief if performance warrants it
- Accessibility audit — implicit requirement (WCAG AA contrast, semantic HTML, keyboard navigation), Cascade verifies basics each brief

---

*End of Website Canon v1 (revised 2026-05-23). Locked. Update via decisions-log entry only. Supersedes 2026-05-22 version. The 2026-05-22 version remains in project knowledge as historical record per append-only doctrine.*
