"use client";
import React, { useEffect, useMemo, useState } from "react";
import style from "./blog-list.module.scss";
import globalS from "../styles/global.module.scss";
import Link from "next/link";
import { Article, Tag } from "@prisma/client";
import TagList from "@/app/components/tag-list/TagList";
import { Skeleton } from "@mui/material";
import Image from "next/image";

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(true);
  const [activeTag, setActiveTag] = useState("Показати всі");

  const filteredArticles = useMemo(
    () => articles?.sort((a, b) => a.tag.localeCompare(b.tag)),
    [articles]
  );

  const chooseTag = (tag: string) => {
    setActiveTag(tag);
  };

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
        {loadingArticles ? (
          <>
            {Array.from(new Array(3)).map(() => (
              <div
                key={Math.random()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  sx={{
                    borderRadius: "10px",
                    marginTop: "40px",
                    maxWidth: "570px",
                  }}
                  width={"100%"}
                  height={85}
                />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  sx={{ borderRadius: "10px" }}
                  width={"100%"}
                  height={200}
                />
              </div>
            ))}
          </>
        ) : (
          filteredArticles.map((article, index) => {
            const isFirstTag =
              index === 0 || article.tag !== articles[index - 1].tag;
            return (
              <React.Fragment key={article.id}>
                {isFirstTag && (
                  <div>
                    <h3 className={globalS.title}>{article.tag}</h3>
                    <span className={style.tag__title__line}></span>
                  </div>
                )}
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className={style.wrapper}>
                    <Image
                      className={style.img}
                      src={article.imageUrl}
                      alt={article.title}
                      loading="lazy"
                      width={360}
                      height={200}
                    />
                    {/*<img*/}
                    {/*  className={style.img}*/}
                    {/*  src={article.imageUrl}*/}
                    {/*  alt={article.title}*/}
                    {/*  loading="lazy"*/}
                    {/*/>*/}
                    <h1 className={style.title}>{article.title}</h1>
                  </div>
                </Link>
              </React.Fragment>
            );
          })
        )}
      </section>
    </>
  );
}
