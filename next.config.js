/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  output: 'export', // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/TrekforTeensDemo' : '', // Add your repo name here
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TrekforTeensDemo/' : '', // Add your repo name here
}

module.exports = nextConfig 