import { getArticle, updateArticle } from "../../../../lib/blog";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const article = await getArticle(id);
      return res.status(200).json({ article });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "PATCH") {
    try {
      const { id } = req.query;
      const data = req.body;
      const article = await updateArticle(id, data);
      return res.status(200).json({ article });
      return res.status(200).json("ok");
    } catch (error) {
      return res.status(500).json({ error: "error.message" });
    }
  }
};
