import { Router } from "express";
import blog from "./blog";
import tag from "./tag";
import services from "./services";

const router = Router();

router.use("/blog", blog);
router.use("/services", services);
router.use("/tags", tag);

export default router;
