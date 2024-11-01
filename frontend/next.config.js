/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_STRAPI_DOMAIN ||
        'thankful-flowers-70ac5271d4.media.strapiapp.com',
      'media.strapiapp.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: '*.media.strapiapp.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'thankful-flowers-70ac5271d4.media.strapiapp.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
