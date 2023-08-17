import { getAdmin } from "../../../lib/admin";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { token } = req.query;
      const admin = await getAdmin(token);

      if (admin.token.toString() !== token.toString()) {
        return res.status(403).json({ message: "Forbidden" });
      }

      return res.status(200).json({ message: "admin" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
