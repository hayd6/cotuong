import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface KineticHeadlineProps {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  delay?: number;
  reducedMotion?: boolean;
}

/**
 * Editorial mask reveal inspired by Apple Keynote & Awwwards showcase typography:
 * Words slide cleanly upward out of a clipped baseline without distracting bounce.
 */
export function KineticHeadline({
  text,
  as = 'h1',
  className = '',
  delay = 0.08,
  reducedMotion = false,
}: KineticHeadlineProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.kh-word'),
        { yPercent: 108, opacity: 0.15 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.62,
          delay,
          stagger: 0.024,
          ease: 'power4.out',
          clearProps: 'transform',
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, delay, reducedMotion]);

  const Tag = as;
  const words = text.split(' ');

  return (
    <Tag ref={rootRef as never} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom mr-[0.26em] pb-[0.06em] -mb-[0.06em]">
          <span className="kh-word inline-block">{w}</span>
        </span>
      ))}
    </Tag>
  );
}
