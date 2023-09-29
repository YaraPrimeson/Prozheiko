import React from "react";
import style from "@/app/styles/global.module.scss";
import Link from "next/link";

const Page = () => {
  return (
    <div className={style.notfound__container}>
      <div className={style.notfound}>
        {/*<h1>Помилка, сторінку не знайдено</h1>*/}
        {/*<h2>Помилка 404, перейдіть на головну сторінку</h2>*/}
        <div className={style.notfound404}>
          <h1>Oops!</h1>
          <h2>{`404 - СТОРІНКУ НЕ ЗНАЙДЕНО`}</h2>
          <Link className={style.notfound__link} href={"/"}>
            <p className={style.hover__link}>Перейдіть на Головну сторінку</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
