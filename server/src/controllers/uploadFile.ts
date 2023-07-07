import { Request, Response } from "express";
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
});

const Image = mongoose.model("Image", imageSchema);
export default {
  async uploadFile(req: Request, res: Response) {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "File missing" });
      }

      const image = new Image({
        filename: file.filename,
        originalname: file.originalname,
        path: file.path,
      });

      const data = await image.save();
      // .then(() => {
      //   res.status(200).json({ message: "ok" });
      // })
      // .catch((error) => {
      //   console.error(error);
      //   res.status(500).send("Помилка при збереженні зображення");
      // });
      return res.json(data);
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
};
