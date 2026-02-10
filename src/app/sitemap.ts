/**
 * Sitemap generation for SEO
 * Automatically generates sitemap.xml for search engines
 */

import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/programs',
    '/demo',
    '/olympiad',
    '/schools',
    '/parents',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ];

  // Blog posts (add more as they are created)
  const blogPosts = [
    '/blog/why-ai-education-2026',
  ];

  // Generate sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/demo' ? 0.9 : 0.8,
  }));

  // Generate sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
