from pathlib import Path
s=Path('.slide-review/validate-safe.mjs').read_text(encoding='utf-8').replace('for(const id of [12,20,21,25,27,28,41]) {','for(let id=1;id<=42;id++) {').replace('waitForTimeout(500)','waitForTimeout(150)')
start=s.index(' if([1,2,9,13,16,19,24,25,27,28,33,36,39,40,41,42]');end=s.index('\n}',start);s=s[:start]+s[end:]
s=s.replace("viewport:{width:1366,height:768}","viewport:{width:1920,height:1080}").replace('layout-report.json','matrix-1920.json')
Path('.slide-review/matrix-1920.mjs').write_text(s,encoding='utf-8')
Path('.slide-review/matrix-1366.mjs').write_text(s.replace('width:1920,height:1080','width:1366,height:768').replace('matrix-1920','matrix-1366'),encoding='utf-8')
