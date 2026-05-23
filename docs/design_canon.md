# Design canon — Vizion Corp AI

The durable visual + typographic system for Vizion Corp's public site. This is the canon Cascade references on every UI brief. Briefs draw from this; they don't override it. If a brief proposes something that conflicts with the canon, the brief is wrong — stop and flag.

Companion to `decisions_log.md` (locked decisions), `positioning.md` (copy and brand language), `landing_page_research.md` (the empirical case behind structural choices), `competitor_landscape.md` (why we don't look like the field).

---

## What this canon is for

Vizion Corp's marketing site has to *sell.* The AI consultancy field is saturated with cyan-on-black neural-mesh sites that all look alike. Vizion's competitive wedge is partly substance (The X-Ray, The Command Deck, Watchdog, QB Desktop coverage, vet-owned) and partly perceptual: looking and reading like a serious operation, not a slide-deck consultancy.

This canon exists so every UI decision drives toward signature, not generic. When in doubt, return to the seven principles below and ask which one a proposed change serves.

---

## The seven principles

### 1. Signature, not generic

Every element on the page either belongs to Vizion specifically or could belong to any AI consultancy in the field. If it could belong to any, it's wrong.

The visual vocabulary Vizion owns: amber signal-agent indicators, signal-leak red-orange, current-issue avionics typography (Inter Tight + JetBrains Mono), the fragment-and-pivot hook pattern, the Phase-3-deliverable tagged dashboard, the veteran-owned stamp with rule lines.

The visual vocabulary Vizion doesn't use: cyan/teal neural-mesh, abstract 3D renders of "intelligent brain," gradient-heavy "AI tunnel" imagery, generic dashboard mockups that don't reference The Command Deck's actual output.

### 2. Perception over instrumentation

A page that scores 100 on Lighthouse but feels generic has failed. A page that feels expensive and converts is correct.

Performance matters because it serves perception. Don't chase pixel-perfect numbers when perception would let us ship. Don't ship pages that perform well numerically but feel cheap.

### 3. Color is signal, not decoration

Color carries meaning in this system. Adding color "for visual interest" violates canon.

The complete role assignment:

- **Amber signal-agent (`#F2B33D`)** appears only when a Watchdog is active, a status is live, an eyebrow is identifying a service line, or the pivot of the hook is landing. It is the brand's accent color; using it elsewhere weakens its signal.
- **Signal-leak (`#E36842`)** appears only on leak indicators, risk numbers, warning states, and the leak-banner accent border. Never as a button. Never as a decorative highlight. The reader learns within five seconds that orange-red means "something is costing you."
- **Warm bone (`#EDE6D5`)** is the brand's ink. Body text, primary copy, the first line of the hook pivot. Treat as the workhorse color.
- **Muted bone (`#A39C8C`)** is for setup copy, sub-headlines, the hook fragments, dashboard secondary values. It's quieter than primary ink on purpose.
- **Ground (`#0B0D11`)** is the page background. Surfaces sit slightly lighter (`#0E1116` inner dashboard, `#11141A` toolbar) to create depth without visual noise.

Test for any new color use: which role above does it occupy? If none, don't use it.

### 4. Type does the work

Animations and decorations are seasoning. Typographic hierarchy, weight contrast, letter-spacing, and rhythm are the meal.

The hero's fragment-and-pivot hook works because the type contrast — 30px weight 400 muted fragments stepping up to 44px weight 600 bright pivot — does the dramatic work without any visual gymnastics. This is the model.

For every new section, ask: can type contrast carry this, or do we genuinely need a visual element? Default answer is type.

### 5. The grid is visible

Rule lines (0.5px, `#22272F`) are part of the language. They define cells, separate sections, frame the veteran stamp. The grid is part of what makes Vizion feel like an instrument panel rather than a brochure.

Don't hide structure. Show it.

### 6. Motion is data, not flourish

Animations on this site exist to reveal information or sequence reading. They never exist for decoration.

Acceptable motion:
- Hook fragments rising in sequence (sequences reading)
- Risk number counting up (reveals scale)
- Dashboard bar / pace tick animating into place (reveals data)
- Agent dot pulsing (signals active status)
- Hover state on buttons (signals interactivity)

Unacceptable motion:
- Decorative particle effects, drifting backgrounds, animated gradients
- Hover states that exist for "delight" with no functional payoff
- Loading spinners that aren't tied to actual loading
- Parallax for its own sake

### 7. No AI-slop, ever

The brand is selling AI competence. Looking generative-AI-generic is fatal. This applies to:

- Imagery (no AI-generated decorative art, no Midjourney filler, no DALL-E illustrations)
- Copy (no AI-rewritten paragraphs that read as soft, hedged, generic)
- Iconography (no AI-themed icon sets that all look like the same neural-mesh)
- Layout (no auto-generated layouts that betray a template)

The vet-owned, machine-enhanced direction is precisely meant to look like a real operation runs this site. Anything that erodes that perception erodes the wedge.

---

## Color system (full spec)

The complete palette. Always reference by token, not hex, in code.

| Token | Hex | Role |
|---|---|---|
| `ground` | `#0B0D11` | Page background, near-black gunmetal |
| `surface-1` | `#0E1116` | Inner panels, dashboard body |
| `surface-2` | `#11141A` | Toolbar strips, top-of-component bars |
| `rule-primary` | `#22272F` | Section borders, dashboard frame, primary divider |
| `rule-inner` | `#1A1E25` | Inner divisions within a panel |
| `ink-primary` | `#EDE6D5` | Body text, primary copy, hook pivot line 1 |
| `ink-secondary` | `#A39C8C` | Sub copy, hook fragments, secondary values |
| `ink-secondary-bright` | `#C2BBA8` | Emphasis spans in body copy; lifts above ink-secondary without reaching ink-primary or signal-agent. Max two uses per section. |
| `ink-tertiary` | `#8A8F99` | Labels, captions, nav links |
| `ink-quaternary` | `#5E6168` | Metadata, timestamps, ultra-quiet supporting text |
| `signal-agent` | `#F2B33D` | Watchdog indicators, active status, eyebrow, hook pivot line 2 |
| `signal-leak` | `#E36842` | Leak indicators, risk numbers, warning states |
| `signal-leak-border` | `#4A2218` | Risk-banner border, leak-related framing |

**Discipline:**
- Never introduce a new color without operator approval and a new entry in `decisions_log.md`.
- Don't use `signal-agent` or `signal-leak` on more than one element class per section. Two amber things in a viewport dilutes the signal.
- Don't use bright pure red. Signal-leak is amber-red on purpose.
- Don't use cyan, teal, or electric blue. That's the field's vocabulary; we don't speak it.

**`ink-secondary-bright` usage note:**

ink-secondary-bright: #C2BBA8

Use: emphasis spans within body copy that need to lift slightly above ink-secondary without going to ink-primary or signal-agent. Apply via `<span style={{ color: 'var(--ink-secondary-bright)' }}>` on specific phrases.

Maximum two uses per section. Sits between ink-secondary (#A39C8C) and ink-primary (#EDE6D5) on the warmth ramp.

First used in the Pain section (Brief 04) on "But something is off" and "That's where the money goes. That's where it stays gone." Both serve as load-bearing emphasis lines within body prose.

---

## Typography system (full spec)

Two faces. Loaded from Google Fonts.

```
'Inter Tight', -apple-system, system-ui, sans-serif
'JetBrains Mono', Menlo, monospace
```

### Role assignments

| Role | Face | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Eyebrow | JetBrains Mono | 10–11px | 500 | 0.24em | UPPERCASE |
| Hook fragment | Inter Tight | 28–32px | 400 | -0.022em | Sentence |
| Hook pivot (line 1) | Inter Tight | 42–48px | 600 | -0.032em | Sentence |
| Hook pivot (line 2) | Inter Tight | 42–48px | 600 | -0.032em | Sentence (amber) |
| Section H2 | Inter Tight | 32–40px | 600 | -0.028em | Sentence |
| Section H3 / subhead | Inter Tight | 18–22px | 500 | -0.012em | Sentence |
| Body copy | Inter Tight | 14–16px | 400 | -0.005em | Sentence |
| Sub copy / caption | Inter Tight | 12–13px | 400 | normal | Sentence |
| Number / financial | JetBrains Mono | varies | 500 | tabular-nums | n/a |
| Label / status | JetBrains Mono | 9–11px | 500 | 0.14–0.18em | UPPERCASE |
| Stamp (veteran-owned) | JetBrains Mono | 9px | 400 | 0.22em | UPPERCASE |
| Button | JetBrains Mono | 11px | 500 | 0.14em | UPPERCASE |

### Typographic principles

- **Tabular numerals always for financial data.** `font-variant-numeric: tabular-nums`. Numbers must align column-wise; non-tabular numerals in a leak table are an error.
- **Sentence case for headlines.** Title Case reads as a magazine; sentence case reads as a serious operation.
- **Mono is for facts.** Numbers, labels, status, metadata. The mono face says "this is data." When mono shows up in copy, the reader's brain registers "instrument readout."
- **Inter Tight is for thoughts.** Headlines, body, sub copy. The proportional face says "this is being said to you."
- **Letter-spacing is part of the rhythm.** Eyebrows and stamps are heavily tracked (0.22–0.24em). Body is barely tracked or negative-tracked. Headlines are negative-tracked. Don't change tracking without a reason.

### The hook pattern (locked)

The fragment-and-pivot hook is the brand's signature copy treatment. Other sections may borrow elements:

1. Three short fragments, muted bone, weight 400, ~30px. Each on its own line. Period at the end of each. Sequence-animated on reveal.
2. Beat of whitespace (~14px).
3. Pivot line 1, warm bone, weight 600, ~44px. Sentence.
4. Pivot line 2, amber, weight 600, ~44px. Short. The promise.

This pattern is reserved for moments of high consequence (hero hook, final CTA, possibly section openers for Pain and Engagement). Don't overuse — its power comes from rarity.

---

## Spacing and grid

- **Hero outer padding:** 28px top / 32px sides / 36px bottom
- **Section vertical rhythm:** 60–80px between sections (desktop), 40–56px (mobile)
- **Cell padding (dashboard cells):** 20px all sides
- **Component padding (banners, panels):** 22px sides / 22px top-bottom
- **Inline gap between fragments / leaks:** 14px (visual separation without breaking flow)
- **Rule weight:** 0.5px for primary structural lines (browsers may render 1px on non-retina; acceptable)

Mobile breakpoints:
- Below 720px: hero headline drops to 26px (fragments) / 30px (pivot); dashboard grid collapses to single column; risk banner stacks vertically.
- Below 380px: tighten padding to 20px sides. Don't introduce new content; just compact existing layout.

---

## Motion vocabulary

The site's motion idiom is **"data revealing itself."** Animations sequence reading, count up numbers, surface signals. They never decorate.

### Easing

- **Primary easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — fast in, slow out. Reads as "settling into place."
- **Number animations:** ease-out cubic (`1 - (1-t)^3`).
- **Pulses:** linear opacity oscillation, 1.8–2s period.

### Choreography (hero example)

```
0.0s    eyebrow visible
0.1s    fragment 1 rises in
0.3s    fragment 2 rises in
0.5s    fragment 3 rises in
0.85s   pivot lines rise in (together)
1.15s   sub rises in
1.4s    risk number starts counting up
1.6s    dashboard fill bar animates
1.8s    pace tick slides into place
```

Total: ~3 seconds from first paint to fully composed page. The hook lands within 1 second.

### Disney animation principles applied

The Atheneum project's animation canon (loaded via the project's `disney_animation_principles.md` reference) maps directly here:

- **Anticipation:** the eyebrow appears before the fragments — sets up that something is coming.
- **Staging:** fragments rise in sequence so each one gets its own beat of attention.
- **Slow in / slow out:** every animation uses an ease curve, not linear. Linear motion is dead motion.
- **Follow through:** the agent pulse continues after page load. The pulse is a "moving hold" — the page is at rest but never static.
- **Timing:** the 3-second total choreography feels ceremonial, not busy. Deliberate, not frantic.

---

## Insignia (the brand mark)

The insignia is Vizion's brand mark. It exists in two canonical forms — **pin standalone** and **full lockup** (pin + wordmark + descriptor). Both must be implemented faithfully from this spec. The insignia is the only element on the site permitted dimensional rendering; everything else stays flat.

### Pin specification

The pin is a polished amber shield insignia in the modernized officer-pin tradition. Eight assembled components, multi-metal palette. SVG-based. Rendered with gradients, layered highlights, and a single hairline drop shadow at the base.

**Canonical SVG dimensions:** 280×370 viewBox at hero scale. The pin itself occupies x=37 to x=243 and y=35 to y=337. The drop shadow occupies y=327 to y=337.

**The eight components, in build order:**

1. **Outer shield rim** — `<path>` traced as the shield silhouette with `stroke-width: 5` and the canonical rim gradient (`#FFD879` → `#F2B33D` → `#6B4F18` at 0% / 45% / 100%). No fill. A second inner stroke at 0.5px / `#FFD879` / opacity 0.55 sits just inside it as a beveled highlight.
2. **Perimeter band** — concentric inner stroke at 1.8px, solid amber (`#F2B33D`). Chronograph tick marks across the top — twelve 4-5px vertical strokes at 0.7px width, spaced asymmetrically with a gap at center.
3. **Inner panel** — recessed inset shaped as a smaller version of the shield silhouette. Triple-stroked: 1.8px amber outer, 0.7px dark recess (`#3D2E10`) inside that, 0.4px highlight (`#FFD879` at 0.55 opacity) inside that. Side-rib gradations as 0.5px horizontal ticks at 0.55 opacity, five on each side.
4. **The V** — five layered paths:
   - Drop shadow: dark recess (`#3D2E10` at 0.85 opacity) offset 2px right and 3px down
   - Main face: vertical gradient (`#FFD879` → `#F2B33D` → `#A87726`), 0.7px stroke at `#6B4F18`
   - Left highlight: `#FFD879` at 0.6 opacity, traces the left edge of the V
   - Right shadow: `#8A6B25` at 0.55 opacity, traces the right edge
   - Top edge highlight: 1px stroke of `#FFD879` at 0.7 opacity along the top of the V
5. **Secondary chevron** — single stripe below the V using the same five-layer V logic at smaller scale.
6. **Steel fasteners** — two at upper corners of the outer shield. Nested circles: 4.5px outer (`#22272F` fill, 0.8px `#5E6168` stroke), 2.5px inner with steel gradient (`#A39C8C` → `#5E6168` → `#22272F`), 1px dark center (`#0B0D11`), 0.45px highlight dot (`#EDE6D5` at 0.6 opacity).
7. **Cardinal fiducials** — three diamond markers in steel: top center, left, right. Two paths each — main diamond with steel gradient and dark stroke, plus a highlight wedge on the upper-left half (`#EDE6D5` at 0.55 opacity).
8. **Drop shadow** — two stacked ellipses below the pin: `rx=92 ry=4.5` at `#1A0F03` 0.5 opacity, then `rx=58 ry=2` at `#000` 0.4 opacity. Sits at y=332.

Plus one divider below the chevron — double stroke (0.7px amber, 0.4px highlight) with a 1.2px amber center pip.

### Full lockup specification

Three elements stacked vertically, centered:

1. **The pin** — at 280×370 viewBox dimensions for hero use. Can scale proportionally for smaller contexts.
2. **20px vertical gap.**
3. **VIZION CORP wordmark.** Inter Tight, weight 600, 32px, letter-spacing 0.34em, color `ink-primary` (`#EDE6D5`). Padding-left 0.34em on the container (compensates for the visual drift trailing letter-spacing creates). Two non-breaking spaces between "VIZION" and "CORP" — at 0.34em tracking a single space disappears visually. In HTML: `VIZION&nbsp;&nbsp;CORP`.
4. **10px vertical gap.**
5. **Descriptor line.** Text: `Money leaks, made visible`. Verbatim, sentence case, with the comma. Style: JetBrains Mono, 9px, weight 500, letter-spacing 0.24em, color `signal-agent` (`#F2B33D`).

The full lockup occupies roughly 280×460 total. Center on its parent.

### Standalone pin (without wordmark)

When the pin appears without the wordmark — favicon, nav, social preview corners — use only the pin SVG at the appropriate scale. Below 64px height, the chronograph tick marks and cardinal fiducials become illegible noise; use a simplified version that omits them (the perimeter band, the inner panel, the V, the chevron, and the fasteners only). The simplified version is generated from the full SVG by removing those elements at render time, or shipped as a separate asset.

### Color discipline — multi-metal

The insignia is the only element on the site permitted multi-color rendering. Within the pin, four metal families work together:

| Metal | Hex range | Used on |
|---|---|---|
| Brass amber | `#FFD879` highlight → `#F2B33D` body → `#6B4F18` shadow | Rim, perimeter band, panel borders, V, chevron, divider |
| Cool steel | `#A39C8C` highlight → `#5E6168` body → `#22272F` shadow | Fasteners, cardinal fiducials |
| Deep recess | `#3D2E10` → `#1A0F03` | Drop shadow, shadow layers, recessed strokes |
| Engraved bone | `#EDE6D5` | Wordmark only (sits below the pin, not within it) |

Mixing amber with steel within a single component is wrong. Each component is one metal family. The composition pattern comes from *distributing* the families across the surface, not blending them.

### Dimensional rendering exception (the canon-bending rule)

The Insignia is the **only** element on the site permitted dimensional rendering. Everything else stays flat per `globals.css` and the original canon. Specifically allowed only on the insignia:
- Multi-stop linear gradients
- Layered highlight + shadow paths
- Hairline drop shadow at the base
- Recessed dark zones

Specifically forbidden everywhere else (dashboard, type, panels, banners, buttons, agent strip, leak rows, sections, backgrounds): all of the above remain forbidden.

Reason: the mark is the only three-dimensional object on the site. Everything else is the information layer. This is hierarchy.

### Implementation notes

- The pin SVG ships as a single React component, `<Insignia />`, with props for `size`, `variant` (`'full' | 'simplified'`), and `withWordmark` (boolean).
- All gradients are defined inline within the SVG `<defs>`. No global CSS gradients.
- The insignia component is server-renderable — no client interactivity needed in v1. No hover state, no animation. The mark is static.
- The full lockup is a sibling composition that includes `<Insignia />` plus the wordmark and descriptor as separate elements. Don't bake the wordmark into the SVG — wordmark stays as live HTML text so it picks up real font rendering.

---

## Component patterns

### Veteran stamp

`VETERAN-OWNED · PRACTICAL · PLAIN-SPOKEN` in JetBrains Mono, 9px, 0.22em letter-spacing, ink-quaternary color, flanked by horizontal rule lines on both sides. Appears between the top nav and the titleblock. Treat as a small ceremonial element — don't enlarge, don't decorate, don't replicate.

Service-agnostic by design. Air Force specificity (Kyle's service) belongs in Kyle's bio on the Founders page, not on this stamp.

### Risk banner

Left-bordered 2px signal-leak vertical stripe. 0.5px signal-leak-border surrounding. Linear-gradient background from `rgba(227,104,66,0.06)` to `rgba(227,104,66,0.02)`. Padding 22×26. Two-column flex layout: label + sub on the left, big number + unit on the right. Number is JetBrains Mono, ~56–60px, weight 500, signal-leak color.

### X-Ray Guarantee callout

Bordered horizontal panel that sits between the dashboard preview and the primary CTA. Visual register similar to the risk banner but quieter — no animated number, no signal-leak red. Reads as a calm trust commitment, not an alarm.

- Border: 0.5px solid rule-primary (`#22272F`)
- Background: surface-1 (`#0E1116`)
- No accent stripe (the risk banner has the signal-leak vertical stripe; this one doesn't — the visual distinction is deliberate)
- Padding: 22px 26px
- Two-row vertical layout (label + body), not two-column

Label row (top):
- Text: `THE X-RAY GUARANTEE`
- Style: JetBrains Mono, 10px, weight 500, letter-spacing 0.22em, signal-agent color (`#F2B33D`), uppercase
- Margin-bottom: 10px

Body row (bottom):
- Text (verbatim): `If The X-Ray doesn't surface money leaks worth significantly more than what you've paid us for it, we'll walk you through why and refund the difference.`
- Style: Inter Tight, 14px, weight 400, line-height 1.55, ink-primary color (`#EDE6D5`), max-width 640px
- "The X-Ray" appears in signal-agent color (`#F2B33D`) inline — the product name is the only emphasized element in the sentence

This component is rendered server-side. No animation, no state, no hover.

### Dashboard frame

0.5px rule-primary border. surface-1 background. Top toolbar (10×14 padding, surface-2 background, 0.5px rule-inner bottom border) carries a left-side tag, a center-left filename-style label, and a right-side source + live-status pair. Grid below is 2-column (1.6fr / 1fr) with cells divided by 0.5px rule-inner.

### Leak row

22px rank number (JetBrains Mono, ink-quaternary) + 1fr body (name + detail) + 88px monthly column (JetBrains Mono, ink-secondary, tabular-nums) + 100px annual column (JetBrains Mono, signal-leak, tabular-nums, weight 500, larger). Bottom border 0.5px rule-inner except on the last row.

### Agent activity strip

8px pulsing amber dot with box-shadow glow + mono caption with amber `Watchdog watching · N leaks` label and ink-secondary message. Always references real activity in copy; never decorative.

### CTAs

**Single primary CTA per page section.** No secondary CTA in the hero (locked 2026-05-16). Other sections may have single CTAs only.

Primary: transparent background, 0.5px ink-primary border, ink-primary text. Hover: ink-primary background, ground text.
JetBrains Mono 11px, 0.14em tracking, uppercase, 13–14px / 22–24px padding.

Locked primary CTA copy: `START A CONVERSATION` (hero). Other sections will lock their own primary CTA copy in their respective briefs.

---

## Imagery and illustration

Rules from `decisions_log.md` (repeated here for canon-of-record):

- **No stock photography.** Generic team-pointing-at-laptop imagery is fatal.
- **No AI-generated decorative imagery.** Especially nothing that looks AI-generated.
- **Founder photography:** real, deliberate photos. Used in the Founders section. May be black-and-white or warm-bone-tinted to fit the palette.
- **Iconography:** acceptable only if intentionally curated. No off-the-shelf icon dumps. Each icon should look like it belongs in the avionics canon.
- **Diagrams:** acceptable when they convey information text can't (process flow, the PCORD framework breakdown, the proposal-approval-execution-debrief loop). Never for decoration.

If imagery isn't ready, the section isn't ready. Don't ship lorem-ipsum images.

---

## Always-do list

- Tabular numerals on every financial figure
- Sentence case for headlines
- Mobile breakpoint check before merge
- Veteran-owned stamp on every long-form page (subtle, ceremonial)
- One primary CTA per section, secondary visually subordinate
- Real copy in every section before brief is written
- Color tokens in code, never raw hex
- Ease curves on every transition
- Forbidden vocabulary check before copy ships

---

## Never-do list

- Stock photography
- AI-generated decorative imagery
- Generic icon dumps
- Cyan/teal/electric blue palette
- Pure red as a primary color
- Title Case headlines
- Linear easing on animations
- Decorative particle effects
- Process diagrams without information content
- "5-step methodology" graphics
- Lorem ipsum in committed code
- Forbidden vocabulary from `decisions_log.md` (transform, unlock, scale, etc.)
- Re-litigating rejected directions from `decisions_log.md` (radar, sonar, HUD, schematic, etc.)
- Inventing copy that contradicts `positioning.md`

---

## Open questions / future decisions

Tracked here until they get a decision in `decisions_log.md`:

- **Logo / mark:** the "V" in a square at top-left is provisional. Direction is service-insignia tradition (unit patch / squadron badge feel), not tech logo. Dedicated session pending.
- **Paid type stack:** Inter Tight + JetBrains Mono ships v1. Evaluation of PP Neue Montreal / Söhne / Berkeley Mono as upgrade allowed once site is shipping but requires explicit decision before substitution.
- **Founders section photography:** style direction (lighting, treatment) TBD. Operator owns this call.
- **Case study format:** what does a "proof" engagement look like rendered? TBD until first sharable case study exists.
- **Light mode:** dark is canon. Light mode is not on the roadmap unless explicitly added.

---

*This canon is durable. Don't propose changes inside briefs. Bring proposed changes to the chat in a session dedicated to canon evolution. If the canon evolves, append a dated entry to `decisions_log.md` and update this file with the new rule.*
