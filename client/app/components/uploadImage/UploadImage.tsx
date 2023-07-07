import React, { useEffect, useState } from "react";
import style from "@/app/admin/admin-tab/blog/blog.module.scss";
import axios from "@/app/api/axios";

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  }, [file]);
  return (
    <div>
      <input
        onChange={handleFileChange}
        className={style.btn}
        type="file"
        accept="image/*"
      />
      <button onClick={handleFormSubmit}>submit</button>
      {imageUrl && (
        <img style={{ width: "50px", height: "50px" }} src={imageUrl} alt="" />
      )}
    </div>
  );
};

export default UploadImage;
