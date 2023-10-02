import {
  createArticle,
  deleteArticle,
  editArticle,
  getArticles,
} from "../../../lib/blog";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { tag } = req.query;
      const blog = await getArticles(tag);
      return res.status(200).json({ blog });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const article = req.body;
      await createArticle(article);
      return res.status(200).json({ message: "created" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "PATCH") {
    try {
      const article = JSON.parse(req.body);
      const updateArticle = await editArticle(article);
      return res.status(200).json({ article: updateArticle });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    const id = req.body;
    try {
      await deleteArticle(id);
      return res.status(200).json({ message: "deleted" });
    } catch (error) {
      return res.status(500).end(); // Помилка сервера
    }
  }
  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
