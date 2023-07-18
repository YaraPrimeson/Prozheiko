import prisma from "./prisma";

export async function getTags() {
  try {
    console.log("get");
    const tags = await prisma.tag.findMany();
    return { tags };
  } catch (error) {
    return error;
  }
}

export async function createTag(tag) {
  try {
    // data: { tag: tagText, id: "6499d966b59507de1b520c91" },
    // const newTag = await prisma.tag.create({
    //   data: tag,
    // });

    // const newTag = await prisma.tag.create({
    const { data } = await prisma.tag.create({
      data: {
        tag: "new tag",
      },
    });
    // return { newTag };
    return console.log("data", data);
  } catch (error) {
    return console.log(error);
  }
}
