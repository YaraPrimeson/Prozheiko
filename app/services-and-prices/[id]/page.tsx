import React from "react";
import style from "./service.module.scss";
import serviceArr from "@/app/services-and-prices/servicesArray";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Service from "@/app/assets/images/services.webp";
import Image from "next/image";
import FormVisit from "@/app/components/form-visit/FormVisit";
import Card from "@/app/components/card/card";

export function generateMetadata({ params }: any) {
  const item = serviceArr.find((data) => data.id === params.id);
  return {
    title: item?.title,
  };
}

const Page = ({ params }: any) => {
  const { id } = params;
  const item = serviceArr.find((data) => data.id === id);
  return (
    <>
      <BannerContainer image={Service} altDescription={"Service"} />
      <section className={style.service}>
        <Card item={item} />
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
