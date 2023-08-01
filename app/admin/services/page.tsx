import React, { Suspense } from "react";
import Header from "@/app/admin/header";
import { getTags } from "@/lib/tag";
import { getServices } from "@/lib/service";
import style from "@/app/admin/blog/blog.module.scss";
import { Service, Tag } from "@prisma/client";
import globalS from "@/app/styles/global.module.scss";
import ServiceEditModal from "@/app/admin/services/service-edit-modal";
import ServiceDeleteModal from "@/app/admin/services/service-delete-modal";
import ServiceCreateModal from "@/app/admin/services/service-create-modal";

const Page = async () => {
  const services: any = await getServices();
  const tags: any = await getTags();
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading ...</div>}>
        <ServiceCreateModal tags={tags} />
        <div className={style.container}>
          {services
            .sort((a: any, b: any) => a.tag.localeCompare(b.tag))
            .map((service: Service, index: number) => {
              const isFirstTag =
                index === 0 || service.tag !== services[index - 1].tag;
              return (
                <React.Fragment key={index}>
                  {isFirstTag && (
                    <div>
                      <h3 className={style.tag__title}>{service.tag}</h3>
                      <span className={style.tag__title__line}></span>
                    </div>
                  )}
                  <div key={service.id} className={style.wrapper}>
                    <img
                      className={style.img}
                      src={service.imageUrl}
                      alt={service.title}
                    />
                    <h1 className={style.title}>{service?.title}</h1>
                    <div className={globalS.btns__edit__wrapper}>
                      <ServiceEditModal service={service} />
                      <ServiceDeleteModal id={service.id} />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </Suspense>
    </>
  );
};

export default Page;
