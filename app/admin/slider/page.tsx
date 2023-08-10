import React, { Suspense } from "react";
import { getSliders } from "@/lib/slider";
import Header from "@/app/admin/header";
import Container from "@/app/admin/slider/container";

const Page = async () => {
  const slider: any = await getSliders();
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
