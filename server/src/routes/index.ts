import { Router } from "express";
import blog from "./blog";
import tag from "./tag";
import services from "./services";
import upload from "./upload";

const router = Router();

router.use("/blog", blog);
router.use("/services", services);
router.use("/tags", tag);
router.use("/image", upload);

export default router;
