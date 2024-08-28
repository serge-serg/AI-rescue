/** @type {import('next').NextConfig} */
// TODO: Remove it (?)
//const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: '/server/api/:path*',
      },
    ]
  },
}

//module.exports = withImages(nextConfig)
module.exports = nextConfig
