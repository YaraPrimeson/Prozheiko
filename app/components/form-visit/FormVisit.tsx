"use client";
import React, { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/uk";
import style from "./form-visit.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";

type FormVisitProps = {
  closeModal?: () => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FormVisit = ({ closeModal }: FormVisitProps) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [communication, setCommunication] = useState("");

  const router = useRouter();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let numb = Number(e?.target?.value.replace(/\D/g, "").replace(/^7/, "8"));
    setPhone(numb as number);
  };

  const handleChangeCommunication = (event: SelectChangeEvent) => {
    setCommunication(event.target.value as string);
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
    const chat_id = "-1001915475151";
    const parse_mode = "html";
    const formattedDate = dayjs(date).locale("uk").format("D MMMM YYYY HH:mm");
    let fields = ["<b>Ім`я</b>: " + name, "<b>Номер</b>: " + phone];

    if (formattedDate !== "Invalid Date") {
      fields.push("<b>Дата</b>: " + formattedDate);
    }

    if (communication) {
      fields.push("<b>Спосіб звʼязку</b>: " + communication);
    }

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
    try {
      fetch(
        `https://api.telegram.org/bot6281889755:AAHTEiRusyy7FnFSX7xEhY_Qa_n5yTINI_0/sendMessage?chat_id=-1001915475151&parse_mode=html&text=${msg}`,
        requestOptionsPush
      )
        .then(() => {
          setName("");
          setPhone(null);
          setDate(null);
          setCommunication("");
          if (closeModal) {
            closeModal();
          }
          notifySuccess();
          router.replace("/thankyou");
        })
        .catch((e) => {
          notifyError();
        });
    } catch (e) {
      notifyError();
    }
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
        {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
        {/*  <MobileDateTimePicker*/}
        {/*    sx={{ mt: "20px" }}*/}
        {/*    disablePast={true}*/}
        {/*    ampm={false}*/}
        {/*    className={style.input}*/}
        {/*    label={"Побажання щодо часу/дати"}*/}
        {/*    value={date}*/}
        {/*    onChange={(newValue) => setDate(newValue)}*/}
        {/*  />*/}
        {/*</LocalizationProvider>*/}
        <FormControl fullWidth>
          <InputLabel className={style.label} id="communication-label">
            Спосіб звʼязку
          </InputLabel>
          <Select
            value={communication}
            onChange={handleChangeCommunication}
            input={
              <OutlinedInput
                className={style.input}
                placeholder={"Спосіб звʼязку"}
              />
            }
            MenuProps={MenuProps}
            inputProps={{
              sx: { padding: "0" },
            }}
          >
            <MenuItem value={"Передзвонити"}>Передзвонити</MenuItem>
            <MenuItem value={"Viber"}>Viber</MenuItem>
            <MenuItem value={"Телеграм"}>Телеграм</MenuItem>
          </Select>
        </FormControl>
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
