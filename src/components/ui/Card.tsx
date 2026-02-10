/**
 * Reusable Card component for displaying content in a contained box
 * Used for product cards, team members, testimonials, etc.
 */

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Card component
 */
interface CardProps {
  /** Content inside the card */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Add hover effects */
  hoverable?: boolean;
  /** Add padding to the card */
  padded?: boolean;
  /** Card background variant */
  variant?: 'default' | 'bordered' | 'elevated';
}

/**
 * Base card component
 *
 * @example
 * <Card hoverable padded>
 *   <h3>Title</h3>
 *   <p>Description</p>
 * </Card>
 */
export function Card({
  children,
  className,
  hoverable = false,
  padded = true,
  variant = 'default',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white',
        padded && 'p-6',
        variant === 'default' && 'shadow-md',
        variant === 'bordered' && 'border border-gray-200',
        variant === 'elevated' && 'shadow-lg',
        hoverable &&
          'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Card Header component for consistent card titles
 */
interface CardHeaderProps {
  /** Card title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Optional icon */
  icon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function CardHeader({ title, subtitle, icon, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-dark font-heading">{title}</h3>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
}

/**
 * Card Content component for the main content area
 */
interface CardContentProps {
  /** Content inside */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('text-gray-700', className)}>{children}</div>;
}

/**
 * Card Footer component for actions or additional info
 */
interface CardFooterProps {
  /** Content inside */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-100', className)}>
      {children}
    </div>
  );
}

/**
 * Icon Card variant for feature/benefit displays
 */
interface IconCardProps {
  /** Icon to display */
  icon: ReactNode;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Additional CSS classes */
  className?: string;
}

export function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <Card hoverable className={className}>
      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dark font-heading mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

export default Card;
