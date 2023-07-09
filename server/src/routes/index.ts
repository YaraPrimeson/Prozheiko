import { Router } from "express";
import blog from "./blog";
import tag from "./tag";
import services from "./services";
import image from "./image";

const router = Router();

router.use("/blog", blog);
router.use("/services", services);
router.use("/tags", tag);
router.use("/image", image);

export default router;
