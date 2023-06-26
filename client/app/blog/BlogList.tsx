"use client";
import React, { useContext, useLayoutEffect } from "react";
import { AppContext } from "@/app/context/Context";

const BlogList = () => {
  const { getAllBlog, blog } = useContext(AppContext);

  console.log(blog, "BlogList 8 str");
  useLayoutEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div>
      {blog.map((article: any) => (
        <div key={article?._id}>
          <h1>{article?.type}</h1>
          <h3>{article?.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
