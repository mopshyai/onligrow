/**
 * Individual blog post page
 * Displays MDX content with custom components
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { CTABanner } from '@/components/shared/CTABanner';
import { ShareButton } from '@/components/shared/ShareButton';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { ArticleSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { generateBlogPostMetadata } from '@/lib/metadata';

/**
 * Blog post data (will be replaced with actual MDX fetching)
 */
const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: number;
  tags: string[];
  content: string;
}> = {
  'why-ai-education-2026': {
    title: "Why AI Education Can't Wait Until 2030",
    description:
      "The AI revolution is happening now. Here's why schools need to start preparing students today, not tomorrow.",
    date: '2026-01-15',
    author: 'Manvendra Kumar',
    readingTime: 5,
    tags: ['AI Education', 'Future of Work'],
    content: `
## The AI Revolution Is Here

Every few decades, a technology emerges that fundamentally changes how we live and work. The printing press. The steam engine. The internet. Each of these revolutions rewarded those who adapted early and left behind those who waited.

**Artificial Intelligence is that technology for our generation.**

But unlike previous revolutions that took decades to unfold, AI is moving at unprecedented speed. ChatGPT reached 100 million users in just two months — the fastest adoption of any technology in human history.

## The Problem: Schools Are Falling Behind

While AI reshapes industries, most schools — especially in Tier-2 and Tier-3 cities — are still teaching the same curriculum they taught 20 years ago:

- No exposure to AI tools or concepts
- Career guidance limited to traditional paths
- Teachers untrained in emerging technologies
- Infrastructure gaps widening the urban-rural divide

The result? **8 crore students** entering a workforce they're not prepared for.

## Why 2030 Is Too Late

Some argue that AI education can wait — that students should focus on "fundamentals" first. This argument misses a crucial point:

**AI literacy IS fundamental in the 2026 economy.**

Consider these facts:
- By 2030, AI will impact **85% of jobs** across all industries
- AI-related roles already command **30-50% higher salaries**
- Countries like Singapore and Finland have made AI education mandatory
- Indian companies are struggling to find AI-literate talent

Every year we delay AI education is a year our students fall further behind their global peers.

## What Students Need to Learn

AI education isn't about turning every student into a programmer. It's about:

1. **Understanding AI**: What it is, how it works, what it can (and can't) do
2. **Using AI Tools**: Practical skills with ChatGPT, image generators, and more
3. **Critical Thinking**: Evaluating AI outputs, recognizing biases, ethical considerations
4. **Career Awareness**: The vast landscape of AI-adjacent careers across all fields

## The OnliGrow Approach

At OnliGrow, we've designed our programs specifically for Tier-2/3 India:

- **Bilingual delivery** (Hindi + English) for maximum accessibility
- **NEP 2020 aligned** curriculum that fits existing school structures
- **Zero teacher burden** — we bring trained facilitators
- **Hands-on learning** — students actually use AI tools, not just theory

## Taking Action

If you're a school administrator, the time to act is now. A free demo session costs nothing and shows exactly what AI education can look like at your school.

If you're a parent, advocate for AI education at your child's school. Share this article with principals and teachers.

The students who learn about AI today will be the leaders of tomorrow. Let's make sure no child is left behind.

---

*OnliGrow is on a mission to bring AI education to every school in India. [Book a free demo](/demo) to see how we can help your school.*
    `,
  },
};

/**
 * Generate metadata for the page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return generateBlogPostMetadata(post.title, post.description, undefined, post.date);
}

/**
 * Generate static paths for all blog posts
 */
export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

/**
 * Format date helper
 */
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <SectionWrapper>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-dark mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title={post.title}
        description={post.description}
        author={post.author}
        datePublished={post.date}
        url={`${SITE_CONFIG.url}/blog/${slug}`}
      />

      {/* Page Hero */}
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              {post.readingTime} min read
            </span>
            <span className="text-gray-600">By {post.author}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Content */}
          <article className="prose prose-lg prose-gray max-w-none prose-headings:font-heading prose-headings:text-dark prose-a:text-primary prose-strong:text-dark">
            {/* Simple markdown-like rendering */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.startsWith('---')) {
                return <hr key={index} className="my-8" />;
              }
              if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                return (
                  <p key={index} className="italic text-gray-600">
                    {paragraph.replace(/\*/g, '')}
                  </p>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p
                    key={index}
                    className="my-4"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>'),
                    }}
                  />
                );
              }
              return null;
            })}
          </article>

          {/* Share & Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <ShareButton title={post.title} />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title="Ready to Bring AI Education to Your School?"
        description="Book a free demo to see our programs in action."
      />
    </>
  );
}
