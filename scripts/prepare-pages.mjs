import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { renderPage } from '../dist-ssr/prerender.js';
import { getPageMetadata, publicPaths, siteUrl } from '../src/pageMetadata.js';

const template = await readFile('dist/index.html', 'utf8');
const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

for (const path of publicPaths) {
  const page = getPageMetadata(path);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const html = template
    .replace(/<title>.*?<\/title>/, () => `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/, () => `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical"[^>]*>/, () => `<link rel="canonical" href="${page.canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/, () => `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description"[^>]*>/, () => `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url"[^>]*>/, () => `<meta property="og:url" content="${page.canonical}" />`)
    .replace('<div id="root"></div>', () => `<div id="root">${renderPage(path)}</div>`);

  const directory = path === '/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}

const sitemapEntries = publicPaths.map(path => `  <url><loc>${getPageMetadata(path).canonical}</loc></url>`).join('\n');
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile('dist/404.html', '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page not found | PrimeMagnus Care Global</title><h1>Page not found</h1><p><a href="/">Return to PrimeMagnus Care Global</a></p></html>');
await writeFile('dist/.nojekyll', '');
await mkdir('dist/operate', { recursive: true });
for (const [oldPath, route] of Object.entries({ 'contact.html': '/contact/', 'services.html': '/services/', 'operate.html': '/about/', 'operate/index.html': '/about/' })) {
  await writeFile(`dist/${oldPath}`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="canonical" href="${siteUrl}${route}"><meta http-equiv="refresh" content="0;url=${route}"><title>Redirecting</title></head><body><a href="${route}">Continue to PMCG</a><script>location.replace('${route}'+location.search+location.hash)</script></body></html>`);
}
