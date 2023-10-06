"use client";
import React, { ChangeEvent, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";
import { Article } from "@prisma/client";
import { Stack, TextField } from "@mui/material";
import { IBlock } from "@/app/admin/blog/blog-create-modal";

type BlogModalBlogProps = {
  article: Article & { imageUrl?: string };
  fetchArticles: () => Promise<any>;
  setArticles: (data: any) => void;
};

const BlogModalEdit: React.FC<BlogModalBlogProps> = ({
  article,
  fetchArticles,
  setArticles,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(article);
  const [blocks, setBlocks] = useState<any>(article?.blocks ?? []);
  const [title, setTitle] = useState(article.title);
  const [urlName, setUrlName] = useState(article.urlName);
  const [seoTitle, setSeoTitle] = useState(article.seoTitle);
  const [seoDescription, setSeoDescription] = useState(article.seoDescription);
  const [seoKeywords, setSeoKeywords] = useState(article.seoKeywords);
  const [imageUrl, setImageUrl] = useState(article?.imageUrl ?? "");
  const [tag, setTag] = useState(article.tag);
  const [like, setLike] = useState<string>(article.like);
  const [dislike, setDislike] = useState<string>(article.dislike);

  const toggleEditMode = () => {
    setOpenModal(true);
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
      case "tag": {
        return setTag(value);
      }
      case "like": {
        return setLike(value);
      }
      case "dislike": {
        return setDislike(value);
      }
      default:
        return;
    }
  };
  const handleChange = (key: any, value: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
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
          id: article.id,
          title,
          imageUrl,
          urlName,
          seoTitle,
          seoDescription,
          seoKeywords,
          like,
          dislike,
          blocks,
        }),
      }).finally(() => {
        fetchArticles().then((data: any) => {
          setArticles(data.blog);
        });
      });
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={toggleEditMode} className={globalS.edit__btn}>
        Редагувати
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Редагування Статті</p>
          <div className={style.input__edit__container}>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>Тег</label>
              <input
                className={style.input}
                type="text"
                value={tag}
                name="tag"
                onChange={(e) => onChange(e)}
              />
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
              <label className={style.input__edit__label}>like</label>
              <input
                className={style.input}
                type="text"
                value={like}
                name="like"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>dislike</label>
              <input
                className={style.input}
                type="text"
                value={dislike}
                name="dislike"
                onChange={(e) => onChange(e)}
              />
            </div>
            {Array.isArray(blocks) &&
              blocks?.map((block: IBlock, index) => {
                return (
                  <div className={style.block__wrapper} key={index}>
                    <label className={style.block__label}>{block.type}</label>

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
                        disabled
                        style={{ marginTop: "15px" }}
                        className={globalS.delete__btn}
                        onClick={() => console.log(index)}
                      >
                        Видалити {block.type}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
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
    </div>
  );
};

export default BlogModalEdit;
