import axios from "./axios";

export default {
  async getImages() {
    const { data } = await axios.get("/image/all");

    return data;
  },
  async createImage(newArticle) {
    const { data } = await axios.post("/image/upload", {
      data: newArticle,
    });

    return data;
  },
  async deleteImage(id) {
    const { data } = await axios.delete(`/image/${id}`);

    return data;
  },
};
