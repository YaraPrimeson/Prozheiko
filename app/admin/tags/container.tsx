"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/admin/tags/tag.module.scss";
import TagModalCreate from "@/app/admin/tags/tag-modal-create";
import { Tag } from "@prisma/client";
import TagModalEdit from "@/app/admin/tags/tag-modal-edit";
import TagModalDelete from "@/app/admin/tags/tag-modal-delete";

const Container = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(true);

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
  return (
    <div className={style.container}>
      <TagModalCreate setTags={setTags} fetchTags={fetchTags} />
      <div className={style.tags__container}>
        {tags?.map((tag: Tag) => (
          <div key={tag?.id} className={style.tag__wrapper}>
            <p className={style.tag__name}>{tag?.tag}</p>
            <div className={style.btns__wrapper}>
              <TagModalEdit setTags={setTags} fetchTags={fetchTags} tag={tag} />
              <TagModalDelete
                setTags={setTags}
                fetchTags={fetchTags}
                id={tag.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
