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
        tag,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function editTag(tag) {
  try {
    return await prisma.tag.update({
      where: { id: tag.id },
      data: {
        tag: tag.tag,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteTag(id) {
  try {
    return await prisma.tag.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(error);
  }
}
