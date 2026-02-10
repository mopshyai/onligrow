/**
 * Solution Overview section
 * Shows what OnliGrow does - year-round partnership with 8 modules preview
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { MODULES } from '@/lib/constants';

/**
 * Animation variants for module cards
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

/**
 * SolutionOverview component
 * Shows the partnership model and 8 module overview
 */
export function SolutionOverview() {
  return (
    <SectionWrapper background="white">
      {/* Label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          WHAT WE DO
        </span>
      </div>

      <SectionHeader
        title="We Become Your School's Education Enhancement Partner"
        subtitle="OnliGrow doesn't sell courses. We partner with your school year-round to deliver everything your students are missing — with our own facilitators, our own curriculum, and zero burden on your teachers."
      />

      {/* 8 Modules Grid - Visual Teaser */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-8"
      >
        {MODULES.map((module) => (
          <motion.div
            key={module.id}
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
          >
            {/* Icon */}
            <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform">
              {module.icon}
            </div>
            {/* Name */}
            <h3 className="text-sm md:text-base font-semibold text-gray-800 font-heading">
              {module.shortName}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Every module is delivered by trained OnliGrow facilitators inside your school. Your teachers don't prepare anything. Your timetable barely changes. Your students get everything.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <Button
          href="/programs"
          variant="primary"
          size="lg"
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          See Everything We Offer
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}

export default SolutionOverview;
