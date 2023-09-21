import React from "react";
import Services from "@/app/assets/images/services.webp";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./services.module.scss";
import FormVisit from "@/app/components/form-visit/FormVisit";
import ServiceList from "@/app/services/service-list";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/services"),
    // title: service?.title,
    // description: item?.seoDescription,
    // keywords: item?.seoKeywords,
    alternates: {
      canonical: "https://prozheiko.kiev.ua/services",
    },
  };
}

const Page = async () => {
  return (
    <>
      <BannerContainer
        image={Services}
        altDescription={"Services and services"}
      />
      <ServiceList />
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
