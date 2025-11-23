'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

interface TrackPageViewProps {
  event: keyof typeof analytics;
  data?: any;
}

export default function TrackPageView({ event, data }: TrackPageViewProps) {
  useEffect(() => {
    if (analytics[event]) {
      // @ts-ignore
      analytics[event](data);
    }
  }, [event, data]);

  return null;
}
