"use client";
import React, { useEffect, useState } from "react";
import { Service, Tag } from "@prisma/client";
import TagList from "@/app/components/tag-list/TagList";
import style from "@/app/services/services.module.scss";
import ServiceCard from "@/app/services/service-card";
import { Skeleton } from "@mui/material";

const ServiceList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loadingServices, setLoadingServices] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(true);
  const [activeTag, setActiveTag] = useState("Показати всі");

  function fetchArticles() {
    setLoadingServices(true);
    return new Promise((resolve, reject) => {
      fetch(
        `http://localhost:3000/api/services?tag=${encodeURIComponent(
          activeTag
        )}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => setLoadingServices(false));
    });
  }

  function fetchTags() {
    setLoadingTags(true);
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/api/tags")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => setLoadingTags(false));
    });
  }

  const chooseTag = (tag: string) => {
    setActiveTag(tag);
  };

  useEffect(() => {
    fetchTags()
      .then((data: any) => {
        setTags(data.tags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchArticles()
      .then((data: any) => {
        setServices(data.services);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [activeTag]);

  return (
    <>
      <section>
        <TagList
          tags={tags}
          activeTag={activeTag}
          handleActiveTag={chooseTag}
          loading={loadingTags}
        />
      </section>
      <section className={style.service__list}>
        {loadingServices ? (
          <div className={style.service__list}>
            {Array.from(new Array(4)).map(() => (
              <div key={Math.random()} className={style.card}>
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  sx={{ borderRadius: "10px" }}
                  width={"40%"}
                  height={400}
                />
                <div className={style.wrapper}>
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "10rem" }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "5rem" }}
                  />
                  <div className={style.btn__container}>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={240}
                      height={45}
                    />
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={100}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          services?.map((service, index) => {
            const isFirstTag =
              index === 0 || service.tag !== services[index - 1].tag;
            return (
              <React.Fragment key={index}>
                {isFirstTag && (
                  <div>
                    <h3 className={style.tag__title}>{service.tag}</h3>
                    <span className={style.tag__title__line}></span>
                  </div>
                )}
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  text={service?.text ?? ""}
                  img={service.imageUrl}
                  price={service.price}
                  list={service.list}
                  id={service.id}
                />
              </React.Fragment>
            );
          })
        )}
      </section>
    </>
  );
};

export default ServiceList;
