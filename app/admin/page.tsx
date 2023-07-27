import * as React from "react";
import Header from "@/app/admin/header";
import { Suspense } from "react";

const Page = async () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Header />
        <div
          style={{
            margin: "100px auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          choose
        </div>
      </Suspense>
    </div>
  );
};
export default Page;
