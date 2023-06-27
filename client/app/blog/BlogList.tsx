"use client";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { AppContext } from "@/app/context/Context";
import TagList from "@/app/components/tag-list/TagList";
import style from "./blog-list.module.scss";

const BlogList = () => {
  const { getAllBlog, blog } = useContext(AppContext);

  useLayoutEffect(() => {
    getAllBlog();
  }, []);
  useEffect(() => {
    // console.log(
    //   blog?.map((article: any) => article?.map((block: any) => block))
    // );
    console.log(
      blog?.map((article: any) => article.blocks.map((val: any) => val))
    );
    console.log(blog);
  }, [blog]);
  return (
    <div className={style.container}>
      <TagList />
      {blog.map((item: any, index) => (
        <div key={index}>
          {item.blocks.map((block: any) => {
            if (block.type === "title") {
              return <h2 key={block._id}>{block.value}</h2>;
            } else if (block.type === "paragraph") {
              return <p key={block._id}>{block.value}</p>;
            }
            return null; // handle other block types if needed
          })}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
