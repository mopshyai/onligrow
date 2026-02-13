'use client';

const badges = [
  'NEP 2020 Aligned',
  'Haryana Schools',
  'Hindi + English',
  'Grades 8-12',
  '8 Modules, One Partner',
  'Real Portfolios',
];

export function TrustedBy() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 text-center">
          LAUNCHING IN 2026
        </p>

        {/* Badge row */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {badges.map((badge) => (
            <span
              key={badge}
              className="bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
