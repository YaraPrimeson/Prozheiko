import React from "react";
import TagList from "@/app/components/tag-list/TagList";
import style from "./blog-list.module.scss";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Prozheiko",
};

async function getTags() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await fetch("http://localhost:5050/api/tags/all");
  return response.json();
}

async function getBlogs() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await fetch("http://localhost:5050/api/blog/all", {
    next: { revalidate: 60 },
  });
  return response.json();
}

const BlogList = async () => {
  const tags = await getTags();
  const blog = await getBlogs();
  return (
    <div className={style.container}>
      {/*<ul>*/}
      {/*  {posts.map((post: any) => (*/}
      {/*    <li key={post._id}> {post.tag}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <TagList
        tags={tags}
        // activeTag={activeTag}
        // handleActiveTag={handleActiveTag}
      />
      {blog?.map((item: any, index: any) => (
        <div key={index}>
          {item?.blocks?.map((block: any) => {
            if (block.type === "title") {
              return <h2 key={block._id}>{block.value}</h2>;
            } else if (block.type === "paragraph") {
              return (
                <Link href={`/blog/${item._id}`} key={block._id}>
                  {block.value}
                </Link>
              );
            }
            return null; // handle other block types if needed
          })}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
