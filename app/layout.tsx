import "./styles/globals.scss";
import React from "react";
import TheHeader from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
  title: "Prozheiko",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <TheHeader />
        <main style={{ flex: " 1 1 auto" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
