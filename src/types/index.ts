/**
 * TypeScript type definitions for OnliGrow website
 * All shared interfaces and types are defined here for consistency
 */

// ============================================
// TEAM & PEOPLE
// ============================================

/**
 * Team member information for founder/team cards
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

// ============================================
// PRODUCTS & SERVICES
// ============================================

/**
 * Product/service offering details
 */
export interface Product {
  name: string;
  duration: string;
  price: string;
  description: string;
  cta: string;
  href: string;
  icon: 'presentation' | 'graduationCap' | 'trophy' | 'handshake' | string;
}

/**
 * Benefit item for "Why Schools Choose Us" section
 */
export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

/**
 * Module/Program offering details
 */
export interface Module {
  id: string;
  icon: string;
  iconName: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  topics: string[];
}

/**
 * Step in "How It Works" process
 */
export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

// ============================================
// NAVIGATION
// ============================================

/**
 * Navigation link item
 */
export interface NavLink {
  label: string;
  href: string;
}

// ============================================
// FORMS
// ============================================

/**
 * Contact/Demo booking form data
 */
export interface ContactFormData {
  schoolName: string;
  city: string;
  contactName: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  message?: string;
}

/**
 * API response for contact form submission
 */
export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// ============================================
// BLOG
// ============================================

/**
 * Blog post frontmatter metadata
 */
export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  slug: string;
}

/**
 * Full blog post with content
 */
export interface BlogPost extends BlogPostMeta {
  content: string;
  readingTime: number;
}

// ============================================
// TESTIMONIALS
// ============================================

/**
 * Testimonial from school/student/parent
 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  school?: string;
  image?: string;
}

// ============================================
// COMPONENTS
// ============================================

/**
 * Button component variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'whatsapp';

/**
 * Button component sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Heading levels for Heading component
 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

/**
 * Section background color options
 */
export type SectionBackground = 'white' | 'light' | 'primary' | 'dark';

// ============================================
// SEO
// ============================================

/**
 * Page metadata for SEO
 */
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

/**
 * JSON-LD Organization schema
 */
export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  founders: {
    '@type': string;
    name: string;
  }[];
  address: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

/**
 * JSON-LD Article schema for blog posts
 */
export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  author: {
    '@type': string;
    name: string;
  };
  datePublished: string;
  dateModified: string;
  image?: string;
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}
