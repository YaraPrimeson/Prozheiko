"use client";
import React, { ChangeEvent, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import style from "./tag.module.scss";
import globalS from "../../styles/global.module.scss";

interface TagModalCreateProps {
  fetchTags: () => Promise<any>;
  setTags: (data: any) => void;
}

const TagModalCreate = ({ setTags, fetchTags }: TagModalCreateProps) => {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTag(value);
  };
  const onCloseModal = () => {
    setOpenCreate(false);
    setTag("");
  };

  async function createNewTag() {
    try {
      await fetch(`/api/tags`, {
        method: "POST",
        body: tag,
      }).then(() => {
        fetchTags()
          .then((data: any) => {
            setTags(data.tags);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      });
      setOpenCreate(false);
      setTag("");
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div>
      <div className={globalS.btn__create__container}>
        <button
          className={globalS.btn__create}
          onClick={() => setOpenCreate(true)}
        >
          Створити новий тег
        </button>
      </div>
      <ModalContainer
        open={openCreate}
        handleClose={() => setOpenCreate(false)}
      >
        <div className={style.modal__container}>
          <p className={globalS.seo__subtitle}>Створити новий тег</p>
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
              Створити
            </button>
            <button className={globalS.cancel__btn} onClick={onCloseModal}>
              Скасувати
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default TagModalCreate;
