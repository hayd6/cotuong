import { useEffect } from 'react';

interface KeyboardNavOptions {
  hasOpenModal: boolean;
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleFullscreen: () => void;
  onToggleOverview: () => void;
  onCloseModalOrFullscreen: () => void;
  onOpenPresenter: () => void;
}

export function useKeyboardNavigation({
  hasOpenModal,
  onNext,
  onPrev,
  onFirst,
  onLast,
  onToggleFullscreen,
  onToggleOverview,
  onCloseModalOrFullscreen,
  onOpenPresenter,
}: KeyboardNavOptions) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseModalOrFullscreen();
        return;
      }

      // Do not advance slides while a video/lightbox/overview modal is open
      if (hasOpenModal) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          onNext();
          break;
        case ' ':
          // Avoid triggering space when focused on a button
          if (target?.tagName !== 'BUTTON') {
            e.preventDefault();
            onNext();
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          onPrev();
          break;
        case 'Home':
          e.preventDefault();
          onFirst();
          break;
        case 'End':
          e.preventDefault();
          onLast();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          onToggleFullscreen();
          break;
        case 'o':
        case 'O':
        case 'g':
        case 'G':
          e.preventDefault();
          onToggleOverview();
          break;
        case 'p':
        case 'P':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            onOpenPresenter();
          }
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    hasOpenModal,
    onNext,
    onPrev,
    onFirst,
    onLast,
    onToggleFullscreen,
    onToggleOverview,
    onCloseModalOrFullscreen,
    onOpenPresenter,
  ]);
}
