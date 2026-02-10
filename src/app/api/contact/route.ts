/**
 * Contact form API route
 * Handles form submissions and sends email via Resend
 */

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { CONTACT, SITE_CONFIG } from '@/lib/constants';

// Lazy initialize Resend client to avoid build-time errors
let resend: Resend | null = null;

function getResendClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

/**
 * POST /api/contact
 * Handles contact/demo booking form submissions
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate form data
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors,
        },
        { status: 400 }
      );
    }

    const { schoolName, city, contactName, phone, email, preferredDate, message } =
      result.data;

    // Get Resend client (lazy initialization)
    const resendClient = getResendClient();

    // Check if Resend API key is configured
    if (!resendClient) {
      console.warn('RESEND_API_KEY not configured - logging form submission instead');
      console.log('Form submission:', result.data);

      // In development, just log and return success
      return NextResponse.json({
        success: true,
        message: 'Form submitted (email not configured)',
      });
    }

    // Format email content
    const emailContent = `
New Demo Booking Request

School Details:
- School Name: ${schoolName}
- City: ${city}

Contact Person:
- Name: ${contactName}
- Phone: ${phone}
${email ? `- Email: ${email}` : ''}

${preferredDate ? `Preferred Date: ${preferredDate}` : ''}

${message ? `Message:\n${message}` : ''}

---
Submitted from ${SITE_CONFIG.url}
    `.trim();

    // Send email via Resend
    const { error: emailError } = await resendClient.emails.send({
      from: `${SITE_CONFIG.name} Website <onboarding@resend.dev>`,
      to: [CONTACT.email],
      replyTo: email || undefined,
      subject: `[Demo Request] ${schoolName} - ${city}`,
      text: emailContent,
    });

    if (emailError) {
      console.error('Failed to send email:', emailError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send email. Please try again or contact us directly.',
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
