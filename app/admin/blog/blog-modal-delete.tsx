"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";

type BlogModalDeleteProps = {
  id: string;
};

const BlogModalDelete: React.FC<BlogModalDeleteProps> = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleDeleteMode = () => {
    setOpenModal(true);
  };
  const deleteArticle = async () => {
    try {
      await fetch(`/api/blog`, {
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
          <p className={globalS.title}>Видалити Статтю?</p>
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

export default BlogModalDelete;
