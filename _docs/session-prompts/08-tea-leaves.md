**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `gemini-2.5-flash` (set in WebUI dropdown, `openai-next`)
**Tier**: Standard (Gemini) — Text-generation mini-game. (est. ~$1)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/08-tea-leaves/`

**Read FIRST** (quick skim, don't burn tokens re-reading):
1. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css` — import these
2. `/opt/data/home/globsense/brain/narrative/` — Globsense voice (skim only)
3. `/opt/data/home/globsense/design-system/DESIGN.md` — brand notes (skim only)

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
`/opt/data/home/globsense/prototypes/globsense-reel/08-tea-leaves/`.

### Step 2 — Document
Write `_brief.md` in the same folder:
```markdown
# Tea Leaves — Creative Brief Interpretation

## What I built
<2-3 sentences>

## Design rationale
<2-3 sentences on WHY these choices>

## The AI moment
<which part dramatizes AI-native, and how>

## What a second pass would improve
<1-2 sentences of honest self-critique>
```

### Step 3 — Mark for deployment
Write `_status.json`:
```json
{
  "status": "built",
  "worker_model": "gemini-2.5-flash",
  "needs_deploy": true,
  "updated_at": "<ISO 8601 UTC>",
  "notes": "Creative phase complete. Awaiting deployment session."
}
```

### Step 4 — Report to user
One short paragraph: what you built, what's elegant, what could improve.
Then say: **"Creative phase done. Open a deploy session (cheap model)
to ship this."**

**DO NOT**:
- Run terminal commands (no curl, no git, no python http.server)
- Push to GitHub
- Modify `manifest.json` or `_shared/` files
- Touch other project folders
- Run `deploy.sh`

Your tokens are for CREATIVE WORK ONLY. Stop after Step 4.

---

**Project: Tea Leaves (#08) — Mini-game · Mingxi universe**

A divination mini-game in the Mingxi 明溪 (#03) universe. Visitor "drinks"
a cup of tea; AI reads the leaves and writes their fortune in classical-
style bilingual prose. Cross-promotes Mingxi.

Build:

1. **Cup of tea** (full-bleed dark): a stylized illustration/SVG of a
   teacup viewed from above, dark liquid inside. Below: prompt "ask the
   leaves." Single text input. 3 example questions pre-suggested.

2. **The ritual**: visitor types a question. Tap "drink." Animation:
   liquid recedes (CSS animation), revealing scattered "leaves" (SVG
   shapes) at the bottom of the cup. Each leaf glows briefly as a
   tiny "AI" overlay analyzes it (faux labels: "the longshore pattern",
   "the upward turn", "the broken branch").

3. **The fortune**: text writes itself out — three paragraphs in
   classical-style Mandarin + English translation. For tonight, use a
   switch table of 8 question archetypes (work, love, courage, money,
   creative block, parents, future, a question I can't ask) → 8 pre-
   written fortunes. Each fortune ends with a tea recommendation that
   links back to the Mingxi menu (#03).

4. **The pass-it-on**: "share this reading" button → static image
   compose.

5. **Brand mark**: 明溪 small upper-left, link to /reel/03-mingxi/.

Aesthetic: same midnight green/gold as Mingxi. Slow. Voice of a Tang
dynasty poet, not a horoscope app.
