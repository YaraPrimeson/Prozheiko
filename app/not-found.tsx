import React from "react";
import style from "./styles/global.module.scss";

const NotFound = () => {
  return (
    <div className={style.notfound__container}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h1>Oops!</h1>
          <h2>{`404 - СТОРІНКУ НЕ ЗНАЙДЕНО`}</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
