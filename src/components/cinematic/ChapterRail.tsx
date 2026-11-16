import type { ChapterId } from '../../data/types';

interface ChapterRailProps {
  activeChapter: ChapterId;
  onJumpSlide: (slideIndex: number) => void;
}

const RAIL_ITEMS: Array<{ id: ChapterId; short: string; label: string; startIdx: number }> = [
  { id: 'intro', short: '00', label: 'Mở đầu', startIdx: 0 },
  { id: 'ch1', short: 'C1', label: 'Ch.1 · Lý thuyết AI', startIdx: 1 },
  { id: 'ch2', short: 'C2', label: 'Ch.2 · Giai đoạn ván cờ', startIdx: 11 },
  { id: 'ch3', short: 'C3', label: 'Ch.3 · Thực nghiệm', startIdx: 24 },
  { id: 'ch4', short: 'C4', label: 'Ch.4 · Định hướng', startIdx: 29 },
  { id: 'outro', short: 'KL', label: 'Tổng kết đề tài', startIdx: 39 },
];

/**
 * Floating Apple Liquid Glass left navigation capsule kept safely clear of screen edges.
 */
export function ChapterRail({ activeChapter, onJumpSlide }: ChapterRailProps) {
  return (
    <aside
      aria-label="Mục lục chương"
      className="liquid-glass-dock group/rail pointer-events-auto fixed top-1/2 left-3 z-30 hidden -translate-y-1/2 flex-col gap-1 rounded-2xl p-1 transition-all duration-300 md:flex"
    >
      {RAIL_ITEMS.map((item) => {
        const active = activeChapter === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onJumpSlide(item.startIdx)}
            title={item.label}
            className={`flex items-center gap-1.5 overflow-hidden rounded-xl px-2 py-2 text-left transition-all ${
              active
                ? 'bg-[#B92B27] text-white shadow-sm'
                : 'text-[#5C5349] hover:bg-white/80 hover:text-[#171411]'
            }`}
          >
            <span className="w-5 shrink-0 text-center font-mono-tech text-[11px] font-extrabold">
              {item.short}
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono-tech text-xs font-bold opacity-0 transition-all duration-300 group-hover/rail:max-w-[185px] group-hover/rail:pr-2 group-hover/rail:opacity-100">
              {item.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
