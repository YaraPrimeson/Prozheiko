"use client";
import React, { ChangeEvent, useMemo, useState } from "react";
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
import { Article, Tag } from "@prisma/client";
import BlockList from "@/app/admin/block-list";
import { toast } from "react-toastify";

type BlogCreateModalProps = {
  tags: Tag[];
  fetchArticles: () => Promise<any>;
  setArticles: (data: any) => void;
};

export interface IBlock {
  type: "paragraph" | "subtitle" | "subtitleText" | "list" | "imageUrl";
  value: string | string[];
}

const BlogCreateModal = ({
  tags,
  fetchArticles,
  setArticles,
}: BlogCreateModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [chooseTag, setChooseTag] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [titleH1, setTitleH1] = useState("");
  const [urlName, setUrlName] = useState<string>("");
  const [seoTitle, setSeoTitle] = useState<string>("");
  const [seoDescription, setSeoDescription] = useState<string>("");
  const [seoKeywords, setSeoKeywords] = useState<string>("");
  const [imgUrl, setImgUrl] = useState("");
  const [like, setLike] = useState("");
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [block, setBlock] = useState<IBlock | null>(null);

  const addSubtitle = () => {
    setBlock({ type: "subtitle", value: "" });
  };
  const addParagraph = () => {
    setBlock({ type: "paragraph", value: "" });
  };
  const addSubtitleText = () => {
    setBlock({ type: "subtitleText", value: "" });
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
      if (!prevBlock) return null;
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

  const notifySuccess = () => {
    toast.success("Створення пройшло успішно", {
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

  async function createNewArticle() {
    try {
      await fetch(`/api/blog`, {
        method: "POST",
        body: JSON.stringify({
          tag: chooseTag,
          title,
          imageUrl: imgUrl,
          urlName,
          seoTitle,
          seoDescription,
          seoKeywords,
          like,
          dislike: "0",
          blocks,
          titleH1,
        }),
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Content-Type": "application/json",
        },
      }).finally(() => {
        fetchArticles().then((data: any) => {
          setArticles(data?.blog);
        });
        notifySuccess();
      });
      setOpenModal(false);
      setChooseTag("");
      setTitle("");
      setTitleH1("");
      setUrlName("");
      setSeoTitle("");
      setSeoDescription("");
      setSeoKeywords("");
      setImgUrl("");
      setLike("");
      setBlocks([]);
      setBlock(null);
    } catch (error) {
      notifyError();
      return console.log(error);
    }
  }

  const isDisabled = useMemo(
    () =>
      !Boolean(chooseTag) ||
      !Boolean(title) ||
      !Boolean(urlName) ||
      !Boolean(titleH1) ||
      !Boolean(seoTitle) ||
      !Boolean(seoDescription) ||
      !Boolean(seoKeywords) ||
      !Boolean(imgUrl),
    [
      chooseTag,
      title,
      titleH1,
      urlName,
      seoTitle,
      seoDescription,
      seoKeywords,
      imgUrl,
    ]
  );
  return (
    <div>
      <div onClick={toggleEditMode} className={globalS.btn__create__container}>
        <button className={globalS.btn__create}>Створити нову статтю</button>
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
                {tags.slice(1).map(({ tag, id }: Tag) => (
                  <MenuItem key={id} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <div className={style.input__container}>
            <div className={style.input__wrapper}>
              <label>
                Заголовок статті на загальній сторінці, відображається на
                сторінці усіх статтей
              </label>
              <input
                className={style.input}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                name="title"
                placeholder="Заголовок на загальній сторінці"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>
                seo Заголовок(h1), відображається на сторінці статті
              </label>
              <input
                className={style.input}
                onChange={(e) => setTitleH1(e.target.value)}
                type="text"
                value={titleH1}
                name="titleH1"
                placeholder="Заголовок, відображається саме на сторінці статті"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>
                URL, назва статті для пошуку(писати в єдиному регістрі та без
                пробілу)
              </label>
              <input
                className={style.input}
                onChange={(e) =>
                  setUrlName(e.target.value.trim().toLowerCase())
                }
                type="text"
                value={urlName}
                name="urlName"
                placeholder="URL"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>SEO заголовок для metadata</label>
              <input
                className={style.input}
                onChange={(e) => setSeoTitle(e.target.value)}
                type="text"
                value={seoTitle}
                name="seoTitle"
                placeholder="SEO title"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>SEO опис для metadata</label>
              <textarea
                className={style.input}
                onChange={(e) => setSeoDescription(e.target.value)}
                value={seoDescription}
                name="seoDescription"
                placeholder="SEO опис"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>SEO ключові слова для metadata</label>
              <textarea
                className={style.input}
                onChange={(e) => setSeoKeywords(e.target.value)}
                value={seoKeywords}
                name="seoKeywords"
                placeholder="SEO ключові слова"
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
                placeholder="Додати посилання на картинку"
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
                placeholder="Додати кількість лайків"
              />
            </div>
            {blocks &&
              blocks?.map((block, index) => {
                if (block.type === "list")
                  return (
                    <div key={index}>
                      <p>{block?.value}</p>
                    </div>
                  );
                else if (block.type === "subtitle") {
                  return (
                    <div key={index}>
                      <p>subtitle</p>
                      <h2>{block?.value}</h2>
                    </div>
                  );
                } else {
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
                <button
                  className={globalS.admin__btn__create}
                  onClick={addSubtitle}
                >
                  Додати підзаголовок(h2)
                </button>
                <button
                  className={globalS.admin__btn__create}
                  onClick={addSubtitleText}
                >
                  Додати підзаголовок(p)
                </button>
                <button
                  className={globalS.admin__btn__create}
                  onClick={addParagraph}
                >
                  Додати параграф
                </button>
                <button
                  className={globalS.admin__btn__create}
                  onClick={addList}
                >
                  Додати список
                </button>
                <button
                  className={globalS.admin__btn__create}
                  onClick={addImage}
                >
                  Додати посилання на картинку
                </button>
              </div>
            )}
          </div>
          <div className={style.btn__wrapper}>
            <button
              onClick={createNewArticle}
              className={globalS.btn__create}
              disabled={isDisabled}
            >
              Створити
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className={globalS.cancel__btn}
            >
              Cкасувати
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default BlogCreateModal;
