import React from "react";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BlogList from "@/app/blog/BlogList";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import Blog from "../assets/images/blog.webp";
import style from "./blog-list.module.scss";
import img1 from "../assets/services/Rectangle 25.png";
import img2 from "../assets/services/Rectangle 26.png";
import img3 from "../assets/services/Rectangle28.png";
import img4 from "../assets/services/Rectangle29.png";

const Page = () => {
  const arr = [
    {
      title: "Консультація та діагностика ротової порожнини",
      img: img1,
      id: "1",
      blocks: [
        { type: "subtitle", value: "subtitle" },
        { type: "paragraph", value: "paragraph" },
      ],
    },
    {
      title: "Сканування",
      img: img2,
      id: "2",

      blocks: [
        { type: "subtitle", value: "subtitle" },
        { type: "paragraph", value: "paragraph" },
      ],
    },
    {
      title: "Онлайн-консультація",
      id: "3",
      img: img3,
      blocks: [
        { type: "subtitle", value: "subtitle" },
        { type: "paragraph", value: "paragraph" },
      ],
    },
    {
      title: "title4",
      id: "4",
      img: img4,
      blocks: [
        { type: "subtitle", value: "subtitle" },
        { type: "paragraph", value: "paragraph" },
      ],
    },
  ];
  return (
    <>
      <BannerContainer image={Blog} altDescription={"Blog"} />
      <section className={style.list}>
        {arr.map((article) => (
          <div className={style.wrapper} key={article.id}>
            <img
              className={style.img}
              src={article.img.src}
              alt={article.title}
            />
            <h1 className={style.title}>{article.title}</h1>
          </div>
        ))}
        {/*<BlogList />*/}
      </section>
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
