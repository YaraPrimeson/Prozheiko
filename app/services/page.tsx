import React from "react";
import Services from "@/app/assets/images/services.webp";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./services.module.scss";
import FormVisit from "@/app/components/form-visit/FormVisit";
import ServiceList from "@/app/services/service-list";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/services"),
    title: "Ціна на стоматологічні послуги у Prozheiko Dental Studio 🦷",
    description:
      "Доступне лікування зубів для кожного. У нашій клініці ви можете отримати консультацію, лікування будь-якої складності та діагностику. Ціни на стоматологічні послуги доступні, а матеріали – високої якості.",
    keywords:
      "Ціни на стоматологічні послуги, чистка зубів, консультація стоматолога, лікування карієсу",
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
