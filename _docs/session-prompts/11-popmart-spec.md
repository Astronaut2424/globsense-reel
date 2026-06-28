**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/11-popmart-spec/`

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
INTO `/opt/data/home/globsense/prototypes/globsense-reel/11-popmart-spec/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/11-popmart-spec/
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
git commit -m "feat(popmart-spec): <replace with a real summary>"
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
    "natapp": "https://<current-natapp>.natappfree.cc/reel/11-popmart-spec/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/11-popmart-spec/",
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

**Project: Pop Mart Vault (#11) — Real-brand spec · Concept · Unaffiliated**

A speculative collector platform for Pop Mart fans. Personal digital
shelf, AI rarity-hunter, trade hub. The vision that would let Pop Mart
become a global IP universe instead of a Chinese blind-box maker.

Spec work. Stamp it. Use abstract geometric figures as stand-ins for
characters — NO real Pop Mart IP.

Build:

1. **Hero**: playful dark, with 3 large abstract figures floating in a
   3D-feeling space (CSS transforms + soft shadows are enough). Title:
   "The Vault." Subtitle: "every figure you own, every figure you
   want, every figure you'll trade for."

2. **The 3D Shelf**: a horizontal scrollable row of 8 "shelves" with
   stylized figure icons placed on them. Hover reveals figure name,
   rarity tier (Common → Mythic), edition, owner notes.

3. **The Hunter (AI moment)**: a chat-like panel: "Vault Agent · online."
   Pre-baked conversation: "I found 3 Aurora Whisper figures available
   in Berlin this week. One is priced at €72 (above your alert of €50),
   two are at €48 and €51 — flag for purchase?" Buttons: yes / wait /
   set new threshold. Show this as a scripted conversation that
   advances on click — 4-5 turns.

4. **Trade Graph**: a force-directed-feeling SVG network of nodes
   (collectors) with edges (proposed trades). Mouse-over reveals
   sample trades.

5. **The Drop Calendar**: next 7 days, fictional drops named "Aurora
   Whisper", "Folded Dragon", "Mountain Sleep."

6. **Concept stamp** mandatory.

Aesthetic: playful but premium. Dark base + 4-5 pastel accent colours
for rarity tiers. Type: rounded sans for figure names, mono for data.
Not childish. Not stuffy. A serious collector's tool.
