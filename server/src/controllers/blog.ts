import { Request, Response } from "express";
import stringToObjectId from "../utils/stringToObjectId";
import blog from "../db/blog";

export default {
  async getBlogs(req: Request, res: Response) {
    try {
      const data = await blog.getBlogs();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
  async newBlog(req: Request, res: Response) {
    try {
      const data = req.body.data;
      await blog.createBlog(data);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    return res.json({
      message: "ok",
    });
  },
  async editBlog(req: Request, res: Response) {
    try {
      const data = req.body.data;
      const blogId = stringToObjectId(req.params.id);
      await blog.editBlog(blogId, data);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    return res.json({
      message: "ok",
    });
  },
  async deleteBlog(req: Request, res: Response) {
    try {
      const blogId = stringToObjectId(req.params.id);
      await blog.deleteBlog(blogId);
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
