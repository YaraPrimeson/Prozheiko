export default interface IBlock {
  type: "title" | "subtitle" | "list" | "paragraph" | "img";
  value: string | File | string[];
  img?: { data: Buffer; contentType: String };
}
