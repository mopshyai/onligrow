/**
 * For Schools page - Main sales page with complete partnership information
 * Most important conversion page for school decision-makers
 */

import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { Accordion } from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { pageMetadata } from '@/lib/metadata';
import { MODULES, CONTACT } from '@/lib/constants';

export const metadata: Metadata = pageMetadata.schools;

const partnershipSteps = [
  {
    step: 1,
    title: 'Free Demo',
    description:
      'We come for a no-cost, no-commitment session. Your students experience AI firsthand. Takes 45-60 minutes.',
  },
  {
    step: 2,
    title: 'Custom Proposal',
    description:
      'Loved the demo? We send a customized partnership proposal within 48 hours — tailored to your grades, schedule, and priorities.',
  },
  {
    step: 3,
    title: 'Partnership Begins',
    description:
      'We sign a simple partnership agreement. Our facilitators become a regular part of your school. 30-day exit clause, no lock-in.',
  },
  {
    step: 4,
    title: 'Year-Round Impact',
    description:
      'Ongoing sessions, quarterly reviews, student engagement data, teacher feedback, parent response — you see the real impact all year.',
  },
];

const parentExpectations = [
  'Does the school teach AI or coding?',
  'Does the school have career counselling?',
  'Does the school prepare students for national competitions?',
  'Does the school provide professional digital tools?',
];

const qualityPoints = [
  'Every facilitator goes through a 2-week intensive training before entering a classroom',
  'Every session is tracked and measured',
  'Student feedback is collected automatically (auto-alert if rating drops below 3.5/5)',
  'Random sessions are audited monthly',
  'Quarterly formal reviews with the principal',
];

const faqs = [
  {
    q: 'What exactly does OnliGrow do?',
    a: 'We become a year-round partner for your school. AI education, career guidance, English skills, competitions, digital tools, school platform, and teacher training — everything is delivered by our trained facilitators, at your school, within your schedule.',
  },
  {
    q: 'Is this a course or something else?',
    a: 'This is not a course. It\'s a partnership. We don\'t come in, work for 12 weeks, and leave. We stay with your school the entire year. Our facilitators regularly visit your school across multiple modules.',
  },
  {
    q: 'Where do we find time in the academic schedule?',
    a: 'We only need 1-2 periods per week (45-60 min). Activity period, Saturday slot, or after-school time — whatever works for you. Your regular academic schedule is not affected.',
  },
  {
    q: 'Will our students understand it?',
    a: 'Absolutely! Everything is designed specifically for Tier-2/3 students. Simple language, hands-on activities. You\'ll see for yourself in the demo.',
  },
  {
    q: 'Are any schools already using this?',
    a: 'We are starting our pilot with the first school partners in March 2026. Early partner schools will receive founding partner benefits.',
  },
  {
    q: 'Is there any lock-in?',
    a: 'No. There\'s a 30-day exit clause. Your first demo session is completely free. Zero risk.',
  },
];

export default function SchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-creative-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-energy-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-creative-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-sm uppercase tracking-wider text-energy-400 font-semibold mb-4">
            For Schools
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Give Your Students an Unfair Advantage
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every school claims to be &lsquo;future-ready.&rsquo; OnliGrow
            actually makes it happen — with a year-round partnership that covers
            everything.
          </p>
        </div>
      </section>

      {/* The Problem for Schools */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-8">
            The Problem for Schools
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Other schools in your city are starting AI programs. Parents are
              asking <em>&ldquo;what extra does your school offer?&rdquo;</em>{' '}
              NEP 2020 demands skill-based learning, vocational exposure, and
              technology integration. But hiring specialists costs lakhs.
              Building infrastructure costs more. And your academic calendar is
              already packed.
            </p>
            <p className="text-xl font-semibold text-gray-900 text-center py-4">
              You don&apos;t need to do it alone.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* The OnliGrow Partnership */}
      <SectionWrapper background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-6">
            The OnliGrow Partnership
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              OnliGrow becomes your school&apos;s education enhancement partner.
              We embed trained facilitators into your school schedule and deliver
              eight comprehensive modules — all year, not just for a few weeks.
            </p>
            <p>
              Your school gets AI education, certified career counselling,
              English and life skills, business exposure, national competitions,
              professional digital tools for every student, a school management
              platform, and quarterly teacher upskilling —{' '}
              <strong>
                all from one partner, under one agreement.
              </strong>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* The 8 Modules */}
      <SectionWrapper>
        <SectionHeader
          title="The 8 Modules"
          subtitle="Everything your school needs, one partnership."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {MODULES.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {module.shortName}
              </h3>
              <p className="text-sm text-gray-700">{module.tagline}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            href="/system"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            See Full Details on Each Module
          </Button>
        </div>
      </SectionWrapper>

      {/* How Partnership Works */}
      <SectionWrapper background="light">
        <SectionHeader
          title="How Partnership Works"
          subtitle="From first demo to full partnership — all starting with zero risk."
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {partnershipSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* What Parents Want */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-6">
            What Parents Want
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Parent expectations are changing — even in Tier-2/3 cities.
            They&apos;re now asking:
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            {parentExpectations.map((question, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{question}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-gray-900 mt-8">
            When you partner with OnliGrow, the answer to every question is{' '}
            <span className="text-primary-600">yes</span>.
          </p>
        </div>
      </SectionWrapper>

      {/* NEP 2020 Compliance */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            NEP 2020 Compliance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            OnliGrow makes NEP 2020 compliance effortless. Our modules directly
            map to every major NEP requirement — vocational exposure, AI in
            curriculum, holistic development, career counselling, experiential
            learning, teacher development. We even provide the compliance
            documentation.
          </p>
          <a
            href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Read the full NEP 2020 policy document
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </SectionWrapper>

      {/* Quality Assurance */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-8">
            Quality Assurance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <Check className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Every School is Unique */}
      <SectionWrapper background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Every School is Unique
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Student count, grades, schedule, and priorities all shape the
            partnership. We design a custom plan that works for your school and
            your budget. The first demo session is free — see the impact before
            committing to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="white"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Let&apos;s Talk About Your School
            </Button>
            <Button
              href={CONTACT.whatsappLink}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs for Principals */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-4">
            FAQs for Principals
          </h2>
          <p className="text-gray-700 text-center mb-12">
            Common questions from school principals
          </p>
          <Accordion items={faqs} />
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ready to Transform Your School?"
        description="Start with a free demo. Experience the impact before making any decisions."
        primaryCTA="Book a Free Demo"
        primaryHref="/demo"
      />
    </>
  );
}
