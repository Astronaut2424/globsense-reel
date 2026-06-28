# #11 — Pop Mart Vault (Concept)

**Brand:** Pop Mart (real-brand spec · unaffiliated)
**Project name:** The Vault
**Built by:** claude-opus-4-7 (Hermes WebUI session af301fe5349a)
**Date:** 2026-06-28

A speculative collector platform for Pop Mart fans. Personal digital shelf,
AI rarity-hunter, and trade network — the vision that would turn Pop Mart from
a blind-box maker into a global collector IP universe.

## Scope

Spec piece, stamped Concept · Unaffiliated. No real Pop Mart IP — abstract
geometric figures stand in for characters across hero, shelf, and graph.

## Sections delivered

1. **Hero** — three abstract floating figures (CSS 3D float + soft shadows)
   over a deep cosmic gradient. Gradient-clipped title "The Vault." with
   subtitle from brief verbatim.
2. **The 3D Shelf** — horizontal scrollable rail, 8 shelves, stylised SVG
   figures placed on each. Hover lifts the card out of its perspective tilt
   and reveals figure name, edition, rarity tier, and the owner's note.
3. **The Hunter (AI moment)** — scripted, click-to-advance chat panel
   (`Vault Agent · online`). 6 turns. Branching action buttons (yes / wait /
   counter / raise ceiling). Pre-baked dialogue includes the verbatim
   "3 Aurora Whisper figures in Berlin… €72 above your €50 alert" line
   from the brief.
4. **Trade Graph** — hand-laid SVG network of 12 collector nodes with
   weighted edges. Active trades drawn in mythic pink with animated dashes.
   Hover any node for collector handle, location, and the trade(s) flowing
   through them. Subtle ambient drift gives the graph a "force-directed
   feeling" without a physics engine.
5. **The Drop Calendar** — 7-day grid, fictional drops ("Aurora Whisper",
   "Folded Dragon", "Mountain Sleep" + Pearl Diver, Lantern Frog, Tide Pool).
   One day intentionally empty — the Hunter filtered it out.
6. **Concept stamp** — fixed bottom-right, Globsense Reel 2026 lockup.

## Design system

- Dark base (`--vault-bg #0A0A12`) + 5 rarity pastels
  (common / rare / epic / legendary / mythic).
- Rounded sans (Nunito stack) for figure names; JetBrains Mono for data,
  edition numbers, and graph labels — per brief.
- All shared `_shared/tokens.css` variables (motion easings, spacing scale,
  text colours) preserved and extended.
- Premium-not-childish: soft drop-shadows, generous whitespace, glow only
  on mythic accents. No bouncy easing.

## Stack

- Single self-contained `index.html` (~39 KB, no build step).
- Inline SVG for every figure, the trade graph, and the stamp.
- Vanilla JS only — no framework, no external deps beyond the
  `_shared/tokens.css` import.

## Files

```
11-popmart-spec/
├── index.html      # the page
├── _brief.md       # this file
└── _status.json    # status: built, needs_deploy: true
```

## Deploy

Static HTML. Drops into the standard Globsense Reel deploy pipeline.
`needs_deploy: true` set in `_status.json`.
