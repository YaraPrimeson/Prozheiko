"use client";
import React, { useContext, useLayoutEffect } from "react";
import { AppContext } from "@/app/context/Context";

const Page = () => {
  const { getAllBlog, blog, getAllTags, tags } = useContext(AppContext);

  useLayoutEffect(() => {
    getAllBlog();
    getAllTags();
  }, []);
  useLayoutEffect(() => {
    console.log(blog);
    console.log(tags);
  }, [tags, blog]);

  return <div>blog page</div>;
};

export default Page;
