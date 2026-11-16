import {
  ChevronLeft,
  ChevronRight,
  Grid,
  Maximize2,
  Minimize2,
  Presentation,
  Image as ImageIcon,
  Pause,
  Play,
  Sparkles,
} from 'lucide-react';
import { SLIDES } from '../data/slideData';

interface ProgressIndicatorProps {
  currentIndex: number;
  total: number;
}

export function ProgressIndicator({ currentIndex, total }: ProgressIndicatorProps) {
  const pct = ((currentIndex + 1) / total) * 100;
  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-40 h-1 bg-[#DED3C0]">
      <div
        className="h-full bg-gradient-to-r from-[#B92B27] via-[#B6832C] to-[#15805D] transition-all duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

interface SlideNavigationProps {
  currentIndex: number;
  visible: boolean;
  isFullscreen: boolean;
  reducedMotion: boolean;
  ambientPaused: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleOverview: () => void;
  onToggleAssets: () => void;
  onOpenPresenter: () => void;
  onToggleFullscreen: () => void;
  onToggleReducedMotion: () => void;
  onToggleAmbient: () => void;
}

export function SlideNavigation({
  currentIndex,
  visible,
  isFullscreen,
  reducedMotion,
  ambientPaused,
  onPrev,
  onNext,
  onToggleOverview,
  onToggleAssets,
  onOpenPresenter,
  onToggleFullscreen,
  onToggleReducedMotion,
  onToggleAmbient,
}: SlideNavigationProps) {
  const current = SLIDES[currentIndex];

  return (
    <nav
      aria-label="Điều khiển trình chiếu"
      className={`liquid-glass-dock fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full px-4 py-1.5 text-[#171411] transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="shrink-0 rounded-xl p-2 text-[#3F3831] transition hover:bg-[#EFE7D8] disabled:opacity-30"
        title="Slide trước (← / PageUp)"
        aria-label="Slide trước"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="flex shrink-0 items-center gap-2 px-2">
        <span className="font-mono-tech text-xs font-extrabold text-[#B92B27]">
          {String(currentIndex + 1).padStart(2, '0')} / {SLIDES.length}
        </span>
        <span className="hidden max-w-[170px] truncate text-xs font-medium text-[#6E655A] sm:inline">
          {current.chapterLabel}
        </span>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={currentIndex === SLIDES.length - 1}
        className="shrink-0 rounded-xl p-2 text-[#3F3831] transition hover:bg-[#EFE7D8] disabled:opacity-30"
        title="Slide tiếp theo (→ / Space)"
        aria-label="Slide tiếp theo"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mx-1 h-5 w-px shrink-0 bg-[#DFD4C1]" />

      <button
        type="button"
        onClick={onToggleOverview}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-[#2E2924] transition hover:bg-[#EFE7D8]"
        title="Tổng quan slide (O / G)"
      >
        <Grid className="h-3.5 w-3.5 text-[#B6832C]" />
        <span className="hidden md:inline">Tổng quan</span>
      </button>

      <button
        type="button"
        onClick={onOpenPresenter}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-[#B92B27] transition hover:bg-[#B92B27]/10"
        title="Chế độ người thuyết trình (P)"
      >
        <Presentation className="h-3.5 w-3.5" />
        <span className="hidden md:inline">Thuyết trình</span>
      </button>

      <button
        type="button"
        onClick={onToggleAssets}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-[#2E2924] transition hover:bg-[#EFE7D8]"
        title="Nguồn tư liệu hình ảnh & video"
      >
        <ImageIcon className="h-3.5 w-3.5 text-[#15805D]" />
        <span className="hidden lg:inline">Tư liệu</span>
      </button>

      <button
        type="button"
        onClick={onToggleAmbient}
        className={`inline-flex shrink-0 items-center gap-1 rounded-xl px-2 py-1.5 text-xs font-semibold transition ${
          ambientPaused
            ? 'bg-amber-100 text-amber-800'
            : 'text-[#5C5349] hover:bg-[#EFE7D8]'
        }`}
        title="Tạm dừng / phát chuyển động nền"
      >
        {ambientPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        <span className="hidden xl:inline">{ambientPaused ? 'Đang dừng nền' : 'Nền động'}</span>
      </button>

      <button
        type="button"
        onClick={onToggleReducedMotion}
        className={`inline-flex shrink-0 items-center gap-1 rounded-xl px-2 py-1.5 text-xs font-semibold transition ${
          reducedMotion
            ? 'bg-emerald-100 text-emerald-800'
            : 'text-[#5C5349] hover:bg-[#EFE7D8]'
        }`}
        title="Chuyển nhanh ít hiệu ứng (Reduced Motion)"
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span className="hidden xl:inline">{reducedMotion ? 'Tối giản' : 'Cinematic'}</span>
      </button>

      <button
        type="button"
        onClick={onToggleFullscreen}
        className="shrink-0 rounded-xl p-2 text-[#3F3831] transition hover:bg-[#EFE7D8]"
        title="Toàn màn hình (F)"
        aria-label="Toàn màn hình"
      >
        {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </button>
    </nav>
  );
}
