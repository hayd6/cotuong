from pathlib import Path
Path('src/components/MotionBackground.tsx').write_text('''import type { SlideTheme } from '../data/types';

const PAPER: Record<SlideTheme, string> = {
  sunlit: '#F7F3EB',
  ivory: '#FAF9F5',
  engraving: '#F3F5F4',
  parchment: '#F5F0E7',
};

/** A quiet, static paper canvas keeps the focus on the slide. */
export function MotionBackground({ theme }: { theme: SlideTheme }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundColor: PAPER[theme] }}>
      <div className="absolute inset-x-0 top-0 h-1 bg-[#A3332D]" />
    </div>
  );
}
''', encoding='utf-8')
Path('src/components/cinematic/KineticHeadline.tsx').write_text('''interface KineticHeadlineProps {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  delay?: number;
  reducedMotion?: boolean;
}

/** Keep Vietnamese words together and let the stage handle the entrance. */
export function KineticHeadline({ text, as: Tag = 'h1', className = '' }: KineticHeadlineProps) {
  return <Tag className={className}>{text}</Tag>;
}
''', encoding='utf-8')
p=Path('src/components/cinematic/CinematicStage.tsx')
s=p.read_text(encoding='utf-8').replace('AnimatePresence, motion, type Transition','motion').replace("import type { TransitionStyle }", "import type { TransitionStyle }")
start=s.index('const EASE_CINEMATIC:')
end=s.index('export function CinematicStage')
s=s[:start]+s[end:]
s=s.replace('  transitionStyle,\n  direction,\n','')
s=s.replace('useState(1)', 'useState(() => Math.min(window.innerWidth / LOGICAL_WIDTH, window.innerHeight / LOGICAL_HEIGHT))')
s=s.replace('  const anim = getSeamlessTransition(transitionStyle, direction, reducedMotion);\n','')
s=s.replace("          perspective: '1600px',\n",'')
start=s.index('        {/* Sync mode')
end=s.index('      </div>',start)
s=s[:start]+'''        {/* One mounted slide: rapid navigation cannot accumulate exiting canvases. */}
        <motion.div
          key={slideKey}
          initial={reducedMotion ? false : { opacity: 0.65 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.18, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full overflow-hidden"
        >
          {children}
        </motion.div>
'''+s[end:]
p.write_text(s,encoding='utf-8')
