/** @type {import('next').NextConfig} */
// TODO: Remove it (?)
//const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  /* rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  }, */
}

module.exports = nextConfig
//module.exports = withImages(nextConfig)
