"use client";
import React, { useContext, useLayoutEffect, useState } from "react";
import BlogList from "@/app/blog/BlogList";
import { AppContext } from "@/app/context/Context";
import { Metadata } from "next";

const Page = () => {
  const { getAllBlog, blog } = useContext(AppContext);
  const { getAllTags, tags } = useContext(AppContext);
  const [activeTag, setActiveTag] = useState<string>("Показати всі");

  const handleActiveTag = (tag: string) => {
    setActiveTag(tag);
  };
  useLayoutEffect(() => {
    getAllTags();
    getAllBlog();
  }, []);
  useLayoutEffect(() => {
    console.log(tags);
  }, [tags]);
  return (
    <div>
      {/*<BlogList*/}
      {/*  tags={tags}*/}
      {/*  blog={blog}*/}
      {/*  activeTag={activeTag}*/}
      {/*  handleActiveTag={handleActiveTag}*/}
      {/*/>*/}
    </div>
  );
};

export default Page;
