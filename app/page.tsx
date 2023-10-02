import style from "./page.module.css";
import globalS from "./styles/global.module.scss";
import ServicesCard from "@/app/components/services-card/ServicesCard";
import Image from "next/image";
import dentalCare from "./assets/images/dental-care.png";
import doctors from "./assets/images/doctors-mini.webp";
import journey from "./assets/images/customer-journey.png";
import FormVisit from "@/app/components/form-visit/FormVisit";
import CommentContainer from "@/app/components/comment/CommentContainer";
import Link from "next/link";
import SliderSlick from "@/app/components/slider/SliderSlick";
import ModalAppointment from "@/app/components/modal-appointment/modalAppointment";

export default function Home() {
  // "@mui/icons-material": "^5.14.11",
  return (
    <>
      <SliderSlick />
      <div className={style.page}>
        <section className={style.service__info}>
          <ul className={style.service__info__wrapper}>
            <li className={style.service__info__list}>
              <p className={style.service__info__subtitle}>Робочий час</p>
              <div className={style.info__body__wrapper}>
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_411_1013)">
                    <path
                      d="M26 52C40.3594 52 52 40.3594 52 26C52 11.6406 40.3594 0 26 0C11.6406 0 0 11.6406 0 26C0 40.3594 11.6406 52 26 52Z"
                      fill="#99AAB5"
                    />
                    <path
                      d="M26 46.2218C37.1684 46.2218 46.2222 37.168 46.2222 25.9996C46.2222 14.8311 37.1684 5.77734 26 5.77734C14.8316 5.77734 5.77777 14.8311 5.77777 25.9996C5.77777 37.168 14.8316 46.2218 26 46.2218Z"
                      fill="#E1E8ED"
                    />
                    <path
                      d="M24.5555 25.9993C24.5555 26.3824 24.7077 26.7498 24.9786 27.0207C25.2495 27.2916 25.6169 27.4438 26 27.4438C26.3831 27.4438 26.7505 27.2916 27.0214 27.0207C27.2922 26.7498 27.4444 26.3824 27.4444 25.9993V10.1105C27.4444 9.72737 27.2922 9.35997 27.0214 9.08908C26.7505 8.8182 26.3831 8.66602 26 8.66602C25.6169 8.66602 25.2495 8.8182 24.9786 9.08908C24.7077 9.35997 24.5555 9.72737 24.5555 10.1105V25.9993Z"
                      fill="#66757F"
                    />
                    <path
                      d="M13.4897 18.7769C13.2981 19.1086 13.2462 19.5029 13.3454 19.8729C13.4445 20.2429 13.6866 20.5584 14.0183 20.75L25.2778 27.25C25.6094 27.4385 26.002 27.4882 26.3702 27.3883C26.7383 27.2883 27.0519 27.0469 27.2426 26.7165C27.4333 26.3862 27.4857 25.9939 27.3882 25.6251C27.2907 25.2563 27.0513 24.9411 26.7222 24.7482L15.4628 18.2482C15.131 18.0567 14.7368 18.0048 14.3667 18.1039C13.9967 18.203 13.6812 18.4451 13.4897 18.7769Z"
                      fill="#66757F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_411_1013">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={style.info__text__container}>
                  <p className={style.info__body__text}>ПН-СБ</p>
                  <p className={style.info__body__text}>9:00-21:00</p>
                </div>
              </div>
            </li>
            <ModalAppointment />
            <li className={style.service__info__list}>
              <p className={style.service__info__subtitle}>
                Екстренна допомога
              </p>
              <div className={style.info__body__wrapper}>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_411_1024)">
                    <path
                      d="M47.3055 36.676L42.45 31.8205C41.5712 30.9422 40.4706 30.3188 39.2654 30.017C38.0602 29.7151 36.7956 29.7461 35.6066 30.1065C34.4176 30.4669 33.3488 31.1432 32.514 32.0635C31.6792 32.9837 31.1099 34.1132 30.8667 35.3316C22.8597 33.8343 15.0722 26.0788 14.5875 19.1468C15.9487 18.8964 17.2015 18.2376 18.1792 17.258C19.4664 15.9705 20.1896 14.2244 20.1896 12.4038C20.1896 10.5832 19.4664 8.83709 18.1792 7.54962L13.325 2.69407C12.0375 1.40677 10.2915 0.683594 8.47082 0.683594C6.65019 0.683594 4.90412 1.40677 3.61666 2.69407C-10.9472 17.258 32.7417 60.9468 47.3055 46.383C48.5921 45.0954 49.3148 43.3497 49.3148 41.5295C49.3148 39.7093 48.5921 37.9636 47.3055 36.676Z"
                      fill="#12979B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_411_1024">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={style.info__text__container}>
                  <p className={style.info__body__text}>
                    Лінія термінової консультації
                  </p>
                  <a
                    className={style.info__body__text}
                    href="tel:+380683838532"
                  >
                    +38 (068) 38-38-532
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className={style.dental__care}>
          <div className={style.dental__care__img__wrapper}>
            <Image
              loading="lazy"
              className={style.dental__care__img}
              src={dentalCare}
              alt={"приклад огляду ротової порожнини"}
            />
          </div>
          <div className={style.dental__care__text__wrapper}>
            <h3 className={`${globalS.title} ${style.dental__care__title}`}>
              Всі види
            </h3>
            <h3 className={`${globalS.title} ${style.dental__care__title}`}>
              стоматологічної допомоги
            </h3>
            <p className={style.dental__care__text}>
              Стоматологія Dental Studio Prozheiko працює у місті Київ з 2013
              року. За такий тривалий час свої посмішки нам довірило безліч
              пацієнтів! Ми пропонуємо комплекс послуг для лікування та
              покращення зовнішнього вигляду зубів у комфортній атмосфері!
            </p>
            <Link href={"/services"} className={style.dental__care__link}>
              <button className={style.dental__care__button}>
                ДІАГНОСТИКА РОТОВОЇ ПОРОЖНИНИ
                <svg
                  style={{ marginLeft: "7px" }}
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
            </Link>
          </div>
        </section>
        <ServicesCard />
        <section className={style.about}>
          <div className={style.about__text__container}>
            <h3 className={`${globalS.title} ${style.about__title}`}>
              Про нас
            </h3>
            <p className={style.about__text}>
              Стоматологічна клініка Dental Studio Prozheiko працює під
              керівництвом Сергія Прожейко. У сфері стоматології він – більше 12
              років, починав свою кар’єру в якості зубного техніка та асистента
              стоматолога. Після закінчення навчання в Національному
              університеті імені А. А. Богомольця та Військово-медичній Академії
              стажувався у найкращих українських та закордонних спеціалістів.
            </p>
            <Link href={"/clinic"} className={style.about__clinic__link}>
              <button className={style.about__button}>
                БІЛЬШЕ
                <svg
                  style={{ marginLeft: "11px" }}
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
            </Link>
          </div>
          <div className={style.about__img__container}>
            <Image
              loading="lazy"
              className={style.about__img}
              src={doctors}
              alt={"фотографія лікарів"}
            />
          </div>
        </section>
        <section className={style.emergency}>
          <Image
            src={journey}
            loading="lazy"
            alt={"шлях клієнта"}
            className={style.emergency__image}
          />
        </section>
        <section className={style.form__container}>
          <FormVisit />
        </section>
      </div>
      <section className={style.comments}>
        <div className={style.comments__wrapper}>
          <h4 className={`${globalS.title} ${style.comments__title}`}>
            Наші клієнти пишуть
          </h4>
          <CommentContainer />
        </div>
      </section>
    </>
  );
}
