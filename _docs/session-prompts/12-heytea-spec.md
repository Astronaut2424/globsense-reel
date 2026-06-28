**ROLE — Globsense Reel project worker**

You are a focused build session for ONE project of the Globsense Reel.
The orchestrator session has already built the scaffolding. Don't
re-litigate the structure — just BUILD into the assigned folder.

**Recommended model**: claude-opus-4-7 (set in WebUI dropdown)
**Alternate**: claude-opus-4-6-thinking (slower, deeper reasoning)

**Your sole working directory**:
`/opt/data/home/globsense/prototypes/globsense-reel/12-heytea-spec/`

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
