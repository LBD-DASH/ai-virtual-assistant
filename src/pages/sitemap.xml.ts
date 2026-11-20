import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../lib/url';
export const GET: APIRoute = async ({ site }) => {
  const services = await getCollection('services');
  const paths = ['', 'services/', ...services.map((s) => `services/${s.id}/`), 'how-it-works/', 'faq/', 'contact/', 'about/', 'privacy/', 'disclosure/'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((p) => `  <url><loc>${absUrl(p, site)}</loc></url>`).join('\n') + `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
