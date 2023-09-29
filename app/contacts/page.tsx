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
    title: "Запис до стоматолога у Prozheiko Dental Studio 🦷",
    description:
      "Записатися до стоматолога у Prozheiko Dental Studio можна онлайн або за номером телефону. Детальніше за ☎ (044) 38-38-532 Заплануйте свій візит на зручний час.",
    keywords:
      "записатися до стоматолога, стоматолог запис Київ, записатися до стоматолога у Києві",
    alternates: {
      canonical: "https://prozheiko.kiev.ua/contacts",
    },
  };
}

const Page = () => {
  return (
    <>
      <BannerContainer image={contactImg} altDescription={"contactImg"} />
      <div className={globalStyles.wrapper}>
        <ContactsInfo />
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
