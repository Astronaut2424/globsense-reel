# Globsense Reel — Credit Burn Build, 2026-06-28

12 portfolio projects built in one night. Mix of fictional brands (creative tech)
and labelled spec work for real Chinese leaders going global.

**Live URLs**
- China (fast): `https://<natapp-domain>.natappfree.cc/reel/` — natapp rotates,
  check `/opt/data/scripts/.natapp-domain-state` for current
- Overseas (slow in CN): `https://astronaut2424.github.io/globsense-reel/`

## The 12

| #  | Slug              | Brand              | Type                            | Real/Fictional |
|----|-------------------|--------------------|---------------------------------| --- |
| 01 | lab               | Globsense Lab      | Experimental tool playground    | Globsense IP |
| 02 | reel-engine       | Globsense Reel     | Auto-Video Pipeline demo        | Globsense IP |
| 03 | mingxi            | Mingxi 明溪        | Digital teahouse → London       | Fictional |
| 04 | linfen            | Linfen 林芬        | AI dermatologist + serum gen    | Fictional |
| 05 | ostraka           | Ostraka            | Generative-art gallery          | Fictional |
| 06 | stratum           | Stratum            | Cinematic dev portal (video SDK)| Fictional |
| 07 | ink-garden        | Ink Garden         | Mini-game: scroll-painting      | Fictional |
| 08 | tea-leaves        | Tea Leaves         | Mini-game: AI divination        | Fictional |
| 09 | dji-spec          | DJI                | Creators' platform              | **Real (Concept · Unaffiliated)** |
| 10 | byd-spec          | BYD                | Premium owner experience        | **Real (Concept · Unaffiliated)** |
| 11 | popmart-spec      | Pop Mart           | Collector Vault                 | **Real (Concept · Unaffiliated)** |
| 12 | heytea-spec       | HEYTEA 喜茶        | London flagship microsite       | **Real (Concept · Unaffiliated)** |

## Directory contract per project

```
NN-slug/
├── index.html       # entry point, must work standalone
├── style.css        # local styles
├── script.js        # local JS (only if needed)
├── _brief.md        # what was asked
├── _status.json     # build state
└── assets/          # images, fonts, etc.
```

## Status states (in _status.json)

- `pending` — not started
- `building` — worker running in another session
- `built` — worker done, awaiting human review
- `approved` — Ilya / Brenda greenlit
- `shipped` — pushed to GitHub + natapp
- `revising` — second pass requested

## Hard rules for every project

1. Single self-contained folder. No build step.
2. No CDNs blocked in China. Use jsdelivr or local copies.
3. Import `_shared/tokens.css` for design tokens.
4. Mobile-responsive — we demo on phone.
5. No console errors.
6. Real-brand projects must include the "Concept · Unaffiliated" stamp.

## Deploy

```bash
./deploy.sh           # commit + push to GitHub, sync to natapp web root
./deploy.sh status    # show project status table
./deploy.sh url       # print current natapp URL
```

## How to launch a project session

1. Pick a project from the table (use the # column)
2. Open new WebUI session, pick a Claude model (recommended: opus-4-7 for hero,
   sonnet-4-6-thinking for utilities)
3. Open `_docs/session-prompts/NN-slug.md`
4. Copy entire content → paste as first message
5. Watch session build into `NN-slug/` folder
6. When session reports "built", come back here, run `./deploy.sh`
