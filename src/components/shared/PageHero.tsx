/**
 * Reusable page hero component for inner pages
 * Displays title, subtitle, and optional breadcrumb navigation
 */

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Breadcrumb item type
 */
interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Props for the PageHero component
 */
interface PageHeroProps {
  /** Page title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[];
  /** Background variant */
  variant?: 'default' | 'gradient' | 'dark';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Background variant styles
 */
const variantStyles = {
  default: 'bg-light',
  gradient: 'bg-gradient-to-br from-primary to-accent text-white',
  dark: 'bg-dark text-white',
};

/**
 * PageHero component for inner page headers
 * Provides consistent styling for page titles across the site
 *
 * @example
 * <PageHero
 *   title="About Us"
 *   subtitle="Learn about our mission and team"
 *   breadcrumbs={[
 *     { label: 'Home', href: '/' },
 *     { label: 'About Us' }
 *   ]}
 * />
 */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  variant = 'default',
  className,
}: PageHeroProps) {
  const isLight = variant === 'default';

  return (
    <section
      className={cn(
        'py-16 md:py-24',
        variantStyles[variant],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6"
          >
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              {/* Home icon */}
              <li>
                <Link
                  href="/"
                  className={cn(
                    'inline-flex items-center hover:underline',
                    isLight ? 'text-gray-500 hover:text-primary' : 'text-white/70 hover:text-white'
                  )}
                  aria-label="Home"
                >
                  <Home className="w-4 h-4" />
                </Link>
              </li>

              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex items-center">
                  <ChevronRight
                    className={cn(
                      'w-4 h-4 mx-1',
                      isLight ? 'text-gray-400' : 'text-white/50'
                    )}
                  />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        'hover:underline',
                        isLight ? 'text-gray-500 hover:text-primary' : 'text-white/70 hover:text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={cn(
                        'font-medium',
                        isLight ? 'text-dark' : 'text-white'
                      )}
                      aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold font-heading',
            isLight ? 'text-dark' : 'text-white'
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={cn(
              'mt-4 text-lg md:text-xl max-w-3xl',
              isLight ? 'text-gray-600' : 'text-white/80'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
