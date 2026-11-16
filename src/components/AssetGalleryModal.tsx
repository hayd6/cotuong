import { X, Image as ImageIcon, Film, ExternalLink } from 'lucide-react';
import { ASSET_MANIFEST } from '../data/assetManifest';
import { assetUrl } from '../utils/assets';

interface AssetGalleryModalProps {
  open: boolean;
  onJumpSlide: (slideIndex: number) => void;
  onClose: () => void;
}

export function AssetGalleryModal({ open, onJumpSlide, onClose }: AssetGalleryModalProps) {
  if (!open) return null;

  const images = ASSET_MANIFEST.filter((a) => a.type === 'image');
  const videos = ASSET_MANIFEST.filter((a) => a.type === 'video');

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#FCF9F2]/96 text-[#1A1714] backdrop-blur-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Danh mục tư liệu & Asset Manifest"
    >
      <div className="flex items-center justify-between border-b border-[#DFD4C1] bg-white px-6 py-4">
        <div className="flex items-center gap-3">
          <ImageIcon className="h-5 w-5 text-[#B92B27]" />
          <div>
            <h2 className="text-xl font-extrabold text-[#1A1714]">
              Danh mục Tư liệu Hình ảnh & Video (Asset Manifest)
            </h2>
            <p className="text-xs font-medium text-[#6E655A]">
              {images.length} hình ảnh lưu cục bộ trong public/images/ · {videos.length} video YouTube đã kiểm chứng khả năng nhúng
            </p>
          </div>
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
          {/* Videos */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#B92B27]">
              <Film className="h-4 w-4" />
              Video minh họa đã kiểm chứng ({videos.length})
            </h3>
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((v) => (
                <div
                  key={v.id}
                  className="rounded-2xl border border-[#DFD4C1] bg-white p-4 shadow-xs"
                >
                  <div className="mb-1 text-base font-bold text-[#1A1714]">{v.title}</div>
                  <div className="text-xs font-medium text-[#6E655A]">Tác giả: {v.author}</div>
                  <div className="mt-1 font-mono-tech text-xs font-bold text-[#15805D]">
                    {v.status}
                  </div>
                  <div className="mt-2 text-sm text-[#4B433B]">{v.role}</div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {v.slidesUsed.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            onJumpSlide(s - 1);
                            onClose();
                          }}
                          className="rounded-md bg-[#B92B27]/12 px-2 py-0.5 font-mono-tech text-xs font-bold text-[#B92B27] transition hover:bg-[#B92B27] hover:text-white"
                        >
                          Slide {s}
                        </button>
                      ))}
                    </div>
                    <a
                      href={v.filename}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#9A6E21] hover:underline"
                    >
                      Mở link <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Images */}
          <section>
            <h3 className="mb-3 flex items-center gap-2 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-[#9A6E21]">
              <ImageIcon className="h-4 w-4" />
              Hình ảnh tư liệu tích hợp ({images.length})
            </h3>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="flex gap-3.5 rounded-2xl border border-[#DFD4C1] bg-white p-3.5 shadow-xs"
                >
                  <img
                    src={assetUrl(img.filename)}
                    alt={img.title}
                    loading="lazy"
                    className="h-22 w-26 shrink-0 rounded-xl border border-[#EAE0CF] bg-[#FAF6EE] object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="line-clamp-2 text-sm font-bold text-[#1A1714]">{img.title}</div>
                    <div className="mt-0.5 text-xs font-semibold text-[#6E655A]">
                      {img.sourceType} · {img.license}
                    </div>
                    <div className="truncate text-xs text-[#7A7065]" title={img.author}>
                      {img.author}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {img.slidesUsed.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            onJumpSlide(s - 1);
                            onClose();
                          }}
                          className="rounded-md bg-[#FAF6EE] px-2 py-0.5 font-mono-tech text-[11px] font-bold text-[#9A6E21] ring-1 ring-[#DFD4C1] transition hover:bg-[#B92B27] hover:text-white"
                        >
                          Slide {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
