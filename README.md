# The Operating Leader

Operatingleader.com is a static Astro site deployed to Cloudflare Pages.

## Stack
- Astro static site
- Content source: `src/content/blog/*.md`
- Static assets: `public/`
- Deployment target: Cloudflare Pages project `operatingleader`
- Cloudflare account id: `71058e0bdf27f2cf29ba3fbab5c160aa`

## Local setup
```sh
cd /Users/frank/.openclaw/workspace/operatingleader
npm install
npm run dev
```

## Content model
### Blog articles
- Source files live in `src/content/blog/`
- Each article must exist as a local markdown file to be included on:
  - homepage latest list
  - `/blog/` article index
  - RSS feed
  - static route generation
- If a URL exists on Cloudflare but the source file is missing locally, the page may still be reachable from an older deploy while disappearing from listings after the next rebuild. Treat that as source drift.

### Images
- Hero images referenced in frontmatter must point to local files
- Inline article images can be stored in `public/images/`, `public/blog/`, or another stable public path
- Current article hero pattern: title first, hero image directly under title

## Safe article publishing workflow
Use this sequence every time.

1. Add the article markdown file to `src/content/blog/<slug>.md`
2. Add any images to `public/images/`, `public/blog/`, or another stable public path
3. Run local build + publish checks:
   ```sh
   npm run check:publish
   ```
4. Only deploy if checks pass
5. Deploy with the correct Cloudflare account context:
   ```sh
   env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_EMAIL_TOKEN \
     HOME=/Users/frank \
     CLOUDFLARE_ACCOUNT_ID=71058e0bdf27f2cf29ba3fbab5c160aa \
     npx wrangler pages deploy dist --project-name=operatingleader --branch=main --commit-dirty=true
   ```
   **Always pass `--branch=main`.** Wrangler infers the deploy branch from your current git
   branch. If you are not on `main` (e.g. working on `reconcile/origin-main`), omitting it
   sends the build to a *preview* deployment and **operatingleader.com will not update**.
   Confirm the result shows `Environment: Production`:
   ```sh
   npx wrangler pages deployment list --project-name=operatingleader
   ```

## Why the extra Cloudflare env handling exists
This machine may have stale `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_EMAIL_TOKEN` environment variables that override fresh Wrangler OAuth login and cause auth/account confusion.

Safe pattern:
- unset legacy token env vars for deploy commands
- force the correct `HOME`
- force the correct `CLOUDFLARE_ACCOUNT_ID`

## Newsletter flow state (verified 2026-04-08, updated after end-to-end test)
Operating Leader now uses the new shared Mautic setup:
- **Shared Mautic service origin**: `http://localhost:8082`
- **Admin/internal host**: `https://marketing.principal.house`
- **Signup POST** uses the shared backend endpoint: `https://marketing.principal.house/api-subscribe.php`
- **Public tracked links** use the branded tracking host: `https://go.operatingleader.com`
- **Final confirmation page** lives on the main site: `https://www.operatingleader.com/confirm`

How it works:
- signup posts to `marketing.principal.house`
- Mautic adds the contact to the OperatingLeader pending-confirm segment
- campaign sends the DOI email
- Mautic rewrites the CTA into a tracked `/r/<redirect-id>?ct=...` link on `go.operatingleader.com`
- clicking the tracked link records the event in Mautic and redirects the user to the final confirmation page on the brand site

Important implementation note:
- Cloudflare Tunnel for this Mautic stack is remote-managed, so new public tracking hosts must be added to the tunnel's **remote** config, not only local `~/.cloudflared/config.yml`

Caution:
- Updating the email template fixes future emails only
- already-sent emails may still reference older redirect targets stored in Mautic `page_redirects`

## Required pre-deploy checks
`npm run verify` validates:
- required top nav links exist: `/blog`, `/playbook`, `/subscribe`, `/about`
- required built routes exist: `/`, `/blog/`, `/playbook/`, `/subscribe/`, `/about/`
- every source article in `src/content/blog/` builds to `dist/blog/<slug>/index.html`
- every source article appears on both homepage and `/blog/`

## Known failure modes
### 1. Ghost page / source drift
Symptom:
- article URL works
- article missing from homepage or `/blog/`

Cause:
- Cloudflare still serves an older deployed page
- source file no longer exists locally, so new builds omit it from collections

Fix:
- restore the source markdown file to `src/content/blog/`
- rebuild and redeploy

### 2. Navigation drift
Symptom:
- page exists, but menu link disappears

Cause:
- `src/components/Header.astro` lost the link even though route still exists

Fix:
- restore the nav link in source
- rebuild and redeploy

### 3. Cloudflare auth mismatch
Symptom:
- Wrangler auth fails, or project not found, or wrong account selected

Cause:
- stale token env vars or multiple Cloudflare accounts

Fix:
- use the deploy command above with env cleanup and explicit account id

## Publish rule
For this site, do not treat “URL works” as proof that the source is healthy.
The source of truth is the repo state plus a clean build plus `npm run verify`.
