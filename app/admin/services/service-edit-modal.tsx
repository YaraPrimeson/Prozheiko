import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Service, Tag } from "@prisma/client";
import { IBlock } from "@/app/admin/blog/blog-create-modal";
import globalS from "@/app/styles/global.module.scss";
import ModalContainer from "@/app/components/modal/ModalContainer";
import style from "@/app/admin/blog/blog.module.scss";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import BlockList from "@/app/admin/block-list";
import { BlockType } from "@/app/admin/blog/blog-modal-edit";

type ServiceEditModalProps = {
  fetchServices: () => Promise<any>;
  setServices: (data: any) => void;
  service: Service;
  tags: Tag[];
};
const ServiceEditModal: FC<ServiceEditModalProps> = ({
  fetchServices,
  setServices,
  service,
  tags,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(service);
  const [blocks, setBlocks] = useState<any>(service?.blocks ?? []);
  const [title, setTitle] = useState(service.title);
  const [urlName, setUrlName] = useState(service.urlName);
  const [seoTitle, setSeoTitle] = useState(service.seoTitle);
  const [seoDescription, setSeoDescription] = useState(service.seoDescription);
  const [seoKeywords, setSeoKeywords] = useState(service.seoKeywords);
  const [imageUrl, setImageUrl] = useState(service?.imageUrl ?? "");
  const [tag, setTag] = useState(service.tag);
  const [price, setPrice] = useState<string>(service.price);
  const [block, setBlock] = useState<IBlock | null>(null);

  const toggleEditMode = () => {
    setOpenModal(true);
  };

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title": {
        return setTitle(value);
      }
      case "urlName": {
        return setUrlName(value);
      }
      case "seoTitle": {
        return setSeoTitle(value);
      }
      case "seoDescription": {
        return setSeoDescription(value);
      }
      case "seoKeywords": {
        return setSeoKeywords(value);
      }
      case "imageUrl": {
        return setImageUrl(value);
      }
      case "price": {
        return setPrice(value);
      }
      default:
        return;
    }
  };

  const handleChange = (key: number, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleChangeType = (index: number, newType: string) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index].type = newType;
    setBlocks(updatedBlocks);
  };

  const deleteBlock = (index: number) => {
    const updatedBlocks = blocks.filter((_: any, i: number) => i !== index);
    setBlocks(updatedBlocks);
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

  const updateBlock = (
    index: number,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    const updatedBlocks = [...blocks] ?? [];
    updatedBlocks[index] = { type: updatedBlocks[index].type, value: newValue };
    setBlocks(updatedBlocks);
  };

  const editArticle = async () => {
    try {
      await fetch(`/api/blog`, {
        method: "PATCH",
        body: JSON.stringify({
          id: service.id,
          title,
          imageUrl,
          urlName,
          seoTitle,
          seoDescription,
          seoKeywords,
          price,
          blocks,
        }),
      }).finally(() => {
        fetchServices().then((data: any) => {
          setServices(data.blog);
        });
      });
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setBlocks(service.blocks);
    setTitle(service.title);
    setUrlName(service.urlName);
    setSeoTitle(service.seoTitle);
    setSeoDescription(service.seoDescription);
    setSeoKeywords(service.seoKeywords);
    setImageUrl(service.imageUrl);
    setTag(service.tag);
    setPrice(service.price);
  }, []);
  return (
    <>
      <button onClick={toggleEditMode} className={globalS.edit__btn}>
        Редагувати
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Редагування Статті</p>
          <div className={style.input__edit__container}>
            <div className={style.input__edit__wrapper}>
              <FormControl fullWidth>
                <Select
                  sx={{
                    border: "1px solid",
                    borderRadius: "6px",
                  }}
                  value={tag}
                  label="Tag"
                  onChange={(event) => setTag(event.target.value)}
                >
                  {tags.slice(1).map(({ tag }, index) => (
                    <MenuItem key={index} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>Заголовок</label>
              <input
                className={style.input}
                type="text"
                value={title}
                name="title"
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>
                URL, назва статті для пошуку(писати в єдиному регістрі та без
                пробілу)
              </label>
              <input
                className={style.input}
                type="text"
                value={urlName}
                name="urlName"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>
                SEO заголовок для metadata
              </label>
              <input
                className={style.input}
                type="text"
                value={seoTitle}
                name="seoTitle"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>
                SEO опис для metadata
              </label>
              <input
                className={style.input}
                type="text"
                value={seoDescription}
                name="seoDescription"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>
                SEO ключові слова для metadata
              </label>
              <input
                className={style.input}
                type="text"
                value={seoKeywords}
                name="seoKeywords"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>
                посилання на картинку
              </label>
              <input
                className={style.input}
                type="text"
                value={imageUrl}
                name="imageUrl"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>price</label>
              <input
                className={style.input}
                type="text"
                value={price}
                name="price"
                onChange={(e) => onChange(e)}
              />
            </div>
            {Array.isArray(blocks) &&
              blocks?.map((block: IBlock, index) => {
                return (
                  <div className={style.block__wrapper} key={index}>
                    <FormControl fullWidth>
                      <Select
                        sx={{
                          border: "1px solid",
                          borderRadius: "6px",
                        }}
                        value={block.type}
                        label="Type"
                        onChange={(event) =>
                          handleChangeType(index, event.target.value)
                        }
                      >
                        {BlockType.map((type, index) => (
                          <MenuItem key={index} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {Array.isArray(block.value) ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "90%",
                        }}
                      >
                        {block?.value.map((list: string, index: number) => {
                          return (
                            <input
                              className={style.input}
                              key={index}
                              style={{ width: "100%" }}
                              type="text"
                              value={list}
                              onChange={(e) =>
                                handleChange(index, e.target.value)
                              }
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div style={{ marginTop: "20px", width: "100%" }}>
                        <TextField
                          multiline
                          sx={{ whiteSpace: "pre-wrap" }}
                          minRows={2}
                          className={style.input}
                          value={block?.value as string}
                          onChange={(e) => updateBlock(index, e)}
                        />
                      </div>
                    )}
                    <div>
                      <button
                        style={{ marginTop: "15px" }}
                        className={globalS.delete__btn}
                        onClick={() => deleteBlock(index)}
                      >
                        Видалити {block.type}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
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
                justifyContent: "start",
                gap: "20px",
                marginTop: "20px",
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
              <button className={globalS.admin__btn__create} onClick={addList}>
                Додати список
              </button>
              <button className={globalS.admin__btn__create} onClick={addImage}>
                Додати посилання на картинку
              </button>
            </div>
          )}
          <div className={style.btn__wrapper}>
            <button className={globalS.edit__btn} onClick={editArticle}>
              Редагувати
            </button>
            <button
              className={globalS.cancel__btn}
              onClick={() => setOpenModal(false)}
            >
              Відмінити
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default ServiceEditModal;
