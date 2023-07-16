import prisma from "./prisma";

export async function getTags() {
  try {
    const tags = await prisma.tag.findMany();
    return tags;
  } catch (error) {
    return error;
  }
}

export async function createTag(tag: string) {
  try {
    const newTag = await prisma.tag.create({
      data: {
        tag,
      },
    });
    console.log("newTag", newTag);
    return "chichi";
  } catch (error) {
    return error;
  }
}
