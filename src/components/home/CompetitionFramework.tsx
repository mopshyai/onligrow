'use client';

import Link from 'next/link';

export function CompetitionFramework() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-primary-950 relative overflow-hidden">
      {/* Subtle floating shapes */}
      <div className="absolute top-[15%] right-[10%] w-40 h-40 bg-creative-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[15%] w-48 h-48 bg-energy-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-energy-400">
            COMPETITION FRAMEWORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-heading">
            Compete. Prove. Credential.
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Three tiers of achievement — from shipped projects to national
            competitions to certifications — designed to build real confidence.
          </p>
        </div>

        {/* Pyramid visual — stacked bars, narrowing upward */}
        <div className="max-w-2xl mx-auto space-y-3">
          {/* Tier 1 — Top, narrowest, SUCCESS/GREEN */}
          <div className="mx-8 md:mx-16 bg-gradient-to-r from-success-500 to-success-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-success-500/20">
            <div className="text-xs font-bold uppercase tracking-wider opacity-80">TIER 1 — HIGHEST VALUE</div>
            <h3 className="text-xl font-bold mt-1">🏗️ BUILD & SHIP</h3>
            <p className="text-sm text-white/80 mt-2">Projects with real users, clients, or deployments</p>
          </div>

          {/* Tier 2 — Middle, medium width, BLUE */}
          <div className="mx-4 md:mx-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-primary-500/20">
            <div className="text-xs font-bold uppercase tracking-wider opacity-80">TIER 2</div>
            <h3 className="text-xl font-bold mt-1">🏆 COMPETE & LEARN</h3>
            <p className="text-sm text-white/80 mt-2">Hackathons, olympiads — project remains regardless of win</p>
          </div>

          {/* Tier 3 — Base, widest, ORANGE */}
          <div className="bg-gradient-to-r from-energy-500 to-energy-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-energy-500/20">
            <div className="text-xs font-bold uppercase tracking-wider opacity-80">TIER 3 — ALWAYS ACHIEVABLE</div>
            <h3 className="text-xl font-bold mt-1">📜 CERTIFY & CREDENTIAL</h3>
            <p className="text-sm text-white/80 mt-2">Certifications, micro-credentials — always in student&apos;s control</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/olympiad"
            className="inline-flex items-center gap-2 text-energy-400 font-semibold hover:gap-3 transition-all"
          >
            Learn about the OnliGrow Olympiad →
          </Link>
        </div>
      </div>
    </section>
  );
}
