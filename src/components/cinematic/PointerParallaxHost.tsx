import { useEffect, useRef, type ReactNode } from 'react';

interface PointerParallaxHostProps {
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export function PointerParallaxHost({
  disabled = false,
  children,
  className = '',
}: PointerParallaxHostProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    if (disabled) {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      const vw = window.innerWidth || 1;
      const vh = window.innerHeight || 1;
      targetX = (e.clientX / vw) * 2 - 1;
      targetY = (e.clientY / vh) * 2 - 1;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      el.style.setProperty('--px', curX.toFixed(4));
      el.style.setProperty('--py', curY.toFixed(4));
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [disabled]);

  return (
    <div ref={hostRef} className={className}>
      {children}
    </div>
  );
}
