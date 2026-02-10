/**
 * SEO metadata configuration for all pages
 * Centralized metadata for consistency across the site
 */

import { type Metadata } from 'next';
import { SITE_CONFIG } from './constants';

/**
 * Base metadata shared across all pages
 */
const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AI education',
    'AI for schools',
    'artificial intelligence education India',
    'school AI program',
    'career guidance students',
    'NEP 2020 AI',
    'AI olympiad India',
    'tier 2 tier 3 education',
    'edtech India',
    'school programs Haryana',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
    creator: '@onligrow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

/**
 * Page-specific metadata configurations
 */
export const pageMetadata = {
  home: {
    ...baseMetadata,
  },

  about: {
    title: 'About Us',
    description:
      'Meet the OnliGrow team bringing AI education to schools across India. Our mission, story, and the people behind the movement.',
    openGraph: {
      title: 'About Us | OnliGrow',
      description:
        'Meet the OnliGrow team bringing AI education to schools across India.',
    },
  },

  programs: {
    title: 'What We Offer — 8 Modules for Complete School Enhancement | OnliGrow',
    description:
      'AI education, career guidance, English & life skills, business exposure, competitions, .edu emails, school platform, and teacher training — all inside your school.',
    openGraph: {
      title: 'What We Offer — 8 Modules for Complete School Enhancement | OnliGrow',
      description:
        'AI education, career guidance, life skills, competitions, digital tools — year-round partnership for your school.',
    },
  },

  demo: {
    title: 'Book a Free Demo',
    description:
      'Schedule a FREE 45-60 minute interactive AI demo session for your school. No cost, no commitment. We bring everything to your school.',
    openGraph: {
      title: 'Book a Free Demo | OnliGrow',
      description:
        'Schedule a FREE interactive AI demo session for your school.',
    },
  },

  olympiad: {
    title: 'OnliGrow AI Olympiad',
    description:
      'Register your school for the OnliGrow AI Olympiad - India\'s first national inter-school AI competition. 3 rounds, prizes, and recognition.',
    openGraph: {
      title: 'OnliGrow AI Olympiad | OnliGrow',
      description:
        "India's first national inter-school AI competition for grades 8-12.",
    },
  },

  schools: {
    title: 'For Schools - Partnership',
    description:
      'Partner with OnliGrow to bring AI education to your school. Zero teacher burden, NEP 2020 aligned curriculum, certificates for students.',
    openGraph: {
      title: 'For Schools | OnliGrow',
      description:
        'Partner with OnliGrow to bring AI education to your school.',
    },
  },

  parents: {
    title: 'For Parents',
    description:
      'Learn how OnliGrow AI programs prepare your child for the future. Safe, engaging, and educational content for grades 8-12.',
    openGraph: {
      title: 'For Parents | OnliGrow',
      description: 'How OnliGrow AI programs prepare your child for the future.',
    },
  },

  blog: {
    title: 'Blog',
    description:
      'Insights on AI education, career guidance, and the future of learning. Tips for students, parents, and educators.',
    openGraph: {
      title: 'Blog | OnliGrow',
      description: 'Insights on AI education and the future of learning.',
    },
  },

  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with OnliGrow. Book a demo, ask questions, or explore partnership opportunities. We\'re here to help.',
    openGraph: {
      title: 'Contact Us | OnliGrow',
      description: 'Get in touch with OnliGrow for demos and partnerships.',
    },
  },

  privacy: {
    title: 'Privacy Policy',
    description:
      'OnliGrow privacy policy - how we collect, use, and protect your data. Committed to student safety and data protection.',
    openGraph: {
      title: 'Privacy Policy | OnliGrow',
      description: 'How OnliGrow collects, uses, and protects your data.',
    },
  },

  terms: {
    title: 'Terms of Service',
    description:
      'OnliGrow terms of service and conditions for using our website and programs.',
    openGraph: {
      title: 'Terms of Service | OnliGrow',
      description: 'Terms and conditions for using OnliGrow services.',
    },
  },
} as const;

/**
 * Generate metadata for a blog post
 */
export function generateBlogPostMetadata(
  title: string,
  description: string,
  coverImage?: string,
  date?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      images: coverImage ? [{ url: coverImage }] : [{ url: '/og-image.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: coverImage ? [coverImage] : ['/og-image.png'],
    },
  };
}

export default baseMetadata;
