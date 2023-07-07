import { Router } from "express";

import multer from "multer";
import uploadFile from "../controllers/uploadFile";
import path from "path";

const router = Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
});

router.get("/upload", upload.single("image"), uploadFile.uploadFile);
router.post("/upload", upload.single("image"), uploadFile.uploadFile);

export default router;
