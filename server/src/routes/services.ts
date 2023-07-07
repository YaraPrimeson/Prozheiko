import { Router } from "express";
import checkAccess from "../middlewares/checkAdmin";
import service from "../controllers/service";

const router = Router();

router.get("/all", service.getServices);
router.get("/:id", service.getService);
router.post("/create", service.newService);
router.patch("/edit/:id", service.editService);
router.delete("/:id", service.deleteService);

export default router;
