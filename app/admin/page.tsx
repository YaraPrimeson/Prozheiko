import * as React from "react";
import Header from "@/app/admin/header";
import { Suspense } from "react";
import CheckAccess from "@/app/admin/CheckAccess";

const Page = async () => {
  return (
    <div>
      <CheckAccess>
        <Header />
        <Suspense fallback={<div>loading ...</div>}>
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
      </CheckAccess>
    </div>
  );
};
export default Page;
