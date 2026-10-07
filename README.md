# mane

Personal site for Dnyaneshwar Mane. Angular, TypeScript, and a paper-and-ink layout.

The words live in two files:

- `src/app/data/site.ts` — name, email, GitHub, LinkedIn, skills, experience, projects
- `src/app/data/notes.ts` — blog posts

Canonical domain in the metadata is `mane.dev`. `mane.click` is the alternate. If you register the other one, change `siteUrl` in `site.ts`, then update `public/sitemap.xml`, `public/robots.txt`, and `public/rss.xml`.

## Run

```bash
npm install
npm start
```

Open http://localhost:4200

## Build

```bash
npm run build
```

The static files land in `dist/mane/browser`.

## Hosting

Vercel, Netlify, and Cloudflare Pages can all serve that folder. Rewrites for the Angular routes are already in `vercel.json`, `netlify.toml`, and `public/_redirects`.

Point DNS for `mane.dev` (or `mane.click`) at the host. The contact form opens the visitor’s mail app to the address in `site.ts`.

## SEO

Each page sets its own title, description, and canonical URL. Add a route and also add it to `public/sitemap.xml`. Analytics is optional: paste a script into `src/index.html` where the comment is.
