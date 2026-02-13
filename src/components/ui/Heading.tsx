/**
 * Heading component with consistent styling across the site
 * Supports H1-H4 with predefined sizes and colors
 */

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { HeadingLevel } from '@/types';

/**
 * Props for the Heading component
 */
interface HeadingProps {
  /** Heading level (h1, h2, h3, h4) */
  level?: HeadingLevel;
  /** Content inside the heading */
  children: ReactNode;
  /** Center the heading */
  centered?: boolean;
  /** Use lighter text color */
  light?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** HTML id for anchor links */
  id?: string;
}

/**
 * Level-specific styles
 */
const levelStyles: Record<HeadingLevel, string> = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl font-semibold leading-snug',
  h4: 'text-xl md:text-2xl font-semibold leading-snug',
};

/**
 * Heading component for consistent typography
 * Uses Poppins font for headings
 *
 * @example
 * // Page title
 * <Heading level="h1">Welcome to OnliGrow</Heading>
 *
 * // Section title
 * <Heading level="h2" centered>Our Programs</Heading>
 *
 * // Card title
 * <Heading level="h3">Free Demo Session</Heading>
 */
export function Heading({
  level = 'h2',
  children,
  centered = false,
  light = false,
  className,
  id,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      id={id}
      className={cn(
        'font-heading',
        levelStyles[level],
        centered && 'text-center',
        light ? 'text-white' : 'text-gray-900',
        className
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Highlighted text component for emphasizing words in headings
 */
interface HighlightProps {
  /** Content to highlight */
  children: ReactNode;
  /** Highlight color */
  color?: 'primary' | 'secondary' | 'accent';
}

export function Highlight({ children, color = 'primary' }: HighlightProps) {
  const colorStyles = {
    primary: 'text-primary-600',
    secondary: 'text-creative-600',
    accent: 'text-energy-600',
  };

  return <span className={colorStyles[color]}>{children}</span>;
}

export default Heading;
