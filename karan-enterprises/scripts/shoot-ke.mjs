import puppeteer from 'puppeteer-core'
import fs from 'fs'

const EDGE = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].find((p) => fs.existsSync(p))

const PORT = process.env.PORT || '5176'
const sections = process.argv.slice(2)
const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars'],
})

const THEME = process.env.THEME || 'dark'

async function shoot(tag, width, height, full) {
  const page = await browser.newPage()
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.evaluateOnNewDocument((t) => {
    try { localStorage.setItem('ke_theme', t) } catch (e) {}
  }, THEME)
  await page.goto(`http://localhost:${PORT}/?shot`, { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1400))
  await page.screenshot({ path: `new-${tag}-full.png`, fullPage: !!full })
  for (const id of sections) {
    const el = await page.$('#' + id)
    if (!el) { console.log('missing', id); continue }
    await el.scrollIntoView()
    await new Promise((r) => setTimeout(r, 400))
    await el.screenshot({ path: `new-${tag}-${id}.png` })
  }
  await page.close()
}

await shoot('d', 1440, 900, true)   // desktop full
await shoot('m', 390, 844, true)    // mobile full
await browser.close()
console.log('done')
