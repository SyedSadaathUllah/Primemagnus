import { mkdir, readFile, writeFile } from 'node:fs/promises';

// GitHub Pages has no SPA rewrites: serve the React shell at every public route.
const routes = ['about', 'services', 'digital-ai', 'international-healthcare', 'case-studies', 'contact', 'operate'];
const html = await readFile('dist/index.html', 'utf8');
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html);
}
await writeFile('dist/404.html', html);
await writeFile('dist/.nojekyll', '');
for (const [oldPath, route] of Object.entries({ 'contact.html': '/contact', 'services.html': '/services', 'operate.html': '/about' })) {
  await writeFile(`dist/${oldPath}`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${route}"><title>Redirecting</title></head><body><a href="${route}">Continue to PMCG</a><script>location.replace('${route}'+location.search+location.hash)</script></body></html>`);
}
