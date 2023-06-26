import { Types } from "mongoose";
import Blog from "../models/Blog";
import IBlog from "../interfaces/blog.interface";

export default {
  getBlogs() {
    return Blog.find().sort({ createdAt: -1 });
  },
  createBlog(data: IBlog) {
    const blog = new Blog(data);
    return blog.save();
  },
  async editBlog(_id: Types.ObjectId, dataToUpdate: Partial<IBlog>) {
    const blog = await Blog.findById(_id);
    if (!blog) return;
    for (let key in dataToUpdate) {
      //   @ts-ignore
      blog[key] = dataToUpdate[key];
    }
    return blog.save();
  },
  async deleteBlog(_id: Types.ObjectId) {
    const blog = await Blog.findById(_id);
    if (!blog) return;

    return blog.delete({ _id });
  },
};
