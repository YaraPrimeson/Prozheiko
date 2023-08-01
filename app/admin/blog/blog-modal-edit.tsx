"use client";
import React, { ChangeEvent, useState } from "react";
import ModalContainer from "@/app/components/modal/ModalContainer";
import globalS from "@/app/styles/global.module.scss";
import style from "./blog.module.scss";
import { Article } from "@prisma/client";

type BlogModalBlogProps = {
  article: Article & { imageUrl?: string };
};

const BlogModalEdit: React.FC<BlogModalBlogProps> = ({ article }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(article);
  // const [blocks, setBlocks] = useState(article?.blocks);
  const [title, setTitle] = useState(article.title);
  const [imageUrl, setImageUrl] = useState(article?.imageUrl ?? "");
  const [tag, setTag] = useState(article.tag);
  const [like, setLike] = useState(article.like);
  const [dislike, setDislike] = useState(article.dislike);

  const toggleEditMode = () => {
    setOpenModal(true);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title": {
        return setTitle(value);
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
  const editArticle = async () => {
    try {
      await fetch(`/api/blog`, {
        method: "PATCH",
        body: JSON.stringify(article),
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={toggleEditMode} className={globalS.edit__btn}>
        Edit
      </button>
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div className={style.modal__container}>
          <p className={globalS.title}>Редагування Статті</p>
          <div className={style.input__edit__container}>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>tag</label>
              <input
                className={style.input}
                type="text"
                value={tag}
                name="tag"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>title</label>
              <input
                className={style.input}
                type="text"
                value={title}
                name="title"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className={style.input__edit__wrapper}>
              <label className={style.input__edit__label}>imageUrl</label>
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
            {Array.isArray(article?.blocks) &&
              article?.blocks?.map((block: any, index) => {
                return (
                  <div key={index}>
                    <label>{block.type}</label>
                    {Array.isArray(block.value) ? (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {block?.value.map((list: any) => {
                          return (
                            <input
                              className={style.input}
                              key={list}
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
                      <input
                        className={style.input}
                        type="text"
                        value={block.value}
                        onChange={(e) =>
                          handleChange(
                            index,
                            e.target.type === "number"
                              ? parseInt(e.target.value)
                              : e.target.value
                          )
                        }
                      />
                    )}
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
