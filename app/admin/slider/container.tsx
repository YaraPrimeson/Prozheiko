"use client";
import React, { useEffect, useState } from "react";
import SliderModalCreate from "@/app/admin/slider/slider-modal-create";
import style from "@/app/admin/blog/blog.module.scss";
import { Slider } from "@prisma/client";
import globalS from "@/app/styles/global.module.scss";
import SliderModalEdit from "@/app/admin/slider/slider-modal-edit";
import SliderModalDelete from "@/app/admin/slider/slider-modal-delete";

const Container = () => {
  const [slider, setSlider] = useState<Slider[]>([]);
  const [loadingSlider, setLoadingSlider] = useState<boolean>(true);

  function fetchSlider() {
    setLoadingSlider(true);
    return new Promise((resolve, reject) => {
      fetch("/api/slider")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => setLoadingSlider(false));
    });
  }

  useEffect(() => {
    fetchSlider()
      .then((data: any) => {
        setSlider(data.slide);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <SliderModalCreate fetchSlider={fetchSlider} setSlider={setSlider} />
      <div className={style.container}>
        {slider?.map((slide: Slider, index: number) => {
          return (
            <React.Fragment key={index}>
              <div key={slide.id} className={style.wrapper}>
                <img
                  className={style.img}
                  src={slide.imageUrl}
                  alt={slide.href}
                />
                <div className={globalS.btns__edit__wrapper}>
                  <SliderModalEdit
                    fetchSlider={fetchSlider}
                    setSlider={setSlider}
                    slide={slide}
                  />
                  <SliderModalDelete
                    fetchSlider={fetchSlider}
                    setSlider={setSlider}
                    id={slide.id}
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
