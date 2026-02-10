/**
 * Share button component
 * Client component for Web Share API functionality
 */

'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  /** Title to share */
  title: string;
  /** URL to share (defaults to current page) */
  url?: string;
}

/**
 * ShareButton component using Web Share API
 * Falls back to clipboard copy if Web Share is not supported
 */
export function ShareButton({ title, url }: ShareButtonProps) {
  const handleShare = async () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    // Try Web Share API first
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch {
        // User cancelled or error occurred
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      } catch {
        // Clipboard access denied
      }
    }
  };

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
      onClick={handleShare}
      aria-label="Share this article"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}

export default ShareButton;
