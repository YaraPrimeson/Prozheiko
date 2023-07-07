export default interface IImage {
  name: string;
  desc: string;
  img: {
    data: Buffer;
    contentType: string;
  };
}
