// Builds the site from content.md into /public (the folder Vercel serves).
// Source images and fonts live in /static and are copied in on every build.
//   npm run build   → one-off build (also writes sitemap.xml and robots.txt)
//   npm run dev     → build, watch for changes, serve on http://localhost:3000

import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  statSync,
  watch,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";
import { blocks } from "./template/blocks.mjs";

const root = new URL(".", import.meta.url).pathname;
const out = join(root, "public");

const marked = new Marked({
  renderer: {
    // Open external links in a new tab
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const t = title ? ` title="${title}"` : "";
      const e = /^https?:/.test(href)
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      return `<a href="${href}"${t}${e}>${text}</a>`;
    },
  },
});

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Curly apostrophes and quotes in text (not inside tags or attributes)
const smarten = (html) =>
  html.replace(/>([^<]+)</g, (_, t) =>
    ">" +
    t
      .replace(/(\w)(?:'|&#39;)(\w)/g, "$1\u2019$2")
      .replace(/(^|[\s(])(?:"|&quot;)/g, "$1\u201C")
      .replace(/"|&quot;/g, "\u201D") +
    "<");

function build() {
  const t0 = Date.now();
  const file = join(root, "content.md");
  const { data: d, content } = matter(readFileSync(file, "utf8"));
  const site = d.url.replace(/\/$/, "");

  // Split into ::: blocks; text outside blocks becomes plain sections.
  const parts = [];
  const re = /^:::\s*([\w-]+)\s*\n([\s\S]*?)^:::\s*$/gm;
  let last = 0, m;
  while ((m = re.exec(content))) {
    const before = content.slice(last, m.index).trim();
    if (before) parts.push({ name: "default", md: before });
    parts.push({ name: m[1], md: m[2] });
    last = re.lastIndex;
  }
  const tail = content.slice(last).trim();
  if (tail) parts.push({ name: "default", md: tail });

  const body = parts
    .map((p, i) => {
      const html = smarten(marked.parse(p.md).trim());
      const fn = blocks[p.name] || blocks.default;
      return fn(html, d, p.name === "default" ? `section-${i}` : p.name);
    })
    .join("\n");

  // Nav: only sections that exist
  const navItems = [
    ["about", "About"],
    ["fouroc", "Fouroc"],
    ["vuin", "VUIN"],
    ["contact", "Contact"],
  ]
    .filter(([id]) => parts.some((p) => p.name === id))
    .map(([id, label]) => `<a href="#${id}">${label}</a>`)
    .join("");

  const ogImage = site + d.ogImage;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: d.name,
    url: site,
    image: site + d.portrait,
    jobTitle: "Product Engineer",
    email: `mailto:${d.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: d.ventures?.group?.name,
      url: d.ventures?.group?.url,
    },
    sameAs: (d.socials || []).map((s) => s.url),
  };

  let html = readFileSync(join(root, "template/layout.html"), "utf8");
  const vars = {
    title: esc(d.title),
    description: esc(d.description),
    url: site + "/",
    ogImage,
    twitter: esc(d.twitter || ""),
    themeColor: d.themeColor || "#1B2466",
    name: esc(d.name),
    nav: navItems,
    body,
    year: String(new Date().getFullYear()),
    location: esc(d.location),
    jsonLd: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
  };
  html = html.replace(/\{\{(\w+)\}\}/g, (_, k) => (k in vars ? vars[k] : ""));

  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  cpSync(join(root, "static"), out, { recursive: true });
  cpSync(join(root, "template/styles.css"), join(out, "styles.css"));
  writeFileSync(join(out, "index.html"), html);

  // sitemap.xml + robots.txt, generated from content.md every build
  const lastmod = statSync(file).mtime.toISOString().slice(0, 10);
  writeFileSync(
    join(out, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${site}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image><image:loc>${ogImage}</image:loc></image:image>
  </url>
</urlset>
`,
  );
  writeFileSync(
    join(out, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`,
  );

  console.log(`Built public/ in ${Date.now() - t0}ms`);
}

build();

if (process.argv.includes("--serve")) {
  let timer;
  for (const p of ["content.md", "template", "static"]) {
    if (existsSync(join(root, p))) {
      watch(join(root, p), { recursive: true }, () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          try {
            build();
          } catch (e) {
            console.error(e.message);
          }
        }, 80);
      });
    }
  }
  const types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".woff2": "font/woff2",
    ".xml": "application/xml",
    ".txt": "text/plain",
    ".ico": "image/x-icon",
    ".json": "application/json",
  };
  createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p.endsWith("/")) p += "index.html";
    const f = join(out, p);
    if (!f.startsWith(out) || !existsSync(f)) {
      res.writeHead(404);
      return res.end("Not found");
    }
    res.writeHead(200, {
      "Content-Type": types[extname(f)] || "application/octet-stream",
    });
    res.end(readFileSync(f));
  }).listen(3000, () => console.log("Serving on http://localhost:3000"));
}
