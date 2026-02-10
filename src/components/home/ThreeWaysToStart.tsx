/**
 * Three Ways to Start section
 * Shows the three entry points: Free Demo, Free Pilot, Olympiad
 */

'use client';

import { motion } from 'framer-motion';
import { Presentation, Handshake, Trophy } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

/**
 * Three ways to start data
 */
const ways = [
  {
    id: 'demo',
    tag: 'MOST POPULAR — FREE',
    tagVariant: 'primary' as const,
    icon: Presentation,
    title: 'Free Demo Session',
    description:
      'A 45-60 minute interactive session where students experience AI live, explore careers, and compete in a mini quiz. We bring everything — you just need a room.',
    cta: 'Book a Free Demo',
    href: '/demo',
    featured: true,
  },
  {
    id: 'pilot',
    tag: 'ZERO RISK — 3 MONTHS FREE',
    tagVariant: 'accent' as const,
    icon: Handshake,
    title: 'Free Pilot Program',
    description:
      'Not sure yet? We\'ll run a complete 3-month pilot for 1-2 classes — totally free. Experience the full OnliGrow partnership before any commitment.',
    cta: 'Learn About the Pilot',
    href: '/schools',
    featured: false,
  },
  {
    id: 'olympiad',
    tag: 'Launching September 2026',
    tagVariant: 'secondary' as const,
    icon: Trophy,
    title: 'OnliGrow Olympiad',
    description:
      'India\'s first AI-focused inter-school competition. Three rounds, national recognition. Open to any school, any board. Your students get a stage to shine.',
    cta: 'Register Interest',
    href: '/olympiad',
    featured: false,
  },
];

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * ThreeWaysToStart component
 */
export function ThreeWaysToStart() {
  return (
    <SectionWrapper background="light">
      {/* Label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          HOW TO START
        </span>
      </div>

      <SectionHeader
        title="Three Ways to Begin"
        subtitle=""
      />

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-3 gap-8"
      >
        {ways.map((way) => {
          const Icon = way.icon;
          return (
            <motion.div
              key={way.id}
              variants={itemVariants}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all ${
                way.featured ? 'ring-2 ring-primary md:scale-105' : ''
              }`}
            >
              {/* Tag */}
              <div className="mb-4">
                <Badge variant={way.tagVariant} size="sm">
                  {way.tag}
                </Badge>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-dark font-heading mb-3">
                {way.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {way.description}
              </p>

              {/* CTA */}
              <Button
                href={way.href}
                variant={way.featured ? 'primary' : 'outline'}
                size="md"
                className="w-full"
              >
                {way.cta}
              </Button>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

export default ThreeWaysToStart;
