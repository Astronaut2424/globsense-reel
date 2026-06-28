**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/04-linfen/`

**Read these BEFORE you start writing code**:
1. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/brief-contract.md`
   — the done-bar contract
2. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css`
   — import these tokens; do not redefine
3. `/opt/data/home/globsense/brain/narrative/` — Globsense voice + manifesto
4. `/opt/data/home/globsense/brain/frameworks/` — frame control method
5. `/opt/data/home/globsense/design-system/DESIGN.md` — additional brand notes

**Hard rules** (from brief-contract.md, repeated for safety):
- Self-contained folder, no build step, no npm.
- Import `../_shared/tokens.css` in your `<link>`.
- CDNs allowed: jsdelivr, unpkg, bootcdn. Forbidden: googleapis,
  googlefonts (use jsdelivr font mirrors).
- Mobile-first, no console errors.
- Fictional brand — no concept stamp needed.

**When done**:
- Page renders without console errors.
- Update `_status.json` with `{"status": "built", "worker_model": "<the
  model you're running as>", "updated_at": "<ISO timestamp>",
  "build_time_seconds": <number>, "needs_review": true, "notes": "<one
  short paragraph>"}`.
- Drop a one-paragraph summary to the user describing what you built,
  what's elegant about it, and what would benefit from a second pass.

**Do NOT**:
- Touch other project folders
- Modify `/opt/data/home/globsense/prototypes/globsense-reel/manifest.json`
- Deploy or `git push` — orchestrator owns that
- Stop and ask questions unless the brief is incoherent. Make a
  defensible call, document it in `_brief.md`, keep going.

---

**Project: Linfen 林芬 (#04)**

Fictional Chinese skincare brand built on rare botanicals from Yunnan / Wuyi /
Changbai mountains. The AI moment: an AI dermatologist on your phone camera
analyses skin and generates a custom serum + label + story.

Build a single hero page with a working-feeling demo flow:

1. **Hero**: dark organic background (think mossy stone close-up), brand name
   林芬 in CN serif, subtitle "your skin, read by the mountain." Scroll cue.

2. **The Diagnostic (AI moment)**: a step-by-step ritual:
   - "Allow camera" (fake — show a stylized webcam preview SVG or upload
     stub, no real camera permission required)
   - 5 animated "scanning" labels flash across the preview (hydration:
     61%, sebum: 34%, sensitivity: high...)
   - Result panel slides in: "Your skin is reading like late-autumn
     mountain air — dry, taut, asking for warmth."

3. **The Generated Serum**: an animated label generates in real-time on
   screen — the label literally types itself out: a custom name (e.g.
   "Linfen Reserve 47 · Changbai Resin & Wuyi Camellia"), a 4-line poetic
   note, a barcode-like ingredient stack. Below: a render of the bottle
   with that label. Use CSS animations / SVG to build this — looks
   premium AND uncanny.

4. **The Story**: three paragraphs on the botanical sourcing, illustrated
   with photo-style placeholders.

5. **The Order**: ¥780 · ships globally. Premium e-commerce CTA mock.

Aesthetic: deep moss + cream + a single warm gold accent. Body in Inter,
display in EB Garamond. Sparse. Let the diagnostic + label generation be
the wow moment — everything else stays quiet around them.
