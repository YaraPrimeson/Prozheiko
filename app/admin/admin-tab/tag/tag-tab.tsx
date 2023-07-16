"use client";
import React, {
  ChangeEvent,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { AppContext } from "@/app/context/Context";
import ModalContainer from "@/app/components/modal/ModalContainer";
import style from "./tag.module.scss";
import { Button } from "@mui/material";

const TagTab = () => {
  const { getAllTags, tags, deleteTag, editTag, createTag } =
    useContext(AppContext);

  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [currentTagInput, setCurrentTagInput] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentTagInput(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenEdit = (id: string, tag: any) => {
    setOpenEdit(true);
    setCurrentTagInput(tag);
    setCurrentTag(id);
  };
  const handleOpenDelete = (id: string) => {
    setOpenDelete(true);
    setCurrentTag(id);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentTag("");
    setCurrentTagInput("");
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
    setCurrentTag("");
    setCurrentTagInput("");
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setCurrentTag("");
    setCurrentTagInput("");
  };
  const handleCreateTag = () => {
    // createTag(currentTagInput);
    handleClose();
  };
  const handleEditTag = () => {
    // editTag(currentTag, currentTagInput);
    handleCloseEdit();
  };
  // const handleDeleteTag = () => {
  //   deleteTag(currentTag);
  //   handleCloseDelete();
  // };
  useLayoutEffect(() => {
    getAllTags();
  }, []);

  return (
    <div className={style.container}>
      <button className={style.btn} onClick={handleOpen}>
        Створити новий тег
      </button>
      <div className={style.tags__container}>
        {tags?.map((tag: { _id: string; tag: string }) => (
          <div key={tag?._id} className={style.tag__wrapper}>
            <p className={style.tag__name}>{tag?.tag}</p>
            <div>
              <Button
                sx={{ cursor: "pointer", mr: "10px" }}
                color="primary"
                variant="contained"
                onClick={() => handleOpenEdit(tag._id, tag?.tag)}
              >
                edit
              </Button>
              <Button
                sx={{ cursor: "pointer" }}
                color="error"
                variant="contained"
                onClick={() => handleOpenDelete(tag._id)}
              >
                delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ModalContainer open={open} handleClose={handleClose}>
        <div className={style.modal}>
          <p className={style.modal__title}>new tag</p>
          <input
            placeholder="новий тег"
            value={currentTagInput}
            onChange={handleChangeInput}
            className={style.modal__input}
          />
          <button
            onClick={handleCreateTag}
            disabled={!currentTagInput}
            className={style.btn}
          >
            create tag
          </button>
        </div>
      </ModalContainer>
      <ModalContainer open={openEdit} handleClose={handleCloseEdit}>
        <div className={style.modal}>
          <p className={style.modal__title}>edit tag</p>
          <input
            placeholder="зміна тегу"
            value={currentTagInput}
            onChange={handleChangeInput}
            className={style.modal__input}
          />
          <button
            onClick={handleEditTag}
            disabled={!currentTagInput}
            className={style.btn}
          >
            Змінити тег
          </button>
        </div>
      </ModalContainer>
      <ModalContainer open={openDelete} handleClose={handleCloseDelete}>
        <div className={style.modal}>
          <p className={style.modal__title}>delete tag</p>
          <button
            style={{ marginTop: "20px" }}
            // onClick={handleDeleteTag}
            className={style.btn}
          >
            Видалити тег
          </button>
          <button
            style={{ marginTop: "20px" }}
            onClick={handleCloseDelete}
            className={style.btn}
          >
            Відмінити
          </button>
        </div>
      </ModalContainer>
    </div>
  );
};

export default TagTab;
