import React from "react";
import style from "@/app/styles/global.module.scss";
import Link from "next/link";

const Page = () => {
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
