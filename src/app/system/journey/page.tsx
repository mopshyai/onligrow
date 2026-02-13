/**
 * Student Journey — Quarter-by-quarter timeline across 5 years
 */

import { type Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { CTABanner } from '@/components/shared/CTABanner';
import { GRADE_DETAILS } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.journey;

const gradientColors = [
  'from-primary-500 to-primary-600',
  'from-creative-500 to-creative-600',
  'from-energy-500 to-energy-600',
  'from-warm-500 to-warm-600',
  'from-success-500 to-success-600',
];

export default function JourneyPage() {
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
            The 5-Year Journey
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            From Curious Student to Career-Ready Adult
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            20 quarters. 5 distinct phases. Each grade has its own purpose, theme,
            and measurable outcomes. No grade repeats another.
          </p>
        </div>
      </section>

      {/* Grade-by-Grade Journey */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">
            The Complete Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {GRADE_DETAILS.map((grade, i) => (
                <div key={grade.grade} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${gradientColors[i]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {grade.grade}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        Grade {grade.grade}: {grade.theme}
                      </h3>
                    </div>
                    <p className="text-energy-600 font-semibold text-sm italic mb-3">
                      &ldquo;{grade.tagline}&rdquo;
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {grade.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{grade.hours}</p>

                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-2">
                        Key Outcomes:
                      </p>
                      <ul className="space-y-1.5">
                        {grade.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cumulative Portfolio View */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            The Cumulative Portfolio
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            By the end of the 5-year journey, every student has built a comprehensive
            portfolio that grows each year.
          </p>

          <div className="space-y-4">
            {[
              { grade: 8, items: 'First AI project, self-intro video, 3 tool certifications' },
              { grade: 9, items: '+ 2 competition entries, career map, business pitch, English portfolio' },
              { grade: 10, items: '+ National competition certificates, client project, professional LinkedIn' },
              { grade: 11, items: '+ Specialization projects, mentorship experience, college application kit ready' },
              { grade: 12, items: '+ Capstone project, complete professional identity, interview-ready portfolio' },
            ].map((item, i) => (
              <div key={item.grade} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientColors[i]} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                >
                  {item.grade}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-4 border border-gray-100 shadow-card">
                  <p className="text-gray-700 text-sm">{item.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
