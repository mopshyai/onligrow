/**
 * "Why Schools Choose OnliGrow" section
 * Displays 6 key benefits in a grid layout
 */

'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  CheckCircle,
  Users,
  Layers,
  Trophy,
  Mail,
} from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { BENEFITS } from '@/lib/constants';

/**
 * Icon mapping for each benefit
 * Order: shield, checkCircle, users, layers, trophy, mail
 */
const benefitIcons = [Shield, CheckCircle, Users, Layers, Trophy, Mail];

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

/**
 * WhySchoolsChoose section component
 * Highlights the key benefits of partnering with OnliGrow
 */
export function WhySchoolsChoose() {
  return (
    <SectionWrapper background="light">
      {/* Small label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          Why Schools Choose Us
        </span>
      </div>

      <SectionHeader
        title="What Makes OnliGrow Different"
        subtitle=""
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {BENEFITS.map((benefit, index) => {
          const Icon = benefitIcons[index];
          return (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-dark font-heading mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

export default WhySchoolsChoose;
