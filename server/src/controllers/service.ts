import { Request, Response } from "express";
import stringToObjectId from "../utils/stringToObjectId";
import blog from "../db/blog";
import service from "../db/service";

export default {
  async getServices(req: Request, res: Response) {
    try {
      const data = await service.getServices();
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: true });
    }
  },
  async newService(req: Request, res: Response) {
    try {
      const data = req.body.data;
      await service.createService(data);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    return res.json({
      message: "ok",
    });
  },
  async editService(req: Request, res: Response) {
    try {
      const data = req.body.data;
      const serviceId = stringToObjectId(req.params.id);
      await service.editService(serviceId, data);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
    return res.json({
      message: "ok",
    });
  },
  async deleteService(req: Request, res: Response) {
    try {
      const serviceId = stringToObjectId(req.params.id);
      await service.deleteService(serviceId);
      return res.json({
        message: "ok",
      });
    } catch (e) {
      return res.status(500).json({
        error: true,
      });
    }
  },
};
