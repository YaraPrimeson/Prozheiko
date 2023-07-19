import React from "react";
import Image from "next/image";
import style from "./card.module.scss";

const Card = ({ item }: any) => {
  return (
    <>
      <div className={style.tag__container}>
        <h2 className={style.tag}>{item?.tag}</h2>
        <span className={style.tag__line}></span>
      </div>
      <div className={style.service__wrapper}>
        <div className={style.title__container}>
          <h1 className={style.title}>{item?.title}</h1>
          {item?.price && (
            <div className={style.price__container}>
              <p className={style.price}>{item?.price}</p>
            </div>
          )}
        </div>
        <div>
          <Image
            loading="lazy"
            className={style.img}
            width={500}
            height={500}
            src={item?.img?.src ?? ""}
            alt={item?.title ?? ""}
          />
        </div>
        <div className={style.text__container}>
          {item?.blocks?.map((block: any) => {
            if (block.type === "subtitle") {
              return (
                <h2 key={block._id} className={style.subtitle}>
                  {block.value}
                </h2>
              );
            } else if (block.type === "paragraph") {
              return (
                <p key={block._id} className={style.text}>
                  {block.value}
                </p>
              );
            } else if (block.type === "list") {
              return (
                <ul key={block._id}>
                  {block.value.map((list: string, index: number) => (
                    <li key={index} className={style.list}>
                      {list}
                    </li>
                  ))}
                </ul>
              );
            }
            return null; // handle other block types if needed
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
