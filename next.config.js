/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jobs.github.com',
        port: '',
        pathname: '/rails/active_storage/blobs/**',
      },
    ],
  },
}

module.exports = nextConfig
