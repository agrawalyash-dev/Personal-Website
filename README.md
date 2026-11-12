# agrawalyash.com

A single-page site rendered from one Markdown file.

## Edit
Everything lives in `content.md`:
- The top block (between `---`) holds your details: name, email, social links and the Fouroc structure.
- Each `::: name` … `:::` block is one section of the page (hero, about, fouroc, vuin, bharat, socials, contact). Reorder or delete them freely. A block with a new name renders as a plain section.

## Run
```bash
npm install
npm run dev     # http://localhost:3000, rebuilds when you save
npm run build   # writes the final site to public/
```
Every build also regenerates `public/sitemap.xml` and `public/robots.txt` from the `url` in `content.md`.

## Deploy (Vercel)
`vercel.json` already sets everything: no framework, `npm run build`, output folder `public`.
`public/` is generated, so it is git-ignored. Put images and fonts in `static/`.

## Files
- `static/`: favicon, fonts, portrait, social image (copied into public/ on build)
- `template/blocks.mjs`: how each section is turned into HTML
- `template/styles.css`: all styles
- `template/layout.html`: page shell, SEO tags and structured data
- `og/og.mjs`: source for the social image
