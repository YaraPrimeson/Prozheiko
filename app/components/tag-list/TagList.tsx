"use client";
import React, { FC } from "react";

import style from "./tag.module.scss";
import { Skeleton } from "@mui/material";
import { ITag } from "@/app/components/tag-list/interface";

interface TagListProps {
  // activeTag: string;
  tags: ITag[];
  // handleActiveTag: (tag: string) => void;
}

// const TagList: FC<TagListProps> = ({ activeTag, tags, handleActiveTag }) => {
const TagList: FC<TagListProps> = ({ tags }) => {
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

  return (
    <ul className={style.container}>
      <>
        <li
          // onClick={() => handleActiveTag("Показати всі")}
          className={
            // activeTag === "Показати всі"
            //   ? `${style.list} ${style.list__active}`
            //   : style.list
            style.list
          }
        >
          Показати всі
        </li>
        {tags?.map(({ tag, _id }: ITag) => (
          <li
            key={_id}
            // onClick={() => handleActiveTag(tag)}
            className={
              // activeTag === tag
              //   ? `${style.list} ${style.list__active}`
              //   : style.list
              style.list
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
