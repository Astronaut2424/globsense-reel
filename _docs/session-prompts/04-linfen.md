**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Model for this project**: `gemini-3-pro-preview` (set this in the WebUI dropdown,
under the `openai-next` provider)
**Tier**: Standard — Visual reasoning + generative brand. Gemini-3 is strong at multimodal. (est. ~$3)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/04-linfen/`

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
INTO `/opt/data/home/globsense/prototypes/globsense-reel/04-linfen/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/04-linfen/
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
git commit -m "feat(linfen): build complete"
git push origin main
```
If push fails because gh isn't authed, REPORT it to the user with the
exact command they need to run, then wait. Don't loop.

### Phase 5 — Status update
Write to `_status.json` (in your folder):
```json
{
  "status": "built",
  "worker_model": "gemini-3-pro-preview",
  "session_url": null,
  "updated_at": "<ISO 8601 UTC>",
  "build_time_seconds": <number>,
  "needs_review": true,
  "notes": "<one short paragraph>",
  "deploy_targets": {
    "natapp": "https://<current-natapp>.natappfree.cc/reel/04-linfen/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/04-linfen/",
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

**Project: Linfen 林芬 (#04)**

Fictional Chinese skincare brand built on rare botanicals from Yunnan / Wuyi /
Changbai mountains. The AI moment: an AI dermatologist on your phone camera
analyses skin and generates a custom serum + label + story.

Build a single hero page with a working-feeling demo flow:

1. **Hero**: dark organic background (think mossy stone close-up), brand name
   林芬 in CN serif, subtitle "your skin, read by the mountain." Scroll cue.

2. **The Diagnostic (AI moment)**: a step-by-step ritual:
   - "Allow camera" (fake — show a stylized webcam preview SVG or upload
     stub, no real camera permission required)
   - 5 animated "scanning" labels flash across the preview (hydration:
     61%, sebum: 34%, sensitivity: high...)
   - Result panel slides in: "Your skin is reading like late-autumn
     mountain air — dry, taut, asking for warmth."

3. **The Generated Serum**: an animated label generates in real-time on
   screen — the label literally types itself out: a custom name (e.g.
   "Linfen Reserve 47 · Changbai Resin & Wuyi Camellia"), a 4-line poetic
   note, a barcode-like ingredient stack. Below: a render of the bottle
   with that label. Use CSS animations / SVG to build this — looks
   premium AND uncanny.

4. **The Story**: three paragraphs on the botanical sourcing, illustrated
   with photo-style placeholders.

5. **The Order**: ¥780 · ships globally. Premium e-commerce CTA mock.

Aesthetic: deep moss + cream + a single warm gold accent. Body in Inter,
display in EB Garamond. Sparse. Let the diagnostic + label generation be
the wow moment — everything else stays quiet around them.
