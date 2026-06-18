import puppeteer from 'puppeteer-core'
import fs from 'fs'

const EDGE = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].find((p) => fs.existsSync(p))

const sections = process.argv.slice(2)
const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto('http://localhost:5173/?shot', { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 1200))

// full page
await page.screenshot({ path: 'cap-full.png', fullPage: true })

// individual sections by id
for (const id of sections) {
  const el = await page.$('#' + id)
  if (!el) { console.log('missing', id); continue }
  await el.scrollIntoView()
  await new Promise((r) => setTimeout(r, 500))
  await el.screenshot({ path: `cap-${id}.png` })
}
await browser.close()
console.log('done')
