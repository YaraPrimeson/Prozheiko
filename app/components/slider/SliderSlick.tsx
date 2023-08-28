"use client";
import React, { useEffect, useState } from "react";
import style from "./slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { Skeleton } from "@mui/material";
import Image from "next/image";
// import Slider1 from "../../assets/images/slider/Slider.webp";
// import Slider2 from "../../assets/images/slider/slider2.webp";

type sliderType = {
  imageUrl: string;
  description: string;
  href: string;
  id: string;
};
const SliderSlick = () => {
  // const slides = [
  //   {
  //     description: "місце здорових усмішок!",
  //     href: "https://prozheiko.kiev.ua/",
  //     id: "64c7ed01b58a5b4223e35a82",
  //     imageUrl: Slider1,
  //   },
  //   {
  //     description: "місце здорових усмішок!",
  //     href: "https://prozheiko.kiev.ua/",
  //     id: "64c7ed01b58a5b4223e35a82",
  //     imageUrl: Slider2,
  //   },
  // ];
  const [slides, setSlides] = useState<sliderType[]>([]);
  const [loadingSlides, setLoadingSlides] = useState<boolean>(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function getSlides() {
    setLoadingSlides(true);
    return new Promise((resolve, reject) => {
      fetch(`/api/slider`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error))
        .finally(() => setLoadingSlides(false));
    });
  }

  useEffect(() => {
    getSlides()
      .then((data: any) => {
        setSlides(data.slide);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (loadingSlides) {
    return (
      <div className={style.container}>
        <Skeleton
          className={style.skeleton}
          variant="rounded"
          animation="wave"
        />
      </div>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className={style.container}>
            <Link href={slide.href}>
              <Image
                className={style.img}
                src={slide.imageUrl}
                alt={slide.description}
                width={1400}
                height={500}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderSlick;
