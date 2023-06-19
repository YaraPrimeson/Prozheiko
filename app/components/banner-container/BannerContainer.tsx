import React, { FC } from "react";
import Image from "next/image";
import style from "./baner.module.scss";

interface BannerContainerProps {
  image: string;
  altDescription: string;
}

const BannerContainer: FC<BannerContainerProps> = ({
  image,
  altDescription,
}) => {
  return (
    <div className={style.banner__container}>
      <Image className={style.banner} src={image} alt={altDescription} />
    </div>
  );
};

export default BannerContainer;
