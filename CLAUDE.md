# CLAUDE.md — OperatingLeader

This file orients Claude (and any contributor) to what OperatingLeader is, how the
codebase is laid out, and which files to open for a given task. Read the relevant
section before acting — this repo has known "source drift" traps where a live URL
does **not** prove the source is healthy.

---

## 1. What we're doing here

OperatingLeader is a **leadership content platform + a $29 playbook**, written in the
voice of **Jānis Rozenblats** (ex-VP Product at Pipedrive, founder of Mailigen, ex-VP
Product at Aerones). It is a static Astro site live at **operatingleader.com**,
deployed to **Cloudflare Pages**.

**The business model:** content → audience → $29 playbook → potentially higher-ticket
offerings. OperatingLeader is #2 on the priority stack and serves two purposes:
1. **Revenue bridge** — the $29 playbook generates income (goal: $0 → $1,000).
2. **Audience building** — the ICP (founders, CEOs, HR leaders, product/eng leaders)
   is the same audience that will eventually convert to UnsaidSignals.

**Every content piece should either drive playbook sales or build the audience.**

### My role when working here
I'm Jānis's content strategist and writing partner. I help create leadership content,
refine the playbook, plan distribution, and optimize for SEO/growth. I write in Jānis's
voice and respect the brand + voice rules below.

### Content pillars
1. **Product leadership** — running product orgs, stakeholder management, prioritization
2. **Operational excellence** — how leaders operate day-to-day, systems thinking
   (Vista PE PM accelerator, High Performance Leadership Programs)
3. **Team dynamics** — the human side of leadership (connects to UnsaidSignals thesis)
4. **Builder's journey** — building ventures while leading full-time

### Voice & style (apply to all drafts)
**→ Before writing or editing ANY copy (blog post, newsletter, LinkedIn/X/Facebook,
outreach), read [VOICE.md](VOICE.md) and follow it.** It is the authoritative rulebook
for Jānis's voice: tone, sentence structure, openers, rhetorical devices, the hard
no-em-dash punctuation rule, banned words/phrases, and per-platform calibration.

Quick summary (full detail in VOICE.md):
- First person, conversational — like a sharp founder explaining something over coffee.
- Real specifics from Pipedrive / Mailigen / Aerones beat generalities.
- Short, punchy sentences. Lead with the feeling, not the context. Sharp before/after
  contrasts. At least one screenshot-worthy quotable line per piece.
- **Never em-dashes or en-dashes** (AI tell, banned). Use comma → period → parens.
- Contrarian takes welcome; challenge conventional leadership wisdom when warranted.
- **Do NOT mention** specific revenue figures or UnsaidSignals publicly (until ready).

### Output expectations
- **Article drafts:** ready to publish, 800–1500 words, include a meta description and
  3 social post variants, plus a distribution plan.
- **LinkedIn posts:** hook + insight + CTA, under 1300 characters.
- **Playbook sections:** clear, actionable, frameworks over theory.
- **Newsletter (The Operating Note):** follow [NEWSLETTER.md](NEWSLETTER.md) end to end
  (load the Notion pages, 8-section format, rotating PS, plain-text then HTML for Mautic)
  and use [NEWSLETTER-STYLE.md](NEWSLETTER-STYLE.md) for the current compact dark-card
  email style.

---

## 2. Tech stack

- **Astro 5** static site (`astro.config.mjs`, `tsconfig.json`)
- Content: Markdown in `src/content/blog/*.md`
- Static assets: `public/`
- Deploy: Cloudflare Pages project `operatingleader` (direct upload via Wrangler, **not**
  GitHub integration). Account id `71058e0bdf27f2cf29ba3fbab5c160aa`.
- **Email:** Mautic (`marketing.principal.house`, tracking host `go.operatingleader.com`)
- **Analytics:** Umami (`stats.principal.house`)
- **Checkout:** Cloudflare Worker in `workers/checkout/`
- **Social scheduling:** Zernio (X/LinkedIn/Instagram/Facebook)

Common commands:
```sh
npm run dev            # local dev server
npm run build          # build to dist/
npm run verify         # run publish-health checks (scripts/verify-site.mjs)
npm run check:publish  # build + verify (run before EVERY deploy)
```

---

## 3. Where to look — by task

### ✍️ Writing or editing a blog article
- **`ARTICLE-GUIDE.md`** — how we structure articles (length, opener patterns, section
  arc, formatting, frontmatter spec, closings/CTAs, SEO + distribution, pre-publish
  checklist). **Read it before drafting any article.** Companion to VOICE.md (tone).
- **`src/content/blog/<slug>.md`** — the article source. One markdown file per article.
  This is the **source of truth**. If the file isn't here, the article disappears from
  the homepage list, `/blog/` index, and RSS on the next rebuild (even if the URL still
  works from an old deploy — see "source drift" below).
- **`src/content.config.ts`** — frontmatter schema (`title`, `description`, `pubDate`,
  optional `updatedDate`, optional `heroImage`). Note: existing posts also carry
  `author` and `tags`; keep them for consistency.
- Frontmatter example: see `src/content/blog/the-value-creation-stack.md`.
- Hero/inline images go in **`public/images/`** (or `public/blog/`); reference by
  absolute path like `/images/foo.png`.

### 🎨 Voice, brand, visuals
- **`VOICE.md`** — Jānis's voice & tone rulebook. **Read before writing any copy.**
- **`ILLUSTRATIONS.md`** — how to create article illustrations (dark + gold, grid-based,
  typography-led): design system, layout patterns, cairosvg export to `public/images/`.
  **Follow it whenever asked to make a visual/graphic for an article.**
- **`BRAND.md`** — colors (dark + gold #c9a55a), typography (Space Grotesk / DM Sans),
  visual formats (2x2 matrix, contrast cards, pull quotes), brand voice, author
  positioning, and the "do not mention" list. Read before producing any visual or copy.
- **`.PROJECT-FILES/operatingleader/docs/nano-banana-*.md`** — image-generation prompts
  and style guide for article/playbook visuals.
- **`.PROJECT-FILES/operatingleader/playbook-visuals/`**, `blog-hero-ideas/`,
  `source-assets/` — visual working files (not part of the build).

### 💰 The $29 playbook
- **`src/pages/playbook.astro`** — the live playbook sales/landing page (largest page).
- **`src/pages/playbook-download.astro`**, **`src/pages/playbook/thanks.astro`** —
  post-purchase / download + thank-you pages.
- **`workers/checkout/index.js`** + `wrangler.toml` — Cloudflare Worker handling checkout.
- **`.PROJECT-FILES/operatingleader/playbook-lab/`** — playbook source (Typst `.typ`
  files, extracted text) used to produce the PDF.
- **`.PROJECT-FILES/operatingleader/docs/playbook-content.md`**,
  `playbook-redesign.md` — playbook copy + redesign notes.
- **`.PROJECT-FILES/team-health-playbook-revisions.md`** — revision notes.

### 🧭 Site structure / pages
- **`src/pages/`** — routes: `index.astro` (home), `about.astro`, `subscribe.astro`,
  `confirm.astro` (DOI confirmation), `rss.xml.js` (RSS feed).
- **`src/pages/blog/index.astro`** — `/blog/` article index.
- **`src/pages/blog/[...slug].astro`** — dynamic blog route (generates per-article pages).
- **`src/layouts/BlogPost.astro`** — article page layout.
- **`src/components/`** — `Header.astro` (top nav — keep `/blog`, `/playbook`,
  `/subscribe`, `/about`), `Footer.astro`, `BaseHead.astro` (SEO/meta/OG),
  `NewsletterForm.astro`, `ConversionTracking.astro`, `HeaderLink.astro`,
  `FormattedDate.astro`.
- **`src/consts.ts`** — site title, description, author.
- **`src/styles/global.css`** — global styles.

### 📰 Writing the newsletter (The Operating Note)
- **`NEWSLETTER.md`** — the full production playbook for the bi-weekly newsletter: when
  to use it, the two Notion source-of-truth pages, the strict 8-section format, the
  rotating PS cycle, editorial principles, and the plain-text→Mautic-HTML output order.
  **Follow it end to end whenever drafting an issue.** Uses [VOICE.md](VOICE.md) for copy.
- **`NEWSLETTER-STYLE.md`** — the house email style captured from the previous sent
  newsletter sample: compact dark card, no big internal headline, artifact save-card,
  PS card, split sign-off, and exact Mautic-ready layout conventions.

### 📧 Newsletter / email flow (signup infra)
- **`src/components/NewsletterForm.astro`**, **`src/pages/subscribe.astro`**,
  **`src/pages/confirm.astro`** — signup + double-opt-in confirmation.
- Flow details are documented in **`README.md`** ("Newsletter flow state"): signup posts
  to `marketing.principal.house/api-subscribe.php`, Mautic sends the DOI email, tracked
  links route through `go.operatingleader.com`, confirmation lands on
  `/confirm`.

### 🚀 Deploying
- **`README.md`** — the authoritative publish workflow, required pre-deploy checks, and
  known failure modes. **Read it before deploying.**
- **`DEPLOYMENT-GUIDE.md`** — step-by-step article publishing + deploy guide.
- **`scripts/verify-site.mjs`** — the verifier behind `npm run verify`.
- `dist/` — build output (generated; don't edit by hand).

---

## 4. Critical publishing rules (don't skip)

1. **Source of truth = repo + clean build + `npm run verify`.** A working URL does NOT
   prove the source is healthy. Cloudflare may still serve an old deploy.
2. **Always run `npm run check:publish` before deploying.** It builds and verifies that:
   - top nav links exist (`/blog`, `/playbook`, `/subscribe`, `/about`)
   - required routes build (`/`, `/blog/`, `/playbook/`, `/subscribe/`, `/about/`)
   - every `src/content/blog/*.md` builds to `dist/blog/<slug>/index.html`
   - every article appears on both the homepage and `/blog/`
3. **Deploy with clean Cloudflare env** (stale token env vars cause auth/account
   confusion). Use the exact command in `README.md`:
   ```sh
   env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_EMAIL_TOKEN HOME=/Users/frank \
     CLOUDFLARE_ACCOUNT_ID=71058e0bdf27f2cf29ba3fbab5c160aa \
     npx wrangler pages deploy dist --project-name=operatingleader --branch=main --commit-dirty=true
   ```
   **`--branch=main` is required.** Wrangler infers the deploy branch from the current git
   branch; if you are not on `main` (e.g. on `reconcile/origin-main`), omitting it deploys
   to a *preview* env and the live site does NOT update. Verify with
   `npx wrangler pages deployment list --project-name=operatingleader` (look for
   `Environment: Production`).

### Known failure modes (full detail in `README.md`)
- **Source drift / ghost page** — URL works but article missing from listings → the
  source `.md` is gone; restore it, rebuild, redeploy.
- **Navigation drift** — page exists but nav link gone → restore the link in
  `src/components/Header.astro`.
- **Cloudflare auth mismatch** — use the env-clean deploy command above.

---

## 5. Directory map (quick reference)

| Path | What it is | When to open |
|------|------------|--------------|
| `src/content/blog/` | Article source (`.md`) — source of truth | Writing/editing articles |
| `src/pages/` | Astro routes | Adding/editing pages |
| `src/pages/playbook.astro` | Playbook landing/sales page | Playbook changes |
| `src/components/` | Header, Footer, forms, SEO head | Nav, layout, meta, forms |
| `src/layouts/BlogPost.astro` | Article layout | Article page styling |
| `src/consts.ts` / `content.config.ts` | Site constants / frontmatter schema | Site meta / new frontmatter fields |
| `public/` | Static assets (images, fonts, OG, robots) | Adding images/assets |
| `workers/checkout/` | Cloudflare Worker for checkout | Payment/checkout |
| `scripts/verify-site.mjs` | Publish health checks | Debugging verify failures |
| `VOICE.md` | Jānis's voice & tone rulebook | Before writing any copy |
| `ARTICLE-GUIDE.md` | Blog article structure + pre-publish checklist | Before drafting an article |
| `FACTS.md` | Canonical operator facts (Pipedrive/Mailigen/Aerones) | Before citing any career specific |
| `NEWSLETTER.md` | The Operating Note production playbook | Drafting a newsletter issue |
| `NEWSLETTER-STYLE.md` | The Operating Note house email style | Styling newsletter HTML |
| `ILLUSTRATIONS.md` | Article illustration spec + export | Making a graphic for an article |
| `BRAND.md` | Brand + visual identity guide | Any visual or brand work |
| `README.md` | Publish workflow + failure modes | Before deploying |
| `DEPLOYMENT-GUIDE.md` | Article publish + deploy steps | Publishing an article |
| `.PROJECT-FILES/` | Non-build working files (playbook source, visuals, docs, experiments) | Playbook/visual production |
| `dist/` | Build output (generated) | Don't edit by hand |

---

## 6. Current state (per project brief)

- Site live; playbook published at `/playbook/`.
- Email list: ~10–100. Playbook revenue: $0 (goal $1,000).
- Social: LinkedIn active (Zernio scheduling). No dedicated SEO tooling yet.
- ~10 articles published (see `src/content/blog/`).
