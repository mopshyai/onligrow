/**
 * Modules Page — Deep dive into all 8 modules
 */

import { type Metadata } from 'next';
import { CTABanner } from '@/components/shared/CTABanner';
import { MODULES } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.modules;

const colorConfig: Record<string, { bg: string; border: string; text: string; light: string }> = {
  primary: { bg: 'bg-primary-50', border: 'border-primary-200', text: 'text-primary-600', light: 'bg-primary-100' },
  energy: { bg: 'bg-energy-50', border: 'border-energy-200', text: 'text-energy-600', light: 'bg-energy-100' },
  success: { bg: 'bg-success-50', border: 'border-success-200', text: 'text-success-600', light: 'bg-success-100' },
  creative: { bg: 'bg-creative-50', border: 'border-creative-200', text: 'text-creative-600', light: 'bg-creative-100' },
  warm: { bg: 'bg-warm-50', border: 'border-warm-200', text: 'text-warm-600', light: 'bg-warm-100' },
};

export default function ModulesPage() {
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
            8 Interconnected Modules
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Everything. Under One Roof.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each module is designed to feed into every other module. AI projects
            use English skills. Career guidance informs competitions. Business
            skills create portfolio artifacts. It&apos;s one interconnected machine.
          </p>
        </div>
      </section>

      {/* Module Deep Dives */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {MODULES.map((mod, index) => {
              const colors = colorConfig[mod.color] ?? colorConfig.primary;
              return (
                <div
                  key={mod.id}
                  className={`${colors.bg} border ${colors.border} rounded-3xl p-8 md:p-10`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${colors.light} flex items-center justify-center text-3xl flex-shrink-0`}>
                      {mod.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${colors.text} uppercase tracking-wider`}>
                        Module {index + 1}
                      </p>
                      <h2 className="text-2xl font-bold text-gray-900 mt-1">
                        {mod.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {mod.tagline}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {mod.hoverDetails}
                  </p>

                  {/* Grade progression */}
                  <div className="mt-6 bg-white rounded-2xl p-4 border border-gray-100">
                    <p className="text-sm font-semibold text-gray-800 mb-3">
                      Grade-by-Grade Progression:
                    </p>
                    <div className="grid grid-cols-5 gap-2 text-center">
                      {[8, 9, 10, 11, 12].map((grade) => (
                        <div key={grade}>
                          <div className={`w-8 h-8 mx-auto rounded-full ${colors.light} ${colors.text} text-xs font-bold flex items-center justify-center`}>
                            {grade}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {grade === 8 && 'Intro'}
                            {grade === 9 && 'Build'}
                            {grade === 10 && 'Apply'}
                            {grade === 11 && 'Lead'}
                            {grade === 12 && 'Master'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interconnection */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Everything Is Connected
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            These aren&apos;t 8 separate programs. They&apos;re 8 threads woven
            into a single fabric. Every module feeds into the student portfolio.
            Every skill reinforces every other skill.
          </p>
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
        </div>
      </section>

      <CTABanner />
    </>
  );
}
