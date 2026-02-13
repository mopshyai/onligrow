import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: 'default' | 'gradient' | 'dark';
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  variant = 'gradient',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden',
        className
      )}
    >
      {/* Colored gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-creative-50/30 to-energy-50/20" />

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-energy-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-creative-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-primary-500 hover:text-primary-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-300 mx-1" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-primary-500 hover:text-primary-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="text-gray-700 font-medium"
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
