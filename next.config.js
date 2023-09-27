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
        source: "/o-klinike.html",
        destination: "/clinic",
        permanent: true,
      },
      {
        source: "/otzyvy-1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/otzyvy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/otzyvy.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/component/content",
        destination: "/",
        permanent: true,
      },
      {
        source: "/component/content.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kontakty",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/kontakty.html",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ru/uslugi-i-tseny",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ru/uslugi-i-tseny.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/breket-sistemy",
        destination: "/services/installation-of-braces",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/breket-sistemy",
        destination: "/services/installation-of-braces",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/restavratsiya-zubov",
        destination: "/services/artistic-restoration-of-teeth",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/restavratsiya-zubov",
        destination: "/services/artistic-restoration-of-teeth",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/implantatsiya-zubov",
        destination: "/services/dental-implants-straumann-osstem",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/implantatsiya-zubov",
        destination: "/services/dental-implants-straumann-osstem",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/konsultaciya-stomatologa",
        destination: "/services/consultation-and-diagnostics",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/konsultaciya-stomatologa",
        destination: "/services/consultation-and-diagnostics",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/protezirovanie-zubov",
        destination: "/services/dental-implants-straumann-osstem",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/protezirovanie-zubov",
        destination: "/services/dental-implants-straumann-osstem",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/:id",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uslugi-i-tseny/:id.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/:id",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/uk/uslugi-i-tseny/:id.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ru/uslugi-i-tseny/:id",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ru/uslugi-i-tseny/:id.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/akcii",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/akcii.html",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
