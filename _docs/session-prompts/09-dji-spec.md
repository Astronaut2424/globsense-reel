**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/09-dji-spec/`

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

**Project: DJI Atelier (#09) — Real-brand spec · Concept · Unaffiliated**

A speculative reimagining of DJI's brand experience FOR CREATORS — not for
general consumers. Fictional new property: dji.com/atelier.

This is portfolio-spec work. Stamp it clearly. We're showing what we'd
make if DJI asked. No real DJI brand assets, no real product images
beyond stylized abstract drone silhouettes.

Build a single long-scroll cinematic page:

1. **Hero**: full-bleed dark, a single SVG drone silhouette slowly tracking
   across an animated mountain ridge. Tagline: "The atelier for those who
   make pictures with the sky."

2. **The Shot Planner (AI moment)**: visitor inputs a location (text
   field, autocomplete suggesting "Iceland fjord", "Shanghai bund",
   "Guilin karst"). The page animates a faux satellite/topo map appearing,
   then 3 suggested shot routes overlay — "the rise", "the orbit", "the
   reveal." Each card shows shot duration, drone movement, lens choice,
   golden hour timing.

3. **The Creator Roster**: a "Featured This Week" grid of 6 fictional
   creators with stylized portraits + a representative landscape.

4. **The Workshop**: speculative service tier — pair with a DJI master
   pilot for a private shoot. Pricing as "by application" mystery.

5. **Concept stamp** (bottom-right, mandatory): use the contents of
   `_shared/concept-stamp.html`.

Aesthetic: cinema dark, large editorial photo-illustrations (stylized
SVG/CSS), restrained, with one stripe of brand-orange accent reserved
for the AI-moment shot planner. Type: display serif headlines, sans
body.

DO NOT use DJI's actual logo or product images. Stylized abstract is
the rule.
