import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./clinic.module.scss";
import globalStyles from "../styles/global.module.scss";
import Comment from "@/app/components/comment/Comment";
import banner from "../assets/images/clinic.webp";
import Image from "next/image";
import doctors from "../assets/images/doctors-mini.webp";
import philosophy from "../assets/images/philosophy-of-dentistry.webp";
import CommentContainer from "@/app/components/comment/CommentContainer";

const Page = () => {
  return (
    <>
      <BannerContainer
        image={banner}
        altDescription={"банерна картинка з підписом (про клініку)"}
      />
      <div className={style.container}>
        <section className={style.history}>
          <div className={style.history__wrapper}>
            <div className={style.text__wrapper}>
              <h3 className={globalStyles.title}>Історія заснування клініки</h3>
              <p className={globalStyles.text}>
                В травні 2011 року була заснована студія PROZHEIKO dental
                studio, яка складалася з невеликої команди з великим бажанням
                надання якісних стоматологічних послуг. Згодом в вересні 2015
                року на бульварі Дружби Народів відкрилася повноцінна Авторська
                стоматологія PROZHEIKO dental studio.
              </p>
              <p className={globalStyles.text}>
                Процес вдосконалення та покращення роботи клініки не зупиняється
                – ознайомлення з передовими технологіями та останніми
                дослідженнями в сфері стоматології, постійне навчання та
                вдосконалення професійних навичок лікарів клініки, використання
                передових технологій та сертифікованих матеріалів – все це дає
                змогу надавати послуги високої якості.
              </p>
            </div>
            <Image
              className={style.img__doctors}
              src={doctors}
              alt={"doctors"}
            />
          </div>
          <p className={globalStyles.text}>
            Наш принцип роботи заключається в Комплексному лікуванні пацієнтів з
            залученням вузькопрофільних лікарів: після повної діагностики
            порожнини роту на основі огляду та додаткових досліджень, команда
            лікарів складає План лікування пацієнта. Саме це дає змогу нашій
            команді надавати послуги високої якості та гарантувати нашим
            пацієнтам бездоганну та здорову посмішку.
          </p>
        </section>
        <section className={style.philosophy}>
          <Image
            className={style.philosophy__img}
            src={philosophy}
            alt={"Філософія нашої стоматології"}
          />
          <div className={style.philosophy__text__wrapper}>
            <h3 className={globalStyles.title}>Філософія нашої стоматології</h3>
            <p className={globalStyles.text}>
              Не просто працювати, а творити - чесно та з професіоналізмом. Чому
              творити? Тому що ми розглядаємо стоматологію, як мистецтво, саме
              тому ми являємось Авторською стоматологією. За мету в своїй
              роботі, ми ставимо ціль - якісно лікувати наших пацієнтів,
              використовуючи свої знання, досвід, найкраще обладнання та
              натхнення.
            </p>
            <button className={globalStyles.button}>
              ЗАПЛАНУВАТИ ВІЗИТ ДО КЛІНІКИ
              <svg
                style={{ marginLeft: "10px" }}
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.03961 8.54688L5.09168 5.03125L1.03961 1.51562"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <section className={style.doctors}>
          <h3 className={style.doctors__title}>Лікарі</h3>
          <div className={style.doctor__wrapper}>
            <Image
              className={style.doctor__img}
              src={philosophy}
              alt={"Філософія нашої стоматології"}
            />
            <p className={style.doctor__position}></p>
            <p className={style.doctor__name}></p>
          </div>
        </section>
        <section className={style.comments}>
          <div className={style.comments__wrapper}>
            <h4 className={style.comments__title}>Відгуки</h4>
            <CommentContainer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
