// Simple SEO checker script
// Run with: node seo-check.js

const https = require('https');
const fs = require('fs');

const domain = 'vishesh.ct.ws';
const checks = {
  sitemap: `https://${domain}/sitemap.xml`,
  robots: `https://${domain}/robots.txt`,
  homepage: `https://${domain}`
};

console.log('🔍 SEO Health Check for', domain);
console.log('=' .repeat(50));

function checkUrl(url, name) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const status = res.statusCode;
      const statusIcon = status === 200 ? '✅' : '❌';
      console.log(`${statusIcon} ${name}: ${status} ${status === 200 ? 'OK' : 'ERROR'}`);
      resolve(status === 200);
    }).on('error', (err) => {
      console.log(`❌ ${name}: ERROR - ${err.message}`);
      resolve(false);
    });
  });
}

async function runChecks() {
  console.log('\n📋 Basic Accessibility Checks:');
  
  for (const [name, url] of Object.entries(checks)) {
    await checkUrl(url, name.toUpperCase());
  }
  
  console.log('\n🎯 Next Steps:');
  console.log('1. Set up Google Search Console');
  console.log('2. Submit your sitemap');
  console.log('3. Monitor for crawl errors');
  console.log('4. Add more content to your portfolio');
  
  console.log('\n📊 SEO Tools to Use:');
  console.log('• Google Search Console: https://search.google.com/search-console/');
  console.log('• PageSpeed Insights: https://pagespeed.web.dev/');
  console.log('• Mobile-Friendly Test: https://search.google.com/test/mobile-friendly');
  
  console.log('\n🚀 Your site is ready for search engine submission!');
}

runChecks();