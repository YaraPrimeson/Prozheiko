import mongoose, { Document, Schema } from "mongoose";
import IService from "../interfaces/service.interface";
import IBlock from "../interfaces/block.interface";

const BlockSchema: Schema<IBlock> = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

export interface IServiceSchema extends IService, Document {}

const ServiceSchema: Schema<IServiceSchema> = new Schema(
  {
    blocks: { type: [BlockSchema], required: true },
    price: { type: Number, required: true },
    list: { type: [String] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IServiceSchema>("Service", ServiceSchema);
