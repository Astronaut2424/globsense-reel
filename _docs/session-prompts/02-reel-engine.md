**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `gpt-5.4` (set in WebUI dropdown)
**Tier**: Standard (GPT) —  (est. ~$3)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/`

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
`/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/`.

### Step 2 — Document
Write `_brief.md` in the same folder with: what you built, design rationale,
the AI moment, what a second pass would improve.

### Step 3 — Mark for deployment
Write `_status.json`:
```json
{
  "status": "built",
  "worker_model": "gpt-5.4",
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

**Project: Globsense Reel Engine (#02)**

The internal product we'll sell to clients. Demo page for "Reel Engine" — an
auto-video pipeline that mixes real footage with AI generation, edited by AI.

The page must SHOW THE PIPELINE, not describe it. Build a hero demo that walks
the visitor through one example brief in 4 visible stages, with smooth
transitions and scrollytelling between stages:

1. **Stage 1 — Brief.** Type-in box pre-filled with: "30s teaser for the
   launch of a fictional Chinese tea house opening in London. Cinematic,
   Yorkshire fog, elegant." A button "Generate" triggers stage 2.

2. **Stage 2 — Storyboard.** 6 shot cards appear in sequence, each showing
   a thumbnail (pre-baked SVG or placeholder image) + a one-line shot
   description + a tag: AI / REAL / HYBRID. Animate them flipping in. The
   AI/REAL/HYBRID mix is the magic — show this clearly.

3. **Stage 3 — Asset matching.** Each shot card now shows the source —
   "AI: Sora-2 prompt..." or "REAL: stock-fjord-9421" or "HYBRID: real
   teacup + AI steam overlay." Add a faux timeline at the bottom with
   coloured blocks representing the 6 cuts on a 30s ruler.

4. **Stage 4 — Final reel.** A 30-second mock embed (use a pre-baked MP4
   or even a static "video frame" with a play button — the reel itself
   doesn't have to actually play tonight; the demo is the PIPELINE).
   Below: download / iterate / book a call CTAs.

Aesthetic: cinematic dark, but with editorial pop — like a Vimeo Staff Pick
crossed with an OpenAI announcement page. Show "Powered by Globsense
Shanghai" small at the bottom.

Pre-bake all the data. The pipeline is the demo, not the actual generation.
