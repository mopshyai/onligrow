'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { TRUST_BADGES, TICKER_ITEMS, CONTACT } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
      {/* === BACKGROUND: Multi-color gradient with floating shapes === */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-creative-950" />

      {/* Colorful gradient orbs */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-creative-500/20 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-energy-500/15 rounded-full blur-[100px] animate-float-slower" />
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-success-500/10 rounded-full blur-[80px] animate-float-medium" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* Floating emoji decorations */}
      <div className="absolute top-[15%] right-[15%] text-4xl opacity-20 animate-bounce-slow hidden md:block">🤖</div>
      <div className="absolute top-[60%] left-[8%] text-3xl opacity-15 animate-bounce-slower hidden md:block">🎯</div>
      <div className="absolute bottom-[25%] right-[25%] text-3xl opacity-15 animate-bounce-slow hidden md:block">🏆</div>
      <div className="absolute top-[30%] left-[20%] text-2xl opacity-10 animate-bounce-medium hidden lg:block">💡</div>
      <div className="absolute bottom-[15%] left-[40%] text-3xl opacity-15 animate-bounce-slower hidden lg:block">🚀</div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2.5 h-2.5 bg-success-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">Now partnering with schools in Haryana</span>
            <span className="text-sm">🇮🇳</span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight font-heading"
          >
            <span className="text-white">We Don&apos;t Teach Courses.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-400 via-warm-400 to-creative-400">
              We Architect Futures.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
          >
            A 5-year system that transforms school students into career-ready,
            portfolio-carrying, nationally-competitive young adults.
            AI education. Career architecture. Life skills. Inside your school.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {/* PRIMARY CTA — Orange/energy */}
            <a
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-energy-500 to-energy-600 text-white font-bold rounded-2xl px-8 py-4 text-lg shadow-lg shadow-energy-500/30 hover:shadow-xl hover:shadow-energy-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* SECONDARY — Ghost white */}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 rounded-2xl px-8 py-4 text-lg hover:bg-white/15 transition-all duration-300"
            >
              See How It Works →
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/60"
              >
                <CheckCircle className="w-4 h-4 text-success-400" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-white/10 mt-auto">
        <div className="overflow-hidden py-4">
          <div className="animate-ticker flex gap-8 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="text-sm text-white/40 flex-shrink-0 flex items-center gap-2">
                {item}
                <span className="text-white/20">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto fill-white" preserveAspectRatio="none">
          <path d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,37.3C672,43,768,53,864,53.3C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}
