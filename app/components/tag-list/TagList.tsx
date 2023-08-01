import React, { FC } from "react";
import style from "./tag.module.scss";
import { Skeleton } from "@mui/material";
import { Tag } from "@prisma/client";

type TagList = {
  tags: Tag[];
  activeTag: string;
  handleActiveTag: (tag: string) => void;
  loading: boolean;
};
const TagList: FC<TagList> = ({
  tags,
  activeTag,
  handleActiveTag,
  loading,
}) => {
  if (loading) {
    return (
      <div className={style.container}>
        {Array.from(new Array(7)).map(() => (
          <div key={Math.random()}>
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ borderRadius: "10px" }}
              width={280}
              height={78}
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <ul className={style.container}>
      <>
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
