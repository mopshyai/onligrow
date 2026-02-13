/**
 * Impact numbers section with animated counters
 * Displays key metrics: schools, students, states
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { School, Users, MapPin, Layers } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { IMPACT_NUMBERS } from '@/lib/constants';

/**
 * Icon mapping for impact metrics
 */
const iconMap = {
  schools: School,
  students: Users,
  states: MapPin,
  modules: Layers,
};

/**
 * Animated counter hook
 * Counts from 0 to target value with animation
 */
function useCounter(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration, isInView, startOnView]);

  return { count, ref };
}

/**
 * Format number with commas (Indian numbering for large numbers)
 */
function formatNumber(num: number): string {
  if (num >= 1000) {
    return num.toLocaleString('en-IN');
  }
  return num.toString();
}

/**
 * Individual stat card component
 */
function StatCard({
  metricKey,
  value,
  label,
  subLabel,
  index,
}: {
  metricKey: string;
  value: string;
  label: string;
  subLabel?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = iconMap[metricKey as keyof typeof iconMap];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      {/* Icon */}
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-secondary" />
        </div>
      )}

      {/* Number */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-2">
        <span className="text-secondary">{value}</span>
      </div>

      {/* Label */}
      <p className="text-white/90 text-lg font-medium">{label}</p>
      {subLabel && (
        <p className="text-white/60 text-sm mt-1">{subLabel}</p>
      )}
    </motion.div>
  );
}

/**
 * ImpactNumbers section component
 * Displays animated impact metrics with a gradient background
 */
export function ImpactNumbers() {
  const stats = Object.entries(IMPACT_NUMBERS).map(([key, data]) => ({
    key,
    ...data,
  }));

  return (
    <SectionWrapper
      background="primary"
      className="bg-gradient-to-br from-primary via-primary to-accent"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading"
        >
          Our Journey (So Far)
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.key}
            metricKey={stat.key}
            value={stat.value}
            label={stat.label}
            subLabel={stat.detail}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default ImpactNumbers;
