import "./styles/globals.scss";
import React from "react";
import TheHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "Prozheiko",
};
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
      <body>
        <TheHeader />
        <main style={{ flex: " 1 1 auto" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
