import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, type Transition } from 'motion/react';
import type { TransitionStyle } from '../../data/types';

interface CinematicStageProps {
  slideKey: number;
  transitionStyle: TransitionStyle;
  direction: number;
  reducedMotion: boolean;
  onSwipeNext: () => void;
  onSwipePrev: () => void;
  children: ReactNode;
}

const LOGICAL_WIDTH = 1600;
const LOGICAL_HEIGHT = 900;
const EASE_CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1];

function getSeamlessTransition(
  style: TransitionStyle,
  direction: number,
  reducedMotion: boolean
): {
  initial: Record<string, string | number>;
  animate: Record<string, string | number>;
  exit: Record<string, string | number>;
  transition: Transition;
} {
  if (reducedMotion) {
    return {
      initial: { opacity: 0, zIndex: 20 },
      animate: { opacity: 1, zIndex: 20 },
      exit: { opacity: 0, zIndex: 10 },
      transition: { duration: 0.16 },
    };
  }

  const dir = direction >= 0 ? 1 : -1;

  switch (style) {
    case 'iris-expand':
      return {
        initial: {
          clipPath: 'circle(0% at 50% 50%)',
          scale: 1.04,
          zIndex: 20,
        },
        animate: {
          clipPath: 'circle(145% at 50% 50%)',
          scale: 1,
          zIndex: 20,
        },
        exit: {
          scale: 0.96,
          opacity: 0.85,
          zIndex: 10,
        },
        transition: { duration: 0.62, ease: EASE_CINEMATIC },
      };

    case 'ink-tear-wipe':
      // Organic angled ink/paper wipe across the bright canvas (outgoing stays underneath so zero black gap!)
      return {
        initial: {
          clipPath:
            dir > 0
              ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
              : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          x: dir * 24,
          zIndex: 20,
        },
        animate: {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          x: 0,
          zIndex: 20,
        },
        exit: {
          x: dir * -40,
          scale: 0.985,
          opacity: 0.9,
          zIndex: 10,
        },
        transition: { duration: 0.54, ease: EASE_CINEMATIC },
      };

    case 'dolly-through':
      return {
        initial: {
          opacity: 0,
          scale: dir > 0 ? 0.91 : 1.09,
          zIndex: 20,
        },
        animate: {
          opacity: 1,
          scale: 1,
          zIndex: 20,
        },
        exit: {
          opacity: 0,
          scale: dir > 0 ? 1.1 : 0.91,
          zIndex: 10,
        },
        transition: { duration: 0.5, ease: EASE_CINEMATIC },
      };

    case 'curtain-split':
      return {
        initial: {
          clipPath: 'inset(0% 50% 0% 50%)',
          scale: 1.02,
          zIndex: 20,
        },
        animate: {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          zIndex: 20,
        },
        exit: {
          opacity: 0.85,
          scale: 0.98,
          zIndex: 10,
        },
        transition: { duration: 0.52, ease: EASE_CINEMATIC },
      };

    case 'perspective-tilt':
      return {
        initial: {
          opacity: 0,
          x: dir * 90,
          rotateY: dir * -7,
          scale: 0.95,
          zIndex: 20,
        },
        animate: {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          zIndex: 20,
        },
        exit: {
          opacity: 0,
          x: dir * -70,
          rotateY: dir * 5,
          scale: 0.96,
          zIndex: 10,
        },
        transition: { duration: 0.52, ease: EASE_CINEMATIC },
      };

    case 'editorial-glide':
    default:
      return {
        initial: {
          x: dir * 1600,
          zIndex: 20,
        },
        animate: {
          x: 0,
          zIndex: 20,
        },
        exit: {
          x: dir * -260,
          opacity: 0.75,
          scale: 0.98,
          zIndex: 10,
        },
        transition: { duration: 0.48, ease: EASE_CINEMATIC },
      };
  }
}

export function CinematicStage({
  slideKey,
  transitionStyle,
  direction,
  reducedMotion,
  onSwipeNext,
  onSwipePrev,
  children,
}: CinematicStageProps) {
  const [scale, setScale] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setScale(Math.min(vw / LOGICAL_WIDTH, vh / LOGICAL_HEIGHT));
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const anim = getSeamlessTransition(transitionStyle, direction, reducedMotion);

  return (
    <main
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#EAE2D3] select-none"
      onTouchStart={(e) => {
        if (e.touches.length === 1) {
          touchStartX.current = e.touches[0].clientX;
          touchStartY.current = e.touches[0].clientY;
        }
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null || touchStartY.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        const dy = e.changedTouches[0].clientY - touchStartY.current;
        touchStartX.current = null;
        touchStartY.current = null;
        if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          if (dx < 0) onSwipeNext();
          else onSwipePrev();
        }
      }}
    >
      {/* Fixed-ratio 16:9 Stage (1600x900) on light warm parchment frame */}
      <div
        className="relative overflow-hidden bg-[#FAF6EE] shadow-[0_24px_80px_rgba(26,23,20,0.14)] ring-1 ring-[#DFD4C1]"
        style={{
          width: `${LOGICAL_WIDTH}px`,
          height: `${LOGICAL_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
          perspective: '1600px',
        }}
      >
        {/* Sync mode ensures incoming wipes OVER outgoing with zero black flash */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={slideKey}
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className="absolute inset-0 h-full w-full overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
