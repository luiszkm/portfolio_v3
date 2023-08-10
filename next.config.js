/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '/xesque.rocketseat.dev',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
