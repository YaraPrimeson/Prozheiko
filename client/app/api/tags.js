import axios from "./axios";

export default {
  async getTags() {
    const { data } = await axios.get("/tags/all");

    return data;
  },
  async createTag(tag) {
    const { data } = await axios.post("/tags/new", {
      tag,
    });

    return data;
  },
  async editTag(id, tag) {
    const { data } = await axios.patch(`/tags/edit/${id}`, {
      data: tag,
    });

    return data;
  },
  async deleteTag(id) {
    const { data } = await axios.delete(`/tags/${id}`);

    return data;
  },
};
