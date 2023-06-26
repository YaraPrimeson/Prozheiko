"use client";
import React, { ChangeEvent, FC, useState } from "react";
import InputMask from "react-input-mask";
import dayjs, { Dayjs } from "dayjs";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import style from "./form-visit.module.scss";
import { TextField } from "@mui/material";

const FormVisit: FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number | undefined>(undefined);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };
  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = Number(e?.target?.value.replace(/\D/g, "").replace(/^7/, "8"));
    setPhone(numb as number);
  };
  return (
    <form className={style.form}>
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
        value={phone}
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
          // renderInput={(params) => <TextField {...params} />}
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
      <button className={style.button}>ВІДПРАВИТИ</button>
    </form>
  );
};

export default FormVisit;
