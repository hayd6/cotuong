import { useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabledMotion?: boolean;
  strength?: number;
}

export function MagneticButton({
  children,
  disabledMotion = false,
  strength = 0.22,
  className = '',
  onPointerMove,
  onPointerLeave,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    onPointerMove?.(e);
    if (disabledMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setOffset({ x: dx, y: dy });
  };

  const handleLeave = (e: React.PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(e);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <button
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        transform: disabledMotion ? undefined : `translate3d(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.08s linear',
      }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}
