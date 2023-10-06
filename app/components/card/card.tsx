import React from "react";
import style from "./card.module.scss";
import globalS from "../../styles/global.module.scss";
import FormattedText from "@/app/components/FormattedText";
import Estimate from "@/app/components/estimate/Estimate";
import Image from "next/image";

const Card = ({ item }: any) => {
  return (
    <>
      <div className={style.tag__container}>
        <p className={`${style.tag} ${globalS.title}`}>{item?.tag}</p>
        <span className={style.tag__line}></span>
      </div>
      <div className={style.service__wrapper}>
        {item?.price ? (
          <div className={style.price__wrapper}>
            <div className={style.title__container}>
              <h1 className={`${style.title} ${globalS.title}`}>
                {item?.titleH1}
                {/*{item?.title}*/}
              </h1>
            </div>
            <div className={style.price__container}>
              <p className={style.price}>{item?.price}</p>
            </div>
          </div>
        ) : (
          <div className={style.title__container}>
            <h1 className={`${style.title} ${globalS.title}`}>
              {item?.titleH1}
              {/*{item?.title}*/}
            </h1>
          </div>
        )}
        <div>
          <Image
            loading="lazy"
            className={style.img}
            width={500}
            height={400}
            src={item?.imageUrl}
            alt={item?.title}
          />
        </div>
        <div className={style.text__container}>
          {item?.blocks?.map((block: any, index: number) => {
            if (block.type === "subtitle") {
              return (
                <h2 key={index} className={style.subtitle}>
                  {block.value}
                </h2>
              );
            } else if (block.type === "paragraph") {
              return <FormattedText key={index} text={block.value} />;
            } else if (block.type === "subtitleText") {
              return (
                <p className={style.subtitle} key={index}>
                  {block.value}
                </p>
              );
            } else if (block.type === "imageUrl") {
              return (
                <div key={index}>
                  <Image
                    style={{ margin: "10px auto" }}
                    loading="lazy"
                    className={style.article__img}
                    width={500}
                    height={400}
                    src={block.value}
                    alt={item.title}
                  />
                </div>
              );
            } else if (block.type === "list") {
              return (
                <ul key={index}>
                  {block.value.map((list: string, index: number) => (
                    <li key={index} className={style.list}>
                      {list}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </div>
      {item.like && (
        <Estimate dislike={item.dislike} like={item.like} id={item.id} />
      )}
    </>
  );
};

export default Card;
