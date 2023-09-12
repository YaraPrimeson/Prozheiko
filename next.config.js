/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/o-klinike",
        destination: "/clinic",
        permanent: true,
      },
      {
        source: "/otzyvy-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kontakty",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/:id",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/akcii",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
