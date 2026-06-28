**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/06-stratum/`

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

**Project: Stratum (#06)**

Fictional Chinese video-generation inference layer / SDK. Think DeepSeek for
video. The brand sits in the cinematic dev-tools register — Vercel polish
meets Anthropic gravitas. Doubles as the technical SDK page that the
Globsense Reel Engine (#02) would call.

Build a dev-portal landing page:

1. **Hero**: tagline "The video inference layer of the next decade of
   cinema." Big, dark, fast. Below: animated terminal/code window showing
   a 4-line API call — `client.generate(prompt='...', shot_type='wide',
   duration=4s)` — that returns a video preview thumbnail in the next pane.

2. **The Three Capabilities**: side-by-side cards:
   - Text-to-shot (single shot generation)
   - Edit-aware sequencing (multi-shot with continuity)
   - Real-mix orchestration (compose with real footage)
   Each card has a tiny live diagram (CSS/SVG) showing the data flow.

3. **The Code Playground**: a fake code editor on the page where visitors
   can pick from 3 preset prompts and see the (pre-baked) result render
   into a preview pane. Make it feel snappy — animate the rendering bar.

4. **Pricing**: 3 tiers (Open, Studio, Enterprise) in a dense premium
   pricing table. Numbers in USD AND ¥.

5. **Docs Preview**: 3 columns of fake doc navigation (Quickstart,
   API Reference, Recipes). Click → a styled docs preview modal.

6. **Footer**: company in Shanghai, status page (faux), Discord link.

Aesthetic: NEAR-BLACK background, sharp grid, mono-heavy. Accent in
Globsense brand orange (--brand-accent). Borrow visual language from
Vercel + Anthropic + Resend. Should look like a real dev tool, not a
mockup.
