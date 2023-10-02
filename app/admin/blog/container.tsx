"use client";
import React, { useEffect, useState } from "react";
import BlogCreateModal from "@/app/admin/blog/blog-create-modal";
import style from "@/app/admin/blog/blog.module.scss";
import { Article, Tag } from "@prisma/client";
import globalS from "@/app/styles/global.module.scss";
import BlogModalEdit from "@/app/admin/blog/blog-modal-edit";
import BlogModalDelete from "@/app/admin/blog/blog-modal-delete";
import Image from "next/image";

const Container = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(true);

  function fetchArticles() {
    setLoadingArticles(true);
    return new Promise((resolve, reject) => {
      fetch(`/api/blog`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => setLoadingArticles(false));
    });
  }

  function fetchTags() {
    setLoadingTags(true);
    return new Promise((resolve, reject) => {
      fetch("/api/tags")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => setLoadingTags(false));
    });
  }

  useEffect(() => {
    fetchTags()
      .then((data: any) => {
        setTags(data.tags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    fetchArticles()
      .then((data: any) => {
        setArticles(data.blog);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <BlogCreateModal
        tags={tags}
        fetchArticles={fetchArticles}
        setArticles={setArticles}
      />
      <div className={style.container}>
        {articles
          ?.sort((a: any, b: any) => a.tag.localeCompare(b.tag))
          ?.map((article: Article, index: number) => {
            const isFirstTag =
              index === 0 || article.tag !== articles[index - 1].tag;
            return (
              <React.Fragment key={index}>
                {isFirstTag && (
                  <div>
                    <h3 className={style.tag__title}>{article.tag}</h3>
                    <span className={style.tag__title__line}></span>
                  </div>
                )}
                <div key={article.id} className={style.wrapper}>
                  <Image
                    className={style.img}
                    src={article.imageUrl}
                    alt={article.title}
                    width={360}
                    height={200}
                  />
                  <h1 className={style.title}>{article.title}</h1>
                  <div className={globalS.btns__edit__wrapper}>
                    <BlogModalEdit
                      fetchArticles={fetchArticles}
                      setArticles={setArticles}
                      article={article}
                    />
                    <BlogModalDelete
                      fetchArticles={fetchArticles}
                      setArticles={setArticles}
                      id={article.id}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default Container;
