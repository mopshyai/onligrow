/**
 * Homepage for OnliGrow website
 * Imports and displays all home page sections
 */

import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { SolutionOverview } from '@/components/home/SolutionOverview';
import { ThreeWaysToStart } from '@/components/home/ThreeWaysToStart';
import { HowItWorks } from '@/components/home/HowItWorks';
import { WhySchoolsChoose } from '@/components/home/WhySchoolsChoose';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TeamSection } from '@/components/home/TeamSection';
import { ImpactNumbers } from '@/components/home/ImpactNumbers';
import { CTABanner } from '@/components/shared/CTABanner';
import { OrganizationSchema } from '@/components/seo/SchemaMarkup';

/**
 * Home page component
 * Displays all sections in order:
 * 1. Hero - First impression with CTA
 * 2. Problem - Why this matters (8 crore students missing out)
 * 3. Solution Overview - Year-round partnership with 8 modules
 * 4. Three Ways to Start - Demo, Pilot, Olympiad
 * 5. How Partnership Works - 4-step journey
 * 6. Why Schools Choose - 6 key benefits
 * 7. Testimonials - Social proof from schools (pre-launch placeholder)
 * 8. Team - Meet the founders
 * 9. Impact Numbers - Our journey so far
 * 10. CTA Banner - Final call to action
 */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <OrganizationSchema />

      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Problem Statement - Create urgency */}
      <ProblemSection />

      {/* Solution Overview - What we do */}
      <SolutionOverview />

      {/* Three Ways to Start */}
      <ThreeWaysToStart />

      {/* How Partnership Works - 4-step process */}
      <HowItWorks />

      {/* Why Schools Choose Us - Benefits */}
      <WhySchoolsChoose />

      {/* Testimonials - Social proof */}
      <TestimonialsSection />

      {/* Team Section - Build trust */}
      <TeamSection />

      {/* Impact Numbers - Metrics */}
      <ImpactNumbers />

      {/* Final CTA Banner */}
      <CTABanner />
    </>
  );
}
