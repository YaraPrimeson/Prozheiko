import "./styles/globals.scss";
import React from "react";
import TheHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import localFont from "next/font/local";
import AllowCookies from "@/app/components/allow-cookies/allow-cookies";

// export const metadata = {
//   title: "Стоматологія в Києві | Prozheiko Dental Studio 🦷",
// };

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={CeraPro.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KMKTR2G');`,
          }}
        />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="rights"
          content="https://plus.google.com/110393813791348615997/"
        />
        <meta
          name="description"
          content="Стоматологія Prozheiko ➤ Стоматологічні послуги європейського рівня ✓ Сучасне обладнання ✓ Доступні ціни ✓ Досвідчені лікарі ➤ Детальніше за ☎ (044) 38-38-532"
        />
        <meta
          name="keywords"
          content="стоматологія київ, стоматологічна клініка київ, стоматології києва"
        />
        <meta name="robots" content="index,follow" />
        <title>Стоматологія в Києві | Prozheiko Dental Studio 🦷</title>
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
