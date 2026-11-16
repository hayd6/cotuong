import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from './data/slideData';
import type { VideoReference } from './data/types';
import { useMotionPreferences } from './hooks/useMotionPreferences';
import { useFullscreen } from './hooks/useFullscreen';
import { usePresenterSync } from './hooks/usePresenterSync';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { PointerParallaxHost } from './components/cinematic/PointerParallaxHost';
import { CinematicStage } from './components/cinematic/CinematicStage';
import { ChapterRail } from './components/cinematic/ChapterRail';
import { SlideRenderer } from './layouts/SlideRenderer';
import { ProgressIndicator, SlideNavigation } from './components/SlideNavigation';
import { VideoModal } from './components/VideoModal';
import { ImageLightbox, type LightboxImage } from './components/ImageLightbox';
import { OverviewModal } from './components/OverviewModal';
import { AssetGalleryModal } from './components/AssetGalleryModal';
import { PresenterView } from './components/PresenterView';

function parseHashToSlideIndex(): number {
  const hash = window.location.hash;
  const match = hash.match(/slide-(\d+)/i);
  if (match) {
    const n = Number(match[1]);
    if (n >= 1 && n <= SLIDES.length) {
      return n - 1;
    }
  }
  return 0;
}

function isPresenterQuery(): boolean {
  const params = new URLSearchParams(window.location.search);
  return params.get('mode') === 'presenter';
}

export function App() {
  const [presenterMode] = useState<boolean>(() => isPresenterQuery());
  const [currentIndex, setCurrentIndex] = useState<number>(() => parseHashToSlideIndex());
  const [direction, setDirection] = useState<number>(1);

  const { reducedMotion, setReducedMotion, ambientPaused, toggleAmbientPaused } =
    useMotionPreferences();
  const { isFullscreen, toggleFullscreen, exitFullscreen } = useFullscreen();

  const [activeVideo, setActiveVideo] = useState<VideoReference | null>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [assetsOpen, setAssetsOpen] = useState(false);

  const [navVisible, setNavVisible] = useState(true);
  const hideTimerRef = useRef<number | null>(null);

  const resetHideTimer = useCallback(() => {
    setNavVisible(true);
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => {
      setNavVisible(false);
    }, 3500);
  }, []);

  useEffect(() => {
    if (presenterMode) return;
    resetHideTimer();
    const onMove = () => resetHideTimer();
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchstart', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onMove);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [presenterMode, resetHideTimer]);

  const handleRemoteSlide = useCallback((idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return;
    setCurrentIndex((prev) => {
      setDirection(idx >= prev ? 1 : -1);
      return idx;
    });
  }, []);

  const { broadcastSlide } = usePresenterSync(currentIndex, handleRemoteSlide);

  const goToSlide = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, idx));
      setCurrentIndex((prev) => {
        setDirection(clamped >= prev ? 1 : -1);
        return clamped;
      });
      broadcastSlide(clamped);
    },
    [broadcastSlide]
  );

  useEffect(() => {
    const slide = SLIDES[currentIndex];
    const targetHash = `#/slide-${slide.id}`;
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, [currentIndex]);

  useEffect(() => {
    const onHashChange = () => {
      const idx = parseHashToSlideIndex();
      setCurrentIndex(idx);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goNext = useCallback(() => {
    goToSlide(currentIndex + 1);
    resetHideTimer();
  }, [currentIndex, goToSlide, resetHideTimer]);

  const goPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
    resetHideTimer();
  }, [currentIndex, goToSlide, resetHideTimer]);

  const openPresenterWindow = useCallback(() => {
    const slide = SLIDES[currentIndex];
    const url = `${window.location.origin}${window.location.pathname}?mode=presenter#/slide-${slide.id}`;
    window.open(url, 'cotuong-presenter-window', 'width=1280,height=780');
  }, [currentIndex]);

  const hasOpenModal = Boolean(activeVideo || lightboxImage || overviewOpen || assetsOpen);

  const handleEscape = useCallback(() => {
    if (activeVideo) {
      setActiveVideo(null);
    } else if (lightboxImage) {
      setLightboxImage(null);
    } else if (overviewOpen) {
      setOverviewOpen(false);
    } else if (assetsOpen) {
      setAssetsOpen(false);
    } else {
      exitFullscreen();
    }
  }, [activeVideo, lightboxImage, overviewOpen, assetsOpen, exitFullscreen]);

  useKeyboardNavigation({
    hasOpenModal,
    onNext: goNext,
    onPrev: goPrev,
    onFirst: () => goToSlide(0),
    onLast: () => goToSlide(SLIDES.length - 1),
    onToggleFullscreen: toggleFullscreen,
    onToggleOverview: () => setOverviewOpen((v) => !v),
    onCloseModalOrFullscreen: handleEscape,
    onOpenPresenter: openPresenterWindow,
  });

  if (presenterMode) {
    return (
      <div className={reducedMotion ? 'reduced-motion' : ''}>
        <PresenterView
          currentIndex={currentIndex}
          onPrev={goPrev}
          onNext={goNext}
          onSelectSlide={goToSlide}
          reducedMotion={reducedMotion}
        />
      </div>
    );
  }

  const currentSlide = SLIDES[currentIndex];
  const rootClasses = [
    reducedMotion ? 'reduced-motion' : '',
    ambientPaused ? 'ambient-paused' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <PointerParallaxHost
      disabled={reducedMotion || ambientPaused}
      className={`h-screen w-screen overflow-hidden ${rootClasses}`}
    >
      <ProgressIndicator currentIndex={currentIndex} total={SLIDES.length} />

      <ChapterRail
        activeChapter={currentSlide.chapter}
        onJumpSlide={(idx) => goToSlide(idx)}
      />

      <CinematicStage
        slideKey={currentSlide.id}
        transitionStyle={currentSlide.transition}
        direction={direction}
        reducedMotion={reducedMotion}
        onSwipeNext={goNext}
        onSwipePrev={goPrev}
      >
        <SlideRenderer
          slide={currentSlide}
          reducedMotion={reducedMotion}
          ambientPaused={ambientPaused}
          onZoom={(img) => setLightboxImage(img)}
          onOpenVideo={(vid) => setActiveVideo(vid)}
          onGoToChapter={(idx) => goToSlide(idx)}
        />
      </CinematicStage>

      <SlideNavigation
        currentIndex={currentIndex}
        visible={navVisible || hasOpenModal}
        isFullscreen={isFullscreen}
        reducedMotion={reducedMotion}
        ambientPaused={ambientPaused}
        onPrev={goPrev}
        onNext={goNext}
        onToggleOverview={() => setOverviewOpen((v) => !v)}
        onToggleAssets={() => setAssetsOpen((v) => !v)}
        onOpenPresenter={openPresenterWindow}
        onToggleFullscreen={toggleFullscreen}
        onToggleReducedMotion={() => setReducedMotion(!reducedMotion)}
        onToggleAmbient={toggleAmbientPaused}
      />

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <OverviewModal
        open={overviewOpen}
        currentIndex={currentIndex}
        onSelectSlide={goToSlide}
        onClose={() => setOverviewOpen(false)}
      />
      <AssetGalleryModal
        open={assetsOpen}
        onJumpSlide={goToSlide}
        onClose={() => setAssetsOpen(false)}
      />
    </PointerParallaxHost>
  );
}

export default App;
