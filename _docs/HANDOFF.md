# HANDOFF — two-phase workflow (creative → deploy)

## The split

Each project = 2 sessions:
1. **Creative session** (premium model) → generates code only
2. **Deploy session** (cheap model) → tests, pushes, ships

Why: premium tokens spent on taste, not on mechanical git/curl/JSON work.

## ✅ Done by orchestrator

- Scaffold: 12 project folders, shared tokens, concept stamp
- 12 creative prompts: `_docs/session-prompts/NN-slug.md`
- 1 deploy prompt: `_docs/session-prompts/deploy/DEPLOY-UNIVERSAL.md`
- `deploy.sh`, manifest sync, Vercel fallback doc
- Git initialized, 5 commits

## 🔴 You do — one-time setup

### 1. GitHub auth (IN PROGRESS — authorize now)
Go to https://github.com/login/device → enter: **00FC-2079**

### 2. Create repo + first push (after auth)
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel
/opt/data/home/bin/gh repo create astronaut2424/globsense-reel \
  --public --source=. --push --description "Globsense Reel — 12 AI-native prototypes"
```

### 3. Mount /reel/ in nginx
Paste the block from `_docs/nginx-mount.md` into Windows PowerShell.

## 🟢 You do — per-project workflow

### Phase 1: Creative (12 sessions, one per project)

| # | Project | Model | File |
|---|---------|-------|------|
| 01 | GaaS Platform | claude-opus-4-7 | `01-gaas.md` |
| 02 | Reel Engine | gpt-5.3-codex | `02-reel-engine.md` |
| 03 | Mingxi | claude-sonnet-4-6-thinking | `03-mingxi.md` |
| 04 | Linfen | gemini-3-pro-preview | `04-linfen.md` |
| 05 | Ostraka | gpt-5.5 | `05-ostraka.md` |
| 06 | Stratum | gpt-5.4-pro | `06-stratum.md` |
| 07 | Ink Garden | gpt-5-mini | `07-ink-garden.md` |
| 08 | Tea Leaves | gemini-2.5-flash | `08-tea-leaves.md` |
| 09 | DJI spec | grok-4.1 | `09-dji-spec.md` |
| 10 | BYD spec | gpt-5.4 | `10-byd-spec.md` |
| 11 | Pop Mart spec | gpt-5.2-codex | `11-popmart-spec.md` |
| 12 | HEYTEA spec | gemini-2.5-pro | `12-heytea-spec.md` |

For each:
1. Open new WebUI session
2. Set model (from table) in dropdown under `openai-next`
3. Open `_docs/session-prompts/NN-slug.md`, copy, paste as message #1
4. Worker generates code + `_brief.md` + marks `needs_deploy: true`
5. Session ends — no deployment

### Phase 2: Deploy (1 session handles ALL, or 1 per project)

1. Open new WebUI session
2. Set model to a **cheap Chinese model**: `deepseek-v4-flash` or `glm-5.2`
   (NOT openai-next — save those credits)
3. Open `_docs/session-prompts/deploy/DEPLOY-UNIVERSAL.md`, copy, paste
4. Cheap model finds all `needs_deploy: true` projects, tests, pushes,
   updates status, reports URLs

**Or**: deploy from THIS orchestrator session anytime:
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel && ./deploy.sh status
```

## Status check anytime

```bash
cd /opt/data/home/globsense/prototypes/globsense-reel && ./deploy.sh status
```
