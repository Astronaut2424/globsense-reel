#!/bin/bash
# Globsense Reel — deploy script
# Idempotent. Run after every wave.

set -euo pipefail
REEL_DIR="/opt/data/home/globsense/prototypes/globsense-reel"
GH_BIN="/opt/data/home/bin/gh"
NATAPP_STATE="/opt/data/scripts/.natapp-domain-state"

cd "$REEL_DIR"

cmd="${1:-push}"

natapp_domain() {
  curl -s --connect-timeout 3 http://127.0.0.1:4040/http/in -L 2>/dev/null \
    | grep -oE '[a-z0-9]+\.natappfree\.cc' | head -1
}

print_status() {
  python3 - <<'PY'
import json, os, glob, sys
with open('manifest.json') as f: m = json.load(f)
by_n = {p['n']: p for p in m['projects']}
print(f"\n{'#':>3} {'slug':<14} {'status':<10} {'model':<22} {'name'}")
print('-' * 80)
for p in m['projects']:
    slug_dir = f"{p['n']:02d}-{p['slug']}"
    status_file = os.path.join(slug_dir, '_status.json')
    actual = p['status']; model = p['model'] or '-'
    if os.path.exists(status_file):
        try:
            s = json.load(open(status_file))
            actual = s.get('status', actual)
            model = s.get('worker_model', model) or '-'
        except: pass
    print(f"{p['n']:>3} {p['slug']:<14} {actual:<10} {model:<22} {p['name']}")
print()
PY
}

case "$cmd" in
  status)
    print_status
    ;;
  url)
    d=$(natapp_domain || true)
    if [ -n "${d:-}" ]; then
      echo "https://$d/reel/"
    else
      echo "natapp domain unknown — check $NATAPP_STATE"
    fi
    ;;
  sync-nginx)
    # Ensure /opt/data/home/globsense-reel-www symlink exists for nginx
    # (nginx user is `hermes`; alias paths must be hermes-readable)
    ln -sfn "$REEL_DIR" /opt/data/home/globsense-reel-www
    echo "symlink → $(readlink /opt/data/home/globsense-reel-www)"
    ;;
  push)
    msg="${2:-update reel $(date +%Y-%m-%d_%H-%M)}"
    git add -A
    if git diff --cached --quiet; then
      echo "nothing to commit"
    else
      git commit -m "$msg"
      git push origin main || echo "(no remote yet — run: $GH_BIN repo create astronaut2424/globsense-reel --public --source=. --push)"
    fi
    print_status
    ;;
  init)
    if [ ! -d .git ]; then
      git init -q
      git checkout -b main 2>/dev/null || true
      git add -A
      git commit -q -m "init: globsense reel scaffold"
      echo "✓ git initialized"
    else
      echo "git already initialized"
    fi
    if [ ! -f /opt/data/home/globsense-reel-www ] && [ ! -L /opt/data/home/globsense-reel-www ]; then
      ln -sfn "$REEL_DIR" /opt/data/home/globsense-reel-www
      echo "✓ nginx symlink → /opt/data/home/globsense-reel-www"
    fi
    echo "✓ next: $GH_BIN auth login   then   $GH_BIN repo create astronaut2424/globsense-reel --public --source=. --push"
    ;;
  *)
    echo "usage: ./deploy.sh [init|push [msg]|status|url|sync-nginx]"
    exit 1
    ;;
esac
