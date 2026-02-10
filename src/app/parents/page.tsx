/**
 * For Parents page - What your child gets with OnliGrow
 * Hindi-English mixed content with safety and privacy information
 */

import type { Metadata } from 'next';
import { Check, Shield, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { CTABanner } from '@/components/shared/CTABanner';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.parents;

/**
 * What children learn
 */
const whatChildGets = [
  'Understand AI by actually using it — not just hearing about it',
  'Discover 50+ career paths beyond Doctor, Engineer, CA',
  'Build spoken English confidence and presentation skills',
  'Learn entrepreneurship and digital freelancing',
  'Compete nationally in the OnliGrow Olympiad',
  'Get a professional .edu email with ₹15,000+ worth of tools',
  'Earn certificates that set them apart',
];

/**
 * Common questions from parents - Hindi-English mix
 */
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

/**
 * Safety points
 */
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
      {/* Page Hero */}
      <PageHero
        title="Aapka Bachcha Sirf Padhai Nahi, Future Ke Liye Tayyar Ho Raha Hai"
        subtitle="What your child gets through OnliGrow — and why it matters."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'For Parents' }]}
      />

      {/* What Your Child Gets */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading text-center mb-6">
            What Your Child Gets
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10">
            OnliGrow isn't tuition. It's everything your child's school has never offered before — delivered inside the school, by trained professionals, all year round.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {whatChildGets.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Common Parent Questions */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading text-center mb-4">
            Common Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Hindi-English mix — just like we talk
          </p>
          <div className="space-y-6">
            {parentFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-dark mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Safety & Privacy */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading">
              Safety & Privacy
            </h2>
          </div>
          <p className="text-lg text-gray-700 text-center mb-8">
            Your child's safety is our #1 priority.
          </p>
          <div className="space-y-4">
            {safetyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 bg-light rounded-xl p-6">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/privacy"
              className="text-primary font-medium hover:underline"
            >
              Read our Privacy Policy →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Recommend to Your School */}
      <SectionWrapper background="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading mb-6">
            Recommend to Your School
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            If your school doesn't offer OnliGrow yet, share this page with your school principal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappShareLink}
              variant="primary"
              size="lg"
              leftIcon={<MessageCircle className="w-5 h-5" />}
              className="bg-[#25D366] hover:bg-[#25D366]/90"
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

      {/* CTA */}
      <CTABanner
        title="Want to Learn More?"
        description="Talk to your school administration about bringing OnliGrow to your child's school."
        primaryCTA="See For Schools Page"
        primaryHref="/schools"
      />
    </>
  );
}
