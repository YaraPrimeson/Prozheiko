"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "../blog/blog.module.scss";

type ServiceModalDeleteProps = {
  id: string;
  fetchServices: () => Promise<any>;
  setServices: (data: any) => void;
};

const ServiceDeleteModal: React.FC<ServiceModalDeleteProps> = ({
  id,
  fetchServices,
  setServices,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleDeleteMode = () => {
    setOpenModal(true);
  };
  const deleteArticle = async () => {
    try {
      await fetch(`/api/services`, {
        method: "DELETE",
        body: id,
      }).finally(() => {
        fetchServices().then((data: any) => {
          setServices(data.services);
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
          <p className={globalS.title} style={{ textAlign: "center" }}>
            Видалити послугу?
          </p>
          <p className={globalS.text} style={{ textAlign: "center" }}>
            Ця дія безповоротна, надалі неможливо буде відновити послугу
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

export default ServiceDeleteModal;
