import Tag from "../models/Tag";
import { Types } from "mongoose";
import ITag from "../interfaces/tag.interface";

export default {
  getTags() {
    return Tag.find();
  },
  createTag(name: ITag) {
    const tag = new Tag({
      tag: name,
    });
    return tag.save();
  },
  async editTag(_id: Types.ObjectId, name: ITag) {
    const tag = await Tag.findById(_id);
    if (!tag) return;

    // @ts-ignore
    tag["tag"] = name;

    return tag.save();
  },
  async deleteTag(_id: Types.ObjectId) {
    const tag = await Tag.findById(_id);
    if (!tag) return;

    return tag.delete({ _id });
  },
};
