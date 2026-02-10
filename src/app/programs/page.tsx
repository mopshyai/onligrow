/**
 * What We Offer page - Complete overview of all 8 modules
 * Shows year-round partnership model with detailed module breakdowns
 */

import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { ModuleCard } from '@/components/programs/ModuleCard';
import { MODULES, CONTACT } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.programs;

/**
 * NEP 2020 Alignment Table
 */
function NEPAlignment() {
  const alignments = [
    { requirement: 'Vocational exposure from Class 6', module: 'Business & Freelancing' },
    { requirement: 'AI and coding in curriculum', module: 'AI & Technology Education' },
    { requirement: 'Holistic development', module: 'English & Life Skills' },
    { requirement: 'Career guidance and counselling', module: 'Career Guidance' },
    { requirement: 'Experiential and competitive learning', module: 'Competitions & Exposure' },
    { requirement: 'Technology-enabled infrastructure', module: 'School Platform + .edu Tools' },
    { requirement: 'Teacher professional development', module: 'Teacher Upskilling' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="text-left p-4 font-semibold">NEP 2020 Requirement</th>
            <th className="text-left p-4 font-semibold">OnliGrow Module</th>
          </tr>
        </thead>
        <tbody>
          {alignments.map((item, idx) => (
            <tr
              key={idx}
              className={`border-b border-gray-200 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="p-4 text-gray-700">{item.requirement}</td>
              <td className="p-4 font-medium text-primary">{item.module}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * What We Offer Page Component
 */
export default function ProgramsPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Everything Your School Needs. One Partnership."
        subtitle="Eight modules delivered by our facilitators, inside your school, all year round. Your students get what metro kids take for granted."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'What We Offer' }]}
      />

      {/* Overview */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            OnliGrow isn't a course you buy and a vendor who leaves. It's a <strong>year-round partnership</strong>. We embed our trained facilitators into your school schedule and deliver eight comprehensive modules — covering everything from AI education to career counselling to national competitions. Your teachers don't prepare anything. Your timetable barely changes. Your students get everything.
          </p>
        </div>
      </SectionWrapper>

      {/* The 8 Modules */}
      <SectionWrapper background="light">
        <SectionHeader
          title="The 8 Modules"
          subtitle="Every module is delivered by trained OnliGrow facilitators inside your school, all year round."
        />
        <div className="space-y-8">
          {MODULES.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </SectionWrapper>

      {/* NEP 2020 Alignment */}
      <SectionWrapper>
        <SectionHeader
          title="NEP 2020 Alignment"
          subtitle="Every OnliGrow module directly maps to NEP 2020 requirements."
        />
        <div className="text-center mb-6">
          <a
            href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-medium text-sm"
          >
            Read the full NEP 2020 policy document
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <NEPAlignment />
        </div>
      </SectionWrapper>

      {/* You Don't Have to Pick */}
      <SectionWrapper background="primary" className="bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            You Don't Have to Pick — You Get Everything
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Unlike other programs where you pick one module and pay separately, an OnliGrow partnership gives your school access to all eight modules. We design a year-long plan together based on your school's priorities, schedule, and student needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Let's Design Your School's Plan
            </Button>
            <Button
              href={CONTACT.whatsappLink}
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#25D366]/90 border-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Give Your Students Everything?"
        description="Start with a free demo. See the impact before committing to anything."
        primaryCTA="Book a Free Demo"
        primaryHref="/demo"
      />
    </>
  );
}
