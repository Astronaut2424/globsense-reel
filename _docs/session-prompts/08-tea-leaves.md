**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Model for this project**: `gemini-2.5-flash` (set this in the WebUI dropdown,
under the `openai-next` provider)
**Tier**: Standard — Text-generation mini-game. Flash is fast at creative text. (est. ~$1)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/08-tea-leaves/`

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
INTO `/opt/data/home/globsense/prototypes/globsense-reel/08-tea-leaves/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/08-tea-leaves/
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
git commit -m "feat(tea-leaves): build complete"
git push origin main
```
If push fails because gh isn't authed, REPORT it to the user with the
exact command they need to run, then wait. Don't loop.

### Phase 5 — Status update
Write to `_status.json` (in your folder):
```json
{
  "status": "built",
  "worker_model": "gemini-2.5-flash",
  "session_url": null,
  "updated_at": "<ISO 8601 UTC>",
  "build_time_seconds": <number>,
  "needs_review": true,
  "notes": "<one short paragraph>",
  "deploy_targets": {
    "natapp": "https://<current-natapp>.natappfree.cc/reel/08-tea-leaves/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/08-tea-leaves/",
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
