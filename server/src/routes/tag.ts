import { Router } from "express";
import tag from "../controllers/tag";
import checkAccess from "../middlewares/checkAdmin";

const router = Router();

router.get("/all", tag.getTags);
router.post("/new", tag.newTag);
router.patch("/edit/:id", tag.editTag);
router.delete("/:id", tag.deleteTag);

export default router;
