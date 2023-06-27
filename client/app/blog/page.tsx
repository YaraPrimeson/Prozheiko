import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BlogList from "@/app/blog/BlogList";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../assets/images/blog.webp";
const Page = () => {
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section>
        <BlogList />
      </section>
      <section>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
