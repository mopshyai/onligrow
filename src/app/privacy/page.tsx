/**
 * Privacy Policy page - DPDPA compliant
 */

import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { CONTACT, SITE_CONFIG } from '@/lib/constants';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.privacy;

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your data"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-sm mb-8">
            <strong>Last Updated:</strong> February 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data We Collect</h2>
              <div className="text-gray-700 space-y-4">
                <p><strong>Forms:</strong> School name, contact details, phone, email (optional), messages</p>
                <p><strong>Usage:</strong> IP address, browser, pages visited</p>
                <p><strong>Children&apos;s Data:</strong> Only with explicit parental consent. Never collected without consent.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Data</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Respond to inquiries</li>
                <li>Deliver partnership services</li>
                <li>Issue certificates</li>
                <li>Improve services</li>
              </ul>
              <p className="text-gray-700 mt-4"><strong>We never sell data or use it for advertising.</strong></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact forms: 1 year</li>
                <li>Partner schools: Partnership + 2 years</li>
                <li>Student data: Partnership completion + 6 months (or earlier on request)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Rights (DPDPA)</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your data</li>
                <li>Request corrections</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
                <li>Lodge complaints with Data Protection Board of India</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact</h2>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-primary-600 hover:underline">{CONTACT.email}</a></p>
                <p className="text-gray-700 mt-2"><strong>Address:</strong> {CONTACT.address}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
