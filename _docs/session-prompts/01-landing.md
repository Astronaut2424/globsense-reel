**Build project #01 Globsense Landing**

Model: `kimi-k2.7-code` (Kimi) — set in WebUI dropdown
Provider: `kimi-cn` or `openai-next` (whichever has this model)

1. Read the brief: `/opt/data/home/globsense/prototypes/globsense-reel/_docs/briefs/01-landing.md`
2. Read the tokens: `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css`
3. Read Globsense voice: `/opt/data/home/globsense/brain/narrative/` (skim only)
4. Build into: `/opt/data/home/globsense/prototypes/globsense-reel/01-landing/`
   - `index.html` + `style.css` + `script.js` + `assets/`
   - Import `../_shared/tokens.css`
   - No build step, no npm. CDN: jsdelivr/unpkg only. No googleapis.
   - Mobile-first, no console errors.
5. Write `/opt/data/home/globsense/prototypes/globsense-reel/01-landing/_brief.md` — your interpretation + design rationale
6. Write `/opt/data/home/globsense/prototypes/globsense-reel/01-landing/_status.json`:
   `{"status":"built","worker_model":"kimi-k2.7-code","needs_deploy":true,"updated_at":"<ISO UTC>"}`
7. Report: one paragraph — what you built, what's elegant, what to improve.

DO NOT: run terminal commands, push to git, deploy, or touch other folders.
Creative only. Stop after step 7.
