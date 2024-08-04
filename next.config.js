/** @type {import('next').NextConfig} */
// TODO: Remove it (?)
//const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
}

//module.exports = withImages(nextConfig)
module.exports = nextConfig
