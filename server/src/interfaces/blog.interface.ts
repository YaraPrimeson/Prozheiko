import IBlock from "./block.interface";
import ITag from "./tag.interface";

export default interface IBlog {
  blocks: IBlock[];
  tag: ITag;
}
