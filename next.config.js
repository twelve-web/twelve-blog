const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static.12interview.uno',
      },
      {
        protocol: 'http',
        hostname: 'static.markweb.top',
      },
    ],
    domains: ['static.12interview.uno', 'static.markweb.top'],
  },
};

module.exports = withContentlayer(nextConfig);
