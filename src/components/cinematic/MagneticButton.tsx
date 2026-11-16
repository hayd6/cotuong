import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabledMotion?: boolean;
  strength?: number;
}

/**
 * Standard accessible presentation button without cursor-magnetic pull animations.
 */
export function MagneticButton({
  children,
  disabledMotion: _disabledMotion,
  strength: _strength,
  className = '',
  ...rest
}: MagneticButtonProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
