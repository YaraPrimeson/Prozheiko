import React, { Suspense } from "react";
import style from "./tag.module.scss";
import { getTags } from "@/lib/tag";
import TagModalCreate from "@/app/admin/tags/tag-modal-create";
import { Tag } from "@prisma/client";
import TagModalEdit from "@/app/admin/tags/tag-modal-edit";
import TagModalDelete from "@/app/admin/tags/tag-modal-delete";
import Header from "@/app/admin/header";

const Page = async () => {
  const tags: any = await getTags();
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading ...</div>}>
        <div className={style.container}>
          <TagModalCreate />
          <div className={style.tags__container}>
            {tags?.map((tag: Tag) => (
              <div key={tag?.id} className={style.tag__wrapper}>
                <p className={style.tag__name}>{tag?.tag}</p>
                <div className={style.btns__wrapper}>
                  <TagModalEdit tag={tag} />
                  <TagModalDelete id={tag.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Page;
