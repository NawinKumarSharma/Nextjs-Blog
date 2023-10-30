/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"]
  }
}

module.exports = nextConfig
