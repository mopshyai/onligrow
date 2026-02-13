'use client';

import Link from 'next/link';
import { MODULES } from '@/lib/constants';

const colorMap: Record<string, { strip: string; iconBg: string; iconText: string }> = {
  primary: {
    strip: 'from-primary-500 to-creative-500',
    iconBg: 'bg-gradient-to-br from-primary-100 to-creative-100',
    iconText: 'text-primary-600',
  },
  energy: {
    strip: 'from-energy-500 to-warm-500',
    iconBg: 'bg-gradient-to-br from-energy-100 to-warm-100',
    iconText: 'text-energy-600',
  },
  success: {
    strip: 'from-success-500 to-primary-500',
    iconBg: 'bg-gradient-to-br from-success-100 to-primary-100',
    iconText: 'text-success-600',
  },
  creative: {
    strip: 'from-creative-500 to-warm-500',
    iconBg: 'bg-gradient-to-br from-creative-100 to-warm-100',
    iconText: 'text-creative-600',
  },
  warm: {
    strip: 'from-warm-500 to-energy-500',
    iconBg: 'bg-gradient-to-br from-warm-100 to-energy-100',
    iconText: 'text-warm-600',
  },
};

// Module-specific gradients for the bento grid
const moduleGradients: Record<string, string> = {
  'ai-technology': 'from-primary-500 to-creative-500',
  'career-architecture': 'from-energy-500 to-warm-500',
  'english-life-skills': 'from-creative-500 to-primary-500',
  'business-freelancing': 'from-energy-500 to-success-500',
  'competitions': 'from-warm-500 to-energy-500',
  'digital-identity': 'from-primary-500 to-success-500',
  'school-platform': 'from-success-500 to-creative-500',
  'teacher-upskilling': 'from-creative-500 to-warm-500',
};

// Bento grid sizing: which modules get col-span-2
const largeModules = new Set(['ai-technology', 'digital-identity']);

export function ModuleGrid() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-creative-500">
            8 MODULES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-heading">
            Everything. Under One Roof.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          {MODULES.map((module) => {
            const colors = colorMap[module.color] ?? colorMap.primary;
            const gradient = moduleGradients[module.id] || colors.strip;
            const isLarge = largeModules.has(module.id);

            return (
              <div
                key={module.id}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-[400ms] ease-out relative overflow-hidden cursor-pointer${
                  isLarge ? ' lg:col-span-2' : ''
                }`}
              >
                {/* Colored top strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

                {/* Icon with colored background */}
                <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{module.icon}</span>
                </div>

                {/* Module name */}
                <h3 className="text-lg font-bold text-gray-900 mt-4">{module.name}</h3>

                {/* Tagline */}
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{module.tagline}</p>

                {/* Hover reveal: tool progression */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-[400ms]">
                  <p className="text-xs text-primary-600 font-mono mt-2 border-t border-gray-100 pt-3">
                    {module.hoverDetails}
                  </p>
                </div>

                {/* Tool logos row */}
                {module.toolLogos && module.toolLogos.length > 0 && (
                  <div className="flex gap-2 items-center mt-3 pt-3 border-t border-gray-100">
                    {module.toolLogos.slice(0, 5).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-medium bg-gray-100 text-gray-500 rounded px-1.5 py-0.5 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/system/modules"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-lg hover:gap-3 transition-all"
          >
            Deep Dive into Every Module →
          </Link>
        </div>
      </div>
    </section>
  );
}
