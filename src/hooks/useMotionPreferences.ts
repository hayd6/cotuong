import { useEffect, useState } from 'react';

export function useMotionPreferences() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ambientOverride, setAmbientOverride] = useState<boolean | null>(null);
  const [systemPrefersReduced, setSystemPrefersReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setSystemPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Continuous ambient background loops pause if system prefers reduced motion or user pauses;
  // Cinematic slide entrances & transitions remain smooth unless user toggles Tối giản.
  const ambientPaused =
    ambientOverride !== null ? ambientOverride : systemPrefersReduced || reducedMotion;

  return {
    reducedMotion,
    setReducedMotion,
    ambientPaused,
    toggleAmbientPaused: () => setAmbientOverride((v) => !(v ?? ambientPaused)),
  };
}
