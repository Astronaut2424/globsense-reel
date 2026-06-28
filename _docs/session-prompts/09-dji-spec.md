**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `grok-4.1` (set in WebUI dropdown, `openai-next`)
**Tier**: Standard — Cinematic creator brand. (est. ~$4)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/09-dji-spec/`

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
- Real-brand spec — MUST include the concept stamp before </body>: read `../_shared/concept-stamp.html` and inline its content.

**WORKFLOW — creative phase only**:

### Step 1 — Build
Write `index.html`, `style.css`, `script.js`, plus any `assets/` INTO
`/opt/data/home/globsense/prototypes/globsense-reel/09-dji-spec/`.

### Step 2 — Document
Write `_brief.md` in the same folder:
```markdown
# DJI Atelier — Creative Brief Interpretation

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
  "worker_model": "grok-4.1",
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

**Project: DJI Atelier (#09) — Real-brand spec · Concept · Unaffiliated**

A speculative reimagining of DJI's brand experience FOR CREATORS — not for
general consumers. Fictional new property: dji.com/atelier.

This is portfolio-spec work. Stamp it clearly. We're showing what we'd
make if DJI asked. No real DJI brand assets, no real product images
beyond stylized abstract drone silhouettes.

Build a single long-scroll cinematic page:

1. **Hero**: full-bleed dark, a single SVG drone silhouette slowly tracking
   across an animated mountain ridge. Tagline: "The atelier for those who
   make pictures with the sky."

2. **The Shot Planner (AI moment)**: visitor inputs a location (text
   field, autocomplete suggesting "Iceland fjord", "Shanghai bund",
   "Guilin karst"). The page animates a faux satellite/topo map appearing,
   then 3 suggested shot routes overlay — "the rise", "the orbit", "the
   reveal." Each card shows shot duration, drone movement, lens choice,
   golden hour timing.

3. **The Creator Roster**: a "Featured This Week" grid of 6 fictional
   creators with stylized portraits + a representative landscape.

4. **The Workshop**: speculative service tier — pair with a DJI master
   pilot for a private shoot. Pricing as "by application" mystery.

5. **Concept stamp** (bottom-right, mandatory): use the contents of
   `_shared/concept-stamp.html`.

Aesthetic: cinema dark, large editorial photo-illustrations (stylized
SVG/CSS), restrained, with one stripe of brand-orange accent reserved
for the AI-moment shot planner. Type: display serif headlines, sans
body.

DO NOT use DJI's actual logo or product images. Stylized abstract is
the rule.
