import React from "react";
import BannerContainer from "@/app/components/banner-container/BannerContainer";
import banner from "@/app/assets/images/doctors.webp";
import Image from "next/image";
import style from "./doctors.module.scss";
import globalStyle from "../styles/global.module.scss";
import Veronika from "@/app/assets/images/doctors/Veronik.webp";
import Sergiy from "@/app/assets/images/doctors/Sergiy.webp";
import Artur from "@/app/assets/images/doctors/Artur.webp";
import Iryna from "@/app/assets/images/doctors/Iryna.webp";
import IrynaProzheiko from "@/app/assets/images/doctors/Iryna-Prozheiko.webp";
import Anastasia from "@/app/assets/images/doctors/Anastasia.webp";
import IrynaAdmin from "@/app/assets/images/doctors/Iryna-admin.webp";
import ContactsInfo from "@/app/components/contacts-info/Contacts-info";
import IconCheck from "@/app/components/icon-check";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://prozheiko.kiev.ua/doctors"),
    alternates: {
      canonical: "https://prozheiko.kiev.ua/doctors",
    },
  };
}

const Page = () => {
  return (
    <>
      <BannerContainer
        image={banner}
        altDescription={"банерна картинка з персоналом клініки"}
      />
      <div className={globalStyle.wrapper}>
        <ContactsInfo />
        <section className={style.doctors}>
          <h3 className={`${globalStyle.title} ${style.doctors__title}`}>
            Наша команда
          </h3>
          <div className={style.doctors__container}>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={Sergiy}
                  alt={"Сергій Прожейко, ГОЛОВНИЙ ЛІКАР"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Вініри
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Реставрація зубів
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Протезування
                    </li>
                  </ul>
                </div>
              </div>
              <p className={style.doctor__position}>ГОЛОВНИЙ ЛІКАР</p>
              <p className={style.doctor__name}>Сергій Прожейко</p>
            </div>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={Artur}
                  alt={"Артур Бордюг, ЛІКАР-СТОМАТОЛОГ-ОРТОДОНТ"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Вирівнювіння зубів і прикусу
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Лікування дисфунцій щелепного суглобу
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Дитяча ортодонтія
                    </li>
                  </ul>
                </div>
              </div>

              <p className={style.doctor__position}>
                ЛІКАР-СТОМАТОЛОГ-ОРТОДОНТ
              </p>
              <p className={style.doctor__name}>Артур Бордюг</p>
            </div>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={Veronika}
                  alt={"Вероніка Нетребенко ,ЛІКАРКА-СТОМАТОЛОГ-ПАРОДОНТОЛОГ"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Діагностика та лікування захворювань пародонту (ясен)
                    </li>
                  </ul>
                </div>
              </div>
              <p className={style.doctor__position}>
                ЛІКАРКА-СТОМАТОЛОГ-ПАРОДОНТОЛОГ
              </p>
              <p className={style.doctor__name}>Вероніка Нетребенко</p>
            </div>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={Iryna}
                  alt={"Ірина Тутутченко, ЗУБНА ГІГІЄНІСТКА"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Професійна гігієна порожнини рота
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Відбілювання зубів
                    </li>
                  </ul>
                </div>
              </div>
              <p className={style.doctor__position}>ЗУБНА ГІГІЄНІСТКА</p>
              <p className={style.doctor__name}>Ірина Тутутченко</p>
            </div>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={IrynaProzheiko}
                  alt={"Ірина Прожейко, ОПЕРАЦІЙНИЙ ДИРЕКТОР"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Управління персоналом
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Покращення якості послуг
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Розвиток команди та саморозвиток
                    </li>
                  </ul>
                </div>
              </div>
              <p className={style.doctor__position}>ОПЕРАЦІЙНИЙ ДИРЕКТОР</p>
              <p className={style.doctor__name}>Ірина Прожейко</p>
            </div>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={Anastasia}
                  alt={"Анастасія Лопуга,АДМІНІСТРАТОР"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Прийом пацієнтів та планування записів
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Управління медичною документацією
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Забезпечення зручності пацієнтів
                    </li>
                  </ul>
                </div>
              </div>
              <p className={style.doctor__position}>АДМІНІСТРАТОР</p>
              <p className={style.doctor__name}>Анастасія Лопуга </p>
            </div>
            <div className={style.doctor__wrapper}>
              <div className={style.hover__wrapper}>
                <Image
                  loading="lazy"
                  className={style.doctor__img}
                  src={IrynaAdmin}
                  alt={"Ірина Кучеренко,АДМІНІСТРАТОР"}
                />
                <div className={style.opacity__text}>
                  <ul className={style.wrapper__opacity}>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Прийом пацієнтів та планування записів
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Управління медичною документацією
                    </li>
                    <li className={style.list__opacity}>
                      <IconCheck />
                      Забезпечення зручності пацієнтів
                    </li>
                  </ul>
                </div>
              </div>
              <p className={style.doctor__position}>АДМІНІСТРАТОР</p>
              <p className={style.doctor__name}>Ірина Кучеренко</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
