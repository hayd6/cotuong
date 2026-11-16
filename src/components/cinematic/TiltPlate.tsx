import type { ReactNode } from 'react';

interface TiltPlateProps {
  children: ReactNode;
  disabled?: boolean;
  maxTiltDeg?: number;
  className?: string;
}

/**
 * Clean museum plate container with zero hover-tilt or cursor-tracking motion.
 */
export function TiltPlate({
  children,
  className = '',
}: TiltPlateProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}
