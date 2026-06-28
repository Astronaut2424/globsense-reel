**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/07-ink-garden/`

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
