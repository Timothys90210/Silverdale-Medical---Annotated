import puppeteer from 'puppeteer'

const [url, output, width = '1440', height = '900'] = process.argv.slice(2)

if (!url || !output) {
  console.error('Usage: node screenshot.js <url> <output-path> [width] [height]')
  process.exit(1)
}

const browser = await puppeteer.launch({
  headless: true,
  executablePath: undefined, // uses puppeteer's bundled chrome
})
const page = await browser.newPage()
await page.setViewport({ width: parseInt(width), height: parseInt(height) })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 600))
// Scroll through the page to trigger IntersectionObserver for all sections
await page.evaluate(async () => {
  await new Promise(resolve => {
    const distance = 300
    const delay = 80
    const scroll = () => {
      window.scrollBy(0, distance)
      if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
        setTimeout(scroll, delay)
      } else {
        window.scrollTo(0, 0)
        setTimeout(resolve, 400)
      }
    }
    scroll()
  })
})
await new Promise(r => setTimeout(r, 400)) // let animations settle
await page.screenshot({ path: output, fullPage: true })
await browser.close()
console.log(`Screenshot saved: ${output}`)
