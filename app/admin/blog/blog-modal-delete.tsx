"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";
import { toast } from "react-toastify";

type BlogModalDeleteProps = {
  id: string;
  fetchArticles: () => Promise<any>;
  setArticles: (data: any) => void;
};

const BlogModalDelete: React.FC<BlogModalDeleteProps> = ({
  id,
  fetchArticles,
  setArticles,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleDeleteMode = () => {
    setOpenModal(true);
  };

  const notifySuccess = () => {
    toast.success("Видалення пройшло успішно", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = () =>
    toast.error("сталася помилка, спробуйте ,будь ласка, пізніше", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const deleteArticle = async () => {
    try {
      await fetch(`/api/blog`, {
        method: "DELETE",
        body: id,
      }).finally(() => {
        fetchArticles().then((data: any) => {
          setArticles(data.blog);
        });
        notifySuccess();
      });
      setOpenModal(false);
    } catch (error) {
      notifyError();
      return console.log(error);
    }
  };
  return (
    <div>
      <button onClick={toggleDeleteMode} className={globalS.delete__btn}>
        Видалити
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title} style={{ textAlign: "center" }}>
            Видалити статтю?
          </p>
          <p className={globalS.text} style={{ textAlign: "center" }}>
            Ця дія безповоротна, надалі неможливо буде відновити статтю
          </p>
          <div className={style.btn__wrapper}>
            <button className={globalS.delete__btn} onClick={deleteArticle}>
              Видалити
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenModal(false)}
            >
              Скасувати
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default BlogModalDelete;
