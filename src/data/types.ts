export type SlideTheme = 'sunlit' | 'ivory' | 'engraving' | 'parchment';

export type TransitionStyle =
  | 'iris-expand'
  | 'ink-tear-wipe'
  | 'dolly-through'
  | 'curtain-split'
  | 'perspective-tilt'
  | 'editorial-glide';

export type ChapterId = 'intro' | 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'outro';

export interface VideoReference {
  id: string;
  youtubeId: string;
  title: string;
  author: string;
  durationHint: string;
  clipNote: string;
  startSeconds: number;
  endSeconds: number;
  language: 'Tiếng Việt' | 'English';
  description: string;
  poster?: string;
}

export interface ImageFigure {
  src: string;
  caption: string;
  source: string;
  aspectHint?: 'portrait' | 'landscape' | 'square';
}

export interface SlideDefinition {
  id: number; // 1-based index (1..39)
  slug: string; // e.g. 'slide-1'
  chapter: ChapterId;
  chapterLabel: string;
  sectionCode?: string;
  title: string;
  subtitle?: string;
  theme: SlideTheme;
  transition: TransitionStyle;
  sourceBadge: 'FILE-3' | 'FILE-2 → Soạn cho Slide' | 'FILE-1 (Mở đầu / Kết luận)';
  presenterSourceBadge: 'FILE-2' | 'FILE-1 (Bổ sung thuyết trình Ch.4 / Mở-Kết)';
  presenterNotes: string[];
  keyTakeaway?: string;
  video?: VideoReference;
}

export interface AssetManifestItem {
  id: string;
  filename: string;
  type: 'image' | 'video';
  sourceType:
    | 'FILE-1.docx'
    | 'FILE-3.docx'
    | 'Wikimedia Commons'
    | 'YouTube Embed'
    | 'Vector Redrawn';
  slidesUsed: number[];
  title: string;
  url: string;
  author: string;
  license: string;
  status: 'Bundled locally in public/images/' | 'Verified playable YouTube oEmbed';
  role: string;
}
