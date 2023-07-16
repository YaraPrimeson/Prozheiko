"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./header.module.scss";
import logo from "../../assets/images/logo.webp";
import ModalContainer from "@/app/components/modal/ModalContainer";
import FormVisit from "@/app/components/form-visit/FormVisit";
import HeaderMob from "@/app/components/header/HeaderMob";

const TheHeader = () => {
  const pathname = usePathname();
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleSelectOpen = () => {
    setSelectOpen(true);
  };
  const handleSelectClose = () => {
    setSelectOpen(false);
  };

  return (
    <>
      {pathname !== "/admin" ? (
        <header className={style.header}>
          <Link
            className={
              pathname === "/" ? `${style.active} ${style.link}` : style.link
            }
            href="/"
          >
            ГОЛОВНА
          </Link>
          <div
            onMouseEnter={handleSelectOpen}
            onMouseLeave={handleSelectClose}
            className={style.about__container}
          >
            <p
              className={
                pathname === "/about-clinic" || pathname === "/about-doctors"
                  ? `${style.active} ${style.link}`
                  : style.link
              }
            >
              ПРО НАС
            </p>
            <svg
              className={
                selectOpen ? `${style.active__icon} ${style.icon}` : style.icon
              }
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L4 4L7 1"
                stroke={
                  pathname === "/about-clinic" || pathname === "/about-doctors"
                    ? "#12979B"
                    : "#292929"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <ul
              className={
                selectOpen
                  ? `${style.select} ${style.select_active} `
                  : style.select
              }
            >
              <li
                onClick={handleSelectClose}
                className={style.link__about__wrapper}
              >
                <Link
                  className={`${style.link} ${style.link__about}`}
                  href="/about-clinic"
                >
                  ПРО КЛІНІКУ
                </Link>
              </li>
              <li
                onClick={handleSelectClose}
                className={style.link__about__wrapper}
              >
                <Link
                  className={`${style.link} ${style.link__about}`}
                  href="/about-doctors"
                >
                  ЛІКАРІ
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className={
              pathname === "/services-and-prices"
                ? `${style.active} ${style.link}`
                : style.link
            }
            href="/services-and-prices"
          >
            ПОСЛУГИ ТА ЦІНИ
          </Link>
          <Link
            className={
              pathname === "/blog"
                ? `${style.active} ${style.link}`
                : style.link
            }
            href="/blog"
          >
            БЛОГ
          </Link>

          <Image
            loading="lazy"
            src={logo}
            alt="prozheiko dental studio"
            className={style.img}
          />
          <Link
            href="/contacts"
            className={
              pathname === "/contacts"
                ? `${style.active} ${style.link}`
                : style.link
            }
          >
            КОНТАКТИ
          </Link>
          <button className={style.button} onClick={() => setOpenModal(true)}>
            ЗАПИСАТИСЬ НА ВІЗИТ
          </button>
          <ModalContainer
            open={openModal}
            handleClose={() => setOpenModal(false)}
          >
            <FormVisit />
          </ModalContainer>
          <HeaderMob pathname={pathname} />
        </header>
      ) : null}
    </>
  );
};

export default TheHeader;
