"use client";
import React, { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/uk";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import style from "./form-visit.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormVisitProps = {
  closeModal?: () => void;
};
const FormVisit = ({ closeModal }: FormVisitProps) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };
  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = Number(e?.target?.value.replace(/\D/g, "").replace(/^7/, "8"));
    setPhone(numb as number);
  };

  const notifySuccess = () => {
    toast.success("Дякуємо, ми звʼяжемося в найближчий час", {
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
  const Send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const chat_id = "-505440378";
    const parse_mode = "html";
    const formattedDate = dayjs(date).locale("uk").format("D MMMM YYYY HH:mm");
    let fields = [
      "<b>Ім`я</b>: " + name,
      "<b>Номер</b>: " + phone,
      "<b>Дата</b>: " + formattedDate,
    ];
    let msg = "";
    fields.forEach((field) => {
      msg += field + "\n";
    });
    msg = encodeURI(msg);
    const requestOptionsPush = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        parse_mode: parse_mode,
      }),
    };
    fetch(
      `https://api.telegram.org/bot6281889755:AAHTEiRusyy7FnFSX7xEhY_Qa_n5yTINI_0/sendMessage?chat_id=-912380821&parse_mode=html&text=${msg}`,
      requestOptionsPush
    )
      .then(() => {
        setName("");
        setPhone(null);
        setDate(null);
        if (closeModal) {
          closeModal();
        }
        notifySuccess();
      })
      .catch(() => {
        notifyError();
      });
  };
  return (
    <>
      <form className={style.form} onSubmit={(e) => Send(e)}>
        <h3 className={style.form__title}>
          Заплануйте свій візит до стоматолога
        </h3>
        <input
          className={style.input}
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          placeholder="Ім’я та Прізвище"
        />
        <InputMask
          placeholder="+380 093 123 45 67"
          className={style.input}
          value={phone ?? ""}
          onChange={handleChangePhone}
          type="tel"
          mask="+(380) 99-999-99-99"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            sx={{ mt: "20px" }}
            disablePast={true}
            ampm={false}
            className={style.input}
            label={"Побажання щодо часу/дати"}
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
        <button
          type="submit"
          className={style.button}
          disabled={!name || (phone ? phone.toString().length !== 12 : true)}
        >
          ВІДПРАВИТИ
        </button>
      </form>
    </>
  );
};
export default FormVisit;
