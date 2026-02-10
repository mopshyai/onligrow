/**
 * Google Fonts configuration for OnliGrow website
 * Using next/font/google for optimized font loading
 */

import { Poppins, Inter, Noto_Sans_Devanagari } from 'next/font/google';

/**
 * Poppins - Used for headings
 * Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
 */
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

/**
 * Inter - Used for body text
 * Weights: 400 (normal), 500 (medium), 600 (semibold)
 */
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

/**
 * Noto Sans Devanagari - Used for Hindi text
 * Weights: 400 (normal), 500 (medium), 600 (semibold)
 */
export const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600'],
  variable: '--font-hindi',
  display: 'swap',
});

/**
 * Combined font classes for use in layout
 */
export const fontVariables = `${poppins.variable} ${inter.variable} ${notoSansDevanagari.variable}`;
