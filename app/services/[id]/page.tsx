import React from "react";
import style from "./service.module.scss";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Service from "@/app/assets/images/services.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import Card from "@/app/components/card/card";
import { getService } from "@/lib/service";
// import Analytics from "@/app/Analytics";

export async function generateMetadata({ params }: any) {
  const { id } = params;
  const service = await getService(id);
  return {
    title: service?.title,
  };
}

const Page = async ({ params }: any) => {
  const { id } = params;
  const service = await getService(id);
  return (
    <>
      <BannerContainer image={Service} altDescription={"Service"} />
      <section className={style.service}>
        <Card item={service} />
      </section>
      <section className={style.form__container}>
        <FormVisit />
      </section>
      {/*<Analytics />*/}
    </>
  );
};

export default Page;
