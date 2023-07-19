import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../assets/images/blog.webp";
import style from "./blog-list.module.scss";
import Link from "next/link";
import arr from "./blogArray";
import TagList from "@/app/components/tag-list/TagList";

const Page = () => {
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section>
        <TagList />
      </section>
      <section className={style.list}>
        {arr.map((article, index) => {
          const isFirstTag = index === 0 || article.tag !== arr[index - 1].tag;
          return (
            <>
              {isFirstTag && (
                <div>
                  <h3 className={style.tag__title}>{article.tag}</h3>
                  <span className={style.tag__title__line}></span>
                </div>
              )}
              <Link key={article.id} href={`/blog/${article.id}`}>
                <div className={style.wrapper}>
                  <img
                    className={style.img}
                    src={article.img.src}
                    alt={article.title}
                  />
                  <h1 className={style.title}>{article.title}</h1>
                </div>
              </Link>
            </>
          );
        })}
      </section>
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
