**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/01-lab/`

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

**Project: Globsense Lab (#01)**

Globsense's experimental playground. NOT a landing page — it's a workshop with
multiple AI-native micro-tools live on a single page. Visitors land, immediately
play, leave impressed.

Build 4 micro-experiments embedded in one page:

1. **Frame Diagnostic** — visitor pastes their brand tagline → a faux-AI
   analyzer scores it against the 5 narrative rails from the Globsense
   manifesto (Frame Control, Cultural Translation, AI-Native Stack, Trust
   Architecture, Authority by Default). Output: a radar chart + verdict.
   The "AI" can be hardcoded weights + a switch table for tonight — make it
   feel uncanny and accurate. Bonus: 3-5 pre-baked example taglines visitors
   can click.

2. **East/West Type Pairing** — interactive font-pairer. Picker for Latin
   serif/sans + Chinese serif/sans. Live preview shows a paragraph in both
   scripts side-by-side. Premium typography. Default to Cormorant + Noto
   Serif SC. Show why pairing matters.

3. **Cultural Register Translator** — text input, output 3 versions of the
   same line: Western luxury (restrained, ~6 words), Chinese luxury (dense
   detail, classical references), AI-native (interactive, agentic verb).
   Use a switch table of 10 pre-baked transformations for tonight.

4. **Density Slider** — drag a slider from 1 to 10. Watch a sample landing
   page reflow from Apple-style whitespace (1) to Taobao-style density (10).
   Live, animated, visceral. THIS is the single most viral moment in the lab.

Aesthetic: cinematic dark, lab-notebook feel, monospace labels, generous
whitespace EXCEPT in the density demo. Section headers numbered like a paper.
Footer credits Globsense. Optional: subtle ambient lab sounds (no autoplay).

Make the page feel like a researcher's playground, not a marketing page.
