'use client';

import { useEffect, useRef } from 'react';

const STEP_DURATION = 1800;
const TOTAL_STEPS = 4;
const LINE_FILLS = ['8%', '36%', '64%', '97%'];

export default function AtaTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const nodes = section.querySelectorAll<HTMLElement>('.node-circle');
    const cards = section.querySelectorAll<HTMLElement>('.step-card');
    const fillBar = section.querySelector<HTMLElement>('.timeline-line-fill');
    if (!fillBar || !nodes.length || !cards.length) return;

    let currentStep = 0;
    let stepStart: number | null = null;
    let rafId: number | null = null;
    let isPaused = false;

    function applyStep(step: number) {
      nodes.forEach((n, i) => {
        n.classList.remove('visited', 'current');
        if (i < step) n.classList.add('visited');
        if (i === step) n.classList.add('current');
      });

      fillBar!.style.width = LINE_FILLS[step];

      cards.forEach((c, i) => {
        c.classList.remove('active', 'visited');
        if (i < step) c.classList.add('visited');
        if (i === step) c.classList.add('active');
        const bar = c.querySelector<HTMLElement>('.card-progress-fill');
        if (bar) { bar.style.transition = 'none'; bar.style.width = '0%'; }
      });

      const activeBar = cards[step].querySelector<HTMLElement>('.card-progress-fill');
      if (activeBar) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            activeBar.style.transition = `width ${STEP_DURATION}ms linear`;
            activeBar.style.width = '100%';
          });
        });
      }
    }

    function advanceToStep(step: number) {
      const isReset = step === 0 && currentStep === TOTAL_STEPS - 1;

      if (isReset) {
        fillBar!.classList.add('no-transition');
        fillBar!.style.width = '0%';
        void fillBar!.offsetWidth;
        fillBar!.classList.remove('no-transition');
      }

      currentStep = step;
      applyStep(currentStep);
    }

    function tick(timestamp: number) {
      if (isPaused) {
        stepStart = timestamp;
        rafId = requestAnimationFrame(tick);
        return;
      }

      if (stepStart === null) stepStart = timestamp;
      const elapsed = timestamp - stepStart;

      if (elapsed >= STEP_DURATION) {
        stepStart = timestamp;
        const nextStep = (currentStep + 1) % TOTAL_STEPS;
        advanceToStep(nextStep);
      }

      rafId = requestAnimationFrame(tick);
    }

    function onVisChange() {
      isPaused = document.hidden;
      if (!isPaused) stepStart = null;
    }

    document.addEventListener('visibilitychange', onVisChange);

    applyStep(0);
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', onVisChange);
    };
  }, []);

  return (
    <section className="ata-section" aria-label="Our Process" ref={sectionRef}>
      <div className="ata-header">
        <h2 className="ata-title">
          <span className="ata-white">From </span><span className="ata-pink">Attention</span><span className="ata-white"> To </span><span className="ata-purple">Acquisition</span>
        </h2>
        <p className="ata-sub">
          We started by helping creators go viral. Now, we help brands and experts
          grow predictably through systems that combine authentic storytelling,
          branding, and automation.
        </p>
      </div>

      <div className="timeline-wrap" aria-hidden="true">
        <div className="timeline-line">
          <div className="timeline-line-fill"></div>
        </div>
        <div className="timeline-nodes">
          <div className="timeline-node"><div className="node-circle" data-step="0">1</div></div>
          <div className="timeline-node"><div className="node-circle" data-step="1">2</div></div>
          <div className="timeline-node"><div className="node-circle" data-step="2">3</div></div>
          <div className="timeline-node"><div className="node-circle" data-step="3">4</div></div>
        </div>
      </div>

      <div className="step-cards" role="list">
        <div className="step-card" data-step="0" role="listitem">
          <div className="step-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>
          </div>
          <h3 className="step-name">Capture</h3>
          <p className="step-desc">One studio session. Months of content. We extract your story in just a few hours.</p>
          <div className="card-progress" aria-hidden="true"><div className="card-progress-fill"></div></div>
        </div>

        <div className="step-card" data-step="1" role="listitem">
          <div className="step-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/><path d="M15 5l3 3"/></svg>
          </div>
          <h3 className="step-name">Create</h3>
          <p className="step-desc">Our team transforms raw footage into scroll-stopping, branded short-form content.</p>
          <div className="card-progress" aria-hidden="true"><div className="card-progress-fill"></div></div>
        </div>

        <div className="step-card" data-step="2" role="listitem">
          <div className="step-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5l-1-4 7.5-7.5 4 4-7.5 7.5-3.5-1z"/><path d="M14 6l4 4"/><circle cx="19" cy="5" r="2"/></svg>
          </div>
          <h3 className="step-name">Distribute</h3>
          <p className="step-desc">Strategic posting across platforms with optimized timing and hashtag strategies.</p>
          <div className="card-progress" aria-hidden="true"><div className="card-progress-fill"></div></div>
        </div>

        <div className="step-card" data-step="3" role="listitem">
          <div className="step-icon-wrap" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <h3 className="step-name">Convert</h3>
          <p className="step-desc">Automated DM systems turn engaged viewers into qualified leads and bookings.</p>
          <div className="card-progress" aria-hidden="true"><div className="card-progress-fill"></div></div>
        </div>
      </div>
    </section>
  );
}
