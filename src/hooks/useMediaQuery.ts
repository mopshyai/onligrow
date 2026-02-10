/**
 * Custom hook for responsive breakpoint detection
 * Matches Tailwind CSS default breakpoints
 */

'use client';

import { useState, useEffect } from 'react';

/**
 * Tailwind default breakpoints
 */
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook to check if a media query matches
 *
 * @param query - CSS media query string
 * @returns Boolean indicating if the query matches
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 767px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Create handler for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

/**
 * Hook to check if viewport is at least a certain breakpoint
 *
 * @param breakpoint - Tailwind breakpoint name (sm, md, lg, xl, 2xl)
 * @returns Boolean indicating if viewport is at or above the breakpoint
 *
 * @example
 * const isDesktop = useBreakpoint('lg'); // true if >= 1024px
 */
export function useBreakpoint(breakpoint: BreakpointKey): boolean {
  const query = `(min-width: ${breakpoints[breakpoint]})`;
  return useMediaQuery(query);
}

/**
 * Hook to check if viewport is below a certain breakpoint
 *
 * @param breakpoint - Tailwind breakpoint name (sm, md, lg, xl, 2xl)
 * @returns Boolean indicating if viewport is below the breakpoint
 *
 * @example
 * const isMobile = useBreakpointDown('md'); // true if < 768px
 */
export function useBreakpointDown(breakpoint: BreakpointKey): boolean {
  const query = `(max-width: ${parseInt(breakpoints[breakpoint]) - 1}px)`;
  return useMediaQuery(query);
}

/**
 * Hook to get current responsive state for common use cases
 *
 * @returns Object with boolean flags for common breakpoints
 *
 * @example
 * const { isMobile, isTablet, isDesktop } = useResponsive();
 */
export function useResponsive() {
  const isMobile = useBreakpointDown('md');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useBreakpoint('lg');

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export default useMediaQuery;
