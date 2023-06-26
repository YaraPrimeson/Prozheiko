import { Request, Response } from "express";
import stringToObjectId from "../utils/stringToObjectId";
import tag from "../db/tag";
import blog from "../db/blog";

export default {
  async getTags(req: Request, res: Response) {
    try {
      const data = await tag.getTags();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
  async newTag(req: Request, res: Response) {
    try {
      await tag.createTag(req.body.tag);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    return res.json({
      message: "ok",
    });
  },
  async editTag(req: Request, res: Response) {
    try {
      const data = req.body.data;
      const tagId = stringToObjectId(req.params.id);
      await tag.editTag(tagId, data);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    return res.json({
      message: "ok",
    });
  },
  async deleteTag(req: Request, res: Response) {
    try {
      const tagId = stringToObjectId(req.params.id);
      await tag.deleteTag(tagId);
      return res.json({
        message: "ok",
      });
    } catch (e) {
      return res.status(500).json({
        error: true,
      });
    }
  },
};
