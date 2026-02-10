/**
 * Custom hook to track scroll position and direction
 * Used for show/hide navbar behavior on scroll
 */

'use client';

import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  /** Current scroll Y position in pixels */
  scrollY: number;
  /** Whether user is scrolling down */
  isScrollingDown: boolean;
  /** Whether page has been scrolled past a threshold */
  isScrolled: boolean;
  /** Previous scroll position */
  previousScrollY: number;
}

/**
 * Hook to track scroll position and direction
 *
 * @param threshold - Pixel threshold to consider "scrolled" (default: 50)
 * @returns Object with scroll position data
 *
 * @example
 * const { isScrollingDown, isScrolled } = useScrollPosition(100);
 * // Hide navbar when scrolling down and past threshold
 */
export function useScrollPosition(threshold = 50): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    isScrollingDown: false,
    isScrolled: false,
    previousScrollY: 0,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setScrollPosition((prev) => ({
      scrollY: currentScrollY,
      isScrollingDown: currentScrollY > prev.scrollY,
      isScrolled: currentScrollY > threshold,
      previousScrollY: prev.scrollY,
    }));
  }, [threshold]);

  useEffect(() => {
    // Set initial position
    setScrollPosition({
      scrollY: window.scrollY,
      isScrollingDown: false,
      isScrolled: window.scrollY > threshold,
      previousScrollY: 0,
    });

    // Add scroll listener with passive flag for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, threshold]);

  return scrollPosition;
}

export default useScrollPosition;
