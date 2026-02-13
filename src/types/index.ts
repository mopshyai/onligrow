/**
 * TypeScript type definitions for OnliGrow website
 * All shared interfaces and types are defined here for consistency
 */

// ============================================
// TEAM & PEOPLE
// ============================================

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  linkedin?: string;
}

// ============================================
// PRODUCTS & SERVICES
// ============================================

export interface Product {
  name: string;
  duration: string;
  price: string;
  description: string;
  cta: string;
  href: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export interface Module {
  id: string;
  icon: string;
  iconName: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  topics: string[];
  color: string;
  hoverDetails: string;
  toolLogos?: string[];
  size?: 'normal' | 'large';
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ============================================
// NAVIGATION
// ============================================

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ============================================
// FORMS
// ============================================

export interface ContactFormData {
  schoolName: string;
  city: string;
  contactName: string;
  role?: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  studentCount?: string;
  message?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// ============================================
// BLOG
// ============================================

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  readingTime: number;
}

// ============================================
// TESTIMONIALS
// ============================================

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  school?: string;
  image?: string;
}

// ============================================
// SYSTEM & JOURNEY
// ============================================

export interface GradeInfo {
  grade: number;
  theme: string;
  tagline: string;
  hours: string;
  bridge?: string;
  description: string;
  outcomes: string[];
}

export interface CertificationLevel {
  level: 'bronze' | 'silver' | 'gold';
  label: string;
  icon: string;
  description: string;
}

export interface ModuleCertification {
  moduleId: string;
  moduleName: string;
  bronze: string;
  silver: string;
  gold: string;
}

export interface QuarterInfo {
  grade: number;
  quarter: number;
  label: string;
  modules: Record<string, string>;
  milestone: string;
  portfolio: string;
}

// ============================================
// COMPONENTS
// ============================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'whatsapp' | 'energy';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export type SectionBackground = 'white' | 'light' | 'primary' | 'dark' | 'gradient-soft' | 'gradient-dark';

// ============================================
// SEO
// ============================================

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

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
