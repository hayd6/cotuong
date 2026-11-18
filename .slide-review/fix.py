from pathlib import Path
p=Path('src/data/assetManifest.ts');s=p.read_text(encoding='utf-8')
for name in ['ui-pikafish','ui-xiangqi-one','ui-xiangqi-com']:
 start=s.index("id: '"+name+"'");pos=s.index('slidesUsed: [',start);end=s.index(']',pos)
 if '25' not in s[pos:end]:s=s[:pos]+s[pos:end].replace('slidesUsed: [','slidesUsed: [25, ')+s[end:]
p.write_text(s,encoding='utf-8')
p=Path('src/components/SlideChrome.tsx');s=p.read_text(encoding='utf-8').replace('Tất cả hình được vẽ lại vector sắc nét','Tư liệu gốc và sơ đồ bàn cờ')
# Keep complete video titles in narrow sidebars by stacking the thumbnail above the copy.
s=s.replace('liquid-glass relative flex w-full overflow-hidden rounded-[22px] p-2.5 text-left', 'video-preview liquid-glass relative flex w-full flex-col overflow-hidden rounded-[22px] p-2.5 text-left')
s=s.replace("compact ? 'h-24 w-40' : 'h-28 w-48'", "compact ? 'h-28 w-full' : 'h-36 w-full'")
s=s.replace('flex min-w-0 flex-1 flex-col justify-center pl-4 pr-2','flex min-w-0 flex-1 flex-col justify-center px-2 pt-3 pb-1')
s=s.replace('line-clamp-2 text-[17px]','text-[16px]').replace('mt-0.5 truncate text-xs font-semibold text-[#4B433B]','mt-1 text-xs font-medium leading-snug text-[#4B433B]')
# Avoid wasting sidebar width on a decorative address bar.
s=s.replace('className="truncate">{domain}', 'className="leading-snug">{domain}')
s=s.replace('px-4 py-2 backdrop-blur-md','px-3 py-2').replace('hidden rounded-full bg-[#B92B27]/12','hidden rounded-full bg-[#B92B27]/12').replace('sm:inline','2xl:inline')
p.write_text(s,encoding='utf-8')
p=Path('src/slides/Chapter2Slides.tsx');s=p.read_text(encoding='utf-8').replace('Tất cả hình được vẽ lại vector sắc nét + bấm “Ảnh gốc” để phóng to ảnh tài liệu.','Đối chiếu sơ đồ với ảnh tư liệu; bấm phóng to để xem chi tiết.');p.write_text(s,encoding='utf-8')

