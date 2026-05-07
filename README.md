# TVM Associates — Welcome Site (Static)

A pure HTML/CSS/JS static welcome site for the **23rd March 2026 TVM Associates** cohort. No build step. Free to host anywhere.

## Files

```
static/
├── index.html
├── style.css
└── script.js
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
cd static
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy for free

### Option 1 — GitHub Pages
1. Create a new GitHub repo (e.g. `tvm-associates`).
2. Copy the contents of this `static/` folder into the repo root.
3. Push to GitHub.
4. Repo → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` → `/ (root)` → **Save**.
5. Wait ~1 minute. Your site is live at `https://<your-username>.github.io/tvm-associates/`.

### Option 2 — Vercel
1. Install: `npm i -g vercel` (one-time).
2. From inside the `static/` folder run: `vercel` and follow the prompts (accept defaults).
3. Production deploy: `vercel --prod`.

### Option 3 — Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the entire `static/` folder onto the page.
3. Done — you'll get a public URL instantly.

## Updating the associates list

Edit the `ASSOCIATES` array at the top of `script.js`. That's it.
