import puppeteer from 'puppeteer-core'
import fs from 'fs'
const EDGE = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p))
const browser = await puppeteer.launch({ executablePath: EDGE, headless:'new', args:['--no-sandbox','--hide-scrollbars'] })
const page = await browser.newPage()
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 })
await page.goto('http://localhost:5173/?shot', { waitUntil:'networkidle0' })
await new Promise(r=>setTimeout(r,1000))
await page.screenshot({ path:'cap-m-hero.png' })
for (const id of ['services','railway','quote']) {
  const el = await page.$('#'+id); if(!el) continue
  await el.scrollIntoView(); await new Promise(r=>setTimeout(r,400))
  await page.screenshot({ path:`cap-m-${id}.png` })
}
await browser.close(); console.log('done')
