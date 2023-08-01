import multer from "multer";
import bodyParser from "body-parser";
import { createImage, getImages } from "../../../lib/upload";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const images = await getImages();
      res.status(200).json({ images });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    const upload = multer({ dest: "uploads/" });
    const jsonParser = bodyParser.json();

    // jsonParser(req, res, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({ error: "Error parsing JSON data" });
    //   }

    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error uploading image" });
      }

      const { filename, path } = req.file;
      try {
        const image = await createImage(filename, path);
        res.status(201).json(image);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating image record" });
      }
    });
    // });
  }
};

export default handler;
