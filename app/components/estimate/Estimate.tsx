"use client";
import React, { FC, useState } from "react";
import style from "./estimate.module.scss";

type EstimateProps = {
  like: string;
  dislike: string;
  id: string;
};
const Estimate: FC<EstimateProps> = ({ like, dislike, id }) => {
  const [likeState, setLikeState] = useState(like);
  const [dislikeState, setDislikeState] = useState(dislike);
  const fetchEvaluation = (likeProps: string, dislikeProps: string) => {
    return new Promise((resolve, reject) => {
      fetch(`/api/blog`, {
        method: "PATCH",
        body: JSON.stringify({
          like: likeProps,
          dislike: dislikeProps,
          id,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(({ article }) => {
          setLikeState(article.like);
          setDislikeState(article.dislike);
        })
        .catch((error) => reject(error));
    });
  };

  const takeEvaluation = (type: string) => {
    const evaluation = localStorage.getItem("idArticle");
    let likeCount;
    let dislikeCount;
    switch (type) {
      case "like": {
        if (evaluation === "dislike") {
          localStorage.setItem("idArticle", "like");
          likeCount = Number(likeState) + 1;
          dislikeCount =
            Number(dislikeState) >= 1
              ? Number(dislikeState) - 1
              : Number(dislikeState);
          setLikeState(likeCount.toString());
          setDislikeState(dislikeCount.toString());
          return fetchEvaluation(likeCount.toString(), dislikeCount.toString());
        } else if (evaluation === "like") {
          return;
        }
        localStorage.setItem("idArticle", "like");
        likeCount = Number(likeState) + 1;
        dislikeCount = dislikeState;
        setLikeState(likeCount.toString());
        return fetchEvaluation(likeCount.toString(), dislikeCount);
      }
      case "dislike": {
        if (evaluation === "dislike") {
          return;
        } else if (evaluation === "like") {
          localStorage.setItem("idArticle", "dislike");
          likeCount =
            Number(likeState) >= 1 ? Number(likeState) - 1 : Number(likeState);
          dislikeCount = Number(dislikeState) + 1;
          setLikeState(likeCount.toString());
          setDislikeState(dislikeCount.toString());
          return fetchEvaluation(likeCount.toString(), dislikeCount.toString());
        }
        localStorage.setItem("idArticle", "dislike");
        likeCount = likeState;
        dislikeCount = Number(dislikeState) + 1;
        setLikeState(likeCount.toString());
        setDislikeState(dislikeCount.toString());
        return fetchEvaluation(likeCount, dislikeCount.toString());
      }
      default:
        return;
    }
  };
  return (
    <div className={style.evaluation__container}>
      <h2 className={style.evaluation__title}>Як вам стаття?</h2>
      <div className={style.evaluation__icons__container}>
        <div className={style.icon__container}>
          <svg
            onClick={() => takeEvaluation("like")}
            className={style.icon}
            viewBox="0 0 53 54"
            fill={
              localStorage.getItem("idArticle") === "like" ? "#12979B" : "none"
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5186 41.2876L23.3644 46.6875C24.2477 47.5875 26.2352 48.0375 27.5602 48.0375H35.9519C38.6019 48.0375 41.4727 46.0125 42.1352 43.3125L47.4352 26.8876C48.5394 23.7376 46.5519 21.0376 43.2394 21.0376H34.4061C33.0811 21.0376 31.9769 19.9125 32.1977 18.3375L33.3019 11.1375C33.7436 9.11255 32.4186 6.86255 30.4311 6.18755C28.6644 5.51255 26.4561 6.41255 25.5727 7.76255L16.5186 21.4876"
              stroke="#79797A"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M5.25586 41.2879V19.2379C5.25586 16.0879 6.58086 14.9629 9.67253 14.9629H11.8809C14.9725 14.9629 16.2975 16.0879 16.2975 19.2379V41.2879C16.2975 44.4379 14.9725 45.5629 11.8809 45.5629H9.67253C6.58086 45.5629 5.25586 44.4379 5.25586 41.2879Z"
              stroke="#79797A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={style.evaluation__count}>{likeState}</span>
        </div>
        <div className={style.icon__container}>
          <svg
            onClick={() => takeEvaluation("dislike")}
            className={style.icon}
            viewBox="0 0 54 54"
            fill={
              localStorage.getItem("idArticle") === "dislike"
                ? "#12979B"
                : "none"
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.1699 12.7129L30.1949 7.31289C29.2949 6.41289 27.2699 5.96289 25.9199 5.96289H17.3699C14.6699 5.96289 11.7449 7.98789 11.0699 10.6879L5.66989 27.1129C4.54489 30.2629 6.56989 32.9629 9.94489 32.9629H18.9449C20.2949 32.9629 21.4199 34.0879 21.1949 35.6629L20.0699 42.8629C19.6199 44.8879 20.9699 47.1379 22.9949 47.8129C24.7949 48.4879 27.0449 47.5879 27.9449 46.2379L37.1699 32.5129"
              stroke="#79797A"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M48.6445 12.7125V34.7625C48.6445 37.9125 47.2945 39.0375 44.1445 39.0375H41.8945C38.7445 39.0375 37.3945 37.9125 37.3945 34.7625V12.7125C37.3945 9.5625 38.7445 8.4375 41.8945 8.4375H44.1445C47.2945 8.4375 48.6445 9.5625 48.6445 12.7125Z"
              stroke="#79797A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={style.evaluation__count}>{dislikeState}</span>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
