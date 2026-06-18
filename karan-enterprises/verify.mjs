import puppeteer from 'puppeteer-core'
import fs from 'fs'
const EDGE = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p))
const browser = await puppeteer.launch({ executablePath: EDGE, headless:'new', args:['--no-sandbox','--hide-scrollbars'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:5173/?shot', { waitUntil:'networkidle0' })

// capture window.open + mailto navigations
await page.evaluateOnNewDocument(() => {
  window.__opened = []
  const orig = window.open
  window.open = (u) => { window.__opened.push(u); return null }
})
await page.goto('http://localhost:5173/?shot', { waitUntil:'networkidle0' })
await new Promise(r=>setTimeout(r,800))

await page.type('#q-name', 'A. Kumar')
await page.type('#q-org', 'East Central Railway')
await page.type('#q-loc', 'Ranchi, Jharkhand')
await page.type('#q-msg', 'Need RDSO formation — 12 km, start Q3.')

// click WhatsApp button
await page.evaluate(() => {
  const b = [...document.querySelectorAll('.qform .actions .btn')].find(x=>/WhatsApp/.test(x.textContent))
  b.click()
})
await new Promise(r=>setTimeout(r,300))
const opened = await page.evaluate(() => window.__opened)
console.log('WHATSAPP URL:\n', decodeURIComponent(opened[0] || 'NONE'))

// testimonials screenshot
const el = await page.$('#testimonials')
await el.scrollIntoView(); await new Promise(r=>setTimeout(r,400))
await el.screenshot({ path:'cap-testimonials.png' })
await browser.close()
console.log('done')
