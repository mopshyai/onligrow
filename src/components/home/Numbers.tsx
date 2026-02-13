'use client';

import { IMPACT_NUMBERS } from '@/lib/constants';

export function Numbers() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Multi-color gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-creative-600 to-energy-500" />

      {/* Floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-energy-300">
            THE NUMBERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-heading">
            The Portfolio a Student Builds in 5 Years
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {Object.values(IMPACT_NUMBERS).map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white font-mono">
                {stat.value}
              </div>
              <div className="text-white font-semibold mt-2 text-sm md:text-base">{stat.label}</div>
              <div className="text-white/50 text-xs mt-1">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <h3 className="text-warm-400 font-bold text-lg mb-4">Before OnliGrow</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• No portfolio</li>
              <li>• Career chosen by family pressure</li>
              <li>• Zero national competition experience</li>
              <li>• No professional email or LinkedIn</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-energy-500/30">
            <h3 className="text-energy-400 font-bold text-lg mb-4">After OnliGrow</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Portfolio with 10+ documented projects</li>
              <li>• Career chosen through real exposure</li>
              <li>• National competition certificates</li>
              <li>• Complete professional digital identity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
