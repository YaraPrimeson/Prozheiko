"use client";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    if (!file) return;
    formData.append("image", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
        setFile(null);
      } else {
        alert("Error uploading image");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading image");
    }
  };
  const getImages = async () => {
    try {
      const response = await fetch("/api/upload");

      if (response.ok) {
        alert("Image uploaded successfully!");
        setFile(null);
      } else {
        alert("Error uploading image");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading image");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload Image
      </button>
      <button onClick={getImages}>getImages</button>
    </div>
  );
};

export default ImageUpload;
