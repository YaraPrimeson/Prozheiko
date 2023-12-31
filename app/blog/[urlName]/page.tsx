import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../../assets/images/blog.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import style from "./page.module.scss";
import Card from "@/app/components/card/card";
import { getArticle, getArticles } from "@/lib/blog";
import { Article } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

type BlogArticleParamsProps = {
  params: { urlName: string };
};

export async function generateMetadata({ params }: BlogArticleParamsProps) {
  const { urlName } = params;
  const article = await getArticle(urlName);
  return {
    title: article?.seoTitle,
    description: article?.seoDescription,
    keywords: article?.seoKeywords,
    alternates: {
      canonical: `https://prozheiko.kiev.ua/blog/${article?.urlName}`,
    },
    openGraph: {
      images: article?.imageUrl,
    },
  };
}

const BlogArticle = async ({ params }: BlogArticleParamsProps) => {
  const { urlName } = params;
  const article = await getArticle(urlName);
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
          <p className={style.other__title}>Цікаві статті</p>
          <ul className={style.other__container}>
            {articles
              .filter(
                (articleItem: Article) =>
                  articleItem.id !== (article && article.id)
              )
              .map((article: Article) => (
                <Link key={article.id} href={`/blog/${article.urlName}`}>
                  <li className={style.other__list}>
                    <Image
                      className={style.other__img}
                      src={article.imageUrl}
                      alt={article.title}
                      width={360}
                      height={200}
                    />
                    <div className={style.other__subtitle__container}>
                      <p className={style.other__subtitle}>{article.title}</p>
                    </div>
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
