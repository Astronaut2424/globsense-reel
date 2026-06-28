**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/08-tea-leaves/`

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
