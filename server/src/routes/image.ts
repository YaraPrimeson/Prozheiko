import { Router } from "express";

import multer from "multer";
import uploadFile from "../controllers/uploadFile";
import path from "path";

const router = Router();

const storage = multer.diskStorage({
  // destination: "./uploads",
  destination: "../client/public",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const image = multer({
  storage: storage,
});

router.get("/all", image.single("image"), uploadFile.getImages);
router.post("/upload", image.single("image"), uploadFile.uploadFile);
router.delete("/:id", image.single("image"), uploadFile.deleteImage);

export default router;
