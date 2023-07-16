import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "@/app/context/Context";
import style from "./blog.module.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import ModalContainer from "@/app/components/modal/ModalContainer";
import { ITag } from "@/app/components/tag-list/interface";
import { Upload } from "@mui/icons-material";
import UploadImage from "@/app/components/uploadImage/UploadImage";

interface IBlock {
  type: "title" | "paragraph" | "subtitle" | "list" | "img";
  value: string | File;
}

interface IBlog {
  block: IBlock[];
}

const CreateBlog = () => {
  const { getAllBlog, getAllTags, tags, createBlog } = useContext(AppContext);
  const [newBlog, setNewBlog] = useState<IBlog[]>([]);
  const [block, setBlock] = useState<IBlock | null>(null);
  const [currentInput, setCurrentInput] = useState("");
  const [tag, setTag] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const handleChange = (event: SelectChangeEvent) => {
    setTag(event.target.value as string);
  };

  const addTitle = () => {
    setBlock({ type: "title", value: "" });
  };
  const addParagraph = () => {
    setBlock({ type: "paragraph", value: "" });
  };
  const addImg = () => {};
  const addToBlog = () => {
    setNewBlog((prev: any) => [...prev, block]);
    setBlock(null);
  };
  const handleCreateBlog = () => {
    createBlog({ tag, blocks: newBlog });
    setNewBlog([]);
    setBlock(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useLayoutEffect(() => {
    getAllBlog();
    getAllTags();
  }, []);

  useEffect(() => {
    // console.log(newBlog);
  }, [newBlog]);
  return (
    <div>
      <button onClick={handleOpen} className={style.createBtn}>
        Створити нову статтю
      </button>
      <ModalContainer open={open} handleClose={handleClose}>
        <div className={style.modal__container}>
          <div className={style.tag__container}>
            <p className={style.tag__label}>Виберіть тег</p>
            <FormControl
              sx={{
                width: "300px",
                margin: "0 auto",
                border: "1px solid black",
                borderRadius: "12px",
              }}
            >
              {/*<InputLabel id="demo-simple-select-label">Tag</InputLabel>*/}
              <Select value={tag} label="Tag" onChange={handleChange}>
                {tags.map(({ tag, _id }: ITag) => (
                  <MenuItem key={_id} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={style.btn__container}>
            <button className={style.btn} onClick={addTitle}>
              Додати заголовок
            </button>
            <button className={style.btn} onClick={addTitle}>
              Додати підзаголовок
            </button>
            <button className={style.btn} onClick={addParagraph}>
              Додати параграф
            </button>
            {/*<button className={style.btn} onClick={addParagraph}>*/}
            {/*  Додати список*/}
            {/*</button>*/}
            <UploadImage />
            {/*<input*/}
            {/*  className={style.btn}*/}
            {/*  type="file"*/}
            {/*  id="avatar"*/}
            {/*  name="avatar"*/}
            {/*  accept="image/png, image/jpeg"*/}
            {/*/>*/}
            {/*<button className={style.btn}>Додати картинку</button>*/}
          </div>
          {block ? (
            block.type !== "img" ? (
              <div className="">
                {block.type === "title" ? (
                  <input
                    className={style.input}
                    type="text"
                    placeholder={"Заголовок"}
                    value={block?.value as string}
                    onChange={(e) =>
                      setBlock((prev: any) => ({
                        ...prev,
                        ["value"]: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <TextField
                    multiline
                    sx={{ whiteSpace: "pre-wrap" }}
                    minRows={2}
                    className={style.input}
                    placeholder={"Параграф"}
                    value={block?.value as string}
                    onChange={(e) =>
                      setBlock((prev: any) => ({
                        ...prev,
                        ["value"]: e.target.value,
                      }))
                    }
                  />
                )}
                <Button
                  sx={{ ml: "15px" }}
                  variant="contained"
                  color="primary"
                  disabled={!block.value}
                  onClick={addToBlog}
                >
                  add To Blog
                </Button>
              </div>
            ) : (
              <div>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={() => {
                    //
                  }}
                />
                {/*<input*/}
                {/*  type="file"*/}
                {/*  value={block?.value as "File"}*/}
                {/*  onChange={(e) =>*/}
                {/*    setBlock((prev: any) => ({*/}
                {/*      ...prev,*/}
                {/*      value: e.target.value,*/}
                {/*    }))*/}
                {/*  }*/}
                {/*/>*/}
              </div>
            )
          ) : null}
          <div className={style.create__btn__container}>
            <button className={style.btn} onClick={handleCreateBlog}>
              Створити статтю
            </button>
            <button className={style.btn} onClick={handleClose}>
              Перевірити статтю
            </button>
          </div>
        </div>
      </ModalContainer>
      {newBlog.map((blog: any) => (
        <div key={blog.value}>
          {blog.type === "title" ? (
            <h1>{blog.value}</h1>
          ) : (
            <pre>{blog.value}</pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default CreateBlog;
