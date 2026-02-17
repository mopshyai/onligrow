import type { Metadata, Viewport } from 'next';
import { Poppins, Inter, Noto_Sans_Devanagari } from 'next/font/google';
import Script from 'next/script';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

// ============================================
// FONTS
// ============================================

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600'],
  variable: '--font-hindi',
  display: 'swap',
});

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  metadataBase: new URL('https://onligrow.in'),
  title: {
    default: 'OnliGrow — The Operating System for Student Futures',
    template: '%s | OnliGrow',
  },
  description:
    'AI education, career architecture, English & life skills, national competitions, and ₹15,000+ in digital tools — delivered inside your school. For Grades 8-12 across India.',
  keywords: [
    'AI education India',
    'school AI program',
    'career guidance students',
    'NEP 2020 aligned',
    'edtech school partnership',
    'student competitions India',
    'OnliGrow',
    'school digital transformation',
    'coding for school students',
    'career counselling schools',
    'English skills training schools',
  ],
  authors: [{ name: 'OnliGrow EdTech' }],
  creator: 'OnliGrow',
  publisher: 'OnliGrow EdTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://onligrow.in',
    siteName: 'OnliGrow',
    title: 'OnliGrow — The Operating System for Student Futures',
    description:
      'AI education, career architecture, and life skills for every school in India. Grades 8-12. NEP 2020 aligned.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OnliGrow — The Operating System for Student Futures',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnliGrow — The Operating System for Student Futures',
    description:
      'AI education, career architecture, and life skills for every school in India.',
    images: ['/og-image.png'],
    creator: '@onligrow',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#1E1B4B',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4F46E5',
};

// ============================================
// JSON-LD STRUCTURED DATA
// ============================================

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'OnliGrow',
  legalName: 'OnliGrow EdTech Pvt Ltd',
  url: 'https://onligrow.in',
  logo: 'https://onligrow.in/favicon-32x32.png',
  description:
    'AI education, career architecture, and life skills for school students across India.',
  foundingDate: '2026',
  founders: [
    { '@type': 'Person', name: 'Manvendra Kumar' },
    { '@type': 'Person', name: 'Dipti' },
    { '@type': 'Person', name: 'Ayush Dixit' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Haryana',
  },
  sameAs: [
    'https://www.instagram.com/onligrow',
    'https://www.linkedin.com/company/onligrow',
    'https://www.youtube.com/@onligrow',
  ],
};

// ============================================
// LAYOUT
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${notoSansDevanagari.variable}`}
    >
      <head>
        {/* Preconnect to external origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Safari pinned tab */}
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#4F46E5"
        />

        {/* Google Analytics - Only in production */}
        {isProduction && GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel - Only in production */}
        {isProduction && process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Microsoft Clarity - Only in production */}
        {isProduction && process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}
      </head>
      <body className="font-body antialiased">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}
