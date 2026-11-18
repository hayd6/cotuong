from pathlib import Path
p=Path('src/data/assetManifest.ts');s=p.read_text(encoding='utf-8')
for name,slides in [('wm-sunlight',[1,17,40,42]),('wm-thinking',[2,24,30]),('wm-students',[11,12,29,31,37]),('ui-pikafish',[7,25,26])]:
 start=s.index("id: '"+name+"'");pos=s.index('slidesUsed: [',start);end=s.index(']',pos)
 s=s[:pos]+'slidesUsed: '+str(slides)+s[end+1:]
p.write_text(s,encoding='utf-8')
