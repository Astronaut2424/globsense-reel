**ROLE — Globsense Reel project worker (self-deploying)**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator already built the scaffolding. Your job: BUILD into your
assigned folder, LOCAL-TEST, PUSH to GitHub, OPTIONALLY deploy to Vercel
if heavy, then update `_status.json`. Self-sufficient end-to-end.

**Model for this project**: `claude-opus-4-7` (set this in the WebUI dropdown,
under the `openai-next` provider)
**Tier**: Premium — The VC pitch piece. Spare no expense. (est. ~$15-20)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/01-gaas/`

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
INTO `/opt/data/home/globsense/prototypes/globsense-reel/01-gaas/`.
Also write `_brief.md` documenting your interpretation and design rationale.

### Phase 2 — Local self-test
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/01-gaas/
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
git commit -m "feat(gaas): build complete"
git push origin main
```
If push fails because gh isn't authed, REPORT it to the user with the
exact command they need to run, then wait. Don't loop.

### Phase 5 — Status update
Write to `_status.json` (in your folder):
```json
{
  "status": "built",
  "worker_model": "claude-opus-4-7",
  "session_url": null,
  "updated_at": "<ISO 8601 UTC>",
  "build_time_seconds": <number>,
  "needs_review": true,
  "notes": "<one short paragraph>",
  "deploy_targets": {
    "natapp": "https://<current-natapp>.natappfree.cc/reel/01-gaas/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/01-gaas/",
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

**Project: Globsense Platform — GaaS (#01)**

This is the VC-pitch piece. The most important project in the reel.

Build a demo page for "Globsense as a Service" (GaaS) — a productized
platform that wraps every service Globsense offers into one AI-native,
modular SaaS product.

The thesis: everything we build for ourselves, we productize. Every
successful client engagement becomes a platform module. The platform
serves both Chinese companies going global (chuhai) and foreign companies
entering China (reverse chuhai), with compliance on both ends.

Build a single-page platform demo with these sections:

1. **Hero**: "Globsense as a Service" or "GaaS" — large, cinematic,
   confident. Tagline: "The studio, productized." Below: a subtle
   animated diagram showing 5 modules feeding into each other in a
   loop. Dark, premium, SaaS-meets-agency.

2. **The 5 Modules** — each as a large interactive card:
   - **Decks** — AI-generated pitch decks with narrative architecture
     + premium design. Show a mini deck-preview flipping.
   - **Social** — Agentic social media pipeline for startups/OPCs.
     Show a mini feed generating.
   - **Brand** — High-quality brand & design systems generated in
     hours, not weeks. Show a mini brand-system board.
   - **Prototypes** — High-fidelity design prototypes, interactive,
     deployable. Show a mini device-frame preview.
   - **SEO/GEO** — Entry-level SEO + Generative Engine Optimization
     strategy. Show a mini dashboard with ranking visuals.
   Each card on hover: the mini-preview animates. On click: expands
   to a 2-sentence module description + "See it in action →" CTA.

3. **The Loop** — a scrollytelling section showing how modules compose:
   "Brand feeds Decks. Decks feed Social. Social feeds SEO/GEO. SEO/GEO
   feeds Brand." A circular diagram that animates as you scroll, with
   each module lighting up in sequence. This is the "meta-solution"
   visual — VCs need to SEE the compounding loop.

4. **The Compliance Layer** — a CN/Global toggle. Flip it: the entire
   page's compliance posture shifts visually. CN mode: PIPL, ICP, data
   residency in Shanghai. Global mode: GDPR, CCPA, data residency
   options. Show this as a real-feeling settings panel, not a marketing
   graphic.

5. **The Provider Stack** — "Powered by the frontier." A grid of AI
   provider names (DeepSeek, Qwen, Claude, Sora, Veo, Kling, MiniMax,
   Doubao) with a one-line note on which module uses which. Shows we're
   model-agnostic and route to the right model per task. Mention future:
   "consolidated access via partners (Vectrust, Tokendance)".

6. **The Vision** — the VC pitch in 3 sentences:
   - Market: "Every Chinese company going global. Every foreign company
     entering China. Both need a partner who speaks AI-native, both
     cultures, and compliance."
   - Wedge: "Start with design prototypes. Earn trust. Expand into the
     full platform."
   - Defensibility: "The loop compounds. Each client engagement trains
     the platform. The platform gets cheaper per engagement. The studio
     gets more selective."

7. **CTA**: two paths — "Request platform access" (for clients) and
   "Investor conversation" (for VCs). Understated. Premium.

Aesthetic: cinematic dark, but MORE STRUCTURED than the other projects —
this is a SaaS product page, not an art piece. Think Linear meets Vercel
meets Anthropic. Dense information, clean grid, premium typography. The
compliance toggle and provider stack should feel like real product UI,
not mockups.

This is the piece that raises money. Make it feel inevitable.
