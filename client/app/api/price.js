import axios from "./axios";

export default {
  async getPrice() {
    const { data } = await axios.get("/price/all");

    return data;
  },
  async createPrice(newPrice) {
    const { data } = await axios.post("/price/create", {
      data: newPrice,
    });

    return data;
  },
  async editPrice(id, dataToUpdate) {
    const { data } = await axios.patch(`/price/edit/${id}`, {
      data: dataToUpdate,
    });

    return data;
  },
  async deletePrice(id) {
    const { data } = await axios.delete(`/price/${id}`);

    return data;
  },
};
