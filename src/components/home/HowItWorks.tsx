/**
 * "How It Works" section showing the 4-step process
 * Visual timeline explaining the journey from demo to results
 */

'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Gift, Handshake } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { HOW_IT_WORKS } from '@/lib/constants';
import Button from '@/components/ui/Button';

/**
 * Icon mapping for each step
 */
const stepIcons = [Calendar, Users, Gift, Handshake];

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * HowItWorks section component
 * Displays a visual 4-step process timeline
 */
export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" background="white">
      {/* Small label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          HOW IT WORKS
        </span>
      </div>

      <SectionHeader
        title="From First Call to Full Partnership"
        subtitle=""
      />

      {/* Desktop Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="hidden lg:block"
      >
        {/* Timeline line */}
        <div className="relative">
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  variants={stepVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number & icon */}
                  <div className="relative z-10 w-32 h-32 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center mb-6 border-2 border-primary/20">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary font-heading">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-dark font-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile/Tablet Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="lg:hidden"
      >
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

          {/* Steps */}
          <div className="space-y-8">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  variants={stepVariants}
                  className="relative flex gap-6 items-start"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-semibold text-primary">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark font-heading mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Bottom message and CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Every partnership starts with zero risk. You decide only after seeing real results.
        </p>
        <Button href="/demo" variant="primary" size="lg">
          Start with a Demo
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}

export default HowItWorks;
