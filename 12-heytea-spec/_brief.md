# HEYTEA · Soho (#12) — Build Brief

**Concept · Unaffiliated spec work**

A speculative microsite for HEYTEA's first London flagship at 41 Dean Street, Soho. The brief was contrarian: HEYTEA is a Chinese tea brand that needs to NOT feel like a Chinese tea brand opening abroad. It needs to feel like London noticed tea again.

## Design direction
- **Aesthetic:** Monocle editorial. London grey base, warm cream paper, single cherry-red accent (no second accent — discipline holds the room together).
- **Typography:** Fraunces (display serif, high-opsz for headlines) + Inter (UI/labels) + Noto Serif SC (CN guest type). EN sits as host; CN floats underneath like a polite second voice, never larger, never decorative-only.
- **No Chinese-brand-going-abroad clichés:** no red lanterns, no dragons, no "oriental" gradients. Cherry-red appears only as accent — buttons, the cup's brand band, the section numerals.

## Sections delivered
1. **Hero** — CSS gradient grey sky + grain texture, animated floating SVG cup (cream body, cherry band, 茶 character). Bilingual title "HEYTEA · Soho / 喜茶 · 蘇活". Tagline: *"the tea, the city, the meeting."* Foot strip: forecast / establishment / ritual.
2. **Editorial intro** — pull-quote in italic Fraunces, set the room.
3. **The Menu** — 4×2 grid of 8 signature drinks. Each card: EN name, CN name, base description. Hover flips to dark panel: ingredients, calories, sweetness slider (cherry-red fill, per-card `--w` value), and the "if you like X → try this" pairing line.
4. **AI Tea Pairing** — dark section (the moment the page changes register). Four prompts (coffee / aperol / jasmine / builder's tea), each opens a hand-written 3-drink reading: numbered carousel + paragraph essay that reads written-by-a-human, not generated. "Start over" resets cleanly.
5. **The Space** — asymmetric photo strip (4 frames, mixed grid spans). Gradient-fill placeholders with single CN characters as overlay (門口/茶人/儀式/夜) + editorial captions.
6. **Reservation** — minimal form: name, party, date, 5 time slots as toggle pills, "Hold the table / 確認預訂" bilingual CTA. Submits to confirmation state, no backend.
7. **Concept stamp** — fixed top-right, spinning cherry-red ring, "№ 12" core. Mandatory per brief.
8. **Footer** — Monocle masthead grid: brand, address, hours, notes. Spec/unaffiliated declared.

## Files
- `index.html` — semantic structure, inline SVG cup, no external dependencies beyond Google Fonts.
- `styles.css` — design tokens at top, BEM-ish naming, mobile breakpoints at 980px and 560px.
- `script.js` — pairing engine (4 readings, hand-written copy), reservation date default, no framework.

## Voice in copy
The pairing essays are deliberately written, not generated. They reference Sunday flat whites, Eton mess, Islay whisky, the Aperol permission slip. The brief said "reads written-by-a-human-not-an-app" — that's the bar I held.

## What this is not
- Not a HEYTEA marketing site.
- Not a tribute to Chinese tea culture.
- Not generic SaaS aesthetic.

It's a London magazine that happens to be about a tea shop.
