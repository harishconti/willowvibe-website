/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Auto-detect deployment environment
// GitHub Actions sets GITHUB_ACTIONS=true
// Netlify sets NETLIFY=true
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const isNetlify = process.env.NETLIFY === 'true'

console.log('Build Environment:', {
  isGitHubPages,
  isNetlify,
  CI: process.env.CI,
})

const nextConfig = {
  output: 'export',

  // Use basePath only for GitHub Pages (subdirectory hosting)
  // Netlify and local dev use root path
  basePath: isGitHubPages ? '/willowvibe-website' : '',
  assetPrefix: isGitHubPages ? '/willowvibe-website/' : '',

  // Expose environment variables to the client
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? '/willowvibe-website' : '',
  },

  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  trailingSlash: true,

  // Optional: Environment-specific optimizations
  ...(isNetlify && {
    // Netlify-specific settings
    compress: true,
  }),

  ...(isGitHubPages && {
    // GitHub Pages-specific settings
    distDir: '.next',
  }),
}

module.exports = withBundleAnalyzer(nextConfig)
