// Section renderers. Each `::: name` block in content.md is rendered to HTML by
// marked first, then wrapped by the matching function here. Unknown block
// names fall back to a plain section, so you can add new sections freely.

import { readFileSync } from "node:fs";

const brand = JSON.parse(
  readFileSync(new URL("./brand-icons.json", import.meta.url), "utf8"),
);

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const ext = (url) =>
  /^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";

const prettyUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/* ── Small line icons ─────────────────────────────────────────── */

const line = (d, size = 16) =>
  `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

export const icons = {
  knight: line(
    '<path d="M6 21h12"/><path d="M7.5 18h9"/><path d="M8.5 18c.2-2.6 1.4-4.2 3.6-5.9l-2.6-.6-2.1 1.7-1.9-1.6 3.4-5.1C9.9 5 11.4 4 13.3 4c3.2 0 5.2 3 5.2 7.1 0 2.8-.9 4.9-1.2 6.9"/><circle cx="12.6" cy="7.6" r=".6" fill="currentColor"/>',
  ),
  compass: line(
    '<circle cx="12" cy="12" r="9"/><path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z"/>',
  ),
  code: line('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m13.5 4-3 16"/>'),
  seed: line(
    '<path d="M7 20h10"/><path d="M12 20v-7"/><path d="M12 13c0-3.3-2.2-5.5-6-5.5 0 3.3 2.2 5.5 6 5.5z"/><path d="M12 11c0-3.6 2.4-6 6.5-6 0 3.6-2.4 6-6.5 6z"/>',
  ),
  mail: line('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>'),
  pin: line('<path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  out: line('<path d="M7 17 17 7"/><path d="M9 7h8v8"/>', 18),
  copy: line('<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8"/>', 18),
  check: line('<path d="m5 12.5 4.5 4.5L19 7.5"/>', 18),
  link: line('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
};

const brandIcon = (network, size = 22) => {
  const b = brand[network];
  if (!b) return icons.link;
  return `<svg class="brand" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${b.path}"/></svg>`;
};

/* ── Helpers to pull pieces out of rendered markdown ─────────────── */

const takeHeading = (html, level) => {
  const re = new RegExp(`<h${level}[^>]*>([\\s\\S]*?)</h${level}>`);
  const m = html.match(re);
  return { heading: m ? m[1] : "", rest: m ? html.replace(m[0], "").trim() : html };
};

// Turns a trailing paragraph that only holds one link into a button.
const linkToButton = (html, cls = "button") =>
  html.replace(
    /<p><a href="([^"]+)"([^>]*)>([^<]+)<\/a><\/p>\s*$/,
    (_, href, attrs, text) =>
      `<p class="actions"><a class="${cls}" href="${href}"${attrs}>${text}${icons.out}</a></p>`,
  );

const sectionHead = (heading) => `<h2 class="section-title">${heading}</h2>`;

/* ── Blocks ──────────────────────────────────────────────────── */

const section = (id, heading, inner, cls = "") =>
  `<section class="section ${cls}" id="${id}" aria-labelledby="${id}-title"><h2 id="${id}-title">${heading}</h2><div class="body">${inner}</div></section>`;

export const blocks = {
  hero(html, d) {
    const { heading, rest } = takeHeading(html, 1);
    const li = (d.socials || []).find((s) => s.network === "linkedin");
    return `<header class="hero" id="top">
  <img class="avatar" src="${esc(d.portrait)}" alt="Portrait of ${esc(d.name)}" width="216" height="216">
  <h1>${heading}</h1>
  <div class="lede">${rest}</div>
  <p class="buttons">
    <a class="btn" href="mailto:${esc(d.email)}">${icons.mail}Email me</a>
    ${li ? `<a class="btn ghost" href="${esc(li.url)}"${ext(li.url)}>${brandIcon("linkedin", 16)}LinkedIn</a>` : ""}
  </p>
</header>`;
  },

  fouroc(html, d) {
    const { heading, rest } = takeHeading(html, 2);
    const v = d.ventures || {};
    const row = (x, depth) =>
      `<li class="d${depth}"><span class="v-name">${esc(x.name)}</span><span class="v-role">${esc(x.role || "")}</span>${
        x.url ? `<a href="${esc(x.url)}"${ext(x.url)}>${esc(prettyUrl(x.url))}</a>` : "<span></span>"
      }</li>`;
    let rows = v.group ? row(v.group, 0) : "";
    for (const c of v.companies || []) {
      if (c.status === "next") continue;
      rows += row(c, 1);
      if (c.product) rows += row(c.product, 2);
    }
    return section("fouroc", heading, `${rest}<ul class="ventures" aria-label="Fouroc structure">${rows}</ul>`);
  },

  vuin(html) {
    const { heading, rest } = takeHeading(html, 2);
    const body = rest
      .replace("<ul>", '<ul class="features">')
      .replace(/<li><strong>([\s\S]*?)\.?<\/strong>\s*/g, "<li><strong>$1</strong>");
    return section("vuin", heading, body);
  },

  bharat(html) {
    const { heading, rest } = takeHeading(html, 2);
    return `<section class="bharat" id="bharat" aria-labelledby="bharat-title"><h2 id="bharat-title">${heading}</h2>${rest}</section>`;
  },

  socials(html, d) {
    const { heading, rest } = takeHeading(html, 2);
    const links = (d.socials || [])
      .map((s) => {
        const hex = brand[s.network]?.hex;
        return `<li><a class="chip" href="${esc(s.url)}"${ext(s.url)} style="--brand:#${hex && !["000000", "181717"].includes(hex) ? hex : "1c1c1c"}">${brandIcon(s.network, 18)}<span><b>${esc(s.label)}</b><small>${esc(s.handle)}</small></span></a></li>`;
      })
      .join("");
    return section("socials", heading, `${rest}<ul class="chips">${links}</ul>`);
  },

  contact(html, d) {
    const { heading, rest } = takeHeading(html, 2);
    const li = (d.socials || []).find((s) => s.network === "linkedin");
    return section(
      "contact",
      heading,
      `${rest}<p class="email"><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></p>${
        li ? `<p class="or">or message me on <a href="${esc(li.url)}"${ext(li.url)}>LinkedIn</a></p>` : ""
      }`,
    );
  },

  default(html, d, name) {
    const { heading, rest } = takeHeading(html, 2);
    return heading ? section(name, heading, rest) : `<section class="section">${rest}</section>`;
  },
};
