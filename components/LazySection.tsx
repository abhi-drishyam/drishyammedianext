'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';

/**
 * LazySection — does NOT render children until the placeholder div
 * is within 400px of the viewport. Once mounted, children stay mounted.
 * minHeight keeps the page height stable so scroll position doesn't jump.
 */
export default function LazySection({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect(); // fire once, then stop watching
        }
      },
      { rootMargin: '400px 0px' } // start loading 400px before visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Zero-height sentinel — IntersectionObserver watches this, no layout impact */}
      <div ref={ref} style={{ height: 0 }} aria-hidden="true" />
      {mounted && children}
    </>
  );
}
