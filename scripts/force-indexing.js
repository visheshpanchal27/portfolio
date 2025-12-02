const https = require('https');
const fs = require('fs');

// IndexNow API for immediate indexing
const indexNowKey = 'your-indexnow-key'; // Replace with your actual key
const siteUrl = 'https://vishesh.work.gd';

const urls = [
  'https://vishesh.work.gd/',
  'https://vishesh.work.gd/about',
  'https://vishesh.work.gd/skills', 
  'https://vishesh.work.gd/projects',
  'https://vishesh.work.gd/services',
  'https://vishesh.work.gd/contact'
];

// Submit to IndexNow (Bing)
function submitToIndexNow() {
  const data = JSON.stringify({
    host: 'vishesh.work.gd',
    key: indexNowKey,
    keyLocation: `${siteUrl}/indexnow-key.txt`,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = https.request(options, (res) => {
    console.log(`IndexNow Status: ${res.statusCode}`);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (e) => {
    console.error('IndexNow Error:', e);
  });

  req.write(data);
  req.end();
}

// Generate fresh sitemap with current timestamp
function updateSitemap() {
  const now = new Date().toISOString();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://vishesh.work.gd/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://res.cloudinary.com/dhyc478ch/image/upload/v1759829478/main_logo_r5dmsz.png</image:loc>
      <image:title>Vishesh Panchal - Full Stack Developer Portfolio</image:title>
      <image:caption>Professional MERN Stack Developer specializing in React.js, Node.js, AI applications</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://vishesh.work.gd/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://vishesh.work.gd/skills</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://vishesh.work.gd/projects</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://vishesh.work.gd/services</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://vishesh.work.gd/contact</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  fs.writeFileSync('../public/sitemap.xml', sitemap);
  console.log('Sitemap updated with current timestamp');
}

// Main execution
console.log('Starting indexing process...');
updateSitemap();
submitToIndexNow();

console.log('\nNext steps:');
console.log('1. Submit sitemap manually to Google Search Console');
console.log('2. Request indexing for homepage in GSC');
console.log('3. Add internal links between pages');
console.log('4. Ensure content is substantial and unique');
console.log('5. Check Core Web Vitals performance');