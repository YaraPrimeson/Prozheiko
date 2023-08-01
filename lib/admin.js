import prisma from "./prisma";

export async function getAdmin(token) {
  try {
    const admin = await prisma.slider.findUnique({
      where: {
        token,
      },
    });
    if (admin) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return console.log(error);
  }
}
