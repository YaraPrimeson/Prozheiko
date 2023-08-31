import React from "react";
import Redirect from "@/app/components/redirect";

const Page = () => {
  return (
    <div>
      <Redirect oldPath="o-klinike" newPath="clinic" />
    </div>
  );
};

export default Page;
