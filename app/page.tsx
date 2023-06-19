import style from "./page.module.css";
import Slider from "@/app/components/slider/Slider";
import ServicesCard from "@/app/components/services-card/ServicesCard";
import Image from "next/image";
import dentalCare from "./assets/images/dental-care.png";
import doctors from "./assets/images/doctors-mini.webp";
import emergencyDentalCare from "./assets/images/emergency-dental-care.webp";
import FormVisit from "@/app/components/form-visit/FormVisit";
import Comment from "@/app/components/comment/Comment";

export default function Home() {
  return (
    <>
      <Slider />
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
            <li className={style.service__info__list}>
              <p className={style.service__info__subtitle}>
                Записатись на візит
              </p>
              <div className={style.info__body__wrapper}>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_411_1018)">
                    <path
                      d="M50 44.4453C50 45.9187 49.4147 47.3318 48.3728 48.3737C47.3309 49.4156 45.9179 50.0009 44.4444 50.0009H5.55556C4.08213 50.0009 2.66905 49.4156 1.62718 48.3737C0.585316 47.3318 0 45.9187 0 44.4453V12.5009C0 11.0274 0.585316 9.61437 1.62718 8.5725C2.66905 7.53063 4.08213 6.94531 5.55556 6.94531H44.4444C45.9179 6.94531 47.3309 7.53063 48.3728 8.5725C49.4147 9.61437 50 11.0274 50 12.5009V44.4453Z"
                      fill="#E0E7EC"
                    />
                    <path
                      d="M32.8569 26.556H24.8194C23.125 26.556 22.4958 25.4574 22.4958 24.3893C22.4958 23.2907 23.0917 22.2227 24.8194 22.2227H36.1861C37.7889 22.2227 38.4472 23.6671 38.4472 24.4838C38.4472 25.1115 38.1014 25.7713 37.725 26.556L29.9375 42.3824C29.0583 44.1407 28.7125 44.7671 27.3 44.7671C25.5722 44.7671 24.6931 43.449 24.6931 42.5379C24.6931 42.1615 24.7875 41.8796 25.0069 41.4393L32.8569 26.556ZM15.1236 26.3893H14.4292C12.9222 26.3893 12.2931 25.374 12.2931 24.306C12.2931 23.206 13.0778 22.2227 14.4292 22.2227H17.2278C18.5778 22.2227 19.3319 23.1963 19.3319 24.4518V42.3199C19.3319 43.8893 18.5569 44.7685 17.2069 44.7685C15.8569 44.7685 15.1236 43.8893 15.1236 42.3199V26.3893Z"
                      fill="#66757F"
                    />
                    <path
                      d="M47.2222 0H42.6708C42.9097 0.409722 43.0556 0.880556 43.0556 1.38889C43.0556 2.1256 42.7629 2.83214 42.242 3.35307C41.721 3.87401 41.0145 4.16667 40.2778 4.16667C39.5411 4.16667 38.8345 3.87401 38.3136 3.35307C37.7927 2.83214 37.5 2.1256 37.5 1.38889C37.5 0.880556 37.6458 0.409722 37.8847 0H12.1153C12.3542 0.409722 12.5 0.880556 12.5 1.38889C12.5 2.1256 12.2073 2.83214 11.6864 3.35307C11.1655 3.87401 10.4589 4.16667 9.72222 4.16667C8.98551 4.16667 8.27897 3.87401 7.75804 3.35307C7.2371 2.83214 6.94444 2.1256 6.94444 1.38889C6.94444 0.880556 7.09028 0.409722 7.32917 0H2.77778C2.04107 0 1.33453 0.292658 0.813592 0.813592C0.292658 1.33453 0 2.04107 0 2.77778L0 18.0556H50V2.77778C50 2.04107 49.7073 1.33453 49.1864 0.813592C48.6655 0.292658 47.9589 0 47.2222 0Z"
                      fill="#12979B"
                    />
                    <path
                      d="M18.3083 6.39388C18.3083 5.69944 18.7528 5.31055 19.35 5.31055C19.9458 5.31055 20.3903 5.69944 20.3903 6.39388V13.3619H22.8611C23.5694 13.3619 23.875 13.8897 23.8611 14.3619C23.8464 14.6147 23.7337 14.8517 23.5469 15.0226C23.3602 15.1935 23.1141 15.2849 22.8611 15.2772H19.3917C18.7111 15.2772 18.3083 14.8342 18.3083 14.1397V6.39388ZM8.71111 6.39388C8.71111 5.69944 9.15555 5.31055 9.75278 5.31055C10.35 5.31055 10.7944 5.69944 10.7944 6.39388V11.2383C10.7944 12.5161 11.6125 13.5286 12.9319 13.5286C14.1944 13.5286 15.0556 12.4605 15.0556 11.2383V6.39388C15.0556 5.69944 15.4986 5.31055 16.0958 5.31055C16.6931 5.31055 17.1375 5.69944 17.1375 6.39388V11.3494C17.1375 13.6814 15.2208 15.4453 12.9319 15.4453C10.6139 15.4453 8.71111 13.7092 8.71111 11.3494V6.39388ZM7.625 12.5008C7.625 14.8328 6.14028 15.4439 4.87639 15.4439C3.91944 15.4439 2.32222 15.0689 2.32222 13.8605C2.32222 13.4869 2.64167 13.0147 3.1 13.0147C3.65556 13.0147 4.14167 13.5286 4.76528 13.5286C5.54305 13.5286 5.54305 12.8064 5.54305 12.3619V6.39388C5.54305 5.69944 5.9875 5.31055 6.58333 5.31055C7.18194 5.31055 7.625 5.69944 7.625 6.39388V12.5008Z"
                      fill="#F5F8FA"
                    />
                    <path
                      d="M44.4444 13.8895C44.4444 14.2579 44.5908 14.6112 44.8512 14.8716C45.1117 15.1321 45.465 15.2784 45.8333 15.2784C46.2017 15.2784 46.555 15.1321 46.8154 14.8716C47.0759 14.6112 47.2222 14.2579 47.2222 13.8895C47.2222 13.5212 47.0759 13.1679 46.8154 12.9074C46.555 12.647 46.2017 12.5007 45.8333 12.5007C45.465 12.5007 45.1117 12.647 44.8512 12.9074C44.5908 13.1679 44.4444 13.5212 44.4444 13.8895ZM44.4444 9.72287C44.4444 10.0912 44.5908 10.4445 44.8512 10.705C45.1117 10.9654 45.465 11.1118 45.8333 11.1118C46.2017 11.1118 46.555 10.9654 46.8154 10.705C47.0759 10.4445 47.2222 10.0912 47.2222 9.72287C47.2222 9.35452 47.0759 9.00125 46.8154 8.74078C46.555 8.48031 46.2017 8.33398 45.8333 8.33398C45.465 8.33398 45.1117 8.48031 44.8512 8.74078C44.5908 9.00125 44.4444 9.35452 44.4444 9.72287ZM40.2778 13.8895C40.2778 14.2579 40.4241 14.6112 40.6846 14.8716C40.945 15.1321 41.2983 15.2784 41.6667 15.2784C42.035 15.2784 42.3883 15.1321 42.6488 14.8716C42.9092 14.6112 43.0556 14.2579 43.0556 13.8895C43.0556 13.5212 42.9092 13.1679 42.6488 12.9074C42.3883 12.647 42.035 12.5007 41.6667 12.5007C41.2983 12.5007 40.945 12.647 40.6846 12.9074C40.4241 13.1679 40.2778 13.5212 40.2778 13.8895ZM40.2778 9.72287C40.2778 10.0912 40.4241 10.4445 40.6846 10.705C40.945 10.9654 41.2983 11.1118 41.6667 11.1118C42.035 11.1118 42.3883 10.9654 42.6488 10.705C42.9092 10.4445 43.0556 10.0912 43.0556 9.72287C43.0556 9.35452 42.9092 9.00125 42.6488 8.74078C42.3883 8.48031 42.035 8.33398 41.6667 8.33398C41.2983 8.33398 40.945 8.48031 40.6846 8.74078C40.4241 9.00125 40.2778 9.35452 40.2778 9.72287ZM36.1111 13.8895C36.1111 14.2579 36.2574 14.6112 36.5179 14.8716C36.7784 15.1321 37.1316 15.2784 37.5 15.2784C37.8684 15.2784 38.2216 15.1321 38.4821 14.8716C38.7426 14.6112 38.8889 14.2579 38.8889 13.8895C38.8889 13.5212 38.7426 13.1679 38.4821 12.9074C38.2216 12.647 37.8684 12.5007 37.5 12.5007C37.1316 12.5007 36.7784 12.647 36.5179 12.9074C36.2574 13.1679 36.1111 13.5212 36.1111 13.8895ZM36.1111 9.72287C36.1111 10.0912 36.2574 10.4445 36.5179 10.705C36.7784 10.9654 37.1316 11.1118 37.5 11.1118C37.8684 11.1118 38.2216 10.9654 38.4821 10.705C38.7426 10.4445 38.8889 10.0912 38.8889 9.72287C38.8889 9.35452 38.7426 9.00125 38.4821 8.74078C38.2216 8.48031 37.8684 8.33398 37.5 8.33398C37.1316 8.33398 36.7784 8.48031 36.5179 8.74078C36.2574 9.00125 36.1111 9.35452 36.1111 9.72287ZM31.9444 9.72287C31.9444 10.0912 32.0908 10.4445 32.3512 10.705C32.6117 10.9654 32.965 11.1118 33.3333 11.1118C33.7017 11.1118 34.055 10.9654 34.3154 10.705C34.5759 10.4445 34.7222 10.0912 34.7222 9.72287C34.7222 9.35452 34.5759 9.00125 34.3154 8.74078C34.055 8.48031 33.7017 8.33398 33.3333 8.33398C32.965 8.33398 32.6117 8.48031 32.3512 8.74078C32.0908 9.00125 31.9444 9.35452 31.9444 9.72287ZM31.9444 13.8895C31.9444 14.2579 32.0908 14.6112 32.3512 14.8716C32.6117 15.1321 32.965 15.2784 33.3333 15.2784C33.7017 15.2784 34.055 15.1321 34.3154 14.8716C34.5759 14.6112 34.7222 14.2579 34.7222 13.8895C34.7222 13.5212 34.5759 13.1679 34.3154 12.9074C34.055 12.647 33.7017 12.5007 33.3333 12.5007C32.965 12.5007 32.6117 12.647 32.3512 12.9074C32.0908 13.1679 31.9444 13.5212 31.9444 13.8895Z"
                      fill="#F4ABBA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_411_1018">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={style.info__text__container}>
                  <p className={style.info__body__text}>
                    Всі види стоматологічної
                  </p>
                  <p className={style.info__body__text}>
                    допомоги від найкращих лікарів
                  </p>
                </div>
              </div>
            </li>
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
                    href="tel:+38 (068) 38-38-532"
                  >
                    +38 (068) 38-38-532
                  </a>
                </div>{" "}
              </div>
            </li>
          </ul>
        </section>
        <section className={style.dental__care}>
          <div className={style.dental__care__img__wrapper}>
            <Image
              className={style.dental__care__img}
              src={dentalCare}
              alt={"приклад огляду ротової порожнини"}
            />
          </div>
          <div className={style.dental__care__text__wrapper}>
            <h3 className={style.dental__care__title}>Всі види</h3>
            <h3 className={style.dental__care__title}>
              стоматологічної допомоги
            </h3>
            <p className={style.dental__care__text}>
              Стоматологія Dental Studio Prozheiko працює у місті Київ з 2013
              року. За такий тривалий час свої посмішки нам довірило безліч
              пацієнтів! Ми пропонуємо комплекс послуг для лікування та
              покращення зовнішнього вигляду зубів у комфортній атмосфері!
            </p>
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
          </div>
        </section>
        <ServicesCard />
        <section className={style.about}>
          <div className={style.about__text__container}>
            <h3 className={style.about__title}>Про нас</h3>
            <p className={style.about__text}>
              Стоматологічна клініка Dental Studio Prozheiko працює під
              керівництвом Сергія Прожейко. У сфері стоматології він – більше 12
              років, починав свою кар’єру в якості зубного техніка та асистента
              стоматолога. Після закінчення навчання в Національному
              університеті імені А. А. Богомольця та Військово-медичній Академії
              стажувався у найкращих українських та закордонних спеціалістів.
            </p>
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
          </div>
          <div className={style.about__img__container}>
            <Image
              className={style.about__img}
              src={doctors}
              alt={"фотографія лікарів"}
            />
          </div>
        </section>
        <section className={style.emergency}>
          <div className={style.emergency__wrapper}>
            <Image
              src={emergencyDentalCare}
              className={style.emergency__image}
              alt="приклад фотографія 3D знімку щелепи"
            />
            <div className={style.emergency__text__wrapper}>
              <h3 className={style.emergency__title}>
                Швидка стоматологічна допомога
              </h3>
              <p className={style.emergency__text}>
                Приватна стоматологія Dental Studio Prozheiko, окрім
                стандартного переліку послуг, пропонує і екстрену допомогу. Як
                правило, потреба в ній виникає несподівано – момент не можна
                передбачити заздалегідь.
                <br />
                Найчастішими причинами звернення за екстреною стоматологічною
                допомогою є:
              </p>
              <p className={style.emergency__text}>
                1. Ускладнення через пародонтит, що загрожує виникненням
                абсцесу. Чим швидше ви звернулися до лікаря, тим краще – це
                допоможе зберегти зуб. Інакше його можна втратити.
              </p>
              <p className={style.emergency__text}>
                2. Вивих зуба – у цьому випадку опинитись у стоматологічному
                кріслі варто в першу ж годину. Тоді можна уникнути втрати зуба,
                він зможе прижитися знову.
              </p>
              <p className={style.emergency__text}>
                3. Прорізування зуба мудрості – найчастіше проблема виникає,
                коли зуб росте неправильно чи не може прорізатися повноцінно.
                Тоді потрібне негайне втручання, адже біль нікуди не подінеться,
                може виникнути запалення та поява гною.{" "}
              </p>
            </div>
          </div>
          <p className={style.emergency__text}>
            4. Травма щелепи, відколовся зуб, випала пломба – у всіх цих
            випадках треба якнайшвидше звернутися до стоматолога.
            <br />
            Наша стоматологія (Київ) надає екстрену допомогу у всіх
            перерахованих вище випадках або таких, які потребують негайної
            консультації. Ми розуміємо, що подібні стани вимагають швидкого
            реагування і кваліфікованих дій спеціаліста. Прийом можливий у
            потрібний вам час: зателефонуйте нам, щоб обрати найближчі години!
          </p>
        </section>
        <section>
          <FormVisit />
        </section>
      </div>
      <section className={style.comments}>
        <div className={style.comments__wrapper}>
          <h4 className={style.comments__title}>Наші клієнти пишуть</h4>
          <div className={style.comments__card__wrapper}>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </section>
    </>
  );
}
