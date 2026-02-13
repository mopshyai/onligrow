import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { SectionBackground } from '@/types';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  background?: SectionBackground;
  className?: string;
  containerClassName?: string;
  compact?: boolean;
  fullWidth?: boolean;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  light: 'bg-gray-50',
  primary: 'bg-gradient-to-r from-primary-600 to-primary-800 text-white',
  dark: 'bg-primary-950 text-white',
  'gradient-soft': 'bg-gradient-to-br from-primary-50 via-creative-50/30 to-energy-50/20',
  'gradient-dark': 'bg-gradient-to-br from-primary-950 via-primary-900 to-creative-950 text-white',
};

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
        compact ? 'py-12 md:py-16' : 'py-20 md:py-28',
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

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  label?: string;
  labelColor?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  label,
  labelColor = 'text-primary-500',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      {label && (
        <span className={cn('text-xs font-bold uppercase tracking-[0.2em] block mb-3', labelColor)}>
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionWrapper;
