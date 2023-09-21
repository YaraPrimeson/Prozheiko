import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import BlogBanner from "../assets/images/blog.webp";
import style from "./blog-list.module.scss";
import Blog from "@/app/blog/Blog";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/blog"),
    // title: service?.title,
    // description: item?.seoDescription,
    // keywords: item?.seoKeywords,
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
