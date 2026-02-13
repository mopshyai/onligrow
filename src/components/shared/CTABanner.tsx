import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTABanner({
  title = 'Your Students Deserve More Than Textbooks.',
  description = 'One free demo. No cost, no commitment. Just impact.',
  primaryCTA = 'Book a Free Demo',
  primaryHref = '/demo',
  secondaryCTA = 'Chat on WhatsApp',
  secondaryHref,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        'relative py-16 md:py-24 overflow-hidden',
        className
      )}
    >
      {/* Warm multi-color gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-energy-500 via-warm-500 to-creative-500" />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
          {title}
        </h2>

        <p className="mt-4 text-lg text-white/80">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={primaryHref}
            variant="white"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            {primaryCTA}
          </Button>

          <Button
            href={secondaryHref || CONTACT.whatsappLink}
            variant="whatsapp"
            size="lg"
            leftIcon={<Phone className="w-5 h-5" />}
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
