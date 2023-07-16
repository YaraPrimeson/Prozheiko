"use client";
import React, { useContext, useLayoutEffect, useState } from "react";
import BlogList from "@/app/blog/BlogList";
import { Metadata } from "next";

const Page = () => {
  const [activeTag, setActiveTag] = useState<string>("Показати всі");

  const handleActiveTag = (tag: string) => {
    setActiveTag(tag);
  };

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
