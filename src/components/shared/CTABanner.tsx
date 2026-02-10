/**
 * Reusable CTA banner component for bottom of pages
 * Encourages users to book a demo or get in touch
 */

import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Props for the CTABanner component
 */
interface CTABannerProps {
  /** Main heading text */
  title?: string;
  /** Supporting description text */
  description?: string;
  /** Primary CTA button text */
  primaryCTA?: string;
  /** Primary CTA link */
  primaryHref?: string;
  /** Secondary CTA button text */
  secondaryCTA?: string;
  /** Secondary CTA link */
  secondaryHref?: string;
  /** Background variant */
  variant?: 'primary' | 'gradient' | 'dark';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Background variant styles
 */
const variantStyles = {
  primary: 'bg-primary',
  gradient: 'bg-gradient-to-r from-primary via-accent to-primary',
  dark: 'bg-dark',
};

/**
 * CTABanner component for page bottoms
 * Drives conversions by prompting users to take action
 *
 * @example
 * // Default "Book a Demo" banner
 * <CTABanner />
 *
 * // Custom banner
 * <CTABanner
 *   title="Ready to transform your school?"
 *   description="Schedule a free demo today"
 *   primaryCTA="Get Started"
 *   primaryHref="/contact"
 * />
 */
export function CTABanner({
  title = 'Ready to Future-Proof Your School?',
  description = 'It starts with one free demo. No cost, no commitment — just impact.',
  primaryCTA = 'Book a Free Demo',
  primaryHref = '/demo',
  secondaryCTA = 'Chat on WhatsApp',
  secondaryHref,
  variant = 'gradient',
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-20',
        variantStyles[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA - White button */}
          <Button
            href={primaryHref}
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="bg-white text-primary hover:bg-white/90"
          >
            {primaryCTA}
          </Button>

          {/* Secondary CTA - Green WhatsApp button */}
          <Button
            href={secondaryHref || CONTACT.whatsappLink}
            size="lg"
            leftIcon={<Phone className="w-5 h-5" />}
            className="bg-[#25D366] text-white hover:bg-[#25D366]/90 border-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {secondaryCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
