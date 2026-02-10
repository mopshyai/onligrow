/**
 * Reusable Button component with multiple variants and sizes
 * Used throughout the site for CTAs, form submissions, and navigation
 */

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

/**
 * Base styles applied to all button variants
 */
const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

/**
 * Variant-specific styles
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform',
  secondary:
    'bg-white text-primary-600 border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 active:bg-primary-100 focus:ring-primary-500',
  outline:
    'bg-white text-primary-600 border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 active:bg-primary-100 focus:ring-primary-500',
  ghost:
    'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  white:
    'bg-white text-primary-700 hover:bg-gray-100 focus:ring-white shadow-md hover:shadow-lg',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20BD5A] focus:ring-[#25D366] shadow-sm hover:shadow-md',
};

/**
 * Size-specific styles
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-2xl',
};

/**
 * Props for the Button component
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** If provided, renders as a Link instead of button */
  href?: string;
  /** Content inside the button */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show loading spinner */
  isLoading?: boolean;
  /** Icon to show before text */
  leftIcon?: ReactNode;
  /** Icon to show after text */
  rightIcon?: ReactNode;
  /** Full width button */
  fullWidth?: boolean;
  /** Target for external links */
  target?: string;
  /** Rel attribute for external links */
  rel?: string;
}

/**
 * Button component with variants: primary, secondary, outline, ghost
 * Can render as either a button or a Link when href is provided
 *
 * @example
 * // Primary button
 * <Button variant="primary">Book Demo</Button>
 *
 * // Link button
 * <Button href="/demo" variant="outline">Learn More</Button>
 *
 * // Loading state
 * <Button isLoading>Submitting...</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      children,
      className,
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    // Combined class names
    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    // Content with optional icons and loading state
    const content = (
      <>
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon && <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    // Render as Link if href is provided
    if (href) {
      // Check if it's an external link
      const isExternal = href.startsWith('http') || href.startsWith('//');

      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClassName}
            target={target}
            rel={rel}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    // Render as button
    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
