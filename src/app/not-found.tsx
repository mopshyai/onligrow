/**
 * Custom 404 page - Page not found
 */

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="text-center max-w-md">
        {/* Large 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-gradient">404</h1>

        <h2 className="text-2xl font-bold text-gray-900 mt-4">Page Not Found</h2>

        <p className="text-gray-600 mt-3">
          Looks like you&apos;ve wandered into uncharted territory. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">
            Go Home
          </Button>
          <Button href="/demo" variant="secondary">
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
