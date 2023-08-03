import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../../assets/images/blog.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import style from "./page.module.scss";
import Card from "@/app/components/card/card";
import { getArticle, getArticles } from "@/lib/blog";
import { Article } from "@prisma/client";
import Link from "next/link";

type BlogArticleProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: BlogArticleProps) {
  const { id } = params;
  const item = await getArticle(id);
  return {
    title: `Prozheiko | ${item?.title}`,
  };
}

const BlogArticle = async ({ params }: any) => {
  const { id } = params;
  const article = await getArticle(id);
  const articles: any = await getArticles(article && article.tag);
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section className={style.blog}>
        <Card item={article} />
      </section>
      {articles.filter(
        (articleItem: Article) => articleItem.id !== (article && article.id)
      ).length > 0 && (
        <section className={style.other}>
          <h2 className={style.other__title}>Цікаві статті</h2>
          <ul className={style.other__container}>
            {articles
              .filter(
                (articleItem: Article) =>
                  articleItem.id !== (article && article.id)
              )
              .map((article: Article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <li className={style.other__list}>
                    <img
                      className={style.other__img}
                      src={article.imageUrl}
                      alt=""
                    />
                    <h1 className={style.other__subtitle}>{article.title}</h1>
                  </li>
                </Link>
              ))}
          </ul>
        </section>
      )}
      <section className={style.form__container}>
        <FormVisit />
      </section>
    </>
  );
};

export default BlogArticle;
