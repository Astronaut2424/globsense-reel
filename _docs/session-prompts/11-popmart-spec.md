**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/11-popmart-spec/`

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
- Real-brand spec — MUST include the concept stamp before </body>: read `../_shared/concept-stamp.html` and inline its content.

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
