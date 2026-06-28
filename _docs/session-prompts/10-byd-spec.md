**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/10-byd-spec/`

**Read these BEFORE you start writing code**:
1. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/brief-contract.md`
   — the done-bar contract
2. `/opt/data/home/globsense/prototypes/globsense-reel/_shared/tokens.css`
   — import these tokens; do not redefine
3. `/opt/data/home/globsense/brain/narrative/` — Globsense voice + manifesto
4. `/opt/data/home/globsense/brain/frameworks/` — frame control method
5. `/opt/data/home/globsense/design-system/DESIGN.md` — additional brand notes

**Hard rules** (from brief-contract.md, repeated for safety):
- Self-contained folder, no build step, no npm.
- Import `../_shared/tokens.css` in your `<link>`.
- CDNs allowed: jsdelivr, unpkg, bootcdn. Forbidden: googleapis,
  googlefonts (use jsdelivr font mirrors).
- Mobile-first, no console errors.
- Real-brand spec — MUST include the concept stamp before </body>: read `../_shared/concept-stamp.html` and inline its content.

**When done**:
- Page renders without console errors.
- Update `_status.json` with `{"status": "built", "worker_model": "<the
  model you're running as>", "updated_at": "<ISO timestamp>",
  "build_time_seconds": <number>, "needs_review": true, "notes": "<one
  short paragraph>"}`.
- Drop a one-paragraph summary to the user describing what you built,
  what's elegant about it, and what would benefit from a second pass.

**Do NOT**:
- Touch other project folders
- Modify `/opt/data/home/globsense/prototypes/globsense-reel/manifest.json`
- Deploy or `git push` — orchestrator owns that
- Stop and ask questions unless the brief is incoherent. Make a
  defensible call, document it in `_brief.md`, keep going.

---

**Project: BYD Halo (#10) — Real-brand spec · Concept · Unaffiliated**

A speculative premium owner-experience site for a fictional BYD halo
model (an aspirational top-of-line variant). Anti-Tesla calm. Anti-shouty.
The luxury BYD is missing.

Spec work. Stamp it. No real BYD product imagery — use stylized SVG
silhouette of an abstract sedan from the side.

Build:

1. **Hero**: deep midnight blue, a single sedan silhouette emerging from
   fog, headlight reflections only. Tagline: "Beyond the dragon. Toward
   the quiet."

2. **The Owner OS Demo (AI moment)**: a phone-frame mockup in the center
   shows an interactive app: a single screen with the car's current
   state — "charged to 84%, fjord drive in 23 minutes, your usual
   playlist warming up". Visitor can tap through 3 fake screens:
   the calendar handshake (car suggests when to leave for the next
   meeting), the spouse handshake (car notes the back seat is
   occupied by a child seat → switches to gentler suspension), the
   night handshake (car offers to film a calming starlight scene
   during the longest dark stretch of the route).

3. **The Ownership Atelier**: 4 lifestyle benefits as quiet editorial
   cards. Servicing in your driveway. Software updates announced like
   museum openings. Etc.

4. **The Reservation**: an understated form with elegant motion. "By
   application." No price.

5. **Concept stamp** mandatory.

Aesthetic: deep navy + cream + brushed-metal grey. Cormorant serif
headlines, restrained sans body. EVERY animation slow. The opposite of
Tesla's hyperactive UI.
