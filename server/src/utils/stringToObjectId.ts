import mongoose from "mongoose";

const stringToObjectId = (string: string) =>
  new mongoose.Types.ObjectId(string);

export default stringToObjectId;
