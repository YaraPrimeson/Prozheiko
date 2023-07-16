import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../../assets/images/blog.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import style from "./page.module.scss";

type BlogArticleProps = {
  params: { id: string };
};

export function generateMetadata({ params: { id } }: BlogArticleProps) {
  return {
    title: id,
  };
}

async function getBlogArticle(id: string) {
  const response = await fetch(`http://localhost:5050/api/blog/${id}`);
  return response.json();
}

const BlogArticle = async ({ params: { id } }: any) => {
  // const article = await getBlogArticle(id);
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section className={style.blog}>
        <div className={style.tag__container}>
          {/*<h2 className={style.tag}>{article.tag}</h2>*/}
        </div>
        <div>
          {/*{article?.blocks?.map((block: any) => {*/}
          {/*  if (block.type === "title") {*/}
          {/*    return <h2 key={block._id}>{block.value}</h2>;*/}
          {/*  } else if (block.type === "paragraph") {*/}
          {/*    return <p key={block._id}>{block.value}</p>;*/}
          {/*  }*/}
          {/*  return null; // handle other block types if needed*/}
          {/*})}*/}
        </div>
        <FormVisit />
      </section>
    </>
  );
};

export default BlogArticle;
