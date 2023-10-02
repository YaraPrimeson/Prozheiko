import { createTag, deleteTag, editTag, getTags } from "../../../lib/tag";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const tags = await getTags();
      return res.status(200).json({ tags });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const tag = req.body;
      const { error } = await createTag(tag);
      if (error) console.log("error", error);
      return res.status(200).json({ message: "created" });
    } catch (error) {
      return res.status(500).end();
    }
  }
  if (req.method === "PATCH") {
    const tag = JSON.parse(req.body);
    try {
      await editTag(tag);
      return res.status(200).json({ message: "edited" });
    } catch (error) {
      return res.status(500).end();
    }
  }
  if (req.method === "DELETE") {
    const id = req.body;
    try {
      await deleteTag(id);
      return res.status(200).json({ message: "deleted" });
    } catch (error) {
      return res.status(500).end();
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
