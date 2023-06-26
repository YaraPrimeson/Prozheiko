"use client";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import Slide1 from "../../assets/images/Slider.webp";
import Slide2 from "../../assets/images/doctors.webp";

const Slider = () => {
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
    <Carousel height={"500px"} animation="slide">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item }: any) => (
  <Paper
    sx={{
      width: "100%",
      minHeight: "500px",
      height: "auto",
      maxHeight: "500px",
    }}
  >
    <Image
      loading="lazy"
      src={item.image}
      style={{
        maxHeight: "550px",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
      alt={item.name}
    />
  </Paper>
);

export default Slider;
