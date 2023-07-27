"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./tag.module.scss";

type TagModalDeleteProps = {
  id: string;
};

const TagModalDelete: React.FC<TagModalDeleteProps> = ({ id }) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const deleteTag = async () => {
    try {
      await fetch(`/api/tags`, {
        method: "DELETE",
        body: id,
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={() => setOpenEdit(true)} className={globalS.delete__btn}>
        Видалити
      </button>
      <ModalContainer open={openEdit} handleClose={() => setOpenEdit(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Видалення тега?</p>
          <div className={style.btn__wrapper}>
            <button className={globalS.delete__btn} onClick={deleteTag}>
              Видалити
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenEdit(false)}
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
