import prisma from "./prisma";

export async function getTags() {
  try {
    const tags = await prisma.tag.findMany();
    return { tags };
  } catch (error) {
    return error;
  }
}

export async function createTag(tagText) {
  try {
    const tag = await prisma.tag.create({
      data: {
        tag: tagText,
      },
    });
    return { tag };
  } catch (error) {
    return error;
  }
}
