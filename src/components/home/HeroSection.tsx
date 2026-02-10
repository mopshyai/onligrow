/**
 * Hero section for the homepage
 * First impression with headline, subheadline, CTAs, and trust badges
 */

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, TRUST_BADGES } from '@/lib/constants';

/**
 * HeroSection component
 * - Compelling headline and subheadline
 * - Two CTA buttons: Book Demo (primary) and Watch Video (secondary)
 * - Trust badges showing credibility
 * - Animated entrance for visual impact
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

      {/* Modern grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Floating orbs with glassmorphism */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-15 animate-bounce-subtle" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Small badge above headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              Now partnering with schools across India
            </span>
          </motion.div>

          {/* Headline — Display size */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
          >
            Future-Proof{' '}
            <span className="text-gradient">Your Students</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
          >
            We partner with schools to bring AI education, career guidance, life skills, competitions, and digital tools to students who deserve more than textbooks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/demo" variant="primary" size="xl">
              Book a Free Demo
            </Button>
            <Button
              href="https://youtube.com/@onligrow"
              variant="secondary"
              size="xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Our Story ▶
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600"
              >
                <CheckCircle className="w-4 h-4 text-primary-500" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
