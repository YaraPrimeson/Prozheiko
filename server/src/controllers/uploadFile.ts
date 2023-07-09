import { Request, Response } from "express";
import image from "../db/image";

export default {
  async getImages(req: Request, res: Response) {
    try {
      const data = await image.getImages();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
  async uploadFile(req: Request, res: Response) {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "File missing" });
      }
      await image.createImage(file);
      return res.json({
        message: "ok",
      });
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
  async deleteImage(req: Request, res: Response) {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "File missing" });
      }
      await image.createImage(file);
      return res.json({
        message: "ok",
      });
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
};
