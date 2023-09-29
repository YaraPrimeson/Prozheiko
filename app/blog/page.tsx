import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import BlogBanner from "../assets/images/blog.webp";
import style from "./blog-list.module.scss";
import Blog from "@/app/blog/Blog";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/blog"),
    title: "Блог стоматології Prozheiko Dental Studio 🦷",
    description:
      "У цьому розділі ми розповідаємо про послуги клініки та ділимося порадами з догляду за ротовою порожниною та зубами.\n" +
      "\n" +
      "Тут ви знайдете усе про стоматологію: лікування карієсу, протезування, ортодонтія та інші матеріали.\n",
    keywords:
      "стоматологія, лікування карієсу, догляд за зубами, протезування, ортодонтія, усе про стоматологію",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/blog",
    },
  };
}

export default function Page() {
  return (
    <>
      <BannerContainer image={BlogBanner} altDescription={"Blog"} />
      <Blog />
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
}
