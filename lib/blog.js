import prisma from "./prisma";

export async function getArticles() {
  try {
    return await prisma.article.findMany();
  } catch (error) {
    return console.log(error);
  }
}

export async function getArticle(id) {
  try {
    return await prisma.article.findUnique({ where: { id } });
  } catch (error) {
    return console.log(error);
  }
}

export async function createArticle(article) {
  try {
    return await prisma.article.create({
      data: {
        tag: article.tag,
        like: article.like,
        dislike: article.dislike,
        title: article.title,
        blocks: article.blocks,
        imageUrl: article.imageUrl,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteArticle(id) {
  try {
    return await prisma.article.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function editArticle(article) {
  try {
    return await prisma.article.update({
      where: { id: article.id },
      data: {
        article,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}
