/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // serverActions: true,
    appDir: true,
  },
  images: {
    domains: ["localhost"], // Додайте ваш домен
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/fonts",
          publicPath: "/_next/static/fonts",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
