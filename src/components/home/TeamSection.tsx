/**
 * Team section displaying the founding team
 * Shows 4 co-founders with photos, names, roles, and bios
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { TEAM } from '@/lib/constants';
import { getInitials } from '@/lib/utils';

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
 * TeamSection component
 * Displays the founding team with their details
 */
export function TeamSection() {
  return (
    <SectionWrapper id="team" background="light">
      {/* Small label */}
      <div className="text-center mb-4">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
          MEET THE TEAM
        </span>
      </div>

      <SectionHeader
        title="Built by People Who Understand the Gap"
        subtitle="Four co-founders from Tier-2 India who lived the problem they're now solving."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {TEAM.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Photo */}
            <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
              {/* Placeholder avatar with initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/30 font-heading">
                  {getInitials(member.name)}
                </span>
              </div>

              {/* Actual image (will overlay placeholder when loaded) */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover opacity-0 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                onLoad={(e) => {
                  // Show image once loaded
                  (e.target as HTMLImageElement).classList.remove('opacity-0');
                }}
                onError={(e) => {
                  // Keep placeholder visible on error
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* LinkedIn link on hover */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-dark font-heading">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re a team of educators, engineers, and dreamers who believe every
          student deserves access to quality AI education, regardless of where they
          live.
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline"
        >
          Learn more about our story
          <svg
            className="w-4 h-4"
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
      </motion.div>
    </SectionWrapper>
  );
}

export default TeamSection;
