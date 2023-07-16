import React from "react";
import style from "./services.module.scss";
import global from "../styles/global.module.scss";
import Link from "next/link";

type TServiceCard = {
  title: string;
  text: string;
  price: string;
  img?: string;
  list?: string[];
};
const ServiceCard = ({ img, title, text, price, list }: TServiceCard) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt={title} />
      <div className={style.wrapper}>
        <h2 className={`${style.title} ${global.title}`}>{title}</h2>
        <p className={style.text}>{text}</p>
        {list && (
          <ul className={style.list__wrapper}>
            {list.map((listItem) => (
              <li key={listItem} className={style.list}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.icon}
                >
                  <g clipPath="url(#clip0_411_2782)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.3065 2.81968C9.19032 2.32234 7.94327 2.19913 6.75134 2.46843C5.55941 2.73773 4.48646 3.38511 3.69252 4.31402C2.89858 5.24293 2.42618 6.4036 2.34578 7.62292C2.26538 8.84225 2.58128 10.0549 3.24638 11.08C3.91147 12.1051 4.89012 12.8878 6.03636 13.3113C7.18261 13.7348 8.43504 13.7764 9.60687 13.4299C10.7787 13.0834 11.8071 12.3674 12.5388 11.3887C13.2704 10.41 13.6661 9.22099 13.6668 7.99901V7.38625C13.6668 6.83397 14.1145 6.38625 14.6668 6.38625C15.2191 6.38625 15.6668 6.83397 15.6668 7.38625V7.99959C15.6659 9.65284 15.1305 11.2621 14.1407 12.5862C13.1508 13.9104 11.7593 14.8791 10.1739 15.3478C8.58853 15.8166 6.89406 15.7603 5.34326 15.1873C3.79245 14.6144 2.4684 13.5555 1.56857 12.1686C0.668734 10.7817 0.241336 9.14101 0.350115 7.49133C0.458894 5.84166 1.09802 4.27134 2.17218 3.01458C3.24633 1.75782 4.69797 0.88195 6.31058 0.517602C7.92318 0.153254 9.61037 0.319948 11.1205 0.992824C11.625 1.2176 11.8517 1.80878 11.6269 2.31325C11.4021 2.81772 10.811 3.04446 10.3065 2.81968Z"
                      fill="#8B8D92"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3734 1.95953C15.7641 2.34986 15.7645 2.98303 15.3741 3.37375L8.70746 10.0471C8.51996 10.2348 8.26555 10.3403 8.00025 10.3403C7.73495 10.3404 7.48049 10.235 7.29289 10.0474L5.29289 8.04743C4.90237 7.65691 4.90237 7.02374 5.29289 6.63322C5.68342 6.24269 6.31658 6.24269 6.70711 6.63322L7.99965 7.92576L13.9592 1.96024C14.3495 1.56952 14.9827 1.5692 15.3734 1.95953Z"
                      fill="#8B8D92"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_411_2782">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {listItem}
              </li>
            ))}
          </ul>
        )}
        <div className={style.btn__container}>
          <Link href={"#"}>
            <button className={`${style.btn} ${global.button}`}>
              ДІЗНАТИСЬ БІЛЬШЕ
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
          <div className={style.price}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
