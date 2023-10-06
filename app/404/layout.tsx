import React from "react";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/404"),
    robots: {
      index: false,
      follow: true,
      nocache: false,
    },
    title: "404 Сторінки не існує | Prozheiko Dental Studio 🦷",
    description:
      "Помилка 404. Такої сторінки не існує. Перейдіть на Головну сторінку сайту, або зв'яжіться з нами за телефоном ☎ (044) 38-38-532",
    keywords: "Помилка, 404, помилка 404, сторінки не існує",
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
