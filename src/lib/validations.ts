/**
 * Zod validation schemas for OnliGrow website forms
 * Client-side and server-side validation using the same schemas
 */

import { z } from 'zod';

/**
 * Indian phone number validation
 * Accepts: 10 digits starting with 6-9, or with +91/91 prefix
 */
const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

/**
 * Contact form / Demo booking schema
 * Used for both contact page and demo booking forms
 */
export const contactFormSchema = z.object({
  schoolName: z
    .string()
    .min(2, 'School name must be at least 2 characters')
    .max(100, 'School name must be less than 100 characters'),

  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters'),

  contactName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  phone: z
    .string()
    .regex(
      phoneRegex,
      'Please enter a valid Indian phone number (10 digits starting with 6-9)'
    ),

  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),

  preferredDate: z.string().optional().or(z.literal('')),

  message: z
    .string()
    .max(500, 'Message must be less than 500 characters')
    .optional()
    .or(z.literal('')),
});

/**
 * Type inferred from contact form schema
 */
export type ContactFormInput = z.infer<typeof contactFormSchema>;

/**
 * Newsletter subscription schema
 * Simple email-only form
 */
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

/**
 * Olympiad registration schema
 * Extended form for school registration in the olympiad
 */
export const olympiadRegistrationSchema = z.object({
  schoolName: z
    .string()
    .min(2, 'School name must be at least 2 characters')
    .max(100, 'School name must be less than 100 characters'),

  schoolAddress: z
    .string()
    .min(10, 'Please provide a complete address')
    .max(200, 'Address must be less than 200 characters'),

  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters'),

  state: z
    .string()
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State must be less than 50 characters'),

  pincode: z
    .string()
    .regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode'),

  principalName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  principalEmail: z.string().email('Please enter a valid email address'),

  principalPhone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),

  coordinatorName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  coordinatorEmail: z.string().email('Please enter a valid email address'),

  coordinatorPhone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),

  expectedParticipants: z
    .number()
    .min(10, 'Minimum 10 participants required')
    .max(500, 'Maximum 500 participants allowed'),

  grades: z
    .array(z.enum(['8', '9', '10', '11', '12']))
    .min(1, 'Please select at least one grade'),
});

export type OlympiadRegistrationInput = z.infer<typeof olympiadRegistrationSchema>;

/**
 * Validate phone number helper
 * Returns cleaned phone number or null if invalid
 */
export function cleanPhoneNumber(phone: string): string | null {
  const cleaned = phone.replace(/\D/g, '');

  // Handle 10-digit number
  if (cleaned.length === 10 && /^[6-9]/.test(cleaned)) {
    return cleaned;
  }

  // Handle 12-digit with 91 prefix
  if (cleaned.length === 12 && cleaned.startsWith('91') && /^91[6-9]/.test(cleaned)) {
    return cleaned.slice(2);
  }

  return null;
}
