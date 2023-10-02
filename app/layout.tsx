import "./styles/globals.scss";
import React from "react";
import TheHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import localFont from "next/font/local";
import AllowCookies from "@/app/components/allow-cookies/allow-cookies";
import Script from "next/script";

const CeraPro = localFont({
  src: [
    {
      path: "./fonts/CeraPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CeraPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CeraPro-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
});

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua"),
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    title: "Стоматологія в Києві | Prozheiko Dental Studio 🦷",
    description:
      "Стоматологія Prozheiko ➤ Стоматологічні послуги європейського рівня ✓ Сучасне обладнання ✓ Доступні ціни ✓ Досвідчені лікарі ➤ Детальніше за ☎ (044) 38-38-532",
    keywords:
      "стоматологія київ, стоматологічна клініка київ, стоматології києва",
    alternates: {
      canonical: "https://prozheiko.kiev.ua",
    },
    openGraph: {
      images: `https://res.cloudinary.com/djdymweyx/image/upload/v1693198380/Slider_aemhca.webp`,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={CeraPro.className}>
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KMKTR2G');`,
          }}
        ></Script>

        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta property="og:site_name" content="prozheiko.kiev.ua" />
        <meta name="author" content="Prozheiko Dental Studio" />

        {/*<!-- Google Tag Manager -->*/}

        {/*<!-- End Google Tag Manager -->*/}
        {/*<Script id="google-tag-manager" strategy="afterInteractive">*/}
        {/*  {`*/}
        {/*(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
        {/*    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
        {/*    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
        {/*    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
        {/*    })(window,document,'script','dataLayer','GTM-5KMKTR2G');*/}
        {/*`}*/}
        {/*</Script>*/}
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KMKTR2G"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <TheHeader />
        <main style={{ flex: " 1 1 auto" }}>{children}</main>
        <Footer />
        <AllowCookies />
      </body>
    </html>
  );
}
