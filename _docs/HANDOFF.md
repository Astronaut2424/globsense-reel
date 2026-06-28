# HANDOFF — what's done, what you do, what each worker does

## ✅ Done by orchestrator (this session)

- Scaffold built: `/opt/data/home/globsense/prototypes/globsense-reel/`
- 12 project folders with placeholder `index.html` + `_status.json`
- Master gallery at `index.html` (auto-reads manifest, shows status per project)
- Shared design tokens at `_shared/tokens.css` (cinematic dark register)
- Concept stamp at `_shared/concept-stamp.html` (for real-brand projects)
- Brief contract at `_docs/brief-contract.md` (the done-bar)
- 12 ready-to-paste session prompts at `_docs/session-prompts/NN-slug.md`
- `deploy.sh` with status/url/push/init commands
- Git initialized, 2 commits
- nginx symlink: `/opt/data/home/globsense-reel-www → globsense-reel/`

## 🔴 You do — one screen of one-time setup

### 1. GitHub auth (one of two ways)

**(a) Interactive — recommended:**
```bash
/opt/data/home/bin/gh auth login
# pick: GitHub.com → HTTPS → login with browser
# paste the device code it gives you into https://github.com/login/device
```

**(b) Token paste:**
```bash
echo "YOUR_GH_PAT_HERE" | /opt/data/home/bin/gh auth login --with-token
```

### 2. Create the public repo + first push

```bash
cd /opt/data/home/globsense/prototypes/globsense-reel
/opt/data/home/bin/gh repo create astronaut2424/globsense-reel \
  --public --source=. --push --description "Globsense Reel — 12 AI-native prototypes from Shanghai"
```

### 3. Mount /reel/ in nginx (one PowerShell paste on Windows host)

Open Windows PowerShell as admin and paste the entire block in
`_docs/nginx-mount.md`.

After: `curl http://localhost:8888/reel/` should return the gallery HTML
locally, and `https://<natapp-domain>.natappfree.cc/reel/` works globally.

Find current natapp domain:
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel && ./deploy.sh url
```

## 🟢 You do — 12 build sessions

Open a new WebUI session per project. For each:

1. Set model to `claude-opus-4-7` (from `openai-next` provider) in the WebUI
   dropdown.
2. Open the matching prompt file:
   `/opt/data/home/globsense/prototypes/globsense-reel/_docs/session-prompts/NN-slug.md`
3. Copy entire file content, paste as message #1 of the new session.
4. Let the worker build. It will write to its assigned folder, push to
   GitHub itself when done, and self-update `_status.json`.

Each worker session handles its own:
- Build into its folder
- Self-deploy via GitHub push (if Vercel path is needed for heavy WebGL,
  the worker will use it instead — see `_docs/vercel-fallback.md`)
- Status update

You don't need to come back here unless something breaks or you want a
status snapshot:

```bash
cd /opt/data/home/globsense/prototypes/globsense-reel && ./deploy.sh status
```

## When things go wrong

| Symptom | Fix |
|---|---|
| Worker can't push to GitHub | Worker should report it; you run `gh auth status`, re-auth if needed, then worker re-pushes |
| nginx 404 on `/reel/` | Re-run the PowerShell paste from `nginx-mount.md` |
| natapp URL changed | Run `./deploy.sh url` for current domain |
| Project has heavy WebGL and natapp is slow | Worker should switch to Vercel — see `vercel-fallback.md` |
| Manifest out of sync with reality | `python3 _docs/sync-manifest.py` (orchestrator-run) |
