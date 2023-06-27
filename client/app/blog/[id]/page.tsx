import React from "react";

type BlogArticleProps = {
  params: { id: string };
};

export function generateMetadata({ params: { id } }: BlogArticleProps) {
  return {
    title: id,
  };
}

const BlogArticle = async ({ params: id }: BlogArticleProps) => {
  return <div></div>;
};

export default BlogArticle;
