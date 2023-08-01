"use client";
import React, { ChangeEvent, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import style from "./tag.module.scss";
import globalS from "../../styles/global.module.scss";

const TagModalCreate = () => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTag(value);
  };
  const onCloseModal = () => {
    setOpenEdit(false);
    setTag("");
  };

  async function createNewTag() {
    try {
      await fetch(`/api/tags`, {
        method: "POST",
        body: tag,
      });
      return location.reload();
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div>
      <div className={globalS.btn__create__container}>
        <button
          className={globalS.btn__create}
          onClick={() => setOpenEdit(true)}
        >
          create tag
        </button>
      </div>
      <ModalContainer open={openEdit} handleClose={() => setOpenEdit(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Створити новий тег</p>
          <input
            placeholder="новий тег"
            value={tag}
            onChange={handleChangeInput}
            className={style.modal__input}
          />
          <div className={style.btn__wrapper}>
            <button
              disabled={!tag}
              className={globalS.btn__create}
              onClick={createNewTag}
            >
              Create
            </button>
            <button className={globalS.cancel__btn} onClick={onCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default TagModalCreate;
