"use client";
import React, { useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";
import {
  FormControl,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
} from "@mui/material";
import { Tag } from "@prisma/client";

type ServiceCreateModalProps = {
  tags: Tag[];
};
const ServiceModalCreate = ({ tags }: ServiceCreateModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [chooseTag, setChooseTag] = useState<string>("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [like, setLike] = useState("");
  const [dislike, setDislike] = useState("");
  const [listActive, setListActive] = useState(false);
  const [list, setList] = useState([]);

  const toggleEditMode = () => {
    setOpenModal(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setChooseTag(event.target.value as string);
  };
  return (
    <div>
      <div onClick={toggleEditMode} className={globalS.btn__create__container}>
        <button className={globalS.btn__create}>Create article</button>
      </div>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          {/*  list   String[] blocks  Json*/}
          <p className={style.title}>Створення нової статті</p>
          <Box>
            <FormControl fullWidth>
              <p style={{ marginBottom: "10px" }}>Оберіть тег</p>
              <Select
                value={chooseTag}
                onChange={handleChange}
                sx={{
                  border: "1px solid black",
                  borderRadius: "12px",
                }}
              >
                {tags.map(({ tag, id }: Tag) => (
                  <MenuItem key={id} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <div className={style.input__container}>
            <div className={style.input__wrapper}>
              <label htmlFor="title">title</label>
              <input
                className={style.input}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                name="title"
                placeholder="add title"
              />
            </div>
            <div className={style.input__wrapper}>
              <label htmlFor="image">image url</label>
              <input
                className={style.input}
                onChange={(e) => setImgUrl(e.target.value)}
                type="text"
                value={imgUrl}
                name="image"
                placeholder="add image url"
              />
            </div>

            <div className={style.input__wrapper}>
              <label htmlFor="like">like</label>
              <input
                className={style.input}
                type="number"
                onChange={(e) => setLike(e.target.value)}
                value={like}
                name="like"
                placeholder="add count like"
              />
            </div>
            <div className={style.input__wrapper}>
              <label htmlFor="dislike">dislike</label>
              <input
                className={style.input}
                type="number"
                onChange={(e) => setDislike(e.target.value)}
                value={dislike}
                name="dislike"
                placeholder="add count dislike"
              />
            </div>
            <div>
              {listActive && (
                <div className={style.input__wrapper}>
                  <label htmlFor="list">list</label>
                  <input
                    className={style.input}
                    type="text"
                    name="list"
                    placeholder="add list"
                  />
                </div>
              )}
              <button
                className={
                  !listActive
                    ? `${globalS.edit__btn}`
                    : `${globalS.delete__btn}`
                }
                onClick={() => setListActive(!listActive)}
              >
                {!listActive ? "add list" : "delete list"}
              </button>
            </div>
          </div>
          <div className={style.btn__wrapper}>
            <button className={globalS.btn__create}>Create</button>
            <button className={globalS.cancel__btn}>Cancel</button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default ServiceModalCreate;
