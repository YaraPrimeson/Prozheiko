import React from "react";
import style from "@/app/styles/global.module.scss";
import Link from "next/link";

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

const Page = () => {
  console.log("page 404");
  return (
    <div className={style.notfound__container}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h1>404</h1>
          <h2>{`СТОРІНКУ НЕ ЗНАЙДЕНО`}</h2>
        </div>
        <Link className={style.notfound__link} href={"/"}>
          <h2 className={style.seo__subtitle404}>
            Перейдіть на Головну сторінку
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Page;
