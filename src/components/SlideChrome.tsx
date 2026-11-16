import type { ReactNode } from 'react';
import { Play, ZoomIn, Globe, Film } from 'lucide-react';
import type { SlideDefinition, VideoReference } from '../data/types';
import type { LightboxImage } from './ImageLightbox';
import { assetUrl } from '../utils/assets';
import { KineticHeadline } from './cinematic/KineticHeadline';
import { TiltPlate } from './cinematic/TiltPlate';
import { SLIDES } from '../data/slideData';

interface SlideHeaderProps {
  slide: SlideDefinition;
  titleOverride?: string;
  reducedMotion?: boolean;
  eyebrowRight?: ReactNode;
}

export function SlideHeader({
  slide,
  titleOverride,
  reducedMotion = false,
  eyebrowRight,
}: SlideHeaderProps) {
  const titleText = titleOverride || slide.title;
  const headingSizeClass =
    titleText.length > 74
      ? 'text-[34px]'
      : titleText.length > 52
      ? 'text-[38px]'
      : 'text-[43px]';

  return (
    <header className="relative z-20 mb-4 flex shrink-0 items-end justify-between gap-6 border-b border-white/80 pb-3">
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#B92B27] px-3 py-0.5 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-white shadow-xs">
            {slide.chapterLabel}
          </span>
          {slide.sectionCode && (
            <span className="liquid-glass rounded-full px-3 py-0.5 font-mono-tech text-xs font-extrabold text-[#433C35]">
              Mục {slide.sectionCode}
            </span>
          )}
          <span className="liquid-glass rounded-full px-3 py-0.5 font-mono-tech text-xs font-bold text-[#685F54]">
            Slide {String(slide.id).padStart(2, '0')} / {SLIDES.length}
          </span>
          {eyebrowRight}
        </div>

        <KineticHeadline
          text={titleText}
          as="h1"
          reducedMotion={reducedMotion}
          className={`${headingSizeClass} font-extrabold leading-[1.12] tracking-tight text-[#171411] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]`}
        />

        {slide.subtitle && (
          <p className="mt-1 text-[15px] font-bold tracking-wide text-[#9A6E21]">
            {slide.subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

interface FullBleedBackdropProps {
  src: string;
  fadeDirection?: 'left' | 'right' | 'top' | 'bottom' | 'soft';
  ambientPaused?: boolean;
  imageOpacity?: number;
  className?: string;
}

/**
 * Full-bleed Apple Keynote daylight visual backdrop.
 * Allows Liquid Glass foreground cards to overlap and refract rich editorial tones.
 */
export function FullBleedBackdrop({
  src,
  fadeDirection = 'left',
  ambientPaused = false,
  imageOpacity = 0.85,
  className = '',
}: FullBleedBackdropProps) {
  const gradientMap: Record<NonNullable<FullBleedBackdropProps['fadeDirection']>, string> = {
    left: 'linear-gradient(90deg, rgba(250,245,235,0.92) 0%, rgba(250,245,235,0.68) 38%, rgba(250,245,235,0.18) 68%, rgba(250,245,235,0.02) 100%)',
    right:
      'linear-gradient(270deg, rgba(250,245,235,0.92) 0%, rgba(250,245,235,0.68) 38%, rgba(250,245,235,0.18) 68%, rgba(250,245,235,0.02) 100%)',
    bottom:
      'linear-gradient(180deg, rgba(250,245,235,0.12) 0%, rgba(250,245,235,0.54) 44%, rgba(250,245,235,0.88) 88%)',
    top: 'linear-gradient(180deg, rgba(250,245,235,0.9) 0%, rgba(250,245,235,0.58) 44%, rgba(250,245,235,0.12) 100%)',
    soft: 'radial-gradient(circle at 68% 48%, rgba(250,245,235,0.08) 0%, rgba(250,245,235,0.54) 58%, rgba(250,245,235,0.88) 94%)',
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={assetUrl(src)}
        alt=""
        style={{ opacity: imageOpacity }}
        className={`h-full w-full object-cover object-center ${
          ambientPaused ? '' : 'animate-ken-burns'
        }`}
      />
      <div className="absolute inset-0" style={{ background: gradientMap[fadeDirection] }} />
    </div>
  );
}

interface EditorialPhotoPlateProps {
  src: string;
  caption: string;
  source?: string;
  badge?: string;
  captionPosition?: 'bottom' | 'top' | 'none';
  onZoom?: (img: LightboxImage) => void;
  disableTilt?: boolean;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
}

/**
 * Multi-layered Liquid Glass framed editorial photography plate (zero boxy card borders).
 */
export function EditorialPhotoPlate({
  src,
  caption,
  source,
  badge,
  captionPosition = 'bottom',
  onZoom,
  disableTilt = false,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  objectPosition = 'center center',
}: EditorialPhotoPlateProps) {
  return (
    <TiltPlate disabled={disableTilt} maxTiltDeg={4} className={`flex flex-col ${className}`}>
      <div className="group relative h-full w-full overflow-hidden rounded-[28px] border border-white/90 shadow-[0_28px_68px_-12px_rgba(34,24,14,0.18)] ring-1 ring-[#D8CCB7]/50">
        <img
          src={assetUrl(src)}
          alt={caption}
          loading="lazy"
          style={{ objectPosition }}
          className={imgClassName}
        />

        {captionPosition !== 'none' && (
          <div
            className={`pointer-events-none absolute inset-x-0 h-28 ${
              captionPosition === 'top' ? 'top-0' : 'bottom-0'
            }`}
            style={{
              background:
                captionPosition === 'top'
                  ? 'linear-gradient(0deg, transparent 0%, rgba(26,23,20,0.34) 100%)'
                  : 'linear-gradient(180deg, transparent 0%, rgba(26,23,20,0.44) 100%)',
            }}
          />
        )}

        {badge && (
          <span
            className={`liquid-glass absolute left-4 rounded-full px-3.5 py-1 font-mono-tech text-xs font-extrabold text-[#B92B27] ${
              captionPosition === 'top' ? 'bottom-4' : 'top-4'
            }`}
          >
            {badge}
          </span>
        )}

        {captionPosition !== 'none' ? (
          <div
            className={`absolute right-4 left-4 flex gap-3 ${
              captionPosition === 'top' ? 'top-4 items-start justify-between' : 'bottom-4 items-end justify-between'
            }`}
          >
            <div className="liquid-glass rounded-2xl px-4 py-2.5">
              <div className="text-sm font-extrabold leading-snug text-[#171411]">{caption}</div>
              {source && <div className="mt-0.5 text-xs font-semibold text-[#5C5349]">{source}</div>}
            </div>

            {onZoom && (
              <button
                type="button"
                onClick={() => onZoom({ src, caption, source })}
                className="liquid-glass inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-extrabold text-[#171411] transition hover:bg-[#B92B27] hover:text-white"
                title="Phóng to hình ảnh"
              >
                <ZoomIn className="h-4 w-4" />
                <span>Zoom</span>
              </button>
            )}
          </div>
        ) : (
          onZoom && (
            <button
              type="button"
              onClick={() => onZoom({ src, caption, source })}
              className="liquid-glass absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-extrabold text-[#171411] transition hover:bg-[#B92B27] hover:text-white"
              title="Phóng to hình ảnh"
            >
              <ZoomIn className="h-4 w-4" />
              <span>Zoom</span>
            </button>
          )
        )}
      </div>
    </TiltPlate>
  );
}

interface DeviceMockupPlateProps {
  src: string;
  caption: string;
  source?: string;
  domain?: string;
  badge?: string;
  onZoom?: (img: LightboxImage) => void;
  disableTilt?: boolean;
  className?: string;
  imgClassName?: string;
}

/**
 * Apple Liquid Glass Safari / OS window mockup for authentic platform screenshots.
 */
export function DeviceMockupPlate({
  src,
  caption,
  source,
  domain = 'pikafish-analysis',
  badge,
  onZoom,
  disableTilt = false,
  className = '',
  imgClassName = 'h-full w-full object-contain bg-white',
}: DeviceMockupPlateProps) {
  return (
    <TiltPlate disabled={disableTilt} maxTiltDeg={4} className={`flex flex-col ${className}`}>
      <div className="liquid-glass group flex h-full w-full flex-col overflow-hidden rounded-[24px]">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/80 bg-white/60 px-4 py-2 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E26D5C]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#EAB34B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4EB67E]" />
          </div>
          <div className="flex min-w-0 items-center gap-1.5 rounded-full border border-white/90 bg-white/85 px-3 py-0.5 font-mono-tech text-[11px] font-bold text-[#4B433B] shadow-2xs">
            <Globe className="h-3 w-3 shrink-0 text-[#15805D]" />
            <span className="truncate">{domain}</span>
          </div>
          <div className="flex items-center gap-2">
            {badge && (
              <span className="hidden rounded-full bg-[#B92B27]/12 px-2.5 py-0.5 font-mono-tech text-[11px] font-extrabold text-[#B92B27] sm:inline">
                {badge}
              </span>
            )}
            {onZoom && (
              <button
                type="button"
                onClick={() => onZoom({ src, caption, source })}
                className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-extrabold text-[#171411] shadow-2xs transition hover:bg-[#B92B27] hover:text-white"
                title="Phóng to ảnh chụp màn hình"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            )}
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden bg-white/85">
          <img
            src={assetUrl(src)}
            alt={caption}
            loading="lazy"
            className={imgClassName}
          />
        </div>

        <div className="shrink-0 border-t border-white/80 bg-white/65 px-4 py-2 backdrop-blur-md">
          <div className="text-sm font-extrabold leading-snug text-[#171411]">{caption}</div>
          {source && <div className="text-xs font-semibold text-[#5C5349]">{source}</div>}
        </div>
      </div>
    </TiltPlate>
  );
}

interface VideoPreviewPlateProps {
  video: VideoReference;
  onOpenVideo: (video: VideoReference) => void;
  className?: string;
  compact?: boolean;
}

/**
 * Click-to-play Apple Liquid Glass Video Preview Card rendered DIRECTLY inside slides.
 * Displays exact curated Vietnamese/English segment range (2-3 mins) without mouse hover jitter.
 */
export function VideoPreviewPlate({
  video,
  onOpenVideo,
  className = '',
  compact = false,
}: VideoPreviewPlateProps) {
  return (
    <button
      type="button"
      onClick={() => onOpenVideo(video)}
      className={`liquid-glass relative flex w-full overflow-hidden rounded-[22px] p-2.5 text-left hover:border-[#B92B27]/55 ${className}`}
      title={`Nhấn để phát video: ${video.title} (${video.clipNote})`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl bg-[#EAE0CF] ${
          compact ? 'h-24 w-40' : 'h-28 w-48'
        }`}
      >
        {video.poster ? (
          <img
            src={assetUrl(video.poster)}
            alt={video.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#F4EDE0]">
            <Film className="h-8 w-8 text-[#B92B27]" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/15">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-[#B92B27]/95 text-white shadow-lg">
            <Play className="ml-0.5 h-5 w-5 fill-white" />
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center pl-4 pr-2">
        <div className="mb-1 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#B92B27] px-2.5 py-0.5 font-mono-tech text-[11px] font-extrabold text-white">
            <Film className="h-3 w-3" /> Video ({video.language})
          </span>
          <span className="rounded-full border border-[#B92B27]/30 bg-[#FFF5F4] px-2.5 py-0.5 font-mono-tech text-[11px] font-extrabold text-[#B92B27]">
            {video.clipNote}
          </span>
        </div>
        <div className="line-clamp-2 text-[17px] font-extrabold leading-snug text-[#171411]">
          {video.title}
        </div>
        <div className="mt-0.5 truncate text-xs font-semibold text-[#4B433B]">
          {video.author} · {video.description}
        </div>
      </div>
    </button>
  );
}

export function FigureCard(props: {
  src: string;
  caption: string;
  source?: string;
  onZoom?: (img: LightboxImage) => void;
  className?: string;
  imgClassName?: string;
  badge?: string;
  disableTilt?: boolean;
}) {
  return <EditorialPhotoPlate {...props} />;
}

/**
 * Apple Liquid Glass tactile content surface with specular sheen & accent ribbon.
 */
export function ContentCard({
  children,
  accent = '#B92B27',
  variant = 'card',
  className = '',
}: {
  children: ReactNode;
  accent?: string;
  variant?: 'card' | 'editorial' | 'tinted';
  className?: string;
}) {
  if (variant === 'editorial') {
    return (
      <div
        className={`border-l-[5px] pl-5 py-1.5 text-[#171411] ${className}`}
        style={{ borderLeftColor: accent }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${
        variant === 'tinted' ? 'liquid-glass-warm' : 'liquid-glass'
      } relative overflow-hidden rounded-[22px] p-5 text-[#171411] ${className}`}
      style={{
        boxShadow: `inset 4px 0 0 ${accent}, inset 0 1.5px 1.5px rgba(255,255,255,0.96), 0 20px 50px -12px rgba(34,24,14,0.12)`,
      }}
    >
      {children}
    </div>
  );
}
