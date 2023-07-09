import { useState } from "react";
import Page from "@/app/admin/page";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { id } = await response.json();
        // Використовуйте отриманий ідентифікатор для подальшої роботи з зображенням
        console.log("Image uploaded successfully with ID:", id);
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
export default ImageUpload;
