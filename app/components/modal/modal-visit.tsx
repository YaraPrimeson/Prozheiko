"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import FormVisit from "@/app/components/form-visit/FormVisit";
import globalStyles from "@/app/styles/global.module.scss";
import style from "@/app/about-clinic/clinic.module.scss";
import { ToastContainer } from "react-toastify";

const ModalVisit = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className={`${globalStyles.button} ${style.btn__visit}`}
      >
        ЗАПЛАНУВАТИ ВІЗИТ ДО КЛІНІКИ
        <svg
          style={{ marginLeft: "10px" }}
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.03961 8.54688L5.09168 5.03125L1.03961 1.51562"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ModalContainer open={open} handleClose={handleClose}>
        <FormVisit />
      </ModalContainer>
    </>
  );
};

export default ModalVisit;
