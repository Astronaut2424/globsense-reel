#!/usr/bin/env python3
"""Reconcile manifest.json with on-disk _status.json files.

Run from /opt/data/home/globsense/prototypes/globsense-reel/.
Reads each NN-slug/_status.json and updates manifest.json's per-project
status + model fields. Safe to run any time.
"""
import json, os, sys, datetime
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mpath = os.path.join(ROOT, "manifest.json")
m = json.load(open(mpath))
changed = 0
for p in m["projects"]:
    sf = os.path.join(ROOT, f"{p['n']:02d}-{p['slug']}", "_status.json")
    if not os.path.exists(sf):
        continue
    try:
        s = json.load(open(sf))
    except json.JSONDecodeError:
        print(f"  ⚠ {p['slug']}: malformed _status.json — skipping")
        continue
    new_status = s.get("status", p["status"])
    new_model = s.get("worker_model", p["model"])
    if new_status != p["status"] or new_model != p["model"]:
        p["status"] = new_status
        p["model"] = new_model
        changed += 1
        print(f"  ↻ {p['slug']:<14} → {new_status:<10} ({new_model or '-'})")
    # Carry through deploy_targets if worker set them
    targets = s.get("deploy_targets")
    if targets:
        p["deploy_targets"] = targets
m["last_sync"] = datetime.datetime.utcnow().isoformat() + "Z"
with open(mpath, "w") as f:
    json.dump(m, f, indent=2)
print(f"\n✓ manifest synced — {changed} project(s) updated")
