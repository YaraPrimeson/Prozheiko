"use client";
import React, { FC, useState } from "react";
import globalS from "@/app/styles/global.module.scss";
import ModalContainer from "@/app/components/modal/ModalContainer";
import style from "@/app/admin/blog/blog.module.scss";

type SliderModalDeleteProps = {
  id: string;
};
const SliderModalDelete: FC<SliderModalDeleteProps> = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleDeleteMode = () => {
    setOpenModal(true);
  };
  const deleteArticle = async () => {
    try {
      await fetch(`/api/slider`, {
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
      <button onClick={toggleDeleteMode} className={globalS.delete__btn}>
        Delete
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Видалити Слайд?</p>
          <div className={style.btn__wrapper}>
            <button className={globalS.delete__btn} onClick={deleteArticle}>
              Delete
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default SliderModalDelete;
