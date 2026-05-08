'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect, CSSProperties } from 'react';

interface CalButtonProps {
  variant?: 'outline' | 'solid';
  style?: CSSProperties;
}

export default function CalButton({ variant = 'solid', style }: CalButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'discovery-call' });
      cal('ui', { theme: 'dark', hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <button
      className={variant === 'solid' ? 'btn-solid' : 'btn-outline'}
      style={style}
      data-cal-namespace="discovery-call"
      data-cal-link="drishyam/discovery-call"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
    >
      Get Started
    </button>
  );
}
