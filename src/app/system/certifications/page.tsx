/**
 * Certifications Page — Skill-Based, Not Time-Based
 * Bronze, Silver, Gold across all 8 modules
 */

import { type Metadata } from 'next';
import { CTABanner } from '@/components/shared/CTABanner';
import { MODULE_CERTIFICATIONS } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.certifications;

const BADGE_CONFIG = [
  {
    level: 'Bronze',
    icon: '\u{1F949}',
    key: 'bronze' as const,
    label: 'Foundational skill demonstrated',
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
  },
  {
    level: 'Silver',
    icon: '\u{1F948}',
    key: 'silver' as const,
    label: 'Intermediate with real output',
    cardBg: 'bg-gray-50',
    cardBorder: 'border-gray-300',
  },
  {
    level: 'Gold',
    icon: '\u{1F947}',
    key: 'gold' as const,
    label: 'Mastery with external validation',
    cardBg: 'bg-yellow-50',
    cardBorder: 'border-yellow-300',
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-creative-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-energy-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-creative-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Certifications That Mean Something
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every certification is earned by demonstrating skill&nbsp;&mdash;
            not by showing up. A student who joins in Grade&nbsp;10 can earn
            Gold in 1&nbsp;year.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-primary-500 font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Three Levels. One Principle: Skill.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BADGE_CONFIG.map((badge) => (
              <div
                key={badge.level}
                className={`${badge.cardBg} border ${badge.cardBorder} rounded-2xl p-6 text-center`}
              >
                <span className="text-4xl">{badge.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {badge.level}
                </h3>
                <p className="mt-2 text-gray-700">{badge.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Certifications are independent of grade&nbsp;&mdash; they measure
            what you <strong>CAN DO</strong>, not how long you&apos;ve been
            enrolled.
          </p>
        </div>
      </section>

      {/* Module Certification Grid */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-creative-500 font-semibold mb-3">
            Module-by-Module
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Certification Requirements
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Each of our 8&nbsp;modules has its own Bronze, Silver, and Gold
            benchmarks.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODULE_CERTIFICATIONS.map((mod) => (
              <div
                key={mod.moduleId}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {mod.moduleName}
                </h3>
                <div className="space-y-3">
                  {BADGE_CONFIG.map((badge) => (
                    <div key={badge.key} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">
                        {badge.icon}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {mod[badge.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principle */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-creative-50 rounded-2xl p-8 border border-primary-100">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
              Key Principle
            </h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Certifications are <strong>ADDITIVE</strong>. A student can hold
              Bronze in some modules and Gold in others. There is no
              &ldquo;pass/fail.&rdquo; Only progress.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
