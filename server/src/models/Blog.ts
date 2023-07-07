import mongoose, { Document, Schema } from "mongoose";
import IBlog from "../interfaces/blog.interface";
import IBlock from "../interfaces/block.interface";

const BlockSchema: Schema<IBlock> = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
  img: {
    type: Schema.Types.Mixed,
    data: Buffer,
    contentType: String,
  },
});

export interface IBlogSchema extends IBlog, Document {}

const BlogSchema: Schema<IBlogSchema> = new Schema(
  {
    blocks: { type: [BlockSchema], required: true },
    tag: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IBlogSchema>("Blog", BlogSchema);
