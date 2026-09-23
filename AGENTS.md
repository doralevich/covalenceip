<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Git workflow

Before writing any code, run `git pull origin main`. Other sessions land work there too.

Deploy is manual: David merges to `main` and deploys from the Vercel dashboard. Do not trigger deploys.

## What this site is

covalenceip.com, being migrated off WordPress onto this Next.js app. It is not an
ApolloClaw agent site and does not share their template, accent color or funnels.

Until the domain cuts over, WordPress is still the live site.

## Migration rules

- **Every old WordPress URL resolves.** Anything whose path changes gets a permanent
  redirect in `next.config.ts`. WordPress's own paths (`/feed/`, `/wp-login.php`,
  `/category/...`, dated post URLs) are included.
- **Every page carries its SEO over.** The title and meta description from the old page
  (Yoast or equivalent) go into that route's `metadata`, and the route is added to
  `app/sitemap.ts`.
- **Images live in `public/`.** Never hotlink `wp-content/uploads`, which disappears when
  WordPress is retired.
- `vercel.json` pins `{"framework": "nextjs"}` so the Vercel preset can't drift to "Other".
- `app/robots.ts` blocks crawling everywhere except `VERCEL_ENV=production`.
