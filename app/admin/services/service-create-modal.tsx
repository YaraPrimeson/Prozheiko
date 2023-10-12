"use client";
import React, { ChangeEvent, useMemo, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "../blog/blog.module.scss";
import {
  FormControl,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { Tag } from "@prisma/client";
import { IBlock } from "@/app/admin/blog/blog-create-modal";
import BlockList from "@/app/admin/block-list";

type ServiceCreateModalProps = {
  tags: Tag[];
  fetchServices: () => Promise<any>;
  setServices: (data: any) => void;
};
const ServiceCreateModal = ({
  tags,
  fetchServices,
  setServices,
}: ServiceCreateModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [chooseTag, setChooseTag] = useState<string>("");
  const [title, setTitle] = useState("");
  const [urlName, setUrlName] = useState<string>("");
  const [seoTitle, setSeoTitle] = useState<string>("");
  const [seoDescription, setSeoDescription] = useState<string>("");
  const [seoKeywords, setSeoKeywords] = useState<string>("");
  const [imgUrl, setImgUrl] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [list, setList] = useState<string[]>([]);
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

  const onChangeList = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedList = Array.isArray(list) && [...(list || [])];

    if (!updatedList) return;
    updatedList[index] = e.target.value;

    setList(updatedList);
  };
  const deleteListItem = (indexValue: number) => {
    setList(list.filter((_: string, index: number) => index !== indexValue));
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
  const deleteCurrentListItemBlock = (indexValue: number) => {
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

  async function createNewService() {
    try {
      await fetch(`/api/services`, {
        method: "POST",
        body: JSON.stringify({
          tag: chooseTag,
          title,
          list,
          text,
          price,
          imageUrl: imgUrl,
          blocks,
        }),
      }).finally(() => {
        fetchServices().then((data: any) => {
          setServices(data.services);
        });
      });
      setOpenModal(false);
      setChooseTag("");
      setTitle("");
      setUrlName("");
      setSeoTitle("");
      setSeoDescription("");
      setSeoKeywords("");
      setImgUrl("");
      setPrice("");
      setBlocks([]);
      setBlock(null);
    } catch (error) {
      return console.log(error);
    }
  }

  const isDisabled = useMemo(
    () =>
      !Boolean(chooseTag) ||
      !Boolean(title) ||
      !Boolean(imgUrl) ||
      !Boolean(text) ||
      !Boolean(urlName) ||
      !Boolean(seoTitle) ||
      !Boolean(seoDescription) ||
      !Boolean(seoKeywords) ||
      !Boolean(price),
    [chooseTag, title, imgUrl, text, price]
  );

  return (
    <div>
      <div onClick={toggleEditMode} className={globalS.btn__create__container}>
        <button className={globalS.btn__create}>Створити послугу</button>
      </div>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={style.title}>Створення нової послуги</p>
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
              <label>seo Заголовок(h1)</label>
              <input
                className={style.input}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                name="title"
                placeholder="Заголовок"
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
              <label>Посилання на картинку</label>
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
              <label>Текст</label>
              <input
                className={style.input}
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                name="text"
                placeholder="Додати текст"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>Ціна</label>
              <input
                className={style.input}
                type="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name="price"
                placeholder="Додати ціну"
              />
            </div>
            <div>
              {Array.isArray(list) &&
                list.map((list: string, index: number) => {
                  return (
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap="10px"
                      sx={{ m: "20px 0" }}
                      key={index}
                    >
                      <input
                        className={style.input}
                        placeholder={"list"}
                        style={{ margin: "0" }}
                        value={list as string}
                        onChange={(e) => onChangeList(e, index)}
                      />
                      <button
                        className={globalS.delete__btn}
                        onClick={() => deleteListItem(index)}
                      >
                        Видалити
                      </button>
                    </Stack>
                  );
                })}
              <button
                onClick={() => setList((prev) => [...prev, ""])}
                className={globalS.edit__btn}
              >
                Додати список
              </button>
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
                deleteCurrentListItem={deleteCurrentListItemBlock}
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
              disabled={isDisabled}
              onClick={createNewService}
              className={globalS.btn__create}
            >
              Створити
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className={globalS.cancel__btn}
            >
              Скасувати
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default ServiceCreateModal;
