// pages/api/create-article.js
import Article from "../../models/Article";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, content } = req.body;

      const article = new Article({
        title,
        content,
      });

      await article.save();

      res.status(201).json({ message: "Article created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to create article" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
