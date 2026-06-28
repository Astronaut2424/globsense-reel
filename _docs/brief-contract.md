# Brief contract — every project worker reads this first

You (the worker session) are building **ONE** project for the Globsense Reel.
This file defines what "done" means.

## Inputs you have

- **Project brief**: in `_docs/session-prompts/NN-slug.md` (paste of your session)
- **Project folder**: `NN-slug/` — write all your output here
- **Shared tokens**: `_shared/tokens.css` — import these, don't reinvent
- **Concept stamp** (real-brand projects only): `_shared/concept-stamp.html`
- **Manifest**: `manifest.json` — read, don't edit
- **Schema for status**: `_shared/status-schema.json`

## Hard constraints (don't break these)

1. **Self-contained folder.** Your `NN-slug/index.html` must work when opened
   directly via `file://` AND when served from `/reel/NN-slug/`.
2. **No build step.** No npm, no webpack, no react. Pure HTML/CSS/JS or a
   single Three.js / GSAP from jsdelivr.
3. **No CDNs blocked in China.** Allowed: jsdelivr, unpkg, cdn.bootcdn.net.
   Forbidden: googlefonts.com (use jsdelivr font mirrors), googleapis,
   cloudflare in some configs.
4. **Import tokens.** Add `<link rel="stylesheet" href="../_shared/tokens.css">`
   so you inherit the cinematic register.
5. **Mobile-first.** Test viewport ≥ 375px. We demo on phone.
6. **No console errors.** Zero. If you use external assets, fallback gracefully.
7. **Real-brand projects must stamp.** Inline the contents of
   `_shared/concept-stamp.html` just before `</body>`.
8. **Performance.** First paint under 2 seconds on 4G. Defer non-critical JS.
9. **No personal data, no real customer logos** (other than the spec-target
   brand for real-spec projects).

## What "built" means (the done bar)

- [ ] `index.html` exists in your project folder
- [ ] Page renders without console errors
- [ ] Mobile + desktop both look intentional
- [ ] At least ONE "AI moment" is dramatized (real or scripted is fine)
- [ ] `_brief.md` contains: your interpretation of the brief + design rationale
- [ ] `_status.json` updated to `{"status": "built", "worker_model": "...",
      "updated_at": "...", "build_time_seconds": N, "notes": "..."}`

## Update _status.json with this template

```json
{
  "status": "built",
  "worker_model": "claude-opus-4-7",
  "session_url": null,
  "updated_at": "2026-06-28T22:00:00Z",
  "build_time_seconds": 600,
  "needs_review": true,
  "notes": "Single hero page, scrollytelling, voice UI faked with audio sprite."
}
```

## What you do NOT do

- Don't touch other projects' folders
- Don't modify `manifest.json` (the orchestrator owns it)
- Don't add a build step "for performance"
- Don't deploy — that's the orchestrator's job
- Don't ask the user follow-up questions unless the brief is incoherent.
  Make a defensible call and document it in `_brief.md`.
