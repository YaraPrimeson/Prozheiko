import { Types } from "mongoose";

import Service from "../models/Service";
import IService from "../interfaces/service.interface";

export default {
  getServices() {
    return Service.find().sort({ createdAt: -1 });
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
