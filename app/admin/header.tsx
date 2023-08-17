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
        {/*<li className={style.list}>*/}
        {/*  <Link*/}
        {/*    className={style.link}*/}
        {/*    href={pathname === "/admin" ? "admin/upload" : "/admin/upload"}*/}
        {/*  >*/}
        {/*    upload*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/slider" : "/admin/slider"}
          >
            slider
          </Link>
        </li>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/tags" : "/admin/tags"}
          >
            Tags
          </Link>
        </li>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/blog" : "/admin/blog"}
          >
            Blog
          </Link>
        </li>
        <li className={style.list}>
          <Link
            className={style.link}
            href={pathname === "/admin" ? "admin/services" : "/admin/services"}
          >
            Services
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
