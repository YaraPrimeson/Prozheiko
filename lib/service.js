import prisma from "./prisma";

export async function getServices() {
  try {
    return await prisma.service.findMany();
  } catch (error) {
    return console.log(error);
  }
}
export async function getService(id) {
  try {
    return await prisma.service.findUnique({ where: { id } });
  } catch (error) {
    return console.log(error);
  }
}

export async function createService(article) {
  console.log(article);
  try {
    return await prisma.service.create({
      data: article,
    });
  } catch (error) {
    return console.log(error);
  }
}
