"use client";
import React, { useContext, useLayoutEffect, useState } from "react";
import { AppContext } from "@/app/context/Context";
import TagList from "@/app/components/tag-list/TagList";
import { ITag } from "@/app/components/tag-list/interface";
import BlogList from "@/app/blog/BlogList";

const Page = () => {
  const { getAllBlog, blog, getAllTags, tags } = useContext(AppContext);
  const [activeTag, setActiveTag] = useState("Показати всі");

  const handleActiveTag = (tag: ITag["tag"]) => {
    setActiveTag(tag);
  };
  useLayoutEffect(() => {
    getAllBlog();
    getAllTags();
  }, []);
  useLayoutEffect(() => {
    console.log(blog);
    console.log(tags);
  }, [tags, blog]);

  return (
    <div>
      <BlogList />
      {/*<TagList*/}
      {/*  tags={tags}*/}
      {/*  handleActiveTag={handleActiveTag}*/}
      {/*  activeTag={activeTag}*/}
      {/*/>*/}
      {/*{blog.map((item: any, index) => (*/}
      {/*  <div key={index}>*/}
      {/*    {item.blocks.map((block: any) => {*/}
      {/*      if (block.type === "title") {*/}
      {/*        return <h2 key={block._id}>{block.value}</h2>;*/}
      {/*      } else if (block.type === "paragraph") {*/}
      {/*        return <p key={block._id}>{block.value}</p>;*/}
      {/*      }*/}
      {/*      return null; // handle other block types if needed*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};

export default Page;
