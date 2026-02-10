/**
 * Main navigation component
 * Sticky header with logo, nav links, and CTA button
 * Shows/hides on scroll and has mobile responsive menu
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

/**
 * Navbar component with responsive design
 * - Sticky positioning with shadow on scroll
 * - Hides on scroll down, shows on scroll up
 * - Mobile hamburger menu
 * - "Book a Demo" CTA prominently displayed
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled, isScrollingDown, scrollY } = useScrollPosition(50);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change (handled by clicking links)
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Determine if navbar should be visible
  // Hide when scrolling down past threshold, show when scrolling up
  const isVisible = !isScrollingDown || scrollY < 100;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white/80 backdrop-blur-md border-b border-transparent',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-heading font-bold text-xl md:text-2xl text-primary-600 tracking-tight"
              aria-label={`${SITE_CONFIG.name} home`}
            >
              {/* Logo placeholder - replace with actual logo */}
              <span>{SITE_CONFIG.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors
                             after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600
                             after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/demo" variant="primary" size="md">
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}

export default Navbar;
