import ITag from "./tag.interface";

export default interface IBlock {
  tag: ITag;
  type: "title" | "paragraph" | "img";
  value: string | File;
}
