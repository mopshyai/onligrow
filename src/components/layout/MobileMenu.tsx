'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] lg:hidden bg-primary-950/95 backdrop-blur-xl"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav links — large, centered */}
          <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.children && pathname.startsWith(link.href));
              const isExpanded = expandedItem === link.label;

              if (link.children) {
                return (
                  <div key={link.href} className="text-center">
                    <button
                      type="button"
                      onClick={() => setExpandedItem(isExpanded ? null : link.label)}
                      className={cn(
                        'text-2xl font-bold transition-colors inline-flex items-center gap-2',
                        isActive ? 'text-energy-400' : 'text-white hover:text-energy-400'
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn('w-5 h-5 transition-transform', isExpanded && 'rotate-180')} />
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden mt-2 space-y-2"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className={cn(
                                'block text-lg transition-colors',
                                pathname === child.href
                                  ? 'text-energy-400 font-medium'
                                  : 'text-white/60 hover:text-white'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'text-2xl font-bold transition-colors',
                    isActive ? 'text-energy-400' : 'text-white hover:text-energy-400'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA at bottom */}
            <div className="mt-8 flex flex-col gap-3 w-64">
              <Button href="/demo" variant="energy" size="lg" fullWidth onClick={onClose}>
                Book a Demo
              </Button>
              <Button
                href={CONTACT.whatsappLink}
                variant="whatsapp"
                size="lg"
                fullWidth
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
