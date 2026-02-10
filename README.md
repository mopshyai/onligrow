# OnliGrow Website

Official website for OnliGrow - Bringing AI Education to Every School in India.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Icons**: Lucide React
- **Deployment**: Vercel

## Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/onligrow/onligrow-website.git
cd onligrow-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `NEXT_PUBLIC_SITE_URL`: Your site URL (http://localhost:3000 for development)
- `RESEND_API_KEY`: Get from [Resend](https://resend.com) (free tier: 100 emails/day)
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your WhatsApp business number with country code

Optional analytics:
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`: Google Analytics 4
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta/Facebook Pixel
- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog analytics
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`: Microsoft Clarity

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
onligrow-website/
├── public/                 # Static assets
│   ├── images/            # Images (team photos, icons)
│   ├── fonts/             # Custom fonts (if any)
│   └── downloads/         # Downloadable files (brochures)
│
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── api/           # API routes
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   ├── contact/       # Contact page
│   │   ├── demo/          # Demo booking page
│   │   ├── olympiad/      # Olympiad page
│   │   ├── parents/       # Parents info page
│   │   ├── privacy/       # Privacy policy
│   │   ├── programs/      # Programs page
│   │   ├── schools/       # For schools page
│   │   └── terms/         # Terms of service
│   │
│   ├── components/        # React components
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── seo/           # SEO components
│   │   ├── shared/        # Shared components
│   │   └── ui/            # UI components (Button, Card, etc.)
│   │
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and configurations
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
│
├── content/               # MDX blog content
│   └── blog/
│
└── Configuration files
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment to Vercel

### Option 1: One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/onligrow/onligrow-website)

### Option 2: Manual deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

### Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `onligrow.com`
4. Update your DNS settings as instructed

## Adding Content

### Team Photos

Add team photos to `public/images/team/`:
- `manvendra.webp`
- `dipti.webp`
- `harsh.webp`
- `ayush.webp`

Recommended: 400x400px, WebP format

### Blog Posts

Add MDX files to `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2026-01-01"
author: "Author Name"
tags: ["Tag1", "Tag2"]
coverImage: "/images/blog/post-cover.webp"
---

Your content here...
```

### Logo

Replace the placeholder logo:
1. Add your logo to `public/images/logo.png`
2. Update references in components as needed

## Customization

### Colors

Edit `src/app/globals.css`:

```css
@theme inline {
  --color-primary: #2563EB;     /* Blue */
  --color-secondary: #F59E0B;   /* Orange */
  --color-accent: #7C3AED;      /* Purple */
  --color-dark: #1F2937;
  --color-light: #F3F4F6;
}
```

### Contact Information

Edit `src/lib/constants.ts`:

```typescript
export const CONTACT = {
  email: 'info@onligrow.com',
  phone: '+91-XXXXXXXXXX',
  whatsappNumber: '91XXXXXXXXXX',
  // ...
};
```

## Performance

This website is optimized for performance:
- Server-side rendering with Next.js
- Automatic image optimization
- Font optimization with next/font
- Code splitting and lazy loading
- Minimal JavaScript bundle

## SEO

SEO is configured out of the box:
- Meta tags for all pages
- Open Graph images
- JSON-LD structured data
- Auto-generated sitemap
- robots.txt

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Copyright 2026 OnliGrow EdTech Private Limited. All rights reserved.

## Support

For questions or issues:
- Email: team@onligrow.com
- WhatsApp: [Chat with us](https://wa.me/91XXXXXXXXXX)
