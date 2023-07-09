/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["localhost"], // Додайте ваш домен
  },
};

module.exports = nextConfig;
