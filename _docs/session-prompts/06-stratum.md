**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `gpt-5.4-pro` (set in WebUI dropdown, `openai-next`)
**Tier**: Standard (GPT) — Dev portal = code + polish. (est. ~$4)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/06-stratum/`

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
`/opt/data/home/globsense/prototypes/globsense-reel/06-stratum/`.

### Step 2 — Document
Write `_brief.md` in the same folder:
```markdown
# Stratum — Creative Brief Interpretation

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
  "worker_model": "gpt-5.4-pro",
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

**Project: Stratum (#06)**

Fictional Chinese video-generation inference layer / SDK. Think DeepSeek for
video. The brand sits in the cinematic dev-tools register — Vercel polish
meets Anthropic gravitas. Doubles as the technical SDK page that the
Globsense Reel Engine (#02) would call.

Build a dev-portal landing page:

1. **Hero**: tagline "The video inference layer of the next decade of
   cinema." Big, dark, fast. Below: animated terminal/code window showing
   a 4-line API call — `client.generate(prompt='...', shot_type='wide',
   duration=4s)` — that returns a video preview thumbnail in the next pane.

2. **The Three Capabilities**: side-by-side cards:
   - Text-to-shot (single shot generation)
   - Edit-aware sequencing (multi-shot with continuity)
   - Real-mix orchestration (compose with real footage)
   Each card has a tiny live diagram (CSS/SVG) showing the data flow.

3. **The Code Playground**: a fake code editor on the page where visitors
   can pick from 3 preset prompts and see the (pre-baked) result render
   into a preview pane. Make it feel snappy — animate the rendering bar.

4. **Pricing**: 3 tiers (Open, Studio, Enterprise) in a dense premium
   pricing table. Numbers in USD AND ¥.

5. **Docs Preview**: 3 columns of fake doc navigation (Quickstart,
   API Reference, Recipes). Click → a styled docs preview modal.

6. **Footer**: company in Shanghai, status page (faux), Discord link.

Aesthetic: NEAR-BLACK background, sharp grid, mono-heavy. Accent in
Globsense brand orange (--brand-accent). Borrow visual language from
Vercel + Anthropic + Resend. Should look like a real dev tool, not a
mockup.
