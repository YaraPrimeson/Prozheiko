import multer from "multer";

import { createImage, getImages } from "../../lib/upload.js";

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { images, error } = await getImages();
      if (error) throw new Error(error);
      return res.status(200).json({ images });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  if (req.method === "POST") {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to upload image" });
      }
      try {
        const { originalname, mimetype, path } = req.file;
        const uploadedImage = await createImage(originalname, mimetype, path);
        // const uploadedImage = await prisma.image.create({
        //   data: {
        //     originalname,
        //     mimetype,
        //     path,
        //   },
        // });

        res.status(200).json({ uploadedImage });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save image in database" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
