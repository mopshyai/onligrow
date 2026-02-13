/**
 * Olympiad page - OnliGrow AI Olympiad information and registration
 */

import type { Metadata } from 'next';
import { Trophy, Users, Award, Target } from 'lucide-react';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.olympiad;

const rounds = [
  {
    round: 1,
    title: 'School Level — Online Quiz',
    description:
      '45-minute AI & technology quiz from their own school. Top scorers advance.',
  },
  {
    round: 2,
    title: 'Regional Finals',
    description:
      'Top students from across the state compete in a deeper, project-based challenge.',
  },
  {
    round: 3,
    title: 'National Finals',
    description:
      'The best minds from across India. Problem-solving, presentations, national recognition.',
  },
];

const sampleQuestions = [
  {
    q: 'You use Google Maps to navigate. Which type of AI is primarily at work?',
    type: 'Multiple choice',
  },
  {
    q: 'A farmer in Punjab wants to detect crop disease early. Which AI application helps most?',
    type: 'Multiple choice',
  },
  {
    q: 'What does "machine learning" mean in simple terms?',
    type: 'Free text',
  },
  {
    q: 'Name two careers that exist today because of AI but didn\'t exist 10 years ago.',
    type: 'Open-ended',
  },
  {
    q: 'If you could use AI to solve one problem in your city, what would it be?',
    type: 'Creative thinking',
  },
];

const benefits = [
  {
    icon: Trophy,
    title: 'National Recognition',
    description: 'Get recognized on a national platform and stand out in college applications.',
  },
  {
    icon: Users,
    title: 'Network with Peers',
    description: 'Meet like-minded students from across India passionate about AI.',
  },
  {
    icon: Award,
    title: 'Prizes & Recognition',
    description: 'Certificates, medals, trophies, and media coverage.',
  },
  {
    icon: Target,
    title: 'Real-World Skills',
    description: 'Develop problem-solving and presentation skills valued by employers.',
  },
];

export default function OlympiadPage() {
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
            The OnliGrow Olympiad
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Small-Town Talent. Big-Stage Competition.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            India&apos;s first AI-focused inter-school competition designed for
            students in Tier-2 and Tier-3 cities.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <SectionWrapper>
        <div className="bg-gradient-to-r from-energy-50 to-energy-50/50 rounded-2xl p-8 text-center border-2 border-energy-200">
          <Badge variant="energy" size="lg" className="mb-4">
            Launching September 2026
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">
            Registrations Opening Soon
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Be among the first schools to participate. Register your interest now
            to receive early access and updates.
          </p>
          <Button href="/olympiad#register" variant="energy" size="lg">
            Register School Interest
          </Button>
        </div>
      </SectionWrapper>

      {/* What is it? */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            What is it?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            India&apos;s first AI-focused inter-school competition designed for
            students in Tier-2 and Tier-3 cities. Three rounds. Thousands of
            students. One national stage. Your students don&apos;t need to travel
            to Delhi to prove they&apos;re brilliant — we bring the competition
            to them.
          </p>
        </div>
      </SectionWrapper>

      {/* Three Rounds */}
      <SectionWrapper>
        <SectionHeader
          title="Three Rounds"
          subtitle="From school quiz to national finals"
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {rounds.map((round) => (
              <div
                key={round.round}
                className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-creative-600 text-white flex items-center justify-center text-2xl font-bold shadow-card">
                    {round.round}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-heading mb-3">
                    Round {round.round}: {round.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {round.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who Can Participate */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            Who Can Participate
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Grade 8-12, any school, any board</strong> — CBSE, ICSE,
            State Board, international. Whether your school is an OnliGrow
            partner or not.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The only requirement? <strong>Curiosity.</strong>
          </p>
        </div>
      </SectionWrapper>

      {/* Why Participate */}
      <SectionWrapper>
        <SectionHeader
          title="Why Participate"
          subtitle="Benefits that go beyond a trophy"
        />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
            >
              <b.icon className="w-8 h-8 text-energy-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-700 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Sample Questions */}
      <SectionWrapper background="light">
        <SectionHeader
          title="Sample Questions"
          subtitle="Get a taste of what the Olympiad tests"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {sampleQuestions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium mb-2">{item.q}</p>
                  <Badge variant="default" size="sm">
                    {item.type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
          <p className="text-center text-gray-700 italic mt-6">
            The actual Olympiad tests AI knowledge, logical reasoning,
            creativity, and real-world problem-solving.
          </p>
        </div>
      </SectionWrapper>

      {/* Prizes & Recognition */}
      <SectionWrapper>
        <SectionHeader
          title="Prizes & Recognition"
          subtitle="Rewarding excellence at every level"
        />
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {[
              { emoji: '🎖️', text: 'Certificates for every participant' },
              { emoji: '🥇', text: 'Gold, Silver, Bronze medals for top performers' },
              { emoji: '🏆', text: 'Trophies for school toppers and regional winners' },
              { emoji: '📰', text: 'National recognition and media coverage' },
              { emoji: '🎓', text: "School gets 'Olympiad Participating School' badge" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-gray-700 text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Register Interest */}
      <SectionWrapper background="light" id="register">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            Register Interest
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Launching September 2026. Register your school&apos;s interest now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="energy" size="lg">
              Register Your School
            </Button>
            <Button href="/demo" variant="outline" size="lg">
              Learn More About OnliGrow
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Give Your Students a National Stage"
        description="Register your school's interest for the OnliGrow Olympiad."
        primaryCTA="Register Interest"
        primaryHref="/contact"
      />
    </>
  );
}
