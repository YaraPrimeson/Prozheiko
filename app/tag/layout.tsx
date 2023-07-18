import React from "react";
import { getTags } from "@/lib/tag";

async function getData() {
  const { tags }: any = await getTags();
  if (!tags) {
    throw new Error("Failed to fetch data");
  }

  return tags;
}

const Layout = async ({ children }: any) => {
  const tags = await getData();
  return (
    <div>
      <div>tag page</div>
      {children}
    </div>
  );
};

export default Layout;
