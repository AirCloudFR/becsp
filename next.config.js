/** @type {import('next').NextConfig} */
const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
      {
        source: '/auth/:path*',
        destination: `${backendUrl}/auth/:path*`,
      },
      {
        source: '/dashboard',
        destination: '/',
      },
      {
        source: '/incidents',
        destination: '/tickets',
      },
      {
        source: '/profile',
        destination: '/profile',
      },
    ];
  },
};

module.exports = nextConfig; 