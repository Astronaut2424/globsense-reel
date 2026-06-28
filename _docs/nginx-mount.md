# nginx /reel/ mount instructions

The reel needs nginx to serve `/opt/data/home/globsense/prototypes/globsense-reel/`
at the URL path `/reel/`. The default vhost is root-owned, so this requires one
PowerShell paste (host side).

## What to paste on Windows PowerShell

```powershell
wsl -u root docker exec -u root vibecore-container bash -lc '
  set -e
  CONF=/etc/nginx/sites-enabled/default
  # backup
  cp $CONF $CONF.bak-reel-$(date +%Y%m%d-%H%M%S)
  # idempotency check
  if grep -q "location /reel/" $CONF; then
    echo "reel block already present — nothing to do"
    exit 0
  fi
  # inject the reel block just before the final catch-all (location /)
  python3 - <<PY
import re, pathlib
p = pathlib.Path("$CONF")
src = p.read_text()
block = """\n    # Globsense Reel — added $(date +%Y-%m-%d)\n    location = /reel { return 302 /reel/; }\n    location /reel/ {\n        alias /opt/data/home/globsense/prototypes/globsense-reel/;\n        index index.html;\n        try_files \\$uri \\$uri/ =404;\n    }\n"""
# inject before the final "location / { return 404; }"
new = re.sub(r"(\n    location / \{\n        return 404;)", block + r"\1", src, count=1)
p.write_text(new)
PY
  nginx -t && nginx -s reload
  echo "✓ /reel/ mounted, nginx reloaded"
'
```

## After running

Visit (replace `<domain>` with current natapp domain — get it via
`./deploy.sh url` or `cat /opt/data/scripts/.natapp-domain-state`):

- `https://<domain>.natappfree.cc/reel/` — gallery index
- `https://<domain>.natappfree.cc/reel/01-lab/` — Globsense Lab
- ... etc

## If something breaks

Restore the backup:
```bash
ls /etc/nginx/sites-enabled/default.bak-reel-*  # find the most recent
cp /etc/nginx/sites-enabled/default.bak-reel-<TS> /etc/nginx/sites-enabled/default
nginx -t && nginx -s reload
```
