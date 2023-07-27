import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../../assets/images/blog.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import style from "./page.module.scss";
import dataArray from "../blogArray";
import Card from "@/app/components/card/card";
import { getArticle } from "@/lib/blog";

type BlogArticleProps = {
  params: { id: string };
};

export function generateMetadata({ params }: BlogArticleProps) {
  const item = dataArray.find((data) => data.id === params.id);
  return {
    title: `Prozheiko | ${item?.title}`,
  };
}

const BlogArticle = async ({ params }: any) => {
  const { id } = params;
  const article = await getArticle(id);
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section className={style.blog}>
        <Card item={article} />
        <FormVisit />
      </section>
    </>
  );
};

export default BlogArticle;
