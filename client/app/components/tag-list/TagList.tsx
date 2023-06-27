"use client";
import React, { useContext, useLayoutEffect, useState } from "react";
import { AppContext } from "@/app/context/Context";
import style from "./tag.module.scss";

const TagList = () => {
  const { getAllTags, tags } = useContext(AppContext);
  const [activeTag, setActiveTag] = useState<string>("Показати всі");

  const handleActiveTag = (tag: string) => {
    setActiveTag(tag);
  };
  useLayoutEffect(() => {
    getAllTags();
  }, []);
  return (
    <ul className={style.container}>
      <li
        onClick={() => handleActiveTag("Показати всі")}
        className={
          activeTag === "Показати всі"
            ? `${style.list} ${style.list__active}`
            : style.list
        }
      >
        Показати всі
      </li>
      {tags?.map(({ tag, _id }) => (
        <li
          onClick={() => handleActiveTag(tag)}
          className={
            activeTag === tag
              ? `${style.list} ${style.list__active}`
              : style.list
          }
          key={_id}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
