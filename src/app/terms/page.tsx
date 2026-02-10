/**
 * Terms of Service page
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CONTACT, SITE_CONFIG } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.terms;

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Conditions for using our website and programs"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-sm mb-8">
            <strong>Last Updated:</strong> February 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using {SITE_CONFIG.name}'s website and services, you agree to be bound by these Terms of Service. If you disagree with any part, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">2. Use of Website</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must be at least 18 years old or have parental consent</li>
                <li>Provide accurate information in forms</li>
                <li>Do not misuse or attempt to harm the website</li>
                <li>Do not copy or redistribute content without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on this website — text, images, logos, curriculum materials — is owned by {SITE_CONFIG.legalName} and protected by Indian copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">4. Program Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Programs are subject to availability and school partnership agreements</li>
                <li>We reserve the right to modify curriculum and content</li>
                <li>Certificates are issued upon program completion</li>
                <li>Refund policies are outlined in partnership agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700">
                {SITE_CONFIG.name} is not liable for indirect, incidental, or consequential damages arising from use of our services. We provide services "as is" without warranties of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">6. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Haryana, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these terms at any time. Continued use after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4">8. Contact</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">{CONTACT.email}</a></p>
                <p className="text-gray-700 mt-2"><strong>Address:</strong> {CONTACT.address}</p>
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
