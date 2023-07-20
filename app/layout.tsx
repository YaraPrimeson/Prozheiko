import "./styles/globals.scss";
import React from "react";
import TheHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "Prozheiko",
};
const myFont = localFont({
  src: "./fonts/CeraPro-Regular.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={myFont.className}>
      <body>
        <TheHeader />
        <main style={{ flex: " 1 1 auto" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
