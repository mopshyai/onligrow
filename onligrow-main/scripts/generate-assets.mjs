/**
 * Generate favicon PNGs, OG images, and ICO file for OnliGrow
 * Run: node scripts/generate-assets.mjs
 * Requires: npm install sharp (dev dependency)
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// SVG favicon source - "OG" monogram with gradient background
const faviconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5"/>
      <stop offset="100%" style="stop-color:#9333EA"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="256" y="340" font-family="system-ui,-apple-system,sans-serif" font-size="280" font-weight="800" fill="white" text-anchor="middle" letter-spacing="-10">OG</text>
</svg>`;

// Safari pinned tab SVG - monochrome
const safariSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="black"/>
  <text x="256" y="340" font-family="system-ui,-apple-system,sans-serif" font-size="280" font-weight="800" fill="white" text-anchor="middle" letter-spacing="-10">OG</text>
</svg>`;

// OG Image SVG (1200x630)
const ogImageSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E1B4B"/>
      <stop offset="100%" style="stop-color:#312E81"/>
    </linearGradient>
    <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.06)"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <!-- Logo -->
  <rect x="60" y="50" width="48" height="48" rx="10" fill="#4F46E5"/>
  <text x="84" y="84" font-family="system-ui,-apple-system,sans-serif" font-size="28" font-weight="800" fill="white" text-anchor="middle">OG</text>
  <text x="120" y="82" font-family="system-ui,-apple-system,sans-serif" font-size="22" font-weight="600" fill="white">OnliGrow</text>
  <!-- Main text -->
  <text x="600" y="270" font-family="system-ui,-apple-system,sans-serif" font-size="52" font-weight="800" fill="white" text-anchor="middle">The Operating System</text>
  <text x="600" y="340" font-family="system-ui,-apple-system,sans-serif" font-size="52" font-weight="800" fill="white" text-anchor="middle">for Student Futures</text>
  <!-- Subtitle -->
  <text x="600" y="400" font-family="system-ui,-apple-system,sans-serif" font-size="20" fill="#FDBA74" text-anchor="middle">AI Education · Career Architecture · Life Skills · Competitions</text>
  <!-- Bottom left -->
  <text x="60" y="580" font-family="system-ui,-apple-system,sans-serif" font-size="16" fill="rgba(255,255,255,0.5)">onligrow.in</text>
  <!-- Bottom right badge -->
  <rect x="960" y="556" width="190" height="36" rx="18" fill="#4F46E5"/>
  <text x="1055" y="580" font-family="system-ui,-apple-system,sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle">For Schools Across India</text>
</svg>`;

// OG Image Square SVG (1200x1200)
const ogImageSquareSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E1B4B"/>
      <stop offset="100%" style="stop-color:#312E81"/>
    </linearGradient>
    <pattern id="dots2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.06)"/>
    </pattern>
  </defs>
  <rect width="1200" height="1200" fill="url(#bgGrad2)"/>
  <rect width="1200" height="1200" fill="url(#dots2)"/>
  <!-- Logo -->
  <rect x="60" y="60" width="56" height="56" rx="12" fill="#4F46E5"/>
  <text x="88" y="98" font-family="system-ui,-apple-system,sans-serif" font-size="32" font-weight="800" fill="white" text-anchor="middle">OG</text>
  <text x="130" y="96" font-family="system-ui,-apple-system,sans-serif" font-size="24" font-weight="600" fill="white">OnliGrow</text>
  <!-- Main text -->
  <text x="600" y="500" font-family="system-ui,-apple-system,sans-serif" font-size="56" font-weight="800" fill="white" text-anchor="middle">The Operating System</text>
  <text x="600" y="575" font-family="system-ui,-apple-system,sans-serif" font-size="56" font-weight="800" fill="white" text-anchor="middle">for Student Futures</text>
  <!-- Subtitle -->
  <text x="600" y="660" font-family="system-ui,-apple-system,sans-serif" font-size="22" fill="#FDBA74" text-anchor="middle">AI Education · Career Architecture · Life Skills · Competitions</text>
  <!-- Bottom -->
  <text x="60" y="1140" font-family="system-ui,-apple-system,sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">onligrow.in</text>
  <rect x="960" y="1116" width="190" height="40" rx="20" fill="#4F46E5"/>
  <text x="1055" y="1142" font-family="system-ui,-apple-system,sans-serif" font-size="15" font-weight="600" fill="white" text-anchor="middle">For Schools Across India</text>
</svg>`;

async function generateAssets() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.log('sharp not available, generating SVG files only...');

    // Write SVG files directly
    writeFileSync(join(publicDir, 'favicon.svg'), faviconSVG);
    writeFileSync(join(publicDir, 'safari-pinned-tab.svg'), safariSVG);
    writeFileSync(join(publicDir, 'og-image.svg'), ogImageSVG);
    writeFileSync(join(publicDir, 'og-image-square.svg'), ogImageSquareSVG);

    console.log('SVG files written. Install sharp and re-run for PNG generation.');
    console.log('Or use an online SVG-to-PNG converter for the favicon PNGs.');
    return;
  }

  // Generate favicon PNGs
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
    { name: 'mstile-150x150.png', size: 150 },
  ];

  const svgBuffer = Buffer.from(faviconSVG);

  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name));
    console.log(`Generated ${name}`);
  }

  // Generate favicon.ico (32x32 PNG, saved as .ico - browsers handle PNG ICOs)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate OG images
  const ogBuffer = Buffer.from(ogImageSVG);
  await sharp(ogBuffer)
    .resize(1200, 630)
    .png()
    .toFile(join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png');

  const ogSquareBuffer = Buffer.from(ogImageSquareSVG);
  await sharp(ogSquareBuffer)
    .resize(1200, 1200)
    .png()
    .toFile(join(publicDir, 'og-image-square.png'));
  console.log('Generated og-image-square.png');

  // Write SVGs too
  writeFileSync(join(publicDir, 'favicon.svg'), faviconSVG);
  writeFileSync(join(publicDir, 'safari-pinned-tab.svg'), safariSVG);

  console.log('\nAll assets generated successfully!');
}

generateAssets().catch(console.error);
