import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCcw,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { SLIDES } from '../data/slideData';
import { SlideRenderer } from '../layouts/SlideRenderer';

interface PresenterViewProps {
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  reducedMotion: boolean;
}

export function PresenterView({
  currentIndex,
  onPrev,
  onNext,
  onSelectSlide,
  reducedMotion,
}: PresenterViewProps) {
  const [elapsedSec, setElapsedSec] = useState(0);
  const [running, setRunning] = useState(true);
  const [wallTime, setWallTime] = useState(() => new Date());

  useEffect(() => {
    const wallTimer = setInterval(() => setWallTime(new Date()), 1000);
    return () => clearInterval(wallTimer);
  }, []);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setElapsedSec((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const currentSlide = SLIDES[currentIndex];
  const nextSlide = currentIndex < SLIDES.length - 1 ? SLIDES[currentIndex + 1] : null;

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  const openAudienceWindow = () => {
    const audienceUrl = `${window.location.origin}${window.location.pathname}#/slide-${currentSlide.id}`;
    window.open(audienceUrl, 'cotuong-audience-display');
  };

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#F4EDE0] text-[#1A1714]">
      {/* Top Presenter Bar */}
      <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[#DFD4C1] bg-white px-5 py-3 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-[#B92B27] px-3 py-1 font-mono-tech text-xs font-extrabold uppercase text-white">
            Presenter Mode
          </span>
          <span className="text-sm font-bold text-[#1A1714]">
            Slide {currentIndex + 1} / {SLIDES.length} — {currentSlide.chapterLabel}
          </span>
          <span className="hidden rounded-full border border-[#15805D]/30 bg-[#15805D]/10 px-2.5 py-0.5 text-xs font-bold text-[#15805D] md:inline">
            Đồng bộ thời gian thực với màn hình khán giả
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3 py-1.5 font-mono-tech text-sm">
            <Clock className="h-4 w-4 text-[#9A6E21]" />
            <span className="font-extrabold text-[#1A1714]">{formatTimer(elapsedSec)}</span>
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              className="rounded p-1 text-[#6E655A] hover:bg-[#EFE7D8] hover:text-[#1A1714]"
              title={running ? 'Tạm dừng' : 'Tiếp tục'}
            >
              {running ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => setElapsedSec(0)}
              className="rounded p-1 text-[#6E655A] hover:bg-[#EFE7D8] hover:text-[#1A1714]"
              title="Đặt lại đồng hồ"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          <span className="font-mono-tech text-xs font-bold text-[#6E655A]">
            {wallTime.toLocaleTimeString('vi-VN', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </span>

          <button
            type="button"
            onClick={openAudienceWindow}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#B6832C]/45 bg-[#FFF9ED] px-3.5 py-1.5 text-xs font-bold text-[#9A6E21] transition hover:bg-[#B6832C] hover:text-white"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Mở cửa sổ khán giả
          </button>
        </div>
      </header>

      {/* Main Split Workspace */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 p-4 lg:grid-cols-12">
        {/* Left: Current + Next Previews */}
        <div className="flex min-h-0 flex-col gap-4 lg:col-span-6">
          <div className="flex min-h-0 flex-[1.5] flex-col rounded-2xl border border-[#DFD4C1] bg-white p-3.5 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-[#6E655A]">
              <span className="font-mono-tech uppercase text-[#B92B27]">
                Đang trình chiếu · Slide #{currentSlide.id}
              </span>
              <span>{currentSlide.sourceBadge}</span>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-[#E5DAC8] bg-[#FCF9F2]">
              <ScaledMiniPreview slide={currentSlide} reducedMotion={reducedMotion} />
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-[#DFD4C1] bg-white p-3.5 shadow-sm">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-[#6E655A]">
              <span className="font-mono-tech uppercase text-[#15805D]">Slide tiếp theo</span>
              <span className="truncate max-w-[340px]">
                {nextSlide ? `#${nextSlide.id} · ${nextSlide.title}` : 'Kết thúc bài trình bày'}
              </span>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-[#E5DAC8] bg-[#FCF9F2]">
              {nextSlide ? (
                <ScaledMiniPreview slide={nextSlide} reducedMotion={true} />
              ) : (
                <div className="flex h-full items-center justify-center text-sm font-semibold text-[#7A7065]">
                  Đây là slide cuối cùng của bài thuyết trình.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Speaker Notes (FILE-2 / FILE-1) */}
        <div className="flex min-h-0 flex-col rounded-2xl border border-[#DFD4C1] bg-[#FCF9F2] p-6 shadow-sm lg:col-span-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#DFD4C1] pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#B92B27]" />
              <h2 className="text-lg font-extrabold text-[#1A1714]">Kịch bản lời thuyết trình</h2>
            </div>
            <span className="rounded-lg border border-[#DFD4C1] bg-white px-3 py-1 font-mono-tech text-xs font-bold text-[#9A6E21]">
              Nguồn: {currentSlide.presenterSourceBadge}
            </span>
          </div>

          <div className="custom-scroll flex-1 space-y-4 overflow-y-auto pr-2">
            <div className="rounded-xl border border-[#E5DAC8] bg-white p-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#9A6E21]">
                Chủ đề slide
              </div>
              <div className="mt-1 text-lg font-extrabold text-[#1A1714]">{currentSlide.title}</div>
            </div>

            {currentSlide.presenterNotes.map((para, i) => (
              <p
                key={i}
                className="border-l-4 border-[#B92B27] bg-white/80 py-2.5 pr-4 pl-4 rounded-r-xl text-[21px] leading-relaxed text-[#2C2722] shadow-2xs"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Navigation Controls inside Presenter */}
          <div className="mt-4 flex items-center justify-between border-t border-[#DFD4C1] pt-3.5">
            <button
              type="button"
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-2 rounded-xl border border-[#DFD4C1] bg-white px-4 py-2.5 text-sm font-bold text-[#1A1714] transition hover:bg-[#EFE7D8] disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
              Slide trước
            </button>

            <select
              value={currentIndex}
              onChange={(e) => onSelectSlide(Number(e.target.value))}
              className="max-w-xs rounded-xl border border-[#DFD4C1] bg-white px-3 py-2 text-xs font-semibold text-[#1A1714]"
              aria-label="Chuyển nhanh đến slide"
            >
              {SLIDES.map((s, idx) => (
                <option key={s.id} value={idx}>
                  #{s.id}. {s.title}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={onNext}
              disabled={currentIndex === SLIDES.length - 1}
              className="inline-flex items-center gap-2 rounded-xl bg-[#B92B27] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#9E231F] disabled:opacity-35"
            >
              Slide tiếp theo
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScaledMiniPreview({
  slide,
  reducedMotion,
}: {
  slide: (typeof SLIDES)[number];
  reducedMotion: boolean;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden p-2">
      <div
        className="relative aspect-video h-full max-h-full w-auto max-w-full overflow-hidden rounded-lg shadow-sm"
        style={{ containerType: 'size' as never }}
      >
        <div
          className="origin-top-left"
          style={{
            width: '1600px',
            height: '900px',
            transform: 'scale(0.32)',
            pointerEvents: 'none',
          }}
        >
          <SlideRenderer slide={slide} reducedMotion={reducedMotion} isPreview />
        </div>
      </div>
    </div>
  );
}
