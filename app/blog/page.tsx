import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import BlogBanner from "../assets/images/blog.webp";
import style from "./blog-list.module.scss";
import Blog from "@/app/blog/Blog";
import Analytics from "@/app/Analytics";

export default function Page() {
  return (
    <>
      <Analytics />
      <BannerContainer image={BlogBanner} altDescription={"Blog"} />
      <Blog />
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
}
