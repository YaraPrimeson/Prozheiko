"use client";
import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import style from "./header.module.scss";
import globalS from "../../styles/global.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.webp";
import ModalContainer from "@/app/components/modal/ModalContainer";
import FormVisit from "@/app/components/form-visit/FormVisit";

interface HeaderMobProps {
  pathname: string;
}

const HeaderMob: FC<HeaderMobProps> = ({ pathname }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleDrawer = (status: boolean) => {
    setOpenMenu(status);
  };

  const list = () => (
    <Box
      className={style.header__mob__list}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <ul>
        <li className={style.link__wrapper}>
          <Image
            loading="lazy"
            src={logo}
            alt="prozheiko dental studio"
            className={style.img__mob}
          />
        </li>
        <li
          className={
            pathname === "/"
              ? `${style.active} ${style.link__wrapper}`
              : style.link__wrapper
          }
        >
          <Link
            className={
              pathname === "/"
                ? `${style.active} ${style.link__mob}`
                : style.link__mob
            }
            href="/"
          >
            Головна
          </Link>
        </li>

        <li className={style.link__wrapper}>
          <Link
            className={
              pathname === "/clinic"
                ? `${style.active} ${style.link__mob}`
                : style.link__mob
            }
            href={"/clinic"}
          >
            Про клініку
          </Link>
        </li>
        <li className={style.link__wrapper}>
          <Link
            className={
              pathname === "/doctors"
                ? `${style.active} ${style.link__mob}`
                : style.link__mob
            }
            href={"/doctors"}
          >
            Наша Команда
          </Link>
        </li>
        <li className={style.link__wrapper}>
          <Link
            className={
              pathname === "/services"
                ? `${style.active} ${style.link__mob}`
                : style.link__mob
            }
            href={"/services"}
          >
            Послуги та ціни
          </Link>
        </li>
        <li className={style.link__wrapper}>
          <Link
            className={
              pathname === "/blog"
                ? `${style.active} ${style.link__mob}`
                : style.link__mob
            }
            href={"/blog"}
          >
            Блог
          </Link>
        </li>
        <li className={style.link__wrapper}>
          <Link
            href={"/contacts"}
            className={
              pathname === "/contacts"
                ? `${style.active} ${style.link__mob}`
                : style.link__mob
            }
          >
            Контакти
          </Link>
        </li>
        <li className={style.link__wrapper__btn}>
          <button
            className={globalS.btn__create}
            onClick={() => setOpenModal(true)}
          >
            ЗАПИСАТИСЬ НА ВІЗИТ
          </button>
          <ModalContainer
            open={openModal}
            handleClose={() => setOpenModal(false)}
          >
            <FormVisit closeModal={() => setOpenModal(false)} />
          </ModalContainer>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Button className={style.button_mob} onClick={() => toggleDrawer(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <path
            d="M3.875 15.5H27.125"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.875 7.75H27.125"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.875 23.25H27.125"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={openMenu}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default HeaderMob;
