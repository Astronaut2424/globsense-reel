**Deploy all built projects — minimax-m3**

Model: `minimax-m3` (minimax-cn provider)

For each project folder in `/opt/data/home/globsense/prototypes/globsense-reel/`
that has `_status.json` with `needs_deploy: true`:

1. **Local test**: `cd <folder> && python3 -m http.server 8765 & sleep 1 && curl -s -o /dev/null -w "%{http_code} %{time_total}" http://localhost:8765/ && kill %1`
   Skip if HTTP != 200 or time > 3s.

2. **Create per-project GitHub repo**:
   ```bash
   cd <folder>
   git init -q
   git add -A
   git commit -q -m "feat: <project name>"
   /opt/data/home/bin/gh repo create astronaut2424/globsense-<NN>-<slug> --public --source=. --push
   ```

3. **Update `_status.json`**:
   ```json
   {"status":"shipped","needs_deploy":false,"deploy_targets":{
     "github":"https://astronaut2424.github.io/globsense-<NN>-<slug>/",
     "natapp":"https://<domain>.natappfree.cc/reel/<NN>-<slug>/"
   }}
   ```

4. **Report**: for each project, print:
   `✓ <NN>-<slug> → https://astronaut2424.github.io/globsense-<NN>-<slug>/`

Get natapp domain: `curl -s http://127.0.0.1:4040/http/in -L | grep -oE '[a-z0-9]+\.natappfree\.cc' | head -1`

DO NOT modify HTML/CSS/JS. DO NOT touch the manifest. Mechanical deploy only.
