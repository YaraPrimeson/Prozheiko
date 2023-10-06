import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import BlogBanner from "../assets/images/blog.webp";
import style from "./blog-list.module.scss";
import Blog from "@/app/blog/Blog";
import globalStyle from "@/app/styles/global.module.scss";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/blog"),
    title: "Блог про лікування та діагностику зубів | Prozheiko 🦷",
    description:
      "Все про стоматологію та стоматологічні послуги. Поради спеціалістів, критика, лайфхаки та застереження. Читайте на сайті клініки Прожейко",
    keywords:
      "стоматологія, статті по стоматології, блог стоматолога, види стоматології",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/blog",
    },
    openGraph: {
      images:
        "https://res.cloudinary.com/djdymweyx/image/upload/v1693198657/Slider_zgsfjg.png",
    },
  };
}

export default function Page() {
  return (
    <>
      <BannerContainer image={BlogBanner} altDescription={"Blog"} />
      <div className={style.title__container}>
        <h1 className={globalStyle.seo__title}>
          Розкриваємо цікаві факти про стоматологію
        </h1>
      </div>
      <Blog />
      <div className={style.title__container}>
        <h2 className={globalStyle.seo__subtitle}>
          Все про стоматологію для наших читачів
        </h2>
      </div>
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
}
