"use client";
import React, { ChangeEvent, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import { Tag } from "@prisma/client";
import globalS from "@/app/styles/global.module.scss";
import style from "./tag.module.scss";

type TagModalBlogProps = {
  tag: Tag;
};
const TagModalEdit: React.FC<TagModalBlogProps> = ({ tag }) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [tagText, setTagText] = useState<string>(tag?.tag);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTagText(value);
  };

  const onCloseModal = () => {
    setOpenEdit(false);
  };
  const EditTag = async () => {
    try {
      await fetch(`/api/tags`, {
        method: "PATCH",
        body: JSON.stringify({ tag: tagText, id: tag.id }),
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={() => setOpenEdit(true)} className={globalS.edit__btn}>
        Редагувати
      </button>
      <ModalContainer open={openEdit} handleClose={() => setOpenEdit(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Редагування тегу</p>
          <input
            className={style.modal__input}
            type="text"
            value={tagText}
            onChange={onChangeInput}
          />
          <div className={style.btn__wrapper}>
            <button className={globalS.edit__btn} onClick={EditTag}>
              Редагувати
            </button>
            <button className={globalS.cancel__btn} onClick={onCloseModal}>
              Відмінити
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default TagModalEdit;
