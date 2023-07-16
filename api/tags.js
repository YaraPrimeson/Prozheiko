// import axios from "./axios";

// export default {
// async getTags() {
//   const { data } = await axios.get("/tags/all");
//
//   return data;
// },
// async createTag(tag) {
//   const { data } = await axios.post("/tags/new", {
//     tag,
//   });
//
//   return data;
// },
// async editTag(id, tag) {
//   const { data } = await axios.patch(`/tags/edit/${id}`, {
//     data: tag,
//   });
//
//   return data;
// },
// async deleteTag(id) {
//   const { data } = await axios.delete(`/tags/${id}`);
//
//   return data;
// },
// };

import { createTag, getTags } from "../../lib/tag";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { images, error } = await getTags();
      if (error) throw new Error(error);
      return res.status(200).json({ images });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === "POST") {
    try {
      const tagText = req.body.data;
      const uploadedTag = await createTag(tagText);

      res.status(200).json({ uploadedTag });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to save image in database" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
