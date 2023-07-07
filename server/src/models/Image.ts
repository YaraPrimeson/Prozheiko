import mongoose, { Document, Schema } from "mongoose";
import IImage from "../interfaces/image.interface";

export interface IImageSchema extends IImage, Document {}
const imageSchema: Schema<IImageSchema> = new Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});
// export default mongoose.model<ITagSchema>("Image", imageSchema);
export default mongoose.model("Image", imageSchema);

// import mongoose, { Document, Schema } from "mongoose";
// import ITag from "../interfaces/tag.interface";

// export interface ITagSchema extends ITag, Document {}

// const TagSchema: Schema<ITagSchema> = new Schema(
//     {
//       tag: { type: String, required: true },
//     },
//     {
//       timestamps: true,
//       versionKey: false,
//     }
// );

// export default mongoose.model<ITagSchema>("Tag", TagSchema);
