"use client";
import React, { ChangeEvent, useState } from "react";
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
import BlockList from "@/app/admin/block-list";

type BlogCreateModalProps = {
  tags: Tag[];
  fetchArticles: () => Promise<any>;
  setArticles: (data: any) => void;
};

export interface IBlock {
  type: "paragraph" | "subtitle" | "list" | "imageUrl";
  value: string | string[];
}

const BlogCreateModal = ({
  tags,
  fetchArticles,
  setArticles,
}: BlogCreateModalProps) => {
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
    setBlock({ type: "list", value: [""] });
  };
  const addImage = () => {
    setBlock({ type: "imageUrl", value: "" });
  };

  const onChangeBlockValue = (e: ChangeEvent<HTMLInputElement>) => {
    setBlock((prev: any) => ({
      ...prev,
      ["value"]: e.target.value,
    }));
  };
  const onChangeBlockListValue = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedList = Array.isArray(block?.value) && [
      ...(block?.value || []),
    ];

    if (!updatedList) return;
    updatedList[index] = e.target.value;

    setBlock((prevBlock: any) => {
      if (!prevBlock) return null; // Safeguard in case prevBlock is null or undefined
      return {
        ...prevBlock,
        value: updatedList,
      };
    });
  };
  const onDeleteCurrentBlock = () => {
    setBlock(null);
  };

  const addToBlocks = () => {
    if (!block) return;
    setBlocks((prev: IBlock[]) => [...prev, block]);
    setBlock(null);
  };

  const addNewListToBlock = () => {
    if (!block) return;
    setBlock((prev: any) => ({ type: prev.type, value: [...prev.value, ""] }));
  };
  const deleteCurrentListItem = (indexValue: number) => {
    setBlock((prevBlock: any) => {
      return {
        ...prevBlock,
        value: prevBlock?.value?.filter(
          (value: string, index: number) => index !== indexValue
        ),
      };
    });
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
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Content-Type": "application/json",
        },
      }).finally(() => {
        fetchArticles().then((data: any) => {
          setArticles(data.blog);
        });
      });
      setOpenModal(false);
      setChooseTag("");
      setTitle("");
      setImgUrl("");
      setLike("");
      setDislike("");
      setBlocks([]);
      setBlock(null);
    } catch (error) {
      return console.log(error);
    }
  }

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
              <label>Заголовок</label>
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
              <label>посилання на картинку</label>
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
              <label>like</label>
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
              <label>dislike</label>
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
                if (block.type === "list")
                  return <div key={index}>{block?.value}</div>;
                else {
                  return <div key={index}>{block?.value}</div>;
                }
              })}
            {block && (
              <BlockList
                block={block}
                deleteCurrentListItem={deleteCurrentListItem}
                addNewListToBlock={addNewListToBlock}
                addToBlocks={addToBlocks}
                onChange={onChangeBlockValue}
                onChangeBlockListValue={onChangeBlockListValue}
                onDeleteCurrentBlock={onDeleteCurrentBlock}
              />
            )}
            {!block && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "start",
                  gap: "20px",
                }}
              >
                <button className={globalS.btn__create} onClick={addTitle}>
                  додати Підзаголовок
                </button>
                <button className={globalS.btn__create} onClick={addParagraph}>
                  додати Параграф
                </button>
                <button className={globalS.btn__create} onClick={addList}>
                  додати Список
                </button>
                <button className={globalS.btn__create} onClick={addImage}>
                  додати Посилання на картинку
                </button>
              </div>
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
