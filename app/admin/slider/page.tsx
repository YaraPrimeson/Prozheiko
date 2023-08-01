import React, { Suspense } from "react";
import { getSliders } from "@/lib/slider";
import Header from "@/app/admin/header";
import style from "@/app/admin/blog/blog.module.scss";
import globalS from "@/app/styles/global.module.scss";
import SliderModalCreate from "@/app/admin/slider/slider-modal-create";
import SliderModalEdit from "@/app/admin/slider/slider-modal-edit";
import SliderModalDelete from "@/app/admin/slider/slider-modal-delete";
import { Slider } from "@prisma/client";

const Page = async () => {
  const slider: any = await getSliders();
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading ...</div>}>
        <SliderModalCreate />
        <div className={style.container}>
          {slider.map((slide: Slider, index: number) => {
            return (
              <React.Fragment key={index}>
                <div key={slide.id} className={style.wrapper}>
                  <img
                    className={style.img}
                    src={slide.imageUrl}
                    alt={slide.href}
                  />
                  <div className={globalS.btns__edit__wrapper}>
                    <SliderModalEdit slide={slide} />
                    <SliderModalDelete id={slide.id} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </Suspense>
    </>
  );
};

export default Page;
