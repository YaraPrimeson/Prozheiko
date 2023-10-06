import React from "react";
import Services from "@/app/assets/images/services.webp";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./services.module.scss";
import globalStyle from "@/app/styles/global.module.scss";
import FormVisit from "@/app/components/form-visit/FormVisit";
import ServiceList from "@/app/services/service-list";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/services"),
    title: "Стоматологія, ціни в Києві | Prozheiko Dental Studio 🦷",
    description:
      "Ціни на Стоматологічні Послуги. ✓Сканування, ✓діагностика, ✓видалення, ✓лікування, ✓імплантація. Сучасне обладнання, Досвідчені лікарі. Записуйтесь онлайн",
    keywords:
      "стоматологія ціни, стоматологічна клініка ціни, ціни на стоматологічні послуги, стоматологія прайс",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/services",
    },
    openGraph: {
      images:
        "https://res.cloudinary.com/djdymweyx/image/upload/v1693198657/Slider_zgsfjg.png",
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
      <div className={style.title__container}>
        <h1 className={globalStyle.seo__title}>
          Ціни на стоматологічні послуги
        </h1>
      </div>
      <ServiceList />
      <div className={style.title__container}>
        <h2 className={globalStyle.seo__subtitle}>
          Точна вартість роботи стоматолога розраховується після діагностики.
        </h2>
      </div>
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
