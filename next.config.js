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
    ],
    domains: ['static.12interview.uno'],
  },
};

module.exports = withContentlayer(nextConfig);
