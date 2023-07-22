import prisma from "./prisma";

export async function getTags() {
  try {
    return await prisma.tag.findMany();
  } catch (error) {
    return console.log(error);
  }
}

export async function createTag(tag) {
  try {
    return await prisma.tag.create({
      data: {
        tag: tag,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}
