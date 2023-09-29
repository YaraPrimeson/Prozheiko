import React from "react";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/404"),
    robots: {
      index: false,
      follow: true,
      nocache: false,
    },
    title: "Помилка, сторінку не знайдено",
    description:
      "Помилка 404 – сторінку не знайдено.\n" +
      "\n" +
      "Щоб записатися до лікаря чи дізнатися більше про послуги, перейдіть на головну сторінку.\n",
    keywords: "помилка, сторінку не знайдено, 404",
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
