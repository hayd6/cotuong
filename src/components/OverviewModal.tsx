import { X, Layers } from 'lucide-react';
import { SLIDES } from '../data/slideData';
import type { ChapterId, SlideDefinition } from '../data/types';

interface OverviewModalProps {
  open: boolean;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

const CHAPTER_GROUPS: Array<{ id: ChapterId; title: string }> = [
  { id: 'intro', title: 'Mở đầu' },
  { id: 'ch1', title: 'Chương 1 · Cơ sở lý thuyết và công nghệ AI (Soạn từ FILE-2)' },
  { id: 'ch2', title: 'Chương 2 · Ứng dụng AI trong các giai đoạn ván cờ (FILE-3)' },
  { id: 'ch3', title: 'Chương 3 · Công cụ AI hiện đại & Thực nghiệm (FILE-3)' },
  { id: 'ch4', title: 'Chương 4 · Đánh giá, Hạn chế & Định hướng (FILE-3)' },
  { id: 'outro', title: 'Tài liệu tham khảo & Kết luận' },
];

export function OverviewModal({
  open,
  currentIndex,
  onSelectSlide,
  onClose,
}: OverviewModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#FCF9F2]/96 text-[#1A1714] backdrop-blur-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Tổng quan toàn bộ slide"
    >
      <div className="flex items-center justify-between border-b border-[#DFD4C1] bg-white px-6 py-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <Layers className="h-5 w-5 text-[#B92B27]" />
          <h2 className="text-xl font-extrabold text-[#1A1714]">
            Tổng quan trình chiếu ({SLIDES.length} Slide)
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-4 py-2 text-xs font-bold text-[#1A1714] transition hover:bg-[#B92B27] hover:text-white"
        >
          <X className="h-4 w-4" />
          Đóng (Esc)
        </button>
      </div>

      <div className="custom-scroll flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-7xl space-y-8">
          {CHAPTER_GROUPS.map((grp) => {
            const groupSlides: Array<{ slide: SlideDefinition; idx: number }> = SLIDES.map(
              (slide, idx) => ({ slide, idx })
            ).filter((item) => item.slide.chapter === grp.id);

            return (
              <section key={grp.id}>
                <h3 className="mb-3 flex items-center gap-2 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#9A6E21]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B92B27]" />
                  {grp.title} ({groupSlides.length} slide)
                </h3>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {groupSlides.map(({ slide, idx }) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => {
                          onSelectSlide(idx);
                          onClose();
                        }}
                        className={`flex flex-col justify-between rounded-2xl border p-4 text-left shadow-xs transition ${
                          isActive
                            ? 'border-[#B92B27] bg-[#FFF5F4] ring-2 ring-[#B92B27]/25'
                            : 'border-[#DFD4C1] bg-white hover:border-[#B6832C] hover:shadow-md'
                        }`}
                      >
                        <div>
                          <div className="mb-1.5 flex items-center justify-between">
                            <span className="font-mono-tech text-xs font-extrabold text-[#B92B27]">
                              #{String(slide.id).padStart(2, '0')}
                            </span>
                            <span className="rounded-md border border-[#EAE0CF] bg-[#FAF6EE] px-2 py-0.5 font-mono-tech text-[10px] font-bold text-[#6E655A]">
                              {slide.theme}
                            </span>
                          </div>
                          <div className="line-clamp-2 text-base font-bold leading-snug text-[#1A1714]">
                            {slide.title}
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[#7A7065]">
                          <span>{slide.sectionCode || '—'}</span>
                          <span className="truncate max-w-[150px]">{slide.sourceBadge}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
