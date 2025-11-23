'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { analytics } from '@/lib/analytics';

interface TrackedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  eventAction?: keyof typeof analytics;
  eventData?: any;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  // Allow passing other props like target, rel, etc.
  [key: string]: any;
}

export default function TrackedLink({
  children,
  eventAction,
  eventData,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (eventAction && analytics[eventAction]) {
      // @ts-ignore - Dynamic access to analytics methods
      analytics[eventAction](eventData);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
