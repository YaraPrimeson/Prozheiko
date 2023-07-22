"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./header.module.scss";
import globalStyles from "../../styles/global.module.scss";
import logo from "../../assets/images/logo.webp";
import ModalContainer from "@/app/components/modal/ModalContainer";
import FormVisit from "@/app/components/form-visit/FormVisit";
import HeaderMob from "@/app/components/header/HeaderMob";
import { ToastContainer } from "react-toastify";

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
          <Link className={style.link} href="/">
            <p
              className={
                pathname === "/"
                  ? `${style.active}`
                  : `${globalStyles.hover__link}`
              }
            >
              ГОЛОВНА
            </p>
          </Link>
          <div
            onMouseEnter={handleSelectOpen}
            onMouseLeave={handleSelectClose}
            className={style.about__container}
          >
            <p
              className={
                pathname === "/clinic" || pathname === "/doctors"
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
                  pathname === "/clinic" || pathname === "/doctors"
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
                className={
                  pathname === "/clinic"
                    ? `${style.link__about__wrapper} ${style.link__about__wrapper__active}`
                    : `${style.link__about__wrapper}`
                }
              >
                <Link
                  className={`${style.link} ${style.link__about}`}
                  href={"/clinic"}
                >
                  <p
                    className={
                      pathname === "/clinic"
                        ? ""
                        : `${globalStyles.hover__link}`
                    }
                  >
                    ПРО КЛІНІКУ
                  </p>
                </Link>
              </li>
              <li
                onClick={handleSelectClose}
                className={
                  pathname === "/doctors"
                    ? `${style.link__about__wrapper} ${style.link__about__wrapper__active}`
                    : `${style.link__about__wrapper}`
                }
              >
                <Link
                  className={`${style.link} ${style.link__about}`}
                  href={"/doctors"}
                >
                  <p
                    className={
                      pathname === "/doctors"
                        ? ""
                        : `${globalStyles.hover__link}`
                    }
                  >
                    НАША КОМАНДА
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <Link className={style.link} href={"/prices"}>
            <p
              className={
                pathname === "/prices"
                  ? `${style.active}`
                  : `${globalStyles.hover__link}`
              }
            >
              ПОСЛУГИ ТА ЦІНИ
            </p>
          </Link>
          <Link className={style.link} href={"/blog"}>
            <p
              className={
                pathname === "/blog"
                  ? `${style.active}`
                  : `${globalStyles.hover__link}`
              }
            >
              БЛОГ
            </p>
          </Link>
          <Image
            loading="lazy"
            src={logo}
            alt="prozheiko dental studio"
            className={style.img}
          />
          <Link href={"/contacts"} className={style.link}>
            <p
              className={
                pathname === "/contacts"
                  ? `${style.active}`
                  : `${globalStyles.hover__link}`
              }
            >
              КОНТАКТИ
            </p>
          </Link>
          <button className={style.button} onClick={() => setOpenModal(true)}>
            ЗАПИСАТИСЬ НА ВІЗИТ
          </button>
          <ModalContainer
            open={openModal}
            handleClose={() => setOpenModal(false)}
          >
            <FormVisit closeModal={() => setOpenModal(false)} />
          </ModalContainer>
          <HeaderMob pathname={pathname ?? ""} />
        </header>
      ) : null}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default TheHeader;
