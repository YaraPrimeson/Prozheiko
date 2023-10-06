import React from "react";
import styles from "./contacts.module.scss";
import globalStyles from "../styles/global.module.scss";
import contactImg from "../assets/images/contacts.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import ContactsInfo from "@/app/components/contacts-info/Contacts-info";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/contacts"),
    title: "Стоматологія в Києві, Дружби Народів | Prozheiko Dental Studio 🦷",
    description:
      "Стоматологічна клініка в Києві, на Дружби Народів, 6Б. Телефони  ☎ (044) 38-38-532 ➤  ☎ (068) 38-38-532. Працюємо з понеділка по суботу. Записуйтесь онлайн",
    keywords:
      "стоматологія київ, стоматологія дружби народів, стоматологія центр, стоматологічна клініка київ",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/contacts",
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
      <BannerContainer image={contactImg} altDescription={"contactImg"} />
      <div className={globalStyles.wrapper}>
        <div className={styles.title__container}>
          <h1 className={globalStyles.seo__title}>
            Контакти Стоматології Прожейко
          </h1>
        </div>
        <ContactsInfo />
        <div className={styles.subtitle__container}>
          <h2 className={globalStyles.seo__title}>
            Наша Стоматологія на карті
          </h2>
        </div>
        <section className={styles.contacts}>
          <div style={{ width: "100%" }}>
            <iframe
              className={styles.google}
              width="100%"
              height="500"
              loading="lazy"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=%20%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%20%D0%94%D1%80%D1%83%D0%B6%D0%B1%D0%B8%20%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D1%96%D0%B2,%206-%D0%91,%20%D0%9A%D0%B8%D1%97%D0%B2,%2001103+(%D0%A1%D0%A2%D0%9E%D0%9C%D0%90%D0%A2%D0%9E%D0%9B%D0%9E%D0%93%D0%86%D0%A7%D0%9D%D0%90%20%D0%9A%D0%9B%D0%86%D0%9D%D0%86%D0%9A%D0%90%20PROZHEIKO%20DENTAL%20STUDIO)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <FormVisit />
        </section>
      </div>
    </>
  );
};

export default Page;
