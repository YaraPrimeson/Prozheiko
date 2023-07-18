"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import style from "./slider.module.scss";
import Slide1 from "../../assets/images/Slider.webp";
import Slide2 from "../../assets/images/doctors.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const items = [
    {
      name: "Image 1",
      image: Slide1,
    },
    {
      name: "Image 2",
      image: Slide2,
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {items.map((image) => (
          <div key={image.name}>
            <Image className={style.img} src={image.image} alt={image.name} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderSlick;
