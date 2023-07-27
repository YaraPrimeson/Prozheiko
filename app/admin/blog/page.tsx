import React, { Suspense } from "react";
import Header from "@/app/admin/header";
import { getArticles } from "@/lib/blog";
import arr from "@/app/blog/blogArray";
import style from "./blog.module.scss";
import globalS from "../../styles/global.module.scss";
import BlogModalDelete from "@/app/admin/blog/blog-modal-delete";
import BlogModalEdit from "@/app/admin/blog/blog-modal-edit";
import { getTags } from "@/lib/tag";
import BlogCreateModal from "@/app/admin/blog/blog-create-modal";
import { Article } from "@prisma/client";

const Page = async () => {
  const blog = await getArticles();
  const tags = await getTags();
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Header />
        <BlogCreateModal tags={tags} />
        <div className={style.container}>
          {blog.map((article: Article, index: number) => {
            const isFirstTag =
              index === 0 || article.tag !== arr[index - 1].tag;
            return (
              <React.Fragment key={index}>
                {isFirstTag && (
                  <div>
                    <h3 className={style.tag__title}>{article.tag}</h3>
                    <span className={style.tag__title__line}></span>
                  </div>
                )}
                <div key={article.id} className={style.wrapper}>
                  <img
                    className={style.img}
                    src={article.imageUrl}
                    alt={article.title}
                  />
                  <h1 className={style.title}>{article.title}</h1>
                  <div className={globalS.btns__edit__wrapper}>
                    <BlogModalEdit article={article} />
                    <BlogModalDelete id={article.id} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </Suspense>
    </>
  );
};

export default Page;
