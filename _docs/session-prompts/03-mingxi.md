**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/03-mingxi/`

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
INTO `/opt/data/home/globsense/prototypes/globsense-reel/03-mingxi/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/03-mingxi/
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
git commit -m "feat(mingxi): <replace with a real summary>"
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
    "natapp": "https://<current-natapp>.natappfree.cc/reel/03-mingxi/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/03-mingxi/",
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
