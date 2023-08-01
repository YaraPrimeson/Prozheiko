import { createService, getServices } from "../../../lib/service";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const services = await getServices();
      return res.status(200).json({ services });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const article = req.body;
      await createService(article);
      return res.status(200).json({ message: "created" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
