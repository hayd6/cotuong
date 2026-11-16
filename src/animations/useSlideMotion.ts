import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

/**
 * Runs a GSAP animation setup scoped to a slide container and automatically
 * reverts all timelines & tweens on unmount or slide change.
 */
export function useSlideMotion(
  containerRef: RefObject<HTMLElement | null>,
  reducedMotion: boolean,
  setup: (ctx: gsap.Context) => void,
  deps: unknown[] = []
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    const ctx = gsap.context((self) => {
      setup(self);
    }, el);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, ...deps]);
}
