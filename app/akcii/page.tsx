import React from "react";
import Redirect from "@/app/components/redirect";

const Page = () => {
  return (
    <div>
      <Redirect oldPath={"akcii"} newPath={"services"} />
    </div>
  );
};

export default Page;
