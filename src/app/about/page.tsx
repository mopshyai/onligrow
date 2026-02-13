/**
 * About page - Our Story
 * Built by People Who Lived the Gap
 */

import type { Metadata } from 'next';
import { Scale, Focus, Zap, Heart, Trophy, Shield } from 'lucide-react';
import { CTABanner } from '@/components/shared/CTABanner';
import { TEAM } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.about;

const values = [
  {
    icon: Scale,
    title: 'Access Over Exclusivity',
    description:
      "We exist because of inequality. If a school can't afford it, we find a way.",
  },
  {
    icon: Focus,
    title: 'Clarity Over Confusion',
    description:
      "Students don't need more information. They need clearer information.",
  },
  {
    icon: Zap,
    title: 'Action Over Theory',
    description:
      "We don't talk about AI. We put it in students' hands.",
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
      "Competition isn't about trophies. It's about discovering what you're capable of.",
  },
  {
    icon: Shield,
    title: 'Honesty in Everything',
    description:
      "We don't oversell. Trust is our most valuable asset.",
  },
];

const milestones = [
  { date: 'January 2026', event: 'OnliGrow founded by four co-founders from Tier-2 India' },
  { date: 'February 2026', event: 'Website launched. School outreach begins in Haryana.' },
  { date: 'March 2026', event: 'First partner school demos delivered' },
  { date: 'June 2026', event: 'First schools move to year-round partnership' },
  { date: 'September 2026', event: 'OnliGrow Olympiad — first edition' },
  { date: '2027', event: 'Expanding to UP, Punjab, Rajasthan' },
];

const avatarGradients = [
  'bg-gradient-to-br from-primary-500 to-creative-500',
  'bg-gradient-to-br from-energy-500 to-warm-500',
  'bg-gradient-to-br from-success-500 to-primary-500',
  'bg-gradient-to-br from-creative-500 to-energy-500',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-creative-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-energy-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-creative-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-sm uppercase tracking-wider text-energy-400 font-semibold mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Built by People Who{' '}
            <span className="text-gradient-warm">Lived the Gap</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Four co-founders from Tier-2 India. We&apos;re not building this from a WeWork in Bangalore.
            We&apos;re building it from the ground we&apos;re trying to change.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
            Why We Built This
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              OnliGrow started with a simple observation: a student in Karnal
              doesn&apos;t get the same opportunities as a student in Delhi. Not
              because they&apos;re less capable — but because no one brings
              those opportunities to them.
            </p>
            <p>
              We saw schools where &ldquo;career guidance&rdquo; means one assembly talk
              about engineering and medicine. Where &ldquo;computer class&rdquo; is MS Paint
              and typing practice. Where students never compete nationally,
              never meet a professional outside their city, and never get a
              professional email until college.
            </p>
            <p>
              <strong>We didn&apos;t build another edtech that sells AI workshops.</strong>{' '}
              We built a 5-year operating system that takes a Grade 8 student
              and systematically builds them into a career-ready,
              portfolio-carrying, nationally-competitive young adult by Grade
              12. No other company in India does this.
            </p>
            <p>
              Other companies sell individual pieces. We architect the entire
              journey — AI education, career architecture, life skills, business
              exposure, national competitions, professional tools, school
              digitization, and teacher empowerment — all interconnected, all
              year-round, all inside the school.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary-600">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To bridge the education gap in Tier-2 and Tier-3 India by
                bringing a complete student futures architecture — AI literacy,
                career clarity, life skills, and global exposure — directly into
                schools, so every student gets a fair shot at the future.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-2xl font-bold font-heading mb-4 text-creative-600">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A future where a student in Karnal has the same awareness,
                skills, portfolio, and confidence as a student in Delhi or
                Bangalore. Where choosing a career isn&apos;t based on what your
                neighbor&apos;s son did, but on genuine exposure to the full
                range of possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              These principles guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-700 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-energy-500 font-semibold mb-3">
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              The People Behind the System
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-card hover:shadow-lg transition-all text-center"
              >
                <div
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-white ${avatarGradients[i]}`}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-energy-500 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Milestones
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Our journey so far (and what&apos;s next).
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative flex gap-6 items-start"
                  >
                    <div className="relative z-10 w-8 h-8 rounded-full bg-primary-600 border-4 border-white shadow-md flex-shrink-0" />
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-primary-600 mb-1">
                        {milestone.date}
                      </p>
                      <p className="text-gray-700 text-lg">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Be Part of the Journey?"
        description="Join us as an early partner school and help shape the future of education in India."
      />
    </>
  );
}
