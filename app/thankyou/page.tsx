import React from "react";
import style from "./thankyou.module.scss";
import gStyle from "@/app/styles/global.module.scss";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/blog"),
    robots: {
      index: false,
      nocache: false,
    },
    title: "Дякуємо за звернення в стоматологію Прожейко",
    description:
      "Найближчим часом менеджер стоматологічної клініки Прожейко зв'яжеться з Вами для уточнення деталей. Дякуємо Вам за довіру.",
    keywords: "сторінка подяки, дякуємо за звернення, ми з вами зв'яжемось",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/thankyou",
    },
    openGraph: {
      images:
        "https://res.cloudinary.com/djdymweyx/image/upload/v1693198657/Slider_zgsfjg.png",
    },
  };
}

const Page = () => {
  return (
    <div className={style.container}>
      <h1 className={gStyle.seo__title}>Дякуємо за звернення!</h1>
      <h2 className={gStyle.seo__subtitle}>
        Наш менеджер скоро з Вами зв&apos;яжеться :)
      </h2>
      <h2 className={gStyle.seo__subtitle}>
        З повагою, стоматологія Prozheiko Dental Studio
      </h2>
    </div>
  );
};

export default Page;
