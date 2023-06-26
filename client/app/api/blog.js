import axios from "./axios";

export default {
  async getBlog() {
    const { data } = await axios.get("/blog/all");

    return data;
  },
  async createBlog(newArticle) {
    const { data } = await axios.post("/blog/create", {
      data: newArticle,
    });

    return data;
  },
  async editBlog(id, dataToUpdate) {
    const { data } = await axios.patch(`/blog/edit/${id}`, {
      data: dataToUpdate,
    });

    return data;
  },
  async deleteBlog(id) {
    const { data } = await axios.delete(`/blog/${id}`);

    return data;
  },
};
