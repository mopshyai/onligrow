/**
 * Problem statement section
 * Highlights the gap in AI education for Tier-2/3 India
 */

'use client';

import { motion } from 'framer-motion';
import { Cpu, Compass, Trophy, Globe, MessageCircle } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';

/**
 * Pain points data - 5 key gaps
 */
const painPoints = [
  {
    icon: Cpu,
    title: 'No AI Education',
    description:
      'Computer class still means MS Paint and typing practice.',
  },
  {
    icon: Compass,
    title: 'No Career Guidance',
    description:
      'The only advice: Doctor, Engineer, or CA.',
  },
  {
    icon: Trophy,
    title: 'No Competitions',
    description:
      'No hackathons, no olympiads, no national stage.',
  },
  {
    icon: Globe,
    title: 'No Digital Identity',
    description:
      'No .edu email, no portfolio, no professional tools.',
  },
  {
    icon: MessageCircle,
    title: 'No Life Skills',
    description:
      'No spoken English training, no public speaking, no interview prep.',
  },
];

/**
 * Animation variants for staggered children
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * ProblemSection component
 * Creates urgency by highlighting the education gap
 */
export function ProblemSection() {
  return (
    <SectionWrapper background="light">
      {/* Small label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          THE GAP
        </span>
      </div>

      <SectionHeader
        title="8 Crore Students Are Missing Out"
        subtitle="Students in Tier-2 and Tier-3 India go through 12 years of school without ever touching AI, meeting a career counsellor, competing nationally, or even getting a professional email address. Meanwhile, city kids are building portfolios by grade 10."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        {painPoints.map((point) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-dark font-heading mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-gray-700 italic max-w-2xl mx-auto">
          A student in Karnal deserves the same opportunities as a student in Delhi.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

export default ProblemSection;
