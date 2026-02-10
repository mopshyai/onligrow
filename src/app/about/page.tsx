/**
 * About page - Our story, mission, values, team, and milestones
 */

import type { Metadata } from 'next';
import {
  Scale, Focus, Zap, Heart, Trophy, Shield
} from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { TeamSection } from '@/components/home/TeamSection';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { IconCard } from '@/components/ui/Card';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.about;

/**
 * Core values data - 6 values
 */
const values = [
  {
    icon: Scale,
    title: 'Access Over Exclusivity',
    description:
      'We exist because of inequality. If a school can\'t afford it, we find a way.',
  },
  {
    icon: Focus,
    title: 'Clarity Over Confusion',
    description:
      'Students don\'t need more information. They need clearer information.',
  },
  {
    icon: Zap,
    title: 'Action Over Theory',
    description:
      'We don\'t talk about AI. We put it in students\' hands.',
  },
  {
    icon: Heart,
    title: 'Respect for Schools',
    description:
      'Schools are our partners, not our customers. We enhance, never disrupt.',
  },
  {
    icon: Trophy,
    title: 'Compete to Grow',
    description:
      'Competition isn\'t about trophies. It\'s about discovering what you\'re capable of.',
  },
  {
    icon: Shield,
    title: 'Honesty in Everything',
    description:
      'We don\'t oversell. Trust is our most valuable asset.',
  },
];

/**
 * Milestones timeline
 */
const milestones = [
  { date: 'January 2026', event: 'OnliGrow founded' },
  { date: 'February 2026', event: 'Website launched. School outreach begins in Haryana.' },
  { date: 'March 2026', event: 'First free pilots in partner schools' },
  { date: 'June 2026', event: 'First schools move to full annual partnership' },
  { date: 'September 2026', event: 'OnliGrow Olympiad — first edition' },
  { date: '2027', event: 'Expanding to UP, Punjab, Rajasthan' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="We Exist Because of a Gap"
        subtitle="Four co-founders from Tier-2 India, building what they wish they'd had as students."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Our Story */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              OnliGrow started with a simple observation: a student in Karnal doesn't get the same opportunities as a student in Delhi. Not because they're less capable — but because no one brings those opportunities to them.
            </p>
            <p>
              We saw schools where 'career guidance' means one assembly talk about engineering and medicine. Where 'computer class' is MS Paint and typing practice. Where students never compete nationally, never meet a professional outside their city, and never get a professional email until college.
            </p>
            <p>
              <strong>OnliGrow exists to fix this.</strong> We partner with schools year-round to bring AI education, career guidance, English and life skills, business exposure, national competitions, and professional digital tools — all delivered inside the school, by our own facilitators, in Hindi and English.
            </p>
            <p>
              We don't sell courses. We don't come once and leave. We become your school's education enhancement partner. Our facilitators become a regular part of school life. Our modules run all year. And every student — whether they're in grade 6 or grade 12 — gets access to what was previously only available in metro cities.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper background="light">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To bridge the education gap in Tier-2 and Tier-3 India by bringing AI literacy, career clarity, life skills, and global exposure directly into schools — so every student, regardless of their city or background, gets a fair shot at the future.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold font-heading mb-4 text-accent">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A future where a student in Karnal has the same awareness, skills, and confidence as a student in Delhi or Bangalore. Where choosing a career isn't based on what your neighbor's son did, but on genuine exposure to the full range of possibilities.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper>
        <SectionHeader
          title="Our Values"
          subtitle="These principles guide everything we do at OnliGrow."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <IconCard
              key={value.title}
              icon={<value.icon className="w-6 h-6" />}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <TeamSection />

      {/* Milestones Timeline */}
      <SectionWrapper background="light">
        <SectionHeader
          title="Milestones"
          subtitle="Our journey so far (and what's next)."
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />

            {/* Timeline items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-6 items-start">
                  {/* Dot */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-md flex-shrink-0" />

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      {milestone.date}
                    </p>
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 italic">
            // Update as milestones happen
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title="Want to Be Part of the Journey?"
        description="Join us as an early partner school and help shape the future of education in India."
        primaryCTA="Book a Free Demo"
        primaryHref="/demo"
      />
    </>
  );
}
