/**
 * Testimonials section placeholder
 * Will display school/student testimonials once collected
 */

'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';

/**
 * Placeholder testimonials (to be replaced with real ones)
 */
const placeholderTestimonials = [
  {
    id: '1',
    quote:
      "The demo session was incredible. Students were engaged from start to finish. We've never seen them this excited about learning technology.",
    author: 'Coming Soon',
    role: 'School Principal',
    school: 'Partner School, Haryana',
    rating: 5,
  },
  {
    id: '2',
    quote:
      "OnliGrow's program perfectly aligns with NEP 2020. It's exactly what our students needed to prepare for the future.",
    author: 'Coming Soon',
    role: 'Academic Coordinator',
    school: 'Partner School, Haryana',
    rating: 5,
  },
  {
    id: '3',
    quote:
      "My child now talks about AI careers and has a clear vision for the future. Thank you OnliGrow for opening these doors.",
    author: 'Coming Soon',
    role: 'Parent',
    school: 'Grade 10 Student Parent',
    rating: 5,
  },
];

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * Star rating component
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-secondary fill-secondary' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

/**
 * TestimonialsSection component
 * Pre-launch version - ready to switch to carousel of testimonials later
 * TODO: Replace with real testimonials after first demo sessions. Use video testimonials where possible.
 */
export function TestimonialsSection() {
  return (
    <SectionWrapper>
      {/* Small label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          What People Say
        </span>
      </div>

      <SectionHeader
        title="The Impact Speaks for Itself"
        subtitle=""
      />

      {/* Pre-launch card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
          {/* Quote icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          {/* Main message */}
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
            We're launching our first school partnerships in March 2026. Want to be among the first?
          </p>

          {/* CTA */}
          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Be an Early Partner
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default TestimonialsSection;
