import { useEffect } from 'react';
import { ASSET_MANIFEST } from '../data/assetManifest';
import { assetUrl } from '../utils/assets';

const warmed = new Set<string>();

/** Warm the next slide's local images after the current slide has painted. */
export function useSlideImagePreload(slideId: number) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      ASSET_MANIFEST.filter((asset) => asset.type === 'image' && asset.slidesUsed.includes(slideId + 1))
        .forEach(({ filename }) => {
          if (warmed.has(filename)) return;
          warmed.add(filename);
          const img = new Image();
          img.decoding = 'async';
          img.src = assetUrl(filename);
          img.decode().catch(() => warmed.delete(filename));
        });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [slideId]);
}
