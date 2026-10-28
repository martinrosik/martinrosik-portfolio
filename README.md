# Martin Rosík

A minimal single-page personal profile built with plain HTML and CSS.

I wanted to create something simple and on point, because I like things clean and well structured. That's why I was inspired by Evan You's personal website, which is simple and straightforward. This style of portfolio, or “personal web”, is the best reflection of my personality in the tech industry.

## Run locally

Open `index.html` directly in a browser — no build step or server required.

## Deployment notes

Hosted on Vercel; `vercel.json` sets the security headers and caching.

- The Content-Security-Policy only allows files from this site, so JavaScript must live in `js/main.js`. An inline `<script>` with code in `index.html` will be blocked in production (it still runs locally, where the header isn't sent).
- Fonts in `fonts/` are cached for a year. When replacing a font, give the file a new name, or visitors may keep the old one.
- After changing the page content, update `<lastmod>` in `sitemap.xml`.
