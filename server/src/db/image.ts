import { Types } from "mongoose";
import Image from "../models/Image";
import IImage from "../interfaces/image.interface";

export default {
  getImages() {
    return Image.find().sort({ createdAt: -1 });
  },
  getImage(_id: Types.ObjectId) {
    return Image.findById(_id);
  },
  createImage(file: IImage) {
    const image = new Image({
      filename: file.filename,
      originalName: file.originalname,
      path: file.path,
    });
    return image.save();
  },

  async deleteImage(_id: Types.ObjectId) {
    const image = await Image.findById(_id);
    if (!image) return;

    return image.delete({ _id });
  },
};
