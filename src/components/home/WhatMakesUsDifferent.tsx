'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BENEFITS } from '@/lib/constants';

const accentColors = [
  'border-l-primary-500',
  'border-l-energy-500',
  'border-l-creative-500',
  'border-l-success-500',
  'border-l-warm-500',
];

const emojis = ['🏗️', '🏅', '🚀', '🔄', '🛡️'];

export function WhatMakesUsDifferent() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-energy-500">
            WHY WE&apos;RE DIFFERENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-heading">
            This Isn&apos;t Another EdTech.{' '}
            <br className="hidden sm:block" />
            This Is Infrastructure.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Anyone can run a 12-week AI workshop. Here&apos;s what no one else has built.
          </p>
        </div>

        <div className="space-y-6">
          {BENEFITS.map((benefit, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={benefit.title}
                className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual/icon side */}
                <div className="w-full md:w-2/5 aspect-square max-w-[200px] rounded-3xl bg-gradient-to-br from-primary-100 via-creative-50 to-energy-50 flex items-center justify-center p-8">
                  <span className="text-8xl">{emojis[index]}</span>
                </div>

                {/* Content side */}
                <div className={`w-full md:w-3/5 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm border-l-4 ${accentColors[index]}`}>
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    What Others Don&apos;t Have
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed text-lg">{benefit.description}</p>
                  {index === 1 && (
                    <Link
                      href="/system/certifications"
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold mt-4 hover:gap-3 transition-all"
                    >
                      See the Certification System <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
