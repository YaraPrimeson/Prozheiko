import React from "react";
import style from "./service.module.scss";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Service from "@/app/assets/images/services.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import Card from "@/app/components/card/card";
import { getService } from "@/lib/service";

type ServiceArticleParamsProps = {
  params: { urlName: string };
};

export async function generateMetadata({ params }: ServiceArticleParamsProps) {
  const { urlName } = params;

  const service = await getService(urlName);
  return {
    title: service?.title,
    // description: item?.seoDescription,
    // keywords: item?.seoKeywords,
    alternates: {
      canonical: `https://prozheiko.kiev.ua/services/${service?.urlName}`,
    },
  };
}

const Page = async ({ params }: ServiceArticleParamsProps) => {
  const { urlName } = params;

  const service = await getService(urlName);
  return (
    <>
      <BannerContainer image={Service} altDescription={"Service"} />
      <section className={style.service}>
        <Card item={service} />
      </section>
      <section className={style.form__container}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;