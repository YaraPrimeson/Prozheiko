"use client";
import React from "react";
import Link from "next/link";
import style from "./admin.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <ul className={style.wrapper}>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/slider" : "/admin/slider"}
          >
            Слайдер
          </Link>
        </li>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/tags" : "/admin/tags"}
          >
            Теги
          </Link>
        </li>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/blog" : "/admin/blog"}
          >
            Блог
          </Link>
        </li>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/services" : "/admin/services"}
          >
            Послуги
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
