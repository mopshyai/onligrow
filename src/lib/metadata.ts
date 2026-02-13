/**
 * SEO metadata configuration for all pages
 * Centralized metadata for consistency across the site
 */

import { type Metadata } from 'next';
import { SITE_CONFIG } from './constants';

const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AI education India',
    'student future architecture',
    '5-year education system',
    'school AI program',
    'career architecture students',
    'NEP 2020 AI',
    'AI olympiad India',
    'tier 2 tier 3 education',
    'edtech India',
    'student portfolio building',
    'school partnership program',
    'Haryana education',
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
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
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
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
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
};

export const pageMetadata = {
  home: {
    ...baseMetadata,
  },

  about: {
    title: 'Our Story — Built by People Who Lived the Gap',
    description:
      'Four co-founders from Tier-2 India building the operating system for student futures. Our mission, story, and the team behind OnliGrow.',
    openGraph: {
      title: 'Our Story | OnliGrow',
      description: 'Four co-founders from Tier-2 India building the operating system for student futures.',
    },
  },

  system: {
    title: 'The OnliGrow System — 5 Years, 8 Modules, Complete Student Transformation',
    description:
      'A 5-year operating system for student futures. AI education, career architecture, certifications, real projects, national competitions. Grades 8-12.',
    openGraph: {
      title: 'The OnliGrow System | OnliGrow',
      description: 'A 5-year operating system for student futures. Grades 8-12.',
    },
  },

  journey: {
    title: 'The 5-Year Student Journey — Grade 8 to Career-Ready',
    description:
      'What 5 years inside the OnliGrow system actually looks like — quarter by quarter. From curious to career-ready.',
    openGraph: {
      title: 'The 5-Year Student Journey | OnliGrow',
      description: 'Quarter-by-quarter journey from Grade 8 to career-ready.',
    },
  },

  modules: {
    title: '8 Modules — Complete Education Enhancement',
    description:
      'AI education, career architecture, English & life skills, business exposure, competitions, digital identity, school platform, and teacher upskilling — all inside your school.',
    openGraph: {
      title: '8 Modules | OnliGrow',
      description: 'AI, careers, English, business, competitions, digital tools — year-round partnership.',
    },
  },

  certifications: {
    title: 'OnliGrow Certifications — Skill-Based, Not Time-Based',
    description:
      'Bronze, Silver, and Gold certifications earned by demonstrating skill — not by showing up. A student who joins in Grade 10 can earn Gold in 1 year.',
    openGraph: {
      title: 'Certifications | OnliGrow',
      description: 'Skill-based certifications: Bronze, Silver, Gold. Not attendance awards.',
    },
  },

  demo: {
    title: 'Book a Free Demo — See It Before You Believe It',
    description:
      'One session. 45 minutes. Zero cost. Your students interact with real AI. You see the impact firsthand. Book your free demo now.',
    openGraph: {
      title: 'Book a Free Demo | OnliGrow',
      description: 'Schedule a FREE interactive AI demo session for your school.',
    },
  },

  olympiad: {
    title: 'OnliGrow Olympiad — India\'s First AI-Focused Inter-School Competition',
    description:
      'Three rounds. Thousands of students. One national stage. Grade 8-12. Any school. Any board. Launching September 2026.',
    openGraph: {
      title: 'OnliGrow Olympiad | OnliGrow',
      description: 'India\'s first national inter-school AI competition for grades 8-12.',
    },
  },

  schools: {
    title: 'For Schools — Make "Future-Ready" More Than a Brochure Claim',
    description:
      'Partner with OnliGrow. Our facilitators embed into your school. 8 modules year-round. Zero teacher burden. NEP 2020 aligned. Custom partnership plans.',
    openGraph: {
      title: 'For Schools | OnliGrow',
      description: 'Year-round education enhancement partnership for your school.',
    },
  },

  parents: {
    title: 'For Parents — Aapka Bachcha Future Ke Liye Tayyar Ho Raha Hai',
    description:
      'Learn how OnliGrow prepares your child for the future with AI skills, career guidance, professional tools, and real-world experience. Grades 8-12.',
    openGraph: {
      title: 'For Parents | OnliGrow',
      description: 'How OnliGrow prepares your child for the future.',
    },
  },

  blog: {
    title: 'Blog — Insights on AI Education and Student Futures',
    description:
      'Insights on AI education, career architecture, and the future of learning. For students, parents, and educators.',
    openGraph: {
      title: 'Blog | OnliGrow',
      description: 'Insights on AI education and student futures.',
    },
  },

  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with OnliGrow. Book a demo, ask questions, or explore partnership opportunities.',
    openGraph: {
      title: 'Contact Us | OnliGrow',
      description: 'Get in touch with OnliGrow for demos and partnerships.',
    },
  },

  privacy: {
    title: 'Privacy Policy',
    description:
      'OnliGrow privacy policy — how we collect, use, and protect your data. Committed to student safety and data protection.',
    openGraph: {
      title: 'Privacy Policy | OnliGrow',
      description: 'How OnliGrow collects, uses, and protects your data.',
    },
  },

  terms: {
    title: 'Terms of Service',
    description:
      'OnliGrow terms of service and conditions for using our website and services.',
    openGraph: {
      title: 'Terms of Service | OnliGrow',
      description: 'Terms and conditions for using OnliGrow services.',
    },
  },
} as const;

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
