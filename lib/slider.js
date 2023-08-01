import prisma from "./prisma";

export async function getSliders() {
  try {
    return await prisma.slider.findMany();
  } catch (error) {
    return console.log(error);
  }
}

export async function createSlide(slide) {
  try {
    return await prisma.slider.create({
      data: {
        imageUrl: slide.imageUrl,
        href: slide.href,
        description: slide.description,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteSlide(id) {
  try {
    return await prisma.slider.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function editSlide(slider) {
  try {
    return await prisma.slider.update({
      where: { id: slider.id },
      data: {
        imageUrl: slider.imageUrl,
        href: slider.href,
        description: slider.description,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}
