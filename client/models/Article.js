// models/Article.js
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // Додайте інші поля за потребою, наприклад, автор, дата створення, теги тощо.
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
