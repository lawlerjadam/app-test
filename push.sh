#!/bin/bash

REPO_DIR="$HOME/app-test"

echo "→ Pushing to GitHub..."
cd "$REPO_DIR"
git add index.html styles.css app.js
git commit -m "Update app"
git push

echo "✓ Done — Vercel will deploy in ~30 seconds."
