'use client';

import { TEAM } from '@/lib/constants';

const avatarGradients = [
  'bg-gradient-to-br from-primary-500 to-creative-500',
  'bg-gradient-to-br from-energy-500 to-warm-500',
  'bg-gradient-to-br from-success-500 to-primary-500',
];

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-creative-50/30 via-white to-energy-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
            THE TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-heading">
            Built by People Who Lived the Gap
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
            Three co-founders from Tier-2 India. We&apos;re not building this from a
            WeWork in Bangalore. We&apos;re building it from the ground we&apos;re
            trying to change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-white ${
                  avatarGradients[index % avatarGradients.length]
                }`}
              >
                {member.initials}
              </div>
              <p className="font-bold text-gray-900 mt-4">{member.name}</p>
              <p className="text-sm text-energy-500 font-medium">
                {member.role}
              </p>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
