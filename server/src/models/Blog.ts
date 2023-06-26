import mongoose, { Document, Schema } from "mongoose";
import IBlog from "../interfaces/blog.interface";

export interface IBlock {
  type: string;
  value: string;
}

const BlockSchema: Schema<IBlock> = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

export interface IBlogSchema extends IBlog, Document {}

const BlogSchema: Schema<IBlogSchema> = new Schema(
  {
    blocks: { type: [BlockSchema], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IBlogSchema>("Blog", BlogSchema);
