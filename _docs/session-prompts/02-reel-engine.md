**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/`

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

**Project: Globsense Reel Engine (#02)**

The internal product we'll sell to clients. Demo page for "Reel Engine" — an
auto-video pipeline that mixes real footage with AI generation, edited by AI.

The page must SHOW THE PIPELINE, not describe it. Build a hero demo that walks
the visitor through one example brief in 4 visible stages, with smooth
transitions and scrollytelling between stages:

1. **Stage 1 — Brief.** Type-in box pre-filled with: "30s teaser for the
   launch of a fictional Chinese tea house opening in London. Cinematic,
   Yorkshire fog, elegant." A button "Generate" triggers stage 2.

2. **Stage 2 — Storyboard.** 6 shot cards appear in sequence, each showing
   a thumbnail (pre-baked SVG or placeholder image) + a one-line shot
   description + a tag: AI / REAL / HYBRID. Animate them flipping in. The
   AI/REAL/HYBRID mix is the magic — show this clearly.

3. **Stage 3 — Asset matching.** Each shot card now shows the source —
   "AI: Sora-2 prompt..." or "REAL: stock-fjord-9421" or "HYBRID: real
   teacup + AI steam overlay." Add a faux timeline at the bottom with
   coloured blocks representing the 6 cuts on a 30s ruler.

4. **Stage 4 — Final reel.** A 30-second mock embed (use a pre-baked MP4
   or even a static "video frame" with a play button — the reel itself
   doesn't have to actually play tonight; the demo is the PIPELINE).
   Below: download / iterate / book a call CTAs.

Aesthetic: cinematic dark, but with editorial pop — like a Vimeo Staff Pick
crossed with an OpenAI announcement page. Show "Powered by Globsense
Shanghai" small at the bottom.

Pre-bake all the data. The pipeline is the demo, not the actual generation.
