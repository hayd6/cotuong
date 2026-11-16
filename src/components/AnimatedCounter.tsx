import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  decimalComma?: boolean;
  durationMs?: number;
  reducedMotion?: boolean;
  className?: string;
}

export function AnimatedCounter({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  decimalComma = false,
  durationMs = 950,
  reducedMotion = false,
  className = '',
}: AnimatedCounterProps) {
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (reducedMotion) {
      setValue(target);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, durationMs, reducedMotion]);

  const formatted = value.toFixed(decimals);
  const display = decimalComma ? formatted.replace('.', ',') : formatted;

  return (
    <span className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
