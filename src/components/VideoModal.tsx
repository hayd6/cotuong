import { useState } from 'react';
import { X, RotateCcw, ExternalLink, Film } from 'lucide-react';
import type { VideoReference } from '../data/types';

interface VideoModalProps {
  video: VideoReference | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const [reloadKey, setReloadKey] = useState(0);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4EDE0]/82 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#DFD4C1] bg-[#FCF9F2] text-[#1A1714] shadow-[0_32px_90px_rgba(26,23,20,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5DAC8] bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B92B27]/12 text-[#B92B27]">
              <Film className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-extrabold leading-tight text-[#1A1714]">
                {video.title}
              </h3>
              <p className="text-xs font-semibold text-[#6E655A]">
                {video.author} · {video.durationHint}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setReloadKey((k) => k + 1)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3 py-1.5 text-xs font-bold text-[#1A1714] transition hover:bg-[#EFE7D8]"
              title="Phát lại video từ đầu"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Phát lại
            </button>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFD4C1] bg-[#FAF6EE] px-3 py-1.5 text-xs font-bold text-[#1A1714] transition hover:bg-[#EFE7D8]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              YouTube
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-1.5 text-[#6E655A] transition hover:bg-[#EFE7D8] hover:text-[#1A1714]"
              aria-label="Đóng video (Esc)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 16:9 YouTube Embed (only mounted when clicked, user-initiated, standard controls enabled) */}
        <div className="relative aspect-video w-full bg-[#1A1714]">
          <iframe
            key={`${video.youtubeId}-${reloadKey}`}
            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
            title={video.title}
            className="h-full w-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Description & Notice */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#E5DAC8] bg-white px-6 py-3.5 text-xs font-medium text-[#4B433B]">
          <span>{video.description}</span>
          <span className="font-mono-tech font-bold text-[#9A6E21]">
            Nhấn Esc hoặc click bên ngoài để đóng
          </span>
        </div>
      </div>
    </div>
  );
}
