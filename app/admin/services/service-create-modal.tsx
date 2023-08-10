"use client";
import React, { ChangeEvent, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "../blog/blog.module.scss";
import {
  FormControl,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
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
  const [imgUrl, setImgUrl] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [list, setList] = useState<string[]>([]);
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
      setImgUrl("");
      setPrice("");
      setBlocks([]);
      setBlock(null);
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div>
      <div onClick={toggleEditMode} className={globalS.btn__create__container}>
        <button className={globalS.btn__create}>Create service</button>
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
              <label>text</label>
              <input
                className={style.input}
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                name="text"
                placeholder="add text"
              />
            </div>
            <div className={style.input__wrapper}>
              <label>price</label>
              <input
                className={style.input}
                type="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name="price"
                placeholder="add price"
              />
            </div>
            <div>
              {Array.isArray(list) &&
                list.map((list: string, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <input
                        className={style.input}
                        placeholder={"list"}
                        value={list as string}
                        onChange={(e) => onChangeList(e, index)}
                      />
                      <div style={{ margin: "20px 0" }}>
                        <button
                          className={globalS.delete__btn}
                          onClick={() => deleteListItem(index)}
                        >
                          delete this list
                        </button>
                      </div>
                    </React.Fragment>
                  );
                })}
              <button
                onClick={() => setList((prev) => [...prev, ""])}
                className={globalS.edit__btn}
              >
                add list
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
            <button onClick={createNewService} className={globalS.btn__create}>
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

export default ServiceCreateModal;
