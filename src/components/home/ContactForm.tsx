/**
 * Contact/Demo booking form component
 * Used on homepage and demo booking page
 */

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper';
import { contactFormSchema, type ContactFormInput } from '@/lib/validations';
import { CONTACT } from '@/lib/constants';
import { trackFormSubmission } from '@/lib/analytics';

/**
 * Form submission states
 */
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * ContactForm component
 * Full form for demo booking with validation
 */
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      schoolName: '',
      city: '',
      contactName: '',
      phone: '',
      email: '',
      preferredDate: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        reset();
        trackFormSubmission('demo_booking', { school: data.schoolName });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <SectionWrapper id="contact" background="light">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Form Section */}
        <div>
          <SectionHeader
            title="Book a Free Demo"
            subtitle="Fill out this form and we'll reach out to schedule a FREE interactive session at your school."
            centered={false}
          />

          {/* Success Message */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-green-800">
                  Thank you for your interest!
                </p>
                <p className="text-green-700 text-sm mt-1">
                  We&apos;ve received your request and will contact you within 24 hours to
                  schedule the demo.
                </p>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-800">Submission failed</p>
                <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                label="School Name"
                placeholder="e.g., ABC Public School"
                isRequired
                {...register('schoolName')}
                error={errors.schoolName?.message}
              />
              <Input
                label="City"
                placeholder="e.g., Rohtak, Haryana"
                isRequired
                {...register('city')}
                error={errors.city?.message}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                label="Contact Person Name"
                placeholder="Your full name"
                isRequired
                {...register('contactName')}
                error={errors.contactName?.message}
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="10-digit mobile number"
                isRequired
                {...register('phone')}
                error={errors.phone?.message}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@school.com"
                {...register('email')}
                error={errors.email?.message}
                helperText="Optional but recommended"
              />
              <Input
                label="Preferred Demo Date"
                type="date"
                {...register('preferredDate')}
                error={errors.preferredDate?.message}
                helperText="We'll confirm availability"
              />
            </div>

            <Textarea
              label="Message"
              placeholder="Tell us about your school, number of students, or any specific requirements..."
              rows={4}
              {...register('message')}
              error={errors.message?.message}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={status === 'submitting'}
              leftIcon={<Send className="w-5 h-5" />}
            >
              {status === 'submitting' ? 'Sending...' : 'Request Free Demo'}
            </Button>
          </form>
        </div>

        {/* Info Section */}
        <div className="lg:sticky lg:top-24">
          {/* WhatsApp Alternative */}
          <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-semibold text-dark">Prefer WhatsApp?</h3>
                <p className="text-sm text-gray-600">Get a faster response</p>
              </div>
            </div>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#22c55e] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* What to expect */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
            <h3 className="font-semibold text-dark font-heading text-lg mb-4">
              What happens next?
            </h3>
            <ul className="space-y-3">
              {[
                'We call you within 24 hours',
                'Schedule a convenient date',
                'FREE 45-60 min demo at your school',
                'Students experience live AI interaction',
                'No obligation to continue',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ContactForm;
