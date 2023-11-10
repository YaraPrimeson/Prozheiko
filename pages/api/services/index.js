import {
  createService,
  deleteService,
  editService,
  getServices,
} from "../../../lib/service";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { tag } = req.query;
      const services = await getServices(tag);
      return res.status(200).json({ services });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const service = JSON.parse(req.body);
      console.log(service);
      const newService = await createService(service);
      return res.status(200).json({ message: "created" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "PATCH") {
    try {
      const article = JSON.parse(req.body);
      await editService(article);
      return res.status(200).json({ message: "edited" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "DELETE") {
    const id = req.body;
    try {
      await deleteService(id);
      return res.status(200).json({ message: "deleted" });
    } catch (error) {
      return res.status(500).end(); // Помилка сервера
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
