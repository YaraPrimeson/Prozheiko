import React, { Suspense } from "react";
import Header from "@/app/admin/header";
import Container from "@/app/admin/tags/container";

const Page = async () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading ...</div>}>
        <Container />
      </Suspense>
    </>
  );
};

export default Page;
