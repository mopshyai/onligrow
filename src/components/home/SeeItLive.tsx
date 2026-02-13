'use client';

import Link from 'next/link';

export function SeeItLive() {
  return (
    <section className="bg-gray-950 py-20 md:py-28 relative overflow-hidden">
      {/* Floating colored glows */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary-600/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] right-[15%] w-48 h-48 bg-creative-600/10 rounded-full blur-[60px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400">
          SEE IT IN ACTION
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-heading">
          Watch Students Build with AI
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Real students. Real schools. Real projects built during OnliGrow sessions.
        </p>

        {/* Video Container with animated gradient border */}
        <div className="mt-10 relative max-w-3xl mx-auto">
          {/* Gradient border */}
          <div className="absolute -inset-[2px] rounded-3xl gradient-border-animated opacity-60" />

          {/* Video placeholder */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-900 to-creative-900 aspect-video shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur border-2 border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm mt-4">Demo video coming soon</p>
              <Link
                href="/demo"
                className="text-energy-400 text-sm font-semibold underline hover:text-energy-300 mt-2 transition-colors"
              >
                Book a Live Demo Instead →
              </Link>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Row */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 max-w-3xl mx-auto">
          {[
            'Grade 8 — First AI Project',
            'Grade 10 — Hackathon Prep',
            'Grade 11 — Real Client Project',
          ].map((title) => (
            <div
              key={title}
              className="flex-1 rounded-xl bg-gray-900 border border-gray-800 p-3 hover:border-primary-500/50 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="aspect-video bg-gray-800 rounded-lg relative mb-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/80 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
