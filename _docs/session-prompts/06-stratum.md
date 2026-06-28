**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/06-stratum/`

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
- Fictional brand — no concept stamp needed.

**WORKFLOW** — do these phases in order, do NOT skip:

### Phase 1 — Build
Write `index.html`, `style.css`, `script.js`, plus any `assets/` you need
INTO `/opt/data/home/globsense/prototypes/globsense-reel/06-stratum/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/06-stratum/
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
git commit -m "feat(stratum): <replace with a real summary>"
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
    "natapp": "https://<current-natapp>.natappfree.cc/reel/06-stratum/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/06-stratum/",
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
