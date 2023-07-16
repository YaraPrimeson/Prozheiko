import { createTag, getTags } from "../../..//lib/tag";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { tags, error } = await getTags();
      console.log(tags);
      if (error) throw new Error(error);
      return res.status(200).json({ tags });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { tags, error } = await createTag(data);
      console.log(tags);
      if (error) throw new Error(error);
      return res.status(200).json({ tags });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;