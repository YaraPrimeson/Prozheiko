import React, { FC } from "react";
import style from "./comment.module.scss";
import Image from "next/image";
import stars from "../../assets/images/stars.webp";

interface CommentProps {
  text: string;
  name: string;
  nameAvatar: string;
  date: string;
}

const Comment: FC<CommentProps> = ({ text, name, nameAvatar, date }) => {
  return (
    <div className={style.comment}>
      <svg
        className={style.icon}
        width="37"
        height="28"
        viewBox="0 0 37 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.8945 27.1494C25.8867 27.1494 23.8099 26.2542 22.6641 24.4639C21.5898 22.6019 21.0527 20.346 21.0527 17.6963C21.0527 13.8291 22.0911 10.4274 24.168 7.49121C26.3164 4.55501 28.9303 2.08431 32.0098 0.0791016L34.8027 4.16113C33.9434 4.73405 32.9408 5.4502 31.7949 6.30957C30.6491 7.16895 29.6465 8.17155 28.7871 9.31738C27.9277 10.3916 27.498 11.5374 27.498 12.7549C27.498 13.2562 27.7487 13.5068 28.25 13.5068L28.8945 13.292H29.1094C31.401 13.1488 33.1556 13.7217 34.373 15.0107C35.5905 16.2998 36.1992 18.0544 36.1992 20.2744C36.1992 22.7093 35.5547 24.4639 34.2656 25.5381C32.9766 26.6123 31.1862 27.1494 28.8945 27.1494ZM8.37695 27.1494C5.36914 27.1494 3.29232 26.2542 2.14648 24.4639C1.07227 22.6019 0.535156 20.346 0.535156 17.6963C0.535156 13.8291 1.57357 10.4632 3.65039 7.59863C5.72721 4.66243 8.30534 2.15592 11.3848 0.0791016L14.2852 4.16113C13.4258 4.73405 12.4232 5.486 11.2773 6.41699C10.1315 7.27637 9.12891 8.24316 8.26953 9.31738C7.41016 10.3916 6.98047 11.5374 6.98047 12.7549C6.98047 13.2562 7.23112 13.5068 7.73242 13.5068L8.37695 13.292C10.7402 13.292 12.5306 13.8291 13.748 14.9033C15.0371 15.9775 15.6816 17.7679 15.6816 20.2744C15.6816 22.7093 15.0371 24.4639 13.748 25.5381C12.459 26.6123 10.6686 27.1494 8.37695 27.1494Z"
          fill="#12979B"
        />
      </svg>
      <div className={style.text__wrapper}>
        <p className={style.text}>{text}</p>
      </div>
      <div className={style.info__wrapper}>
        <div className={style.avatar__wrapper}>
          <p className={style.name__avatar}>{nameAvatar}</p>
        </div>
        <div className={style.info}>
          <div className={style.rate}></div>
          <Image loading="lazy" src={stars} alt={"rate stars"} />
          <p className={style.name}>{name}</p>
          <p className={style.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
