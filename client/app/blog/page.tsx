import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BlogList from "@/app/blog/BlogList";

const Page = () => {
  return (
    <div>
      <section>
        <BlogList />
      </section>
      <section>
        <FormVisit />
      </section>
    </div>
  );
};

export default Page;
