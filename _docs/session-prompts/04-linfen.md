**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `gpt-5.3-codex` (set in WebUI dropdown)
**Tier**: Premium (Codex) —  (est. ~$5-8)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/04-linfen/`

**Read FIRST** (quick skim, don't burn tokens re-reading):
1. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css` — import these
2. `/opt/data/home/globsense/brain/narrative/` — Globsense voice (skim only)

**Hard rules**:
- Self-contained folder: `index.html` + `style.css` + `script.js` + `assets/`
- NO build step, NO npm. Pure HTML/CSS/JS. Three.js/GSAP via jsdelivr only.
- Import `../_shared/tokens.css` in your `<link>`.
- CDNs allowed: jsdelivr, unpkg, bootcdn. Forbidden: googleapis, googlefonts.
- Mobile-first, no console errors. First paint < 2s on 4G.
- Fictional brand — no concept stamp needed.

**WORKFLOW — creative phase only**:

### Step 1 — Build
Write `index.html`, `style.css`, `script.js`, plus any `assets/` INTO
`/opt/data/home/globsense/prototypes/globsense-reel/04-linfen/`.

### Step 2 — Document
Write `_brief.md` in the same folder with: what you built, design rationale,
the AI moment, what a second pass would improve.

### Step 3 — Mark for deployment
Write `_status.json`:
```json
{
  "status": "built",
  "worker_model": "gpt-5.3-codex",
  "needs_deploy": true,
  "updated_at": "<ISO 8601 UTC>",
  "notes": "Creative phase complete. Awaiting deployment session."
}
```

### Step 4 — Report
One short paragraph: what you built, what's elegant, what could improve.
Then say: **"Creative phase done. Open a deploy session (cheap model)
to ship this."**

**DO NOT**:
- Run terminal commands (no curl, no git, no python http.server)
- Push to GitHub
- Modify `manifest.json` or `_shared/` files
- Touch other project folders

Your tokens are for CREATIVE WORK ONLY. Stop after Step 4.

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
