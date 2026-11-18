from pathlib import Path
p=Path('.slide-review/validate.mjs');s=p.read_text(encoding='utf-8');s=s.replace('const issues=[];', 'const issues=[];')
s=s.replace('let parent=node.parentElement;', '''if(id > 1 && id < 42 && (r.bottom-box.top)/scale > 835) issues.push({text:node.textContent.trim().slice(0,65),safeBottom:Math.round((r.bottom-box.top)/scale)});
   let parent=node.parentElement;''')
s=s.replace('for(let id=1;id<=42;id++) {','for(const id of [12,20,21,25,27,28,41]) {')
p=Path('.slide-review/validate-safe.mjs');p.write_text(s,encoding='utf-8')
