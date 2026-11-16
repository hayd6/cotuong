import type { SlideTheme } from '../data/types';

interface MotionBackgroundProps {
  theme: SlideTheme;
}

/**
 * Rich multi-layered Apple Keynote daylight aurora & architectural filigree canvas.
 * Rich color blooms underneath allow Liquid Glass panels above to refract depth dynamically.
 */
export function MotionBackground({ theme }: MotionBackgroundProps) {
  const paletteMap: Record<
    SlideTheme,
    {
      baseBg: string;
      orb1: string;
      orb2: string;
      orb3: string;
      ringColor: string;
      kanji: string;
    }
  > = {
    sunlit: {
      baseBg: 'linear-gradient(135deg, #FFFDF8 0%, #F9EFE0 48%, #F4E7D3 100%)',
      orb1: 'radial-gradient(circle, rgba(235, 169, 64, 0.34) 0%, rgba(185, 43, 39, 0.14) 48%, transparent 74%)',
      orb2: 'radial-gradient(circle, rgba(21, 128, 93, 0.2) 0%, rgba(56, 189, 248, 0.09) 55%, transparent 76%)',
      orb3: 'radial-gradient(circle, rgba(185, 43, 39, 0.16) 0%, transparent 70%)',
      ringColor: 'rgba(182, 131, 44, 0.16)',
      kanji: '帥',
    },
    ivory: {
      baseBg: 'linear-gradient(125deg, #FCFBF7 0%, #F5EDE0 52%, #EDE4D4 100%)',
      orb1: 'radial-gradient(circle, rgba(226, 168, 72, 0.28) 0%, rgba(185, 43, 39, 0.1) 52%, transparent 75%)',
      orb2: 'radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(16, 185, 129, 0.1) 54%, transparent 76%)',
      orb3: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
      ringColor: 'rgba(182, 131, 44, 0.14)',
      kanji: '車',
    },
    engraving: {
      baseBg: 'linear-gradient(140deg, #FAFBFD 0%, #F1ECE3 48%, #EAE4D8 100%)',
      orb1: 'radial-gradient(circle, rgba(29, 78, 216, 0.2) 0%, rgba(99, 102, 241, 0.1) 52%, transparent 76%)',
      orb2: 'radial-gradient(circle, rgba(21, 128, 93, 0.18) 0%, rgba(217, 119, 6, 0.1) 54%, transparent 76%)',
      orb3: 'radial-gradient(circle, rgba(185, 43, 39, 0.13) 0%, transparent 72%)',
      ringColor: 'rgba(29, 78, 216, 0.12)',
      kanji: '炮',
    },
    parchment: {
      baseBg: 'linear-gradient(135deg, #FAF4E8 0%, #F3E8D6 50%, #EBE0CA 100%)',
      orb1: 'radial-gradient(circle, rgba(185, 43, 39, 0.22) 0%, rgba(234, 179, 8, 0.16) 52%, transparent 76%)',
      orb2: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, transparent 72%)',
      orb3: 'radial-gradient(circle, rgba(59, 130, 246, 0.13) 0%, transparent 70%)',
      ringColor: 'rgba(185, 43, 39, 0.13)',
      kanji: '馬',
    },
  };

  const p = paletteMap[theme];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ background: p.baseBg }}
    >
      {/* Subtle architectural drafting grid & silk paper texture */}
      <div className="engraving-grid parallax-bg absolute inset-0 opacity-75" />
      <div className="paper-grain absolute inset-0" />

      {/* Layered luminous ambient orbs that shine through Liquid Glass cards */}
      <div
        className="animate-orb-slow parallax-bg absolute -top-44 right-[-6%] h-[720px] w-[860px] rounded-full blur-[95px]"
        style={{ background: p.orb1 }}
      />
      <div
        className="animate-orb-reverse parallax-mid absolute -bottom-52 left-[-4%] h-[680px] w-[780px] rounded-full blur-[100px]"
        style={{ background: p.orb2 }}
      />
      <div
        className="animate-orb-slow absolute top-[28%] left-[36%] h-[480px] w-[560px] rounded-full blur-[110px]"
        style={{ background: p.orb3 }}
      />

      {/* Precision compass orbital rings (visual kinship to Apple / Xiangqi geometry) */}
      <svg
        viewBox="0 0 1600 900"
        className="parallax-bg absolute inset-0 h-full w-full opacity-80"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="1280"
          cy="190"
          r="290"
          fill="none"
          stroke={p.ringColor}
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
        <circle cx="1280" cy="190" r="370" fill="none" stroke={p.ringColor} strokeWidth="0.9" />
        <circle cx="240" cy="760" r="240" fill="none" stroke={p.ringColor} strokeWidth="1" />
        <line
          x1="80"
          y1="820"
          x2="420"
          y2="820"
          stroke={p.ringColor}
          strokeWidth="1"
        />
      </svg>

      {/* Subtle sculptural watermark calligaphy piece in deep depth */}
      <div className="parallax-bg pointer-events-none absolute -right-12 -bottom-24 select-none font-serif text-[340px] font-bold leading-none text-[#B6832C]/[0.045]">
        {p.kanji}
      </div>

      {/* Crisp interior light halo */}
      <div
        className="absolute inset-4 rounded-[28px] border border-white/65"
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)' }}
      />
    </div>
  );
}
