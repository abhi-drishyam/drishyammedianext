'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect, CSSProperties, ReactNode } from 'react';

interface CalLinkProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Renders a button styled with any className that opens the Cal.com
 * "discovery-call" popup — same booking flow as components/CalButton.tsx,
 * but lets the caller keep existing button styling (e.g. btn-primary).
 */
export default function CalLink({ className, style, children }: CalLinkProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'discovery-call' });
      cal('ui', { theme: 'dark', hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <button
      type="button"
      className={className}
      style={style}
      data-cal-namespace="discovery-call"
      data-cal-link="drishyam/discovery-call"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
    >
      {children}
    </button>
  );
}
