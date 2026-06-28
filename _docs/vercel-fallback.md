# Vercel fallback for heavy WebGL / 3D projects

natapp is fast in China but it's a single tunnel through one PC. Heavy WebGL
(Three.js + multiple textures + post-processing) may stutter when multiple
visitors hit at once, especially if the host PC is also running Hermes,
nginx, the WebUI, gateway, etc.

## When the worker should use Vercel instead of (or alongside) natapp

Trigger this fallback if ANY of these are true for the project:
- Three.js with > 5 simultaneous textures
- WebGL shaders beyond simple gradients
- Video texture / playback as a hero element
- Real-time AR / model-viewer
- Bundle size > 5MB
- The PROJECT'S OWN tests show > 3s first paint when served from natapp

## How the worker switches paths

The project still lives in its assigned folder
(`/opt/data/home/globsense/prototypes/globsense-reel/NN-slug/`). The natapp
path keeps working via the shared mount. Vercel is an ADDITIONAL deploy
target, not a replacement.

### One-time per-project setup

```bash
# Inside the project folder:
cd /opt/data/home/globsense/prototypes/globsense-reel/NN-slug/

# Install Vercel CLI to user-local bin (no sudo)
if ! command -v vercel >/dev/null 2>&1; then
  npm install --prefix /opt/data/home/.npm-global vercel
  export PATH="/opt/data/home/.npm-global/bin:$PATH"
fi

# Create a minimal vercel.json so paths route correctly when deployed standalone
cat > vercel.json <<'JSON'
{
  "version": 2,
  "rewrites": [
    { "source": "/_shared/(.*)", "destination": "/_shared/$1" }
  ]
}
JSON

# Copy _shared into the project folder so it's deployable standalone
# (Vercel deploys ONE folder, can't reach up to siblings)
cp -r ../_shared ./_shared

# Update any <link href="../_shared/..."> to <link href="/_shared/...">
sed -i 's|\.\./_shared/|/_shared/|g' index.html

# Deploy (interactive first time — link to Vercel account)
vercel --prod --yes
```

### After deploy

The worker captures the Vercel URL and updates `_status.json`:

```json
{
  "status": "built",
  "deploy_targets": {
    "natapp": "https://<natapp>.natappfree.cc/reel/NN-slug/",
    "vercel": "https://NN-slug-globsense.vercel.app/",
    "github_pages": "https://astronaut2424.github.io/globsense-reel/NN-slug/"
  },
  ...
}
```

The master gallery (`/reel/`) shows `(also on vercel ↗)` badge for projects
with a `deploy_targets.vercel` value.

## Vercel auth

Once per machine — you'll be prompted on first `vercel --prod`. Pick
GitHub login, authorize, done. Subsequent deploys are zero-prompt.

## Pitfalls

- **Don't deploy projects with secrets via Vercel.** All projects are
  static HTML/JS, no secrets — fine.
- **Vercel may be slow from China.** That's why natapp is primary; Vercel
  is the perf fallback for visitors with stronger Western connections.
- **Don't fork the source.** The project still lives in the reel folder.
  Vercel just deploys what's there. Edit in the reel folder, redeploy.

## Worker self-test before deploying to Vercel

Before pushing to Vercel, the worker MUST verify locally:
```bash
cd /opt/data/home/globsense/prototypes/globsense-reel/NN-slug/
python3 -m http.server 8765 &
sleep 1
curl -s -o /dev/null -w "%{time_total}s · %{http_code}\n" http://localhost:8765/
kill %1
```

If response > 3s or non-200, fix locally first.
