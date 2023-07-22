import React from "react";
import style from "./service.module.scss";
import serviceArr from "@/app/services-and-prices/servicesArray";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Service from "@/app/assets/images/services.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import Card from "@/app/components/card/card";
import Image from "next/image";

export function generateMetadata({ params }: any) {
  const item = serviceArr.find((data) => data.id === params.id);
  return {
    title: item?.title,
  };
}
// async function getService(serviceId) {
//     const { service } = await getService(serviceId)
//     if (!service) {
//         throw new Error('Failed to fetch data')
//     }
//
//     return service
// }

const Page = ({ params }: any) => {
  const { id } = params;
  const item = serviceArr.find((data) => data.id === id);

  return (
    <>
      <BannerContainer image={Service} altDescription={"Service"} />
      <section className={style.service}>
        <Card item={item} />
      </section>
      <section className={style.other}>
        <h2 className={style.other__title}>Інші послуги</h2>
        <div className={style.other__wrapper}>
          <div>
            <Image src="" alt="" />
            <p>Сканування</p>
          </div>
        </div>
      </section>
      <section>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
