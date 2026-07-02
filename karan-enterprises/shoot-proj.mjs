import puppeteer from 'puppeteer-core'
import fs from 'fs'

const EDGE = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].find((p) => fs.existsSync(p))

const PORT = process.env.PORT || '4173'
const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars'],
})

async function shoot(theme, tag, width, height) {
  const page = await browser.newPage()
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.evaluateOnNewDocument((t) => {
    try { localStorage.setItem('ke_theme', t) } catch (e) {}
  }, theme)
  await page.goto(`http://localhost:${PORT}/projects.html?shot`, { waitUntil: 'networkidle0' })
  // scroll through to trigger lazy-loaded imagery, then return to top
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)) }
    window.scrollTo(0, 0)
  })
  await new Promise((r) => setTimeout(r, 1400))
  await page.screenshot({ path: `proj-${tag}-full.png`, fullPage: true })
  await page.close()
  console.log('shot', tag)
}

await shoot('dark', 'dark-d', 1440, 900)
await shoot('light', 'light-d', 1440, 900)
await shoot('dark', 'dark-m', 390, 844)
await browser.close()
console.log('done')
