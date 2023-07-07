import { Types } from "mongoose";

import Service from "../models/Service";
import IService from "../interfaces/service.interface";
import Blog from "../models/Blog";

export default {
  getServices() {
    return Service.find().sort({ createdAt: -1 });
  },
  getService(_id: Types.ObjectId) {
    return Service.findById(_id);
  },
  createService(data: IService) {
    const service = new Service(data);
    return service.save();
  },
  async editService(_id: Types.ObjectId, dataToUpdate: Partial<IService>) {
    const service = await Service.findById(_id);
    if (!service) return;
    for (let key in dataToUpdate) {
      //   @ts-ignore
      service[key] = dataToUpdate[key];
    }
    return service.save();
  },
  async deleteService(_id: Types.ObjectId) {
    const service = await Service.findById(_id);
    if (!service) return;

    return service.delete({ _id });
  },
};
