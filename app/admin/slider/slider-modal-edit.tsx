"use client";
import React, { FC, useState } from "react";
import { Slider } from "@prisma/client";
import globalS from "@/app/styles/global.module.scss";
import style from "@/app/admin/blog/blog.module.scss";
import ModalContainer from "@/app/components/modal/ModalContainer";

type SliderModalEdit = {
  slide: Slider;
  fetchSlider: () => Promise<any>;
  setSlider: (data: any) => void;
};
const SliderModalEdit: FC<SliderModalEdit> = ({
  slide,
  fetchSlider,
  setSlider,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [href, setHref] = useState(slide.href);
  const [imageUrl, setImageUrl] = useState(slide.imageUrl);
  const [description, setDescription] = useState(slide.description);

  const toggleEditMode = () => {
    setOpenModal(true);
  };
  const editArticle = async () => {
    try {
      await fetch(`/api/slider`, {
        method: "PATCH",
        body: JSON.stringify({ href, imageUrl, description, id: slide.id }),
      }).finally(() => {
        fetchSlider().then((data: any) => {
          setSlider(data.slide);
        });
      });
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={toggleEditMode} className={globalS.edit__btn}>
        Редагувати
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Редагування Статті</p>
          <div className={style.input__edit__container}>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>href</label>
              <input
                className={style.input}
                type="text"
                value={href}
                name="href"
                onChange={(e) => setHref(e.target.value)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>imageUrl</label>
              <input
                className={style.input}
                type="text"
                value={imageUrl}
                name="imageUrl"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>
                опис зображення
              </label>
              <input
                className={style.input}
                type="text"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className={style.btn__wrapper}>
            <button className={globalS.edit__btn} onClick={editArticle}>
              Редагувати
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenModal(false)}
            >
              Відмінити
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default SliderModalEdit;
