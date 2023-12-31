"use client";
import React, { useState } from "react";
import globalS from "@/app/styles/global.module.scss";
import ModalContainer from "@/app/components/modal/ModalContainer";
import style from "@/app/admin/blog/blog.module.scss";

interface SliderModalCreateProps {
  fetchSlider: () => Promise<any>;
  setSlider: (data: any) => void;
}

const SliderModalCreate = ({
  fetchSlider,
  setSlider,
}: SliderModalCreateProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState("");
  const [href, setHref] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const toggleEditMode = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setDescription("");
    setHref("");
    setImageUrl("");
  };

  async function createNewArticle() {
    try {
      await fetch(`/api/slider`, {
        method: "POST",
        body: JSON.stringify({
          description,
          href,
          imageUrl,
        }),
      }).finally(() => {
        fetchSlider().then((data: any) => {
          setSlider(data.slide);
        });
      });
      setOpenModal(false);
      setDescription("");
      setHref("");
      setImageUrl("");
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div>
      <div onClick={toggleEditMode} className={globalS.btn__create__container}>
        <button className={globalS.btn__create}>Створити новий слайд</button>
      </div>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={style.title}>Створення нового слайду</p>
          <div className={style.input__container}>
            <div className={style.input__wrapper}>
              <label>
                Посилання(куди відбувається перенаправлення при натискані на
                картинку)
              </label>
              <input
                className={style.input}
                onChange={(e) => setHref(e.target.value)}
                type="text"
                value={href}
                name="href"
                placeholder="Вставте посилання"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>Посилання на картинку для слайду</label>
              <input
                className={style.input}
                type="text"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                name="imageUrl"
                placeholder="Вставте посилання на картинку"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>Опис зображення</label>
              <input
                className={style.input}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                value={description}
                name="description"
                placeholder="Додайте опис"
              />
            </div>
          </div>
          <div className={style.btn__wrapper}>
            <button onClick={createNewArticle} className={globalS.btn__create}>
              Створити
            </button>
            <button onClick={onCloseModal} className={globalS.cancel__btn}>
              Скасувати
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default SliderModalCreate;
