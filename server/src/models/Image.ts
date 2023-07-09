import mongoose, { Document } from "mongoose";
import IImage from "../interfaces/image.interface";

export interface IImageSchema extends IImage, Document {}

const ImageSchema = new mongoose.Schema(
  {
    filename: String,
    originalname: String,
    path: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IImageSchema>("Image", ImageSchema);
