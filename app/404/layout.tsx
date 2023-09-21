import React from "react";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/404"),
    robots: {
      index: false,
      follow: true,
      nocache: false,
    },
    title: "Помилка 404",
    description: "такої сторінки не існує",
    keywords: "сторінку не знайдено",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/404",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
