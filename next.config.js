/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: 'export',
  basePath: '/willowvibe-website',
  assetPrefix: '/willowvibe-website/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = withBundleAnalyzer(nextConfig)
