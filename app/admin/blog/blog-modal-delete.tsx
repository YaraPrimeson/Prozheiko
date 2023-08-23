"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";

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
  const deleteArticle = async () => {
    try {
      await fetch(`/api/blog`, {
        method: "DELETE",
        body: id,
      }).finally(() => {
        fetchArticles().then((data: any) => {
          setArticles(data.blog);
        });
      });
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={toggleDeleteMode} className={globalS.delete__btn}>
        Видалити
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Видалити Статтю?</p>
          <div className={style.btn__wrapper}>
            <button className={globalS.delete__btn} onClick={deleteArticle}>
              Видалити
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenModal(false)}
            >
              Відмінити видалення
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default BlogModalDelete;
