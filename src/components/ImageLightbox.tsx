import { X, ZoomIn } from 'lucide-react';
import { assetUrl } from '../utils/assets';

export interface LightboxImage {
  src: string;
  caption: string;
  source?: string;
}

interface ImageLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4EDE0]/82 p-6 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
    >
      <div
        className="relative flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#DFD4C1] bg-[#FCF9F2] shadow-[0_32px_90px_rgba(26,23,20,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E5DAC8] bg-white px-6 py-4">
          <div className="flex items-center gap-2.5 text-base font-bold text-[#1A1714]">
            <ZoomIn className="h-5 w-5 text-[#B92B27]" />
            <span>{image.caption}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-1.5 text-[#6E655A] transition hover:bg-[#EFE7D8] hover:text-[#1A1714]"
            aria-label="Đóng ảnh (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-auto bg-[#FAF6EE] p-5">
          <img
            src={assetUrl(image.src)}
            alt={image.caption}
            className="max-h-[72vh] w-auto rounded-2xl border border-[#E5DAC8] bg-white object-contain shadow-lg"
          />
        </div>

        {image.source && (
          <div className="border-t border-[#E5DAC8] bg-white px-6 py-3 text-sm font-medium text-[#6E655A]">
            Nguồn: {image.source}
          </div>
        )}
      </div>
    </div>
  );
}
