from pathlib import Path
p=Path('src/slides/Chapter2Slides.tsx');s=p.read_text(encoding='utf-8')
s=s.replace('''            <div className="liquid-glass h-full rounded-[26px] p-4">
              <XiangqiBoardSVG presetId="hinh-2-3" onZoom={onZoom} />
            </div>''','''            <DeviceMockupPlate
              src="images/hinh-2-3-xiangqicom-xe1-binh2.png"
              domain="xiangqi.com"
              caption="Hình 2.3 · AI đề xuất Xe 1 bình 2"
              source="Ảnh thực nghiệm trong tài liệu báo cáo"
              onZoom={onZoom}
              className="h-full"
            />''')
for preset,filename,caption in [
 ('hinh-2-5','hinh-2-5-xiangqicom-phao2-binh5.png','Hình 2.5 · Pháo 2 bình 5'),
 ('hinh-2-7','hinh-2-7-xiangqicom-xe4-thoai1.png','Hình 2.7 · Xe 4 thoái 1'),
]:
 old=f'''          <div className="liquid-glass h-full min-h-0 rounded-[24px] p-4">
            <XiangqiBoardSVG presetId="{preset}" onZoom={{onZoom}} />
          </div>'''
 new=f'''          <DeviceMockupPlate
            src="images/{filename}"
            domain="xiangqi.com"
            caption="{caption}"
            source="Ảnh thực nghiệm trong tài liệu báo cáo"
            onZoom={{onZoom}}
            className="h-full min-h-0"
          />'''
 assert old in s,preset
 s=s.replace(old,new)
p.write_text(s,encoding='utf-8')
# Stop decorative loops while preserving explanatory diagrams and buttons.
p=Path('src/components/FlowingPaths.tsx');s=p.read_text(encoding='utf-8').replace('repeat: Infinity','repeat: 0').replace('animate-pulse ','').replace('duration: 1.5','duration: 0.25').replace('idx * 0.12, duration: 0.4','idx * 0.025, duration: 0.2');p.write_text(s,encoding='utf-8')
# Numbers should show their actual values from the first frame.
p=Path('src/components/AnimatedCounter.tsx');s=p.read_text(encoding='utf-8');start=s.index('export function AnimatedCounter(')
s=s[:start]+'''export function AnimatedCounter({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  decimalComma = false,
  className = '',
}: AnimatedCounterProps) {
  const formatted = target.toFixed(decimals);
  const display = decimalComma ? formatted.replace('.', ',') : formatted;
  return <span className={className}>{prefix}{display}{suffix}</span>;
}
''';s=s.replace("import { useEffect, useState } from 'react';\n\n",'');p.write_text(s,encoding='utf-8')
# Reference text must also be readable on a projector.
p=Path('src/slides/Chapter4Slides.tsx');s=p.read_text(encoding='utf-8').replace('text-[13.5px]','text-[16px]').replace('text-[11.5px]','text-[13px]');p.write_text(s,encoding='utf-8')
p=Path('src/components/TechnicalDiagrams.tsx');s=p.read_text(encoding='utf-8').replace('text-sm','text-[16px]').replace('text-base','text-[18px]');p.write_text(s,encoding='utf-8')
