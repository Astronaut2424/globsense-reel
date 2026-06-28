**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `claude-sonnet-4-6-thinking` (set in WebUI dropdown)
**Tier**: Premium (Claude) —  (est. ~$7-10)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/07-ink-garden/`

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
`/opt/data/home/globsense/prototypes/globsense-reel/07-ink-garden/`.

### Step 2 — Document
Write `_brief.md` in the same folder with: what you built, design rationale,
the AI moment, what a second pass would improve.

### Step 3 — Mark for deployment
Write `_status.json`:
```json
{
  "status": "built",
  "worker_model": "claude-sonnet-4-6-thinking",
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

**Project: Ink Garden (#07) — Mini-game**

A meditative browser mini-game. Visitor drags on a digital scroll;
AI completes their strokes into a Chinese ink-wash landscape. Beautiful,
shareable, viral-potential.

Build:

1. **Open scene**: blank rice-paper canvas (cream texture), brush cursor,
   palette of 3 ink darknesses + 1 wash blue. Faint guide marks
   indicating where mountains "want" to be.

2. **The mechanic**: visitor drags. As they release each stroke, an
   animation extends and completes their gesture into a piece of
   landscape — a mountain ridge, a tree branch, a calligraphy character.
   For tonight, fake this elegantly: each stroke gets matched to one of
   12 pre-baked "completion SVG paths" based on starting position +
   length. The illusion is the magic.

3. **Ambient**: subtle ink-stone sound on stroke, water trickle in
   background (opt-in, no autoplay).

4. **End state**: after ~5 strokes, the painting completes itself, a
   faint stamp (印章) appears in red bottom-right with the visitor's
   stroke count as the "edition", and a poetic line generates in
   classical-style Mandarin + English. Share buttons.

5. **Brand stamp** in upper-left: this is a digital artwork experience
   by the fictional brand "墨园 Mokuen" — a digital stationery house.

Aesthetic: 100% rice-paper light cream, deep ink black for strokes, ONE
crimson stamp accent. No chrome. Just the canvas. Quiet, slow, premium.
