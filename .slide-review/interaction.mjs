import { chromium } from 'file:///D:/HuyD/MealAI/node_modules/playwright-core/index.mjs';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1366,height:768}});
await page.goto('http://127.0.0.1:5173/');
await page.locator('.slide-canvas').waitFor(); await page.waitForTimeout(100);
await page.keyboard.press('ArrowRight'); await page.waitForFunction(()=>location.hash==='#/slide-2');
await page.keyboard.press('End'); await page.waitForFunction(()=>location.hash==='#/slide-42');
await page.keyboard.press('Home'); await page.waitForFunction(()=>location.hash==='#/slide-1');
await page.keyboard.press('o'); await page.waitForTimeout(150);
assert(await page.getByRole('dialog').count()>0,'Overview should open');
await page.keyboard.press('Escape'); await page.waitForTimeout(200);
assert.equal(await page.getByRole('dialog').count(),0,'Overview should close');
for(let id=1;id<=42;id++) {
 await page.evaluate(id=>location.hash=`/slide-${id}`,id);
 await page.waitForTimeout(25);
 assert.equal(await page.locator('.slide-canvas').count(),1,'Only one slide should mount during fast navigation');
}
await page.waitForTimeout(250);
assert.equal(await page.locator('.slide-canvas').getAttribute('data-slide-id'),'42');
await page.goto('http://127.0.0.1:5173/#/slide-25');await page.waitForTimeout(300);
const frames=await page.locator('.slide-canvas img[alt^="Giao diện"]').evaluateAll(imgs=>imgs.map(img=>({top:img.getBoundingClientRect().top,bottom:img.getBoundingClientRect().bottom})));
assert(Math.max(...frames.map(f=>f.top))-Math.min(...frames.map(f=>f.top))<1,'Screenshot top edges align');
assert(Math.max(...frames.map(f=>f.bottom))-Math.min(...frames.map(f=>f.bottom))<1,'Screenshot bottom edges align');
await page.goto('http://127.0.0.1:5173/#/slide-13');await page.waitForTimeout(250);
await page.getByTitle('Phóng to ảnh chụp màn hình').first().click();await page.waitForTimeout(150);
assert(await page.getByRole('dialog').count()>0,'Screenshot zoom should open');
await page.keyboard.press('Escape');await page.waitForTimeout(200);
await page.emulateMedia({reducedMotion:'reduce'});
await page.locator('.reduced-motion').waitFor();
assert(await page.locator('.reduced-motion').count()>0,'System reduced motion should apply');
await page.goto('http://127.0.0.1:5173/?mode=presenter#/slide-28');await page.waitForTimeout(250);
await page.locator('.slide-canvas').first().waitFor();
assert(await page.locator('.slide-canvas').count()>0,'Presenter previews render');
console.log('PASS: keyboard, overview, rapid navigation (42 slides, one canvas), aligned images, zoom, system reduced motion, presenter view.');
await browser.close();

