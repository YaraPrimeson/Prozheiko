"use client";
import React, { FC, useState } from "react";

import style from "./tag.module.scss";
import { Skeleton } from "@mui/material";
import { ITag } from "@/app/components/tag-list/interface";
import tagArray from "@/app/components/tag-list/tagArray";

interface TagListProps {
  // activeTag: string;
  tags: ITag[];
  // handleActiveTag: (tag: string) => void;
}

// const TagList: FC<TagListProps> = ({ activeTag, tags, handleActiveTag }) => {
const TagList = () => {
  // const { tagsLoading } = useContext(AppContext);
  // if (tagsLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexWrap: "wrap",
  //         gap: "30px 20px",
  //         margin: "60px auto 90px",
  //       }}
  //     >
  //       {Array.from(new Array(7)).map((index) => (
  //         <div key={Math.random()}>
  //           <Skeleton
  //             variant="rounded"
  //             animation="wave"
  //             sx={{ borderRadius: "10px" }}
  //             width={280}
  //             height={78}
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  const tags = tagArray;
  const [activeTag, setActiveTag] = useState("Показати всі");
  const handleActiveTag = (tag: string) => {
    setActiveTag(tag);
  };
  return (
    <ul className={style.container}>
      <>
        {/*<li*/}
        {/*  onClick={() => handleActiveTag("Показати всі")}*/}
        {/*  className={*/}
        {/*    activeTag === "Показати всі"*/}
        {/*      ? `${style.list} ${style.list__active}`*/}
        {/*      : style.list*/}
        {/*    style.list*/}
        {/*  }*/}
        {/*>*/}
        {/*  Показати всі*/}
        {/*</li>*/}
        {tags?.map(({ tag }) => (
          <li
            key={tag}
            onClick={() => handleActiveTag(tag)}
            className={
              activeTag === tag
                ? `${style.list} ${style.list__active}`
                : `${style.list}`
            }
          >
            {tag}
          </li>
        ))}
      </>
    </ul>
  );
};

export default TagList;
