import React from "react";
import Services from "@/app/assets/images/services.webp";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import style from "./services.module.scss";
import ServiceCard from "@/app/services-and-prices/service-card";
import img1 from "../assets/services/Rectangle 25.png";
import img2 from "../assets/services/Rectangle 26.png";
import img3 from "../assets/services/Rectangle28.png";
import img4 from "../assets/services/Rectangle29.png";
import FormVisit from "@/app/components/form-visit/FormVisit";

const Page = () => {
  const arr = [
    {
      id: "4",
      title: "Консультація та діагностика ротової порожнини",
      text: "Щоденна гігієна ротової порожнини – це одна із основ здоров’я зубів та ясен. Велику роль грає також регулярне відвідування стоматолога, який може виявити проблему на ранніх етапах та своєчасно її вирішити. Не менш важливою є й професійна гігієна рота.",
      img: img1,
      price: "150₴",
    },
    {
      id: "3",
      title: "Сканування",
      text: "Цифрові технології впроваджуються в багато галузей медицини, в тому числі і в стоматологію. Все частіше в лікувальній практиці застосовується 3D візуалізація зубів , яка дає можливість лікарям в цифровому вигляді отримати тривимірну модель зубних рядів, щелеп та кісток черепа. 3D сканування дозволяє оглянути стоматологові навіть важкодоступні зони в ротовій порожнині.",
      img: img2,
      price: "200₴",
      list: ["text1", "text2", "text3", "text4", "text5", "text6"],
    },
    {
      id: "2",

      title: "Онлайн-консультація",
      text:
        "Якщо Ви вже маєте план лікування, отриманий в іншій клініці, один з наших фахівців ознайомиться з ним і дасть вам рекомендації на його основі в письмовому або телефонному вигляді, а також може внести в нього корективи. Адже завжди краще мати кілька поглядів на проблему, щоб вибрати найкращий з існуючих варіантів.\n" +
        "\n" +
        "Як проходить онлайн-консультація стоматолога:",
      img: img3,
      price: "30000₴",
      list: [
        "Узгоджуємо дату та час консультації",
        "Ви відправляєте лікарю всю наявну інформацію та скарги",
        "За 10-15 хвилин підтверджуємо консультацію",
        "Тривалість консультації близько 15 хвилин",
        "Лікар зв’язується з Вами і проводить первинну консультацію",
        "Після консультації Ви можете запланувати візит в зручний для Вас час",
      ],
    },
    {
      id: "1",
      title: "Професійна гігієна порожнини рота",
      text: "Професійна гігієна порожнини рота – це комплекс заходів, що спрямований на зняття зубних відкладень (зубного каменю і нальоту), полірування і ремінералізацію зубів. Це необхідна процедура, яка проводиться регулярно всім пацієнтам стоматологічної клініки.",
      img: img4,
      price: "1400₴",
      list: [
        "Зняття зубного каменю",
        "Зняття м’якого зубного нальоту",
        "Зняття пігментованого зубного нальоту",
        "Полірування зубної емалі після чистки",
      ],
    },
  ];
  return (
    <>
      <BannerContainer
        image={Services}
        altDescription={"Services and prices"}
      />
      {/*<section>tags</section>*/}
      <section className={style.service__list}>
        {arr.map((item) => (
          <>
            <ServiceCard
              key={item.id}
              title={item.title}
              text={item.text}
              img={item.img.src}
              price={item.price}
              list={item.list}
            />
          </>
        ))}
      </section>
      <section className={style.form__wrapper}>
        <FormVisit />
      </section>
    </>
  );
};

export default Page;
