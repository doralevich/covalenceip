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

## Images

Every image is served from `public/images/`, named exactly as it was in
`wp-content/uploads`. `scripts/fetch-wp-images.sh` lists the full set and can pull them
while WordPress is still live.

## Contact form

`app/actions.ts` sends submissions through Resend's HTTP API. Needs these Vercel env vars:

- `RESEND_API_KEY` - required; without it the form shows an error pointing at the email.
- `CONTACT_FROM` - sender, e.g. `Covalence IP Website <website@covalenceip.com>`. The domain
  must be verified in Resend. Without it, Resend's shared `onboarding@resend.dev` sender is
  used, which only delivers to the Resend account owner's own address.

The recipient is `site.contactTo` in `lib/site.ts`. It is Dave O. only for now, on purpose.

## The WordPress site was compromised

The WordPress home page carried a hidden casino spam link (`vavada` / tolcenters.org,
positioned off-screen at `left:-9999px`). It was deliberately not migrated. Never copy
markup from the WordPress export verbatim; retype the copy.
