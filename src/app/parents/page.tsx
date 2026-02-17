/**
 * For Parents page - What your child gets with OnliGrow
 * Hindi-English mixed content with safety and privacy information
 */

import type { Metadata } from 'next';
import { Check, Shield, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.parents;

const whatChildGets = [
  'Understand AI by actually using it — not just hearing about it',
  'Discover 50+ career paths beyond Doctor, Engineer, CA',
  'Build spoken English confidence and presentation skills',
  'Learn entrepreneurship and digital freelancing',
  'Compete nationally in the OnliGrow Olympiad',
  'Get a professional .edu email with ₹15,000+ worth of tools',
  'Earn certificates that set them apart',
];

const parentFAQs = [
  {
    q: 'Ye kya hai exactly?',
    a: 'OnliGrow aapke bachche ko school mein hi AI, career guidance, English speaking, business skills, aur national competitions ka exposure deta hai. Ye sab normally sirf Delhi-Mumbai ke schools mein hota hai. Hum ye aapke bachche ke school mein laate hain.',
  },
  {
    q: 'Kya marks improve honge?',
    a: 'OnliGrow directly marks improve karne ke liye nahi hai. Lekin jo skills students seekhte hain — problem-solving, critical thinking, communication, confidence — ye unke overall performance ko boost karte hain. Aur future mein college admissions aur jobs ke liye ye skills marks se zyada matter karenge.',
  },
  {
    q: 'Kya ye safe hai? Data ka kya?',
    a: '100% safe. Sab sessions school ke andar hoti hain, trained facilitators ke saath, teachers ki supervision mein. DPDPA compliance hai. Bina aapki consent ke koi bhi data collect nahi hota.',
  },
  {
    q: 'Extra paise lagenge?',
    a: 'Program ki details school ke through aati hain. Aapka school aapko sab batayega. Hum directly parents se payment nahi lete.',
  },
  {
    q: 'Real mein kuch seekhenge ya timepass hai?',
    a: 'Bilkul real learning. Students AI tools use karte hain, projects banate hain, professionals se milte hain, competitions mein participate karte hain. Certificate bhi milta hai. Demo session mein aap khud fark dekh lenge.',
  },
  {
    q: 'Kitna time lagta hai? Padhai ka time nahi jaayega?',
    a: 'Haftey mein sirf 1-2 periods (45-60 min). Activity period ya extra slot mein hota hai. Regular padhai bilkul affect nahi hoti.',
  },
];

const safetyPoints = [
  'All sessions inside school, during school hours, under teacher supervision',
  'Trained, background-verified facilitators',
  'No direct communication with students outside school',
  'Full DPDPA compliance',
  'No data without explicit parental consent',
];

export default function ParentsPage() {
  const whatsappShareLink = `https://wa.me/?text=${encodeURIComponent(
    'Check out OnliGrow — they partner with schools to bring AI education, career guidance, and more: https://onligrow.com/schools'
  )}`;

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
            For Parents
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading">
            Aapka Bachcha Sirf Padhai Nahi, Future Ke Liye Tayyar Ho Raha Hai
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            What your child gets through OnliGrow — and why it matters.
          </p>
        </div>
      </section>

      {/* What Your Child Gets */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-6">
            What Your Child Gets
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10">
            OnliGrow isn&apos;t tuition. It&apos;s everything your child&apos;s
            school has never offered before — delivered inside the school, by
            trained professionals, all year round.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {whatChildGets.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Common Parent Questions */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading text-center mb-4">
            Common Questions
          </h2>
          <p className="text-gray-700 text-center mb-12">
            Hindi-English mix — just like we talk
          </p>
          <div className="space-y-3">
            {parentFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-1 text-base">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Safety & Privacy */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
              Safety & Privacy
            </h2>
          </div>
          <p className="text-lg text-gray-700 text-center mb-8">
            Your child&apos;s safety is our #1 priority.
          </p>
          <div className="space-y-4">
            {safetyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 rounded-2xl p-6"
              >
                <Check className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/privacy"
              className="text-primary-600 font-medium hover:underline"
            >
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Recommend to Your School */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            Recommend to Your School
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            If your school doesn&apos;t offer OnliGrow yet, share this page with
            your school principal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappShareLink}
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on WhatsApp
            </Button>
            <Button href="/schools" variant="outline" size="lg">
              View School Page
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Want to Learn More?"
        description="Talk to your school administration about bringing OnliGrow to your child's school."
        primaryCTA="See For Schools Page"
        primaryHref="/schools"
      />
    </>
  );
}
