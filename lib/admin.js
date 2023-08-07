import prisma from "./prisma";

export async function getAdmin(token) {
  try {
    return await prisma.admin.findUnique({
      where: {
        token,
        // id: "64c7bddfcb49dbf3d33616e6",
      },
    });
  } catch (error) {
    return console.log(error);
  }
}
