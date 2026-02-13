/**
 * Site-wide constants for OnliGrow website
 * Centralized configuration for easy maintenance
 */

import type { TeamMember, Benefit, HowItWorksStep, NavLink, Module } from '@/types';

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: 'OnliGrow',
  legalName: 'OnliGrow EdTech Pvt Ltd',
  tagline: 'The Operating System for Student Futures',
  description:
    'A 5-year operating system that transforms school students into career-ready, portfolio-carrying, nationally-competitive young adults. AI education, career architecture, life skills, national competitions, and professional tools — delivered inside your school.',
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
  {
    label: 'The System',
    href: '/system',
    children: [
      { label: 'Overview', href: '/system' },
      { label: 'Student Journey', href: '/system/journey' },
      { label: 'Modules', href: '/system/modules' },
      { label: 'Certifications', href: '/system/certifications' },
    ],
  },
  { label: 'Olympiad', href: '/olympiad' },
  { label: 'For Schools', href: '/schools' },
  { label: 'For Parents', href: '/parents' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// ============================================
// TEAM MEMBERS
// ============================================

export const TEAM: TeamMember[] = [
  {
    name: 'Manvendra Kumar',
    role: 'Co-Founder',
    initials: 'MK',
    bio: 'MS in MIS from University of Pittsburgh. Built claims automation from scratch at Redo using AWS, MongoDB, and Node.js. Previous stints at Volvo Group, HP, and Beats by Dre. Grew up in UP, studied in the US, saw firsthand how geography determines opportunity. Owns product strategy, platform architecture, and curriculum design.',
    image: '/images/team/manvendra.webp',
    linkedin: '',
  },
  {
    name: 'Dipti',
    role: 'Co-Founder',
    initials: 'D',
    bio: 'Deep roots in India\'s school ecosystem with a sharp instinct for what principals care about and what parents will pay for. Leads go-to-market, school outreach, partnerships, and brand. If a school is partnering with OnliGrow — Dipti made it happen.',
    image: '/images/team/dipti.webp',
    linkedin: '',
  },
  {
    name: 'Ayush Dixit',
    role: 'Co-Founder',
    initials: 'A',
    bio: 'The operational backbone. Handles incorporation, contracts, regulatory filings, GST/TDS, IP protection, and DPDP compliance — everything that keeps the company legally airtight while the others move fast. Makes sure OnliGrow runs clean from day one.',
    image: '/images/team/ayush.webp',
    linkedin: '',
  },
];

// ============================================
// 8 MODULES
// ============================================

export const MODULES: Module[] = [
  {
    id: 'ai-technology',
    icon: '🤖',
    iconName: 'cpu',
    name: 'AI & Technology',
    shortName: 'AI & Tech',
    tagline: 'From "What is AI?" to deploying real projects.',
    description:
      'A structured, age-appropriate journey into artificial intelligence. Students don\'t just learn about AI — they build chatbots, train ML models, write Python, and deploy real projects.',
    topics: [
      'AI foundations and real-world applications',
      'Machine learning — patterns, data, predictions',
      'Scratch AI games and chatbot building',
      'Python for AI and Generative AI',
      'Capstone project deployed in the real world',
    ],
    color: 'primary',
    hoverDetails: 'Teachable Machine → Scratch → Python → Hugging Face → Deployed capstone',
    toolLogos: ['Teachable Machine', 'Scratch', 'Python', 'Hugging Face', 'ChatGPT'],
    size: 'large',
  },
  {
    id: 'career-architecture',
    icon: '🎯',
    iconName: 'compass',
    name: 'Career Architecture',
    shortName: 'Career',
    tagline: 'Psychometric testing. 50+ careers. Data-driven stream selection.',
    description:
      'Most students choose their career based on what their neighbor\'s son did. We change that with psychometric assessments, 100+ career explorations, and a data-driven stream selection process.',
    topics: [
      'Psychometric assessment (DMIT, aptitude, interest)',
      '100+ career paths explored across 5 years',
      'Data-driven stream selection in Grade 10',
      'Application Kit — 9 critical items by Grade 11',
      'College shortlist with requirements mapped',
    ],
    color: 'energy',
    hoverDetails: 'DMIT assessment → Career journal → Mentor matching → Application Kit → College roadmap',
    toolLogos: ['DMIT', '16personalities', 'LinkedIn', 'Google Docs'],
    size: 'normal',
  },
  {
    id: 'english-life-skills',
    icon: '🗣️',
    iconName: 'messageCircle',
    name: 'English & Life Skills',
    shortName: 'English',
    tagline: 'Destroy the fear. Build the confidence. Own the room.',
    description:
      'Even English-medium schools in Tier-2/3 cities lack structured spoken English training. We build real communication confidence — from trembling self-intros to GD/PI mastery.',
    topics: [
      'Self-intro mastery and confidence building',
      'Debate club and structured argumentation',
      'GD practice with scoring rubrics',
      'Interview prep with STAR method',
      'Business English and elevator pitches',
    ],
    color: 'success',
    hoverDetails: 'Self-intro mastery → Debate club → GD practice → Interview prep → GD/PI mastery',
    toolLogos: ['Grammarly', 'Google Docs', 'Mentimeter'],
    size: 'normal',
  },
  {
    id: 'business-freelancing',
    icon: '💼',
    iconName: 'briefcase',
    name: 'Business & Freelancing',
    shortName: 'Business',
    tagline: 'Think like a founder. Earn before you graduate.',
    description:
      'Students learn how businesses work by building their own ideas. From lemonade stand math to real client projects on Fiverr.',
    topics: [
      'Revenue, cost, profit — real business basics',
      'Lean Startup method and MVPs',
      'Fiverr/Upwork profile creation',
      'Real client projects with testimonials',
      'First earnings before graduation',
    ],
    color: 'warm',
    hoverDetails: 'Lemonade stand math → Lean Startup → Fiverr profile → Real client → Revenue earned',
    toolLogos: ['Fiverr', 'Upwork', 'Canva', 'Google Sheets'],
    size: 'large',
  },
  {
    id: 'competitions',
    icon: '🏆',
    iconName: 'trophy',
    name: 'Competitions',
    shortName: 'Competitions',
    tagline: 'A national stage for small-town talent.',
    description:
      'City students compete in hackathons, olympiads, and MUN. Our students didn\'t even know these existed. We register, prepare, and support students for national competitions.',
    topics: [
      'OnliGrow Olympiad — AI-focused inter-school competition',
      'Smart India Hackathon preparation',
      'Science fairs and academic olympiads',
      'MUN and debate tournaments',
      'Every entry = portfolio artifact',
    ],
    color: 'creative',
    hoverDetails: 'OnliGrow Olympiad → Smart India Hackathon → Science fairs → MUN → Portfolio artifacts',
    toolLogos: [],
    size: 'normal',
  },
  {
    id: 'digital-identity',
    icon: '📧',
    iconName: 'mail',
    name: 'Digital Identity',
    shortName: 'Digital ID',
    tagline: 'Professional email + Rs.15,000+ in tools from Day 1.',
    description:
      'Every student gets a professional .edu email that unlocks GitHub Student Pack, Microsoft 365, Google Workspace, Canva Pro, and more.',
    topics: [
      '.edu email address',
      'GitHub Student Developer Pack (Rs.15,000+ value)',
      'Microsoft Office 365 Education',
      'Google Workspace for Education',
      'Portfolio website + LinkedIn + GitHub',
    ],
    color: 'primary',
    hoverDetails: '.edu email → GitHub Student Pack → Microsoft 365 → Canva Pro → Portfolio website',
    toolLogos: ['GitHub', 'Microsoft', 'Google', 'Canva'],
    size: 'normal',
  },
  {
    id: 'school-platform',
    icon: '🏫',
    iconName: 'layoutDashboard',
    name: 'School Platform',
    shortName: 'Platform',
    tagline: 'Digitize attendance, fees, reports, communication.',
    description:
      'We don\'t just help students — we help the school run better. Digital attendance, fee management, parent portal, and analytics dashboard.',
    topics: [
      'Digital attendance tracking',
      'Online fee management',
      'Parent communication portal',
      'Student progress analytics',
      'Automated report cards',
    ],
    color: 'success',
    hoverDetails: 'Digital attendance → Online fees → Parent portal → Analytics dashboard',
    toolLogos: [],
    size: 'normal',
  },
  {
    id: 'teacher-upskilling',
    icon: '👩‍🏫',
    iconName: 'graduationCap',
    name: 'Teacher Upskilling',
    shortName: 'Teachers',
    tagline: 'We empower teachers. We never replace them.',
    description:
      'Quarterly workshops help teachers learn AI tools, modern teaching methods, digital classroom management, and NEP 2020 implementation.',
    topics: [
      'AI tools for teachers',
      'Modern pedagogy and flipped classroom',
      'Google Classroom and LMS',
      'NEP 2020 implementation',
      'Master Teacher certification',
    ],
    color: 'energy',
    hoverDetails: 'AI tools → Modern pedagogy → Google Classroom → NEP 2020 → Master Teacher cert',
    toolLogos: ['Google Classroom'],
    size: 'normal',
  },
];

// ============================================
// TRUST BADGES
// ============================================

export const TRUST_BADGES = [
  'NEP 2020 Aligned',
  'Grades 8-12',
  'Hindi + English',
  '8 Modules, One Partner',
  'Students Leave with Real Portfolios',
] as const;

// ============================================
// TICKER ITEMS
// ============================================

export const TICKER_ITEMS = [
  '🤖 AI & Technology',
  '🎯 Career Architecture',
  '🗣️ English & Life Skills',
  '💼 Business & Freelancing',
  '🏆 National Competitions',
  '📧 Rs.15K+ Digital Tools',
  '🏫 School Platform',
  '👩‍🏫 Teacher Upskilling',
] as const;

// ============================================
// BENEFITS (WHY WE'RE DIFFERENT)
// ============================================

export const BENEFITS: Benefit[] = [
  {
    title: 'The 5-Year Architecture',
    description: 'Other programs: 12 weeks of content, then goodbye. OnliGrow: a 5-year progression from Grade 8 to Grade 12 where every quarter builds on the last.',
    icon: 'layers',
  },
  {
    title: 'Modular Certifications',
    description: 'Bronze, Silver, and Gold certifications based on SKILL, not time. A student who joins in Grade 10 can earn Gold within a year.',
    icon: 'award',
  },
  {
    title: 'The Real Project Mandate',
    description: 'Grade 10 — one project with real users. Grade 11 — one with measurable impact. Grade 12 — capstone deployed in the real world.',
    icon: 'rocket',
  },
  {
    title: 'Re-Entry at Any Grade',
    description: 'Joined in Grade 10? You\'re not behind. Every grade has self-contained curriculum with fast-track bridge programs.',
    icon: 'refreshCw',
  },
  {
    title: 'The Grade 12 Freeze Protocol',
    description: 'No new projects, no new competitions in Grade 12. Application Kit is 80% done from Grade 11. Grade 12 = polish and submit.',
    icon: 'shield',
  },
];

// ============================================
// HOW IT STARTS STEPS
// ============================================

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'You reach out',
    description: 'WhatsApp or form. Takes 30 seconds.',
    icon: '💬',
  },
  {
    step: 2,
    title: 'We come to your school',
    description: 'Free 45-60 min session. Students interact with real AI. We bring everything.',
    icon: '🏫',
  },
  {
    step: 3,
    title: 'You see the impact',
    description: 'Students engaged. Teachers impressed. Principal sees the value.',
    icon: '✨',
  },
  {
    step: 4,
    title: 'We design your plan',
    description: 'Custom year-round partnership based on your grades, schedule, and priorities.',
    icon: '🤝',
  },
];

// ============================================
// IMPACT NUMBERS (Student Portfolio Stats)
// ============================================

export const IMPACT_NUMBERS = {
  projects: { value: '5-8', label: 'AI Projects', detail: 'Progressively complex, from chatbots to deployed capstones' },
  careers: { value: '100+', label: 'Careers Explored', detail: 'With deep knowledge of their target field' },
  speaking: { value: '200+', label: 'Hours of Public Speaking', detail: 'From trembling self-intro to GD/PI mastery' },
  competitions: { value: '15-25', label: 'Competitions Entered', detail: 'National stage, real experience, portfolio artifacts' },
  realProjects: { value: '3-5', label: 'Real Projects with External Validation', detail: 'Actual users, clients, citations, revenue' },
  tools: { value: '₹15K+', label: 'Professional Tools (Free)', detail: '.edu email unlocks GitHub, Microsoft 365, Canva Pro, JetBrains' },
} as const;

// ============================================
// FOOTER LINKS
// ============================================

export const FOOTER_LINKS = {
  theSystem: [
    { label: 'Overview', href: '/system' },
    { label: 'Student Journey', href: '/system/journey' },
    { label: 'All 8 Modules', href: '/system/modules' },
    { label: 'Certifications', href: '/system/certifications' },
    { label: 'Olympiad', href: '/olympiad' },
  ],
  getStarted: [
    { label: 'Book a Demo', href: '/demo' },
    { label: 'For Schools', href: '/schools' },
    { label: 'For Parents', href: '/parents' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  getTheApp: [
    { label: '📱 PWA Available Now', href: 'https://app.onligrow.com', external: true },
    { label: '🍎 iOS — Coming Q3 2026', href: '#', disabled: true },
    { label: '🤖 Android — Coming Q3 2026', href: '#', disabled: true },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

// ============================================
// GRADE DETAILS FOR SYSTEM PAGES
// ============================================

export const GRADE_DETAILS = [
  {
    grade: 8,
    theme: 'Foundation Year',
    tagline: 'Discover everything. Fear nothing.',
    hours: '~160/year',
    bridge: 'Ideal starting point',
    description: 'Students discover AI for the first time (and build a chatbot by Q4), explore 50+ careers, start speaking English confidently, learn what business means, compete internally, get their .edu email and professional tools. Everything is new, everything is exciting.',
    outcomes: [
      'First AI project built and presented',
      'Career journal started with 50+ careers explored',
      '2-min English self-intro mastered',
      'Business idea pitched in Shark Tank Junior',
      '.edu email + professional tools activated',
    ],
  },
  {
    grade: 9,
    theme: 'Exploration Year',
    tagline: 'Stop consuming. Start creating.',
    hours: '~160/year',
    bridge: '2-week summer intensive for new joiners',
    description: 'The shift from consumer to creator. Students learn machine learning fundamentals, write pseudocode, build Scratch games, participate in their first hackathon, create a Fiverr profile, and start developing real opinions about their future.',
    outcomes: [
      'ML model trained using Teachable Machine',
      'Scratch AI game built and published',
      'First hackathon entered',
      'Psychometric assessment completed',
      'Stream selection data gathered',
    ],
  },
  {
    grade: 10,
    theme: 'Board Year + First Real Project',
    tagline: 'Boards first. But don\'t stop building.',
    hours: '~120/year (REDUCED — boards take priority)',
    bridge: 'Q1 Boot Camp for new joiners',
    description: 'Reduced hours because boards matter. But this is the year of the FIRST REAL PROJECT — something with actual external users. Students also build their GitHub Pages website, create LinkedIn profiles, and use AI as study tools for board prep.',
    outcomes: [
      'FIRST PROJECT WITH EXTERNAL VALIDATION',
      'Personal website live on GitHub Pages',
      'LinkedIn profile active',
      'Stream finalized with data',
      'Board exams supported with AI study tools',
    ],
  },
  {
    grade: 11,
    theme: 'The Building Year (MOST IMPORTANT)',
    tagline: 'Build everything now. Grade 12 is too late.',
    hours: '~200/year',
    bridge: '2-week onboarding sprint for new joiners',
    description: 'This is where the magic happens. Python for AI. Generative AI deep dive. Real client projects that earn money or testimonials. National hackathon entries. And the APPLICATION KIT — 9 critical items that must be 80% complete by March.',
    outcomes: [
      'Python proficiency achieved',
      'GenAI portfolio built',
      'Real client project completed with testimonial',
      'Application Kit 80% done',
      'National competition entries submitted',
    ],
  },
  {
    grade: 12,
    theme: 'Launch Year (FREEZE PROTOCOL)',
    tagline: 'Polish. Submit. Launch. Nothing new.',
    hours: '~120/year (REDUCED)',
    bridge: 'Week 1 orientation for new joiners',
    description: 'Grade 12 is NOT for building. It\'s for shipping. The Freeze Protocol means: NO new projects, NO new competitions, NO new learning modules. Everything was built in Grade 11. Q1: polish applications + submit early. Q2: board exam support. Q3: GD/PI intensive + interviews. Q4: celebration + alumni onboarding.',
    outcomes: [
      'All applications submitted early',
      'Capstone project deployed',
      'Interview mastery achieved',
      'College admission secured',
      'Transition to alumni network',
    ],
  },
];

// ============================================
// APPLICATION KIT
// ============================================

export const APPLICATION_KIT = [
  'Psychometric profile + career roadmap (finalized)',
  'College shortlist — top 10 with requirements mapped',
  'Personal statement — first draft, peer-reviewed',
  'Portfolio website — live with 3+ projects',
  'LinkedIn — active with connections',
  'GitHub — 3+ repos with documentation',
  'Competition portfolio — all entries compiled',
  'Recommendation letters — requested from 2-3 teachers',
  'Real project — with external users or clients',
];

// ============================================
// RE-ENTRY BRIDGE PROGRAMS
// ============================================

export const BRIDGE_PROGRAMS = [
  { entryGrade: 9, program: 'Summer Intensive', duration: '2 weeks (~20 hrs)', covers: 'AI basics, career survey, English assessment, digital tools' },
  { entryGrade: 10, program: 'Q1 Boot Camp', duration: '4 sessions (~8 hrs)', covers: 'AI + ChatGPT, career assessment, digital identity, English baseline' },
  { entryGrade: 11, program: 'Onboarding Sprint', duration: '2 weeks (~20 hrs)', covers: 'AI accelerator, career roadmap, portfolio quickstart, psychometric' },
  { entryGrade: 12, program: 'Week 1 Orientation', duration: '5 days (~10 hrs)', covers: 'All tools setup, career assessment, portfolio build, board strategy' },
];

// ============================================
// COMPETITION FRAMEWORK
// ============================================

export const COMPETITION_TIERS = [
  {
    tier: 1,
    label: 'BUILD & SHIP',
    color: 'success',
    description: 'Projects with real users, clients, or deployments. This is the strongest signal. No luck involved.',
    example: 'AI tool used by 50+ students. Website built for local business.',
  },
  {
    tier: 2,
    label: 'COMPETE & LEARN',
    color: 'primary',
    description: 'Hackathons, olympiads, competitions. Win or lose, the project and experience remain.',
    example: 'Hackathon entry → continued developing → deployed → portfolio piece.',
  },
  {
    tier: 3,
    label: 'CERTIFY & CREDENTIAL',
    color: 'energy',
    description: 'Certifications, micro-credentials. Always achievable. Always in student\'s control.',
    example: 'OnliGrow Gold certification. Google cert. GitHub contributions.',
  },
];

// ============================================
// MODULE CERTIFICATIONS
// ============================================

export const MODULE_CERTIFICATIONS = [
  {
    moduleId: 'ai-technology',
    moduleName: 'AI & Technology',
    bronze: 'Can define AI, identify 10+ daily AI applications, explain 3 AI types, use ChatGPT effectively.',
    silver: 'Can train a model (Teachable Machine), build a chatbot, write pseudocode, explain ML concepts.',
    gold: 'Has completed an AI project with real-world application AND external users/impact. Published in portfolio.',
  },
  {
    moduleId: 'career-architecture',
    moduleName: 'Career Architecture',
    bronze: 'Has completed interest mapping, explored 20+ careers, can articulate 3 career interests with reasoning.',
    silver: 'Has psychometric profile, career roadmap v1, explored 50+ careers, stream preference with data.',
    gold: 'Application Kit complete. College shortlist finalized. Personal statement written. Career roadmap actionable.',
  },
  {
    moduleId: 'english-life-skills',
    moduleName: 'English & Life Skills',
    bronze: 'Can deliver 2-min self-intro confidently. Basic email writing. Participates in group discussions.',
    silver: 'Can lead a structured debate. STAR method mastery. Can present for 5+ min with slides.',
    gold: 'GD/PI ready. Can handle panel interviews. Business English proficiency. Public speaking mastery.',
  },
  {
    moduleId: 'business-freelancing',
    moduleName: 'Business & Freelancing',
    bronze: 'Understands revenue, cost, profit. Has created a Lean Canvas. Can explain startup basics.',
    silver: 'Has Fiverr/Upwork profile with samples. Understands pricing, client communication, delivery.',
    gold: 'Has completed a real client project with payment or testimonial. Can manage a freelance workflow.',
  },
  {
    moduleId: 'competitions',
    moduleName: 'Competitions',
    bronze: 'Has participated in 3+ internal competitions. Understands competition formats and preparation.',
    silver: 'Has entered 5+ external competitions. Has at least 2 portfolio artifacts from competition entries.',
    gold: 'Has national-level competition experience. Competition portfolio compiled with reflections.',
  },
  {
    moduleId: 'digital-identity',
    moduleName: 'Digital Identity',
    bronze: 'Has .edu email, Google Workspace active, basic online presence awareness.',
    silver: 'GitHub active with repos, LinkedIn profile created, personal website live.',
    gold: 'Full digital identity: portfolio website with projects, LinkedIn with connections, GitHub with documented repos.',
  },
  {
    moduleId: 'school-platform',
    moduleName: 'School Platform',
    bronze: 'School has digital attendance and timetable active.',
    silver: 'Fee management, parent portal, and basic analytics operational.',
    gold: 'Full platform adoption with career integration, alumni tracking, and predictive analytics.',
  },
  {
    moduleId: 'teacher-upskilling',
    moduleName: 'Teacher Upskilling',
    bronze: 'Teacher has completed 2 workshops. Can use Google Classroom and basic AI tools.',
    silver: 'Teacher uses flipped classroom methods. Creates digital assessments. Mentors students on projects.',
    gold: 'Master Teacher certification. Mentors other teachers. Can write effective recommendation letters.',
  },
];
