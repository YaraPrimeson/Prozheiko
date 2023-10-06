import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./clinic.module.scss";
import globalStyles from "../styles/global.module.scss";
import banner from "../assets/images/clinic.png";
import Image from "next/image";
import doctors from "../assets/images/doctors-mini.webp";
import philosophy from "../assets/images/philosophy-of-dentistry.webp";
import Sergiy from "../assets/images/doctors/Sergiy.webp";
import Artur from "../assets/images/doctors/Artur.webp";
import Veronika from "../assets/images/doctors/Veronik.webp";
import Iryna from "../assets/images/doctors/Iryna.webp";
import CommentContainer from "@/app/components/comment/CommentContainer";
import ModalVisit from "@/app/components/modal/modal-visit";
import Link from "next/link";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/clinic"),

    title: "Стоматологічна клініка в Києві | Prozheiko Dental Studio 🦷",
    description:
      "Сучасна стоматологічна клініка в Києві. Фахівці з великим досвідом та золотими руками. Широкий спектр професійних послуг. Записуйтесь онлайн",
    keywords:
      "стоматологія, стоматологія Київ, стоматологічна клініка, стоматологія центр",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/clinic",
    },
    openGraph: {
      images:
        "https://res.cloudinary.com/djdymweyx/image/upload/v1693198657/Slider_zgsfjg.png",
    },
  };
}

const Page = () => {
  return (
    <>
      <div className={style.banner}>
        <BannerContainer
          image={banner}
          altDescription={"банерна картинка з підписом (про клініку)"}
        />
      </div>
      <div className={style.container}>
        <section className={style.history}>
          <div className={style.history__wrapper}>
            <div className={style.text__wrapper}>
              <h1 className={globalStyles.seo__title}>
                Стоматологія Прожейко: історія заснування
              </h1>
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
              loading="lazy"
              className={style.img__doctors}
              src={doctors}
              alt={"doctors"}
            />
          </div>
          <div className={style.text__wrapper__bottom}>
            <p className={globalStyles.text}>
              Наш принцип роботи заключається в Комплексному лікуванні пацієнтів
              з залученням вузькопрофільних лікарів: після повної діагностики
              порожнини роту на основі огляду та додаткових досліджень, команда
              лікарів складає План лікування пацієнта. Саме це дає змогу нашій
              команді надавати послуги високої якості та гарантувати нашим
              пацієнтам бездоганну та здорову посмішку.
            </p>
          </div>
        </section>
        <section className={style.philosophy}>
          <Image
            loading="lazy"
            className={style.philosophy__img}
            src={philosophy}
            alt={"Філософія нашої стоматології"}
          />
          <div className={style.philosophy__text__wrapper}>
            <h2 className={globalStyles.seo__subtitle}>
              Філософія нашої стоматології
            </h2>
            <p className={globalStyles.text}>
              Не просто працювати, а творити - чесно та з професіоналізмом. Чому
              творити? Тому що ми розглядаємо стоматологію, як мистецтво, саме
              тому ми являємось Авторською стоматологією. За мету в своїй
              роботі, ми ставимо ціль - якісно лікувати наших пацієнтів,
              використовуючи свої знання, досвід, найкраще обладнання та
              натхнення.
            </p>
            <ModalVisit />
          </div>
        </section>
        <section className={style.doctors}>
          <Link href={"/doctors"} className={style.doctors__link}>
            <h2 className={globalStyles.seo__subtitle}>
              Сертифіковані стоматологи Prozheiko Dental Studio
            </h2>
          </Link>
          <div className={style.doctors__container}>
            <div className={style.doctor__wrapper}>
              <Image
                loading="lazy"
                className={style.doctor__img}
                src={Sergiy}
                alt={"Сергій Прожейко, ГОЛОВНИЙ ЛІКАР"}
              />
              <p className={style.doctor__position}>ГОЛОВНИЙ ЛІКАР</p>
              <p className={style.doctor__name}>Сергій Прожейко</p>
            </div>
            <div className={style.doctor__wrapper}>
              <Image
                loading="lazy"
                className={style.doctor__img}
                src={Artur}
                alt={"Артур Бордюг, ЛІКАР-СТОМАТОЛОГ-ОРТОДОНТ"}
              />
              <p className={style.doctor__position}>
                ЛІКАР-СТОМАТОЛОГ-ОРТОДОНТ
              </p>
              <p className={style.doctor__name}>Артур Бордюг</p>
            </div>
            <div className={style.doctor__wrapper}>
              <Image
                loading="lazy"
                className={style.doctor__img}
                src={Veronika}
                alt={"Вероніка Нетребенко ,ЛІКАРКА-СТОМАТОЛОГ-ПАРОДОНТОЛОГ"}
              />
              <p className={style.doctor__position}>
                ЛІКАРКА-СТОМАТОЛОГ-ПАРОДОНТОЛОГ
              </p>
              <p className={style.doctor__name}>Вероніка Нетребенко</p>
            </div>
            <div className={style.doctor__wrapper}>
              <Image
                loading="lazy"
                className={style.doctor__img}
                src={Iryna}
                alt={"Ірина Тутутченко, ЗУБНА ГІГІЄНІСТКА"}
              />
              <p className={style.doctor__position}>ЗУБНА ГІГІЄНІСТКА</p>
              <p className={style.doctor__name}>Ірина Тутутченко</p>
            </div>
          </div>
        </section>
        <section className={style.comments}>
          <h4 className={`${globalStyles.title} ${style.comments__title}`}>
            Відгуки
          </h4>
          <CommentContainer />
        </section>
      </div>
    </>
  );
};

export default Page;
