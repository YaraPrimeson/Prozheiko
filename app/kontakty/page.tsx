import React from "react";
import Redirect from "@/app/components/redirect";

const Page = () => {
  return (
    <div>
      <Redirect oldPath={"kontakty"} newPath={"contacts"} />
    </div>
  );
};

export default Page;
