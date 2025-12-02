#!/bin/bash

echo "🚀 Starting SEO-optimized build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf build/

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the React app
echo "⚛️ Building React application..."
npm run build

# Run prerendering (requires local server)
echo "🔄 Starting prerendering process..."
echo "Please ensure your app is running on http://localhost:3000"
read -p "Press Enter when your development server is ready..."

# Run prerender script
node scripts/prerender.js

# Submit to IndexNow
echo "📡 Submitting to IndexNow..."
node scripts/indexnow.js

echo "✅ SEO-optimized build complete!"
echo "📁 Files ready in ./build directory"
echo "🌐 Deploy the ./build directory to your hosting provider"