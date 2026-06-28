**Build project #02 Globsense Reel Engine**

Model: `kimi-k2.6` (Kimi) — set in WebUI dropdown
Provider: `kimi-cn` or `openai-next` (whichever has this model)

1. Read the brief: `/opt/data/home/globsense/prototypes/globsense-reel/_docs/briefs/02-reel-engine.md`
2. Read the tokens: `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css`
3. Read Globsense voice: `/opt/data/home/globsense/brain/narrative/` (skim only)
4. Build into: `/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/`
   - `index.html` + `style.css` + `script.js` + `assets/`
   - Import `../_shared/tokens.css`
   - No build step, no npm. CDN: jsdelivr/unpkg only. No googleapis.
   - Mobile-first, no console errors.
5. Write `/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/_brief.md` — your interpretation + design rationale
6. Write `/opt/data/home/globsense/prototypes/globsense-reel/02-reel-engine/_status.json`:
   `{"status":"built","worker_model":"kimi-k2.6","needs_deploy":true,"updated_at":"<ISO UTC>"}`
7. Report: one paragraph — what you built, what's elegant, what to improve.

DO NOT: run terminal commands, push to git, deploy, or touch other folders.
Creative only. Stop after step 7.
