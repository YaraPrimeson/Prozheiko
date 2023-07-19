import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../../assets/images/blog.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import style from "./page.module.scss";
import dataArray from "../blogArray";
import Card from "@/app/components/card/card";

type BlogArticleProps = {
  params: { id: string };
};

export function generateMetadata({ params }: BlogArticleProps) {
  const item = dataArray.find((data) => data.id === params.id);
  return {
    title: `Prozheiko | ${item?.title}`,
  };
}

// async function getBlogArticle(id: string) {
//   const response = await fetch(`http://localhost:5050/api/blog/${id}`);
//   return response.json();
// }

// const BlogArticle = async ({ params: { id } }: any) => {
// const article = await getBlogArticle(id);
const BlogArticle = async ({ params }: any) => {
  const { id } = params;
  const item = dataArray.find((data) => data.id === id);
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section className={style.blog}>
        <Card item={item} />
        <FormVisit />
      </section>
    </>
  );
};

export default BlogArticle;
