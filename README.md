# Hillcrest HarvestFest — website

Static site. No build step, no dependencies to install. Everything it needs is
in this folder.

```
index.html          ← the page
app.jsx             ← page content & sections (edit this)
harvestfest-ui.js   ← shared UI components (button, card, badge, schedule row)
styles.css          ← brand colors, type, spacing
assets/             ← logo, marks, seal, mascot, photos (one flat folder)
.nojekyll           ← tells GitHub Pages to serve files as-is (don't delete)
```

## Publish to GitHub Pages

1. Create a repo on GitHub (e.g. `hillcrest-harvestfest`).
2. Upload **the contents of this folder** to the repo root — `index.html` must
   sit at the top level, not inside a `site/` subfolder.
   - Drag-and-drop works: GitHub repo → **Add file → Upload files**.
   - Or from a terminal:
     ```
     git init
     git add .
     git commit -m "HarvestFest site"
     git branch -M main
     git remote add origin https://github.com/USERNAME/REPO.git
     git push -u origin main
     ```
3. In the repo: **Settings → Pages**.
4. Under *Build and deployment*, set **Source: Deploy from a branch**, then
   **Branch: `main`** and **Folder: `/ (root)`**. Save.
5. Wait ~1 minute. Your site is live at
   `https://USERNAME.github.io/REPO/`

### Custom domain (e.g. hillcrestharvestfest.com)
In **Settings → Pages → Custom domain**, enter the domain and save. Then at your
domain registrar add these DNS records:

- Four `A` records for the apex domain pointing to
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- A `CNAME` record for `www` pointing to `USERNAME.github.io`

Tick **Enforce HTTPS** once the certificate is issued.

## Editing content

Almost everything you'll want to change is near the top of `app.jsx`:

```js
const LINK_TICKETS  = '...';   // VIP tickets (SimpleTix)
const LINK_VENDOR   = '...';   // vendor registration
const LINK_VOLUNTEER= '...';   // volunteer signup
const LINK_RATBOYS  = '...';
const LINK_DOGSHOW  = '#dogshow';  // ← replace when the link exists
```

Other common edits:
- **Schedule** — the `rows` array in `Lineup()`.
- **Experiences** — the `items` array in `Happening()`.
- **Music** — `MusicLineup()` (swap in openers as they're announced).
- **Photos** — drop replacements into `assets/web/` using the same filenames.

Commit the change and Pages redeploys automatically.

## Notes

- Photos are 1600px web-optimized copies. Full-resolution originals live outside
  this folder in the design system.

## Troubleshooting: images not loading on GitHub Pages

Almost always one of these:

1. **The `assets` folder didn't get uploaded.** GitHub's drag-and-drop uploader
   sometimes skips folders. Open your repo and confirm you see an `assets`
   folder containing ~19 images next to `index.html`. If it's missing or empty,
   open the `assets` folder locally, select **all the image files**, and drag
   those into the repo with **Add file → Upload files**, then type `assets/`
   into the "Name your file..." path box so they land in the right folder.
   (Using `git push` from a terminal avoids this entirely.)
2. **`.nojekyll` is missing.** Without it GitHub runs Jekyll, which can skip
   files. It's an empty file — some tools hide it because it starts with a dot.
   You can create it directly on GitHub: **Add file → Create new file**, name it
   `.nojekyll`, leave it empty, commit.
3. **Wrong folder selected in Pages settings.** Settings → Pages → Folder must be
   `/ (root)` and `index.html` must sit at the repo root — not inside a
   `site/` subfolder.
4. **Still deploying.** First build takes a minute or two. Check the Actions tab
   for a green check.

To confirm what's wrong: load the page, right-click a broken image →
**Open image in new tab**. A 404 means the file isn't at that path in the repo —
compare the URL to where the file actually sits on GitHub.
- The page compiles `app.jsx` in the browser, which keeps editing dead simple but
  adds a moment to first load. If you later want maximum speed, precompile
  `app.jsx` to plain JS and drop the Babel `<script>` tag.
- Footer social links are placeholder `#` — point them at the real
  Instagram/Facebook/email.
