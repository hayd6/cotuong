from pathlib import Path
p=Path('src/styles/index.css');s=p.read_text(encoding='utf-8');start=s.index('/* ==========================================================================');end=s.index('/* Subtle daylight',start)
s=s[:start]+'''/* Opaque surfaces avoid repeated backdrop compositing during navigation. */
.liquid-glass, .liquid-glass-warm, .liquid-glass-dock {
  background: #FFFEFB;
  border: 1px solid #DED9CF;
  box-shadow: 0 2px 8px rgba(36, 30, 21, 0.035);
}
.liquid-glass-warm { background: #F2EDE3; }
.liquid-glass-dock { background: #FFFEFB; box-shadow: 0 4px 18px #241E1510; }

/* One common grid and type rhythm across the 1600 × 900 canvas. */
.slide-canvas > div:last-child > div {
  padding: 32px 56px 72px 96px;
}
.slide-header {
  height: 142px;
  margin-bottom: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid #D8D3C9;
  align-items: flex-start;
}
.slide-header h1 { text-wrap: balance; font-weight: 700; line-height: 1.2; letter-spacing: -0.035em; }
.slide-header p { font-weight: 500; letter-spacing: 0; color: #6E655A; }
.slide-canvas h2 { font-weight: 650; }
.slide-canvas .leading-relaxed { line-height: 1.5; }
.slide-canvas .font-extrabold { font-weight: 700; }
.slide-canvas .font-mono-tech { font-family: var(--font-sans); letter-spacing: 0.02em; }
.slide-canvas .content-card { border-radius: 12px; box-shadow: none; }
.slide-canvas .photo-plate, .slide-canvas .device-plate { border-radius: 14px; box-shadow: none; }
.slide-canvas .photo-caption { border-radius: 8px; background: #FFFEFBF5; }
.slide-canvas [class*="backdrop-blur"] { backdrop-filter: none; }
.slide-canvas [class*="rounded-[2"], .slide-canvas [class*="rounded-[3"] { border-radius: 14px; }
.slide-canvas [class*="shadow"] { box-shadow: none; }
.slide-canvas [class*="drop-shadow"] { filter: none; }
.slide-canvas .content-card p { text-wrap: pretty; }

'''+s[end:]
# Positioning helpers must not override absolute-positioned illustrations.
s=s.replace('  position: relative;\n}', '  isolation: isolate;\n}')
p.write_text(s,encoding='utf-8')
for name in ['Chapter1Slides.tsx','Chapter2Slides.tsx','Chapter3Slides.tsx','Chapter4Slides.tsx']:
 p=Path('src/slides')/name;s=p.read_text(encoding='utf-8')
 s=s.replace('h-[88%] self-start pt-1','h-full min-h-0').replace('h-[88%] self-end pb-1','h-full min-h-0').replace('col-span-6 h-[78%]','col-span-6 h-full min-h-0')
 # Inner animation does not compete with the slide entrance.
 s=s.replace('<MctsCycleVisual />','<MctsCycleVisual reducedMotion={reducedMotion || ambientPaused} />') if False else s
 p.write_text(s,encoding='utf-8')
p=Path('src/components/SlideChrome.tsx');s=p.read_text(encoding='utf-8')
s=s.replace("? 'text-[38px]'", "? 'text-[38px]'").replace(": 'text-[43px]'", ": 'text-[40px]'")
s=s.replace('relative z-20 mb-4 flex shrink-0 items-end justify-between gap-6 border-b border-white/80 pb-3','slide-header relative z-20 flex shrink-0 justify-between gap-6')
s=s.replace('inline-flex items-center rounded-full bg-[#B92B27] px-3 py-0.5 font-mono-tech text-xs font-extrabold uppercase tracking-wider text-white shadow-xs','inline-flex items-center py-0.5 font-mono-tech text-[13px] font-bold uppercase tracking-wider text-[#A3332D]')
s=s.replace('liquid-glass rounded-full px-3 py-0.5 font-mono-tech text-xs font-bold text-[#685F54]','ml-auto py-0.5 font-mono-tech text-[13px] font-medium tabular-nums text-[#685F54]')
s=s.replace('group relative h-full w-full overflow-hidden rounded-[28px] border border-white/90 shadow-[0_28px_68px_-12px_rgba(34,24,14,0.18)] ring-1 ring-[#D8CCB7]/50','photo-plate group relative h-full w-full overflow-hidden border border-[#DED9CF]')
s=s.replace('loading="lazy"','loading="eager"\n          decoding="async"')
s=s.replace('liquid-glass rounded-2xl px-4 py-2.5','photo-caption border border-[#DED9CF] px-4 py-2.5')
s=s.replace('liquid-glass group flex h-full w-full flex-col overflow-hidden rounded-[24px]','device-plate liquid-glass group flex h-full w-full flex-col overflow-hidden')
s=s.replace('relative overflow-hidden rounded-[22px] p-5 text-[#171411]', 'content-card relative overflow-hidden border-l-[3px] p-5 text-[#171411]')
s=s.replace("boxShadow: `inset 4px 0 0 ${accent}, inset 0 1.5px 1.5px rgba(255,255,255,0.96), 0 20px 50px -12px rgba(34,24,14,0.12)`,", "borderLeftColor: accent,")
p.write_text(s,encoding='utf-8')
p=Path('src/components/SlideNavigation.tsx');s=p.read_text(encoding='utf-8').replace('bg-gradient-to-r from-[#B92B27] via-[#B6832C] to-[#15805D] transition-all','bg-[#A3332D] transition-[width]').replace("'Tối giản' : 'Cinematic'", "'Tối giản' : 'Chuyển nhẹ'");p.write_text(s,encoding='utf-8')
