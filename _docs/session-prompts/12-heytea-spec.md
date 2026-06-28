**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Model for this project**: `gemini-2.5-pro` (set this in the WebUI dropdown,
under the `openai-next` provider)
**Tier**: Standard — Bilingual EN/CN. Gemini-2.5-pro is strong at multilingual. (est. ~$3)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/12-heytea-spec/`

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
- Real-brand spec — MUST include the concept stamp before </body>: read `../_shared/concept-stamp.html` and inline its content.

**WORKFLOW** — do these phases in order, do NOT skip:

### Phase 1 — Build
Write `index.html`, `style.css`, `script.js`, plus any `assets/` you need
INTO `/opt/data/home/globsense/prototypes/globsense-reel/12-heytea-spec/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/12-heytea-spec/
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
git commit -m "feat(heytea-spec): build complete"
git push origin main
```
If push fails because gh isn't authed, REPORT it to the user with the
exact command they need to run, then wait. Don't loop.

### Phase 5 — Status update
Write to `_status.json` (in your folder):
```json
{
  "status": "built",
  "worker_model": "gemini-2.5-pro",
  "session_url": null,
  "updated_at": "<ISO 8601 UTC>",
  "build_time_seconds": <number>,
  "needs_review": true,
  "notes": "<one short paragraph>",
  "deploy_targets": {
    "natapp": "https://<current-natapp>.natappfree.cc/reel/12-heytea-spec/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/12-heytea-spec/",
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

**Project: HEYTEA London (#12) — Real-brand spec · Concept · Unaffiliated**

A speculative microsite for HEYTEA's first London flagship. The challenge:
HEYTEA is a Chinese tea brand that needs to NOT feel like a Chinese tea
brand opening abroad. It needs to feel like London noticed tea again.

Spec work. Stamp it. No real HEYTEA brand imagery beyond stylized cup
silhouette.

Build:

1. **Hero**: London grey-sky background (CSS gradient + light texture),
   a stylized cup floating, EN title "HEYTEA · Soho" and CN subtitle
   小字 underneath. Tagline: "the tea, the city, the meeting."

2. **The Menu (bilingual)**: 8 signature drinks. Each card shows EN
   name + Chinese name. Hover reveals ingredients, calorie, sweetness
   level (slider), and "best for your palate IF..." (e.g., "if you like
   Aperol Spritz → try Cheese Foam Oolong").

3. **The AI Tea Pairing (AI moment)**: tap "let us match you." Visitor
   picks from 4 prompts ("post-roast Sunday coffee", "the Aperol crowd",
   "I drink jasmine green at home", "convert me, I'm a builder's tea
   person"). The page reveals a personalized 3-drink recommendation
   carousel + an explanation paragraph that reads written-by-a-human-
   not-an-app. Switch table tonight, agentic later.

4. **The Space**: an editorial photo strip — Soho location, the team,
   the ritual.

5. **The Reservation**: simple time-slot booking widget (mock, no
   backend).

6. **Concept stamp** mandatory.

Aesthetic: London grey, warm cream, a single brand-cherry-red accent.
NOT the Chinese-brand-going-abroad aesthetic. Reads like Monocle.
Bilingual but with English as the host, Chinese as the guest.
