**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/09-dji-spec/`

**Read FIRST, before writing any code**:
1. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/brief-contract.md` — done-bar
2. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css` — import; don't redefine
3. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/vercel-fallback.md` — when/how to use Vercel
4. `/opt/data/home/globsense/brain/narrative/` — Globsense voice + manifesto
5. `/opt/data/home/globsense/brain/frameworks/` — frame control method
6. `/opt/data/home/globsense/design-system/DESIGN.md` — brand notes

**Hard rules**:
- Self-contained folder, no build step, no npm install for the project itself.
- Import `../_shared/tokens.css` in your `<link>`.
- CDNs allowed: jsdelivr, unpkg, bootcdn. Forbidden: googleapis,
  googlefonts (use jsdelivr font mirrors).
- Mobile-first, no console errors. First paint < 2s on 4G.
- Real-brand spec — MUST include the concept stamp before </body>: read `../_shared/concept-stamp.html` and inline its content.

**WORKFLOW** — do these phases in order, do NOT skip:

### Phase 1 — Build
Write `index.html`, `style.css`, `script.js`, plus any `assets/` you need
INTO `/opt/data/home/globsense/prototypes/globsense-reel/09-dji-spec/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/09-dji-spec/
python3 -m http.server 8765 &
SERVER_PID=$!
sleep 1
curl -s -o /dev/null -w "HTTP %{http_code} · %{time_total}s · %{size_download}B\n" http://localhost:8765/
kill $SERVER_PID 2>/dev/null
```
If HTTP != 200 or time > 3s, fix locally before continuing.

### Phase 3 — Decide on Vercel
Read `_docs/vercel-fallback.md`. If your project meets the heavy-WebGL
criteria (Three.js + >5 textures, video texture hero, bundle >5MB, or
local test was >3s), follow the Vercel setup steps in that doc.
Otherwise skip — natapp + GitHub Pages is enough.

### Phase 4 — GitHub push
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/
git add -A
git commit -m "feat(dji-spec): <replace with a real summary>"
git push origin main  # uses gh auth, configured by orchestrator
```
If push fails because gh isn't authed, REPORT it to the user with the
exact command they need to run, then wait. Don't loop.

### Phase 5 — Status update
Write to `_status.json` (in your folder):
```json
{
  "status": "built",
  "worker_model": "<the model you're running as, from openai-next>",
  "session_url": null,
  "updated_at": "<ISO 8601 UTC>",
  "build_time_seconds": <number>,
  "needs_review": true,
  "notes": "<one short paragraph: what's elegant, what would benefit from a second pass>",
  "deploy_targets": {
    "natapp": "https://<current-natapp>.natappfree.cc/reel/09-dji-spec/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/09-dji-spec/",
    "vercel": null
  }
}
```
(Set `vercel` to the URL if you deployed there.)

Get the natapp domain via:
```bash
curl -s http://127.0.0.1:4040/http/in -L | grep -oE '[a-z0-9]+\.natappfree\.cc' | head -1
```

### Phase 6 — Report
Drop a one-paragraph summary to the user: what you built, what's elegant
about it, what a second pass would improve, and the 2 or 3 live URLs.

**Do NOT**:
- Touch other project folders (`01-lab/`, etc. — only YOUR folder)
- Modify `manifest.json` or any `_shared/` files
- Run `./deploy.sh` from your worker session — orchestrator owns that for batch ops
- Stop and ask the user mid-build unless the brief is incoherent. Make a
  call, document it in `_brief.md`, keep building.

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
