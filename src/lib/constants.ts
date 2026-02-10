/**
 * Site-wide constants for OnliGrow website
 * Centralized configuration for easy maintenance
 */

import type { TeamMember, Product, Benefit, HowItWorksStep, NavLink, Module } from '@/types';

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: 'OnliGrow',
  legalName: 'OnliGrow EdTech Private Limited',
  tagline: 'Future-Ready Education for Every Student',
  description:
    'We partner with schools to bring AI education, career guidance, life skills, competitions, and digital tools to students who deserve more than textbooks.',
  url: 'https://onligrow.com',
  founded: 2026,
  locale: 'en-IN',
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT = {
  email: 'info@onligrow.com',
  teamEmail: 'team@onligrow.com',
  phone: '+91-XXXXXXXXXX',
  whatsappNumber: '91XXXXXXXXXX',
  whatsappLink:
    'https://wa.me/91XXXXXXXXXX?text=Hi%20OnliGrow%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs.',
  address: 'Haryana, India',
} as const;

// ============================================
// SOCIAL MEDIA LINKS
// ============================================

export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@onligrow',
  instagram: 'https://instagram.com/onligrow',
  linkedin: 'https://linkedin.com/company/onligrow',
  twitter: 'https://twitter.com/onligrow',
} as const;

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Offer', href: '/programs' },
  { label: 'Olympiad', href: '/olympiad' },
  { label: 'For Schools', href: '/schools' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// ============================================
// TEAM MEMBERS
// ============================================

export const TEAM: TeamMember[] = [
  {
    name: 'Manvendra Kumar',
    role: 'CEO & Co-Founder',
    bio: 'MS from University of Pittsburgh. Built automation systems at Redo. Former experience at Volvo Group, HP, and Beats by Dre. Leads product, technology, and strategy.',
    image: '/images/team/manvendra.webp',
    linkedin: '',
  },
  {
    name: 'Dipti',
    role: 'COO & Co-Founder',
    bio: 'Ground operations expert with deep roots in Haryana. Manages school partnerships, facilitator network, and on-ground execution.',
    image: '/images/team/dipti.webp',
    linkedin: '',
  },
  {
    name: 'Harsh',
    role: 'CTO & Co-Founder',
    bio: 'Curriculum designer and tech lead. Builds the platform, designs the learning experience, and ensures everything works for real classrooms.',
    image: '/images/team/harsh.webp',
    linkedin: '',
  },
  {
    name: 'Ayush',
    role: 'CMO & Co-Founder',
    bio: 'Brand architect and marketing strategist. Manages OnliGrow\'s voice across every channel — YouTube to school WhatsApp groups.',
    image: '/images/team/ayush.webp',
    linkedin: '',
  },
];

// ============================================
// PRODUCTS & SERVICES
// ============================================

export const PRODUCTS: Product[] = [
  {
    name: 'Free Demo Session',
    duration: '45-60 minutes',
    price: 'FREE',
    description:
      'A 45-60 minute interactive session inside your school. Students experience live AI demos, explore future careers, and participate in a mini competition. We bring everything — you just need a room and a projector.',
    cta: 'Book Demo',
    href: '/demo',
    icon: 'presentation',
  },
  {
    name: 'Free 3-Month Pilot',
    duration: '3 months',
    price: 'FREE',
    description:
      'Not sure yet? We\'ll run a complete 3-month pilot for 1-2 classes — totally free. Experience the full OnliGrow partnership before any commitment.',
    cta: 'Learn About the Pilot',
    href: '/schools',
    icon: 'handshake',
  },
  {
    name: 'OnliGrow Olympiad',
    duration: '3 rounds',
    price: 'Launching September 2026',
    description:
      'India\'s first AI-focused inter-school competition. Three rounds, national recognition. Open to any school, any board. Your students get a stage to shine.',
    cta: 'Register Interest',
    href: '/olympiad',
    icon: 'trophy',
  },
];

// ============================================
// 8 MODULES
// ============================================

export const MODULES: Module[] = [
  {
    id: 'ai-education',
    icon: '🤖',
    iconName: 'cpu',
    name: 'AI Education',
    shortName: 'AI Education',
    tagline: 'From "What is AI?" to building real projects',
    description:
      'A structured, age-appropriate journey into artificial intelligence and modern technology. Students don\'t just learn about AI — they use it. They build chatbots, create AI-generated art, analyze data, and understand how the technology reshaping every industry actually works.',
    topics: [
      'What is AI? History, types, and real-world examples',
      'How machine learning works — patterns, data, predictions',
      'AI in healthcare, agriculture, entertainment, and education',
      'Responsible AI — ethics, bias, privacy, and safety',
      'Hands-on projects using no-code AI platforms',
      'Final project + certification ceremony',
    ],
  },
  {
    id: 'career-guidance',
    icon: '🎯',
    iconName: 'compass',
    name: 'Career Guidance & Counselling',
    shortName: 'Career Guidance',
    tagline: 'Beyond Doctor, Engineer, CA',
    description:
      'Most students choose their career path based on what their neighbor\'s son did. We change that. Every student gets a psychometric assessment, exposure to 50+ career paths, and a personal career roadmap. We bring real professionals from companies like TCS, Google, and startups into monthly speaker sessions.',
    topics: [
      'Psychometric assessment (aptitude, interest, personality)',
      'Exploration of 50+ career paths across tech, creative, healthcare, business, and government',
      'Monthly industry speaker sessions — real professionals, real stories',
      'Individual career roadmap for grade 9+',
      'Quarterly parent career awareness workshops',
    ],
  },
  {
    id: 'english-life-skills',
    icon: '🗣️',
    iconName: 'messageCircle',
    name: 'English & Life Skills',
    shortName: 'English & Life Skills',
    tagline: 'Confidence that goes beyond marks',
    description:
      'Even English-medium schools in Tier-2/3 cities often lack structured spoken English training. We build real communication confidence — not grammar drills, but the ability to speak up, present ideas, handle interviews, and express themselves professionally.',
    topics: [
      'Spoken English — real conversation, not textbook exercises',
      'Public speaking and presentation skills',
      'Debate and argumentation',
      'Interview preparation (competitions, college admissions, jobs)',
      'Emotional intelligence and leadership',
      'Professional writing — essays, emails, communication',
    ],
  },
  {
    id: 'business-freelancing',
    icon: '💼',
    iconName: 'briefcase',
    name: 'Business & Freelancing',
    shortName: 'Business & Freelancing',
    tagline: 'Think like a founder, earn like a freelancer',
    description:
      'Students learn how businesses actually work — not from a textbook, but by building their own ideas. They explore entrepreneurship, understand the startup world, and discover digital freelancing opportunities on platforms like Fiverr and Upwork.',
    topics: [
      'Entrepreneurship basics — startups, revenue models, problem-solving',
      'Lean Startup method — customer interviews, MVPs',
      'Digital freelancing — Fiverr, Upwork, remote work',
      'Financial literacy — budgeting, saving, basic investing',
      'Pitch competitions — students present ideas to judges',
    ],
  },
  {
    id: 'competitions',
    icon: '🏆',
    iconName: 'trophy',
    name: 'Competitions & Exposure',
    shortName: 'Competitions',
    tagline: 'A national stage for small-town talent',
    description:
      'City students compete in hackathons, olympiads, and Model UN. Our students didn\'t even know these existed. We register, prepare, and support students for national and international competitions — plus run the OnliGrow Olympiad across all partner schools.',
    topics: [
      'Registration and prep for national/international competitions',
      'OnliGrow Olympiad — AI-focused inter-school competition',
      'Inter-school competitions within the OnliGrow network',
      'Hackathons, coding challenges, science olympiads, debate tournaments',
      'Certificates and recognition for every participant',
    ],
  },
  {
    id: 'digital-tools',
    icon: '📧',
    iconName: 'mail',
    name: '.edu Email & Digital Tools',
    shortName: '.edu Email & Tools',
    tagline: '₹15,000+ worth of professional tools — free for every student',
    description:
      'Every student gets a professional .edu email address that unlocks a massive toolkit. Metro students get these in grade 8. Our students get them from day one of the partnership.',
    topics: [
      'Professional .edu email address',
      'GitHub Student Developer Pack (₹15,000+ value) — GitHub Pro, JetBrains, DigitalOcean credits',
      'Microsoft Office 365 Education — Word, Excel, PowerPoint, Teams, 1TB OneDrive',
      'Google Workspace for Education — Gmail, Drive, Docs, Classroom',
      'Canva Pro for Education — unlimited design tools',
      'Additional: Figma, Notion, and more',
    ],
  },
  {
    id: 'school-platform',
    icon: '🏫',
    iconName: 'layoutDashboard',
    name: 'School Management Platform',
    shortName: 'School Platform',
    tagline: 'Your school, digitally organized',
    description:
      'We don\'t just help students — we help the school run better. Our platform digitizes attendance, timetables, fee management, parent communication, and student analytics. One dashboard for everything.',
    topics: [
      'Digital attendance tracking',
      'Timetable management',
      'Fee management and parent payment tracking',
      'Parent communication portal',
      'Student progress analytics dashboard',
      'Report generation for school management',
    ],
  },
  {
    id: 'teacher-training',
    icon: '👩‍🏫',
    iconName: 'graduationCap',
    name: 'Teacher Upskilling',
    shortName: 'Teacher Training',
    tagline: 'Empowering teachers, not replacing them',
    description:
      'We never replace teachers. We empower them. Quarterly workshops help teachers learn AI tools, modern teaching methods, digital classroom management, and NEP 2020 implementation — so they grow alongside their students.',
    topics: [
      'Quarterly workshops on AI tools for teachers',
      'Modern pedagogy — project-based learning, flipped classroom',
      'Digital classroom management — Google Classroom, LMS',
      'NEP 2020 implementation guidance',
    ],
  },
];

// ============================================
// TRUST & CREDIBILITY
// ============================================

export const TRUST_BADGES = [
  'NEP 2020 Aligned',
  'Grade 6-12',
  'Hindi + English',
  'Free 3-Month Pilot',
] as const;

// ============================================
// BENEFITS (WHY SCHOOLS CHOOSE US)
// ============================================

export const BENEFITS: Benefit[] = [
  {
    title: '3-Month Free Pilot',
    description: 'Experience the full partnership before spending anything. If it doesn\'t work, you owe us nothing.',
    icon: 'shield',
  },
  {
    title: 'NEP 2020 Aligned',
    description: 'Every module maps to NEP 2020 requirements — AI, vocational skills, career guidance, holistic development.',
    icon: 'checkCircle',
  },
  {
    title: 'Zero Teacher Burden',
    description: 'Our trained facilitators deliver every session. Your teachers don\'t prepare, learn, or sacrifice time.',
    icon: 'users',
  },
  {
    title: '8 Modules, One Partner',
    description: 'AI, careers, English, business, competitions, digital tools, school platform, teacher training — all from one partner.',
    icon: 'layers',
  },
  {
    title: 'National Olympiad',
    description: 'Your students compete across India. Small-town talent on a big stage. No other school in your city offers this.',
    icon: 'trophy',
  },
  {
    title: '.edu Emails + ₹15K Tools',
    description: 'Every student gets a professional email and access to GitHub, Microsoft 365, Google Workspace, Canva Pro, and more.',
    icon: 'mail',
  },
];

// ============================================
// HOW IT WORKS STEPS
// ============================================

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Book a Free Demo',
    description: 'Reach out via WhatsApp or our form. We come to your school for a free 45-60 minute session. Zero cost.',
  },
  {
    step: 2,
    title: 'Students Experience It',
    description: 'Our facilitator runs an interactive AI session. Students try real tools, explore careers, compete in a quiz. You see the impact firsthand.',
  },
  {
    step: 3,
    title: 'Free 3-Month Pilot',
    description: 'Loved the demo? We run a full pilot for 1-2 classes — 3 months, completely free. You experience the partnership before committing.',
  },
  {
    step: 4,
    title: 'Year-Round Partnership',
    description: 'After the pilot, we design a year-long plan across all modules. Our facilitators become a regular part of your school. Students grow all year.',
  },
];

// ============================================
// IMPACT NUMBERS
// ============================================
// Update these numbers weekly as school outreach progresses

export const IMPACT_NUMBERS = {
  schools: { value: 0, suffix: '+', label: 'Schools Reached', subLabel: 'Growing weekly' },
  students: { value: 0, suffix: '+', label: 'Students Impacted', subLabel: 'And counting' },
  states: { value: 1, suffix: '', label: 'State Active', subLabel: 'Haryana — expanding soon' },
  modules: { value: 8, suffix: '', label: 'Modules Offered', subLabel: 'One complete partnership' },
} as const;

// ============================================
// FOOTER LINKS
// ============================================

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'What We Offer', href: '/programs' },
    { label: 'Olympiad', href: '/olympiad' },
    { label: 'For Schools', href: '/schools' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  forYou: [
    { label: 'For Schools', href: '/schools' },
    { label: 'For Parents', href: '/parents' },
    { label: 'Book a Demo', href: '/demo' },
    { label: 'School Partnership', href: '/schools' },
    { label: 'OnliGrow Olympiad', href: '/olympiad' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;
