"use client";
import React, { useEffect, useState } from "react";
import style from "./allowCookies.module.scss";
import globalS from "../../styles/global.module.scss";

const AllowCookies = () => {
  const [lsAllowCookies, setLsAllowCookies] = useState<string | null>(null);
  const onAllowCookies = () => {
    localStorage.setItem("prozheiko.kiev.ua", "true");
    setLsAllowCookies(localStorage.getItem("prozheiko.kiev.ua"));
  };
  useEffect(() => {
    setLsAllowCookies(localStorage.getItem("prozheiko.kiev.ua"));
    document.cookie = "cookieName=value; SameSite=None; Secure";
  }, []);
  if (lsAllowCookies) {
    return;
  }
  return (
    <div
      className={
        lsAllowCookies === "true"
          ? `${style.notification} ${style.allow}`
          : `${style.notification}`
      }
    >
      <div className={style.wrapper}>
        <p className={style.text}>
          Продовжуючи відвідування сайту, ви погоджуєтесь на використання файлів
          cookie і Політикою конфіденційності.
        </p>
        <button
          className={`${globalS.button} ${style.button}`}
          onClick={onAllowCookies}
        >
          Прийняти cookies
        </button>
      </div>
    </div>
  );
};

export default AllowCookies;
