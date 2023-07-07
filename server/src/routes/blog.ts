import { Router } from "express";
import checkAccess from "../middlewares/checkAdmin";
import blog from "../controllers/blog";

const router = Router();

router.get("/all", blog.getBlogs);
router.get("/:id", blog.getBlog);
router.delete("/:id", blog.deleteBlog);
router.post("/create", blog.newBlog);
router.patch("/edit/:id", blog.editBlog);

export default router;
