import React from "react";
import Services from "@/app/assets/images/services.webp";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./services.module.scss";
import FormVisit from "@/app/components/form-visit/FormVisit";
import ServiceList from "@/app/services/service-list";
import Analytics from "@/app/Analytics";

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
      <Analytics />
    </>
  );
};

export default Page;
