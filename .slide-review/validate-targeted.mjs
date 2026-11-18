import { chromium } from 'file:///D:/HuyD/MealAI/node_modules/playwright-core/index.mjs';
import { writeFile } from 'node:fs/promises';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1366,height:768}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://127.0.0.1:5173/');
await page.evaluate(()=>document.fonts.ready);
const reports=[];
for(const id of [12,20,21,25,27,28,41]) {
 await page.evaluate(id=>location.hash=`/slide-${id}`,id);
 await page.waitForTimeout(500);
 const result=await page.evaluate(id=>{
  const root=document.querySelector('.slide-canvas');
  const box=root.getBoundingClientRect();const scale=box.width/1600;
  const issues=[];const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
   const node=walker.currentNode;if(!node.textContent.trim()||node.parentElement.closest('svg'))continue;
   const range=document.createRange();range.selectNodeContents(node);
   const r=range.getBoundingClientRect();if(!r.width||!r.height)continue;
   let parent=node.parentElement;
   while(parent&&root.contains(parent)){
    const style=getComputedStyle(parent);
    if(['hidden','clip','auto','scroll'].includes(style.overflowY)){
     const b=parent.getBoundingClientRect();
     if(r.bottom>b.bottom+2||r.top<b.top-2||r.left<b.left-2||r.right>b.right+2){issues.push({text:node.textContent.trim().slice(0,65),parent:parent.className,rect:[Math.round((r.top-box.top)/scale),Math.round((r.bottom-box.top)/scale)],bounds:[Math.round((b.top-box.top)/scale),Math.round((b.bottom-box.top)/scale)]});break;}
    }
    parent=parent.parentElement;
   }
  }
  return {id,issues,brokenImages:[...root.querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)};
 },id);
 reports.push(result);
 if([1,2,9,13,16,19,24,25,27,28,33,36,39,40,41,42].includes(id))await page.screenshot({path:`.slide-review/final-${id}.png`,animations:'disabled'});
}
await writeFile('.slide-review/layout-report.json',JSON.stringify({errors,reports},null,2));
console.log(JSON.stringify({errors,issues:reports.filter(x=>x.issues.length||x.brokenImages.length)},null,2));
await browser.close();

