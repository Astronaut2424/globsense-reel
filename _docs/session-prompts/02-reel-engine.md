**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Model for this project**: `gpt-5.3-codex` (set this in the WebUI dropdown,
under the `openai-next` provider)
**Tier**: Premium — Code-heavy pipeline demo. Codex excels. (est. ~$5-8)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/`

**Read FIRST, before writing any code**:
1. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/brief-contract.md`
2. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css`
3. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/vercel-fallback.md`
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
INTO `/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/
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
git commit -m "feat(reel-engine): build complete"
git push origin main
```
If push fails because gh isn't authed, REPORT it to the user with the
exact command they need to run, then wait. Don't loop.

### Phase 5 — Status update
Write to `_status.json` (in your folder):
```json
{
  "status": "built",
  "worker_model": "gpt-5.3-codex",
  "session_url": null,
  "updated_at": "<ISO 8601 UTC>",
  "build_time_seconds": <number>,
  "needs_review": true,
  "notes": "<one short paragraph>",
  "deploy_targets": {
    "natapp": "https://<current-natapp>.natappfree.cc/reel/02-reel-engine/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/02-reel-engine/",
    "vercel": null
  }
}
```

### Phase 6 — Report
Drop a one-paragraph summary to the user: what you built, what's elegant
about it, what a second pass would improve, and the 2 or 3 live URLs.

**Do NOT**:
- Touch other project folders
- Modify `manifest.json` or any `_shared/` files
- Run `./deploy.sh` — orchestrator owns that
- Stop and ask the user mid-build unless the brief is incoherent.

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
