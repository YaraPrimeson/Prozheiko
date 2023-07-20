/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // serverActions: true,
    appDir: true,
  },
  images: {
    domains: ["localhost"], // Додайте ваш домен
  },
};

module.exports = nextConfig;
