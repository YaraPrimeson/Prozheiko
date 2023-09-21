import prisma from "./prisma";

export async function getServices(tag) {
  try {
    if (tag !== "Показати всі") {
      return await prisma.service.findMany({
        where: { tag },
      });
    } else {
      return await prisma.service.findMany();
    }
  } catch (error) {
    return console.log(error);
  }
}

export async function getService(urlName) {
  try {
    return await prisma.service.findFirst({ where: { urlName } });
  } catch (error) {
    return console.log(error);
  }
}

export async function createService(service) {
  try {
    return await prisma.service.create({
      data: service,
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteService(id) {
  try {
    return await prisma.service.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function editService(service) {
  try {
    return await prisma.service.update({
      where: { id: service.id },
      data: {
        service,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}
