import {
  createSlide,
  deleteSlide,
  editSlide,
  getSliders,
} from "../../../lib/slider";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const slide = await getSliders();
      return res.status(200).json({ slide });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const slide = JSON.parse(req.body);
      await createSlide(slide);
      return res.status(200).json({ message: "created" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "PATCH") {
    try {
      const slide = JSON.parse(req.body);
      const updateSlide = await editSlide(slide);
      return res.status(200).json({ article: updateSlide });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    const id = req.body;
    try {
      await deleteSlide(id);
      return res.status(200).json({ message: "deleted" });
    } catch (error) {
      return res.status(500).end();
    }
  }
  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
