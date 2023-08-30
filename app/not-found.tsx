import React from "react";
import style from "@/app/styles/global.module.scss";
import Redirect from "@/app/components/Redirect404/redirect";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Помилка 404",
    description: "такої сторінки не існує",
    metadataBase: new URL("https://prozheiko.kiev.ua/404"),
    alternates: {
      canonical: "https://prozheiko.kiev.ua/404",
    },
  };
}

const NotFound = () => {
  return (
    <div className={style.notfound__container}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h1>Oops!</h1>
          <h2>{`404 - СТОРІНКУ НЕ ЗНАЙДЕНО`}</h2>
          <Link className={style.notfound__link} href={"/"}>
            <p className={style.hover__link}>Перейдіть на Головну сторінку</p>
          </Link>
        </div>
      </div>
      <Redirect />
    </div>
  );
};

export default NotFound;
