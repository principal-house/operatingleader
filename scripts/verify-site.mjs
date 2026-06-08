import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const blogDir = path.join(root, 'src/content/blog');
const distDir = path.join(root, 'dist');
const headerPath = path.join(root, 'src/components/Header.astro');

const requiredRoutes = [
  '/',
  '/blog/',
  '/playbook/',
  '/subscribe/',
  '/about/',
];

const requiredNavLinks = ['/blog', '/playbook', '/subscribe', '/about'];

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`✅ ${message}`);
}

function exists(p) {
  return fs.existsSync(p);
}

if (!exists(blogDir)) {
  fail('Missing src/content/blog directory');
  process.exit(1);
}

const blogFiles = fs.readdirSync(blogDir)
  .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
  .sort();

if (blogFiles.length === 0) {
  fail('No blog source files found in src/content/blog');
}

ok(`Found ${blogFiles.length} blog source files`);

const header = fs.readFileSync(headerPath, 'utf8');
for (const navLink of requiredNavLinks) {
  if (!header.includes(`href="${navLink}"`)) {
    fail(`Header is missing required nav link: ${navLink}`);
  } else {
    ok(`Header contains ${navLink}`);
  }
}

for (const route of requiredRoutes) {
  const filePath = route === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, route.replace(/^\//, ''), 'index.html');

  if (!exists(filePath)) {
    fail(`Built route missing: ${route} -> ${filePath}`);
  } else {
    ok(`Built route present: ${route}`);
  }
}

const homeHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const blogIndexHtml = fs.readFileSync(path.join(distDir, 'blog/index.html'), 'utf8');

for (const file of blogFiles) {
  const slug = file.replace(/\.(md|mdx)$/,'');
  const builtArticle = path.join(distDir, 'blog', slug, 'index.html');

  if (!exists(builtArticle)) {
    fail(`Blog source missing built article: ${slug}`);
    continue;
  }
  ok(`Built article present: /blog/${slug}/`);

  const href = `/blog/${slug}/`;
  if (!homeHtml.includes(href)) {
    fail(`Homepage is missing article link: ${href}`);
  }
  if (!blogIndexHtml.includes(href)) {
    fail(`Blog index is missing article link: ${href}`);
  }
}

if (process.exitCode) {
  console.error('\nVerification failed. Do not deploy until all checks pass.');
} else {
  console.log('\nAll Operating Leader publish checks passed. Safe to deploy.');
}
