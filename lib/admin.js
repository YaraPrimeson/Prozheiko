import prisma from "./prisma";

export async function getAdmin(token) {
  try {
    return await prisma.admin.findFirst();
    //   {
    //       where: {
    //         token,
    //       },
    //     }
  } catch (error) {
    return console.log(error);
  }
}
