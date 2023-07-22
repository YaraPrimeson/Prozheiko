import { createArticle, getArticles } from "../../../lib/blog";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const blog = await getArticles();
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

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
