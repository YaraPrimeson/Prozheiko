import { getServices } from "../../../../lib/service";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const article = await getServices(id);
      return res.status(200).json({ article });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
