/**
 * Section wrapper component for consistent page section styling
 * Provides padding, max-width container, and optional background colors
 */

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { SectionBackground } from '@/types';

/**
 * Props for the SectionWrapper component
 */
interface SectionWrapperProps {
  /** Content inside the section */
  children: ReactNode;
  /** Section ID for anchor links */
  id?: string;
  /** Background color variant */
  background?: SectionBackground;
  /** Additional CSS classes */
  className?: string;
  /** Additional container CSS classes */
  containerClassName?: string;
  /** Reduce vertical padding */
  compact?: boolean;
  /** Remove max-width container */
  fullWidth?: boolean;
}

/**
 * Background color styles
 */
const backgroundStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  light: 'bg-gray-50',
  primary: 'bg-gradient-to-r from-primary-600 to-primary-800 text-white',
  dark: 'bg-gray-900 text-white',
};

/**
 * SectionWrapper component for consistent page sections
 * Provides responsive padding and max-width container
 *
 * @example
 * // Default section
 * <SectionWrapper>
 *   <h2>Section Title</h2>
 *   <p>Content...</p>
 * </SectionWrapper>
 *
 * // With background color
 * <SectionWrapper background="light">
 *   <h2>Features</h2>
 * </SectionWrapper>
 *
 * // With anchor link
 * <SectionWrapper id="about">
 *   <h2>About Us</h2>
 * </SectionWrapper>
 */
export function SectionWrapper({
  children,
  id,
  background = 'white',
  className,
  containerClassName,
  compact = false,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        compact ? 'py-12 md:py-16' : 'py-20 md:py-28 lg:py-32',
        className
      )}
    >
      <div
        className={cn(
          'px-4 sm:px-6 lg:px-8',
          !fullWidth && 'max-w-7xl mx-auto',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * Section header component for consistent section titles
 */
interface SectionHeaderProps {
  /** Section title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Center align text */
  centered?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionWrapper;
