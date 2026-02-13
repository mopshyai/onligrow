import { HeroSection } from '@/components/home/HeroSection';
import { TheGap } from '@/components/home/TheGap';
import { SystemPreview } from '@/components/home/SystemPreview';
import { ModuleGrid } from '@/components/home/ModuleGrid';
import { WhatMakesUsDifferent } from '@/components/home/WhatMakesUsDifferent';
import { CompetitionFramework } from '@/components/home/CompetitionFramework';
import { Numbers } from '@/components/home/Numbers';
import { OnliGrowApp } from '@/components/home/OnliGrowApp';
import { SeeItLive } from '@/components/home/SeeItLive';
import { TrustedBy } from '@/components/home/TrustedBy';
import { HowItStarts } from '@/components/home/HowItStarts';
import { TeamSection } from '@/components/home/TeamSection';
import { CTABanner } from '@/components/shared/CTABanner';
import { OrganizationSchema } from '@/components/seo/SchemaMarkup';

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <HeroSection />
      <TheGap />
      <SystemPreview />
      <ModuleGrid />
      <WhatMakesUsDifferent />
      <CompetitionFramework />
      <Numbers />
      <OnliGrowApp />
      <SeeItLive />
      <TrustedBy />
      <HowItStarts />
      <TeamSection />
      <CTABanner />
    </>
  );
}
