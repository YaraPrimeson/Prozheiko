"use client";
import React, { useEffect, useState } from "react";
import style from "./blog-list.module.scss";
import Link from "next/link";
import { Article, Tag } from "@prisma/client";
import TagList from "@/app/components/tag-list/TagList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Prozheiko",
};

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(true);
  const [activeTag, setActiveTag] = useState("Показати всі");

  function fetchArticles() {
    setLoadingArticles(true);
    return new Promise((resolve, reject) => {
      fetch(`/api/blog?tag=${encodeURIComponent(activeTag)}`)
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

  const chooseTag = (tag: string) => {
    setActiveTag(tag);
  };

  useEffect(() => {
    fetchTags()
      .then((data: any) => {
        setTags(data.tags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchArticles()
      .then((data: any) => {
        setArticles(data.blog);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [activeTag]);

  return (
    <>
      <section>
        <TagList
          loading={loadingTags}
          tags={tags}
          activeTag={activeTag}
          handleActiveTag={chooseTag}
        />
      </section>
      <section className={style.list}>
        {articles
          ?.sort((a, b) => a.tag.localeCompare(b.tag))
          .map((article, index) => {
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
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className={style.wrapper}>
                    <img
                      className={style.img}
                      src={article.imageUrl}
                      alt={article.title}
                    />
                    <h1 className={style.title}>{article.title}</h1>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
      </section>
    </>
  );
}
