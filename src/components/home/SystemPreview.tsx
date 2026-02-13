'use client';

import Link from 'next/link';

const grades = [
  { grade: 8, theme: 'Foundation', tagline: 'Discover everything', color: 'from-success-400 to-success-500', emoji: '🌱', ring: 'ring-success-200' },
  { grade: 9, theme: 'Exploration', tagline: 'Stop consuming, start creating', color: 'from-primary-400 to-primary-500', emoji: '🔍', ring: 'ring-primary-200' },
  { grade: 10, theme: 'Board Year', tagline: 'Boards first, keep building', color: 'from-energy-400 to-energy-500', emoji: '📚', ring: 'ring-energy-200' },
  { grade: 11, theme: 'Building Year', tagline: 'Build everything now', color: 'from-warm-400 to-warm-500', emoji: '🔨', ring: 'ring-warm-200' },
  { grade: 12, theme: 'Launch Year', tagline: 'Polish, submit, launch', color: 'from-creative-400 to-creative-500', emoji: '🚀', ring: 'ring-creative-200' },
];

export function SystemPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-50 via-creative-50/30 to-energy-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
            THE SYSTEM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-heading">
            5 Years. 1 Complete Architecture.
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Each grade has a distinct purpose. No grade repeats another. Every year
            builds on the last.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-1 bg-gradient-to-r from-success-300 via-primary-300 via-energy-300 via-warm-300 to-creative-300 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {grades.map((g) => (
              <div key={g.grade} className="relative text-center group">
                {/* Circle */}
                <div
                  className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${g.color} flex items-center justify-center text-white relative z-10 ring-4 ${g.ring} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <div>
                    <span className="text-3xl">{g.emoji}</span>
                    <p className="text-xs font-bold mt-0.5">Grade {g.grade}</p>
                  </div>
                </div>
                {/* Theme */}
                <h3 className="font-bold text-gray-900 mt-4 text-sm">
                  {g.theme}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{g.tagline}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/system"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-lg hover:gap-3 transition-all"
          >
            Explore the Full System →
          </Link>
        </div>
      </div>
    </section>
  );
}
