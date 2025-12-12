const https = require('https');
const fs = require('fs');
const path = require('path');

// Read the IndexNow key
const keyPath = path.join(__dirname, '..', 'public', 'indexnow-key.txt');
let indexNowKey = '';

try {
  indexNowKey = fs.readFileSync(keyPath, 'utf8').trim();
} catch (error) {
  console.error('IndexNow key not found. Please create indexnow-key.txt');
  process.exit(1);
}

const urls = [
  'https://vishesh.work.gd/',
  'https://vishesh.work.gd/about',
  'https://vishesh.work.gd/skills', 
  'https://vishesh.work.gd/projects',
  'https://vishesh.work.gd/services',
  'https://vishesh.work.gd/contact'
];

async function submitToIndexNow() {
  const data = JSON.stringify({
    host: 'vishesh.work.gd',
    key: indexNowKey,
    keyLocation: `https://vishesh.work.gd/indexnow-key.txt`,
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

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log(`IndexNow Status: ${res.statusCode}`);
      
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ URLs successfully submitted to IndexNow');
          resolve(responseData);
        } else {
          console.log('❌ IndexNow submission failed:', responseData);
          reject(new Error(`HTTP ${res.statusCode}: ${responseData}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error('IndexNow request error:', error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

if (require.main === module) {
  submitToIndexNow().catch(console.error);
}

module.exports = submitToIndexNow;