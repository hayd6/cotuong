import { chromium } from 'file:///D:/HuyD/MealAI/node_modules/playwright-core/index.mjs';
import { writeFile, readFile } from 'node:fs/promises';
const browser = await chromium.launch({headless:true});
const page = await browser.newPage({viewport:{width:1600,height:900},deviceScaleFactor:1});
await page.goto('http://127.0.0.1:5173/');
await page.evaluate(()=>document.fonts.ready);
const report=[];
for(let id=1;id<=42;id++) {
 await page.evaluate(id=>location.hash=`/slide-${id}`,id);
 await page.waitForTimeout(900);
 report.push(await page.evaluate(id=>({id,overflow:[...document.querySelectorAll('h1,h2,p,li,td,th')].filter(el=>{const r=el.getBoundingClientRect();return r.width&&r.height&&(r.bottom>850||r.top<0||r.right>1600)}).map(el=>({text:el.textContent.slice(0,70),y:Math.round(el.getBoundingClientRect().bottom)}))}),id));
 await page.screenshot({path:`.slide-review/before-${id}.png`});
}
await writeFile('.slide-review/before.json',JSON.stringify(report,null,2));
for(let batch=0;batch<3;batch++) {
 const images=await Promise.all(Array.from({length:14},async(_,i)=>{let id=batch*14+i+1;return `<div><b>${id}</b><img src="data:image/png;base64,${(await readFile(`.slide-review/before-${id}.png`)).toString('base64')}"></div>`}));
 await page.setViewportSize({width:1600,height:910});
 await page.setContent(`<style>body{margin:0;background:#ddd;display:grid;grid-template-columns:repeat(4,1fr);gap:6px}div{position:relative}b{position:absolute;background:#222;color:white;padding:4px}img{width:100%;display:block}</style>${images.join('')}`);
 await page.screenshot({path:`.slide-review/before-contact-${batch}.png`,fullPage:true});
}
console.log(JSON.stringify(report.filter(x=>x.overflow.length)));
await browser.close();

