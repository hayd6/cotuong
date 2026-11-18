from pathlib import Path
p=Path('.slide-review/interaction.mjs');s=p.read_text(encoding='utf-8').replace("page.locator('.slide-canvas img').evaluateAll(imgs=>imgs.slice(0,3)","page.locator('.slide-canvas img[alt^=\"Giao diện\"]').evaluateAll(imgs=>imgs")
s=s.replace("assert(await page.locator('.reduced-motion').count()>0", "await page.locator('.reduced-motion').waitFor();\nassert(await page.locator('.reduced-motion').count()>0")
s=s.replace("assert(await page.locator('.slide-canvas').count()>0,'Presenter previews render');", "await page.locator('.slide-canvas').first().waitFor();\nassert(await page.locator('.slide-canvas').count()>0,'Presenter previews render');")
p.write_text(s,encoding='utf-8')
