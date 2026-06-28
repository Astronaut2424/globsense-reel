**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/05-ostraka/`

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

**Project: Ostraka (#05)**

Fictional generative-art gallery platform. Curated AI×human collaborative
artworks, exhibited and minted. The hook: every work has a visible AI-process
trace — visitors see HOW the work was made, not just the output.

Build a gallery + featured-artwork-deep-dive on a single page:

1. **Hero**: name OSTRAKA in custom geometric type, tagline "where the prompt
   becomes the artifact." Editorial energy — think Apollo Magazine meets a
   blockchain art platform.

2. **Featured Now**: 4 large gallery tiles. Each on hover plays a 3-second
   reveal showing the work's "process trace" — generative diff frames,
   prompt fragments, the human edit pass overlaid.

3. **The Deep Dive**: scroll into ONE featured work — "Pollen Index, by Yuki
   Tanaka × MidJourney V11 × Globsense Studio" (fictional). Show:
   - the final image (CSS/SVG generated abstract)
   - the prompt that birthed it (as displayed type)
   - the artist's 3 edit decisions
   - the mint metadata: edition, owner, provenance trace
   - a paragraph essay by the (fictional) curator

4. **The Roster**: a grid of 12 fictional artist names + small portraits.

5. **For Collectors / For Artists**: split CTA section.

Aesthetic: gallery-white as ONE section (the gallery wall), but everything
else cinematic dark — like walking from a black corridor into a lit room.
Type: dense editorial serif, monospace metadata, sparse sans for navigation.
