import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { TheGap } from '@/components/home/TheGap';
import { OrganizationSchema } from '@/components/seo/SchemaMarkup';

// Lazy load below-the-fold sections
const SystemPreview = dynamic(() =>
  import('@/components/home/SystemPreview').then((mod) => ({ default: mod.SystemPreview }))
);
const ModuleGrid = dynamic(() =>
  import('@/components/home/ModuleGrid').then((mod) => ({ default: mod.ModuleGrid }))
);
const WhatMakesUsDifferent = dynamic(() =>
  import('@/components/home/WhatMakesUsDifferent').then((mod) => ({ default: mod.WhatMakesUsDifferent }))
);
const CompetitionFramework = dynamic(() =>
  import('@/components/home/CompetitionFramework').then((mod) => ({ default: mod.CompetitionFramework }))
);
const Numbers = dynamic(() =>
  import('@/components/home/Numbers').then((mod) => ({ default: mod.Numbers }))
);
const OnliGrowApp = dynamic(() =>
  import('@/components/home/OnliGrowApp').then((mod) => ({ default: mod.OnliGrowApp }))
);
const SeeItLive = dynamic(() =>
  import('@/components/home/SeeItLive').then((mod) => ({ default: mod.SeeItLive }))
);
const TrustedBy = dynamic(() =>
  import('@/components/home/TrustedBy').then((mod) => ({ default: mod.TrustedBy }))
);
const HowItStarts = dynamic(() =>
  import('@/components/home/HowItStarts').then((mod) => ({ default: mod.HowItStarts }))
);
const TeamSection = dynamic(() =>
  import('@/components/home/TeamSection').then((mod) => ({ default: mod.TeamSection }))
);
const CTABanner = dynamic(() =>
  import('@/components/shared/CTABanner').then((mod) => ({ default: mod.CTABanner }))
);

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
