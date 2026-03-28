# Operating Leader Deployment Guide

## Overview
This site is deployed on Cloudflare Pages using direct upload (not GitHub integration).
Articles are written in Markdown and built with Astro.

## Quick Article Publishing Process

### 1. Create New Article
```bash
cd ~/Projects/operatingleader
```

Create a new file in `src/content/blog/` with the naming pattern:
`your-article-title-in-kebab-case.md`

### 2. Article Format
Every article MUST have this frontmatter structure:
```markdown
---
title: "Your Article Title Here"
description: "SEO meta description (150-160 characters)"
pubDate: 2026-03-28
author: "Janis Rozenblats"
tags: ["leadership", "product-management", "add-relevant-tags"]
---

Your article content starts here...
```

### 3. Add Images
- Place images in `public/images/`
- Reference in articles as: `![Alt text](/images/your-image.png)`
- Optimize images before upload (use PNG for illustrations, JPG for photos)

### 4. Build and Deploy
```bash
# Build the site
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=operatingleader
```

## Full Step-by-Step for New Articles

1. **Write the article**
   ```bash
   cd ~/Projects/operatingleader
   # Create new article file
   touch src/content/blog/my-new-article.md
   ```

2. **Add images (if any)**
   ```bash
   # Copy image to public folder
   cp ~/Downloads/article-image.png public/images/
   ```

3. **Preview locally (optional)**
   ```bash
   npm run dev
   # Visit http://localhost:4321 to preview
   ```

4. **Commit to Git**
   ```bash
   git add -A
   git commit -m "Add article: [Article Title]"
   git push origin main
   ```

5. **Deploy to production**
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=operatingleader
   ```

## Important Notes

### Current Setup
- **Hosting**: Cloudflare Pages (direct upload mode)
- **Domain**: operatingleader.com
- **Build Tool**: Astro
- **Deployment**: Manual via Wrangler CLI
- **GitHub**: Repository exists but NOT connected for auto-deploy

### Why Manual Deployment?
The Cloudflare Pages project was created with direct upload instead of GitHub integration. This means:
- ✅ Full control over when to deploy
- ✅ Can deploy without pushing to GitHub
- ❌ No automatic deployments on git push
- ❌ Need to run deploy command manually

### To Switch to Auto-Deploy (Future Option)
If you want automatic deployment on GitHub push:
1. Delete current Pages project in Cloudflare dashboard
2. Create new Pages project with "Connect to Git"
3. Select `principal-house/operatingleader` repository
4. Configure:
   - Build command: `npm run build`
   - Build output: `dist`
   - Root directory: `/`

## Troubleshooting

### "Article not showing on website"
1. Check if build succeeded: `npm run build`
2. Verify article appears in build output
3. Run deployment: `npx wrangler pages deploy dist --project-name=operatingleader`
4. Clear browser cache or check in incognito mode
5. Wait 2-3 minutes for CDN propagation

### "Wrangler command not found"
```bash
npm install -g wrangler
# or use npx (no install needed)
npx wrangler pages deploy...
```

### "Images not loading"
- Ensure images are in `public/images/` folder
- Use absolute paths in markdown: `/images/filename.png`
- Check filename case sensitivity

## Quick Commands Reference

```bash
# Navigate to project
cd ~/Projects/operatingleader

# Create new article
touch src/content/blog/article-name.md

# Preview locally
npm run dev

# Build site
npm run build

# Deploy to production
npx wrangler pages deploy dist --project-name=operatingleader

# Check deployment history
npx wrangler pages deployment list --project-name=operatingleader
```

## Article Checklist
- [ ] Frontmatter complete (title, description, pubDate, author, tags)
- [ ] Images optimized and in public/images/
- [ ] Links checked
- [ ] Grammar/spelling reviewed
- [ ] SEO description under 160 characters
- [ ] Built successfully with `npm run build`
- [ ] Deployed with wrangler
- [ ] Verified live on operatingleader.com

---

Last updated: 2026-03-28
Deployment method: Cloudflare Pages (Direct Upload)