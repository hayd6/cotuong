import type { ReactNode } from 'react';

interface PointerParallaxHostProps {
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Static stage host: keeps slide canvas rock-solid with zero cursor-following motion.
 */
export function PointerParallaxHost({
  children,
  className = '',
}: PointerParallaxHostProps) {
  return <div className={className}>{children}</div>;
}
