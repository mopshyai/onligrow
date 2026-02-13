/**
 * Sitemap generation for SEO
 */

import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    '',
    '/about',
    '/system',
    '/system/journey',
    '/system/modules',
    '/system/certifications',
    '/demo',
    '/olympiad',
    '/schools',
    '/parents',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const blogPosts = [
    '/blog/why-ai-education-2026',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/demo' ? 0.9 : path.startsWith('/system') ? 0.85 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
