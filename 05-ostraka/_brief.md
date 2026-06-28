# Ostraka — #05

A fictional generative-art gallery platform where every work shows its **process trace**: the prompt, the model, the edit history, the human hand. The hook is provenance — visitors see *how* the work was made, not just the artifact.

## Build summary

Single-page, four-act narrative architecture:

1. **Hero — "the corridor"**
   Cinematic dark with a single radiant doorway (the lit gallery glimpsed from the dark hall). Massive Fraunces display type for `OSTRAKA`, italic curator tagline, animated edition stamp, live exhibition metadata strip.

2. **§01 Featured Now — 4 tiles, hover-revealed process trace**
   Each tile renders a procedurally-styled abstract canvas (Pollen Index, Stratum no. 4, A Quince Studied, A Litany of Small Failures). On hover the artifact dissolves into its diff-style trace: seed, prompt with `<rem>/<ins>` strikethroughs, model, iteration count, human passes — line-by-line keyframe reveal.

3. **§02 The Deep Dive — Pollen Index, fully traced**
   - Framed SVG artwork (matte + corner brackets + brass plaque)
   - The prompt card (v.014, with marked-up insertions/strikethroughs/highlights and seed/iter footer)
   - Three artist edit decisions with timestamps in editorial prose
   - Mint metadata grid (edition, reserve, last sale, holder, IPFS URI, sha256)
   - Four-node provenance chain: seed → model → edit → mint
   - Curator's essay by "Han Liang" with drop-cap, signature, side-meta

4. **§03 The Roster — the white gallery wall**
   Single bright `--paper` section, perspective-projected floor shadow. Twelve artist tiles with abstract portrait canvases and `JetBrains Mono` metadata (city, live/edition status, vermilion live-dot).

5. **§04 For Collectors / For Artists**
   Two-door CTA split. Symmetric editorial typography, arrow hovers expand and gild.

## Aesthetic

- **Type**: Fraunces serif (display + italic, variable optical sizing), JetBrains Mono (metadata + traces), Inter (nav). Dense editorial serif throughout; monospace where the work is being *measured*; sparse sans only for navigation.
- **Palette**: ink `#0a0907`, bone `#f4ede1`, gilt `#c8a558`, vermilion `#c1432b`, cobalt `#2c3a6b`, moss `#5a6b3a`, paper `#fbf7ee`.
- **Texture**: SVG turbulence grain overlay (overlay-blended, 35% opacity) for film/print feel.
- **Motion**: corridor doorway with soft halo, rotating edition stamp (`textPath` circle), pulsing live-dot, tile canvas scale-on-hover with brightness/saturation lift, animated diff-trace line reveal with hue-rotate flicker, conic-gradient portraits.
- **Rhythm**: numbered `§ NN` section heads (mono + serif + connecting line) like book chapters. Gallery-white section sits *inside* the dark sequence — the literal "walking from black corridor into the lit room."

## File

- `index.html` — single self-contained file, ~49 KB. No external assets beyond Google Fonts. Mobile-responsive (1100px, 640px breakpoints).
