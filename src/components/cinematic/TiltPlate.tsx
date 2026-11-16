import { useRef, useState, type ReactNode } from 'react';

interface TiltPlateProps {
  children: ReactNode;
  disabled?: boolean;
  maxTiltDeg?: number;
  className?: string;
}

/**
 * Interactive 3D tilt museum plate with subtle warm specular sheen on cursor hover.
 */
export function TiltPlate({
  children,
  disabled = false,
  maxTiltDeg = 5.5,
  className = '',
}: TiltPlateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1100px) rotateX(0deg) rotateY(0deg)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * maxTiltDeg * 2;
    const rotX = (0.5 - py) * maxTiltDeg * 2;
    setTransform(`perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.01,1.01,1.01)`);
    setGlare({ x: px * 100, y: py * 100, opacity: 0.24 });
  };

  const handleLeave = () => {
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        transform: disabled ? undefined : transform,
        transition: 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {children}
      {!disabled && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.55), transparent 58%)`,
          }}
        />
      )}
    </div>
  );
}
