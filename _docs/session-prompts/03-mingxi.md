**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/03-mingxi/`

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

**Project: Mingxi 明溪 (#03)**

Fictional Chinese tea house brand opening its first international flagship in
Mayfair, London. Build the brand's launch microsite as a single long-scroll
cinematic experience.

The narrative arc (each ~1 viewport scroll):

1. **Hero**: full-bleed dark, slow ink-wash backdrop, title in CN serif
   above ("明溪") with English subtitle below ("a tea house, in conversation
   with London"). Tiny "opens Spring 2027 · Mayfair" tag.

2. **The Mountain**: scrollytelling — text + photo of Wuyi mountain origin,
   leaves harvested at dawn, sliced by mist. Restraint over flourish.

3. **The Room**: photos of the Mayfair space — Chinese hardwood + Soane
   Foundation moulding. Two cultures touching, neither apologizing.

4. **The Sommelier (AI moment)**: a voice/chat panel. Visitor types "I just
   came from a long flight, I feel scattered" — gets a pairing recommendation
   in 3 paragraphs: tea (Lao Cong Shui Xian), ritual (slow first pour,
   inhale, set aside two minutes), reason (the deep mineral note grounds
   nervous-system arousal — paraphrased Tang Dynasty tea-master quote). The
   "AI" can be a hardcoded switch table of 5-6 mood inputs for tonight, but
   the output formatting must read GENUINELY thoughtful, not robotic.

5. **The Menu**: a poetic list of 12 teas with poet's-note descriptions.

6. **Reservations**: an elegant booking widget mock (date, party, ritual
   length). No real backend. Bottom: address in EN + 中文, opening date.

Aesthetic: deep midnight green/black, gold leaf accents, generous Chinese
serif headlines, body in Cormorant. EN + CN bilingual throughout but not
duplicated — one register inside the other. Slow scroll, every transition
~800ms cinematic ease.
