import IBlock from "./block.interface";

export default interface IService {
  blocks: IBlock[];
  price: number;
  list: [string];
}
