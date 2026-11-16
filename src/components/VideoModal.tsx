import { useState } from 'react';
import { X, RotateCcw, ExternalLink, Film, Clock } from 'lucide-react';
import type { VideoReference } from '../data/types';

interface VideoModalProps {
  video: VideoReference | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const [reloadKey, setReloadKey] = useState(0);

  if (!video) return null;

  const startParam = video.startSeconds > 0 ? `start=${video.startSeconds}&` : '';
  const endParam = video.endSeconds > 0 ? `end=${video.endSeconds}&` : '';
  const embedSrc = `https://www.youtube.com/embed/${video.youtubeId}?${startParam}${endParam}rel=0&modestbranding=1`;
  const watchUrl =
    video.startSeconds > 0
      ? `https://www.youtube.com/watch?v=${video.youtubeId}&t=${video.startSeconds}s`
      : `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4EDE0]/82 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#DFD4C1] bg-[#FCF9F2] text-[#171411] shadow-[0_32px_90px_rgba(26,23,20,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5DAC8] bg-white px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B92B27]/12 text-[#B92B27]">
              <Film className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="truncate text-lg font-extrabold leading-tight text-[#171411]">
                {video.title}
              </h3>
              <p className="mt-0.5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#685F54]">
                <span>{video.author}</span>
                <span>·</span>
                <span className="rounded-full bg-[#15805D]/12 px-2 py-0.5 font-bold text-[#15805D]">
                  {video.language}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF5F4] px-2.5 py-0.5 font-mono-tech font-extrabold text-[#B92B27] ring-1 ring-[#B92B27]/25">
                  <Clock className="h-3 w-3" /> {video.clipNote}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setReloadKey((k) => k + 1)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3 py-1.5 text-xs font-bold text-[#171411] hover:bg-[#EFE7D8]"
              title="Phát lại đoạn video đề xuất"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Phát lại đoạn
            </button>
            <a
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3 py-1.5 text-xs font-bold text-[#171411] hover:bg-[#EFE7D8]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Mở YouTube
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-1.5 text-[#685F54] hover:bg-[#EFE7D8] hover:text-[#171411]"
              aria-label="Đóng video (Esc)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 16:9 YouTube Embed locked to the curated timestamp segment */}
        <div className="relative aspect-video w-full bg-[#171411]">
          <iframe
            key={`${video.youtubeId}-${reloadKey}`}
            src={embedSrc}
            title={video.title}
            className="h-full w-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Segment Description Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#E5DAC8] bg-white px-6 py-3.5 text-xs font-medium text-[#433C35]">
          <span>
            <strong className="text-[#B92B27]">{video.clipNote}:</strong> {video.description}
          </span>
          <span className="font-mono-tech font-bold text-[#9A6E21]">
            Nhấn Esc hoặc click bên ngoài để đóng
          </span>
        </div>
      </div>
    </div>
  );
}
