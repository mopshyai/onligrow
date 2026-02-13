'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500 shadow-sm hover:shadow-md hover:-translate-y-0.5',
  energy:
    'bg-gradient-to-r from-energy-500 to-energy-600 text-white focus:ring-energy-400 shadow-md shadow-energy-500/25 hover:shadow-lg hover:shadow-energy-500/35 hover:-translate-y-0.5',
  secondary:
    'bg-white text-primary-600 font-semibold border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 active:bg-primary-100 focus:ring-primary-500',
  outline:
    'bg-white text-primary-600 font-semibold border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 active:bg-primary-100 focus:ring-primary-500',
  ghost:
    'text-primary-600 font-semibold hover:bg-primary-50 focus:ring-primary-500',
  white:
    'bg-white text-primary-700 hover:bg-gray-50 focus:ring-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20BD5A] focus:ring-[#25D366] shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:-translate-y-0.5',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-xl',
  md: 'px-7 py-3.5 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
  xl: 'px-10 py-5 text-xl rounded-2xl',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

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
    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

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
          leftIcon && <span>{leftIcon}</span>
        )}
        {children}
        {rightIcon && !isLoading && <span>{rightIcon}</span>}
      </>
    );

    if (href) {
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
