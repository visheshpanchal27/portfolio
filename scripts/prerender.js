const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function prerenderPage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to your local development server
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Wait for React to render
  await page.waitForSelector('#root > *');
  
  // Get the rendered HTML
  const html = await page.content();
  
  // Save to build directory
  const buildDir = path.join(__dirname, '..', 'build');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(buildDir, 'index.html'), html);
  
  await browser.close();
  console.log('Prerendering complete!');
}

if (require.main === module) {
  prerenderPage().catch(console.error);
}

module.exports = prerenderPage;