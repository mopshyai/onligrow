/**
 * Demo booking page - Schedule a free demo session
 * Detailed information about what to expect, requirements, and FAQ
 */

import type { Metadata } from 'next';
import { School, Projector, Clock, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/home/ContactForm';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { pageMetadata } from '@/lib/metadata';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = pageMetadata.demo;

const whatToExpect = [
  {
    emoji: '🤖',
    title: 'Live AI Demos',
    description:
      'Students interact with ChatGPT, create AI images, hear voice AI — real tools, real reactions.',
  },
  {
    emoji: '🎯',
    title: 'Career Exploration',
    description:
      'We show students career paths they\'ve never heard of. The \'aha moment\' is priceless.',
  },
  {
    emoji: '🏆',
    title: 'Mini Competition',
    description:
      'A quick quiz to spark excitement and friendly competition among students.',
  },
];

const requirements = [
  { icon: School, text: 'A room (classroom or auditorium)' },
  { icon: Projector, text: 'A projector (we can bring one if needed)' },
  { icon: Clock, text: '45-60 minutes of student time' },
];

const faqs = [
  {
    q: 'Is it really 100% free?',
    a: 'Yes. No hidden charges, no \'pay later\' catch. The demo is our way of showing you what OnliGrow can do.',
  },
  {
    q: 'How many students can attend?',
    a: '30 to 200. We adjust the format based on your group size.',
  },
  {
    q: 'Which grades?',
    a: 'Grade 6 to 12. We adjust complexity based on the age group.',
  },
  {
    q: 'Hindi or English?',
    a: 'Both! Natural Hindi-English mix — just like students actually talk.',
  },
  {
    q: 'Do my teachers need to prepare anything?',
    a: 'Nothing. We handle everything. Teachers are welcome to sit in.',
  },
  {
    q: 'What happens after the demo?',
    a: 'We send a proposal within 48 hours. If you want to go further, we start a free 3-month pilot. No pressure.',
  },
  {
    q: 'Hamare yahan ke bacche samjhenge kya?',
    a: 'Bilkul! Humara pura program specifically Tier-2/3 students ke liye design kiya hai. Simple language, hands-on activities. Demo mein aap khud dekh lenge.',
  },
];

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-creative-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-energy-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-creative-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-sm uppercase tracking-wider text-energy-400 font-semibold mb-4">
            Book a Demo
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Book a Free Demo Session
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One session. 45 minutes. Zero cost. See the impact before committing
            to anything.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <SectionWrapper>
        <SectionHeader title="What to Expect" />
        <div className="grid md:grid-cols-3 gap-8">
          {whatToExpect.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-6">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* What You Need */}
      <SectionWrapper background="light">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="What You Need (Minimal)" />
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Just three things:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {requirements.map((req) => (
                <div key={req.text} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <req.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{req.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              We bring everything else — laptop, content, facilitator, energy.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* What Happens After */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            What Happens After the Demo?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Within 48 hours, we share a customized proposal for your school. If
            you&apos;re interested, we start a{' '}
            <strong>free 3-month pilot</strong> for 1-2 classes — no cost, no
            commitment. You experience the full OnliGrow partnership before
            deciding anything.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-center mb-12">
            Everything you need to know about booking a free demo
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Booking Form */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
              Let&apos;s Schedule Your Demo
            </h2>
            <p className="text-gray-700 text-lg">
              Fill out the form and we&apos;ll get back to you within 24 hours.
              Or skip the form and message us directly on WhatsApp.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 border border-gray-100">
            <ContactForm />

            {/* WhatsApp Alternative */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-gray-700">Prefer WhatsApp?</span>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#22c55e] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message Us on WhatsApp
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Pre-filled message: &quot;Hi OnliGrow, I&apos;d like to book a
                free demo session for my school.&quot;
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
