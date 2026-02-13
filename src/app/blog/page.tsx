/**
 * Blog listing page - Insights & Resources
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { CTABanner } from '@/components/shared/CTABanner';
import { Badge } from '@/components/ui/Badge';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.blog;

const blogPosts = [
  {
    slug: 'why-ai-education-2026',
    title: 'Why AI Education Can\'t Wait Until 2030',
    excerpt:
      'The AI revolution is happening now. Here\'s why schools need to start preparing students today, not tomorrow.',
    date: '2026-01-15',
    author: 'Manvendra Kumar',
    readingTime: 5,
    tags: ['AI Education', 'Future of Work'],
    coverImage: null,
  },
  {
    slug: 'nep-2020-ai-guidelines',
    title: 'How NEP 2020 Mandates AI and Computational Thinking',
    excerpt:
      'A breakdown of the National Education Policy 2020 guidelines on AI education and what it means for your school.',
    date: '2026-01-10',
    author: 'OnliGrow Team',
    readingTime: 7,
    tags: ['NEP 2020', 'Policy'],
    coverImage: null,
  },
  {
    slug: 'top-ai-careers-students',
    title: '10 AI Careers Your Students Should Know About',
    excerpt:
      'From Machine Learning Engineers to AI Ethics Officers — the careers of tomorrow that students can prepare for today.',
    date: '2026-01-05',
    author: 'OnliGrow Team',
    readingTime: 6,
    tags: ['Careers', 'AI Jobs'],
    coverImage: null,
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights on AI education, career architecture, and the future of learning in India."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-lg transition-shadow border border-gray-100"
              >
                {/* Cover Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-creative-100 relative">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary-200 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="primary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 font-heading mb-2 group-hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime} min read
                      </span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 mt-4 text-primary-600 font-medium hover:underline"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder */}
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              More articles coming soon. Follow us on social media to stay updated!
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want AI Education Insights?"
        description="Follow our blog for the latest on AI education, career architecture, and school success stories."
      />
    </>
  );
}
