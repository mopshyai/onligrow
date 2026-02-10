/**
 * Badge component for tags, labels, and status indicators
 * Used for trust badges, blog tags, and feature highlights
 */

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Badge color variants
 */
type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error';

/**
 * Badge size options
 */
type BadgeSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Badge component
 */
interface BadgeProps {
  /** Content inside the badge */
  children: ReactNode;
  /** Color variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  /** Make badge rounded (pill shape) */
  rounded?: boolean;
  /** Optional icon to show before text */
  icon?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Variant-specific styles
 */
const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary-dark',
  accent: 'bg-accent/10 text-accent',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
};

/**
 * Size-specific styles
 */
const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

/**
 * Badge component for displaying tags, labels, and status indicators
 *
 * @example
 * // Simple badge
 * <Badge>New</Badge>
 *
 * // Primary variant
 * <Badge variant="primary">NEP 2020 Aligned</Badge>
 *
 * // With icon
 * <Badge variant="success" icon={<CheckIcon />}>Active</Badge>
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  rounded = true,
  icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium',
        variantStyles[variant],
        sizeStyles[size],
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
    >
      {icon && <span className="mr-1.5 -ml-0.5">{icon}</span>}
      {children}
    </span>
  );
}

/**
 * Trust Badge component specifically styled for trust indicators
 */
interface TrustBadgeProps {
  /** Badge text */
  text: string;
  /** Additional CSS classes */
  className?: string;
}

export function TrustBadge({ text, className }: TrustBadgeProps) {
  return (
    <Badge
      variant="primary"
      size="md"
      className={cn('border border-primary/20', className)}
    >
      {text}
    </Badge>
  );
}

export default Badge;
