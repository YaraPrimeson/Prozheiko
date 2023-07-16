import { createTagFlag, getAllTags } from "../../../prisma/tag";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST": {
        const { tag } = req.body;
        const newTag = await createTagFlag(tag);
        return res.status(200).json(newTag);
      }
      case "GET": {
        const tags = await getAllTags();
        return res.status(200).json(tags);
      }
    }
  } catch (e) {
    console.log(e);
  }
}
