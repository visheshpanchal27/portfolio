const https = require('https');

const urls = [
  'https://vishesh.work.gd/',
  'https://vishesh.work.gd/about',
  'https://vishesh.work.gd/skills',
  'https://vishesh.work.gd/projects',
  'https://vishesh.work.gd/services',
  'https://vishesh.work.gd/contact'
];

// Submit to IndexNow (Bing/Yandex)
function submitToIndexNow() {
  const data = JSON.stringify({
    host: 'vishesh.work.gd',
    key: '8a2e5b5f5c5d5e5f5a5b5c5d5e5f5a5b',
    keyLocation: 'https://vishesh.work.gd/indexnow-key.txt',
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
    if (res.statusCode === 200) {
      console.log('✅ URLs submitted to IndexNow successfully');
    }
  });

  req.on('error', (e) => {
    console.error('❌ IndexNow Error:', e.message);
  });

  req.write(data);
  req.end();
}

console.log('🚀 Submitting URLs for immediate indexing...');
submitToIndexNow();

console.log('\n📋 Manual Actions Required:');
console.log('1. Go to Google Search Console');
console.log('2. Use URL Inspection tool for: https://vishesh.work.gd/');
console.log('3. Click "Request Indexing"');
console.log('4. Resubmit sitemap in GSC');
console.log('5. Check back in 24-48 hours');