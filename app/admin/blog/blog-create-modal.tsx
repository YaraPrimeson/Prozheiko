"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";
import {
  FormControl,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Tag } from "@prisma/client";
import BlockList from "@/app/admin/block-list";

type BlogCreateModalProps = {
  tags: Tag[];
};

export interface IBlock {
  type: "paragraph" | "subtitle" | "list" | "img";
  value: string | [];
}

const BlogCreateModal = ({ tags }: BlogCreateModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [chooseTag, setChooseTag] = useState<string>("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [like, setLike] = useState("");
  const [dislike, setDislike] = useState("");
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [block, setBlock] = useState<IBlock | null>(null);

  const addTitle = () => {
    setBlock({ type: "subtitle", value: "" });
  };
  const addParagraph = () => {
    setBlock({ type: "paragraph", value: "" });
  };
  const addList = () => {
    setBlock({ type: "list", value: [] });
  };
  const addImage = () => {
    setBlock({ type: "img", value: "" });
  };

  const onChangeBlockValue = (e: ChangeEvent<HTMLInputElement>) => {
    setBlock((prev: any) => ({
      ...prev,
      ["value"]: e.target.value,
    }));
  };
  const onDeleteCurrentBlock = () => {
    setBlock(null);
  };

  const addToBlocks = () => {
    if (!block) return;
    setBlocks((prev: IBlock[]) => [...prev, block]);
    setBlock(null);
  };
  const toggleEditMode = () => {
    setOpenModal(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setChooseTag(event.target.value as string);
  };

  async function createNewArticle() {
    try {
      await fetch(`/api/blog`, {
        method: "POST",
        body: JSON.stringify({
          tag: chooseTag,
          title,
          imageUrl: imgUrl,
          like,
          dislike,
          blocks,
        }),
      });
      return location.reload();
    } catch (error) {
      return console.log(error);
    }
  }

  console.log(blocks);
  return (
    <div>
      <div onClick={toggleEditMode} className={globalS.btn__create__container}>
        <button className={globalS.btn__create}>Create article</button>
      </div>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
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
            {blocks &&
              blocks?.map((block, index) => {
                console.log(block);
                if (block.type === "list")
                  return <div key={index}>{block?.value}</div>;
                else {
                  return <div key={index}>{block?.value}</div>;
                }
              })}
            {block && (
              <BlockList
                block={block}
                addToBlocks={addToBlocks}
                onChange={onChangeBlockValue}
                onDeleteCurrentBlock={onDeleteCurrentBlock}
              />
            )}
            {!block && (
              <>
                <button onClick={addTitle}>add subtitle</button>
                <button onClick={addParagraph}>add paragraph</button>
                <button onClick={addList}>add list</button>
                <button onClick={addImage}>add img</button>
              </>
            )}
          </div>
          <div className={style.btn__wrapper}>
            <button onClick={createNewArticle} className={globalS.btn__create}>
              Create
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className={globalS.cancel__btn}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default BlogCreateModal;
