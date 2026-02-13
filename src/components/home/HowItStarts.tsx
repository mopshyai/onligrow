'use client';

import Button from '@/components/ui/Button';
import { CONTACT, HOW_IT_WORKS } from '@/lib/constants';

const nodeColors = [
  'from-energy-400 to-energy-500',
  'from-creative-400 to-creative-500',
  'from-primary-400 to-primary-500',
  'from-success-400 to-success-500',
];

export function HowItStarts() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-energy-500">
            HOW IT STARTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-heading">
            One Free Demo. That&apos;s It.
          </h2>
        </div>

        {/* Journey path — vertical on mobile, with visual nodes */}
        <div className="relative max-w-xl mx-auto">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.step} className="relative flex items-start">
              {/* Connector line */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div
                  className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-energy-300 to-creative-300"
                  style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, currentColor 4px, currentColor 8px)' }}
                  aria-hidden="true"
                />
              )}

              {/* Node circle */}
              <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${nodeColors[index]} text-white flex items-center justify-center text-2xl shadow-lg`}>
                {step.icon}
              </div>

              {/* Content */}
              <div className="ml-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex-1 hover:shadow-md transition-shadow">
                <p className="text-xs text-energy-500 font-bold uppercase tracking-wider">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 italic mt-8">
          Every partnership starts with zero risk. You decide after seeing real results.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="energy" href="/demo">
            Book a Free Demo
          </Button>
          <Button
            variant="whatsapp"
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
