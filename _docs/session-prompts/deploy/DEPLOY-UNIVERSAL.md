**ROLE — Globsense Reel · DEPLOY phase (mechanical shipping)**

You are the DEPLOY session. Your job: take code that a creative session
already wrote, test it, push it to GitHub, optionally deploy to Vercel,
and update status. You do NOT generate creative content.

**Recommended model**: `deepseek-v4-flash` or `glm-5.2` (cheap, fast)
**Provider**: your default Chinese provider (NOT openai-next — save those
credits for creative sessions)

**Target project**: specify with `--project NN` (see below). If no project
specified, deploy ALL projects with `status: "built"` and `needs_deploy: true`.

**Read FIRST**:
1. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/vercel-fallback.md`
2. `/opt/data/home/globsense/prototypes/globsense-reel/_docs/brief-contract.md`

**WORKFLOW** — for each project you're deploying:

### Step 1 — Find projects to deploy
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/
python3 -c "
import json, os
m = json.load(open('manifest.json'))
for p in m['projects']:
    sf = f"{p['n']:02d}-{p['slug']}/_status.json"
    if os.path.exists(sf):
        s = json.load(open(sf))
        if s.get('needs_deploy') or s.get('status') == 'built':
            print(f"  {p['n']:02d}-{p['slug']}")
"
```
This lists all projects ready for deployment.

### Step 2 — For each project, local self-test
```bash
PROJECT="NN-slug"  # e.g. "03-mingxi"
cd /opt/data/home/globsense/prototypes/globsense-reel/$PROJECT/
python3 -m http.server 8765 &
SERVER_PID=$!
sleep 1
RESULT=$(curl -s -o /dev/null -w "%{http_code} %{time_total} %{size_download}" http://localhost:8765/)
kill $SERVER_PID 2>/dev/null
echo "$RESULT"
# Parse: HTTP_CODE TIME SIZE
# If HTTP != 200 or TIME > 3s → report issue, skip deploy
```

### Step 3 — Check for heavy WebGL (Vercel decision)
```bash
# Check if project uses Three.js or has large assets
grep -l "three\|webgl\|THREE" $PROJECT/*.html $PROJECT/*.js 2>/dev/null
du -sh $PROJECT/  # if > 5MB, consider Vercel
```
If heavy → follow `_docs/vercel-fallback.md` to also deploy to Vercel.
If not → skip Vercel, natapp + GitHub Pages is enough.

### Step 4 — Get current natapp domain
```bash
NATAPP_DOMAIN=$(curl -s http://127.0.0.1:4040/http/in -L | grep -oE '[a-z0-9]+\.natappfree\.cc' | head -1)
echo "natapp domain: $NATAPP_DOMAIN"
```

### Step 5 — Update _status.json with deploy targets
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/$PROJECT/
python3 -c "
import json, datetime
s = json.load(open('_status.json'))
s['status'] = 'shipped'
s['needs_deploy'] = False
s['updated_at'] = datetime.datetime.utcnow().isoformat() + 'Z'
s['deploy_targets'] = {
    'natapp': f'https://{NATAPP_DOMAIN}.natappfree.cc/reel/$PROJECT/',
    'github_pages': f'https://astronaut2424.github.io/globsense-reel/$PROJECT/',
    'vercel': None  # or the vercel URL if deployed
}
json.dump(s, open('_status.json','w'), indent=2)
print('✓ status updated')
"
```

### Step 6 — Git push (batch — all deployed projects at once)
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/
git add -A
git commit -m "deploy: ship <list of project slugs>"
git push origin main
```

### Step 7 — Report
For each project deployed, print:
```
✓ NN-slug — shipped
  natapp: https://<domain>.natappfree.cc/reel/NN-slug/
  github: https://astronaut2424.github.io/globsense-reel/NN-slug/
  vercel: <URL or "n/a">
```

**DO NOT**:
- Modify any HTML/CSS/JS files (creative session owns those)
- Modify `manifest.json` (orchestrator owns that)
- Run `deploy.sh` (orchestrator owns that)
- Generate creative content, rewrite copy, or "improve" the design

**If something breaks**:
- If local test fails → report the HTTP code + time, DON'T push
- If git push fails → check `gh auth status`, report to user
- If Vercel CLI not installed → skip Vercel, note it in status
