"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "@/app/admin/admin-tab/blog/blog.module.scss";
import { AppContext } from "@/app/context/Context";
import ModalContainer from "@/app/components/modal/ModalContainer";
import Image from "next/image";

const UploadImage = () => {
  const { getAllImages, images } = useContext(AppContext);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleFileChange = (event: any) => {
    console.log(event);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const handleFormSubmit = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const options = {
          method: "POST",
          body: formData,
          enctype: "multipart/form-data",
          credentials: "include" as RequestCredentials,
        };
        const data = fetch(`http://localhost:5050/api/image/upload`, options);
        return (await data).json();
        // await axios.post("http://localhost:5050/api/image/upload", options);
        // console.log("Зображення успішно завантажено");
      } catch (error) {
        console.error("Помилка при завантаженні зображення:", error);
      }
    }
  };

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setImageUrl(imageUrl);
    }
    getAllImages();
  }, [file]);

  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <div>
      {/*<button onClick={() => setOpenModal(true)}>add img</button>*/}
      <label className={style.btn}>
        add img
        <input
          onChange={handleFileChange}
          // className={style.btn}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
        />
      </label>
      <button onClick={handleFormSubmit}>submit</button>
      {imageUrl && (
        <img style={{ width: "50px", height: "50px" }} src={imageUrl} alt="" />
      )}
      <ModalContainer open={openModal} handleClose={() => setOpenModal(false)}>
        <div style={{ width: "400px", height: "200px" }}>
          {images.map((img: any) => (
            <img
              key={img._id}
              style={{ width: "50px", height: "50px" }}
              src={`/public/uploads/${img.filename}`}
              alt=""
            />
          ))}
          {/*<img*/}
          {/*  style={{ width: "50px", height: "50px" }}*/}
          {/*  src={*/}
          {/*    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"*/}
          {/*  }*/}
          {/*  alt=""*/}
          {/*/>*/}
        </div>
      </ModalContainer>
    </div>
  );
};

export default UploadImage;
