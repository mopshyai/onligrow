'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isScrolled, isScrollingDown, scrollY } = useScrollPosition(50);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const isVisible = !isScrollingDown || scrollY < 100;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm',
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
              className="flex items-center gap-2"
              aria-label={`${SITE_CONFIG.name} home`}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-energy-500 to-creative-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">O</span>
              </div>
              <span className={cn(
                'text-xl font-bold font-heading tracking-tight transition-colors',
                isTransparent ? 'text-white' : 'text-gray-900'
              )}>
                Onli<span className={cn(
                  'transition-colors',
                  isTransparent ? 'text-energy-400' : 'text-energy-500'
                )}>Grow</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.children && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <div key={link.href} className="relative">
                      <button
                        type="button"
                        className={cn(
                          'flex items-center gap-1 text-sm font-medium transition-colors',
                          isTransparent
                            ? isActive ? 'text-white' : 'text-white/80 hover:text-white'
                            : isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                        )}
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        aria-expanded={openDropdown === link.label}
                      >
                        {link.label}
                        <ChevronDown className={cn(
                          'w-4 h-4 transition-transform',
                          openDropdown === link.label && 'rotate-180'
                        )} />
                      </button>

                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fade-in">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'block px-4 py-2.5 text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-primary-600 bg-primary-50 font-medium'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                              )}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative text-sm font-medium transition-colors',
                      'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-energy-500',
                      'after:transition-all after:duration-300 hover:after:w-full',
                      isTransparent
                        ? isActive ? 'text-white after:w-full' : 'text-white/80 hover:text-white'
                        : isActive ? 'text-primary-600 after:w-full' : 'text-gray-600 hover:text-primary-600'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/demo" variant="energy" size="sm">
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
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

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      {/* Spacer only on non-home pages where nav isn't transparent */}
      {!isHomePage && <div className="h-16 md:h-20" />}
    </>
  );
}

export default Navbar;
