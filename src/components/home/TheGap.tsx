'use client';

import { X, CheckCircle } from 'lucide-react';

const tierTwoItems = [
  '"Career guidance" = one assembly talk in Grade 10',
  '"Computer class" = MS Paint and typing speed tests',
  'Never heard of a hackathon, let alone competed',
  'No professional email until college admission',
  'No exposure, no mentors, no portfolio',
];

const metroItems = [
  'Career counselor on campus from Grade 8',
  'AI labs, robotics clubs, coding bootcamps',
  'National competitions every quarter',
  'Professional email and portfolio by Grade 10',
  'Internships, industry visits, mentor networks',
];

export function TheGap() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-warm-500">
            THE PROBLEM
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 font-heading">
            Two Indias. One Education System.
          </h2>
        </div>

        {/* Split comparison */}
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* LEFT — Tier 2/3 (muted, gray) */}
          <div className="bg-gray-100 p-8 md:p-10 relative">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-bold mb-6">
              😔 STUDENT IN TIER-2/3 INDIA
            </div>
            <div className="space-y-4">
              {tierTwoItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Metro (vibrant, colorful) */}
          <div className="bg-gradient-to-br from-primary-600 to-creative-700 p-8 md:p-10 relative">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm mb-6">
              🌟 STUDENT IN METRO INDIA
            </div>
            <div className="space-y-4">
              {metroItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Punchline */}
        <div className="mt-10 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            OnliGrow exists to close this gap. Not with a course. With a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-creative-600">
              system
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
