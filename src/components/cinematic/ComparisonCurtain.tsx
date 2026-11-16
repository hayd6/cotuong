import { useRef, useState } from 'react';
import { MoveHorizontal, ZoomIn } from 'lucide-react';
import { assetUrl } from '../../utils/assets';
import type { LightboxImage } from '../ImageLightbox';

interface SideData {
  src: string;
  label: string;
  caption: string;
  source: string;
}

interface ComparisonCurtainProps {
  left: SideData;
  right: SideData;
  initialPercent?: number;
  onZoom?: (img: LightboxImage) => void;
  className?: string;
}

/**
 * Interactive Awwwards-style curtain reveal comparing Textbook vs AI Analysis plates side-by-side.
 */
export function ComparisonCurtain({
  left,
  right,
  initialPercent = 50,
  onZoom,
  className = '',
}: ComparisonCurtainProps) {
  const [pct, setPct] = useState(initialPercent);
  const boxRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(8, Math.min(92, next)));
  };

  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl border border-[#DFD4C1] bg-white shadow-lg ${className}`}>
      {/* Quick View Switcher Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE0CF] bg-[#FAF6EE] px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1A1714]">
          <span className="rounded bg-[#EDE5D5] px-2 py-0.5 text-[#5C5349]">{left.label}</span>
          <span className="text-[#8B8175]">⇄</span>
          <span className="rounded bg-[#B92B27]/12 px-2 py-0.5 text-[#B92B27]">{right.label}</span>
        </div>

        <div className="flex items-center gap-1.5">
          {[
            { label: left.label, val: 92 },
            { label: '50 / 50', val: 50 },
            { label: right.label, val: 8 },
          ].map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setPct(preset.val)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition ${
                Math.abs(pct - preset.val) < 12
                  ? 'bg-[#B92B27] text-white'
                  : 'bg-[#EDE5D5] text-[#4B433B] hover:bg-[#DFD4C1]'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Split Stage */}
      <div
        ref={boxRef}
        onPointerMove={(e) => {
          if (e.buttons === 1) updateFromClientX(e.clientX);
        }}
        onClick={(e) => updateFromClientX(e.clientX)}
        className="relative min-h-0 flex-1 cursor-ew-resize overflow-hidden bg-[#F4EFE5] select-none"
      >
        {/* Base Layer (Right - AI) */}
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <img
            src={assetUrl(right.src)}
            alt={right.caption}
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>

        {/* Clipped Layer (Left - Textbook) */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-[#FAF6EE] p-3"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <img
            src={assetUrl(left.src)}
            alt={left.caption}
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>

        {/* Divider Line & Handle */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 bg-[#B92B27] shadow-[0_0_10px_rgba(185,43,39,0.45)]"
          style={{ left: `${pct}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#B92B27] text-white shadow-lg">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>

        {/* Corner Zoom Buttons */}
        {onZoom && (
          <div className="absolute right-3 bottom-3 z-20 flex gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onZoom({ src: left.src, caption: left.caption, source: left.source });
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-[#DFD4C1] bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#1A1714] shadow-sm backdrop-blur-sm hover:bg-[#B92B27] hover:text-white"
            >
              <ZoomIn className="h-3 w-3" /> {left.label}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onZoom({ src: right.src, caption: right.caption, source: right.source });
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-[#DFD4C1] bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#1A1714] shadow-sm backdrop-blur-sm hover:bg-[#B92B27] hover:text-white"
            >
              <ZoomIn className="h-3 w-3" /> {right.label}
            </button>
          </div>
        )}
      </div>

      {/* Footer Caption */}
      <div className="flex items-center justify-between border-t border-[#EAE0CF] bg-[#FAF6EE] px-4 py-2 text-[11px] text-[#5C5349]">
        <span>Kéo hoặc nhấn để đối chiếu trực tiếp {left.label} & {right.label}</span>
        <span className="font-mono-tech font-bold text-[#B92B27]">{Math.round(pct)}% / {Math.round(100 - pct)}%</span>
      </div>
    </div>
  );
}
