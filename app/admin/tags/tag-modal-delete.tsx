"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./tag.module.scss";

type TagModalDeleteProps = {
  id: string;
  fetchTags: () => Promise<any>;
  setTags: (data: any) => void;
};

const TagModalDelete: React.FC<TagModalDeleteProps> = ({
  id,
  fetchTags,
  setTags,
}) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const deleteTag = async () => {
    try {
      await fetch(`/api/tags`, {
        method: "DELETE",
        body: id,
      }).then(() => {
        fetchTags()
          .then((data: any) => {
            setTags(data.tags);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      });
      setOpenDelete(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={() => setOpenDelete(true)}
        className={globalS.delete__btn}
      >
        Видалити
      </button>
      <ModalContainer
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
      >
        <div className={style.modal__container}>
          <p className={globalS.title}>Видалення тега?</p>
          <div className={style.btn__wrapper}>
            <button className={globalS.delete__btn} onClick={deleteTag}>
              Видалити
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenDelete(false)}
            >
              Відмінити
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default TagModalDelete;
