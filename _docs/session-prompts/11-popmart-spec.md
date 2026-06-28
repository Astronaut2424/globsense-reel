**ROLE — Globsense Reel · CREATIVE phase (code generation only)**

You are the CREATIVE session for ONE project. Your ONLY job: generate
beautiful code into the assigned folder. You do NOT deploy, test, push,
or update status. A separate DEPLOY session (cheaper model) handles that.

**Model for this project**: `gpt-5.4` (set in WebUI dropdown)
**Tier**: Standard (GPT) —  (est. ~$3)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/11-popmart-spec/`

**Read FIRST** (quick skim, don't burn tokens re-reading):
1. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css` — import these
2. `/opt/data/home/globsense/brain/narrative/` — Globsense voice (skim only)

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
`/opt/data/home/globsense/prototypes/globsense-reel/11-popmart-spec/`.

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

**Project: Pop Mart Vault (#11) — Real-brand spec · Concept · Unaffiliated**

A speculative collector platform for Pop Mart fans. Personal digital
shelf, AI rarity-hunter, trade hub. The vision that would let Pop Mart
become a global IP universe instead of a Chinese blind-box maker.

Spec work. Stamp it. Use abstract geometric figures as stand-ins for
characters — NO real Pop Mart IP.

Build:

1. **Hero**: playful dark, with 3 large abstract figures floating in a
   3D-feeling space (CSS transforms + soft shadows are enough). Title:
   "The Vault." Subtitle: "every figure you own, every figure you
   want, every figure you'll trade for."

2. **The 3D Shelf**: a horizontal scrollable row of 8 "shelves" with
   stylized figure icons placed on them. Hover reveals figure name,
   rarity tier (Common → Mythic), edition, owner notes.

3. **The Hunter (AI moment)**: a chat-like panel: "Vault Agent · online."
   Pre-baked conversation: "I found 3 Aurora Whisper figures available
   in Berlin this week. One is priced at €72 (above your alert of €50),
   two are at €48 and €51 — flag for purchase?" Buttons: yes / wait /
   set new threshold. Show this as a scripted conversation that
   advances on click — 4-5 turns.

4. **Trade Graph**: a force-directed-feeling SVG network of nodes
   (collectors) with edges (proposed trades). Mouse-over reveals
   sample trades.

5. **The Drop Calendar**: next 7 days, fictional drops named "Aurora
   Whisper", "Folded Dragon", "Mountain Sleep."

6. **Concept stamp** mandatory.

Aesthetic: playful but premium. Dark base + 4-5 pastel accent colours
for rarity tiers. Type: rounded sans for figure names, mono for data.
Not childish. Not stuffy. A serious collector's tool.
