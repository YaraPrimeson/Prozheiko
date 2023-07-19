import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../../assets/images/blog.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import style from "./page.module.scss";
import dataArray from "../blogArray";
import Image from "next/image";
import Service from "@/app/assets/images/services.webp";
import Card from "@/app/components/card/card";

type BlogArticleProps = {
  params: { id: string };
};

export function generateMetadata({ params }: BlogArticleProps) {
  const item = dataArray.find((data) => data.id === params.id);
  return {
    title: item?.title,
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
      <BannerContainer image={Service} altDescription={"Service"} />
      <section className={style.blog}>
        <Card item={item} />
        {/*<div className={style.tag__container}>*/}
        {/*  <h2 className={style.tag}>{item?.tag}</h2>*/}
        {/*  <span className={style.tag__line}></span>*/}
        {/*</div>*/}
        {/*<div className={style.service__wrapper}>*/}
        {/*  <h1 className={style.title}>{item?.title}</h1>*/}
        {/*  <div>*/}
        {/*    <Image*/}
        {/*      loading="lazy"*/}
        {/*      className={style.img}*/}
        {/*      width={500}*/}
        {/*      height={500}*/}
        {/*      src={item?.img?.src ?? ""}*/}
        {/*      alt={item?.title ?? ""}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className={style.text__container}>*/}
        {/*    {item?.blocks?.map((block: any) => {*/}
        {/*      if (block.type === "subtitle") {*/}
        {/*        return (*/}
        {/*          <h2 key={block._id} className={style.subtitle}>*/}
        {/*            {block.value}*/}
        {/*          </h2>*/}
        {/*        );*/}
        {/*      } else if (block.type === "paragraph") {*/}
        {/*        return (*/}
        {/*          <p key={block._id} className={style.text}>*/}
        {/*            {block.value}*/}
        {/*          </p>*/}
        {/*        );*/}
        {/*      } else if (block.type === "list") {*/}
        {/*        return (*/}
        {/*          <ul key={block._id}>*/}
        {/*            {block.value.map((list: string, index: number) => (*/}
        {/*              <li key={index} className={style.list}>*/}
        {/*                {list}*/}
        {/*              </li>*/}
        {/*            ))}*/}
        {/*          </ul>*/}
        {/*        );*/}
        {/*      }*/}
        {/*      return null; // handle other block types if needed*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        <FormVisit />
      </section>
    </>
    // <>
    //   <BannerContainer image={Blog} altDescription={"Blog"} />
    //   <section className={style.blog}>
    //     <div className={style.tag__container}>
    //       {/*<h2 className={style.tag}>{article.tag}</h2>*/}
    //       <h1>{item?.title}</h1>
    //     </div>
    //     <div>
    //       <div>
    //         <Image
    //           width={900}
    //           height={570}
    //           src={item?.img?.src ?? ""}
    //           alt={item?.title ?? ""}
    //         />
    //       </div>
    //       {item?.blocks?.map((block: any) => {
    //         if (block.type === "subtitle") {
    //           return <h2 key={block._id}>{block.value}</h2>;
    //         } else if (block.type === "paragraph") {
    //           return <p key={block._id}>{block.value}</p>;
    //         }
    //         return null; // handle other block types if needed
    //       })}
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         alignItems: " center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <FormVisit />
    //     </div>
    //   </section>
    // </>
  );
};

export default BlogArticle;
