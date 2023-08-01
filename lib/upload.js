import prisma from "./prisma";

export async function getImages() {
  try {
    return await prisma.image.findMany();
  } catch (error) {
    return console.log(error);
  }
}

export async function createImage(filename, path) {
  try {
    return prisma.image.create({
      data: {
        filename,
        filepath: path,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteTag(id) {
  try {
    return await prisma.image.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(error);
  }
}
