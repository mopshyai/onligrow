/**
 * The OnliGrow System — THE most important page on the site
 * 5 Years, 8 Modules, Complete Student Transformation
 */

import { type Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { CTABanner } from '@/components/shared/CTABanner';
import {
  GRADE_DETAILS,
  APPLICATION_KIT,
  BRIDGE_PROGRAMS,
  MODULES,
} from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.system;

const gradeColors = [
  'border-primary-500 bg-primary-50 text-primary-700',
  'border-creative-500 bg-creative-50 text-creative-700',
  'border-energy-500 bg-energy-50 text-energy-700',
  'border-warm-500 bg-warm-50 text-warm-700',
  'border-success-500 bg-success-50 text-success-700',
];

const gradeBadgeColors = [
  'bg-primary-500',
  'bg-creative-500',
  'bg-energy-500',
  'bg-warm-500',
  'bg-success-500',
];

export default function SystemPage() {
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
            The Complete Architecture
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            The System
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            5 years. 8 modules. 1,000+ hours. A complete architecture designed
            to transform school students into career-ready, portfolio-carrying
            young adults. This is what you&apos;re actually buying when you
            partner with OnliGrow.
          </p>
        </div>
      </section>

      {/* The Architecture */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-primary-500 font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            An Interconnected System
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            OnliGrow isn&apos;t content delivered in sessions. It&apos;s an
            interconnected system where every module feeds into every other
            module. AI projects use English presentation skills. Career guidance
            informs which competitions to enter. Business skills create real
            client projects that go into the portfolio. Digital tools power
            everything. It&apos;s designed as one machine.
          </p>

          {/* Interconnection Visual */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 via-creative-50 to-energy-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {MODULES.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-white rounded-2xl p-4 text-center shadow-card border border-white"
                >
                  <span className="text-2xl">{mod.icon}</span>
                  <p className="text-xs font-semibold text-gray-700 mt-2">
                    {mod.shortName}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 italic">
                Every module feeds into the portfolio. Every skill reinforces
                every other skill. It&apos;s one interconnected system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-by-Grade Architecture */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-creative-500 font-semibold mb-3">
            Grade-by-Grade
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            The 5-Year Architecture
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Each grade has a distinct purpose, theme, and set of outcomes. No
            grade repeats another. Every year builds on the last.
          </p>

          <div className="mt-12 space-y-6">
            {GRADE_DETAILS.map((grade, i) => (
              <div
                key={grade.grade}
                className={`rounded-3xl border-l-4 bg-white shadow-card overflow-hidden ${gradeColors[i].split(' ')[0]}`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`${gradeBadgeColors[i]} text-white text-sm font-bold px-3 py-1 rounded-full`}
                    >
                      Grade {grade.grade}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {grade.theme}
                    </span>
                  </div>
                  <p className="text-energy-600 font-semibold text-sm italic mb-3">
                    &ldquo;{grade.tagline}&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {grade.hours}
                    </span>
                    {grade.bridge && (
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {grade.bridge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {grade.description}
                  </p>
                  <div className="mt-4">
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
      </section>

      {/* The Application Kit */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-950 to-creative-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div className="relative">
              <Zap className="w-8 h-8 text-energy-400 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                The Application Kit
              </h2>
              <p className="mt-3 text-gray-300">
                By the end of Grade 11, every OnliGrow student has these 9 items
                at 80%+ completion:
              </p>
              <ol className="mt-6 space-y-3">
                {APPLICATION_KIT.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-energy-500 text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-gray-400 italic border-t border-white/10 pt-6">
                A Grade 12 student who has all 9 items is calm, confident, and
                focused on executing — not scrambling to build from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Re-Entry Architecture */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-success-500 font-semibold mb-3">
            Flexible Entry
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Joined Late? You&apos;re Not Behind.
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            OnliGrow is designed so that a student joining at any grade gets a
            complete, self-contained experience for their level. We never
            compress previous years into a catch-up program. Instead, we provide
            fast-track bridges.
          </p>

          {/* Bridge Programs Table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-gray-900">
                    Entry Grade
                  </th>
                  <th className="py-3 pr-4 text-sm font-semibold text-gray-900">
                    Bridge Program
                  </th>
                  <th className="py-3 pr-4 text-sm font-semibold text-gray-900">
                    Duration
                  </th>
                  <th className="py-3 text-sm font-semibold text-gray-900">
                    What It Covers
                  </th>
                </tr>
              </thead>
              <tbody>
                {BRIDGE_PROGRAMS.map((bridge) => (
                  <tr
                    key={bridge.entryGrade}
                    className="border-b border-gray-100"
                  >
                    <td className="py-4 pr-4 font-semibold text-gray-900">
                      Grade {bridge.entryGrade}
                    </td>
                    <td className="py-4 pr-4 text-gray-700">
                      {bridge.program}
                    </td>
                    <td className="py-4 pr-4 text-gray-700 text-sm">
                      {bridge.duration}
                    </td>
                    <td className="py-4 text-gray-700 text-sm">
                      {bridge.covers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 shadow-card border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              <strong>Plus:</strong> our modular Bronze/Silver/Gold
              certifications are skill-based, not time-based. A Grade 10 joiner
              can earn Gold certification within 1 year. The 5-year student has
              breadth. The late joiner has intensity. Both paths are valid.
            </p>
          </div>
        </div>
      </section>

      {/* Links to Sub-Pages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                href: '/system/modules',
                icon: <Layers className="w-6 h-6" />,
                title: 'All 8 Modules',
                desc: 'Deep dive into every module',
                color: 'from-primary-500 to-primary-600',
              },
              {
                href: '/system/certifications',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: 'Certifications',
                desc: 'Bronze, Silver, Gold system',
                color: 'from-creative-500 to-creative-600',
              },
              {
                href: '/system/journey',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: 'Student Journey',
                desc: 'Quarter-by-quarter timeline',
                color: 'from-energy-500 to-energy-600',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} text-white flex items-center justify-center flex-shrink-0`}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {link.title}
                  </p>
                  <p className="text-sm text-gray-500">{link.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-energy-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
