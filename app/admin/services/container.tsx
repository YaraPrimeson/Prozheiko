"use client";
import React, { useEffect, useState } from "react";
import ServiceCreateModal from "@/app/admin/services/service-create-modal";
import style from "@/app/admin/blog/blog.module.scss";
import globalS from "@/app/styles/global.module.scss";
import { Service, Tag } from "@prisma/client";
import ServiceEditModal from "@/app/admin/services/service-edit-modal";
import ServiceDeleteModal from "@/app/admin/services/service-delete-modal";

const Container = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loadingServices, setLoadingServices] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingTags, setLoadingTags] = useState<boolean>(true);

  function fetchServices() {
    setLoadingServices(true);
    return new Promise((resolve, reject) => {
      fetch(`/api/services`)
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
      fetch("/api/tags")
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

  useEffect(() => {
    fetchServices()
      .then((data: any) => {
        setServices(data.services);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    fetchTags()
      .then((data: any) => {
        setTags(data.tags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <ServiceCreateModal
        fetchServices={fetchServices}
        setServices={setServices}
        tags={tags}
      />
      <div className={style.container}>
        {services
          .sort((a: any, b: any) => a.tag.localeCompare(b.tag))
          .map((service: Service, index: number) => {
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
                <div key={service.id} className={style.wrapper}>
                  <img
                    className={style.img}
                    src={service.imageUrl}
                    alt={service.title}
                  />
                  <h1 className={style.title}>{service?.title}</h1>
                  <div className={globalS.btns__edit__wrapper}>
                    <ServiceEditModal
                      fetchServices={fetchServices}
                      setServices={setServices}
                      service={service}
                    />
                    <ServiceDeleteModal
                      fetchServices={fetchServices}
                      setServices={setServices}
                      id={service.id}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Container;
