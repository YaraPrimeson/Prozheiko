import React from "react";
import Services from "@/app/assets/images/services.webp";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./services.module.scss";
import ServiceCard from "@/app/services-and-prices/service-card";
import FormVisit from "@/app/components/form-visit/FormVisit";
import TagList from "@/app/components/tag-list/TagList";
import serviceArray from "./servicesArray";

const Page = () => {
  return (
    <>
      <BannerContainer
        image={Services}
        altDescription={"Services and prices"}
      />
      <section>
        <TagList />
      </section>
      <section className={style.service__list}>
        {serviceArray.map((item, index) => {
          const isFirstTag =
            index === 0 || item.tag !== serviceArray[index - 1].tag;
          return (
            <React.Fragment key={index}>
              {isFirstTag && (
                <div>
                  <h3 className={style.tag__title}>{item.tag}</h3>
                  <span className={style.tag__title__line}></span>
                </div>
              )}
              <ServiceCard
                key={item.id}
                title={item.title}
                text={item.text}
                img={item.img.src}
                price={item.price}
                list={item.list}
                id={item.id}
              />
            </React.Fragment>
          );
        })}
      </section>
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
