import mongoose, { Document, Schema } from "mongoose";
import ITag from "../interfaces/tag.interface";

export interface ITagSchema extends ITag, Document {}

const TagSchema: Schema<ITagSchema> = new Schema(
  {
    tag: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<ITagSchema>("Tag", TagSchema);
